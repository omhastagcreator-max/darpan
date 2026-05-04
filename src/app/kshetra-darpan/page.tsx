import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import { Sprout, MapPin, Trees, Utensils, Stethoscope, Heart } from 'lucide-react'

export const metadata = {
  title: 'Kshetra Darpan | Darpan Foundation',
  description:
    'Pure food for the body. Sustainable farming, environmental conservation, and a movement to restore purity to what reaches our plates.',
}

const activities = [
  {
    Icon: Sprout,
    title: 'Each One, Reach One',
    desc: 'A UNIFOHD initiative bridging city families with farmers. Raising urban environmental awareness, empowering farmers with sustainable practice, and reducing migration to cities by making natural farming economically viable.',
  },
  {
    Icon: MapPin,
    title: 'Sponsor a Field',
    desc: 'Choose your vegetables. Take part in the full farming cycle. Provide employment to local farmers. Children learn soil and water conservation. Sponsors receive complimentary natural grains and pulses.',
  },
  {
    Icon: Trees,
    title: 'Trees & rainwater',
    desc: 'A 2.4 million-litre rainwater harvesting pond. Over 2,000 trees on the ashram. Tree-plantation drives extended to village roads, schools and hospitals. School students participate in conservation activity.',
  },
  {
    Icon: Utensils,
    title: 'Annadanam',
    desc: 'Food offering — to volunteers, staff, and visitors engaged in shram-daan. Mark birthdays, anniversaries and meaningful days by sponsoring a meal. In-kind donations of rice, cereals, spices and vegetables welcomed.',
  },
  {
    Icon: Stethoscope,
    title: 'Health camps',
    desc: 'In collaboration with UNIFOHD — health awareness and check-up programs for labourers in unorganised sectors and rural communities with limited access to care.',
  },
  {
    Icon: Heart,
    title: 'Goshala',
    desc: 'Indigenous cows are integral to the ashram and to its natural farming model. Plans are underway to build a dedicated Goshala — a sheltered, nurturing environment. Donations are welcomed.',
  },
]

export default function KshetraPage() {
  return (
    <>
      <PageHero
        eyebrow="Kshetra Darpan क्षेत्र"
        title="Heal the earth, heal yourself."
        subtitle="Pure food for the body. The creation of sustainable environments and spaces on Earth that nurture and sustain life."
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji consistently emphasises the importance of environmental awareness. Connection with nature, he teaches, is fundamental to physical health and personal fulfilment. All living beings need food to survive — and Sahaj Smriti Yog&apos;s understanding of <em>pure food</em> makes this truth relevant at every level.
              </p>
              <p>
                <strong>Kshetra</strong> is a concept that transcends easy definition. Just as the human body serves as a Kshetra — a living field for trillions of microbes in the gut — so the Earth serves as the Kshetra for all other life forms. It sustains the elaborate web of ecosystems that support all physical existence.
              </p>
              <p>
                Kshetra Darpan is the movement born from this understanding: the creation of sustainable environments and spaces on Earth that nurture and sustain life. It explores eco-friendly techniques that respect nature&apos;s intricate relationships — and incorporates the cultural traditions and dietary practices of local communities.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="bg-forest text-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <span className="text-goldLight uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              The Core Challenge
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Contemporary agriculture has become unsustainable.
            </h2>
            <Prose size="md" className="text-ivory/85">
              <p>
                A comprehensive rethink is urgently needed — one that places the health of people, soil and the environment at its centre.
              </p>
              <p>
                Darpan&apos;s model advocates for natural farming: cost-effective, climate-conscious, and capable of delivering multiple benefits at once — better incomes, greater inclusion, and the protection of biodiversity.
              </p>
              <p>
                The natural and sustainable farming movement at Darpan cultivates chemical-free grains, pulses, fruits and vegetables — restoring purity to what reaches our plates.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* SIX ACTIVITIES */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Six Activities
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              How the work happens.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-ivory rounded-2xl p-7 border border-charcoal/5 h-full">
                  <div className="text-saffron mb-4">
                    <a.Icon size={26} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-xl text-charcoal mb-3">{a.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Want to participate?
            </h2>
            <p className="text-charcoal/70 text-lg">Tell us how you&apos;d like to be involved.</p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Kshetra Darpan" showProgramField showCityField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
