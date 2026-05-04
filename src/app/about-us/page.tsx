import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Us | Darpan Foundation',
  description:
    'Our vision, formulated by Guruji, centers on the holistic development of Body, Mind, Self, and Soul.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About Us"
        bgImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Our vision, formulated by Guruji, centers on the holistic development of Body, Mind, Self, and Soul. We aim to empower individuals to choose an alternate way of life that promotes personal growth and societal transformation.
              </p>
              <p>
                At Darpan Foundation, we focus on the power of self-discovery and community development. Our programs are designed to foster spiritual awareness, self-confidence, and self-esteem, enabling participants to realize their true potential. Through dedicated efforts and impactful initiatives, we strive to create positive and lasting changes in the community.
              </p>
              <p>
                Explore and join us in our mission to inspire and uplift lives. Together, we can make a difference.
              </p>
              <p>
                The social initiatives of the Darpan Foundation are undertaken both independently and/or in collaboration with our parent organization, &ldquo;Universal Forum for Human Dignity&rdquo; (<strong>UNIFOHD</strong>).
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* TWO FEATURE CARDS */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'Guruji&rsquo;s Vision',
                href: '/vision',
                desc: 'Transformed individuals alone become solutions to the problems that our planet faces. Real sustainable transformation is possible only through activities-oriented path of spiritual realisation. Making best choices and decisions helps weave destiny.',
                cta: 'Explore',
                img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop',
              },
              {
                title: 'Darpan Ashram',
                href: '/darpan-ashram',
                desc: 'Darpan Ashram is a Centre for enlightened seekers of Truth. Designed for self-realization, it is a place open for all earthlings. A unique and inspiring space to experience and feel your Self mirroring in mind and soul mirroring in Self. Looking forward to welcome you!!!',
                cta: 'Explore',
                img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={card.href} className="group block bg-ivory rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={card.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-saffron transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p className="text-charcoal/70 leading-relaxed mb-6">{card.desc}</p>
                    <span className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-xs font-medium">
                      {card.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sign Up for Self Transformation"
        primaryHref="/contact"
        primaryLabel="Enquire Now"
        variant="forest"
      />
    </>
  )
}
