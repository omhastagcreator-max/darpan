import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import LotusDivider from '@/components/LotusDivider'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About Us | Darpan Foundation',
  description:
    'Darpan Foundation is built on Guruji\'s vision of holistic development across Body, Mind, Self and Soul — empowering individuals to choose a fuller way of life.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Darpan"
        title="Self-discovery and community growth are inseparable."
        subtitle="Every program is designed to cultivate spiritual awareness, genuine self-confidence, and a healthy sense of identity — so each participant can begin to realise their true potential."
        bgImage="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2070&auto=format&fit=crop"
      />

      {/* INTRO PROSE */}
      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji&apos;s vision — the heart of everything at Darpan Foundation — centres on holistic development across four dimensions: <strong>Body, Mind, Self and Soul.</strong> The aim is to empower individuals to choose a different way of living — one that fosters personal growth and ripples outward into societal change.
              </p>
              <p>
                At Darpan, the core belief is that self-discovery and community growth are inseparable. Through consistent, dedicated effort and purpose-driven initiatives, the foundation works to create positive, lasting change in the communities it touches.
              </p>
              <p>
                Many of these initiatives are undertaken in collaboration with our parent organisation, the <strong>Universal Forum for Human Dignity (UNIFOHD)</strong> — an organisation devoted to bringing dignity, opportunity and care into communities most often overlooked.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* TWO FEATURE CARDS */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-charcoal mb-5 leading-tight">
              Two doorways into our work.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Begin with the philosophy that shapes everything, or with the place where it lives.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                eyebrow: 'The Vision',
                title: 'Guruji&apos;s Vision',
                href: '/vision',
                desc: 'Transformed individuals become living solutions to the problems our planet faces. Genuine, sustainable transformation is only possible through an activity-rooted path of spiritual realisation.',
                cta: 'Explore the Vision',
                img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop',
              },
              {
                eyebrow: 'The Place',
                title: 'Darpan Ashram',
                href: '/darpan-ashram',
                desc: 'A gathering place for truth-seekers. Built for self-realisation, open to all earthlings. A unique environment where the mind mirrors the self, and the self mirrors the soul.',
                cta: 'Visit the Ashram',
                img: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop',
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href={card.href} className="group block bg-ivory rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-3 block">
                      {card.eyebrow}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-charcoal mb-4 group-hover:text-saffron transition-colors leading-tight" dangerouslySetInnerHTML={{ __html: card.title }} />
                    <p className="text-charcoal/70 leading-relaxed mb-6">{card.desc}</p>
                    <span className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-xs font-medium">
                      {card.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Begin"
        title="Sign up for self-transformation."
        description="Reach out to begin a conversation about which Darpan program might be right for you."
        primaryHref="/contact"
        primaryLabel="Enquire Now"
        secondaryHref="/programs"
        secondaryLabel="Browse Programs"
        variant="forest"
      />
    </>
  )
}
