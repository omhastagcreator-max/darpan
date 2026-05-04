import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* SECTION 1 — CINEMATIC HERO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0 opacity-60">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center animate-[kenBurns_20s_ease-in-out_infinite_alternate]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-charcoal to-transparent z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <FadeIn delay={0.5}>
            <span className="text-saffron font-sanskrit text-lg md:text-xl tracking-widest uppercase mb-4 block">
              Darpan — Mirror
            </span>
          </FadeIn>
          <FadeIn delay={1.1}>
            <h1 className="text-ivory font-display text-5xl md:text-7xl font-medium leading-tight mb-8">
              What if you could finally see yourself — clearly?
            </h1>
          </FadeIn>
          <FadeIn delay={1.8} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/programs" icon>Begin Your Journey</Button>
            <Button href="/guruji" variant="outline" className="border-ivory/30 text-ivory hover:border-ivory">
              Meet Guruji
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 2 — GURUJI PHILOSOPHY HOOK */}
      <section className="bg-charcoal py-32 border-y border-goldLight/20 relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <p className="font-quote italic text-3xl md:text-5xl text-ivory leading-relaxed">
              "When we discover something pure and radiant within ourselves — something that fills us with wonder — only then can we truly see the value in others."
            </p>
            <p className="mt-8 text-goldLight tracking-widest uppercase text-sm font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 text-saffron">
          {/* Lotus SVG Placeholder */}
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8H9L12 2Z" /></svg>
        </div>
      </section>

      {/* SECTION 3 — INTRODUCING GURUJI */}
      <section className="py-32 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="relative aspect-[3/4] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-forest/20 mix-blend-multiply z-10" />
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" alt="Guruji" className="w-full h-full object-cover" />
            </FadeIn>
            
            <div className="max-w-xl">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-display mb-8">A Life Dedicated to Awakening</h2>
                <div className="space-y-6 text-charcoal/80 text-lg">
                  <p>
                    Guruji Shri Nandkishore is a humanitarian leader, poet, writer, visionary and spiritual master. His life's purpose is to cultivate empowered, transformed individuals who carry a deep understanding of the spiritual values that unite humanity.
                  </p>
                  <p>
                    He placed spiritual awakening at the very heart of his mission to uplift the world — and channels this mission through social initiatives led by those who have themselves been transformed.
                  </p>
                  <p>
                    The proximity to a living Guru, Guruji teaches, opens three doors: <strong>Understanding, Experience, and the Attainment of genuine inner peace and happiness.</strong>
                  </p>
                </div>
                <div className="mt-10">
                  <Button href="/guruji" variant="secondary" icon>Read Guruji's Full Story</Button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WELCOME TO DARPAN ASHRAM */}
      <section className="relative py-40">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop" alt="Darpan Ashram" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 container mx-auto px-6 flex justify-center">
          <FadeIn className="glass-card max-w-2xl p-10 md:p-16 rounded-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">Welcome to Darpan Ashram</h2>
            <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
              Ashram life creates a rare opportunity to step beyond your everyday boundaries — to live, even briefly, without the weight of expectations. It is a place built entirely for individual transformation, offering the chance to encounter a living Guru's grace and do the deep inner work of waking up to who you truly are.
            </p>
            <Button href="/darpan-ashram" variant="primary">Visit the Ashram</Button>
          </FadeIn>
        </div>
      </section>

      {/* SECTION 5 — GURUJI'S VISION */}
      <section className="bg-forest text-ivory py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display mb-6">Nourish the Whole Being</h2>
              <p className="text-ivory/80 text-lg">
                Transformed individuals alone become the solution to the challenges our planet faces. Real, lasting change can only grow from an activity-oriented path of spiritual realisation.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌿', title: 'Pure Food for the Body', tagline: 'Heal the earth, heal yourself', desc: 'Exploring natural farming practices for a more conscious relationship with the earth.' },
              { icon: '🧠', title: 'Pure Food for the Mind', tagline: 'Thoughts become your world', desc: 'Programs designed to help individuals achieve mental clarity and spiritual well-being.' },
              { icon: '🪞', title: 'Pure Food for the Self', tagline: 'Right choices, transformation', desc: 'Empowering individuals to recognise and exercise correct choices.' },
              { icon: '✨', title: 'Pure Food for the Soul', tagline: 'Awaken what was never lost', desc: 'Sahaj Smriti Yog — a pathway for exploring uncharted dimensions.' }
            ].map((pillar, i) => (
              <FadeIn key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group">
                <div className="text-4xl mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-display font-medium mb-2">{pillar.title}</h3>
                <p className="text-saffron text-sm mb-4 font-medium">{pillar.tagline}</p>
                <p className="text-ivory/70 text-sm leading-relaxed">{pillar.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 & 7 & 8 — Placeholders for the full brief for now */}
      
    </>
  )
}
