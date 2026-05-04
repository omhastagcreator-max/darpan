import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Register Your Visit | Darpan Foundation',
  description:
    'Plan your visit to Darpan Ashram in Urigam, Tamil Nadu — or to our Bengaluru contact center.',
}

export default function RegisterVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan Your Stay"
        title="Register your visit."
        subtitle="Send us your dates and what brings you here. We will confirm availability and onboard you for a smooth arrival."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-creamCard rounded-2xl p-8 md:p-12 border border-charcoal/5">
                <h2 className="font-display text-3xl text-charcoal mb-2">Visit Registration</h2>
                <p className="text-charcoal/60 mb-8">All fields marked * are required.</p>
                <EnquiryForm
                  buttonLabel="Register Visit"
                  showCityField
                  showProgramField
                  programName=""
                />
              </div>
            </FadeIn>

            {/* SIDEBAR */}
            <FadeIn delay={0.1}>
              <div className="space-y-6 sticky top-32">
                <div className="bg-charcoal text-ivory rounded-2xl p-7">
                  <h3 className="font-display text-xl text-goldLight mb-4">Darpan Ashram</h3>
                  <div className="space-y-4 text-sm text-ivory/80">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-saffron shrink-0 mt-0.5" />
                      <div>
                        Urigam, Krishnagiri,<br />
                        Tamil Nadu &mdash; 635102
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-saffron shrink-0 mt-0.5" />
                      <a href="tel:+918971859875" className="hover:text-white transition-colors">+91 89718 59875</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-saffron shrink-0 mt-0.5" />
                      <a href="mailto:info@darpanfoundation.com" className="hover:text-white transition-colors break-all">info@darpanfoundation.com</a>
                    </div>
                  </div>
                </div>

                <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5">
                  <h3 className="font-display text-xl text-charcoal mb-3">Bengaluru Contact Center</h3>
                  <p className="text-sm text-charcoal/70 mb-3">Bannerghatta Road, South Bengaluru.</p>
                  <p className="text-sm text-charcoal/70">
                    F2, Phase 2, Meenakshi Residency,<br />
                    Arekere, Bannerghatta Road,<br />
                    Bengaluru, Karnataka &mdash; 560076
                  </p>
                </div>

                <div className="bg-saffron/5 border border-saffron/20 rounded-2xl p-7">
                  <h3 className="font-display text-lg text-charcoal mb-2">How to reach</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Darpan Ashram sits in the foothills of Noorundumalai, on the outskirts of Bengaluru. Well connected by bus from Bengaluru City. Private taxi or personal vehicle works too.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
