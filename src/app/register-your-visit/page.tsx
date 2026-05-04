import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import { MapPin, Phone, Mail } from 'lucide-react'

export const metadata = {
  title: 'Register Your Visit at Darpan Ashram | Darpan Foundation',
  description: 'Plan a Visit to Ashram or Our Bengaluru Contact Center.',
}

export default function RegisterVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Register Your Visit"
        title="Register Your Visit at Darpan Ashram"
        subtitle="Plan a Visit to Ashram or Our Bengaluru Contact Center"
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* FORM */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-creamCard rounded-2xl p-8 md:p-12 border border-charcoal/5">
                <h2 className="font-display text-3xl text-charcoal mb-2">Register Your Visit</h2>
                <p className="text-charcoal/60 mb-8">All fields marked * are required.</p>
                <EnquiryForm
                  buttonLabel="Submit"
                  showCityField
                  showProgramField
                />
              </div>
            </FadeIn>

            {/* SIDEBAR */}
            <FadeIn delay={0.1}>
              <div className="space-y-6 sticky top-32">
                <div className="bg-charcoal text-ivory rounded-2xl p-7">
                  <h3 className="font-display text-xl text-goldLight mb-4">Darpan Ashram</h3>
                  <div className="space-y-4 text-sm text-ivory/85">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-saffron shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Address</p>
                        Darpan Ashram, Urigam, Krishnagiri,<br />
                        Tamil Nadu, India - 635102
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-saffron shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Phone</p>
                        <a href="tel:+918971859875" className="hover:text-white transition-colors">+91 897-185-9875</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-saffron shrink-0 mt-1" />
                      <div>
                        <p className="text-xs uppercase tracking-widest text-goldLight mb-1">Email</p>
                        <a href="mailto:info@darpanfoundation.com" className="hover:text-white transition-colors break-all">info@darpanfoundation.com</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5">
                  <h3 className="font-display text-xl text-charcoal mb-3">Bengaluru Contact Center</h3>
                  <p className="text-sm text-charcoal/70 mb-3">
                    Our Bengaluru contact center is in Bannerghatta Road, South Bengaluru
                  </p>
                  <p className="text-sm text-charcoal/70">
                    F2, Phase 2, Meenakshi Residency, Arekere, Bannerghatta Road, Bengaluru, Karnataka, India – 560076
                  </p>
                </div>

                <div className="bg-saffron/5 border border-saffron/20 rounded-2xl p-7">
                  <h3 className="font-display text-lg text-charcoal mb-2">How to Reach Ashram</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    Darpan Ashram is situated in the outskirts of Bengaluru in the foothills of Noorundumalai in a scenic village Urigam. Ashram is well connected by bus from Bengaluru City. Private Taxis or vehicles is also an option.
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
