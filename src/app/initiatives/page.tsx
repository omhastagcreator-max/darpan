import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Initiatives | Darpan Foundation',
  description:
    'Our initiatives encompass a diverse range of programs and activities designed to foster self-discovery, community development, and spiritual enlightenment.',
}

const initiatives = [
  {
    name: 'Kshetra Darpan',
    href: '/kshetra-darpan',
    desc: 'In his teachings, Guruji describes Kshetra as a concept that transcends definition. Just as the human body serves as the Kshetra, providing a conducive environment for trillions of microbes in our gut, enabling us to exist as our true selves, the Earth serves as the Kshetra for all other life forms and their interconnected ecosystems, supporting the well-being of our physical bodies.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Mann Darpan',
    href: '/mann-darpan',
    desc: 'Embark on a transformative journey with our exclusive programs, where personal development skills have been carefully crafted to provide pure food for your mind. We aim to provide you with holistic mindfulness, where the union of self-development methods and the enlightening practice of Sahaj Smriti Yog (SSY) meditation ignite profound changes within you.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Vidya Darpan',
    href: '/vidya-darpan',
    desc: 'The program highlights the significance of physical fitness and sports for overall child development. Vidya Darpan is dedicated to providing education for underprivileged children and ensuring they have access to quality education, opening doors to a brighter future.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Kaushal Darpan',
    href: '/kaushal-darpan',
    desc: 'By tackling issues like poverty, unemployment, and environmental degradation in rural communities, Darpan Ashram&rsquo;s impact goes beyond the participants. Graduates of these vocational training programmes share their knowledge, creating a ripple effect of positive change throughout their communities.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Jeevan Darpan',
    href: '/jeevan-darpan',
    desc: 'All of us strive to fulfill our needs and create a balance between work and family, however, everyone is not able to sustain it all through their lives. As one approaches retirement age, life&rsquo;s contradictions become more apparent and the quest for deeper meaning intensifies. But, the capacity to take initiatives, mobilise people and keep oneself involved in Parmaarthik&rsquo;s pursuit weakens.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1740&auto=format&fit=crop',
  },
  {
    name: 'Atma Darpan',
    href: '/atma-darpan',
    desc: 'Meditation facilitates the profound union between the human and the divine, harmonising the individual soul&rsquo;s consciousness with the universal&rsquo;s consciousness. Within individual consciousness, there exist three levels – Mind, Self and Soul. These corresponding levels also exist within universal consciousness, which can also be referred to as Mind, Self and Soul.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop',
  },
]

export default function InitiativesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Initiatives"
        title="Initiatives"
        bgImage="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-14 md:py-20 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <FadeIn>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
              Our vision, formulated by Guruji, revolves around the holistic development of Body, Mind, Self, and Soul. We are committed to amplifying the power of individuals to choose an alternate way of life that promotes personal growth and societal transformation.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed mb-6">
              Our initiatives encompass a diverse range of programs and activities designed to foster self-discovery, community development, and spiritual enlightenment. Through our dedicated efforts, we strive to create a positive and lasting impact on the community.
            </p>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              Explore our initiatives and witness the transformative power of our work. Join us in our mission to inspire change and uplift lives.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((init, i) => (
              <FadeIn key={init.href} delay={i * 0.06}>
                <Link
                  href={init.href}
                  className="group block bg-ivory rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                    <div className="aspect-square sm:aspect-auto overflow-hidden">
                      <img src={init.image} alt={init.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-7 flex flex-col justify-center">
                      <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-saffron transition-colors leading-tight">
                        {init.name}
                      </h3>
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-5" dangerouslySetInnerHTML={{ __html: init.desc }} />
                      <span className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-xs font-medium">
                        Explore <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Sign Up to Know More"
        primaryHref="/contact"
        primaryLabel="Enquire Now"
      />
    </>
  )
}
