import FadeIn from './FadeIn'
import LotusDivider from './LotusDivider'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  bgImage?: string
  align?: 'left' | 'center'
  variant?: 'dark' | 'light' | 'gradient'
  height?: 'short' | 'medium' | 'tall'
  breadcrumb?: { label: string; href?: string }[]
}

const heightMap = {
  short: 'min-h-[44vh] md:min-h-[50vh]',
  medium: 'min-h-[55vh] md:min-h-[60vh]',
  tall: 'min-h-[80vh] md:min-h-[88vh]',
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  align = 'left',
  variant = 'gradient',
  height = 'medium',
  breadcrumb,
}: PageHeroProps) {
  const isDark = variant !== 'light'
  return (
    <section className={`relative ${heightMap[height]} flex flex-col justify-center pt-32 pb-20 overflow-hidden ${
      variant === 'light' ? 'bg-ivory'
      : variant === 'gradient' ? 'brand-gradient'
      : 'bg-darpanNavy'
    }`}>
      {/* Background image overlay (for dark variant) */}
      {bgImage && variant !== 'light' && (
        <>
          <div className="absolute inset-0 z-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-25 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-darpanNavy/40 via-transparent to-transparent" />
        </>
      )}

      {/* Decorative mandala circles */}
      <div className="absolute top-0 left-0 w-[280px] h-[280px] rounded-full bg-darpanCyan/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-darpanTeal/20 blur-3xl pointer-events-none" />

      <div className={`relative z-10 container mx-auto px-6 lg:px-12 ${align === 'center' ? 'text-center' : ''}`}>
        <FadeIn>
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className={`flex items-center gap-1.5 text-xs uppercase tracking-wider mb-6 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home size={12} /> Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={12} className="opacity-60" />
                  {b.href ? (
                    <Link href={b.href} className="hover:text-white transition-colors">{b.label}</Link>
                  ) : (
                    <span className={isDark ? 'text-white/90' : 'text-darpanNavy'}>{b.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {eyebrow && !breadcrumb && (
            <span className={`inline-block uppercase tracking-[0.3em] text-xs font-semibold mb-4 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display text-4xl md:text-6xl lg:text-7xl ${isDark ? 'text-ivory' : 'text-darpanNavy'} mb-5 leading-[1.05]`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-lg md:text-xl ${isDark ? 'text-ivory/85' : 'text-darpanInk/75'} leading-relaxed font-light`}>
              {subtitle}
            </p>
          )}
        </FadeIn>
        {align === 'center' && (
          <FadeIn delay={0.4}>
            <div className={`mt-10 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              <LotusDivider />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
