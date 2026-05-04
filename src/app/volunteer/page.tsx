import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import Prose from '@/components/Prose'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Volunteer | Darpan Foundation',
  description:
    'Give your skills to the work. Eleven concrete ways to volunteer with Darpan Foundation.',
}

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Give your skills to the work."
        subtitle="Seva is a living expression of love. Whatever you bring — design, video, teaching, fundraising, farming — there is space for it here."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn>
            <Prose size="lg">
              <p>
                Volunteering with Darpan Foundation looks different for everyone — and that&apos;s the point. The work spans social media, design, video, teaching, transcription, event coordination, fundraising, and the everyday rhythms of ashram life: farming, cooking, cleaning, maintenance.
              </p>
              <p>
                You don&apos;t need to make sweeping changes. Small, sustained contributions add up to significant impact. If you carry a passion for something greater than yourself, this is your place.
              </p>
            </Prose>

            <div className="mt-10">
              <Link href="/seva" className="inline-flex items-center gap-2 text-saffron uppercase tracking-widest text-sm font-medium hover:gap-3 transition-all">
                See the eleven specific Seva roles <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-creamCard py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Volunteer application.
            </h2>
            <p className="text-charcoal/70 text-lg">
              Tell us a little about yourself, what you can offer, and how much time you have.
            </p>
          </FadeIn>
          <FadeIn>
            <EnquiryForm
              buttonLabel="Submit Application"
              showCityField
              showSkillsField
              showProgramField
              programName="Volunteering"
            />
          </FadeIn>
        </div>
      </section>
    </>
  )
}
