import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Sahaj Smriti Kriya | Darpan Foundation',
  description: 'Sahaj Smriti Kriya is a revealed divine providence devised by Guruji to help initiates transcend.',
}

const benefits = [
  'Increases overall sense of well-being',
  'Creates lightness and fluidity',
  'Integrate your body and mind',
  'Improves concentration',
  'Increases immunity',
  'Improves metabolism',
]

export default function KriyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Sahaj Smriti Kriya"
        title="Sahaj Smriti Kriya"
        bgImage="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Sahaj Smriti Kriya</strong> is a revealed divine providence. Guruji devised it to help initiates transcend. Tuned in through yogic techniques it revitalizes subtle currents of prana (life energy) in the spine and brain.
              </p>
              <p>Practicing kriya accelerates one&rsquo;s spiritual evolution and awareness.</p>
              <p>
                It enables the normal activities of the body and nervous system to slow down to natural rhythm, resulting in deep inner stillness of body, and freeing the mind from the usual turbulence of thoughts, suppressed emotions and disturbed sensory perceptions.
              </p>
              <p>
                In the clarity of that inner energized stillness, one comes to experience transcendental peace and meditative state.
              </p>
              <p>
                <strong>Sahaj Smriti Kriya</strong> essentially, helps to gain control and lock your energy &ndash; or life force &ndash; the way you want.
              </p>
              <p>
                Most of the times practitioners find it difficult to sit in meditation as their mind and body will not be aligned.
              </p>
              <p>
                The kriya helps to attain control of your energy system, to direct the energy to the parts of your body you desire it to go to and makes meditation easy.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Practice of
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Sahaj Smriti Kriya
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5">
                  <div className="text-saffron font-display text-2xl mb-2">{`0${i + 1}`}</div>
                  <p className="text-charcoal/85 leading-relaxed">{b}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Become a Sahaj Smriti Yog practitioner
            </h2>
            <p className="text-charcoal/70 text-lg">I&rsquo;m interested in learning Sahaj Smriti Kriya</p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Sahaj Smriti Kriya" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
