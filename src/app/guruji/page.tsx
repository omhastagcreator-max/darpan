import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'

export default function GurujiPage() {
  return (
    <div className="bg-ivory pt-24">
      {/* HERO */}
      <section className="relative h-[80vh] flex flex-col justify-end pb-20">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop" alt="Guruji Shri Nandkishore" className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display text-ivory mb-4">Guruji Shri Nandkishore</h1>
            <p className="text-xl text-goldLight tracking-wide font-medium">
              Humanitarian · Poet · Writer · Visionary · Spiritual Master
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4} className="mt-12 flex flex-wrap gap-4">
            <a href="#early-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">Early Life</a>
            <a href="#spiritual-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">Spiritual Life</a>
            <a href="#social-forums" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">Social Forums</a>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 1 — EARLY LIFE */}
      <section id="early-life" className="py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-widest text-sm font-bold mb-4 block">Chapter 1</span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10">Early Life & Search for Reality</h2>
            <div className="prose prose-lg prose-charcoal max-w-none">
              <p>Guruji was born to Shrimati Kamala and Shri Brajlal Tiwari in the village of Durkhuru, Jhansi District, Uttar Pradesh. His first spiritual encounter arrived when he was barely two and a half years old.</p>
              <p>Throughout school, he stood out as a naturally gifted learner. Even as a student, his hunger for genuine knowledge drove him deep into spiritual questioning. His search for Reality intensified during his adolescent years — he quietly practiced austerities and, in his youth, felt a compulsive pull toward the Himalayas.</p>
              <p>He eventually chose journalism as his career and rose through the ranks from Resident Editor to Founder Editor to Editor-in-Chief. He interviewed distinguished figures from every sphere of life, produced hundreds of articles, and in 2015 published a collection of his editorials titled <strong>"Pahle 52 Saptaah"</strong>.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SIGNATURE QUOTE */}
      <section className="bg-charcoal py-32 text-center border-y border-goldLight/20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <p className="font-quote italic text-3xl md:text-5xl text-goldLight leading-relaxed">
              "In real spirit we can value others only when we have discovered something pure and pious inside ourselves — that dazzles us and fills us with wonder and astonishment."
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 2 — SPIRITUAL LIFE */}
      <section id="spiritual-life" className="py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-widest text-sm font-bold mb-4 block">Chapter 2</span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10">Spiritual Life & Awakening</h2>
            <div className="prose prose-lg prose-charcoal max-w-none">
              <p>Throughout the intensity of his journalistic career, spiritual experiences kept visiting Guruji's life — uninvited, insistent, undeniable. He came to understand that no external institution could truly transform a human being's inner world. Only spirituality held the real answer.</p>
              <p>The moment Guruji encountered his own Guru, something in him became whole. A state of pure, timeless, spontaneous inner memory became fully clear to him.</p>
              <p>In 2018, he established <strong>Darpan Foundation</strong> and <strong>Darpan Ashram</strong> in the foothills of Noorundumalai, Krishnagiri. The Ashram serves as the home base for his two core spiritual systems: <strong>Sahaj Smriti Yog</strong> and <strong>Sahaj Smriti Kriya</strong>.</p>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display mb-8">Begin Your Own Journey</h2>
            <Button href="/programs" variant="primary">Explore Programs</Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
