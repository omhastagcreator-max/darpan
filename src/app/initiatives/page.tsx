import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { initiatives } from '@/lib/content'

export const metadata = {
  title: 'Initiatives | Darpan Foundation',
  description:
    'Six initiatives — environmental stewardship, education, mental wellness, skill development, senior care, and spiritual outreach.',
}

export default function InitiativesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Six Initiatives"
        title="Beyond the self — into the community."
        subtitle="Guruji's vision extends beyond the individual. Six initiatives carry that vision into the world — each addressing a different layer of human and environmental flourishing."
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((init, i) => (
              <FadeIn key={init.slug} delay={i * 0.06}>
                <Link
                  href={init.href}
                  className="group block bg-creamCard rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="aspect-square sm:aspect-auto overflow-hidden">
                      <img src={init.image} alt={init.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-7 flex flex-col justify-center">
                      <div className="flex items-baseline gap-3 mb-3">
                        <h3 className="font-display text-2xl text-charcoal group-hover:text-saffron transition-colors leading-tight">
                          {init.name}
                        </h3>
                        {init.sanskrit && (
                          <span className="font-sanskrit text-saffron text-lg">{init.sanskrit}</span>
                        )}
                      </div>
                      <p className="text-saffron uppercase tracking-widest text-[11px] font-medium mb-4">
                        {init.tagline}
                      </p>
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-5">{init.short}</p>
                      <span className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-xs font-medium">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to support this work?"
        description="Volunteer your skills, sponsor a field, support a child, or contribute to the ashram — every form of giving moves the work forward."
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
        variant="forest"
      />
    </>
  )
}
