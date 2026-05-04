import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import Prose from '@/components/Prose'
import { School, GraduationCap, Briefcase, Users, Palette, Trees } from 'lucide-react'

export const metadata = {
  title: 'Host Your Event | Darpan Foundation',
  description:
    'Bring your group to Darpan Ashram. Schools, colleges, corporates, residential communities, artists, and sustainable-living workshops are all welcome.',
}

const groups = [
  {
    Icon: School,
    title: 'Schools',
    desc: 'A day trip for nature walks, farm activities and a tour of the village. Or our "Life Touching Life" program for children.',
  },
  {
    Icon: GraduationCap,
    title: 'Colleges & institutes',
    desc: 'Bring social work into your curriculum. Attend programs on personal excellence. Our "Teenage — A World of Opportunities" is built for this stage.',
  },
  {
    Icon: Briefcase,
    title: 'Corporates & start-ups',
    desc: 'Re-learn the power of the individual. Declutter the mind. Understand team dynamics. Expand vision. Heighten excellence. Rejuvenate.',
  },
  {
    Icon: Users,
    title: 'Residential communities',
    desc: 'Group events and meaningful celebrations — birthdays, anniversaries — collective contribution adds depth to life events.',
  },
  {
    Icon: Palette,
    title: 'Creative minds',
    desc: 'Artists, musicians, writers — stay at the ashram to enhance creativity in quiet, beautiful surroundings.',
  },
  {
    Icon: Trees,
    title: 'Sustainable-living workshops',
    desc: 'Eco-friendly construction, renewable energy, sustainable living — workshops conducted on the ashram grounds.',
  },
]

export default function HostEventPage() {
  return (
    <>
      <PageHero
        eyebrow="Bring Your Group"
        title="Host your event at the ashram."
        subtitle="Personal celebrations or official events. Darpan Ashram offers a unique experience and an unforgettable ambience for what matters."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                We can work with you to host your event at the ashram. You could plan any kind of gathering — personal celebrations of your life, or official events for your organisation.
              </p>
              <p>
                Darpan Ashram is a perfect place to come together with the people who matter to you. Write to us with details about your group and the anticipated duration of the program.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* GROUP TYPES */}
      <section className="py-20 md:py-28 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Who Comes Here
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Six kinds of group, all welcome.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((g, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full">
                  <div className="text-saffron mb-4">
                    <g.Icon size={26} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-2">{g.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Sign up for hosting your event.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Tell us a little about your group and what you have in mind.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm
              buttonLabel="Send Event Enquiry"
              showProgramField
              programName="Group Event"
              showCityField
            />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
