import FadeIn from './FadeIn'
import LotusDivider from './LotusDivider'

interface PageHeroProps {
  eyebrow?: string
  title: string
  subtitle?: string
  bgImage?: string
  align?: 'left' | 'center'
  variant?: 'dark' | 'light'
  height?: 'short' | 'medium' | 'tall'
}

const heightMap = {
  short: 'min-h-[60vh]',
  medium: 'min-h-[70vh]',
  tall: 'min-h-[85vh]',
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  bgImage = 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop',
  align = 'left',
  variant = 'dark',
  height = 'medium',
}: PageHeroProps) {
  const isDark = variant === 'dark'
  return (
    <section className={`relative ${heightMap[height]} flex flex-col justify-end pb-16 pt-32 overflow-hidden ${isDark ? 'bg-charcoal' : 'bg-ivory'}`}>
      {isDark && (
        <>
          <div className="absolute inset-0 z-0">
            <img src={bgImage} alt="" className="w-full h-full object-cover opacity-50" />
          </div>
          <div className="absolute inset-0 z-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </>
      )}
      <div className={`relative z-10 container mx-auto px-6 lg:px-12 ${align === 'center' ? 'text-center' : ''}`}>
        <FadeIn>
          {eyebrow && (
            <span className={`inline-block text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-5 ${align === 'center' ? '' : ''}`}>
              {eyebrow}
            </span>
          )}
          <h1 className={`font-display text-4xl md:text-6xl lg:text-7xl ${isDark ? 'text-ivory' : 'text-charcoal'} mb-6 leading-tight`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`max-w-2xl ${align === 'center' ? 'mx-auto' : ''} text-lg md:text-xl ${isDark ? 'text-ivory/80' : 'text-charcoal/70'} leading-relaxed font-light`}>
              {subtitle}
            </p>
          )}
        </FadeIn>
        {align === 'center' && (
          <FadeIn delay={0.4}>
            <div className={`mt-10 ${isDark ? 'text-goldLight' : 'text-saffron'}`}>
              <LotusDivider />
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  )
}
