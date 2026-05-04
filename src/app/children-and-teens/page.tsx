import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import { Sprout, Sun, Compass } from 'lucide-react'

export const metadata = {
  title: 'Children & Teens | Darpan Foundation',
  description:
    'Life Touching Life. Programs for children below 12 and teenagers — discovering passion, responsibility, and a world of opportunity.',
}

const childTopics = [
  'How all living beings depend on one another',
  'Natural farming and its benefits',
  'Soil and water conservation',
  'The role of human beings within the ecosystem',
]

const teenModules = [
  {
    Icon: Compass,
    label: 'Module 01',
    title: 'Discover yourself',
    desc: 'Through interactive exercises and structured activities, the program helps teens identify their strengths, explore their interests, and understand how their personality shapes their choices and relationships.',
  },
  {
    Icon: Sun,
    label: 'Module 02',
    title: 'Understanding responsibility',
    desc: 'Responsibility can feel overwhelming without the right framework. This module demystifies it — offering practical tools for managing time, resources and ethical choices.',
  },
  {
    Icon: Sprout,
    label: 'Module 03',
    title: 'Embracing opportunities',
    desc: 'With self-knowledge and a sense of responsibility as their foundation, teens are equipped to step confidently into the world of possibilities ahead.',
  },
]

export default function ChildrenTeensPage() {
  return (
    <>
      <PageHero
        eyebrow="Children & Teens"
        title="Life touching life."
        subtitle="Children are the guardians of the future. Introducing them to meaningful ideas early — and keeping them in genuine relationship with the natural world — is among the most important gifts we can offer."
        bgImage="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1740&auto=format&fit=crop"
      />

      {/* CHILDREN SECTION */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Children &mdash; below 12
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-8 leading-tight">
              Curiosity, planted early.
            </h2>
            <Prose>
              <p>
                The children&apos;s program has been carefully designed to encourage young minds to look at life from a fresh and expansive perspective. It is interactive and hands-on — built around games, activities and conversations that gently open up the natural world.
              </p>
            </Prose>
          </FadeIn>

          <FadeIn className="mt-10">
            <h3 className="font-display text-xl text-charcoal mb-4">What we cover:</h3>
            <ul className="space-y-3">
              {childTopics.map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-charcoal/80 text-lg">
                  <span className="text-saffron mt-2.5 shrink-0">●</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn>
            <p className="mt-10 text-charcoal/70 leading-relaxed text-lg italic">
              The program sparks curiosity in children — and opens their minds to the enormous wealth of knowledge available simply through careful observation of nature.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* TEENS SECTION */}
      <section className="py-24 md:py-32 bg-charcoal text-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                Teenagers
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-ivory mb-8 leading-tight">
                A world of opportunities.
              </h2>
              <div className="text-ivory/80 text-lg leading-relaxed space-y-5">
                <p>
                  Adolescence is one of the most decisive — and disorienting — phases of life. The choices made during these years carry real weight.
                </p>
                <p>
                  Darpan&apos;s teen program was specifically built for this season. It is engaging and interactive, helping young people discover their passions and develop a real capacity for responsibility — without feeling weighed down by it.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
            {teenModules.map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full hover:bg-white/10 transition-colors">
                  <div className="text-saffron mb-4">
                    <m.Icon size={28} strokeWidth={1.4} />
                  </div>
                  <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium block mb-2">
                    {m.label}
                  </span>
                  <h3 className="font-display text-xl text-ivory mb-3">{m.title}</h3>
                  <p className="text-ivory/70 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Register for the program.
            </h2>
            <p className="text-charcoal/70 text-lg">
              For your child or your teenager. Tell us a little about them.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Children & Teens" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
