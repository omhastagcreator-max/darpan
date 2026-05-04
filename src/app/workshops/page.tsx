import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Workshops | Darpan Foundation',
  description:
    'Art and craft as meditation. Workshops at Darpan that open a doorway to inner stillness — including natural soap making.',
}

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops"
        title="Art as meditation."
        subtitle="Art and craft at Darpan is not a hobby. It is a form of meditation — a means of self-expression that opens a channel to the spiritual self."
        bgImage="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                The workshops at Darpan are designed to provide a calm, nurturing environment where creativity flows freely and like-minded individuals find one another.
              </p>
              <p>
                All workshops are led by experienced instructors who bring not just technical craft knowledge, but a genuine understanding of the spiritual dimension of creative work. <strong>All materials are provided.</strong> All you need is an open mind and the willingness to meet yourself in the act of creating.
              </p>
              <p>
                A unique approach: the workshops explore various art and craft skills while actively promoting the use of natural, earth-friendly materials.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED WORKSHOP */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Featured Workshop
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Natural soap making.
            </h2>
            <div className="text-saffron mt-8">
              <LotusDivider />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=1740&auto=format&fit=crop"
                  alt="Natural soap making workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn>
              <Prose>
                <p>
                  This workshop teaches the complete process of making natural, chemical-free soap — while introducing the healing properties of essential oils and other natural ingredients.
                </p>
                <p>
                  The slow, deliberate process of soap-making becomes a release of stress and a quiet immersion in creation.
                </p>
                <p>
                  Using natural materials, Guruji teaches, is not only better for the environment — it also nourishes our spiritual relationship with the earth.
                </p>
              </Prose>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Register to attend.
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Workshops" showProgramField />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
