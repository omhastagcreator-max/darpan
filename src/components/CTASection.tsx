import FadeIn from './FadeIn'
import Button from './Button'
import LotusDivider from './LotusDivider'

interface CTASectionProps {
  eyebrow?: string
  title: string
  description?: string
  primaryHref?: string
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  variant?: 'cream' | 'forest' | 'charcoal'
}

const bgMap = {
  cream: 'bg-creamCard text-charcoal',
  forest: 'bg-forest text-ivory',
  charcoal: 'bg-charcoal text-ivory',
}

export default function CTASection({
  eyebrow,
  title,
  description,
  primaryHref = '/contact',
  primaryLabel = 'Enquire Now',
  secondaryHref,
  secondaryLabel,
  variant = 'cream',
}: CTASectionProps) {
  const isDark = variant !== 'cream'
  return (
    <section className={`${bgMap[variant]} py-24 md:py-28 text-center`}>
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <div className={`mb-8 ${isDark ? 'text-goldLight' : 'text-saffron'}`}>
            <LotusDivider />
          </div>
          {eyebrow && (
            <span className={`block uppercase text-xs tracking-[0.3em] font-medium mb-4 ${isDark ? 'text-goldLight' : 'text-saffron'}`}>
              {eyebrow}
            </span>
          )}
          <h2 className={`font-display text-3xl md:text-5xl mb-6 ${isDark ? 'text-ivory' : 'text-charcoal'}`}>
            {title}
          </h2>
          {description && (
            <p className={`text-lg leading-relaxed mb-10 ${isDark ? 'text-ivory/80' : 'text-charcoal/70'}`}>
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={primaryHref} icon>
              {primaryLabel}
            </Button>
            {secondaryHref && secondaryLabel && (
              <Button
                href={secondaryHref}
                variant="outline"
                className={isDark ? 'border-ivory/30 text-ivory hover:border-ivory' : ''}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
