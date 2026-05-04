import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  bg?: 'ivory' | 'cream' | 'forest' | 'charcoal' | 'white'
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  containerClassName?: string
}

const bgMap = {
  ivory: 'bg-ivory text-charcoal',
  cream: 'bg-creamCard text-charcoal',
  forest: 'bg-forest text-ivory',
  charcoal: 'bg-charcoal text-ivory',
  white: 'bg-white text-charcoal',
}

const paddingMap = {
  none: 'py-0',
  sm: 'py-12 md:py-16',
  md: 'py-20 md:py-24',
  lg: 'py-24 md:py-32',
  xl: 'py-32 md:py-40',
}

export default function Section({
  children,
  className = '',
  bg = 'ivory',
  padding = 'lg',
  id,
  containerClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`${bgMap[bg]} ${paddingMap[padding]} ${className}`}>
      <div className={`container mx-auto px-6 lg:px-12 ${containerClassName}`}>{children}</div>
    </section>
  )
}
