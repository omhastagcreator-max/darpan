import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import LotusDivider from '@/components/LotusDivider'
import { Sprout, Brain, CircleDot, Sparkles } from 'lucide-react'

export const metadata = {
  title: "Guruji's Vision | Darpan Foundation",
  description:
    "Guruji's vision: holistic development across Body, Mind, Self and Soul. Pure food for transformation at every level of human existence.",
}

const pillars = [
  {
    Icon: Sprout,
    label: 'Body',
    title: 'Pure Food for the Body',
    intro: 'Heal the earth, heal yourself.',
    bullets: [
      'Learning about the body in the Yogic and Ayurvedic way',
      'Living in tune with nature',
      'Growing food the natural way',
      'Sustainable living',
    ],
  },
  {
    Icon: Brain,
    label: 'Mind',
    title: 'Pure Food for the Mind',
    intro: 'Thoughts become your world.',
    bullets: [
      'Sustainable learning modules for children',
      'A solution centre for adults and teens',
      'Spiritual discourses for seekers',
      'Personal-development training programs',
    ],
  },
  {
    Icon: CircleDot,
    label: 'Self',
    title: 'Pure Food for the Self',
    intro: 'Right choices, real transformation.',
    bullets: [
      'Equipping you for livelihood',
      'Equipping you for living',
      'Good habits versus habits',
      'Choices, alternatives, will and circumstance',
    ],
  },
  {
    Icon: Sparkles,
    label: 'Soul',
    title: 'Pure Food for the Soul',
    intro: 'Awaken what was never lost.',
    bullets: [
      'Consciousness and awakening',
      'Meditation — the journey from mind to heart',
      'Creation and the universal mind',
      'Transmission — beholding and becoming',
    ],
  },
]

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Guruji's Vision"
        title="Transformed individuals become the answer."
        subtitle="Real, sustainable change can only grow from an activity-oriented path of spiritual realisation. Clarity is what gives a person the confidence to design their own destiny."
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      {/* INTRO PROSE */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji&apos;s vision is to transform every individual spiritually. Transformed individuals alone become solutions to the problems our planet faces.
              </p>
              <p>
                Real, sustainable transformation is only possible through an activity-oriented path of spiritual realisation. The clarity attained on such a path makes a person feel supremely confident — strong-willed enough to <strong>design their destiny by making the best choices and decisions.</strong>
              </p>
              <p>
                Guruji formulated Darpan&apos;s vision around four dimensions of the human being: <strong>Body, Mind, Self and Soul.</strong> A vision to amplify the power of people to choose an alternate way of life. Every program and initiative at Darpan exists to execute this vision.
              </p>
              <p>
                Engaged so intensely in earning to live, much of humanity has forgotten how to live. Priorities have been misplaced. Sustainability — in the form of meaningful work, health, peace and happiness — has slipped away from many lives. Darpan is an attempt to model what a sustainable, accommodative, composite and compassionate environment can look like for present and future generations.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* FOOD FOR TRANSFORMATION */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Food for Transformation
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-5 leading-tight">
              You are what you consume — at every level.
            </h2>
            <Prose className="text-charcoal/70 max-w-2xl mx-auto" size="md">
              <p>
                We consume food at the level of Body, Mind, Self and Soul. The choices we make at each level shape our lives at that level. Pure food, rightly given as nourishment at all four, brings about wholeness.
              </p>
              <p>
                The path to transformation begins with what you take in. It is time to take action — for a healthier you, and a healthier planet.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* 4 PILLARS DETAILED */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Four-Step Journey
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Body. Mind. Self. Soul.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-colors">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium block mb-2">
                        Step 0{i + 1}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                      <p className="text-saffron text-sm font-medium mt-1">{p.intro}</p>
                    </div>
                    <div className="text-saffron shrink-0 ml-4">
                      <p.Icon size={28} strokeWidth={1.4} />
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="text-ivory/80 text-sm flex items-start gap-2">
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
        title="Know more about Darpan's vision."
        description="Speak with us about how to bring this vision into your own life — through a program, a visit, or a conversation."
        primaryHref="/contact"
        primaryLabel="Enquire Now"
        secondaryHref="/programs"
        secondaryLabel="Browse Programs"
      />
    </>
  )
}
