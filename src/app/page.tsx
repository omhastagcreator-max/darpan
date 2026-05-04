import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import YouTubeCard from '@/components/YouTubeCard'
import Testimonials from '@/components/Testimonials'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { ArrowRight, Sprout, Brain, Sparkles, CircleDot, Heart } from 'lucide-react'

const homeStats = [
  { num: '6,500+', label: 'Children educated' },
  { num: '40+', label: 'Schools supported' },
  { num: '2,000+', label: 'Trees planted' },
  { num: '5', label: 'States reached' },
]

const homeTestimonials = [
  {
    quote:
      'Sahaj Smriti Yog gave me a way to come back to myself in the middle of a busy life. I do not have to leave the world to find peace anymore.',
    name: 'Anita R.',
    role: 'Architect, Bengaluru',
  },
  {
    quote:
      'I went to the ashram for three days. I came back changed. The forest, the silence, Guruji\'s presence — they showed me how much noise I was carrying.',
    name: 'Rohit M.',
    role: 'Founder, SaaS company',
  },
  {
    quote:
      'My children attended the Life Touching Life program. They came home talking about soil, water and the responsibility of being human. That is the kind of education I have wanted for them.',
    name: 'Priya & Vinod',
    role: 'Parents, Hyderabad',
  },
]

export default function Home() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden brand-gradient">
        {/* Layered photography */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center animate-[kenBurns_25s_ease-in-out_infinite_alternate]" />
        </div>

        {/* Decorative glows */}
        <div className="absolute top-20 left-10 w-[420px] h-[420px] rounded-full bg-darpanCyan/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-[460px] h-[460px] rounded-full bg-darpanTeal/30 blur-3xl pointer-events-none" />

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-20">
          <FadeIn delay={0.4}>
            <div className="flex justify-center mb-8 opacity-90">
              <Logo variant="light" />
            </div>
          </FadeIn>
          <FadeIn delay={0.7}>
            <span className="text-darpanCyan font-sanskrit text-base md:text-lg tracking-[0.4em] uppercase mb-6 block">
              दर्पण &nbsp;·&nbsp; The Mirror
            </span>
          </FadeIn>
          <FadeIn delay={1}>
            <h1 className="text-ivory font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[1.05] mb-8 max-w-4xl mx-auto">
              What if you could finally see <em className="text-darpanCyan font-medium not-italic">yourself</em> — clearly?
            </h1>
          </FadeIn>
          <FadeIn delay={1.4}>
            <p className="text-ivory/80 text-base md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              A foundation built around individual transformation — through meditation, ashram life, education, sustainable farming and seva. Begin with one quiet question.
            </p>
          </FadeIn>
          <FadeIn delay={1.7} className="flex flex-wrap items-center justify-center gap-3">
            <Button href="/satsang" size="lg">Be in Satsang</Button>
            <Button href="/sahaj-smriti-yog" variant="outline" size="lg" className="border-ivory/40 text-ivory hover:border-ivory hover:text-darpanCyan">
              Meditate
            </Button>
            <Button href="/programs" variant="ghost" size="lg" className="text-ivory hover:bg-white/10">
              Explore Programs
            </Button>
          </FadeIn>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-ivory/50 text-[11px] tracking-[0.4em] uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* SECTION 2 — STILLNESS / FIRST WORDS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <div className="text-darpanTeal mb-8">
              <LotusDivider />
            </div>
            <p className="font-display text-2xl md:text-4xl text-darpanNavy leading-snug font-light">
              &ldquo;In real spirit we can value others only when we have discovered <em className="text-darpanTeal font-normal not-italic">something pure and pious inside ourselves</em> — that dazzles us and fills us with wonder and astonishment.&rdquo;
            </p>
            <p className="mt-10 text-darpanTeal tracking-[0.3em] uppercase text-xs font-semibold">
              Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCING GURUJI */}
      <section className="py-24 md:py-32 bg-darpanPale overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <FadeIn className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-darpanNavy/20">
                <img
                  src="https://images.unsplash.com/photo-1620149455617-cd44d51e6d3a?q=80&w=1740&auto=format&fit=crop"
                  alt="Guruji Shri Nandkishore"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darpanNavy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl px-5 py-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-darpanTeal font-semibold mb-1">Founder</p>
                    <p className="font-display text-darpanNavy text-lg font-semibold leading-tight">
                      Guruji Shri Nandkishore
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full border-2 border-darpanTeal/30 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-darpanTeal/15 -z-10" />
            </FadeIn>

            <div className="lg:col-span-7">
              <FadeIn>
                <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-5 block">
                  Meet the Founder
                </span>
                <h2 className="text-3xl md:text-5xl font-display text-darpanNavy mb-8 leading-tight font-semibold">
                  A humanitarian, poet, writer, visionary — <em className="text-darpanTeal not-italic">and a spiritual master.</em>
                </h2>
                <div className="space-y-5 text-darpanInk/80 text-base md:text-lg leading-relaxed">
                  <p>
                    Guruji&rsquo;s vision is to foster empowered and transformed individuals with deeper understanding of spiritual values which unite people. He made spiritual awakening as core value in his mission to transform humanity, and channels it through social initiatives led by transformed volunteers.
                  </p>
                  <p>
                    Proximity to a living Guru, Guruji teaches, opens three doors: <strong className="text-darpanNavy">Understanding, Experience,</strong> and the <strong className="text-darpanNavy">Attainment</strong> of inner peace and happiness.
                  </p>
                </div>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button href="/guruji" icon>Read Guruji&rsquo;s Story</Button>
                  <Button href="/satsang" variant="outline" icon>Be in Satsang</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WELCOME TO DARPAN ASHRAM */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
            alt="Darpan Ashram in Noorundumalai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-darpanNavy/85 via-darpanNavy/60 to-darpanTeal/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-darpanCyan uppercase tracking-[0.3em] text-xs font-semibold mb-5 block">
                The Place
              </span>
              <h2 className="text-3xl md:text-5xl font-display text-ivory mb-8 leading-tight font-semibold">
                Welcome to <em className="text-darpanCyan font-light italic">Darpan Ashram.</em>
              </h2>
              <div className="space-y-5 text-ivory/85 text-base md:text-lg leading-relaxed">
                <p>
                  Ashram life provides a wonderful opportunity to break your personal limitations &amp; barriers and live without any expectations.
                </p>
                <p>
                  Outwardly, it may look like a peaceful retreat. Beneath the surface lies something rarer: the chance to receive a living Guru&rsquo;s grace, presence and guidance — and do the inner work of awakening to your original nature.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button href="/darpan-ashram" icon>Visit Ashram</Button>
                <Button href="/register-your-visit" variant="outline" className="border-ivory/40 text-ivory hover:border-ivory hover:text-darpanCyan" icon>
                  Plan Your Stay
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VISION (4 PILLARS) */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Guruji&rsquo;s Vision
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy mb-6 leading-tight font-semibold">
              Transform every individual, <em className="text-darpanTeal italic font-light">spiritually.</em>
            </h2>
            <p className="text-darpanInk/75 text-base md:text-lg leading-relaxed">
              Transformed individuals alone become solutions to the problems our planet faces. Real, sustainable change can only grow from an activity-oriented path of spiritual realisation. The vision works on four levels of human existence.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {[
              {
                Icon: Sprout,
                pillar: 'Body',
                title: 'Pure Food for Body',
                desc: 'Explore, educate and inspire humanity to use natural agricultural practices for a conscious and more harmonious future.',
              },
              {
                Icon: Brain,
                pillar: 'Mind',
                title: 'Pure Food for Mind',
                desc: 'Programs to attain mental and spiritual well-being — deepening your experience of life from the inside out.',
              },
              {
                Icon: CircleDot,
                pillar: 'Self',
                title: 'Pure Food for Self',
                desc: 'Empower individuals to exercise correct choices and refine their taste — transformation from self to Self.',
              },
              {
                Icon: Sparkles,
                pillar: 'Soul',
                title: 'Pure Food for Soul',
                desc: 'Sahaj Smriti Yog meditation — a means to explore unexplored dimensions of one&rsquo;s existence.',
              },
            ].map((p, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group h-full bg-white rounded-2xl p-7 border border-darpanNavy/8 hover:border-darpanTeal/40 hover:shadow-xl hover:shadow-darpanTeal/10 transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-2xl brand-gradient flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <p.Icon size={26} strokeWidth={1.6} />
                  </div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-darpanTeal font-semibold mb-1">{p.pillar}</p>
                  <h3 className="text-xl font-display text-darpanNavy font-semibold mb-3 leading-tight">{p.title}</h3>
                  <p className="text-darpanInk/70 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.desc }} />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Button href="/vision" variant="outline" icon>Read the full vision</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 6 — PROGRAMS SHOWCASE */}
      <section className="py-24 md:py-32 bg-darpanPale overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-7xl mx-auto">
            <FadeIn>
              <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                Programs
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-darpanNavy max-w-2xl leading-tight font-semibold">
                Pathways for every <em className="text-darpanTeal italic font-light">stage of your journey.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/programs" className="hidden md:inline-flex items-center gap-2 text-darpanTeal hover:gap-3 transition-all uppercase tracking-widest text-xs font-semibold">
                View all programs <ArrowRight size={14} />
              </Link>
            </FadeIn>
          </div>
        </div>

        <div className="overflow-x-auto pb-6 scrollbar-none">
          <div className="container mx-auto px-6 lg:px-12 flex gap-5 w-max">
            {[
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
            ].map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.04} className="w-[300px] md:w-[340px] shrink-0">
                <Link href={p.href} className="group block bg-white rounded-2xl overflow-hidden border border-darpanNavy/8 hover:shadow-xl hover:shadow-darpanTeal/15 transition-all hover:-translate-y-2">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-darpanNavy/40 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl text-darpanNavy mb-1 group-hover:text-darpanTeal transition-colors leading-tight font-semibold">
                      {p.name}
                    </h3>
                    <p className="text-darpanTeal text-[11px] uppercase tracking-[0.25em] font-semibold mb-5">
                      {p.tagline}
                    </p>
                    <span className="text-darpanNavy text-xs font-semibold flex items-center gap-1.5 group-hover:text-darpanTeal transition-colors">
                      Read more <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 mt-10 text-center md:hidden">
          <Button href="/programs" variant="primary" icon>View all programs</Button>
        </div>
      </section>

      {/* SECTION 7 — INITIATIVES + IMPACT */}
      <section className="bg-darpanNavy text-ivory py-24 md:py-32 mandala-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="text-darpanCyan uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                Our Social Outreach
              </span>
              <h2 className="font-display text-3xl md:text-5xl mb-6 leading-tight font-semibold">
                Rooted in compassion. <em className="text-darpanCyan italic font-light">Expanding through action.</em>
              </h2>
              <p className="text-ivory/75 text-base md:text-lg leading-relaxed">
                Beyond personal transformation, Darpan Foundation carries its mission into communities — across environment, education, mental wellness, skill development, senior care and spiritual outreach.
              </p>
            </FadeIn>
          </div>

          {/* Impact stats */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
              {homeStats.map((s, i) => (
                <div key={i} className="text-center bg-white/5 border border-white/10 rounded-2xl py-8 px-4">
                  <div className="font-display text-3xl md:text-5xl text-darpanCyan mb-2 font-semibold">{s.num}</div>
                  <div className="text-ivory/60 text-[10px] md:text-xs uppercase tracking-[0.25em]">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {[
              { name: 'Kshetra Darpan', tag: 'Pure Food for Body', href: '/kshetra-darpan', desc: 'A journey to bring together like-minded people towards conserving the environment by growing food using natural farming practices.' },
              { name: 'Mann Darpan', tag: 'Pure Food for Mind', href: '/mann-darpan', desc: 'Sustainable learning modules and workshops for all age groups — from children, teenagers to adults.' },
              { name: 'Vidya Darpan', tag: 'Pure Food for Self', href: '/vidya-darpan', desc: 'Build systems and institutions that foster the complete growth of every child and nurture their potential.' },
              { name: 'Kaushal Darpan', tag: 'Pure Food for Self', href: '/kaushal-darpan', desc: 'Create opportunities, encourage indigenous craftsmanship and empower local youth — financial self-sufficiency.' },
              { name: 'Jeevan Darpan', tag: 'Pure Food for Self', href: '/jeevan-darpan', desc: 'Nurture growth at the stage of life beyond retirement when the quest for realisation deepens.' },
              { name: 'Atma Darpan', tag: 'Pure Food for Soul', href: '/atma-darpan', desc: 'Awaken the innate Divinity that is present within each one of us through Sahaj Smriti Yog.' },
            ].map((init, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Link href={init.href} className="block bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-darpanCyan/40 transition-all group h-full">
                  <p className="text-darpanCyan text-[10px] uppercase tracking-[0.3em] font-semibold mb-3">{init.tag}</p>
                  <h3 className="font-display text-2xl mb-3 group-hover:text-darpanCyan transition-colors font-semibold">{init.name}</h3>
                  <p className="text-ivory/70 text-sm leading-relaxed mb-5">{init.desc}</p>
                  <span className="text-darpanCyan text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                    Read more <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Button href="/initiatives" variant="primary" icon>Explore all initiatives</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — TESTIMONIALS */}
      <Testimonials items={homeTestimonials} eyebrow="Voices from the path" title="Seekers, in their own words." variant="cream" />

      {/* SECTION 9 — UPANISHAD VIDEOS */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Upanishad
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy mb-5 leading-tight font-semibold">
              Conversations that <em className="text-darpanTeal italic font-light">awaken.</em>
            </h2>
            <p className="text-darpanInk/70 text-base md:text-lg">
              Scholars, authors, scientists and seekers — in dialogue with Guruji.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-12">
            {[
              { videoId: 'M7lc1UVf-VE', title: 'Darpan Ashram: A Place to Reflect, Renew, and Reconnect with Your Real Self' },
              { videoId: 'M7lc1UVf-VE', title: 'Out of Body Experience & Past Life Secrets — Divine Energy & Spiritual Sadhana' },
              { videoId: 'M7lc1UVf-VE', title: 'Dr Makarand Paranjape in Upanishad with Guruji | International Yoga Day 2025' },
            ].map((v, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <YouTubeCard videoId={v.videoId} title={v.title} />
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
        <div className="brand-gradient text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-darpanCyan/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
          <FadeIn className="relative z-10 max-w-md">
            <Heart className="text-darpanCyan mb-5" size={32} strokeWidth={1.4} />
            <span className="text-darpanCyan uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Generosity
            </span>
            <h3 className="text-3xl md:text-4xl font-display mb-5 leading-tight font-semibold">
              Every gift becomes a ripple.
            </h3>
            <p className="text-white/85 mb-10 leading-relaxed">
              However small, your contribution moves outward — into communities, classrooms, fields, hearts.
            </p>
            <Button href="/donate" variant="outline" className="border-ivory/40 text-white hover:bg-white hover:text-darpanTeal" icon>
              Make a donation
            </Button>
          </FadeIn>
        </div>

        {/* Newsletter */}
        <div className="bg-darpanPale p-12 md:p-20">
          <FadeIn className="max-w-md">
            <Sparkles className="text-darpanTeal mb-5" size={32} strokeWidth={1.4} />
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Stay Connected
            </span>
            <h3 className="text-3xl md:text-4xl font-display text-darpanNavy mb-5 leading-tight font-semibold">
              Quiet insights, in your inbox.
            </h3>
            <p className="text-darpanInk/75 mb-10 leading-relaxed">
              Receive Guruji&rsquo;s reflections, upcoming programs and ashram updates — without the noise.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-white border border-darpanNavy/15 rounded-full px-5 py-3 text-base text-darpanNavy placeholder:text-darpanInk/40 focus:outline-none focus:border-darpanTeal transition-colors"
              />
              <button
                type="submit"
                className="bg-darpanNavy text-ivory rounded-full px-6 py-3 text-sm uppercase tracking-wider font-semibold hover:bg-darpanTeal transition-colors shadow-lg shadow-darpanNavy/20"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-darpanInk/50 mt-4">
              {/* TODO: connect to Mailchimp / ConvertKit */}
              By subscribing you agree to our terms. Unsubscribe anytime.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
