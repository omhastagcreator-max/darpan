// ============================================================
// Rate limiting — Upstash Redis token bucket per IP / key.
//
// Falls back to a no-op limiter in dev (or when @upstash/* isn't
// installed yet) so local development isn't blocked. In production
// the missing env vars are caught by the deploy checklist.
//
// Usage:
//   const { success } = await ratelimit.limit(`seed:${ip}`)
//   if (!success) return new Response('Rate limited', { status: 429 })
// ============================================================

interface LimitResult {
  success: boolean
  limit: number
  remaining: number
  reset: number
}

interface Limiter {
  limit: (key: string) => Promise<LimitResult>
}

// In-memory fallback so local dev (and tests) don't need Upstash.
function inMemoryLimiter(max: number, windowMs: number): Limiter {
  const store = new Map<string, { count: number; resetAt: number }>()
  return {
    async limit(key: string): Promise<LimitResult> {
      const now = Date.now()
      const entry = store.get(key)
      if (!entry || entry.resetAt < now) {
        store.set(key, { count: 1, resetAt: now + windowMs })
        return { success: true, limit: max, remaining: max - 1, reset: now + windowMs }
      }
      if (entry.count >= max) {
        return { success: false, limit: max, remaining: 0, reset: entry.resetAt }
      }
      entry.count++
      return { success: true, limit: max, remaining: max - entry.count, reset: entry.resetAt }
    },
  }
}

interface UpstashRatelimitCtor {
  new (opts: { redis: unknown; limiter: unknown; analytics: boolean; prefix: string }): Limiter
  slidingWindow: (max: number, window: string) => unknown
}

interface UpstashRedisCtor {
  new (opts: { url: string; token: string }): unknown
}

function loadUpstash(): { Ratelimit: UpstashRatelimitCtor; Redis: UpstashRedisCtor } | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const r1 = require('@upstash/ratelimit') as { Ratelimit: UpstashRatelimitCtor }
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const r2 = require('@upstash/redis') as { Redis: UpstashRedisCtor }
    return { Ratelimit: r1.Ratelimit, Redis: r2.Redis }
  } catch {
    return null
  }
}

function build(prefix: string, max: number, window: string, fallbackWindowMs: number): Limiter {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  const upstash = loadUpstash()

  if (!url || !token || !upstash) {
    if (process.env.NODE_ENV === 'production') {
      console.warn(
        `[ratelimit] Upstash env vars or package missing — using in-memory limiter. ` +
          `This is NOT safe in a multi-instance prod deploy. ` +
          `Install @upstash/ratelimit + @upstash/redis and set ` +
          `UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN.`,
      )
    }
    return inMemoryLimiter(max, fallbackWindowMs)
  }

  const redis = new upstash.Redis({ url, token })
  return new upstash.Ratelimit({
    redis,
    limiter: upstash.Ratelimit.slidingWindow(max, window),
    analytics: true,
    prefix,
  })
}

// Used by /api/seed — small allowance, long window.
export const ratelimit: Limiter = build('apurti:seed', 3, '10 m', 10 * 60 * 1000)

// Used by login flow / auth callback — discourage credential stuffing.
export const authRatelimit: Limiter = build('apurti:auth', 10, '1 m', 60 * 1000)

// Used by write-heavy server actions (admin: register distributor, etc.).
export const writeRatelimit: Limiter = build('apurti:write', 30, '1 m', 60 * 1000)
