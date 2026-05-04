'use client'

import { motion } from 'framer-motion'

interface MandalaOrbProps {
  size?: number
  className?: string
  /** Slow / fast spin speed multiplier */
  speed?: number
}

/**
 * Layered animated SVG mandala / lotus.
 * Multiple concentric rings spin at different rates and directions
 * to give a 3D-feeling depth without WebGL.
 */
export default function MandalaOrb({ size = 400, className = '', speed = 1 }: MandalaOrbProps) {
  return (
    <div className={`relative pointer-events-none ${className}`} style={{ width: size, height: size }}>
      {/* Halo glow */}
      <div
        className="absolute inset-0 rounded-full conic-halo animate-spin-slower"
        style={{ filter: 'blur(48px)' }}
      />

      {/* Outer ring (24 petals) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 80 / speed, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <radialGradient id="petalGradOuter" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#5BC4C4" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#5BC4C4" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 24 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="22"
            rx="3.5"
            ry="14"
            fill="url(#petalGradOuter)"
            transform={`rotate(${(360 / 24) * i} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Middle ring (12 petals, opposite direction) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-[18%] w-[64%] h-[64%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 50 / speed, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <radialGradient id="petalGradMid" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#2EB5B5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#2EB5B5" stopOpacity="0" />
          </radialGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="100"
            cy="36"
            rx="6"
            ry="20"
            fill="url(#petalGradMid)"
            transform={`rotate(${(360 / 12) * i} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Inner ring (8 petals) */}
      <motion.svg
        viewBox="0 0 200 200"
        className="absolute inset-[32%] w-[36%] h-[36%]"
        animate={{ rotate: 360 }}
        transition={{ duration: 30 / speed, ease: 'linear', repeat: Infinity }}
        aria-hidden
      >
        <defs>
          <radialGradient id="petalGradInner" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#194B73" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#0E2A47" stopOpacity="0.4" />
          </radialGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d="M100 30 C 110 50, 110 80, 100 100 C 90 80, 90 50, 100 30 Z"
            fill="url(#petalGradInner)"
            transform={`rotate(${(360 / 8) * i} 100 100)`}
          />
        ))}
      </motion.svg>

      {/* Center bindu */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-6 h-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-darpanCyan"
        style={{
          boxShadow: '0 0 40px rgba(94,196,196,0.9), 0 0 80px rgba(46,181,181,0.6)',
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
