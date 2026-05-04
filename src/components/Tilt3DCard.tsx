'use client'

import { ReactNode, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Tilt3DCardProps {
  children: ReactNode
  className?: string
  /** Maximum tilt angle in degrees. */
  intensity?: number
  /** Adds a soft glow that follows the cursor. */
  glow?: boolean
}

/**
 * Wraps children in a card that tilts in 3D toward the cursor.
 * Pure CSS perspective + transform, animated with Framer Motion springs.
 */
export default function Tilt3DCard({
  children,
  className = '',
  intensity = 8,
  glow = true,
}: Tilt3DCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [hovered, setHovered] = useState(false)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 200, damping: 20 })

  // Glow position (hooks at top level — required by React rules)
  const glowX = useTransform(x, (v) => `${(v + 0.5) * 100}%`)
  const glowY = useTransform(y, (v) => `${(v + 0.5) * 100}%`)

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  function onMouseLeave() {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
      className={`relative ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full"
      >
        {glow && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: 'radial-gradient(400px circle at var(--mx, 50%) var(--my, 50%), rgba(94,196,196,0.18), transparent 60%)',
              ['--mx' as any]: glowX,
              ['--my' as any]: glowY,
            }}
          />
        )}
        {children}
      </motion.div>
    </motion.div>
  )
}
