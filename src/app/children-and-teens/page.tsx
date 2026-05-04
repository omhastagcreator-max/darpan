import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Children and Teens | Darpan Foundation',
  description: 'Life Touching Life. Teenage – A World of Opportunities.',
}

const childTopics = [
  'Our interdependence with nature',
  'Natural Farming & its benefits',
  'Soil & water conservation',
  'Role of humans in ecosystem',
]

const teenModules = [
  {
    num: '1',
    title: 'Discover Yourself',
    desc: 'At the heart of our program is the belief that every teenager has a unique set of talents, interests, and passions waiting to be discovered. Through a series of interactive exercises and activities, we help teens identify their strengths and weaknesses, explore their interests, and understand how their personality type can impact their choices and relationships.',
  },
  {
    num: '2',
    title: 'Understanding Responsibility',
    desc: 'Responsibility is an essential part of growing up, but it can be easy to feel overwhelmed or unsure about how to handle the challenges that come with it. Our program helps teens understand the importance of responsibility and how to approach it in a way that empowers them rather than weighing them down. From managing their time and resources to making ethical choices, we provide practical tools and guidance to help teens navigate the complexities of growing up.',
  },
  {
    num: '3',
    title: 'Embracing Opportunities',
    desc: 'With a solid foundation in self-discovery and responsibility, our program empowers teens to embrace the world of opportunities that awaits them. Whether it&rsquo;s exploring new interests, pursuing a passion project, or preparing for the future, we help teens develop the confidence and skills they need to succeed in whatever path they choose.',
  },
]

export default function ChildrenTeensPage() {
  return (
    <>
      <PageHero
        eyebrow="Children and Teens"
        title="Life Touching Life"
        bgImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1740&auto=format&fit=crop"
      />

      {/* CHILDREN */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Children are the custodians of the future. It is important to familiarize them with good ideas and keep them closer to the environment.
              </p>
              <p>
                The program&rsquo;s content is created in such a way that it encourages children to look at life from a different perspective.
              </p>
              <p>
                This workshop will be interactive and hands-on with games and activities. It will broadly cover the following topics
              </p>
            </Prose>

            <ul className="mt-8 space-y-3">
              {childTopics.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/80 text-lg">
                  <span className="text-saffron mt-2.5 shrink-0">●</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-charcoal/75 text-lg leading-relaxed">
              This program will generate curiosity in children and open up their minds to the vast knowledge one can tap into by observing nature.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TEENS */}
      <section className="py-16 md:py-24 bg-charcoal text-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                Teenage
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-ivory mb-8 leading-tight">
                A World of Opportunities: Our Engaging Program for Teens
              </h2>
              <div className="text-ivory/80 text-lg leading-relaxed space-y-5">
                <p>
                  As a teenager, it can be challenging to navigate the many choices and responsibilities that come with growing up. That&rsquo;s why we&rsquo;ve created a program designed specifically for teens, offering an engaging and interactive experience that helps them discover their passions and learn to be responsible in ways that empower themselves.
                </p>
                <p>
                  As a teenager, the world can feel both exciting and overwhelming. Our program offers a supportive and engaging environment that helps teens discover their passions, understand responsibility, and embrace the world of opportunities that awaits them.
                </p>
                <p className="text-goldLight italic">
                  Join us today and start your journey to a brighter future!
                </p>
                <p>
                  Our program comprises an exciting range of modules that cover the following areas:
                </p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {teenModules.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                    <div className="text-saffron font-display text-4xl mb-4">{m.num}</div>
                    <h3 className="font-display text-xl text-ivory mb-3">{m.title}</h3>
                    <p className="text-ivory/75 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: m.desc }} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-creamCard py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Register for Teenage: A World of Opportunities program
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Children and Teens" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
