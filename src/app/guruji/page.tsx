import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import { Award, Feather, Newspaper, Heart } from 'lucide-react'

export const metadata = {
  title: 'Guruji Shri Nandkishore | Darpan Foundation',
  description: 'Humanitarian, poet, writer, visionary and spiritual master. The story of Guruji Shri Nandkishore — founder of Darpan Foundation and Darpan Ashram.',
}

export default function GurujiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620149455617-cd44d51e6d3a?q=80&w=2070&auto=format&fit=crop"
            alt="Guruji Shri Nandkishore"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-5 block">
              The Founder
            </span>
            <h1 className="text-5xl md:text-7xl font-display text-ivory mb-5 leading-[1.05]">
              Guruji Shri Nandkishore
            </h1>
            <p className="text-xl text-goldLight tracking-wide font-light">
              Humanitarian &middot; Poet &middot; Writer &middot; Visionary &middot; Spiritual Master
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-12 flex flex-wrap gap-3">
            <a href="#early-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Early Life
            </a>
            <a href="#spiritual-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Spiritual Life
            </a>
            <a href="#social-forums" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Social Forums
            </a>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji Shri Nandkishore is a humanitarian leader, poet, writer, visionary and spiritual master. His life&apos;s purpose is to cultivate empowered, transformed individuals who carry a deep understanding of the spiritual values that quietly hold humanity together.
              </p>
              <p>
                He placed spiritual awakening at the very heart of his mission to uplift the world — and channels that mission through social initiatives led by people who have themselves been transformed.
              </p>
            </Prose>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { title: 'Understanding', desc: 'Of yourself, others, and the nature of life.' },
                { title: 'Experience', desc: 'Of states beyond what you have known.' },
                { title: 'Attainment', desc: 'Of genuine inner peace and happiness.' },
              ].map((step, i) => (
                <div key={i} className="bg-creamCard rounded-2xl p-7 border border-charcoal/5">
                  <div className="text-saffron font-display text-3xl mb-2">{`0${i + 1}`}</div>
                  <h3 className="font-display text-xl mb-2">{step.title}</h3>
                  <p className="text-charcoal/70 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-charcoal/60 text-sm italic">
              The three doors that proximity to a living Guru opens.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 1 — EARLY LIFE */}
      <section id="early-life" className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
              Chapter 01
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Early life and the search for Reality.
            </h2>
            <Prose>
              <p>
                Guruji was born to Shrimati Kamala and Shri Brajlal Tiwari in the village of Durkhuru, Jhansi District, Uttar Pradesh. His first spiritual encounter arrived when he was barely two and a half years old.
              </p>
              <p>
                Throughout school, he stood out as a naturally gifted learner. Even as a student, his hunger for genuine knowledge drove him deep into spiritual questioning. The search for Reality intensified during his adolescent years — he quietly practiced austerities and, in his youth, felt a compulsive pull toward the Himalayas. His formal education took him through Jhansi, Allahabad, Hyderabad and Delhi.
              </p>
              <p>
                He eventually chose journalism as his career and rose through the ranks from Resident Editor to Founder Editor to Editor-in-Chief — contributing to prominent English and Hindi publications across India. He interviewed distinguished figures from every sphere of life, produced hundreds of articles and lead stories, and in 2015 published a collection of his editorials titled <strong>&ldquo;Pahle 52 Saptaah&rdquo;</strong> covering the period 2014–2015.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* SIGNATURE QUOTE */}
      <section className="bg-charcoal py-28 md:py-32 text-center border-y border-goldLight/20 relative">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-goldLight mb-10">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              &ldquo;In real spirit we can value others only when we have discovered something pure and pious inside ourselves — that dazzles us and fills us with wonder and astonishment.&rdquo;
            </p>
            <p className="mt-10 text-goldLight tracking-[0.25em] uppercase text-xs font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 2 — SPIRITUAL LIFE */}
      <section id="spiritual-life" className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
              Chapter 02
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Spiritual life and awakening.
            </h2>
            <Prose>
              <p>
                Throughout the intensity of his journalistic career, spiritual experiences kept visiting Guruji&apos;s life — uninvited, insistent, undeniable. He came to understand that no external institution — religious, political or social — could truly transform a human being&apos;s inner world. Only spirituality held the real answer.
              </p>
              <p>
                The moment Guruji encountered his own Guru, something in him became whole. A state of pure, timeless, spontaneous inner memory became fully clear to him. He made spiritual awakening the foundational value of his mission — channelling it through social initiatives led by people who had already undergone personal transformation.
              </p>
              <p>
                In 2018, he established <strong>Darpan Foundation</strong> and <strong>Darpan Ashram</strong> in the foothills of Noorundumalai, Krishnagiri, Tamil Nadu — a quiet forest hamlet designed to make a replicable &ldquo;system of spiritual living&rdquo; accessible to anyone who wishes to pursue it. The Ashram is the home base for his two core spiritual systems: <strong>Sahaj Smriti Yog</strong> (the path of meditation and self-realisation) and <strong>Sahaj Smriti Kriya</strong> (also called Pindodak Kriya — devised by Guruji to align body and mind for meditation). Householders from diverse professions and countries across the world have found this system the most natural fit for their lives.
              </p>
              <p>
                In 2018, Guruji was awarded the <strong>Acharya Chanakya Award</strong> in recognition of his spiritual contribution to humanity.
              </p>
            </Prose>

            {/* Award badge */}
            <div className="mt-12 inline-flex items-center gap-4 bg-creamCard border border-saffron/20 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-saffron font-medium">2018</p>
                <p className="font-display text-lg text-charcoal">Acharya Chanakya Award</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CHAPTER 3 — SOCIAL FORUMS */}
      <section id="social-forums" className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
              Chapter 03
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Reaching seekers, wherever they are.
            </h2>
            <div className="max-w-3xl">
              <Prose>
                <p>
                  Beyond the ashram, Guruji reaches seekers wherever they are — at institutions, workplaces, residential societies, and wherever willing hearts call for him. He conducts interactive dialogues on spiritual and everyday topics, holding group meditation and Satsang every Sunday in Bengaluru.
                </p>
                <p>
                  Under his guidance, Darpan Foundation operates across several domains: sustainable living, education, nature conservation, health, sanitation, and enabling senior citizens to contribute meaningfully to society.
                </p>
              </Prose>
            </div>

            {/* Roles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
              {[
                { Icon: Newspaper, title: 'Spiritual Columnist', desc: 'For leading newspapers, magazines and weekly publications across India.' },
                { Icon: Heart, title: 'Philosopher Member', desc: 'Ethics Committee at NIMHANS (National Institute of Mental Health and Neurosciences), 2018–2021.' },
                { Icon: Feather, title: 'Author', desc: 'Pahle 52 Saptaah — a collection of editorials covering 2014–2015.' },
              ].map((role, i) => (
                <div key={i} className="bg-ivory rounded-2xl p-6 border border-charcoal/5">
                  <div className="text-saffron mb-3">
                    <role.Icon size={22} />
                  </div>
                  <h3 className="font-display text-lg mb-2">{role.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{role.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Photo Gallery */}
          <FadeIn>
            <h3 className="font-display text-2xl md:text-3xl mt-20 mb-8">From the field.</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { caption: 'Walk-n-Run for rural education', img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1740&auto=format&fit=crop' },
                { caption: 'Upanishad with Dr. CN Manjunath, Jaydeva Hospitals', img: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=1740&auto=format&fit=crop' },
                { caption: 'Dr. S. Prabhakar (IAS) at Darpan Ashram', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1740&auto=format&fit=crop' },
                { caption: 'Biranpalli Primary School, supported by Darpan', img: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1740&auto=format&fit=crop' },
                { caption: 'Dr. Ajai Kumar Singh (Ex-DGP Karnataka)', img: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1740&auto=format&fit=crop' },
                { caption: 'Bhoomi Poojan Event at the ashram', img: 'https://images.unsplash.com/photo-1604608672804-b6acc585d6dc?q=80&w=1740&auto=format&fit=crop' },
              ].map((photo, i) => (
                <div key={i} className="group relative aspect-square rounded-2xl overflow-hidden">
                  <img src={photo.img} alt={photo.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent opacity-90" />
                  <p className="absolute bottom-4 left-4 right-4 text-ivory text-xs leading-snug font-medium">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-charcoal/50 mt-3 italic">{/* TODO: Replace with original Darpan Foundation photography. */}Placeholder photography. Awaiting original images from foundation archive.</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Begin your own journey."
        description="Explore the programs Guruji has created — pathways into clarity, meditation, service and self-discovery."
        primaryHref="/programs"
        primaryLabel="Explore Programs"
        secondaryHref="/satsang"
        secondaryLabel="Be in Satsang"
      />
    </>
  )
}
