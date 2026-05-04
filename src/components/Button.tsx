import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
  icon?: boolean
}

export default function Button({ href, children, variant = 'primary', className = '', icon = false }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium tracking-wide transition-all duration-300 rounded-full group"
  
  const variants = {
    primary: "bg-saffron text-white hover:bg-saffron/90",
    secondary: "bg-forest text-ivory hover:bg-forest/90",
    outline: "bg-transparent border border-charcoal/20 text-charcoal hover:border-charcoal",
  }

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />}
      </span>
      {/* Background slide-in effect */}
      <div className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full"></div>
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
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  )
}
