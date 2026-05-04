import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: "Guruji's Vision | Darpan Foundation",
  description: "Guruji's Vision is to transform every individual spiritually.",
}

const pillars = [
  {
    label: 'Body',
    bullets: [
      'Learning about body in Yogic & Ayurvedic way',
      'Living in tune with nature',
      'Growing food in natural way',
      'Sustainable Living',
    ],
  },
  {
    label: 'Mind',
    bullets: [
      'Sustainable learning modules for children',
      'Solution Center for adults and teens',
      'Discourses for seekers',
      'Training programs',
    ],
  },
  {
    label: 'Self',
    bullets: [
      'Equipping for livelihood',
      'Equipping for living',
      'Good Habits Vs Habits',
      'Choices Vs Alternatives',
      'Will Vs Circumstances',
    ],
  },
  {
    label: 'Soul',
    bullets: [
      'Consciousness Vs Awakening',
      'Meditation (Journey from Mind to Heart)',
      'Creation ( Universal Mind)',
      'Transmission: Beholding & Becoming',
    ],
  },
]

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Guruji's Vision"
        title="Guruji's Vision"
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Guruji&rsquo;s Vision is to transform every individual spiritually.</strong>
              </p>
              <p>
                Transformed individuals alone become solutions to the problems that our planet faces. Real sustainable transformation is possible only through activities-oriented path of spiritual realisation. Clarity attained on the path of spiritual realisation make one feel supremely confident and strong willed in designing destiny.
              </p>
              <p className="text-saffron font-display text-2xl italic">
                Making best choices and decisions helps weave destiny.
              </p>
              <p>
                Guruji formulated Darpan&rsquo;s vision representing Body, Mind, Self and Soul. A vision to amplify the power of people to choose an alternate way of life. Programs and initiatives are conceptualized to execute this vision.
              </p>
              <p>
                While engaging ourselves intensely in earning to live, we have forgotten how to live. Our priorities in life have got misplaced. Sustainability in terms of meaningful work, health, peace and happiness is evading most of the humanity today.
              </p>
              <p>
                It is an attempt to create sustainable, accommodative, composite and compassionate environment that can be a model for the present &amp; future generations on earth.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* FOOD FOR TRANSFORMATION */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Food for Transformation
            </h2>
            <Prose className="text-charcoal/80 max-w-3xl mx-auto" size="md">
              <p>
                Food is a great source of our energy therefore, everyone relate it easily. We consume food at the level of Body, Mind, Self and Soul. Our food choices at each level have a direct impact in shaping our life at each level. Pure food rightly given as nourishment at all these levels brings about wholesomeness.
              </p>
              <p>
                As we become more conscious about our food choices, we not only nourish ourselves but also contribute to a sustainable ecosystem. By choosing locally grown produces we can positively impact the environment and create a healthier planet for future generations.
              </p>
              <p className="text-saffron font-medium">
                The path to transformation starts with what you consume. It&rsquo;s time to take action for a healthier planet!
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* 4-STEP JOURNEY (verbatim bullets) */}
      <section className="bg-forest text-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Four-Step Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              It is a four step Journey from
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div className="text-goldLight font-display text-4xl mb-4">{p.label}</div>
                  <ul className="space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="text-ivory/85 text-sm flex items-start gap-2">
                        <span className="text-saffron mt-1.5 shrink-0">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Know more about Darpan's Vision"
        primaryHref="/contact"
        primaryLabel="Enquire Now"
      />
    </>
  )
}
