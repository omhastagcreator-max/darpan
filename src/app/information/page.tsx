import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Link from 'next/link'
import { ArrowRight, FileText, Calendar, Phone, MapPin, BookOpen, Heart } from 'lucide-react'

export const metadata = {
  title: 'Information | Darpan Foundation',
  description:
    'Quick links to the most-asked-about pages — programs, ashram details, donation info, and more.',
}

const sections = [
  {
    Icon: BookOpen,
    title: 'Programs',
    desc: '10 programs, from meditation to dialogue to skill-building.',
    href: '/programs',
  },
  {
    Icon: Heart,
    title: 'Initiatives',
    desc: '6 initiatives spanning environment, education and care.',
    href: '/initiatives',
  },
  {
    Icon: MapPin,
    title: 'Visit the Ashram',
    desc: 'Daily schedule, facilities, location, and rules of the ashram.',
    href: '/darpan-ashram',
  },
  {
    Icon: Calendar,
    title: 'Register Your Visit',
    desc: 'Plan your stay and book your dates.',
    href: '/register-your-visit',
  },
  {
    Icon: Phone,
    title: 'Contact Us',
    desc: 'Bangalore office, ashram contact, and general enquiries.',
    href: '/contact',
  },
  {
    Icon: FileText,
    title: 'Donate',
    desc: 'Tier-based giving with 80G eligibility.',
    href: '/donate',
  },
]

export default function InformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Information"
        title="Everything in one place."
        subtitle="The pages people ask about most often."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((s, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <Link href={s.href} className="group block bg-creamCard rounded-2xl p-7 border border-charcoal/5 h-full hover:border-saffron/40 transition-colors">
                  <div className="text-saffron mb-4">
                    <s.Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-2 group-hover:text-saffron transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-saffron text-xs uppercase tracking-widest font-medium inline-flex items-center gap-1">
                    Open <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
