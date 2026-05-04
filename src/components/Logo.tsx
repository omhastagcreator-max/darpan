interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * Inline SVG mark inspired by the Darpan Foundation logo:
 * a stylised meditating figure rising out of a lotus / curved water-line.
 * Pairs with the "Darpan FOUNDATION" wordmark.
 */
export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const wordColor = variant === 'dark' ? 'text-darpanNavy' : 'text-ivory'
  const subColor = variant === 'dark' ? 'text-darpanTeal' : 'text-darpanCyan'
  const navy = variant === 'dark' ? '#0E2A47' : '#FFFFFF'
  const teal = variant === 'dark' ? '#2EB5B5' : '#5BC4C4'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG mark */}
      <svg
        width="42"
        height="42"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Meditating figure — head */}
        <circle cx="32" cy="14" r="4.4" fill={navy} />
        {/* Body — joined arms in lotus */}
        <path
          d="M32 19 C 24 22, 22 31, 24 38 L 40 38 C 42 31, 40 22, 32 19 Z"
          fill={navy}
        />
        {/* Inner curve (negative space) */}
        <path
          d="M28 27 C 28 33, 36 33, 36 27"
          stroke={teal}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        {/* Lotus leaves left */}
        <path
          d="M6 44 C 14 38, 22 38, 28 42 C 22 50, 12 50, 6 44 Z"
          fill={teal}
          opacity="0.85"
        />
        {/* Lotus leaves right */}
        <path
          d="M58 44 C 50 38, 42 38, 36 42 C 42 50, 52 50, 58 44 Z"
          fill={teal}
          opacity="0.85"
        />
        {/* Water line / base curve */}
        <path
          d="M4 50 C 18 56, 46 56, 60 50"
          stroke={teal}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className={`font-display font-semibold text-2xl ${wordColor}`} style={{ letterSpacing: '0.01em' }}>
          Darpan
        </span>
        <span className={`text-[10px] uppercase tracking-[0.32em] font-medium ${subColor} mt-0.5`}>
          Foundation
        </span>
      </div>
    </div>
  )
}
