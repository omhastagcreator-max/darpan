import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import Button from '@/components/Button'

export const metadata = {
  title: 'Vidya Darpan | Darpan Foundation',
  description: 'Education for underprivileged children. Help us reach a million children.',
}

const stats = [
  { num: '6,500+', label: 'Beneficiaries' },
  { num: '35,400+', label: 'Study hours' },
  { num: '40+', label: 'Schools' },
  { num: '42+', label: 'Villages' },
  { num: '5', label: 'States' },
]

const reach = [
  'Direct education to the children',
  'New teaching methods',
  'Classroom-based interventions',
  'Improved infrastructure',
  'Better learning materials',
  'Digital advancement through digital learning programs',
  'Additional teachers',
  'Mentorship programs for students',
  'Value-based education',
]

const activities = [
  {
    name: 'Bridging Gap',
    body:
      'Darpan Foundation as a non-profit organisation has worked wonders in providing education for the underprivileged and empowering them to transform their lives for the better. Over the years, we have taken up numerous initiatives with micro-level interventions. Some of them are as follows:',
    bullets: [
      'Employed local educated youth to teach in schools facing acute shortage of faculty.',
      'Setup physical infrastructure like toilets, tables and chairs',
      'Enabled digital education by providing computers, smart-phones, multi-function printers, projectors and associated accessories.',
      'Distributed stationery kits, uniforms, educational and sports materials to the children',
      'Sponsored the cultural and sports days’ activities',
    ],
  },
  {
    name: 'Digital Enablement',
    body:
      'The positive and encouraging outcome of the Digital Learning Program has propelled Darpan Foundation to employ technology to augment the gaps in learning. Rural children are very driven and motivated but have very limited resources to nourish their quest for knowledge and nurture their abilities. Darpan Foundation aimed to provide STEM education for the underprivileged, which is why we have designed an online STEM learning module for them.',
    bullets: [
      'Explains fundamental scientific concepts in a comprehensive manner',
      'Encourages scientific thinking in everyday life',
      'Helps to correlate observations from day-to-day life to fundamental scientific concepts',
      'Uses simple experiments to encourage students to question, test, analyse and verify',
      'Enhances the learning outcome using multimedia tools such as PPTs, videos and online laboratories',
      'Provides guidance and ensures holistic well-being through the Mentorship Program',
    ],
  },
  {
    name: 'Gurukul',
    body:
      'Vidya Darpan is an endeavour, an attempt to ensure that children learn to live in tune with nature. Education should spark curiosity, nurture creativity and build confidence among children. Darpan Foundation envisions to set up a Gurukul in India with the objective of holistic development of children where they learn:',
    bullets: [
      'Self-control',
      'Character development',
      'Social awareness',
      'Personality development',
      'Intellectual development',
      'Spiritual development',
      'Preservation of knowledge and culture',
    ],
  },
]

export default function VidyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Vidya Darpan"
        title="Vidya Darpan"
        bgImage="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Vidya Darpan strives to create systems and institutions that foster the complete growth of every child and nurture their potential. We aim to teach children to live in harmony with nature and emphasise on character development and human values.
              </p>
              <p>
                The program highlights the significance of physical fitness and sports for overall child development by promoting yoga, martial arts and outdoor adventures to promote a healthy lifestyle, build confidence and develop teamwork.
              </p>
              <p>
                Vidya Darpan is dedicated to providing education for underprivileged children and ensuring they have access to quality education, opening doors to a brighter future.
              </p>
              <p>
                With its holistic approach, Vidya Darpan aims to shape a future generation of responsible, ethical and well-rounded individuals.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* MENTOR A MILLION */}
      <section className="bg-charcoal text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Mission
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Mentor a Million
            </h2>
            <Prose size="md" className="text-ivory/85">
              <p>
                There are millions of children spread across rural India who are in need of mentorship and quality education. With this in mind, &ldquo;Mentor a Million&rdquo; is the social change and individual transformation programme of Darpan Foundation. We strongly believe that value-based, quality education is critical to hold the society together. To create such a holistic education system, we operate at four levels:
              </p>
            </Prose>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
              {[
                { name: 'Mentorship Program', desc: 'Train local young volunteers as mentors and role models. Mentors run sessions in communities and act as catalysts for change, positively shaping children\'s lives through fresh learning approaches.' },
                { name: 'Native Culture Rejuvenation', desc: 'Supplement classrooms with hobby clubs, dance, arts, music and theatre — all aligned with Indian cultural traditions.' },
                { name: 'Teacher Networking and Motivation Workshops', desc: 'Build a responsive teacher network. Stimulate intrinsic motivation, encourage local initiative, provide academic capacity-building and ongoing support.' },
                { name: '"Connect" Bridging the final mile', desc: 'Empower youth to pursue higher studies or enrol in ongoing skill-based employability programs like digital learning programs. These programs aim to provide opportunities for further education and enhance their employability skills.' },
              ].map((p, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="font-display text-lg text-goldLight mb-2">{p.name}</h3>
                  <p className="text-ivory/80 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-ivory py-20 md:py-24 border-t border-charcoal/5">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-center text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-8">Impact</p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-5xl mx-auto text-center">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display text-4xl md:text-5xl text-saffron mb-2">{s.num}</div>
                  <div className="text-charcoal/60 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-8 text-center">What we deliver</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {reach.map((r, i) => (
                <div key={i} className="bg-ivory rounded-xl px-5 py-4 border border-charcoal/5 flex items-start gap-3">
                  <span className="text-saffron mt-1 shrink-0">●</span>
                  <span className="text-charcoal/85 text-sm">{r}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THREE ACTIVITIES */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Vidya Darpan Activities
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Three streams of work
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {activities.map((a, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 md:p-9">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="text-saffron font-display text-3xl">{`0${i + 1}`}</span>
                    <h3 className="font-display text-2xl">{a.name}</h3>
                  </div>
                  <p className="text-ivory/80 leading-relaxed mb-4">{a.body}</p>
                  <ul className="space-y-2">
                    {a.bullets.map((b, j) => (
                      <li key={j} className="text-ivory/85 text-sm flex items-start gap-2">
                        <span className="text-saffron mt-1.5 shrink-0">●</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-ivory text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
              Help Us Reach a Million Children
            </h2>
            <p className="text-charcoal/70 text-lg mb-10">Get Involved</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button href="/volunteer" icon>Be a Volunteer</Button>
              <Button href="/donate" variant="secondary" icon>Contribute to the Cause</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Donate
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Vidya Darpan" showProgramField showCityField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
