import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import ProgramDetails from '@/components/ProgramDetails'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import LotusDivider from '@/components/LotusDivider'
import Button from '@/components/Button'
import { CheckCircle2, Heart, Brain, Lightbulb, Compass } from 'lucide-react'

export const metadata = {
  title: 'Sahaj Smriti Yog — The path back to yourself | Darpan Foundation',
  description:
    'A journey from clear thinking to transcending thinking to experience real peace. The natural, spontaneous path of self-realisation, suited for householders and seekers worldwide.',
}

const touchstones = [
  { Icon: Compass, num: '01', name: 'Understanding', desc: 'The field of intelligence and emotions.' },
  { Icon: Heart, num: '02', name: 'Experiencing', desc: 'The field of perception and direct happening.' },
  { Icon: Lightbulb, num: '03', name: 'Feeling', desc: 'The field of Reality itself.' },
]

const dailyBenefits = [
  { title: 'Stress relief & resilience', desc: 'A new perspective on stressful situations and the inner capacity to manage and eventually move beyond them.' },
  { title: 'Body and mind in balance', desc: 'Heightened self-awareness, present-moment focus, fewer negative loops, and better-quality relationships.' },
  { title: 'Sharper brain, freer creativity', desc: 'Productivity rises. Imagination unbinds. Creative intelligence widens.' },
  { title: 'Clearer decision-making', desc: 'Mental clutter dissolves. Intelligence sharpens. Decisions arrive faster, with greater clarity.' },
]

const testimonials = [
  {
    quote: 'I had tried every meditation app. Sahaj Smriti Yog was the first thing that did not feel like one more thing to do. It was like remembering, not adding.',
    name: 'Shruti N.',
    role: 'Doctor, Chennai',
  },
  {
    quote: 'I expected to need to step away from my work. Instead the practice became part of my work. The clarity in decision-making has been the most surprising shift.',
    name: 'Vikram J.',
    role: 'Investment professional',
  },
  {
    quote: 'After initiation, my relationship with my own mind changed. I am less at war with my thoughts and more friends with them.',
    name: 'Lakshmi P.',
    role: 'Teacher, Bengaluru',
  },
]

const faqs = [
  {
    q: 'What does "Sahaj" mean and why does it matter?',
    a: 'Sahaj means natural, spontaneous, effortless. The practice does not ask you to suppress, force or perform. It lets your restless mind settle into a state of deep rest — without strain.',
  },
  {
    q: 'Do I have to renounce anything in my life?',
    a: 'No. Sahaj Smriti Yog is built for householders. There is no need to renounce family, work, aspirations or any other dimension of being human. Spirituality here is the transformation of life from within, while remaining fully engaged with it.',
  },
  {
    q: 'How is initiation done?',
    a: 'Initiation happens in person or online with Guruji or a designated facilitator. After initiation, you will have access to ongoing Satsang (Sundays in Bengaluru and online) and direct guidance for your practice.',
  },
  {
    q: 'How long before I notice changes?',
    a: 'Subtle shifts often appear within the first few weeks of regular practice — calmer reactions, clearer choices, easier sleep. Deeper changes unfold over months and years. The pace is yours.',
  },
  {
    q: 'Is there a cost?',
    a: 'Sahaj Smriti Yog is offered as part of Darpan&rsquo;s programs. There is no commercial fee for the practice itself. Contributions toward the foundation\'s work are welcomed but never required.',
  },
]

export default function YogPage() {
  return (
    <>
      <PageHero
        eyebrow="Sahaj Smriti Yog"
        title="The path back to yourself."
        subtitle="A journey from clear thinking — to transcending thinking — to the experience of genuine peace. An opportunity to recognise your true self and become the author of your own destiny."
        breadcrumb={[{ label: 'Programs', href: '/programs' }, { label: 'Sahaj Smriti Yog' }]}
        bgImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1788&auto=format&fit=crop"
      />

      {/* PROMISE + DETAILS */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                  The Practice
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-darpanNavy mb-8 leading-tight font-semibold">
                  You don&rsquo;t need to acquire anything new — <em className="text-darpanTeal italic font-light">only rediscover what is already yours.</em>
                </h2>
                <Prose size="lg">
                  <p>
                    Awakening to our real nature does not mean we have to acquire something new, rather we must discover within ourselves that which is timelessly pure and in harmony with the ultimate.
                  </p>
                  <p>
                    The meaning of the word <strong className="text-darpanNavy">Sahaj</strong> is being normal, being spontaneous. Many understand spirituality as an escape from life towards the Divine. In reality, it is the divinization of life — transformation through full involvement in life.
                  </p>
                  <p>
                    There is no need to renounce your family, your worldly duties, your individual aspirations or any other human expression. This very universality, simplicity and naturalness brings people from all over the world to Guruji.
                  </p>
                  <p className="text-darpanTeal italic font-medium">
                    Clarity gives you power.
                  </p>
                </Prose>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="#register" icon>Become a practitioner</Button>
                  <Button href="/satsang" variant="outline" icon>Join Satsang first</Button>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-5">
              <ProgramDetails
                duration="Lifelong practice. Initiation: 1 to 3 sessions."
                format="In-person initiation, then daily personal practice + group Satsang"
                whoFor="Householders, professionals, students — anyone seeking peace without leaving life behind"
                schedule="Weekly Satsang every Sunday in Bengaluru. Online sessions also available."
                language="English &amp; Hindi"
                fee="No commercial fee. Contribution welcome."
                location="Bengaluru / Online / Darpan Ashram"
                prerequisite="None. An open mind is enough."
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="brand-gradient py-16 md:py-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-darpanCyan mb-8">
              <LotusDivider />
            </div>
            <p className="font-display italic text-3xl md:text-5xl text-ivory leading-snug font-light">
              Sahaj Smriti Yog is the path leading to:
            </p>
            <ul className="mt-10 space-y-3 text-2xl md:text-3xl font-display text-darpanCyan font-light">
              <li>Purity in Heart</li>
              <li>Clarity in Thought</li>
              <li>Correctness in Decision-Making</li>
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* THREE TOUCHSTONES */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Three Touchstones
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy leading-tight font-semibold">
              A preparation path with <em className="text-darpanTeal italic font-light">three fields of work.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {touchstones.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-darpanPale rounded-2xl p-8 h-full border border-darpanNavy/10 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 mx-auto rounded-2xl brand-gradient flex items-center justify-center text-white mb-5">
                    <t.Icon size={26} strokeWidth={1.6} />
                  </div>
                  <p className="text-darpanTeal text-xs uppercase tracking-[0.3em] font-semibold mb-2">{t.num}</p>
                  <h3 className="font-display text-2xl text-darpanNavy mb-3 font-semibold">{t.name}</h3>
                  <p className="text-darpanInk/75 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 max-w-3xl mx-auto text-center text-darpanInk/75 leading-relaxed text-lg">
            <p>
              The uniqueness of this method is that you do not apply any force. It lets your restless mind settle and move into a state of deep rest.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DAILY BENEFITS */}
      <section className="bg-darpanPale py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              In Daily Life
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy leading-tight font-semibold">
              Benefits practitioners notice.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyBenefits.map((b, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-darpanNavy/10 rounded-2xl p-7 h-full hover:shadow-lg transition-shadow">
                  <CheckCircle2 className="text-darpanTeal mb-4" size={22} />
                  <h3 className="font-display text-xl text-darpanNavy mb-3 font-semibold">{b.title}</h3>
                  <p className="text-darpanInk/75 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        items={testimonials}
        eyebrow="Voices from practitioners"
        title="Stories from those who stayed with the practice."
        variant="light"
      />

      <FAQ items={faqs} />

      <section id="register" className="bg-darpanNavy text-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight font-semibold">
              Become a Sahaj Smriti Yog practitioner.
            </h2>
            <p className="text-ivory/75 text-base md:text-lg">
              Tell us a little about yourself. We will guide you on next steps.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <EnquiryForm
                programName="Sahaj Smriti Yog"
                showProgramField
                showCityField
                buttonLabel="Send Enquiry"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
