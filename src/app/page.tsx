import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import YouTubeCard from '@/components/YouTubeCard'
import Logo from '@/components/Logo'
import Tilt3DCard from '@/components/Tilt3DCard'
import MandalaOrb from '@/components/MandalaOrb'
import FloatingOrbs from '@/components/FloatingOrbs'
import AnimatedCounter from '@/components/AnimatedCounter'
import Marquee from '@/components/Marquee'
import Parallax from '@/components/Parallax'
import Link from 'next/link'
import {
  ArrowRight, Sprout, Brain, Sparkles, CircleDot, Heart, Quote,
} from 'lucide-react'

const programs = [
  { name: 'Ignite Self', tagline: 'Channel your inner fire', href: '/ignite-self', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Sahaj Smriti Yog', tagline: 'The path back to yourself', href: '/sahaj-smriti-yog', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1788&auto=format&fit=crop' },
  { name: 'Sahaj Smriti Kriya', tagline: 'Command your life energy', href: '/sahaj-smriti-kriya', img: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Satsang', tagline: 'In the company of Truth', href: '/satsang', img: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Swadhyay', tagline: 'Study yourself', href: '/swadhyay', img: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Seva', tagline: 'Love in action', href: '/seva', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Upanishad', tagline: 'Conversations renewed', href: '/upanishad', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Nakshatra Darpan', tagline: 'See the infinite', href: '/nakshatra-darpan', img: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Children & Teens', tagline: 'Life touching life', href: '/children-and-teens', img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1740&auto=format&fit=crop' },
  { name: 'Workshops', tagline: 'Art as meditation', href: '/workshops', img: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1740&auto=format&fit=crop' },
]

const initiatives = [
  { name: 'Kshetra Darpan', tag: 'Pure Food for Body', href: '/kshetra-darpan', desc: 'Conserving the environment by growing food using natural farming.' },
  { name: 'Mann Darpan', tag: 'Pure Food for Mind', href: '/mann-darpan', desc: 'Sustainable learning modules and workshops for all age groups.' },
  { name: 'Vidya Darpan', tag: 'Pure Food for Self', href: '/vidya-darpan', desc: 'Systems and institutions that foster the complete growth of every child.' },
  { name: 'Kaushal Darpan', tag: 'Pure Food for Self', href: '/kaushal-darpan', desc: 'Encourage indigenous craftsmanship and empower local youth.' },
  { name: 'Jeevan Darpan', tag: 'Pure Food for Self', href: '/jeevan-darpan', desc: 'Nurture growth at the stage of life beyond retirement.' },
  { name: 'Atma Darpan', tag: 'Pure Food for Soul', href: '/atma-darpan', desc: 'Awaken the innate Divinity through Sahaj Smriti Yog.' },
]

const stats = [
  { value: 6500, suffix: '+', label: 'Children educated' },
  { value: 40, suffix: '+', label: 'Schools supported' },
  { value: 2000, suffix: '+', label: 'Trees planted' },
  { value: 5, suffix: '', label: 'States reached' },
]

const testimonials = [
  { quote: 'Sahaj Smriti Yog gave me a way to come back to myself in the middle of a busy life.', name: 'Anita R.', role: 'Architect, Bengaluru' },
  { quote: 'I went to the ashram for three days. I came back changed. The forest, the silence, Guruji\'s presence — they showed me how much noise I was carrying.', name: 'Rohit M.', role: 'Founder, SaaS company' },
  { quote: 'My children attended Life Touching Life. They came home talking about soil, water and the responsibility of being human.', name: 'Priya & Vinod', role: 'Parents, Hyderabad' },
  { quote: 'After initiation, my relationship with my own mind changed. I am less at war with my thoughts.', name: 'Lakshmi P.', role: 'Teacher, Bengaluru' },
  { quote: 'I had tried every meditation app. This was the first thing that did not feel like one more thing to do.', name: 'Shruti N.', role: 'Doctor, Chennai' },
  { quote: 'My team did Ignite Self Reflect at our office. We are still talking about it months later.', name: 'Anand K.', role: 'Founder, B2B startup' },
]

export default function Home() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO with 3D MANDALA + PARALLAX */}
      <section className="relative h-screen min-h-[680px] w-full flex items-center overflow-hidden brand-gradient">
        {/* Layered photography */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-[kenBurns_28s_ease-in-out_infinite_alternate]" />
        </div>

        {/* Floating orbs */}
        <FloatingOrbs count={5} variant="teal" />

        {/* Right-side rotating mandala — the 3D centrepiece */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 z-10 hidden lg:block opacity-90">
          <MandalaOrb size={680} />
        </div>
        {/* Mobile mandala — smaller, behind */}
        <div className="absolute -right-1/3 top-20 z-0 lg:hidden opacity-50">
          <MandalaOrb size={420} speed={0.7} />
        </div>

        <div className="relative z-20 container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <span className="text-darpanCyan font-sanskrit text-sm md:text-base tracking-[0.4em] uppercase mb-4 block">
                दर्पण &nbsp;·&nbsp; The Mirror
              </span>
            </FadeIn>
            <FadeIn delay={0.5}>
              <h1 className="text-ivory font-display text-4xl md:text-5xl lg:text-7xl font-light leading-[1.05] mb-6 tracking-tight">
                What if you could finally see <em className="text-darpanCyan font-medium not-italic glow-teal">yourself</em> — clearly?
              </h1>
            </FadeIn>
            <FadeIn delay={0.85}>
              <p className="text-ivory/80 text-base md:text-lg mb-8 max-w-xl font-light leading-relaxed">
                A foundation built around individual transformation — through meditation, ashram life, education, sustainable farming and seva. Begin with one quiet question.
              </p>
            </FadeIn>
            <FadeIn delay={1.1} className="flex flex-wrap items-center gap-3">
              <Button href="/satsang" size="lg">Be in Satsang</Button>
              <Button href="/sahaj-smriti-yog" variant="outline" size="lg" className="border-ivory/40 text-ivory hover:border-ivory hover:text-darpanCyan">
                Meditate
              </Button>
              <Button href="/programs" variant="ghost" size="lg" className="text-ivory hover:bg-white/10">
                Explore
              </Button>
            </FadeIn>

            {/* Inline mini-stats below CTAs */}
            <FadeIn delay={1.4} className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-white/10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl text-darpanCyan font-semibold leading-none mb-1">
                    <AnimatedCounter to={s.value} suffix={s.suffix} duration={2.2} />
                  </div>
                  <div className="text-ivory/60 text-[10px] uppercase tracking-[0.25em]">{s.label}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-ivory/50 text-[10px] tracking-[0.4em] uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* SECTION 2 — STILLNESS / FIRST WORDS */}
      <section className="bg-ivory py-16 md:py-20 relative overflow-hidden">
        <FloatingOrbs count={2} variant="mixed" className="opacity-40" />
        <div className="container mx-auto px-6 max-w-3xl text-center relative z-10">
          <FadeIn>
            <div className="text-darpanTeal mb-6">
              <LotusDivider />
            </div>
            <p className="font-display text-2xl md:text-3xl text-darpanNavy leading-snug font-light">
              &ldquo;In real spirit we can value others only when we have discovered <em className="text-darpanTeal font-normal not-italic">something pure and pious inside ourselves</em> — that dazzles us and fills us with wonder and astonishment.&rdquo;
            </p>
            <p className="mt-7 text-darpanTeal tracking-[0.3em] uppercase text-[11px] font-semibold">
              Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCING GURUJI (compact, with parallax accents) */}
      <section className="py-16 md:py-24 bg-darpanPale overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <Parallax offset={40} className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-darpanNavy/25">
                <img
                  src="https://images.unsplash.com/photo-1620149455617-cd44d51e6d3a?q=80&w=1740&auto=format&fit=crop"
                  alt="Guruji Shri Nandkishore"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darpanNavy/85 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-darpanTeal font-semibold mb-0.5">Founder</p>
                    <p className="font-display text-darpanNavy text-base font-semibold leading-tight">
                      Guruji Shri Nandkishore
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-darpanTeal/30 -z-10 animate-spin-slower" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-darpanTeal/15 -z-10 animate-pulse-soft" />
            </Parallax>

            <div className="lg:col-span-7">
              <FadeIn>
                <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
                  Meet the Founder
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-darpanNavy mb-5 leading-[1.1] font-semibold">
                  A humanitarian, poet, writer, visionary — <em className="text-darpanTeal not-italic">and a spiritual master.</em>
                </h2>
                <div className="space-y-4 text-darpanInk/80 text-[15px] md:text-base leading-relaxed">
                  <p>
                    Guruji&rsquo;s vision is to foster empowered and transformed individuals with deeper understanding of spiritual values which unite people. He made spiritual awakening as core value in his mission to transform humanity.
                  </p>
                  <p>
                    Proximity to a living Guru opens three doors: <strong className="text-darpanNavy">Understanding, Experience,</strong> and the <strong className="text-darpanNavy">Attainment</strong> of inner peace and happiness.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/guruji" icon>Read Guruji&rsquo;s Story</Button>
                  <Button href="/satsang" variant="outline" icon>Be in Satsang</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — ASHRAM */}
      <section className="relative py-14 md:py-20 overflow-hidden">
        <Parallax offset={60} className="absolute inset-0 z-0">
          <div className="w-full h-[120%] -mt-16">
            <img
              src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
              alt="Darpan Ashram"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-darpanNavy/90 via-darpanNavy/65 to-darpanTeal/35" />
        <FloatingOrbs count={3} variant="teal" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-darpanCyan uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
                The Place
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-ivory mb-5 leading-[1.1] font-semibold">
                Welcome to <em className="text-darpanCyan font-light italic">Darpan Ashram.</em>
              </h2>
              <div className="space-y-4 text-ivory/85 text-[15px] md:text-base leading-relaxed">
                <p>
                  Ashram life provides a wonderful opportunity to break your personal limitations &amp; barriers and live without any expectations.
                </p>
                <p>
                  Outwardly, it may look like a peaceful retreat. Beneath the surface lies the chance to receive a living Guru&rsquo;s grace, presence and guidance — and do the inner work of awakening to your original nature.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/darpan-ashram" icon>Visit Ashram</Button>
                <Button href="/register-your-visit" variant="outline" className="border-ivory/40 text-ivory hover:border-ivory hover:text-darpanCyan" icon>
                  Plan Your Stay
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VISION + 4 PILLARS (3D tilt cards) */}
      <section className="bg-ivory py-16 md:py-24 relative overflow-hidden">
        <FloatingOrbs count={2} variant="mixed" className="opacity-30" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
              Guruji&rsquo;s Vision
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-darpanNavy mb-4 leading-tight font-semibold">
              Transform every individual, <em className="text-darpanTeal italic font-light">spiritually.</em>
            </h2>
            <p className="text-darpanInk/70 text-[15px] md:text-base leading-relaxed">
              Transformed individuals alone become solutions to the problems our planet faces. The vision works on four levels of human existence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
            {[
              { Icon: Sprout, pillar: 'Body', title: 'Pure Food for Body', desc: 'Natural agricultural practices for a conscious and harmonious future.' },
              { Icon: Brain, pillar: 'Mind', title: 'Pure Food for Mind', desc: 'Programs to attain mental and spiritual well-being — deepening your experience of life.' },
              { Icon: CircleDot, pillar: 'Self', title: 'Pure Food for Self', desc: 'Empowerment to exercise correct choices — transformation from self to Self.' },
              { Icon: Sparkles, pillar: 'Soul', title: 'Pure Food for Soul', desc: 'Sahaj Smriti Yog — explore unexplored dimensions of your existence.' },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <Tilt3DCard className="h-full" intensity={6}>
                  <div className="h-full bg-white rounded-2xl p-6 border border-darpanNavy/8 hover:border-darpanTeal/40 hover:shadow-xl hover:shadow-darpanTeal/15 transition-all">
                    <div className="w-12 h-12 rounded-xl brand-gradient flex items-center justify-center text-white mb-4">
                      <p.Icon size={22} strokeWidth={1.6} />
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-darpanTeal font-semibold mb-1">{p.pillar}</p>
                    <h3 className="text-lg font-display text-darpanNavy font-semibold mb-2 leading-tight">{p.title}</h3>
                    <p className="text-darpanInk/70 text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </Tilt3DCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-10">
            <Button href="/vision" variant="outline" icon>Read the full vision</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — PROGRAMS SHOWCASE (horizontal scroll, 3D tilt cards) */}
      <section className="py-16 md:py-24 bg-darpanPale overflow-hidden relative">
        <div className="container mx-auto px-6 lg:px-12 mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 max-w-7xl mx-auto">
            <FadeIn>
              <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
                Programs
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-darpanNavy max-w-2xl leading-tight font-semibold">
                Pathways for every <em className="text-darpanTeal italic font-light">stage of your journey.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/programs" className="hidden md:inline-flex items-center gap-2 text-darpanTeal hover:gap-3 transition-all uppercase tracking-widest text-[11px] font-semibold">
                View all <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>

        <div className="overflow-x-auto pb-4 scrollbar-none">
          <div className="container mx-auto px-6 lg:px-12 flex gap-4 w-max">
            {programs.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.03} className="w-[270px] md:w-[300px] shrink-0">
                <Tilt3DCard intensity={10}>
                  <Link href={p.href} className="group block bg-white rounded-2xl overflow-hidden border border-darpanNavy/8 hover:shadow-2xl hover:shadow-darpanTeal/20 transition-all h-full">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-darpanNavy/50 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-lg text-darpanNavy mb-1 group-hover:text-darpanTeal transition-colors leading-tight font-semibold">
                        {p.name}
                      </h3>
                      <p className="text-darpanTeal text-[10px] uppercase tracking-[0.25em] font-semibold mb-3">
                        {p.tagline}
                      </p>
                      <span className="text-darpanNavy text-[11px] font-semibold flex items-center gap-1.5 group-hover:text-darpanTeal transition-colors">
                        Read more <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </Tilt3DCard>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 mt-8 text-center md:hidden">
          <Button href="/programs" variant="primary" icon>View all programs</Button>
        </div>
      </section>

      {/* SECTION 7 — INITIATIVES + IMPACT (dark, with mandala backdrop) */}
      <section className="bg-darpanNavy text-ivory py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-20">
          <MandalaOrb size={520} speed={0.5} />
        </div>
        <FloatingOrbs count={3} variant="teal" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeIn>
              <span className="text-darpanCyan uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
                Our Social Outreach
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight font-semibold">
                Rooted in compassion. <em className="text-darpanCyan italic font-light">Expanding through action.</em>
              </h2>
              <p className="text-ivory/75 text-[15px] md:text-base leading-relaxed">
                Six initiatives spanning environment, education, mental wellness, skill development, senior care, and spiritual outreach.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {initiatives.map((init, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <Tilt3DCard intensity={6}>
                  <Link href={init.href} className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-darpanCyan/40 transition-all group h-full backdrop-blur-sm">
                    <p className="text-darpanCyan text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">{init.tag}</p>
                    <h3 className="font-display text-xl mb-2 group-hover:text-darpanCyan transition-colors font-semibold">{init.name}</h3>
                    <p className="text-ivory/70 text-[13px] leading-relaxed mb-4">{init.desc}</p>
                    <span className="text-darpanCyan text-[10px] uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                      Read more <ArrowRight size={11} />
                    </span>
                  </Link>
                </Tilt3DCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Button href="/initiatives" variant="primary" icon>Explore all initiatives</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS MARQUEE */}
      <section className="bg-ivory py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-10">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
              Voices from the path
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-darpanNavy leading-tight font-semibold">
              Seekers, in their <em className="text-darpanTeal italic font-light">own words.</em>
            </h2>
          </FadeIn>
        </div>

        {/* Marquee row */}
        <Marquee duration={45} className="text-ivory">
          {testimonials.map((t, i) => (
            <div key={i} className="w-[340px] md:w-[420px] shrink-0 bg-white border border-darpanNavy/8 rounded-2xl p-6 hover:shadow-xl hover:shadow-darpanTeal/10 transition-all">
              <Quote className="text-darpanTeal/50 mb-3" size={24} />
              <p className="text-darpanInk/85 text-[14px] leading-relaxed mb-5">{t.quote}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-darpanNavy/8">
                <div className="w-9 h-9 rounded-full brand-gradient flex items-center justify-center text-white text-sm font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-darpanNavy text-[13px] font-semibold leading-tight">{t.name}</div>
                  <div className="text-darpanTeal text-[11px]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      {/* SECTION 9 — UPANISHAD VIDEOS */}
      <section className="bg-darpanPale py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
              Upanishad
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-darpanNavy mb-4 leading-tight font-semibold">
              Conversations that <em className="text-darpanTeal italic font-light">awaken.</em>
            </h2>
            <p className="text-darpanInk/70 text-[15px] md:text-base">
              Scholars, authors, scientists and seekers — in dialogue with Guruji.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-10">
            {[
              { videoId: 'M7lc1UVf-VE', title: 'Darpan Ashram: A Place to Reflect, Renew, and Reconnect with Your Real Self' },
              { videoId: 'M7lc1UVf-VE', title: 'Out of Body Experience & Past Life Secrets — Divine Energy & Spiritual Sadhana' },
              { videoId: 'M7lc1UVf-VE', title: 'Dr Makarand Paranjape in Upanishad with Guruji | International Yoga Day 2025' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <Tilt3DCard intensity={5}>
                  <YouTubeCard videoId={v.videoId} title={v.title} />
                </Tilt3DCard>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Button
              href="https://www.youtube.com/playlist?list=PLty53myrnL4TMF1g14CftemFFryIyAb_2"
              variant="outline"
              icon
            >
              Watch all videos
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 10 — DONATE / NEWSLETTER */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Donate */}
        <div className="brand-gradient text-white p-10 md:p-16 relative overflow-hidden">
          <FloatingOrbs count={2} variant="teal" />
          <div className="absolute -bottom-32 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
          <FadeIn className="relative z-10 max-w-md">
            <Heart className="text-darpanCyan mb-4" size={28} strokeWidth={1.4} />
            <span className="text-darpanCyan uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
              Generosity
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display mb-4 leading-tight font-semibold">
              Every gift becomes a ripple.
            </h3>
            <p className="text-white/85 mb-7 leading-relaxed text-[15px]">
              However small, your contribution moves outward — into communities, classrooms, fields, hearts.
            </p>
            <Button href="/donate" variant="outline" className="border-ivory/40 text-white hover:bg-white hover:text-darpanTeal" icon>
              Make a donation
            </Button>
          </FadeIn>
        </div>

        {/* Newsletter */}
        <div className="bg-darpanPale p-10 md:p-16">
          <FadeIn className="max-w-md">
            <Sparkles className="text-darpanTeal mb-4" size={28} strokeWidth={1.4} />
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-[11px] font-semibold mb-3 block">
              Stay Connected
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-darpanNavy mb-4 leading-tight font-semibold">
              Quiet insights, in your inbox.
            </h3>
            <p className="text-darpanInk/75 mb-7 leading-relaxed text-[15px]">
              Receive Guruji&rsquo;s reflections, upcoming programs and ashram updates — without the noise.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-white border border-darpanNavy/15 rounded-full px-5 py-3 text-[15px] text-darpanNavy placeholder:text-darpanInk/40 focus:outline-none focus:border-darpanTeal transition-colors"
              />
              <button
                type="submit"
                className="bg-darpanNavy text-ivory rounded-full px-6 py-3 text-[12px] uppercase tracking-wider font-semibold hover:bg-darpanTeal transition-colors shadow-lg shadow-darpanNavy/20"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[11px] text-darpanInk/50 mt-3">
              {/* TODO: connect to Mailchimp / ConvertKit */}
              By subscribing you agree to our terms. Unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
