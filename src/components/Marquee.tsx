import { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  /** Duration in seconds for one full loop. */
  duration?: number
  /** Direction: left (default) or right. */
  reverse?: boolean
  className?: string
  /** Optional pause-on-hover (browser native). */
  pauseOnHover?: boolean
}

/**
 * Infinite horizontal marquee. Renders children twice for seamless loop.
 * No JS — pure CSS animation. Wrap your items in a fragment.
 */
export default function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = '',
  pauseOnHover = true,
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden relative ${className}`}>
      {/* Edge fade masks */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-current to-transparent opacity-0" />
      <div
        className={`flex w-max ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `marquee ${duration}s linear infinite`,
          animationDirection: reverse ? 'reverse' : 'normal',
        }}
      >
        <div className="flex items-stretch gap-6 pr-6">{children}</div>
        <div className="flex items-stretch gap-6 pr-6" aria-hidden="true">{children}</div>
      </div>
    </div>
  )
}
