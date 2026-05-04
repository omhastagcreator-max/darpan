'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Best-effort report — Sentry's withSentryConfig also reports
      // automatically, this is just belt + braces.
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require('@sentry/nextjs').captureException?.(error)
      } catch {
        /* Sentry not installed */
      }
    }
    if (process.env.NODE_ENV !== 'production') {
      // Make local errors loud.
      // eslint-disable-next-line no-console
      console.error('App error boundary caught:', error)
    }
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-[#FEF9F4] p-6 text-center font-sans">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-5">
          <span className="text-3xl">⚠️</span>
        </div>
        <h1 className="text-xl font-black text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-sm text-gray-500 max-w-md mb-1">
          We&apos;ve logged the error and our team will look at it.
        </p>
        {error.digest && (
          <p className="text-xs text-gray-400 font-mono mb-4">Reference: {error.digest}</p>
        )}
        <button
          onClick={reset}
          className="bg-[#BA181B] hover:bg-[#991518] text-white font-semibold px-5 py-2.5 rounded-xl transition-all"
        >
          Try again
        </button>
      </body>
    </html>
  )
}
