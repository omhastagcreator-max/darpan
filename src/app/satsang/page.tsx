import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import { Users, Wifi, Heart, MessageCircle, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Satsang | Darpan Foundation',
  description:
    'In the company of Truth. Through interactions with Guruji, seekers locate themselves spiritually — comprehending their real identity.',
}

const forms = [
  { Icon: Users, label: 'In Guruji\'s presence', desc: 'Be physically present with Guruji and receive direct guidance.' },
  { Icon: Wifi, label: 'Online Satsang', desc: 'Join sessions from anywhere in the world.' },
  { Icon: Heart, label: 'Group meditation', desc: 'Practice together — meditation deepens in shared silence.' },
  { Icon: MessageCircle, label: 'Personal conversations', desc: 'Upanishad-style dialogues, one to one.' },
  { Icon: Sparkles, label: 'Initiation into SSY', desc: 'Begin the formal practice of Sahaj Smriti Yog.' },
]

export default function SatsangPage() {
  return (
    <>
      <PageHero
        eyebrow="Satsang"
        title="In the company of Truth."
        subtitle='Sat means "Truth." Sang means "company." Whoever is genuinely searching for Truth is already in Satsang.'
        bgImage="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji has dedicated his life to serving all who desire to discover their true Self. Once initiated into his guidance, seekers find his wisdom and loving direction pointing them — consistently, patiently — toward who they truly are, beyond the conditioning they have inherited and the identities they have accumulated.
              </p>
              <p>
                Through direct interaction with Guruji, truth-seekers from every background and tradition find themselves spiritually located. They gain understanding of their own mind, begin to recognise the self, and progressively feel and encounter the soul.
              </p>
              <p>
                Satsang, at its core, helps a person grasp their genuine identity — realising their true nature and arriving at a balanced, clear-eyed state of inner seeing.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="bg-charcoal py-24 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              Awakening eternal consciousness — with full awareness of the constant change of the outer world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FIVE FORMS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Forms of Satsang
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Five doorways into the same room.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((f, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full">
                  <div className="text-saffron mb-4">
                    <f.Icon size={26} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{f.label}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-charcoal/70 italic text-lg">
              Satsang happens every Sunday in Bengaluru. Reach out for the location and time.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              I would like to be in Satsang.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Satsang" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
