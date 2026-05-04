import FadeIn from './FadeIn'
import LotusDivider from './LotusDivider'
import FloatingOrbs from './FloatingOrbs'
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
  short: 'min-h-[36vh] md:min-h-[42vh]',
  medium: 'min-h-[44vh] md:min-h-[52vh]',
  tall: 'min-h-[78vh] md:min-h-[88vh]',
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
    <section className={`relative ${heightMap[height]} flex flex-col justify-center pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden ${
      variant === 'light' ? 'bg-ivory'
      : variant === 'gradient' ? 'brand-gradient'
      : 'bg-darpanNavy'
    }`}>
      {/* Background image overlay */}
      {bgImage && variant !== 'light' && (
        <>
          <div className="absolute inset-0 z-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-25 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-darpanNavy/40 via-transparent to-transparent" />
        </>
      )}

      {/* Animated floating orbs for depth */}
      {isDark && <FloatingOrbs count={3} variant="teal" />}

      <div className={`relative z-10 container mx-auto px-6 lg:px-12 ${align === 'center' ? 'text-center' : ''}`}>
        <FadeIn>
          {/* Breadcrumb */}
          {breadcrumb && (
            <nav className={`flex items-center gap-1.5 text-[11px] uppercase tracking-wider mb-5 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home size={11} /> Home
              </Link>
              {breadcrumb.map((b, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={11} className="opacity-60" />
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
            <span className={`inline-block uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl ${isDark ? 'text-ivory' : 'text-darpanNavy'} mb-4 leading-[1.05]`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-base md:text-lg ${isDark ? 'text-ivory/85' : 'text-darpanInk/75'} leading-relaxed font-light`}>
              {subtitle}
            </p>
          )}
        </FadeIn>
        {align === 'center' && (
          <FadeIn delay={0.4}>
            <div className={`mt-8 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
              <LotusDivider />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
