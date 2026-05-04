import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Visit Us | Darpan Foundation',
  description:
    'We invite you to visit us and experience the transformative power of our programs and initiatives.',
}

export default function VisitHub() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Visit Us"
        bgImage="https://images.unsplash.com/photo-1547106634-56dcd53ae883?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                We invite you to visit us and experience the transformative power of our programs and initiatives. Nestled in a serene environment, our center is a sanctuary for those seeking spiritual growth, self-discovery, and community development.
              </p>
              <p>
                Whether you are interested in participating in our meditation sessions, volunteering in our community projects, or simply exploring the peaceful surroundings, our doors are always open to you. Join us to witness firsthand the impact of our work and become a part of our mission to foster positive change.
              </p>
              <p>
                Plan your visit today and embark on a journey towards a more fulfilling and enlightened life. We look forward to welcoming you!
              </p>
            </Prose>
            <div className="mt-10">
              <Link
                href="/register-your-visit"
                className="inline-flex items-center gap-2 bg-saffron text-white rounded-full px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-saffron/90 transition-colors"
              >
                Register your Visit <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TWO CARDS */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: 'A day at Ashram',
                href: '/darpan-ashram',
                desc:
                  'Darpan Ashram is a Centre for enlightened seekers of Truth. Designed for self-realization, it is a place open for all earthlings. A unique and inspiring space to experience and feel your Self mirroring in mind and soul mirroring in Self. Looking forward to welcome you!!! Daily and regular practice of meditation is the main activity at the ashram, which forms the basis of the daily schedule. One of the highlights of the ashram daily routine is the one-hour satsang with Guruji. Along with meditation, seva (selfless service) is also an important part of the ashram routine.',
                cta: 'Register your Visit',
                ctaHref: '/register-your-visit',
                img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop',
              },
              {
                title: 'Host Your Event',
                href: '/host-your-event',
                desc:
                  'To host your event at Ashram, we can collaborate with you. Event planning is possible for both official and personal celebrations of life. Darpan Ashram is a great place to meet up with loved ones. Ashram provides you with a distinctive atmosphere and experience to make your event unforgettable. Kindly provide us with information about the group and the expected length of the program in writing.',
                cta: 'Register your Visit',
                ctaHref: '/host-your-event',
                img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1740&auto=format&fit=crop',
              },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={c.href} className="group block bg-ivory rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-saffron transition-colors leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed mb-6 text-sm">{c.desc}</p>
                    <span className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-xs font-medium">
                      {c.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-16 md:py-24 text-center border-t border-goldLight/20">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Would You like to Visit Ashram?
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-saffron text-white rounded-full px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-saffron/90 transition-colors"
            >
              Enquire Now <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
