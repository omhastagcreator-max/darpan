import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Swadhyay | Darpan Foundation',
  description:
    'The most intriguing puzzle every individual longs to solve — yourself. The practice of self-inquiry through the mirror of a self-realised master.',
}

export default function SwadhyayPage() {
  return (
    <>
      <PageHero
        eyebrow="Swadhyay"
        title="Study the most mysterious subject — yourself."
        subtitle="No one can solve the puzzle of self for another. At best, one becomes the mirror in which others catch a clearer glimpse of themselves."
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                <strong>Swa</strong> (the self) is the most intriguing and mysterious puzzle every individual longs to solve. No one can solve it on another&apos;s behalf. At best, one person becomes the mirror in which others catch a clearer glimpse of themselves.
              </p>
              <p>
                When you look honestly into a mirror, self-correction becomes possible — not through force, but through recognition. This is how the individual ego transforms, Guruji teaches: not by being attacked or suppressed, but by seeing itself clearly and choosing differently.
              </p>
              <p>
                Swadhyay is the experience of transcendence — what the ancient texts called <strong>amritaanubhav</strong>, the taste of the immortal. The self (Swa), like existence itself, is boundless and deathless.
              </p>
              <p>
                <strong>Satsang, Seva and Swadhyay</strong> are not three separate practices. They are three expressions of the same eternal, cosmic consciousness — and engaging deeply with any one of them naturally strengthens the other two.
              </p>
              <p>
                The quietude of the ashram&apos;s natural surroundings, alive with the spiritual vibration of sustained practice, accelerates the clarity that Swadhyay seeks to unveil.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* DEFINITION CARD */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="bg-ivory border border-saffron/20 rounded-2xl p-10 text-center">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-3xl text-charcoal leading-snug">
              Swadhyay is the transformational process of becoming capable of seeing oneself functioning within one&apos;s own infinite nature — in the eternal mirror of universal consciousness.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SELF-ENQUIRY ENTRY */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Simplest Entry
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Self-Enquiry.
            </h2>
            <Prose>
              <p>
                Self-Enquiry is the simplest entry into Swadhyay. It begins with posing a question about the nature of self — to a self-realised master — and then sitting with the responses that arise.
              </p>
              <p>
                The work happens in the gap between the question and the next thought.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              I want to practice Swadhyay.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Swadhyay" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
