import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import YouTubeCard from '@/components/YouTubeCard'
import Link from 'next/link'
import { ArrowRight, Sprout, Brain, Sparkles, CircleDot } from 'lucide-react'
import { programs, initiatives, upanishadVideos } from '@/lib/content'

export default function Home() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center animate-[kenBurns_20s_ease-in-out_infinite_alternate]" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        <div className="absolute inset-0 z-10 opacity-[0.06] bg-noise mix-blend-overlay pointer-events-none" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <FadeIn delay={0.5}>
            <span className="text-saffron font-sanskrit text-lg md:text-xl tracking-[0.3em] uppercase mb-5 block">
              Darpan &mdash; Mirror
            </span>
          </FadeIn>
          <FadeIn delay={1.1}>
            <h1 className="text-ivory font-display text-5xl md:text-7xl font-medium leading-[1.05] mb-10">
              What if you could finally see yourself <span className="text-goldLight italic">— clearly?</span>
            </h1>
          </FadeIn>
          <FadeIn delay={1.6}>
            <p className="text-ivory/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              A place built entirely for individual transformation — and a path of meditation, study and service that begins with one quiet question.
            </p>
          </FadeIn>
          <FadeIn delay={1.8} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" icon>Begin Your Journey</Button>
            <Button href="/guruji" variant="outline" className="border-ivory/30 text-ivory hover:border-ivory">
              Meet Guruji
            </Button>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-ivory/60 text-xs tracking-[0.3em] uppercase animate-bounce">
          Scroll
        </div>
      </section>

      {/* SECTION 2 — PHILOSOPHY HOOK */}
      <section className="bg-charcoal py-32 border-y border-goldLight/20 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <div className="text-goldLight mb-10">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-3xl md:text-5xl text-ivory leading-snug">
              &ldquo;When we discover something pure and radiant within ourselves — something that fills us with wonder — only then can we truly see the value in others.&rdquo;
            </p>
            <p className="mt-10 text-goldLight tracking-[0.25em] uppercase text-xs font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCING GURUJI */}
      <section className="py-28 md:py-36 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply z-10" />
              <img
                src="https://images.unsplash.com/photo-1620149455617-cd44d51e6d3a?q=80&w=1740&auto=format&fit=crop"
                alt="Guruji Shri Nandkishore"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-ivory/90 backdrop-blur-md px-4 py-2 rounded-full text-xs uppercase tracking-widest text-charcoal">
                Guruji Shri Nandkishore
              </div>
            </FadeIn>

            <div className="max-w-xl">
              <FadeIn>
                <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-5 block">
                  The Founder
                </span>
                <h2 className="text-4xl md:text-5xl font-display mb-8 leading-tight">
                  A life dedicated to awakening.
                </h2>
                <div className="space-y-5 text-charcoal/80 text-lg leading-relaxed">
                  <p>
                    Guruji Shri Nandkishore is a humanitarian leader, poet, writer, visionary and spiritual master. His life&apos;s purpose is to cultivate empowered, transformed individuals — people who carry a deep understanding of the spiritual values that quietly hold humanity together.
                  </p>
                  <p>
                    He placed spiritual awakening at the very heart of his mission to uplift the world. He channels that mission through social initiatives led by people who have themselves been transformed.
                  </p>
                  <p>
                    Proximity to a living Guru, Guruji teaches, opens three doors:&nbsp;
                    <strong>Understanding, Experience, and the Attainment</strong> of genuine inner peace.
                  </p>
                </div>
                <div className="mt-10">
                  <Button href="/guruji" variant="secondary" icon>
                    Read Guruji&apos;s Full Story
                  </Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WELCOME TO DARPAN ASHRAM */}
      <section className="relative py-40">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
            alt="Darpan Ashram nestled in Noorundumalai"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex justify-center">
          <FadeIn className="glass-card max-w-2xl p-10 md:p-16 rounded-3xl text-center">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-5 block">
              The Ashram
            </span>
            <h2 className="text-3xl md:text-5xl font-display mb-6 leading-tight">
              Welcome to Darpan Ashram.
            </h2>
            <div className="space-y-4 text-charcoal/80 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Ashram life creates a rare opportunity to step beyond your everyday boundaries — to live, even briefly, without the weight of expectation.
              </p>
              <p>
                Outwardly, Darpan looks like a beautiful, peaceful retreat. Beneath the surface lies something far rarer: the chance to encounter a living Guru&apos;s grace and do the deep inner work of waking up to who you truly are.
              </p>
            </div>
            <Button href="/darpan-ashram" variant="primary" icon>Visit the Ashram</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — VISION (4 PILLARS) */}
      <section className="bg-forest text-ivory py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-5 block">
                Guruji&apos;s Vision
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
                Nourish the whole being.
              </h2>
              <p className="text-ivory/80 text-lg leading-relaxed">
                Transformed individuals alone become the solution to the challenges our planet faces. Real, lasting change can only grow from an activity-oriented path of spiritual realisation — one that helps people feel capable of shaping their own destiny through wiser choices.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                Icon: Sprout,
                title: 'Pure Food for the Body',
                tagline: 'Heal the earth, heal yourself',
                desc: 'Exploring, educating and inspiring humanity to adopt natural farming practices — a more conscious, harmonious relationship with the earth.',
              },
              {
                Icon: Brain,
                title: 'Pure Food for the Mind',
                tagline: 'Thoughts become your world',
                desc: 'A wide range of programs designed to help individuals reach mental clarity and spiritual well-being, deepening their experience of life.',
              },
              {
                Icon: CircleDot,
                title: 'Pure Food for the Self',
                tagline: 'Right choices, real transformation',
                desc: 'Empowering individuals to recognise and exercise correct choices — refining their inner compass — for genuine transformation.',
              },
              {
                Icon: Sparkles,
                title: 'Pure Food for the Soul',
                tagline: 'Awaken what was never lost',
                desc: 'Sahaj Smriti Yog — a pathway for exploring the uncharted dimensions of your own existence.',
              },
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.08} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="text-saffron mb-6">
                  <pillar.Icon size={32} strokeWidth={1.4} />
                </div>
                <h3 className="text-xl font-display font-medium mb-2 leading-tight">{pillar.title}</h3>
                <p className="text-goldLight text-xs uppercase tracking-widest mb-4 font-medium">{pillar.tagline}</p>
                <p className="text-ivory/70 text-sm leading-relaxed">{pillar.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROGRAMS SHOWCASE */}
      <section className="py-28 md:py-36 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <FadeIn>
              <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                Programs
              </span>
              <h2 className="text-4xl md:text-5xl font-display max-w-2xl leading-tight">
                Pathways for every stage of your journey.
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/programs" className="hidden md:inline-flex items-center gap-2 text-saffron hover:gap-3 transition-all uppercase tracking-widest text-sm font-medium">
                View all programs <ArrowRight size={16} />
              </Link>
            </FadeIn>
          </div>
        </div>

        <div className="overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="container mx-auto px-6 lg:px-12 flex gap-6 w-max">
            {programs.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.05} className="w-[320px] md:w-[360px] shrink-0">
                <Link href={p.href} className="group block bg-creamCard rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl text-charcoal mb-2 group-hover:text-saffron transition-colors leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-saffron uppercase tracking-widest text-[11px] font-medium mb-4">
                      {p.tagline}
                    </p>
                    <p className="text-charcoal/70 text-sm leading-relaxed line-clamp-3">{p.short}</p>
                    <div className="mt-5 flex items-center gap-2 text-saffron text-sm font-medium uppercase tracking-wider">
                      Read more <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 mt-12 md:hidden">
          <Button href="/programs" variant="secondary" icon>View all programs</Button>
        </div>
      </section>

      {/* SECTION 7 — INITIATIVES */}
      <section className="bg-charcoal text-ivory py-28 md:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                Initiatives
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-6 leading-tight">
                Rooted in compassion. Expanding through action.
              </h2>
              <p className="text-ivory/70 text-lg leading-relaxed">
                Beyond personal transformation, Darpan Foundation carries its mission into communities — through six initiatives spanning environmental stewardship, education, mental wellness, skill development, senior care, and spiritual outreach.
              </p>
            </FadeIn>
          </div>

          {/* Impact stats */}
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-4xl mx-auto">
              {[
                { num: '6,500+', label: 'Children educated' },
                { num: '40+', label: 'Schools supported' },
                { num: '2,000+', label: 'Trees planted' },
                { num: '5', label: 'States reached' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-goldLight mb-2">{s.num}</div>
                  <div className="text-ivory/60 text-xs uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((init, i) => (
              <FadeIn key={init.slug} delay={i * 0.06}>
                <Link
                  href={init.href}
                  className="block bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 hover:border-saffron/40 transition-all group h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-2xl group-hover:text-saffron transition-colors">{init.name}</h3>
                    {init.sanskrit && (
                      <span className="font-sanskrit text-saffron text-xl mt-1">{init.sanskrit}</span>
                    )}
                  </div>
                  <p className="text-goldLight text-xs uppercase tracking-widest mb-3 font-medium">{init.tagline}</p>
                  <p className="text-ivory/70 text-sm leading-relaxed">{init.short}</p>
                  <div className="mt-5 flex items-center gap-2 text-saffron text-xs font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore <ArrowRight size={12} />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-16">
            <Button href="/initiatives" variant="primary" icon>Explore all initiatives</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 8 — UPANISHAD VIDEOS */}
      <section className="bg-creamCard py-28 md:py-36">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <FadeIn>
              <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
                Upanishad
              </span>
              <h2 className="text-4xl md:text-5xl font-display mb-5 leading-tight">
                Conversations that awaken.
              </h2>
              <p className="text-charcoal/70 text-lg">
                Scholars, artists, scientists and seekers — in dialogue with Guruji. A treasure for any seeking mind.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {upanishadVideos.slice(0, 3).map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <YouTubeCard videoId={v.videoId} title={v.title} speaker={v.speaker} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Button
              href="https://www.youtube.com/playlist?list=PLty53myrnL4TMF1g14CftemFFryIyAb_2"
              variant="outline"
              icon
            >
              Watch the full playlist
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 9 — NEWSLETTER + DONATE SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Newsletter */}
        <div className="bg-ivory p-12 md:p-20">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Stay Connected
            </span>
            <h3 className="text-3xl md:text-4xl font-display mb-5 leading-tight">
              Quiet insights, in your inbox.
            </h3>
            <p className="text-charcoal/70 mb-8 leading-relaxed">
              Receive Guruji&apos;s reflections, upcoming programs and ashram updates — without the noise.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 bg-white border border-charcoal/15 rounded-full px-5 py-3 text-base focus:outline-none focus:border-saffron transition-colors"
              />
              <button
                type="submit"
                className="bg-charcoal text-ivory rounded-full px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-saffron transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-charcoal/50 mt-4">{/* TODO: connect to Mailchimp / ConvertKit */}No spam. Unsubscribe anytime.</p>
          </FadeIn>
        </div>

        {/* Donate */}
        <div className="bg-saffron text-white p-12 md:p-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-goldLight/20" />
          <div className="absolute -bottom-20 -left-10 w-60 h-60 rounded-full bg-goldLight/10" />
          <FadeIn className="relative z-10">
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Generosity in Action
            </span>
            <h3 className="text-3xl md:text-4xl font-display mb-5 leading-tight">
              Every gift becomes a ripple.
            </h3>
            <p className="text-white/85 mb-8 leading-relaxed">
              However small, your contribution moves outward — into communities, classrooms, fields, hearts.
            </p>
            <Button
              href="/donate"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-saffron"
              icon
            >
              Make a Donation
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
