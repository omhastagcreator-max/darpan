import FadeIn from './FadeIn'
import LotusDivider from './LotusDivider'

interface PullQuoteProps {
  quote: string
  attribution?: string
  variant?: 'dark' | 'cream' | 'forest'
}

const bgMap = {
  dark: 'bg-charcoal text-ivory',
  cream: 'bg-creamCard text-charcoal',
  forest: 'bg-forest text-ivory',
}

export default function PullQuote({ quote, attribution, variant = 'dark' }: PullQuoteProps) {
  const isDark = variant !== 'cream'
  return (
    <section className={`${bgMap[variant]} py-24 md:py-32 relative ${isDark ? 'border-y border-goldLight/20' : ''}`}>
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <FadeIn>
          <div className={`mb-10 ${isDark ? 'text-goldLight' : 'text-saffron'}`}>
            <LotusDivider />
          </div>
          <p className={`font-quote italic text-2xl md:text-4xl lg:text-5xl leading-snug ${isDark ? (variant === 'forest' ? 'text-ivory' : 'text-ivory') : 'text-charcoal'}`}>
            &ldquo;{quote}&rdquo;
          </p>
          {attribution && (
            <p className={`mt-10 tracking-[0.25em] uppercase text-xs font-medium ${isDark ? 'text-goldLight' : 'text-saffron'}`}>
              — {attribution}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
