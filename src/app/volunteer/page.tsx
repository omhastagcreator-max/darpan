import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import Prose from '@/components/Prose'

export const metadata = {
  title: 'Ashram Volunteering Programs and Activities | Darpan Foundation',
  description: 'Volunteering (Seva) — a living form of love.',
}

const activities = [
  'Video Editing – creating videos for YouTube and social media',
  'Building awareness through social media',
  'Designing creatives',
  'Transcribing Guruji’s videos',
  'Video shooting',
  'Event Management',
  'Skills workshops',
  'Conducting Training programs',
  'Creating educational materials for school children',
  'Fund Raising activities',
  'Ashram activities',
]

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Seva"
        title="Volunteering (Seva)"
        subtitle="Ashram Volunteering Programs and Activities"
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Seva is a living form of love. Finding and creating opportunities to serve and engaging and immersing oneself in endeavours of serving selflessly helps in expansion of one&rsquo;s consciousness.
              </p>
              <p>
                By giving back to the community and helping those in need, individuals can cultivate a deeper sense of empathy and compassion, which can lead to a greater understanding of themselves and their place in the world. Seva, or selfless service, is a means of promoting spiritual growth and personal fulfilment. It inspires and enthuses to uphold the higher values. Imbibing virtues becomes natural, normal and spontaneous while we are engaged in serving selflessly.
              </p>
              <p>
                Availability of opportunity to serve the needy as well as virtuous is a sure sign of being fortunate. Ashram offers best opportunities to serve the needy and virtuous both.
              </p>
              <p>
                Join us in our mission to make a positive impact in the community through seva. By participating in our seva initiatives, you can tap into your personal strengths, develop new skills, and make a meaningful difference in the lives of others.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">Activities</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
            {activities.map((a, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-ivory rounded-xl px-5 py-4 border border-charcoal/5 text-charcoal/85 flex items-start gap-3">
                  <span className="text-saffron mt-1 shrink-0 text-sm">●</span>
                  <span className="text-sm">{a}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24 md:py-28 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight">
              Transform yourself and transform lives!
            </h2>
            <p className="text-ivory/85 text-lg leading-relaxed">
              If you have a passion to contribute towards doing something for greater good, you can associate with us. You don&rsquo;t have to make radical changes for your efforts to count, because small changes lead to a big difference.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              I would like to volunteer
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm
              buttonLabel="Enquire Now"
              showCityField
              showSkillsField
              showProgramField
              programName="Volunteering"
            />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
