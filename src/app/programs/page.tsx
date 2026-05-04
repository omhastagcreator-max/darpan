import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import LotusDivider from '@/components/LotusDivider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Programs | Darpan Foundation',
  description:
    'Ten programs guiding you on a journey from self to Self — meditation, dialogue, service, study, and more.',
}

const featured = [
  {
    name: 'Ignite Self',
    href: '/ignite-self',
    cta: 'Begin the journey',
    desc:
      'A transformative program designed to guide you on a profound journey of self-inquiry and self-discovery. By kindling your inner fire, you not only uncover your true potential but also discover the power to inspire societal transformation.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1740&auto=format&fit=crop',
    tagline: 'Channel your inner fire',
  },
  {
    name: 'Sahaj Smriti Kriya',
    href: '/sahaj-smriti-kriya',
    cta: 'Explore the Kriya',
    desc:
      'A revealed divine providence devised by Guruji to help initiates transcend. Tuned through yogic technique, it revitalises subtle currents of prana — life energy — in the spine and brain.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1740&auto=format&fit=crop',
    tagline: 'Command your life energy',
  },
  {
    name: 'Sahaj Smriti Yog',
    href: '/sahaj-smriti-yog',
    cta: 'Embrace the philosophy',
    desc:
      'A journey from clear thinking to transcending thinking to experience real peace. Awakening to our real nature does not mean we have to acquire something new, rather we must discover within ourselves that which is timelessly pure.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1788&auto=format&fit=crop',
    tagline: 'The path back to yourself',
  },
]

const community = [
  {
    name: 'Swadhyay',
    href: '/swadhyay',
    desc: 'Self-inquiry. The most intriguing puzzle every individual longs to solve. No one solves it for another — at best, one becomes the mirror.',
    tagline: 'Study yourself',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Satsang',
    href: '/satsang',
    desc: 'In association with Truth. Through interactions with Guruji, seekers of truth from all backgrounds locate themselves spiritually.',
    tagline: 'In the company of Truth',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Seva',
    href: '/seva',
    desc: 'A living form of love. Finding and creating opportunities to serve selflessly expands consciousness in ways no solitary practice can.',
    tagline: 'Love in action',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Upanishad',
    href: '/upanishad',
    desc: 'A spiritual dialogue series. Guruji hosts conversations with scholars, artists, scientists and seekers — a treasure for any seeking mind.',
    tagline: 'Ancient conversations renewed',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1740&auto=format&fit=crop',
  },
]

const experiences = [
  {
    name: 'Nakshatra Darpan',
    href: '/nakshatra-darpan',
    desc: 'An open-air observatory in Urigam village — free from light pollution. Stargazing connecting ancient star-knowledge with modern science.',
    tagline: 'See the infinite in yourself',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Children & Teens',
    href: '/children-and-teens',
    desc: 'Life touching life. Programs that help children and teenagers discover their interdependence with nature, their passions, and their responsibility.',
    tagline: 'Life touching life',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Workshops',
    href: '/workshops',
    desc: 'Art and craft as meditation. Natural soap making, creative workshops — doorways to inner stillness and spiritual self-expression.',
    tagline: 'Art as meditation',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1740&auto=format&fit=crop',
  },
]

export default function ProgramsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Pathways for every stage."
        subtitle="At Darpan, the work begins with the individual. Every program is an invitation inward — a journey of transformation from self to Self."
        breadcrumb={[{ label: 'Programs' }]}
        bgImage="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop"
      />

      {/* INTRO */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <FadeIn>
            <div className="text-darpanTeal mb-6">
              <LotusDivider />
            </div>
            <p className="text-darpanInk/80 text-lg md:text-xl leading-relaxed font-light">
              Ten programs. Three paths in. Choose the one that calls to you, or let us help you decide — every seeker arrives differently.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED — THE THREE FOUNDATIONAL PROGRAMS */}
      <section className="py-14 md:py-20 bg-darpanPale">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              Foundational
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy max-w-3xl leading-tight font-semibold">
              The three programs at the <em className="text-darpanTeal italic font-light">heart of Darpan.</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.08}>
                <Link href={p.href} className="group block bg-white rounded-2xl overflow-hidden border border-darpanNavy/10 hover:shadow-2xl hover:shadow-darpanTeal/20 hover:-translate-y-2 transition-all h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-darpanNavy/60 to-transparent" />
                  </div>
                  <div className="p-7">
                    <p className="text-darpanTeal text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">{p.tagline}</p>
                    <h3 className="font-display text-2xl text-darpanNavy mb-3 group-hover:text-darpanTeal transition-colors leading-tight font-semibold">
                      {p.name}
                    </h3>
                    <p className="text-darpanInk/75 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <span className="text-darpanTeal text-xs uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                      {p.cta} <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY PRACTICES */}
      <section className="py-14 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              Community Practices
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy max-w-3xl leading-tight font-semibold">
              Practices held <em className="text-darpanTeal italic font-light">together.</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {community.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.06}>
                <Link href={p.href} className="group flex bg-darpanPale rounded-2xl overflow-hidden border border-darpanNavy/10 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className="w-48 shrink-0 hidden sm:block overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-darpanTeal text-[10px] uppercase tracking-[0.3em] font-semibold mb-1">{p.tagline}</p>
                    <h3 className="font-display text-xl text-darpanNavy mb-2 group-hover:text-darpanTeal transition-colors font-semibold">{p.name}</h3>
                    <p className="text-darpanInk/75 text-sm leading-relaxed mb-3">{p.desc}</p>
                    <span className="text-darpanTeal text-[11px] uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                      Read more <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="py-14 md:py-20 bg-darpanPale">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="mb-12">
            <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-3 block">
              Special Experiences
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-darpanNavy max-w-3xl leading-tight font-semibold">
              Experiences for <em className="text-darpanTeal italic font-light">every age.</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((p, i) => (
              <FadeIn key={p.href} delay={i * 0.08}>
                <Link href={p.href} className="group block bg-white rounded-2xl overflow-hidden border border-darpanNavy/10 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <p className="text-darpanTeal text-[10px] uppercase tracking-[0.3em] font-semibold mb-2">{p.tagline}</p>
                    <h3 className="font-display text-xl text-darpanNavy mb-3 group-hover:text-darpanTeal transition-colors font-semibold">{p.name}</h3>
                    <p className="text-darpanInk/75 text-sm leading-relaxed mb-4">{p.desc}</p>
                    <span className="text-darpanTeal text-[11px] uppercase tracking-widest font-semibold inline-flex items-center gap-1.5">
                      Explore <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us what brings you here."
        description="Our team will help you find the right program. Every seeker arrives differently — there is no wrong place to begin."
        primaryHref="/contact"
        primaryLabel="Speak with us"
        secondaryHref="/satsang"
        secondaryLabel="Be in Satsang"
      />
    </>
  )
}
