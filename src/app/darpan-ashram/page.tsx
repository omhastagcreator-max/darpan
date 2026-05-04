import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import { MapPin, Phone, Mail, Bus, Car } from 'lucide-react'

export const metadata = {
  title: 'Darpan Ashram – Overview | Darpan Foundation',
  description:
    'Darpan Ashram is a Centre for enlightened seekers of Truth. Designed for self-realization, it is a place open for all earthlings.',
}

const policies = [
  'Visitors who are not registered-program-guests may have access to the public areas of the ashram between 9.30 AM to 5 PM',
  'It is essential to have prior permission in order to visit and stay at the ashram',
  'The rights to admission and period of stay in the ashram are reserved',
  'Along with meditation, seva is an important and integral part of spiritual sadhana. All seekers staying in the ashram who are fit and able should contribute a minimum of 2 hours daily to selfless service at ashram',
  'As far as possible, seekers are expected to arrive between 9:30 AM to 5:00 PM',
  'Smoking and drinking in the ashram is strictly prohibited',
  'Usage of plastic to be avoided',
  'Modest dressing is suggested for everyone staying in the ashram',
  'Kids are welcome to our ashram but should be under guardians’ supervision at all times',
]

const schedule = [
  { time: '6:00 AM – 8:00 AM', label: 'Morning Yoga, Shram and Meditation' },
  { time: '8:00 AM – 9:30 AM', label: 'Breakfast' },
  { time: '9:00 AM – 12:30 PM', label: 'Seva' },
  { time: '12:30 PM – 1:00 PM', label: 'Afternoon Meditation' },
  { time: '1:00 PM – 2:00 PM', label: 'Lunch' },
  { time: '2:00 PM – 4:00 PM', label: 'Swadhyay' },
  { time: '4:00 PM – 4:30 PM', label: 'Refreshment' },
  { time: '4:30 PM – 6:00 PM', label: 'Seva' },
  { time: '6:30 PM – 8:00 PM', label: 'Satsang' },
  { time: '8:00 PM – 9:30 PM', label: 'Dinner and Swadhyay' },
]

const facilities = [
  'Simple yet elegant space',
  'Kitchen with simple vegetarian food',
  'Multi purpose hall: For conducting programs for more than 100 people',
  'Dhyan Mantap: For sadhak’s to practice meditation',
  'Kuteers: Architecture and construction of our buildings use local ecofriendly materials to the extent viable and possible and maintains rustic yet elegant look',
  'Multilayered natural farm: Visitors can connect with nature, learn to conserve soil, water and enrich themselves. Learn about traditional knowledge systems to live sustainably.',
  'Rainwater Harvesting Pond',
  'Accommodations at the ashram are available by prior booking only',
]

export default function DarpanAshramPage() {
  return (
    <>
      <PageHero
        eyebrow="Darpan Ashram – Overview"
        title="Darpan Ashram"
        bgImage="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Darpan Ashram</strong> is a Centre for enlightened seekers of Truth. Designed for self-realization, it is a place open for all earthlings. A unique and inspiring space to experience and feel your Self mirroring in mind and soul mirroring in Self.
              </p>
              <p className="text-saffron font-display text-2xl">Looking forward to welcome you!!!</p>
              <p>
                Daily and regular practice of meditation is the main activity at the ashram, which forms the basis of the daily schedule. One of the highlights of the ashram daily routine is the one-hour satsang with Guruji. Along with meditation, seva (selfless service) is also an important part of the ashram routine.
              </p>
              <p>
                There is a wide variety of activities in the ashram like farming, cooking, cleaning, maintenance and administrative work that one can take up. We learn important lessons in life only when we do something that is out of our routine existence and adopt a different approach to living, even if it is for a short duration. Ashram life provides a wonderful opportunity to break your personal limitations &amp; barriers and live without any expectations.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* POLICIES */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              All About Ashram
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              General Policies &amp; Rules
            </h2>
          </FadeIn>
          <ul className="space-y-3">
            {policies.map((p, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <li className="bg-ivory rounded-xl px-6 py-5 border border-charcoal/5 flex items-start gap-3 text-charcoal/85">
                  <span className="text-saffron font-display text-sm shrink-0 mt-0.5">{`0${i + 1}`.slice(-2)}</span>
                  <span>{p}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Daily Schedule
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              A day at Darpan Ashram
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="bg-creamCard rounded-2xl border border-charcoal/5 overflow-hidden">
              {schedule.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-7 py-5 ${
                    i !== schedule.length - 1 ? 'border-b border-charcoal/5' : ''
                  } hover:bg-ivory transition-colors`}
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
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Resources &amp; Facilities
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              What you&rsquo;ll find on the grounds
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {facilities.map((f, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-ivory rounded-xl px-6 py-5 border border-charcoal/5 flex items-start gap-3">
                  <span className="text-saffron mt-1 shrink-0">●</span>
                  <span className="text-charcoal/80 text-sm leading-relaxed">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO REACH */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">How to Reach</h2>
            <p className="text-charcoal/70 text-lg mt-5 max-w-2xl mx-auto">
              Darpan Ashram is situated in the outskirts of Bengaluru in the foothills of Noorundumalai in a scenic village Urigam. Ashram is well connected by bus from Bengaluru City.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FadeIn>
              <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 h-full">
                <div className="text-saffron mb-3"><Bus size={28} strokeWidth={1.4} /></div>
                <h3 className="font-display text-xl text-charcoal mb-2">Bus from Bengaluru City</h3>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 h-full">
                <div className="text-saffron mb-3"><Car size={28} strokeWidth={1.4} /></div>
                <h3 className="font-display text-xl text-charcoal mb-2">Private Taxis or vehicles</h3>
              </div>
            </FadeIn>
          </div>

          {/* CONTACT */}
          <FadeIn className="mt-12 bg-charcoal text-ivory rounded-3xl p-10 md:p-14">
            <h3 className="font-display text-2xl text-goldLight mb-8 text-center">Ashram Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-saffron shrink-0 mt-1" />
                <div className="text-sm text-ivory/85">
                  <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Phone</p>
                  +91 897-185-9875
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-saffron shrink-0 mt-1" />
                <div className="text-sm text-ivory/85">
                  <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Address</p>
                  Darpan Ashram Urigam, Krishnagiri Dist<br />Tamil Nadu - 635102
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-saffron shrink-0 mt-1" />
                <div className="text-sm text-ivory/85 break-all">
                  <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Email</p>
                  info@darpanfoundation.com
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Would You like to Visit Ashram?"
        primaryHref="/register-your-visit"
        primaryLabel="Enquire Now"
      />
    </>
  )
}
