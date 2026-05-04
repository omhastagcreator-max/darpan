interface FloatingOrbsProps {
  /** How many orbs to render. */
  count?: number
  className?: string
  /** Render variant: brand teal/cyan, or warm gold accents. */
  variant?: 'teal' | 'navy' | 'mixed'
}

/**
 * Decorative animated background orbs. Pure CSS animation, no JS,
 * deterministic positions so SSR + CSR match.
 */
export default function FloatingOrbs({
  count = 5,
  className = '',
  variant = 'mixed',
}: FloatingOrbsProps) {
  const variants = {
    teal: ['bg-darpanTeal/30', 'bg-darpanCyan/30', 'bg-darpanTeal/20'],
    navy: ['bg-darpanNavy/40', 'bg-darpanMid/40', 'bg-darpanNavy/30'],
    mixed: ['bg-darpanTeal/30', 'bg-darpanCyan/25', 'bg-darpanNavy/30', 'bg-darpanMid/30', 'bg-darpanTeal/20'],
  }
  const colorPool = variants[variant]

  // Deterministic positions / sizes (so SSR matches CSR)
  const orbs = [
    { size: 320, top: '5%', left: '5%', duration: '14s', delay: '0s' },
    { size: 220, top: '15%', right: '8%', duration: '18s', delay: '1.2s' },
    { size: 380, bottom: '10%', left: '12%', duration: '22s', delay: '2.4s' },
    { size: 260, bottom: '5%', right: '15%', duration: '16s', delay: '0.6s' },
    { size: 180, top: '40%', left: '45%', duration: '20s', delay: '3s' },
    { size: 280, top: '60%', right: '40%', duration: '17s', delay: '1.8s' },
  ].slice(0, count)

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      {orbs.map((o, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl mix-blend-screen ${colorPool[i % colorPool.length]}`}
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            bottom: o.bottom,
            left: o.left,
            right: o.right,
            animation: `float ${o.duration} ease-in-out infinite`,
            animationDelay: o.delay,
          }}
        />
      ))}
    </div>
  )
}
