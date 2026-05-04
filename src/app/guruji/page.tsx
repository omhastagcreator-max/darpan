import FadeIn from '@/components/FadeIn'
import Button from '@/components/Button'
import LotusDivider from '@/components/LotusDivider'
import Prose from '@/components/Prose'
import CTASection from '@/components/CTASection'
import { Award } from 'lucide-react'

export const metadata = {
  title: 'Guruji Shri Nandkishore | Darpan Foundation',
  description: 'Guruji Nandkishore is a humanitarian leader, poet, writer, visionary and a spiritual master.',
}

export default function GurujiPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1620149455617-cd44d51e6d3a?q=80&w=2070&auto=format&fit=crop"
            alt="Guruji Shri Nandkishore"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <FadeIn>
            <h1 className="text-5xl md:text-7xl font-display text-ivory mb-6 leading-[1.05]">
              Guruji Shri Nandkishore
            </h1>
            <p className="text-xl text-goldLight tracking-wide font-light max-w-3xl">
              Guruji Nandkishore is a humanitarian leader, poet, writer, visionary and a spiritual master.
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="mt-12 flex flex-wrap gap-3">
            <a href="#early-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Early Life ❯
            </a>
            <a href="#spiritual-life" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Spiritual Life ❯
            </a>
            <a href="#social-forums" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full border border-white/20 text-sm transition-all">
              Social Forums ❯
            </a>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Guruji Nandkishore is a humanitarian leader, poet, writer, visionary and a spiritual master.
              </p>
              <p>
                Guruji&rsquo;s vision is to foster empowered and transformed individuals with deeper understanding of spiritual values which unite people. He made spiritual awakening as core value in his mission to transform humanity and has taken up social initiatives through transformed volunteers.
              </p>
              <p>
                Proximity to a living Guru enables your journey to uncover your full potential starting from
              </p>
            </Prose>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {['Understanding', 'Experience', 'Attainment of inner peace and happiness.'].map((step, i) => (
                <div key={i} className="bg-creamCard rounded-2xl p-7 border border-charcoal/5">
                  <div className="text-saffron font-display text-3xl mb-2">{`0${i + 1}`}</div>
                  <h3 className="font-display text-xl text-charcoal">{step}</h3>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EARLY LIFE */}
      <section id="early-life" className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Early Life
            </h2>
            <Prose>
              <p>
                Guruji was born to Shrimati Kamala and Shri Brajlal Tiwari at Durkhuru village in Jhansi District of Uttar Pradesh. He had his first spiritual experience at about two and half years of age.
              </p>
              <p>
                As a bright student, he showed a natural aptitude towards learning. His spiritual quest and interest in gaining real knowledge grew and, with that began his phase of wandering and learning &amp; unlearning. As search for Reality kept becoming intense, he secretly and spontaneously found himself practicing all kinds of austerities during his adolescence and running to Himalayas in his youth. He completed his school and university education during his stay at Jhansi, Allahabad, Hyderabad and Delhi.
              </p>
              <p>
                He chose journalism as a profession and worked in various responsible editorial positions ranging from Resident Editor to Founder Editor, to Editor-in-Chief, in English and Hindi magazines and leading national newspapers. During his journalistic career he interviewed leading personalities spread across various fields, wrote many lead stories and hundreds of articles. The book &lsquo;Pahle 52 Saptaah&rsquo; which is collection of editorials written by him in 2014-2015 was released in the year 2015.
              </p>
            </Prose>
          </FadeIn>
        </div>
      </section>

      {/* SPIRITUAL LIFE */}
      <section id="spiritual-life" className="py-24 md:py-32 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Spiritual Life
            </h2>
            <Prose>
              <p>
                Spiritual experiences kept returning to Guruji&rsquo;s life during his busy career days and throughout his involvement in the activities of the NGO founded by him. He stressed the need for a transformation in the psyche of every human being and emphasised that such a transformation cannot be brought about by any external entity, be it religious, political, or social.
              </p>
              <p>
                Spirituality opened itself up as the solution to Guruji&rsquo;s existential enquiry. When Guruji met his Guru at that very moment, completeness happened. Pure, timeless, eternal and spontaneous memory became completely clear to him. He made spiritual awakening as core value in his mission to transform humanity and has taken up social initiatives through transformed volunteers.
              </p>
              <p>
                In 2018 Guruji established Darpan Foundation and Darpan Ashram in the foothills of Noorundumalai, Krishnagiri, Tamilnadu. Darpan Ashram is a small hamlet nestled in the lap of the picturesque forest valley overlooking Noorundumalai hills, a place styled to make amenable and replicable &lsquo;system of spiritual living&rsquo; to all willing human beings residing on earth. This is catalysed through Sahaj Smriti Yog System of self realisation along with the practice of Pindodak Kriya also known as Sahaj Smriti Kriya, devised by him. Householders from all across professions and nations find Sahaj Smriti Yog system of spiritual realisation most suitable to follow.
              </p>
              <p>
                In 2018 Guruji was honoured with Acharya Chanakya Award for his Spiritual Contribution to the mankind.
              </p>
            </Prose>

            <div className="mt-12 inline-flex items-center gap-4 bg-creamCard border border-saffron/20 rounded-2xl p-5">
              <div className="w-12 h-12 rounded-full bg-saffron/10 flex items-center justify-center text-saffron">
                <Award size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-saffron font-medium">2018</p>
                <p className="font-display text-lg text-charcoal">Acharya Chanakya Award</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SIGNATURE QUOTE */}
      <section className="bg-charcoal py-28 md:py-32 text-center border-y border-goldLight/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <div className="text-goldLight mb-10">
              <LotusDivider />
            </div>
            <p className="font-quote italic text-2xl md:text-4xl text-ivory leading-snug">
              &ldquo;In real spirit we can value others only when, we have discovered something pure and pious inside ourselves, that dazzles us and fills us with wonder and astonishment.&rdquo;
            </p>
            <p className="mt-10 text-goldLight tracking-[0.25em] uppercase text-xs font-medium">
              — Guruji Shri Nandkishore
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SOCIAL FORUMS */}
      <section id="social-forums" className="py-24 md:py-32 bg-creamCard">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display text-charcoal mb-10 leading-tight">
              Social Forums
            </h2>
            <Prose>
              <p>
                Apart from initiating and guiding individual seekers in Sahaj Smriti Yog system of spiritual realisation, Guruji has taken one more initiative to reach out to seekers through conducting interactive dialogues with them at institutions, work places and residential complexes or any other random venue where willing hearts calls for him.
              </p>
              <p>
                Under Guruji&rsquo;s guidance, Darpan Foundation works in the areas of sustainable living, education, conservation of nature, health, sanitation and enabling senior citizens to meaningfully contribute to society and touch lives of many people.
              </p>
            </Prose>

            <ul className="mt-10 space-y-4">
              {[
                'Guruji writes spiritual columns in many leading newspapers, magazines and weekly publications',
                'Guruji was appointed as Philosopher Member of Ethics Committee, NIMHANS (2018-2021)',
                'Guruji has spoken as chief guest in numerous fora in the presence of august audience and dignitaries across professions.',
                'He conducts group meditation and satsang every Sunday in Bengaluru.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-charcoal/80 text-lg leading-relaxed">
                  <span className="text-saffron font-display text-xl shrink-0 leading-none mt-1">{`0${i + 1}`}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Sign Up for Self Transformation"
        primaryHref="/contact"
        primaryLabel="Enquire Now"
      />
    </>
  )
}
