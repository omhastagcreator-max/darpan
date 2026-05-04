import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import { Flame, BookOpen, Brain, Mountain, Sparkles, Globe, Wifi } from 'lucide-react'

export const metadata = {
  title: 'Ignite Self | Darpan Foundation',
  description:
    'Channel your inner fire. A 3-day immersive program of self-inquiry and self-discovery. Available as Retreat, Reflect, and Online formats.',
}

const modules = [
  {
    Icon: Flame,
    label: 'Module 01',
    title: 'Knowing your body',
    bullets: [
      'Understanding individual body types',
      'Choosing food according to your body\'s nature',
      'Yogasanas (yoga postures)',
      'Breathing exercises',
      'Daily tools for physical well-being',
    ],
  },
  {
    Icon: BookOpen,
    label: 'Module 02',
    title: 'Exploring your purpose',
    bullets: [
      'Self-reflection through meaningful activities',
      'Guided relaxation',
      'Building a personal Vision Board',
      'Collage-making for clarity',
      'Journaling as spiritual practice',
    ],
  },
  {
    Icon: Brain,
    label: 'Module 03',
    title: 'Mind, Self and Soul',
    bullets: [
      'Individual and group activities',
      'Games and experiential exercises',
      'Video-based learning',
      'Storytelling sessions',
      'Mind-mapping techniques',
    ],
  },
  {
    Icon: Sparkles,
    label: 'Module 04',
    title: 'The big picture',
    bullets: [
      'Connecting all threads — life as a whole',
      'Self-transformation tools',
      'Introduction to Sahaj Smriti Kriya',
      'Guided meditation session',
    ],
  },
]

const benefits = [
  'Improved concentration',
  'Balanced mental energy',
  'Greater productivity',
  'Heightened inner peace',
  'Physical well-being',
  'Emotional equilibrium',
]

const formats = [
  {
    Icon: Mountain,
    label: 'Retreat',
    location: 'Darpan Ashram, Urigam, TN',
    duration: '3 days, immersive',
    desc: 'A full immersion in the pristine surroundings of Darpan Ashram. Includes a Nakshatra Darpan stargazing session and a forest trek as part of Kshetra Darpan.',
  },
  {
    Icon: Globe,
    label: 'Reflect',
    location: 'Your premises, or external venues',
    duration: '3-hour sessions × 4 days + one day at the ashram',
    desc: 'In-house experiential sessions for organisations or community groups. An accelerated path to personal effectiveness and growth.',
  },
  {
    Icon: Wifi,
    label: 'Online',
    location: 'Wherever you are',
    duration: '4 modules × 4 one-hour sessions per module',
    desc: 'Separate online modules for Body, Mind, Self and Soul. Choose your starting module and complete at your own pace.',
  },
]

export default function IgniteSelfPage() {
  return (
    <>
      <PageHero
        eyebrow="Ignite Self"
        title="Channel your inner fire."
        subtitle="An experiential journey of self-inquiry and self-discovery. When you kindle your inner fire, you uncover not just your potential — but the capacity to inspire transformation in others."
        bgImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1740&auto=format&fit=crop"
      />

      {/* INTRO PROSE */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                In a world that prizes competition and performance, stress has become ordinary. Ignite Self cuts through the noise. The program guides you toward a calm, sustained state of inner equilibrium through Sahaj Smriti Yog — and is, fundamentally, a journey of unlocking your own true potential.
              </p>
              <p>
                <em>To know yourself is to know your Body, Mind, Self — and ultimately to experience your Soul.</em> Not what others have told you about yourself. What you yourself discover.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Curriculum
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Four modules. One whole journey.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {modules.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-ivory border border-charcoal/5 rounded-2xl p-8 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium block mb-2">
                        {m.label}
                      </span>
                      <h3 className="font-display text-2xl text-charcoal">{m.title}</h3>
                    </div>
                    <div className="text-saffron shrink-0">
                      <m.Icon size={26} strokeWidth={1.4} />
                    </div>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {m.bullets.map((b, j) => (
                      <li key={j} className="text-charcoal/80 text-sm flex items-start gap-2">
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

      {/* BENEFITS */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Practice and Observe
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-12 leading-tight">
              What changes — for those who stay with it.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-xl py-5 px-6 text-ivory/90">
                  {b}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FORMATS */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Three Ways to Begin
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Choose your format.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-creamCard rounded-2xl p-8 h-full border border-charcoal/5 hover:border-saffron/40 transition-colors">
                  <div className="text-saffron mb-5">
                    <f.Icon size={28} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-1">Ignite Self {f.label}</h3>
                  <p className="text-saffron text-xs uppercase tracking-widest mb-1">{f.location}</p>
                  <p className="text-charcoal/60 text-xs italic mb-4">{f.duration}</p>
                  <p className="text-charcoal/80 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Register
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Register for Ignite Self.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Tell us which format calls to you. We will write back personally.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm
              programName="Ignite Self"
              showProgramField
              buttonLabel="Send Enquiry"
            />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
