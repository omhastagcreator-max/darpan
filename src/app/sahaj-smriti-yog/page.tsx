import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Sahaj Smriti Yog | Darpan Foundation',
  description:
    'A journey from clear thinking — to transcending thinking — to the experience of genuine peace. The path back to who you already are.',
}

const touchstones = [
  { num: '01', name: 'Understanding', desc: 'The field of intelligence and emotions.' },
  { num: '02', name: 'Experiencing', desc: 'The field of perception and direct happening.' },
  { num: '03', name: 'Feeling', desc: 'The field of Reality itself.' },
]

const dailyBenefits = [
  {
    title: 'Stress relief and resilience',
    desc: 'A new perspective on stressful situations — and the inner capacity to manage and eventually move beyond stress.',
  },
  {
    title: 'Body and mind in balance',
    desc: 'Heightened self-awareness, grounded presence, fewer negative loops, better-quality relationships.',
  },
  {
    title: 'Sharper brain, freer creativity',
    desc: 'Productivity rises. Imagination unbinds. Creative intelligence widens.',
  },
  {
    title: 'Cleaner decision-making',
    desc: 'Mental clutter dissolves. Intelligence sharpens. Decisions arrive faster, with greater clarity.',
  },
]

export default function YogPage() {
  return (
    <>
      <PageHero
        eyebrow="Sahaj Smriti Yog"
        title="The path back to yourself."
        subtitle="A journey from clear thinking — to transcending thinking — to the experience of genuine peace. An opportunity to recognise your true self and become the author of your own destiny."
        bgImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1788&auto=format&fit=crop"
      />

      {/* INTRO PROSE */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Awakening to our true nature does not require acquiring anything new. It requires rediscovering within ourselves that which is timelessly pure — and always in harmony with the deepest truth.
              </p>
              <p>
                <strong>Sahaj</strong> means natural, spontaneous, effortless. <strong>Smriti</strong> means remembrance — not the recollection of events, but the recognition of what you already are.
              </p>
              <p>
                Many people approach spirituality as an escape from the world — a turning away from responsibility toward some distant Divine. Sahaj Smriti Yog offers a fundamentally different understanding. Spirituality is not withdrawal. It is the transformation of life from within, while remaining fully engaged with it.
              </p>
              <p>
                There is no need to renounce your family, your work, your aspirations or any dimension of your humanity. This universality, simplicity and natural ease is precisely what draws seekers from across the world to Guruji.
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
            <p className="font-quote italic text-3xl md:text-5xl text-ivory leading-snug">
              &ldquo;Clarity is power.&rdquo;
            </p>
            <p className="mt-8 text-goldLight tracking-[0.25em] uppercase text-xs font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THREE TOUCHSTONES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Path
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Three touchstones.
            </h2>
            <p className="text-charcoal/70 text-lg max-w-xl mx-auto">
              Sahaj Smriti Yog is a preparation path — built on three fields of inner work.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {touchstones.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-ivory rounded-2xl p-8 h-full border border-charcoal/5 text-center">
                  <div className="text-saffron font-display text-4xl mb-4">{t.num}</div>
                  <h3 className="font-display text-2xl text-charcoal mb-3">{t.name}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 text-center max-w-3xl mx-auto">
            <Prose>
              <p>
                The techniques of Sahaj Smriti Yog allow your restless mind to settle — without force, without suppression — into a state of deep rest and clarity.
              </p>
              <p className="text-saffron font-medium">
                Sahaj Smriti Yog leads to: Purity in Heart. Clarity in Thought. Correctness in Decision-Making.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* DAILY BENEFITS */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              In Daily Life
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              What practitioners notice.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyBenefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
                  <h3 className="font-display text-xl mb-3 text-goldLight">{b.title}</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">{b.desc}</p>
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
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Become a Sahaj Smriti Yog practitioner.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Sahaj Smriti Yog" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
