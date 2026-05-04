import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import Button from '@/components/Button'
import { Users, Music, Network, GraduationCap, BookOpen, Cpu, Trees } from 'lucide-react'

export const metadata = {
  title: 'Vidya Darpan | Darpan Foundation',
  description:
    'Education for underprivileged children — 6,500+ beneficiaries across 40+ schools and 5 states. Mentor a Million.',
}

const stats = [
  { num: '6,500+', label: 'Beneficiaries' },
  { num: '35,400+', label: 'Study hours' },
  { num: '40+', label: 'Schools' },
  { num: '42+', label: 'Villages' },
  { num: '5', label: 'States' },
]

const pillars = [
  {
    Icon: Users,
    title: 'Mentorship Program',
    desc: 'Training local young volunteers as mentors and role models. They run sessions in communities and act as catalysts for change.',
  },
  {
    Icon: Music,
    title: 'Native Culture Rejuvenation',
    desc: 'Hobby clubs, dance, art, music and theatre — all aligned with Indian cultural traditions. Students learn to preserve and celebrate their heritage.',
  },
  {
    Icon: Network,
    title: 'Teacher Networking',
    desc: 'Building a responsive teacher network. Stimulating intrinsic motivation, encouraging local initiative, and providing capacity-building.',
  },
  {
    Icon: GraduationCap,
    title: 'Connect — the final mile',
    desc: 'Empowering youth to pursue higher studies or join skill-based employability programs, including digital learning modules.',
  },
]

const activities = [
  {
    Icon: BookOpen,
    title: 'Bridging the Gap',
    desc: 'Employing local educated youth to teach in understaffed schools. Setting up toilets, furniture, digital tools. Distributing stationery, uniforms, and sports materials. Sponsoring cultural and sports events.',
  },
  {
    Icon: Cpu,
    title: 'Digital Enablement',
    desc: 'An online STEM module for rural children — explaining fundamental scientific concepts, encouraging scientific thinking in daily life, and using multimedia tools to enhance learning.',
  },
  {
    Icon: Trees,
    title: 'Gurukul',
    desc: 'A long-term vision: establishing a Gurukul in India for holistic child development — fostering self-control, character, social awareness, intellect, spiritual awareness, and cultural continuity.',
  },
]

export default function VidyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Vidya Darpan विद्या"
        title="Education that nurtures the whole child."
        subtitle="Vidya Darpan exists to build systems and institutions that support the complete growth of every child — nurturing their potential rather than simply filling their heads with information."
        bgImage="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1740&auto=format&fit=crop"
      />

      {/* IMPACT STATS */}
      <section className="bg-charcoal text-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display text-4xl md:text-5xl text-goldLight mb-2">{s.num}</div>
                  <div className="text-ivory/60 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Vidya Darpan exists to build systems and institutions that support the complete growth of every child — nurturing their potential rather than simply filling their heads with information. It teaches children to live in harmony with the natural world, grounding their education in character development and human values.
              </p>
              <p>
                The program gives real weight to physical fitness and sport as dimensions of child development — offering yoga, martial arts, and outdoor adventures to build confidence and develop teamwork.
              </p>
              <p>
                Vidya Darpan also dedicates itself to providing quality education for underprivileged children — opening doors that might otherwise remain closed. The aim is to shape a future generation of responsible, ethical, well-rounded individuals.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* MENTOR A MILLION */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Mission
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Mentor a Million.
            </h2>
            <p className="text-charcoal/70 text-lg max-w-2xl mx-auto">
              Millions of children across rural India need quality education and mentorship. This is Darpan&apos;s response — built on the conviction that value-based, quality education can hold society together.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full">
                  <div className="text-saffron mb-4">
                    <p.Icon size={28} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{p.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* THREE ACTIVITIES */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Three Activities
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              How the work happens, on the ground.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
                  <div className="text-saffron mb-4">
                    <a.Icon size={28} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-ivory mb-3">{a.title}</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-24 md:py-32 text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
              Help us reach a million children.
            </h2>
            <p className="text-charcoal/70 text-lg mb-10">
              Two ways to support Vidya Darpan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button href="/volunteer" icon>Volunteer</Button>
              <Button href="/donate" variant="secondary" icon>Donate</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Get in touch about Vidya Darpan.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Vidya Darpan" showProgramField showCityField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
