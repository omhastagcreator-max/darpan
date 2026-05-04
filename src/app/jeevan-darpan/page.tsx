import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import { Home, Utensils, Sparkles, HeartPulse, Calendar, Bus } from 'lucide-react'

export const metadata = {
  title: 'Jeevan Darpan | Darpan Foundation',
  description:
    'Vanaprasthashram — a home for hermits at Darpan Ashram. A purposeful retirement, in community, with care.',
}

const offers = [
  { Icon: Home, label: 'Comfortable rooms', desc: 'Private and semi-private.' },
  { Icon: Utensils, label: 'Community kitchen', desc: 'Plus individual kitchenettes.' },
  { Icon: Sparkles, label: 'Housekeeping & laundry', desc: 'Looked after, end to end.' },
  { Icon: HeartPulse, label: 'Medication management', desc: 'Support with daily routines.' },
  { Icon: Calendar, label: 'Social programs', desc: 'Regular activities and gatherings.' },
  { Icon: Bus, label: 'Hospital transport', desc: 'To the nearest medical facility.' },
]

const enables = [
  'Independent living within a lively, activity-rich environment',
  'Opportunities to remain meaningful by serving society at your own pace and interest',
  'Sharing knowledge, experience and skills with others',
  'The experience of wholeness — a life fully lived',
]

export default function JeevanPage() {
  return (
    <>
      <PageHero
        eyebrow="Jeevan Darpan जीवन"
        title="A different vision of the sunset years."
        subtitle="As retirement approaches, life&apos;s contradictions grow more apparent — and the quest for deeper meaning intensifies. Jeevan Darpan offers a different vision of what this season can be."
        bgImage="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                All of us strive to meet our needs and find some balance between work and family. But not everyone can sustain that balance throughout the entirety of their lives. As retirement approaches, the energy to take initiative, mobilise others, and remain engaged in purposeful pursuit often weakens.
              </p>
              <p>
                The sunset years carry a precious, irreplaceable gift: a perspective shaped by a lifetime of experience. They are a time to reflect on the journey — to learn from what has passed, and to share that accumulated wisdom with younger generations. They also open new space for pursuing interests and passions that were postponed during the working years.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-charcoal py-24 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              The opportunity for an independent and secure retirement — in community, with purpose.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VANAPRASTHASHRAM */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Vanaprasthashram
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Home for hermits.
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto leading-relaxed">
              The residential area at Darpan Ashram has been designed for this stage of life. Independent houses and shared units — built with modern amenities, using resource-efficient and environmentally responsible materials.
            </p>
          </FadeIn>

          <FadeIn className="mt-16">
            <h3 className="font-display text-2xl text-charcoal mb-8 text-center">What it offers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {offers.map((o, i) => (
                <div key={i} className="bg-ivory rounded-2xl p-6 border border-charcoal/5">
                  <div className="text-saffron mb-3">
                    <o.Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h4 className="font-display text-lg text-charcoal mb-1">{o.label}</h4>
                  <p className="text-charcoal/70 text-sm">{o.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT IT ENABLES */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              What It Enables
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-10 leading-tight">
              For those who choose to live here.
            </h2>
            <ul className="space-y-4">
              {enables.map((e, i) => (
                <li key={i} className="flex items-start gap-4 text-ivory/85 text-lg leading-relaxed">
                  <span className="text-saffron font-display text-2xl shrink-0 leading-none">{`0${i + 1}`}</span>
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Sponsor a Kuteer.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Or write to us about residency at Vanaprasthashram.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Jeevan Darpan" showProgramField showCityField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
