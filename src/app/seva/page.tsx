import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import { Video, Megaphone, Palette, FileText, Camera, CalendarCheck, Wrench, GraduationCap, BookOpen, HandHeart, Sprout } from 'lucide-react'

export const metadata = {
  title: 'Seva | Darpan Foundation',
  description:
    'Seva is not volunteering. It is a living expression of love. Selfless service expands consciousness in ways no solitary practice can.',
}

const sevaRoles = [
  { Icon: Video, title: 'Video editing', desc: 'For YouTube and social media.' },
  { Icon: Megaphone, title: 'Social media', desc: 'Awareness and content creation.' },
  { Icon: Palette, title: 'Design', desc: 'Creatives for programs and campaigns.' },
  { Icon: FileText, title: 'Transcription', desc: 'Of Guruji\'s video discourses.' },
  { Icon: Camera, title: 'Video shooting', desc: 'At events and programs.' },
  { Icon: CalendarCheck, title: 'Event management', desc: 'Logistics and on-the-ground coordination.' },
  { Icon: Wrench, title: 'Skills workshops', desc: 'Run a workshop in your area of expertise.' },
  { Icon: GraduationCap, title: 'Training programs', desc: 'Conduct training in your domain.' },
  { Icon: BookOpen, title: 'Educational materials', desc: 'Build resources for school children.' },
  { Icon: HandHeart, title: 'Fundraising', desc: 'Help us reach people we have not yet reached.' },
  { Icon: Sprout, title: 'Ashram day-to-day', desc: 'Farming, cooking, cleaning, maintenance.' },
]

export default function SevaPage() {
  return (
    <>
      <PageHero
        eyebrow="Seva"
        title="Love in action."
        subtitle="Seva is not volunteering. It is a living expression of love. The act of finding and creating opportunities to serve expands consciousness in ways few other practices can match."
        bgImage="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                By contributing to the community and supporting those in need, individuals cultivate a deeper quality of empathy and compassion. This naturally leads to a richer understanding of oneself — and one&apos;s place in the larger whole.
              </p>
              <p>
                Seva, properly understood, is a direct instrument of spiritual growth and personal fulfilment. It draws out higher values from within — making integrity, generosity and virtue feel natural rather than effortful.
              </p>
              <p>
                The opportunity to serve both those in need and those of virtue is, in Guruji&apos;s understanding, a mark of genuine good fortune. Darpan Ashram offers the best of both.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* SEVA ROLES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Where you can serve
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Eleven specific ways to begin.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Whatever your skill, there is space for it here.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {sevaRoles.map((r, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-ivory rounded-2xl p-6 border border-charcoal/5 h-full hover:border-saffron/40 transition-colors">
                  <div className="text-saffron mb-3">
                    <r.Icon size={22} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{r.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-charcoal/70 leading-relaxed text-lg italic">
              You don&apos;t need to make sweeping changes. Small, sustained contributions add up to significant impact. If you carry a passion for something greater than yourself — this is your place.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              I would like to volunteer.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Seva" showProgramField showSkillsField showCityField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
