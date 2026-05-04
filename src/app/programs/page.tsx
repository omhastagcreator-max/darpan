import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { programs } from '@/lib/content'

export const metadata = {
  title: 'Programs | Darpan Foundation',
  description:
    'A journey of transformation from self to Self. Ten Darpan programs — meditation, dialogue, service, study, and more.',
}

export default function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Our Programs"
        title="Pathways for every stage of your journey."
        subtitle="At Darpan, the work of transformation begins with the individual. Every program is an invitation inward — from the surface self to the deeper Self."
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.05}>
                <Link
                  href={p.href}
                  className="group block bg-creamCard rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-charcoal mb-2 group-hover:text-saffron transition-colors leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-saffron uppercase tracking-widest text-[11px] font-medium mb-4">
                      {p.tagline}
                    </p>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{p.short}</p>
                    <div className="mt-5 flex items-center gap-2 text-saffron text-sm font-medium uppercase tracking-wider">
                      Explore <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to begin?"
        description="Tell us a little about what brings you here. We will gently point toward the path that fits."
        primaryHref="/contact"
        primaryLabel="Speak with Us"
        secondaryHref="/satsang"
        secondaryLabel="Be in Satsang"
      />
    </>
  )
}
