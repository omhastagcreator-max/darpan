import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Nakshatra Darpan | Darpan Foundation',
  description:
    'An open-air observatory at Darpan Ashram. Stargazing sessions connecting ancient star-knowledge with the science of today.',
}

export default function NakshatraPage() {
  return (
    <>
      <PageHero
        eyebrow="Nakshatra Darpan"
        title="Explore the vastness of the sky to see the infinite in yourself."
        subtitle="An open-air observatory at Darpan Ashram, Urigam — far from light pollution, in the midst of the forest. The illuminated night sky in all its unfiltered glory."
        bgImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Darpan Ashram&apos;s home in Urigam village, far from urban light pollution, is an open-air observatory — set in the midst of nature. Here, the illuminated night sky appears in its full, unfiltered glory.
              </p>
              <p>
                Look up, and the canopy of stars opens a journey through time, space and beyond — a place where only you and the universe exist.
              </p>
              <p>
                Ancient stories of the stars are shared in a contemporary manner — connecting the astronomical wisdom of the ancients with the scientific understanding of today. It is not merely stargazing. It is a meditation on the infinite.
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
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              Experience the infiniteness of the universe — and return a transformed individual.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* THE EXPERIENCE */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Experience
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Far from the city. Closer to yourself.
            </h2>
            <Prose>
              <p>
                The Nakshatra Darpan experience takes place far from the city&apos;s noise and light — at the ashram, surrounded by forest. Participants witness the breathtaking night sky, uninterrupted.
              </p>
              <p>
                The program weaves together ancient wisdom and modern science to illuminate the mysteries of the cosmos — and, in doing so, reflects something of the boundlessness within each participant.
              </p>
              <p className="text-saffron font-medium">
                This will be an experience you carry with you. Guaranteed.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Register for Nakshatra Darpan.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Nakshatra Darpan" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
