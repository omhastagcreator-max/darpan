import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Mann Darpan | Darpan Foundation',
  description: 'Pure food for Mind. A transformative journey of personal development.',
}

const subPrograms = [
  {
    name: 'Spiritual Discourse and Conversation Series',
    href: '/satsang',
    cta: 'Enroll Now',
    desc: 'Discover the different discourses by Guruji – a true treasure trove for seeking minds. These discourses, including both topical and spiritual topics, help you find answers and trigger a burning desire to attain the highest, when it comes to personal development.',
  },
  {
    name: 'Upanishad',
    href: '/upanishad',
    cta: 'Listen',
    desc: 'Dialogues have the incredible power to unite the world and make Vasudhaiva Kutumbakam a way of life. Periodic conversations on both topical and spiritual subjects are held which help seekers to discover answers and ignite a profound yearning to reach their highest potential. By participating in these conversations, seekers are inspired to delve deeper into their quest for self-development and mindfulness.',
  },
  {
    name: 'Satsang',
    href: '/satsang',
    cta: 'Be In Satsang',
    desc: 'There are individuals who are inclined to stay absorbed in higher consciousness and who enjoy gaining full clarity by connecting the dots. Through Satsang, we help individuals realise their ingrained supreme potential by encouraging them to lead an ideal daily routine and enabling them to become both the medium and message.',
  },
  {
    name: 'Nakshatra Darpan',
    href: '/nakshatra-darpan',
    cta: 'Listen',
    desc: 'Explore the boundless sky and witness the limitless nature of your own being! Nakshatra Darpan is a program where individuals get to immerse themselves in the vastness of the universe and experience its infinite wonders. This truly awe-inspiring program transforms people from within, awakening a new sense of purpose and mindfulness.',
  },
  {
    name: 'Children and Teens',
    href: '/children-and-teens',
    cta: 'Enroll Now',
    desc: 'Life Touching Life. Awaken the curiosity within young minds (under 12 years) and inspire them to unlock the vast knowledge that nature holds. Teenage, a World of Opportunities is an engaging and interactive program that helps teens to: Understand their passion and aid in Self-development, Be responsible in a way that empowers themselves.',
  },
  {
    name: 'Workshops',
    href: '/workshops',
    cta: 'Save Your Spot',
    desc: 'We conduct a number of workshops to: Explore, enjoy and learn new arts and crafts; Practice and promote the use of natural products.',
  },
]

export default function MannDarpanPage() {
  return (
    <>
      <PageHero
        eyebrow="Mann Darpan"
        title="Pure food for Mind"
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Embark on a transformative journey with our exclusive programs where personal development skills have been carefully crafted to provide pure food for your mind. Our aim is to provide you with holistic mindfulness, where the union of self-development methods and the enlightening practice of Sahaj Smriti Yog (SSY) meditation ignite profound changes within you.
              </p>
              <p>
                Introducing the <strong>Ignite-Self Program</strong>, a captivating 3-day experience that lets you connect with your inner-self and helps you channelise the fire within you.
              </p>
              <p>To know yourself is to know your</p>
            </Prose>

            <div className="my-8 flex flex-wrap items-center justify-center gap-6 text-center">
              {['Body', 'Mind', 'Self'].map((g) => (
                <span key={g} className="text-saffron font-display text-3xl border-b-2 border-saffron/30 pb-1">
                  {g}
                </span>
              ))}
            </div>
            <p className="text-center text-charcoal italic text-xl">Experience your soul</p>

            <div className="mt-10 text-center">
              <Link href="/ignite-self" className="inline-flex items-center gap-2 bg-saffron text-white rounded-full px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-saffron/90 transition-colors">
                Enroll Now <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GUIDING CHAIN */}
      <section className="bg-charcoal py-16 md:py-24 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <FadeIn>
            <div className="text-goldLight mb-10">
              <LotusDivider />
            </div>
            <p className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-8">
              From Guruji&rsquo;s discourses
            </p>
            <div className="space-y-3 font-quote italic text-xl md:text-2xl text-ivory leading-relaxed">
              <p>Watch Your <strong className="text-goldLight not-italic">Thoughts</strong>; They Become Words,</p>
              <p>Watch Your <strong className="text-goldLight not-italic">Words</strong>; They Become Actions,</p>
              <p>Watch Your <strong className="text-goldLight not-italic">Actions</strong>; They Become Habits,</p>
              <p>Watch Your <strong className="text-goldLight not-italic">Habits</strong>; They Become Character,</p>
              <p>Watch Your <strong className="text-goldLight not-italic">Character</strong>; It Becomes Your Destiny</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* OTHER SELF-DEVELOPMENT PROGRAMS */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Other Self-Development Programs
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subPrograms.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <Link href={p.href} className="group block bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full hover:border-saffron/40 transition-colors">
                  <h3 className="font-display text-xl text-charcoal mb-3 group-hover:text-saffron transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <span className="text-saffron text-xs uppercase tracking-widest font-medium inline-flex items-center gap-1">
                    {p.cta} <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Sign Up for Self-Development and Transformation
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Mann Darpan" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
