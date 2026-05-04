import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import YouTubeCard from '@/components/YouTubeCard'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import { upanishadVideos } from '@/lib/content'

export const metadata = {
  title: 'Upanishad | Darpan Foundation',
  description:
    'Topical and spiritual conversations with Guruji and distinguished guests — keeping the spirit of seeking alive.',
}

export default function UpanishadPage() {
  return (
    <>
      <PageHero
        eyebrow="Upanishad"
        title="Ancient conversations, renewed."
        subtitle="Dialogues carry the power to bring the entire world together — and make the ancient idea of Vasudhaiva Kutumbakam (the world as one family) a way of life."
        bgImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Topical and spiritual conversations are held periodically at Darpan — helping seekers locate answers, and igniting a burning desire to reach for the highest.
              </p>
              <p>
                The Upanishad series was created to keep the spirit of seeking alive through sustained, substantive dialogue. This spirit has been at the heart of Indian civilisation for thousands of years — and during the Vedantic and Upanishadic age, it reached its greatest heights. Hence the name.
              </p>
              <p>
                Guruji&apos;s personal discourses are themselves a rich treasure for any seeking mind — an invigorating source of insight and inspiration.
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
              Awakening eternal consciousness — with awareness of incessant change.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PAST EPISODES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Past Episodes
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Voices that have joined Guruji.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Scholars. Authors. Scientists. Seekers.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {upanishadVideos.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <YouTubeCard videoId={v.videoId} title={v.title} speaker={v.speaker} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Button
              href="https://www.youtube.com/playlist?list=PLty53myrnL4TMF1g14CftemFFryIyAb_2"
              variant="outline"
              icon
            >
              Watch the full playlist on YouTube
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Register your interest.
            </h2>
            <p className="text-charcoal/70 text-lg">
              We&apos;ll let you know when the next Upanishad is announced.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Upanishad" showProgramField buttonLabel="Register Interest" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
