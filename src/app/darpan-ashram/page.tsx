import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import LotusDivider from '@/components/LotusDivider'
import { MapPin, Phone, Mail, Bus, Car } from 'lucide-react'

export const metadata = {
  title: 'Darpan Ashram | Darpan Foundation',
  description:
    'A centre for enlightened seekers of Truth in Urigam, Krishnagiri. Daily schedule, facilities, location, and the rules that hold the space.',
}

const policies = [
  'Prior registration or permission is required to visit and stay at the ashram.',
  'General visitors (not registered for a program) may access public areas between 9:30 AM and 5:00 PM.',
  'Right of admission and duration of stay are reserved.',
  'All able-bodied seekers staying at the ashram contribute a minimum of 2 hours daily to selfless Seva.',
  'Arrivals are expected between 9:30 AM and 5:00 PM where possible.',
  'Smoking and consumption of alcohol are strictly prohibited.',
  'Use of plastic is to be avoided.',
  'Modest attire is expected throughout the ashram.',
  'Children are welcome but must remain under guardian supervision at all times.',
]

const schedule = [
  { time: '6:00 – 8:00 AM', label: 'Morning Yoga, Shram & Meditation' },
  { time: '8:00 – 9:30 AM', label: 'Breakfast' },
  { time: '9:00 – 12:30 PM', label: 'Seva' },
  { time: '12:30 – 1:00 PM', label: 'Afternoon Meditation' },
  { time: '1:00 – 2:00 PM', label: 'Lunch' },
  { time: '2:00 – 4:00 PM', label: 'Swadhyay (Self-Study)' },
  { time: '4:00 – 4:30 PM', label: 'Refreshment' },
  { time: '4:30 – 6:00 PM', label: 'Seva' },
  { time: '6:30 – 8:00 PM', label: 'Satsang with Guruji' },
  { time: '8:00 – 9:30 PM', label: 'Dinner & Swadhyay' },
]

const facilities = [
  'Simple but elegant living spaces',
  'Community kitchen with vegetarian meals',
  'Multi-purpose hall — capacity 100+',
  'Dhyan Mantap — dedicated meditation hall',
  'Kuteers — eco-friendly individual cottages',
  'Multi-layered natural farm — open for learning',
  'Rainwater harvesting pond (2.4 million litres)',
  'Accommodation by prior booking only',
]

export default function DarpanAshramPage() {
  return (
    <>
      <PageHero
        eyebrow="Darpan Ashram"
        title="A centre for enlightened seekers of Truth."
        subtitle="Designed for self-realisation. Open to all earthlings. A unique environment where the mind mirrors the self, and the self mirrors the soul."
        bgImage="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Darpan Ashram warmly welcomes all who are ready to arrive. Daily meditation practice is the heart of ashram life — the foundation on which everything else rests. A central highlight of each day is the one-hour <strong>Satsang with Guruji.</strong> Alongside meditation, selfless service (Seva) is an essential part of the daily rhythm.
              </p>
              <p>
                The range of activities is wide: farming, cooking, cleaning, maintenance, administration. The ashram&apos;s teaching is this — we grow only when we step outside our routines and try a different way of living. Even briefly. Ashram life is an invitation to dissolve personal limitations and live, for a while, without the weight of expectation.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Daily Schedule
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              The shape of a day here.
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="bg-ivory rounded-2xl border border-charcoal/5 overflow-hidden">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-7 py-5 ${
                    i !== schedule.length - 1 ? 'border-b border-charcoal/5' : ''
                  } hover:bg-creamCard transition-colors`}
                >
                  <span className="text-saffron font-medium text-sm tracking-wider tabular-nums">
                    {s.time}
                  </span>
                  <span className="font-display text-charcoal text-lg text-right">{s.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Facilities & Resources
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              What you&apos;ll find on the grounds.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {facilities.map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-creamCard rounded-xl px-6 py-5 border border-charcoal/5 flex items-start gap-3">
                  <span className="text-saffron mt-1 shrink-0">●</span>
                  <span className="text-charcoal/80">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* POLICIES */}
      <section className="bg-charcoal text-ivory py-24 md:py-32 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              General Policies & Rules
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Held lightly, observed carefully.
            </h2>
          </FadeIn>
          <ul className="space-y-3">
            {policies.map((p, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <li className="text-ivory/85 flex items-start gap-3 leading-relaxed">
                  <span className="text-saffron font-display text-sm mt-1.5 shrink-0">●</span>
                  <span>{p}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              How to Reach
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Getting to the ashram.
            </h2>
            <p className="text-charcoal/70 text-lg mt-5 max-w-2xl mx-auto">
              On the outskirts of Bengaluru, in the foothills of Noorundumalai, in the scenic village of Urigam — Krishnagiri District, Tamil Nadu.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 h-full">
                <div className="text-saffron mb-3"><Bus size={28} strokeWidth={1.4} /></div>
                <h3 className="font-display text-xl text-charcoal mb-2">By bus</h3>
                <p className="text-charcoal/70">Well connected to Bengaluru by city and inter-state buses.</p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 h-full">
                <div className="text-saffron mb-3"><Car size={28} strokeWidth={1.4} /></div>
                <h3 className="font-display text-xl text-charcoal mb-2">By private vehicle</h3>
                <p className="text-charcoal/70">Private taxis or personal vehicles are also a convenient option.</p>
              </div>
            </FadeIn>
          </div>

          {/* CONTACT */}
          <FadeIn className="mt-12 bg-charcoal text-ivory rounded-3xl p-10 md:p-14">
            <h3 className="font-display text-2xl text-goldLight mb-6">Ashram contact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-saffron shrink-0 mt-1" />
                <div className="text-sm text-ivory/85">
                  Darpan Ashram<br />
                  Urigam, Krishnagiri District<br />
                  Tamil Nadu &mdash; 635102
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-saffron shrink-0 mt-1" />
                <a href="tel:+918971859875" className="text-sm text-ivory/85 hover:text-white transition-colors">
                  +91 89718 59875
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-saffron shrink-0 mt-1" />
                <a href="mailto:info@darpanfoundation.com" className="text-sm text-ivory/85 hover:text-white transition-colors break-all">
                  info@darpanfoundation.com
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Would you like to visit the ashram?"
        description="Tell us when, and we will help you plan."
        primaryHref="/register-your-visit"
        primaryLabel="Register Your Visit"
        secondaryHref="/host-your-event"
        secondaryLabel="Host Your Event"
      />
    </>
  )
}
