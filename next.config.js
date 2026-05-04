/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build integrity — these were previously `true`, hiding real type
  // and lint errors from production. They are now strict.
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  experimental: {
    // Tree-shake heavy client deps automatically
    optimizePackageImports: ['lucide-react', 'recharts', 'framer-motion'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_SUPABASE_URL
          ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
          : '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
    ],
  },

  async headers() {
    return [
      {
        source: '/products/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
        ],
      },
    ]
  },
}

// Sentry wrapper — applied only when @sentry/nextjs is installed and DSN is set.
// Keeps the build green if Sentry isn't configured yet.
let exported = nextConfig
try {
  if (process.env.SENTRY_DSN) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
    const { withSentryConfig } = require('@sentry/nextjs')
    exported = withSentryConfig(nextConfig, {
      silent: true,
      org: process.env.SENTRY_ORG,
      project: process.env.SENTRY_PROJECT,
      authToken: process.env.SENTRY_AUTH_TOKEN,
      hideSourceMaps: true,
      disableLogger: true,
    })
  }
} catch {
  // @sentry/nextjs not installed — skip silently.
}

module.exports = exported
