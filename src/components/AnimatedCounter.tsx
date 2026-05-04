'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  from?: number
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

/**
 * Number that counts up from `from` → `to` when it scrolls into view.
 * Uses requestAnimationFrame for smoothness; respects reduced motion.
 */
export default function AnimatedCounter({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 1.8,
  className = '',
}: AnimatedCounterProps) {
  const [value, setValue] = useState(from)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setValue(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const total = duration * 1000
    const step = (now: number) => {
      const t = Math.min((now - start) / total, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(from + (to - from) * eased))
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {prefix}
      {value.toLocaleString('en-IN')}
      {suffix}
    </motion.span>
  )
}
