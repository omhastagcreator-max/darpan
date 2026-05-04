import { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  bg?: 'ivory' | 'cream' | 'forest' | 'charcoal' | 'white' | 'gradient'
  padding?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  id?: string
  containerClassName?: string
}

const bgMap = {
  ivory: 'bg-ivory text-darpanInk',
  cream: 'bg-darpanPale text-darpanInk',
  forest: 'bg-darpanNavy text-ivory',
  charcoal: 'bg-darpanNavy text-ivory',
  white: 'bg-white text-darpanInk',
  gradient: 'brand-gradient text-ivory',
}

const paddingMap = {
  none: 'py-0',
  xs: 'py-8 md:py-10',
  sm: 'py-10 md:py-14',
  md: 'py-14 md:py-20',     // tightened
  lg: 'py-16 md:py-24',     // tightened (was py-24/32)
  xl: 'py-20 md:py-28',     // tightened (was py-32/40)
}

export default function Section({
  children,
  className = '',
  bg = 'ivory',
  padding = 'md',
  id,
  containerClassName = '',
}: SectionProps) {
  return (
    <section id={id} className={`${bgMap[bg]} ${paddingMap[padding]} ${className}`}>
      <div className={`container mx-auto px-6 lg:px-12 ${containerClassName}`}>{children}</div>
    </section>
  )
}
