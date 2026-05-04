import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Atma Darpan | Darpan Foundation',
  description: 'Pure Food for Soul. Realising true potential through Sahaj Smriti Yog meditation.',
}

const planes = [
  {
    label: 'Mind',
    desc: 'The mind represents the plane of consciousness where all creation takes place. Through the practices of meditation and transmission, one can cleanse the web of creation and attain a balanced state of inner peace and tranquility.',
  },
  {
    label: 'Self',
    desc: 'The self signifies the plane of consciousness from which all actions originate, often referred to as one&rsquo;s character. By engaging in meditation and transmission, individuals can build their self-confidence and inner peace.',
  },
  {
    label: 'Soul',
    desc: 'The soul embodies the essence of our true being, beyond the limitations of verbal expression. Through the transformative powers of meditation and divine transmission, the soul undergoes evolution and experiences expansion in its journey of self-discovery.',
  },
]

const steps = ['Initiation', 'Cleaning and sharing', 'Divine transmission']

export default function AtmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Atma Darpan"
        title="Pure Food for Soul"
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                The ultimate goal of life is to realise one&rsquo;s true potential and the purpose of existence.
              </p>
              <p>
                Sahaj Smriti Yog&rsquo;s meditation serves as a pathway to explore unexplored dimensions within oneself.
              </p>
              <p>
                Meditation facilitates the profound union between the human and the divine, harmonising the individual soul&rsquo;s consciousness with the universal&rsquo;s consciousness. Within individual consciousness, there exist three levels &ndash; Mind, Self and Soul. These corresponding levels also exist within universal consciousness, which can also be referred to as Mind, Self and Soul.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-charcoal py-16 md:py-24 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-3xl md:text-5xl text-ivory leading-snug">
              &ldquo;Imagination can be realised, but realisation cannot be imagined.&rdquo;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THREE PLANES */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Three planes of consciousness
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planes.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-ivory rounded-2xl p-8 h-full border border-charcoal/5">
                  <h3 className="font-display text-3xl text-saffron mb-4">{p.label}</h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest text-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg" className="text-ivory/85">
              <p>
                Meditation is a universal state that transcends the boundaries of segregative identities such as gender, ethnicity, religion, nationality, culture and civilisation. Every human being has the potential to experience this state, albeit to varying extents, depths and durations.
              </p>
              <p>
                Meditation serves as a pathway to self-development and inner peace, allowing some individuals to recognize the profound purpose and meaning of their lives, while others may not even be aware of its transformative potential.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Sahaj Smriti Yog&rsquo;s Meditation involves the following steps:
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 flex items-center gap-6">
                  <span className="text-saffron font-display text-3xl shrink-0">{`0${i + 1}`}</span>
                  <h3 className="font-display text-xl text-charcoal">{s}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCard py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Sign Up for Self Transformation
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Atma Darpan" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
