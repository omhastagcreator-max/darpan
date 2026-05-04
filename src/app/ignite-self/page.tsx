import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import ProgramDetails from '@/components/ProgramDetails'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import JourneyTimeline from '@/components/JourneyTimeline'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import {
  Mountain, Globe, Wifi,
  Flame, BookOpen, Brain, Sparkles,
  CheckCircle2, Calendar, Clock, MapPin, IndianRupee, Users,
} from 'lucide-react'

export const metadata = {
  title: 'Ignite Self — Channel Your Inner Fire | Darpan Foundation',
  description:
    'A 3-day immersive program of self-inquiry through Sahaj Smriti Yog. Available as Retreat at Darpan Ashram, Reflect on-site, or Online. Includes meditation, yoga, journaling, vision board, Kriya and forest trek.',
}

const modules = [
  {
    Icon: Flame,
    label: 'Module 01',
    title: 'Knowing Body',
    bullets: [
      'Understanding individual body types',
      'Food choices based on your body type',
      'Yogasanas',
      'Breathing exercises',
      'Daily practice tools for a healthy body',
    ],
  },
  {
    Icon: BookOpen,
    label: 'Module 02',
    title: "Explore Purpose in One's Life",
    bullets: [
      'Introspection through meaningful activities',
      'Relaxation',
      'Vision Board',
      'Collage Making',
      'Journaling',
    ],
  },
  {
    Icon: Brain,
    label: 'Module 03',
    title: 'Understanding Mind / Self / Soul',
    bullets: [
      'Individual & group activities',
      'Games',
      'Videos',
      'Story Telling',
      'Mind Mapping',
    ],
  },
  {
    Icon: Sparkles,
    label: 'Module 04',
    title: 'The Big Picture',
    bullets: [
      'Tying it all together',
      'Seeing the big picture',
      'Self-transformation tools',
      'Sahaj Smriti Kriya',
      'Guided Meditation',
    ],
  },
]

const benefits = [
  'Improved concentration',
  'Balanced mental energy',
  'Increased productivity',
  'Heightened inner peace levels',
  'Healthy body',
  'Emotional balance',
]

const formats = [
  {
    Icon: Mountain,
    label: 'Retreat',
    location: 'Darpan Ashram, Urigam, TN',
    duration: '3 days, residential',
    color: 'from-darpanNavy to-darpanTeal',
    bullets: [
      'Immersive 3-day stay in the pristine environs of Darpan Ashram',
      'Break personal limitations and live without expectations',
      'Includes Nakshatra Darpan stargazing session',
      'Includes Kshetra Darpan forest trek',
      'Vegetarian meals and accommodation provided',
    ],
    bestFor: 'Anyone ready to step out of routine for a transformative reset.',
  },
  {
    Icon: Globe,
    label: 'Reflect',
    location: 'Your premises or external venues',
    duration: '4 sessions × 3 hours + 1 day at ashram',
    color: 'from-darpanTeal to-darpanCyan',
    bullets: [
      '3-hour in-house sessions spread over 4 days',
      'Followed by one day at the ashram',
      'Hosted at your organisation, residential community or other venue',
      'Tailored experiential journey for personal effectiveness',
      'Suited to busy professionals',
    ],
    bestFor: 'Organisations, residential communities, schools, corporate teams.',
  },
  {
    Icon: Wifi,
    label: 'Online',
    location: 'Wherever you are',
    duration: '4 modules × 4 one-hour sessions',
    color: 'from-darpanCyan to-darpanTeal',
    bullets: [
      'Separate modules for Body, Mind, Self and Soul',
      'Each module: 4 sessions of 1 hour, spread over 4 days',
      'Choose your starting module',
      'Complete at your own pace',
      'Live, interactive sessions with the facilitator',
    ],
    bestFor: 'Seekers outside Bengaluru / Krishnagiri who cannot travel right now.',
  },
]

const journeySteps = [
  { num: '01', title: 'Arrive & Settle', desc: 'Arrive between 9:30 AM and 5:00 PM. Receive your room, meet the facilitator and other seekers, and walk the grounds before evening Satsang.' },
  { num: '02', title: 'Day 1 — Knowing the Body', desc: 'Morning yoga and meditation. Sessions on body type, breath, and food. Afternoon Seva. Evening Satsang with Guruji.' },
  { num: '03', title: 'Day 2 — Mind & Purpose', desc: 'Vision board, collage making, journaling, mind mapping. Forest trek as part of Kshetra Darpan. Night sky session at the open-air observatory.' },
  { num: '04', title: 'Day 3 — Self & Soul', desc: 'Introduction to Sahaj Smriti Kriya. Guided meditation. Tying threads together — seeing the big picture of your own life.' },
  { num: '05', title: 'Carry it home', desc: 'Daily practice tools and follow-up support. The work continues in your everyday life, not only at the ashram.' },
]

const testimonials = [
  {
    quote: 'I came expecting a workshop. I left with the first real silence I had felt in years. The practices follow me back into my work week — that is the gift.',
    name: 'Karthik V.',
    role: 'Product Manager, Bengaluru',
  },
  {
    quote: 'The vision board exercise sounds simple. It cracked something open in me. I finally saw what I actually wanted, instead of what I had been performing.',
    name: 'Meera S.',
    role: 'Designer, Pune',
  },
  {
    quote: 'My team did Ignite Self Reflect at our office. We are still talking about it months later. It changed how we listen to each other.',
    name: 'Anand K.',
    role: 'Founder, B2B startup',
  },
]

const faqs = [
  {
    q: 'Do I need any prior meditation experience?',
    a: 'No. Ignite Self is designed for first-time seekers as well as experienced practitioners. The pace and depth adjust to where you are.',
  },
  {
    q: 'What should I bring for the Retreat?',
    a: 'Modest, comfortable clothing for yoga and walking. A water bottle. A notebook and pen. Basic toiletries. Open mind. No phones during sessions; you can use them during breaks.',
  },
  {
    q: 'Is the ashram food vegetarian?',
    a: 'Yes — simple, satvik vegetarian meals. Three meals plus an afternoon refreshment. Special dietary needs can usually be accommodated; please mention them in your enquiry.',
  },
  {
    q: 'What is the contribution / fee?',
    a: 'Ignite Self runs on a suggested contribution model that covers food, accommodation and program facilitation. We will share specific tiers when we confirm your dates. Financial support is available for genuine cases — please write to us.',
  },
  {
    q: 'Can I bring my children or partner?',
    a: 'Children below 12 are welcome with guardian supervision; teenagers can join the parallel "World of Opportunities" program if running concurrently. Couples can attend together — please mention this in your enquiry.',
  },
  {
    q: 'How do I get to Darpan Ashram?',
    a: 'The ashram is in Urigam village, Krishnagiri District, Tamil Nadu — about 3 hours from central Bengaluru. Reach by bus from Bengaluru, by private taxi, or by personal vehicle.',
  },
  {
    q: 'What happens after the program?',
    a: 'You will receive daily practice tools, audio guidance and access to ongoing Satsang (online and in-person in Bengaluru on Sundays). The relationship with Darpan continues for as long as you want it to.',
  },
]

export default function IgniteSelfPage() {
  return (
    <>
      <PageHero
        eyebrow="Ignite Self"
        title="Channel your inner fire."
        subtitle="A 3-day experiential journey of self-inquiry through Sahaj Smriti Yog. By kindling your inner fire, you uncover not just personal potential — but the capacity to inspire transformation in others."
        breadcrumb={[{ label: 'Programs', href: '/programs' }, { label: 'Ignite Self' }]}
        bgImage="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1740&auto=format&fit=crop"
      />

      {/* PROMISE + DETAILS SIDEBAR */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                  The Promise
                </span>
                <h2 className="font-display text-3xl md:text-5xl text-darpanNavy mb-8 leading-tight font-semibold">
                  To know yourself is to know your <em className="text-darpanTeal italic font-light">Body, Mind &amp; Self</em> — and to experience your Soul.
                </h2>
                <Prose size="lg">
                  <p>
                    In a world that rewards competition and performance, stress has become ordinary. Ignite Self cuts through the noise. It guides you to a calm, sustained state of inner equilibrium through Sahaj Smriti Yog — and it is, fundamentally, a journey of unlocking your own true potential.
                  </p>
                  <p>
                    Not what others have told you about yourself. <strong>What you yourself discover.</strong>
                  </p>
                  <p className="text-darpanTeal italic">
                    It is the journey for self-inquiry and self-discovery.
                  </p>
                </Prose>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="#register" icon>Register for Ignite Self</Button>
                  <Button href="#formats" variant="outline" icon>See the formats</Button>
                </div>
              </FadeIn>
            </div>

            {/* DECISION-MAKING SIDEBAR */}
            <div className="lg:col-span-5">
              <ProgramDetails
                duration="3 days (Retreat) · 4 + 1 days (Reflect) · 4 weeks (Online)"
                format="Residential / On-site / Online — three options"
                whoFor="Anyone aged 18+ seeking clarity, stillness, or a reset. No prior experience needed."
                schedule="Multiple cohorts each year. Next dates shared on enquiry."
                language="English &amp; Hindi"
                fee="Suggested contribution. Tiered. Financial support available."
                location="Darpan Ashram, Urigam (Retreat) · Online or your venue (Reflect/Online)"
                prerequisite="Open mind. Modest clothing. No phones during sessions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-24 md:py-32 bg-darpanPale">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Program Curriculum
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy leading-tight font-semibold">
              Four modules. <em className="text-darpanTeal italic font-light">One whole journey.</em>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {modules.map((m, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-white border border-darpanNavy/8 rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-darpanTeal/10 transition-all">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold block mb-2">
                        {m.label}
                      </span>
                      <h3 className="font-display text-2xl text-darpanNavy font-semibold">{m.title}</h3>
                    </div>
                    <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center text-white shrink-0">
                      <m.Icon size={22} strokeWidth={1.6} />
                    </div>
                  </div>
                  <ul className="space-y-2.5 mt-6">
                    {m.bullets.map((b, j) => (
                      <li key={j} className="text-darpanInk/80 text-sm flex items-start gap-2.5">
                        <CheckCircle2 size={14} className="text-darpanTeal mt-1 shrink-0" />
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

      {/* JOURNEY TIMELINE */}
      <JourneyTimeline
        eyebrow="What 3 days look like"
        title="A day-by-day sense of the Retreat."
        steps={journeySteps}
      />

      {/* BENEFITS */}
      <section className="bg-darpanNavy text-ivory py-24 md:py-32 mandala-bg">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <FadeIn>
            <div className="text-darpanCyan mb-8">
              <LotusDivider />
            </div>
            <span className="text-darpanCyan uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              The Benefits
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight font-semibold">
              Practice, observe — <em className="text-darpanCyan italic font-light">and notice the shift.</em>
            </h2>
            <p className="text-ivory/75 max-w-xl mx-auto mt-5">
              These changes appear naturally for those who stay with the practice.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl py-6 px-6 text-ivory/90 hover:bg-white/10 transition-colors">
                  <CheckCircle2 size={18} className="text-darpanCyan mb-2 mx-auto" />
                  {b}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FORMATS — DECISION HELP */}
      <section id="formats" className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Choose Your Format
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy mb-5 leading-tight font-semibold">
              Three ways in. <em className="text-darpanTeal italic font-light">Pick what fits your life.</em>
            </h2>
            <p className="text-darpanInk/70 text-base md:text-lg">
              The depth is the same. The shape changes to meet you where you are.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {formats.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white border border-darpanNavy/8 rounded-2xl overflow-hidden h-full flex flex-col hover:shadow-2xl hover:shadow-darpanTeal/15 hover:-translate-y-1 transition-all">
                  {/* Color header */}
                  <div className={`bg-gradient-to-br ${f.color} p-7 text-white`}>
                    <f.Icon size={28} strokeWidth={1.6} className="mb-4 opacity-90" />
                    <p className="text-[10px] uppercase tracking-[0.3em] font-semibold opacity-80">Ignite Self</p>
                    <h3 className="font-display text-3xl font-semibold mt-1">{f.label}</h3>
                  </div>

                  {/* Body */}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="space-y-3 pb-5 border-b border-darpanNavy/10 mb-5">
                      <div className="flex items-start gap-3 text-sm">
                        <MapPin size={14} className="text-darpanTeal mt-1 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-darpanInk/55 font-semibold">Location</p>
                          <p className="text-darpanNavy">{f.location}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 text-sm">
                        <Clock size={14} className="text-darpanTeal mt-1 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-darpanInk/55 font-semibold">Duration</p>
                          <p className="text-darpanNavy">{f.duration}</p>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-5 flex-1">
                      {f.bullets.map((b, j) => (
                        <li key={j} className="text-darpanInk/80 text-sm flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 size={14} className="text-darpanTeal mt-1 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-darpanPale rounded-xl p-4 text-sm border border-darpanTeal/15">
                      <p className="text-[10px] uppercase tracking-widest text-darpanTeal font-semibold mb-1">
                        Best for
                      </p>
                      <p className="text-darpanNavy text-sm">{f.bestFor}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials
        items={testimonials}
        eyebrow="Voices from Ignite Self"
        title="What past participants are saying."
        variant="cream"
      />

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* REGISTER */}
      <section id="register" className="bg-darpanNavy text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <div className="text-darpanCyan mb-8">
              <LotusDivider />
            </div>
            <span className="text-darpanCyan uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Begin
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight font-semibold">
              Register for Ignite Self.
            </h2>
            <p className="text-ivory/75 text-base md:text-lg leading-relaxed">
              Tell us which format calls to you. We will write back personally — usually within two working days.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <EnquiryForm
                programName="Ignite Self"
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
