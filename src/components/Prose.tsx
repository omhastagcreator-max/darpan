import { ReactNode } from 'react'

interface ProseProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = {
  sm: 'text-base',
  md: 'text-lg',
  lg: 'text-xl',
}

/** Body content with consistent rhythm. Avoid prose plugin to keep config simple. */
export default function Prose({ children, className = '', size = 'md' }: ProseProps) {
  return (
    <div
      className={`${sizeMap[size]} text-charcoal/80 leading-relaxed space-y-5 max-w-none [&>p]:leading-[1.8] [&>strong]:text-charcoal [&_strong]:font-semibold ${className}`}
    >
      {children}
    </div>
  )
}
