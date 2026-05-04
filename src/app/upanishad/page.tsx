import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import YouTubeCard from '@/components/YouTubeCard'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Upanishad | Darpan Foundation',
  description:
    'Dialogues carry the potential to bring the whole world together and make Vasudhaiv Kutumbkam way to live.',
}

const videos = [
  { videoId: 'M7lc1UVf-VE', title: 'Sh. K. K. Muhammed (Padma Shri) in Upanishad with Guruji Shri Nandkishore' },
  { videoId: 'M7lc1UVf-VE', title: 'Sh. Amish Tripathi in Upanishad with Guruji Shri Nandkishore' },
  { videoId: 'M7lc1UVf-VE', title: 'Dr. Melissa Kapoor in Upanishad with Guruji Shri Nandkishore' },
]

export default function UpanishadPage() {
  return (
    <>
      <PageHero
        eyebrow="Upanishad"
        title="Upanishad"
        bgImage="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Dialogues carry the potential to bring the whole world together and make <strong>Vasudhaiv Kutumbkam</strong> way to live.
              </p>
              <p>
                Conversations on topical and spiritual subject are held periodically helping seekers to find answers and trigger a burning desire to attain to the highest.
              </p>
              <p>
                Upanishad series is aimed at keeping alive spirit of seeking through spiritual conversations. This spirit has been in India since eons. However, during vedantic/upanishad age it was unparalleled hence we named our conversation series Upanishad.
              </p>
              <p>
                Discourses by Guruji are an invigorating treasure for a seeking mind.
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
              Awakening eternal consciousness with awareness of incessant change!!!
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Watch Videos of Past <span className="italic">Upanishads</span>:
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {videos.map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <YouTubeCard videoId={v.videoId} title={v.title} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Button
              href="https://www.youtube.com/playlist?list=PLty53myrnL4TMF1g14CftemFFryIyAb_2"
              variant="primary"
              icon
            >
              Watch All Videos
            </Button>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Register
            </h2>
            <p className="text-charcoal/70 text-lg">Know more about Darpan&rsquo;s Vision</p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Upanishad" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
