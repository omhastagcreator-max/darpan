import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Button from '@/components/Button'
import DonateButton from '@/components/DonateButton'
import { Heart, Sprout, BookOpen, Hammer, Users, Repeat, Building, Milk } from 'lucide-react'

export const metadata = {
  title: 'Donate | Darpan Foundation',
  description: 'Make your contribution. Support Darpan Foundation through cash, kind or skills.',
}

const causes = [
  {
    Icon: Heart,
    name: 'Annadanam',
    desc: 'Annadanam is offered at the ashram to these shramiks, and to the guests and visitors.',
  },
  {
    Icon: Users,
    name: 'Donations for Jeevan Darpan',
    desc: 'To build and create a vibrant place after retirement, Vanaprastha Ashram',
  },
  {
    Icon: Hammer,
    name: 'Donations for Kaushal Darpan',
    desc: 'Help us build a self-reliant, financially secure young adult who contributes actively to family,',
  },
  {
    Icon: Sprout,
    name: 'Donate for Kshetra Darpan',
    desc: 'Support us to build a sustainable and green environment',
  },
  {
    Icon: BookOpen,
    name: 'Donate for Vidya Darpan',
    desc: 'Support us to serve the under-served schools and children',
  },
  {
    Icon: Repeat,
    name: 'Recurring Donations',
    desc: 'Become part of Guruji&rsquo;s vision to build a harmonious society.',
  },
  {
    Icon: Building,
    name: 'Donate for Ashram Development',
    desc: 'Ashram has come into shape with tireless effort of our volunteers',
  },
  {
    Icon: Milk,
    name: 'Goshala',
    desc: 'Contribute to build a goshala for our indigenous cows',
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Make your Contribution"
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <FadeIn>
            <p className="text-charcoal/80 text-lg leading-relaxed">
              If you have a passion towards greater good, you can associate with us. You don&rsquo;t have to make radical changes for your efforts to count, because small changes lead to a big difference. You can make contribution towards this movement through cash, kind or your skills.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CAUSES */}
      <section className="py-20 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl text-charcoal leading-tight">
              Where would you like to contribute?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {causes.map((c, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-ivory rounded-2xl p-6 border border-charcoal/5 h-full flex flex-col">
                  <div className="text-saffron mb-3">
                    <c.Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{c.name}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-5 flex-1" dangerouslySetInnerHTML={{ __html: c.desc }} />
                  <DonateButton label="Donate" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BANK DETAILS */}
      <section className="bg-charcoal text-ivory py-24 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl mb-3 leading-tight">
              Bank Account Details
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 space-y-5">
              <Row label="Bank Name" value="HDFC Bank, Vijaya Bank Layout Branch, Bilekhalli, Bengaluru" />
              <Row label="Account Number" value="50200064260970 (Current Account)" />
              <Row label="Account Name" value="Universal Forum for Human Dignity" />
              <Row label="IFSC Code" value="HDFC0002841" />
            </div>
          </FadeIn>
          <FadeIn className="text-center mt-12">
            <Button href="/contact" variant="outline" className="border-ivory/30 text-ivory hover:border-ivory" icon>
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 border-b border-white/10 last:border-0 pb-5 last:pb-0">
      <span className="text-goldLight uppercase tracking-widest text-xs font-medium min-w-[180px]">{label}</span>
      <span className="text-ivory text-lg">{value}</span>
    </div>
  )
}
