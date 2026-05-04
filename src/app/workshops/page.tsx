import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'
import LotusDivider from '@/components/LotusDivider'

export const metadata = {
  title: 'Spiritual Growth Workshop | Darpan Foundation',
  description: 'Art & Craft as a form of meditation and self-expression.',
}

export default function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshop"
        title="Spiritual Growth Workshop"
        subtitle="Art & Craft"
        bgImage="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Art &amp; crafting is not just a hobby, but a form of meditation and self-expression that can help us connect with our spiritual selves.
              </p>
              <p>
                That&rsquo;s why our workshops are designed to provide a nurturing and peaceful environment where you can tap into your creativity and connect with like-minded individuals.
              </p>
              <p>
                Our workshops are led by experienced instructors who not only have a passion for their craft but also a deep understanding of the spiritual benefits of crafting. We provide all the materials you need, so all you need to bring is an open mind and a willingness to connect with your spiritual self.
              </p>
              <p>
                We offer a unique and spiritual approach to exploring, enjoying, and learning various art and craft skills while promoting the use of natural products through our workshops
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED WORKSHOP */}
      <section className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Natural Soap Making
            </h2>
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
                  This workshop not only teaches you how to make your own all-natural soap but also helps you connect with the healing properties of essential oils and other natural ingredients.
                </p>
                <p>
                  Through the process of soap-making, you can let go of stress and instead, focus on creating something beautiful and uplifting for yourself and others.
                </p>
                <p>
                  We believe that using natural products is not only better for the environment but also for our spiritual well-being. By incorporating natural ingredients into our crafting, we can connect with the energy of the earth and create something truly meaningful.
                </p>
                <p className="text-saffron font-medium">
                  Join us for a workshop and discover the power of crafting as a tool for spiritual growth and self-discovery.
                </p>
              </Prose>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Register to attend
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Workshops" showProgramField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
