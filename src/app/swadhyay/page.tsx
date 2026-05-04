import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Swadhyay | Darpan Foundation',
  description:
    'Swa (self) is the most intriguing and mysterious puzzle that every individual longs to solve.',
}

export default function SwadhyayPage() {
  return (
    <>
      <PageHero
        eyebrow="Swadhyay"
        title="Swadhyay"
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Swa(self)</strong> is the most intriguing and mysterious puzzle that every individual longs to solve.
              </p>
              <p>
                None can solve it for the other. At best one becomes its mirror where all may see themselves mirroring in it.
              </p>
              <p>
                Self-correction becomes possible by looking into the mirror, it is in this manner that our individual egos transform without hurting themselves.
              </p>
              <p>
                It&rsquo;s experiencing transcendence (amritaanubhav). Like the Existence, Swa(self) is also immortal and infinite.
              </p>
              <p>
                <strong>Satsang, Seva</strong> and <strong>Swadhyaya</strong> are different forms of inclinations flowing out from the same eternal cosmic consciousness. Therefore, their essential union is evident. Our engaging with one inevitably strengthens the other two.
              </p>
              <p>
                Natural surroundings of ashram, quietude of seekers filled with spiritual vibrations of penance help in attaining the clarity faster.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* DEFINITION */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="bg-ivory border border-saffron/20 rounded-2xl p-10 text-center">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-3xl text-charcoal leading-snug">
              Swadhyaya (self-Seeing) is the transformational process of one&rsquo;s becoming capable of seeing oneself functioning in one&rsquo;s infiniteness in the eternal mirror of cosmic conscious.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SELF-ENQUIRY */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Self-Enquiry
            </h2>
            <Prose>
              <p>
                Self-Enquiry is the simplest first step into swadhyaya. Self-enquiry begins with asking questions about self to self-realised master and contemplating on the responses perceived.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              I want to practice Swadhyay
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Swadhyay" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
