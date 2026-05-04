import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Visit Us | Darpan Foundation',
  description:
    'Plan your visit to Darpan Ashram in Urigam, Tamil Nadu. Three ways in: explore the ashram, register your visit, or host your group event.',
}

const cards = [
  {
    href: '/darpan-ashram',
    eyebrow: 'The Ashram',
    title: 'A day at Darpan Ashram',
    desc: 'Daily schedule, facilities, location, rules. Everything you need to know before you arrive.',
    img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    href: '/register-your-visit',
    eyebrow: 'Plan Your Stay',
    title: 'Register your visit',
    desc: 'Send us your dates and intentions — we will confirm availability and onboard you for your stay.',
    img: 'https://images.unsplash.com/photo-1547106634-56dcd53ae883?q=80&w=1740&auto=format&fit=crop',
  },
  {
    href: '/host-your-event',
    eyebrow: 'Bring Your Group',
    title: 'Host your event',
    desc: 'Schools, colleges, corporates, residential communities, artists, sustainable-living workshops — the ashram welcomes them all.',
    img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1740&auto=format&fit=crop',
  },
]

export default function VisitHub() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="Three ways to walk through the gates."
        subtitle="Nestled in the foothills of Noorundumalai, Darpan Ashram is a sanctuary for spiritual growth, self-discovery and community. Our doors are always open."
        bgImage="https://images.unsplash.com/photo-1547106634-56dcd53ae883?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                We invite you to visit us and experience first-hand what the work at Darpan looks like. Whether you are interested in joining a meditation session, volunteering in a community project, or simply walking the grounds in quiet, you are welcome.
              </p>
              <p>
                Plan your visit today — and step toward a more grounded, enlightened life.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link
                  href={c.href}
                  className="group block bg-ivory rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
                      {c.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-saffron transition-colors leading-tight">
                      {c.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{c.desc}</p>
                    <span className="text-saffron text-xs uppercase tracking-widest font-medium inline-flex items-center gap-1">
                      Open <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
