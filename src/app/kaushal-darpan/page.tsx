import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Kaushal Darpan | Darpan Foundation',
  description:
    'Vocational training, livelihood, and rural empowerment. Life skills, employability skills, and entrepreneurial skills — woven together.',
}

const competencies = [
  'Teamwork',
  'Communication skills',
  'Self-management',
  'Sustainable living practices',
  'Problem-solving ability',
  'Basic literacy enhancement',
  'Digital literacy',
  'Eco-friendly construction techniques',
  'Sustainable agriculture methods',
]

export default function KaushalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaushal Darpan कौशल"
        title="Skill that becomes self-sufficiency."
        subtitle="Innovative skill-development programs that inspire individuals to embrace sustainable living and build eco-friendly systems of livelihood."
        bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Darpan Ashram designs and facilitates innovative skill-development programs that inspire individuals to embrace sustainable living and build eco-friendly systems of livelihood. The programs deliver hands-on training in sustainable practice — while cultivating a deep sense of personal responsibility for the environment.
              </p>
              <p>
                The impact extends well beyond the participants themselves. Graduates of Kaushal Darpan&apos;s vocational training share what they have learned within their own communities — creating a ripple effect of positive change.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* THREE-IN-ONE */}
      <section className="bg-charcoal text-ivory py-24 md:py-32 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn className="text-center mb-12">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              What Makes Kaushal Different
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Three skill dimensions, woven together.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Life Skills', desc: 'For a stable, balanced inner life.' },
              { name: 'Employability Skills', desc: 'For finding meaningful work.' },
              { name: 'Entrepreneurial Skills', desc: 'For creating opportunities yourself.' },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
                  <div className="text-saffron font-display text-3xl mb-3">{`0${i + 1}`}</div>
                  <h3 className="font-display text-xl mb-2 text-goldLight">{s.name}</h3>
                  <p className="text-ivory/80 text-sm">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-ivory/85 leading-relaxed text-lg italic">
              Beyond skill acquisition, Kaushal Darpan prioritises building a resilient mindset — one that allows people to thrive in today&apos;s unpredictable job market and to create their own opportunities rather than waiting for them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COMPETENCIES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Core Competencies
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              What participants take away.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {competencies.map((c, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-ivory rounded-xl px-5 py-4 border border-charcoal/5 text-charcoal/80 flex items-center gap-3">
                  <span className="text-saffron text-sm">●</span>
                  <span className="text-sm">{c}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              I would like to impart skills.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Or to learn them. Tell us what you&apos;d like to share, or to gain.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Kaushal Darpan" showProgramField showSkillsField showCityField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
