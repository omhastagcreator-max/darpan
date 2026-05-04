import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Kaushal Darpan | Darpan Foundation',
  description: 'Pure Food for Self. Innovative skilling programs for sustainable living.',
}

const lessons = [
  'Team work',
  'Communication skills',
  'Self-management',
  'Sustainable living',
  'Problem-solving capability',
  'Enhance basic literacy',
  'Digital literacy',
  'Eco-friendly construction techniques',
  'Sustainable agriculture methods',
]

export default function KaushalPage() {
  return (
    <>
      <PageHero
        eyebrow="Kaushal Darpan"
        title="Pure Food for Self"
        bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Darpan Ashram facilitates innovative skilling programs that inspire individuals to adopt sustainable living practices and create eco-friendly ecosystems. These skill development programs offer practical training in sustainable practices while instilling a strong sense of responsibility for the environment.
              </p>
              <p>
                By tackling issues like poverty, unemployment and environmental degradation in rural communities, Darpan Ashram&rsquo;s impact goes beyond the participants. Graduates of these vocational trainings share their knowledge, creating a ripple effect of positive change throughout their communities.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24 md:py-32 border-y border-goldLight/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Benefits
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              A distinctive skill development program
            </h2>
            <Prose size="md" className="text-ivory/85">
              <p>
                Kaushal Darpan presents a distinctive skill development program that combines life skills, employability skills and entrepreneurial skills. By equipping trainees with these comprehensive skills, the program enhances their entrepreneurial skills and sets inspiring examples for their surrounding communities, while inspiring and encouraging similar trends to flourish.
              </p>
              <p>
                Beyond vocational training, Kaushal Darpan prioritises cultivating a resilient mindset that empowers individuals to thrive in today&rsquo;s job market and create their own opportunities.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              The important lessons that people learn in Kaushal Darpan are:
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {lessons.map((l, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="bg-ivory rounded-xl px-5 py-4 border border-charcoal/5 text-charcoal/85 flex items-center gap-3">
                  <span className="text-saffron">●</span>
                  <span className="text-sm">{l}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              I would like to impart skills!!!
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Kaushal Darpan" showProgramField showSkillsField showCityField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
