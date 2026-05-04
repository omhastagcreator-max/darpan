import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Mann Darpan | Darpan Foundation',
  description:
    'Pure food for the mind. Self-development programs and the practice of Sahaj Smriti Yog meditation — together igniting profound change.',
}

const subPrograms = [
  { name: 'Spiritual Discourse Series', desc: 'Guruji\'s discourses on contemporary and spiritual topics — a treasure for any seeking mind.', href: '/satsang' },
  { name: 'Upanishad', desc: 'Periodic dialogues with scholars, artists and seekers on topical and spiritual subjects.', href: '/upanishad' },
  { name: 'Satsang', desc: 'For those who find fulfilment in higher states of consciousness — recognising their innate supreme potential.', href: '/satsang' },
  { name: 'Nakshatra Darpan', desc: 'Stargazing at the ashram. An awe-inspiring program that transforms participants from within.', href: '/nakshatra-darpan' },
  { name: 'Children & Teens', desc: 'Opening young minds to the knowledge stored in nature. A "World of Opportunities" program for teens.', href: '/children-and-teens' },
  { name: 'Workshops', desc: 'Art, craft and natural-product workshops — exploration, creativity, and the practice of mindful making.', href: '/workshops' },
]

export default function MannDarpanPage() {
  return (
    <>
      <PageHero
        eyebrow="Mann Darpan मन"
        title="Pure food for the mind."
        subtitle="A transformative journey through programs carefully crafted to provide pure nourishment for the mind. Holistic mindfulness — uniting personal development with the practice of Sahaj Smriti Yog."
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Mann Darpan is an invitation to embark on a genuinely transformative journey — through programs carefully crafted to provide pure nourishment for the mind.
              </p>
              <p>
                The initiative&apos;s ambition is holistic mindfulness: a union of personal-development methods with the enlightening practice of Sahaj Smriti Yog meditation, igniting profound inner change.
              </p>
              <p>
                The flagship offering under Mann Darpan is the <strong>Ignite Self Program</strong> — a 3-day immersive experience that connects you with your inner self and helps you channel the fire of purposeful living.
              </p>
            </Prose>

            <div className="mt-10">
              <Link href="/ignite-self" className="inline-flex items-center gap-2 bg-saffron text-white rounded-full px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-saffron/90 transition-colors">
                Explore Ignite Self <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GURUJI'S CHAIN */}
      <section className="bg-charcoal py-24 md:py-32 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <FadeIn>
            <div className="text-goldLight mb-10">
              <LotusDivider />
            </div>
            <p className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-8">A guiding principle from Guruji</p>
            <div className="space-y-3 font-quote italic text-xl md:text-2xl text-ivory leading-relaxed">
              <p>Watch your <strong className="text-goldLight not-italic">thoughts</strong> — they become your words.</p>
              <p>Watch your <strong className="text-goldLight not-italic">words</strong> — they become your actions.</p>
              <p>Watch your <strong className="text-goldLight not-italic">actions</strong> — they become your habits.</p>
              <p>Watch your <strong className="text-goldLight not-italic">habits</strong> — they become your character.</p>
              <p>Watch your <strong className="text-goldLight not-italic">character</strong> — it becomes your destiny.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SUB PROGRAMS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Other Self-Development Offerings
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              All under Mann Darpan.
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
                    Explore <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Sign up for self-development.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Mann Darpan" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
