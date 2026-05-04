import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Satsang | Darpan Foundation',
  description:
    'Satsang means "in association with Truth." Whosoever is searching for Truth, is engaged in Satsang.',
}

const forms = [
  'Be in the physical presence and receive guidance',
  'Join online Satsangs',
  'Group meditations',
  'Personal Conversations (Upanishads)',
  'Through initiation in SSY',
]

export default function SatsangPage() {
  return (
    <>
      <PageHero
        eyebrow="Satsang"
        title="Satsang"
        bgImage="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Satsang means <strong>&lsquo;in association with Truth&rsquo;</strong>. Whosoever is searching for Truth, is engaged in Satsang.
              </p>
              <p>
                Guruji has dedicated his life in service to all who desire to discover their True Self.
              </p>
              <p>
                Once initiated, Guruji&rsquo;s wisdom and loving guidance point us to who we are beyond the limitations of our personal conditioning and misplaced identity.
              </p>
              <p>
                Through interactions with him, seekers of truth from all varied backgrounds and traditions can locate themselves spiritually, understand their own mind, recognize self, feel, and experience the soul.
              </p>
              <p>
                Satsang helps one to comprehend one&rsquo;s real identity, realizing the real nature and attaining balanced state of seeing.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              Awakening eternal consciousness with awareness of incessant change!!!
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-3 leading-tight">
              Satsang can be through any method:
            </h2>
            <ul className="mt-8 space-y-4">
              {forms.map((f, i) => (
                <li key={i} className="flex items-start gap-4 text-charcoal/85 text-lg leading-relaxed">
                  <span className="text-saffron font-display text-2xl shrink-0 leading-none">{`0${i + 1}`}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              I would like to be in Satsang!
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Satsang" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
