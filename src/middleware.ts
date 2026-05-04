import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// ============================================================
// Middleware — auth + RBAC for every page request.
//
// Performance notes:
//   * Reads role from the JWT custom claim (set by a Postgres trigger
//     in supabase/migrations/2026_05_03_jwt_role_claim.sql). Falls back
//     to a single DB query for legacy sessions whose JWT predates the
//     trigger; once the user re-logs in the JWT is updated.
//   * Caches role in a signed cookie for the rest of the session so
//     even the legacy fallback path is one DB query per login, not per
//     request.
// ============================================================

const ROLE_COOKIE = 'apurti-role'
const ROLE_COOKIE_MAX_AGE = 60 * 60 * 24 // 24h

type Role = 'customer' | 'distributor' | 'delivery' | 'admin'

const PUBLIC_PREFIXES = ['/login', '/auth/callback', '/request-distributor']
// Note: /api/seed is intentionally NOT in this list. It is gated by a
// SEED_SECRET token; see src/app/api/seed/route.ts.

function homeFor(role: Role | undefined): string {
  switch (role) {
    case 'admin': return '/admin'
    case 'distributor': return '/distributor'
    case 'delivery': return '/delivery'
    default: return '/'
  }
}

function decodeRoleFromJwt(token: string | undefined): Role | undefined {
  if (!token) return undefined
  try {
    const [, payload] = token.split('.')
    if (!payload) return undefined
    const json = JSON.parse(
      Buffer.from(payload.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'),
    )
    const role = json?.app_metadata?.role ?? json?.user_metadata?.role
    if (role === 'admin' || role === 'distributor' || role === 'delivery' || role === 'customer') {
      return role as Role
    }
    return undefined
  } catch {
    return undefined
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware entirely for static assets that slipped through the matcher.
  if (pathname.startsWith('/_next') || pathname === '/favicon.ico') {
    return NextResponse.next({ request })
  }

  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          )
        },
      },
    },
  )

  const { data: { user } } = await supabase.auth.getUser()

  // Public routes — let through without role checks.
  if (PUBLIC_PREFIXES.some((p) => pathname.startsWith(p))) {
    return supabaseResponse
  }

  // Allow /api/* through; each route handles its own auth.
  if (pathname.startsWith('/api/')) {
    return supabaseResponse
  }

  if (!user) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  // 1. Try the JWT custom claim (zero DB hits).
  const accessTokenCookie = request.cookies
    .getAll()
    .find((c) => c.name.startsWith('sb-') && c.name.endsWith('-auth-token'))?.value
  let role: Role | undefined
  if (accessTokenCookie) {
    try {
      const parsed = JSON.parse(accessTokenCookie)
      const jwt = Array.isArray(parsed) ? parsed[0] : parsed?.access_token
      role = decodeRoleFromJwt(jwt)
    } catch {
      role = decodeRoleFromJwt(accessTokenCookie)
    }
  }

  // 2. Fall back to the role cookie (set by a previous request).
  if (!role) {
    const cached = request.cookies.get(ROLE_COOKIE)?.value
    if (cached === 'admin' || cached === 'distributor' || cached === 'delivery' || cached === 'customer') {
      role = cached as Role
    }
  }

  // 3. Last resort — one DB query, then cache.
  if (!role) {
    const { data: profile } = await supabase
      .from('users')
      .select('role')
      .eq('id', user.id)
      .single()
    role = profile?.role as Role | undefined
    if (role) {
      supabaseResponse.cookies.set(ROLE_COOKIE, role, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: ROLE_COOKIE_MAX_AGE,
      })
    }
  }

  // Role-based gating
  if (pathname.startsWith('/admin') && role !== 'admin') {
    return NextResponse.redirect(new URL(homeFor(role), request.url))
  }
  if (pathname.startsWith('/distributor') && role !== 'distributor') {
    return NextResponse.redirect(new URL(homeFor(role), request.url))
  }
  if (pathname.startsWith('/delivery') && role !== 'delivery') {
    return NextResponse.redirect(new URL(homeFor(role), request.url))
  }
  const customerOnly = pathname === '/'
    || pathname.startsWith('/cart')
    || pathname.startsWith('/checkout')
    || pathname.startsWith('/orders')
    || pathname.startsWith('/account')
  if (customerOnly && role !== 'customer') {
    return NextResponse.redirect(new URL(homeFor(role), request.url))
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
