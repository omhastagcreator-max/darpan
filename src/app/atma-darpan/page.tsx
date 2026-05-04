import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Atma Darpan | Darpan Foundation',
  description:
    'Pure food for the soul. The realisation of one\'s true potential through Sahaj Smriti Yog meditation — bridging the human and the divine.',
}

const planes = [
  {
    label: 'Mind',
    title: 'The plane of all creation',
    desc: 'Through meditation and transmission, the web of creation can be cleansed and a state of balanced inner peace attained.',
  },
  {
    label: 'Self',
    title: 'The plane from which all action originates',
    desc: 'What might be called character. Through meditation and transmission, self-confidence and inner peace are built, layer by layer.',
  },
  {
    label: 'Soul',
    title: 'The very essence of what we are',
    desc: 'Beyond all verbal expression. Through meditation and divine transmission, the soul evolves and experiences expansion in its journey of self-discovery.',
  },
]

const steps = [
  { num: '01', name: 'Initiation', desc: 'The formal beginning of the practice.' },
  { num: '02', name: 'Cleaning & sharing', desc: 'Releasing what has accumulated, sharing what has been received.' },
  { num: '03', name: 'Divine transmission', desc: 'The transmission that deepens and matures the practice over time.' },
]

export default function AtmaPage() {
  return (
    <>
      <PageHero
        eyebrow="Atma Darpan आत्मा"
        title="Awaken what was never lost."
        subtitle="The deepest purpose of life is the realisation of one&apos;s true potential — and the discovery of the purpose of one&apos;s existence."
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      {/* QUOTE */}
      <section className="bg-charcoal py-24 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-3xl md:text-5xl text-ivory leading-snug">
              &ldquo;Imagination can be realised — but realisation cannot be imagined.&rdquo;
            </p>
            <p className="mt-10 text-goldLight tracking-[0.25em] uppercase text-xs font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                The deepest purpose of life, Atma Darpan teaches, is the realisation of one&apos;s true potential and the discovery of the purpose of one&apos;s existence.
              </p>
              <p>
                Sahaj Smriti Yog&apos;s meditation practice serves as the pathway into this territory — a means of exploring the uncharted dimensions within yourself.
              </p>
              <p>
                Meditation facilitates a profound union between the human and the divine — harmonising the individual soul&apos;s consciousness with the consciousness of the universal. Within individual consciousness there are three levels: <strong>Mind, Self and Soul.</strong> These same three levels also exist within universal consciousness. Meditation is the bridge between them.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* THREE PLANES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Three Planes of Consciousness
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Mind. Self. Soul.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planes.map((p, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-ivory rounded-2xl p-8 h-full border border-charcoal/5">
                  <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium block mb-3">
                    {p.label}
                  </span>
                  <h3 className="font-display text-xl text-charcoal mb-4 leading-tight">{p.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSALITY */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              An Important Truth
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Meditation belongs to no one — and to everyone.
            </h2>
            <Prose className="text-ivory/85" size="md">
              <p>
                Meditation is not the property of any religion, gender, ethnicity, nationality or culture. It is a universal state. Every human being has the capacity to experience it — to varying extents, depths and durations.
              </p>
              <p>
                For some, it opens a window to the profound purpose of their life. For others, the transformative potential is not yet apparent. Atma Darpan&apos;s mission is to make that window accessible to all.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* THREE STEPS */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Practice
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Three steps in Sahaj Smriti Yog meditation.
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5 flex items-start gap-6">
                  <span className="text-saffron font-display text-3xl shrink-0">{s.num}</span>
                  <div>
                    <h3 className="font-display text-xl text-charcoal mb-1">{s.name}</h3>
                    <p className="text-charcoal/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Sign up for self-transformation.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Atma Darpan" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
