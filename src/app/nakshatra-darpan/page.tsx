import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'
import Button from '@/components/Button'

export const metadata = {
  title: 'Nakshatra Darpan | Darpan Foundation',
  description:
    'Explore the vastness of the sky to see the infinite you!',
}

export default function NakshatraPage() {
  return (
    <>
      <PageHero
        eyebrow="Nakshatra Darpan"
        title="Nakshatra Darpan"
        subtitle="Explore the vastness of the sky to see the infinite you!"
        bgImage="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Darpan Ashram at Urigam village, free from light pollution, is an open air observatory in the midst of nature to view the Illuminated night sky in all its pristine glory.
              </p>
              <p>
                Look up and See the canopy of stars for a journey in time, space and beyond where only you and the stars exist.
              </p>
              <p>
                Stories from the past narrated in a contemporary manner connecting ancient wisdom (science then) and science now.
              </p>
            </Prose>
            <div className="mt-10">
              <Button href="/contact" variant="primary" icon>Register</Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-charcoal py-24 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <div className="text-goldLight mb-8">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              Experience the <em className="text-goldLight">infiniteness</em> of the universe and return a transformed individual!
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <Prose>
              <p>
                Join us for an unforgettable experience under the stars at Darpan Ashram in Urigam village! Our open-air observatory is located away from the hustle and bustle of city life, providing a perfect opportunity to explore the vastness of the sky and connect with your inner self.
              </p>
              <p>
                Experience the pristine beauty of the illuminated night sky, free from the interference of light pollution. Look up and witness the breathtaking canopy of stars, a journey through time, space, and beyond where you and the stars exist in perfect harmony.
              </p>
              <p>
                Our program combines ancient wisdom with contemporary science to provide a unique perspective on the mysteries of the universe. You&rsquo;ll be captivated by our narrated stories from the past, connecting ancient wisdom with science now, and gain insights into the limitless possibilities that exist in the vastness of the cosmos.
              </p>
              <p className="text-saffron font-medium">
                So come, explore the infinite possibilities of the sky, and discover the infinite potential within yourself. Join us at Darpan Ashram and witness the glory of the night sky like never before. We guarantee it will be an experience you&rsquo;ll cherish forever.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Know more about Darpan&rsquo;s Vision
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Nakshatra Darpan" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
