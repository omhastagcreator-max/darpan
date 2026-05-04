import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Jeevan Darpan | Darpan Foundation',
  description: 'Pure Food for Self. Vanaprasthashram — Home for Hermits.',
}

const offers = [
  'Comfortable private and semi-private rooms',
  'Community kitchen and kitchenettes for cooking',
  'Housekeeping and laundry service',
  'Medication management',
  'Social programs and activities',
  'Transportation to the nearest hospital',
]

const enables = [
  'Independent living in a lively environment full of diverse activities around the clock',
  'Staying meaningful by serving society at one’s own pace and interest',
  'Disseminating knowledge, experience and skills',
  'Experiencing the wholeness of life',
]

const offerings = [
  'The sunset years of life offer a precious chance to gain a unique perspective, which can only be shaped by a lifetime of experiences.',
  'It’s a time to contemplate achievements, learn from past mistakes and share wisdom with the younger generation.',
  'Retirement also opens up avenues to pursue long-awaited hobbies and interests that were postponed during the working years.',
]

export default function JeevanPage() {
  return (
    <>
      <PageHero
        eyebrow="Jeevan Darpan"
        title="Pure Food for Self"
        bgImage="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                All of us strive to fulfill our needs and create a balance between work and family, however, everyone is not able to sustain it all through their lives. As one approaches retirement age, life&rsquo;s contradictions become more apparent and the quest for deeper meaning intensifies. But, the capacity to take initiatives, mobilise people and keep oneself involved in Parmaarthik&rsquo;s pursuit weakens.
              </p>
              <p>But there are a number of wonderful things that retirement offers:</p>
            </Prose>
            <ul className="mt-8 space-y-4">
              {offerings.map((o, i) => (
                <li key={i} className="flex items-start gap-4 text-charcoal/85 text-lg leading-relaxed">
                  <span className="text-saffron font-display text-2xl shrink-0 leading-none">{`0${i + 1}`}</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* VANAPRASTHASHRAM */}
      <section className="bg-charcoal text-ivory py-16 md:py-24 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Vanaprasthashram
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Home for Hermits
            </h2>
            <Prose size="md" className="text-ivory/85">
              <p>
                The residential area at Darpan Ashram caters to diverse preferences, featuring independent houses and shared units, all equipped with modern amenities. Each dwelling is thoughtfully designed to embrace eco-friendliness, utilising resource-efficient materials and processes that uphold environmental responsibility throughout the building&rsquo;s lifecycle.
              </p>
              <p>
                At this old-age residential home, you&rsquo;ll find the perfect setting for an independent and secure retirement life.
              </p>
              <p>
                Experience the joy of community living, where care, convenience and comfort merge seamlessly. It&rsquo;s a place that opens doors for senior citizens to new perspectives and purposes beyond the realm of the physical and material world.
              </p>
              <p>
                Darpan&rsquo;s Vanaprasthashram (Home for Hermits) is a nurturing haven that fosters personal growth during this significant stage of life. It offers a pathway to inner well-being, allowing senior citizens to embrace their old age and celebrate this important phase of their journey.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Home for Hermits offers:
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {offers.map((o, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-ivory rounded-2xl p-6 border border-charcoal/5 flex items-start gap-3">
                  <span className="text-saffron mt-1.5 shrink-0">●</span>
                  <span className="text-charcoal/85">{o}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-10 leading-tight">
              This space for senior citizens at Darpan Ashram enables:
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

      <section className="bg-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Sponsor a Kuteer !!
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Jeevan Darpan" showProgramField showCityField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
