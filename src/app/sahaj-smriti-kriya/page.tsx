import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Sahaj Smriti Kriya | Darpan Foundation',
  description:
    'A divinely revealed practice devised by Guruji to help initiates transcend. Yogic techniques that re-energise prana through the spine and brain.',
}

const benefits = [
  { title: 'Heightened well-being', desc: 'An overall sense of vitality that pervades the day.' },
  { title: 'Lightness and fluidity', desc: 'A felt sense of inner spaciousness and ease.' },
  { title: 'Body–mind integration', desc: 'The two stop pulling in different directions.' },
  { title: 'Sharper concentration', desc: 'Attention settles where you place it.' },
  { title: 'Strengthened immunity', desc: 'A natural by-product of the body returning to its rhythm.' },
  { title: 'Improved metabolism', desc: 'Energy moves through the system more cleanly.' },
]

export default function KriyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Sahaj Smriti Kriya"
        title="Command your life energy."
        subtitle="A revealed divine providence — devised by Guruji to help initiates transcend. Yogic techniques that re-energise the subtle currents of prana moving through the spine and brain."
        bgImage="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Sahaj Smriti Kriya</strong> is a revealed divine providence. Guruji devised it to help initiates transcend. Tuned through yogic technique, it revitalises the subtle currents of prana — life force — moving through the spine and the brain. Regular practice accelerates spiritual evolution and deepens awareness.
              </p>
              <p>
                Its effect is physiological as much as spiritual. The ordinary activity of body and nervous system slows to a natural, unhurried rhythm — creating profound physical stillness. The mind, freed from its usual turbulence of recurring thoughts, suppressed feelings and sensory noise, settles into a state of energised inner clarity.
              </p>
              <p>
                In that clarity, transcendental peace becomes accessible — and meditation becomes natural rather than effortful.
              </p>
              <p>
                The practice essentially teaches you to <strong>master your own energy</strong> — your life force — and direct it consciously to wherever you wish it to go. Most practitioners who struggle with meditation discover the challenge is not willpower. It is misalignment between body and mind. Kriya resolves this.
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
              &ldquo;The kriya helps you direct energy to wherever you wish it to go — and makes meditation easy.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Benefits of Practice
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              What the practice brings.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5">
                  <div className="text-saffron font-display text-xl mb-3">{`0${i + 1}`}</div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{b.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATION NOTE */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="bg-creamCard border border-saffron/20 rounded-2xl p-10 text-center">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              On Initiation
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 leading-tight">
              Kriya is offered through formal initiation.
            </h3>
            <p className="text-charcoal/70 leading-relaxed">
              Reach out to begin a conversation about whether this is the right step on your path right now.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              I&apos;m interested in learning Sahaj Smriti Kriya.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Sahaj Smriti Kriya" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
