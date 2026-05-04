import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: boolean
  onClick?: () => void
}

export default function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon = false,
  onClick,
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-5 py-2.5 text-xs tracking-wider',
    md: 'px-7 py-3.5 text-sm tracking-wider',
    lg: 'px-9 py-4 text-base tracking-wide',
  }
  const baseStyles = `relative inline-flex items-center justify-center overflow-hidden font-semibold uppercase transition-all duration-300 rounded-full group ${sizeStyles[size]}`

  const variants = {
    primary:
      'bg-darpanTeal text-white hover:bg-darpanNavy shadow-lg shadow-darpanTeal/30 hover:shadow-darpanNavy/30',
    secondary:
      'bg-darpanNavy text-ivory hover:bg-darpanTeal shadow-lg shadow-darpanNavy/20 hover:shadow-darpanTeal/30',
    outline:
      'bg-transparent border border-darpanNavy/25 text-darpanNavy hover:border-darpanTeal hover:text-darpanTeal',
    ghost:
      'bg-transparent text-darpanTeal hover:bg-darpanTeal/10',
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  )
}
