import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import Prose from '@/components/Prose'

export const metadata = {
  title: 'Host your Event at Darpan Ashram | Darpan Foundation',
  description:
    'We can work with you to host your event at ashram. You could plan any event, personal celebrations of your life, or any official events.',
}

const groups = [
  {
    title: 'School',
    desc: 'Schools can have a day trip to ashram for a nature walk and understand various interdependencies in nature. Students can take part in farm activities and understand the science behind it. A tour of village will give them different perspective about life. They can plan to attend our "Life Touching Life" Program',
  },
  {
    title: 'Colleges and Educational Institutes',
    desc: 'Colleges and Educational Institutes can include social work into their curriculum. Contribute towards any social cause. Any other field event can be planned at ashram. Students can attend our programs on personal excellence. Our program, "Teenage – A world of opportunities" designed for teenagers and youth focuses on various aspects of this phase of life.',
  },
  {
    title: 'Corporates and Start ups',
    desc: 'The Ashram location and ambience are ideal for corporates and start-up companies to: Re-learn the power of the individual, Declutter their minds, Understand team dynamics, Expand their vision, Heighten their excellence, Rejuvenate themselves',
  },
  {
    title: 'Residential Communities',
    desc: 'Group events and meaningful celebrations such as birthdays, anniversaries etc. can be planned at the ashram. Collective contributions and community participation brings added meaning to life events.',
  },
  {
    title: 'Creative Minds',
    desc: 'Artists, Musicians, Writers etc. can stay at the ashram to enhance their creativity in the quiet, beautiful natural surroundings.',
  },
  {
    title: 'Workshops on Sustainable Living',
    desc: 'Workshops on Eco-friendly construction, renewable energy, sustainable living etc. are conducted at the ashram.',
  },
]

export default function HostEventPage() {
  return (
    <>
      <PageHero
        eyebrow="Host your Event"
        title="Host your Event at Darpan Ashram"
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                We can work with you to host your event at ashram. You could plan any event, personal celebrations of your life, or any official events.
              </p>
              <p>
                Darpan ashram is a perfect place to get together with people who are part of your life. Ashram gives you a unique experience and ambience to make your event special and memorable.
              </p>
              <p>
                Please write to us with details about the group, anticipated duration of program.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* GROUP TYPES */}
      <section className="py-20 md:py-28 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Who can host events
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {groups.map((g, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full">
                  <h3 className="font-display text-2xl text-charcoal mb-3">{g.title}</h3>
                  <p className="text-charcoal/75 text-sm leading-relaxed">{g.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Sign Up for Hosting Your Event
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm
              buttonLabel="Host Your Event"
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
