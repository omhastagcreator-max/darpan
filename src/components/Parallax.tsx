'use client'

import { ReactNode, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

interface ParallaxProps {
  children: ReactNode
  /** Pixel range — element drifts from +offset → -offset as it scrolls through. */
  offset?: number
  className?: string
}

/**
 * Subtle vertical parallax wrapper. Use sparingly on hero images and accents.
 */
export default function Parallax({ children, offset = 80, className = '' }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yRaw = useTransform(scrollYProgress, [0, 1], [offset, -offset])
  const y = useSpring(yRaw, { stiffness: 80, damping: 20 })

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}
