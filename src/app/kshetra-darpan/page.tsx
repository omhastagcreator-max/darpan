import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import Prose from '@/components/Prose'
import EnquiryForm from '@/components/EnquiryForm'

export const metadata = {
  title: 'Kshetra Darpan | Darpan Foundation',
  description: 'Pure Food for Body. Sustainable farming and environmental conservation.',
}

const activities = [
  {
    name: 'Each One, Reach One',
    cta: 'Join Hands with Us',
    body: [
      'Each One, Reach One is an initiative by our parent organisation, Universal Forum for Human Dignity (UNIFOHD), dedicated to bridging the gap between consumers and the source of their food.',
      'Our goal is to raise basic environmental awareness among urban residents, like making them aware of naturally grown food and empowering farmers to adopt sustainable farming practices. By connecting city-dwelling families with farmers who cultivate natural food by following eco-friendly agriculture techniques, we not only promote healthier choices but also support the financial stability of farming communities. This should encourage more farmers to take up sustainable farming practices thereby reducing their migration to cities.',
      'Additionally, there is also the opportunity to connect with the farmers&rsquo; families of rural India, thus fostering a direct connection with them.',
    ],
  },
  {
    name: 'Sponsor a Field',
    cta: 'Be a Sponsor',
    body: [
      'This is an enriching journey where the aim is to bring together like-minded individuals, especially those who have environmental awareness, to practice conserving and nurturing nature by growing their own food using sustainable farming practices.',
      'Sustainable and natural farming is all about bringing back life to our soil.',
      'Through this initiative, you get to:',
    ],
    bullets: [
      'Grow your choice of vegetables',
      'Be part of the whole farming cycle from sowing to harvesting',
      'Provide employment to local farmers and empower them to shift to natural farming',
      'Enjoy farm visits with family',
    ],
    closing:
      'This will be a wonderful way for your children to learn about soil &amp; water conservation, sustainable agriculture methods which will enrich them in many ways. Sponsors are free to visit the fields and engage in hands-on activities like sowing, weeding and harvesting. As a token of gratitude, complimentary packages of grains and pulses cultivated in these fields will also be provided.',
  },
  {
    name: 'Tree Planting and Rainwater Harvesting',
    cta: 'Get Involved',
    body: [
      'Rainwater harvesting and tree planting are crucial steps to enhance the Earth&rsquo;s green cover, restore soil health and effectively manage natural resources.',
      'At Darpan Ashram, we strive to cultivate environmental awareness in children and nurture the next generation of ecologically conscious citizens. Students from nearby schools regularly visit our ashram, actively engaging in various activities as part of their learning process.',
      'Our ashram features a rainwater harvesting pond with a capacity of 2.4 million liters, designed to conserve precious water resources.',
      'With over 2000 trees encompassing a diverse range of flowers, fruits and other varieties, Darpan Ashram serves as a sanctuary for nature. Additionally, we have undertaken tree plantation initiatives along village roads, schools, hospitals and other areas, ensuring a greener and healthier environment for all.',
    ],
  },
  {
    name: 'Annadanam',
    cta: 'Sponsor a Meal',
    body: [
      'At the ashram, dedicated volunteers, staff and visitors who participate in shram-daan have committed their lives to various spiritual and social initiatives undertaken by Darpan.',
      'As a gesture of gratitude, Annadanam (food offering) is provided to these shramiks, as well as to guests and visitors.',
      'You can make special occasions in your life, like birthdays, anniversaries or any chosen day, an opportunity to offer Annadanam at the ashram.',
      'Another meaningful way to contribute to Annadanam is through in-kind donations. You may choose to donate rice, cereals, spices, fresh vegetables and more.',
    ],
  },
  {
    name: 'Health Camps',
    cta: 'Get Involved',
    body: [
      'Darpan collaborates with our parent organisation UNIFOHD to raise health awareness and promote well-being among laborers in unorganised sectors and individuals in rural India with limited access to healthcare facilities.',
      'We conduct regular check-ups addressing a wide range of health concerns, such as diabetes, blood pressure and general well-being.',
    ],
  },
  {
    name: 'Goshala',
    cta: 'Donate for Goshala',
    body: [
      'Cows are an integral part of Darpan Ashram, contributing immensely to maintaining soil health. We follow cow-based natural farming methods, harnessing their significance in fostering environmental well-being as well as human and soil health.',
      'The indigenous cows at Darpan Ashram are known for their friendliness and affectionate nature. Caring for them brings great fulfillment and joy.',
      'To provide them with a dedicated shelter and offer them a safe and nurturing environment, Darpan Ashram has plans to build a Goshala.',
    ],
  },
]

export default function KshetraPage() {
  return (
    <>
      <PageHero
        eyebrow="Kshetra Darpan"
        title="Pure Food for Body"
        bgImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1740&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji consistently emphasises the importance of having environmental awareness and says that by staying connected with nature, one can maintain good health and achieve fulfillment. It is universally true that all living beings, without exception, require food for survival. This is where Sahaj Smriti Yog&rsquo;s spiritual description of pure food becomes relevant to every living being on our planet.
              </p>
              <p>
                In his teachings, Guruji describes Kshetra as a concept that transcends definition. Just as the human body serves as the Kshetra, providing a conducive environment for trillions of microbes in our gut, enabling us to exist as our true selves, the Earth serves as the Kshetra for all other life forms and their interconnected ecosystems, supporting the well-being of our physical bodies.
              </p>
              <p>
                By Kshetra, we mean the creation of such sustainable environments and spaces on Earth that nurture and sustain life through optimal conditions and surroundings. This vision is the essence of the Kshetra Darpan movement, which seeks to explore sustainable practices and eco-friendly techniques that respect Nature&rsquo;s intricate relationship with flora &amp; fauna, traditional crop patterns, mineral composition of the soil and the diverse tapestry of life. It also incorporates the cultural aspects of communities, their dietary habits and their harmonious coexistence.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      <section className="bg-forest text-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <h2 className="font-display text-3xl md:text-5xl mb-8 leading-tight">
              Empowering Farmers with Sustainable Farming Practices
            </h2>
            <Prose size="md" className="text-ivory/85">
              <p>
                Our current agricultural processes are unsustainable and demand a comprehensive reevaluation to prioritise the well-being of people, soil and the overall environment. We need sustainable agriculture methods that are not only cost-effective but also minimise climate impact while simultaneously yielding multiple benefits. We must adopt practices that raise income, foster inclusivity and safeguard biodiversity.
              </p>
              <p>
                Darpan&rsquo;s natural and sustainable farming practices spearhead an initiative and movement aimed at restoring purity in our food production. By cultivating chemical-free grains, pulses, fruits and vegetables using eco-friendly farming techniques, we strive to bring back the essence of wholesome nutrition.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* SIX ACTIVITIES (verbatim) */}
      <section className="py-16 md:py-24 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Kshetra Darpan Activities
            </span>
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              Six ongoing activities
            </h2>
          </FadeIn>

          <div className="space-y-8">
            {activities.map((a, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="bg-ivory rounded-2xl p-8 md:p-10 border border-charcoal/5">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-5">
                    <div>
                      <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium block mb-2">
                        {`Activity 0${i + 1}`}
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl text-charcoal">{a.name}</h3>
                    </div>
                    <span className="bg-saffron/10 text-saffron px-4 py-2 rounded-full text-xs uppercase tracking-widest font-medium">
                      {a.cta}
                    </span>
                  </div>
                  <div className="space-y-4 text-charcoal/80 leading-relaxed">
                    {a.body.map((p, j) => (
                      <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                    ))}
                    {a.bullets && (
                      <ul className="space-y-2 pl-2">
                        {a.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="text-saffron mt-1.5 shrink-0">●</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {a.closing && <p dangerouslySetInnerHTML={{ __html: a.closing }} />}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-3 leading-tight">
              Want to participate in Kshetra Darpan activities?
            </h2>
          </FadeIn>
          <FadeIn>
            <EnquiryForm programName="Kshetra Darpan" showProgramField showCityField buttonLabel="Enquire Now" />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
