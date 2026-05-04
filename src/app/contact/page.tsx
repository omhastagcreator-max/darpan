import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import EnquiryForm from '@/components/EnquiryForm'
import { MapPin, Phone, Mail } from 'lucide-react'
import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from '@/components/SocialIcons'

export const metadata = {
  title: 'Contact | Darpan Foundation',
  description: 'Reach Darpan Foundation — Bangalore office, Darpan Ashram in Tamil Nadu, or send us a message directly.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach us."
        subtitle="Whether you have a question, want to plan a visit, or are simply looking for guidance — we read every message."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* FORM */}
            <FadeIn className="lg:col-span-2">
              <div className="bg-creamCard rounded-2xl p-8 md:p-12 border border-charcoal/5">
                <h2 className="font-display text-3xl text-charcoal mb-2">Send a message</h2>
                <p className="text-charcoal/60 mb-8">We respond within a few working days.</p>
                <EnquiryForm buttonLabel="Send Message" />
              </div>
            </FadeIn>

            {/* CONTACT BLOCKS */}
            <FadeIn delay={0.1}>
              <div className="space-y-6 sticky top-32">
                {/* Bangalore */}
                <div className="bg-charcoal text-ivory rounded-2xl p-7">
                  <h3 className="font-display text-xl text-goldLight mb-4">Bangalore Office</h3>
                  <div className="space-y-3 text-sm text-ivory/85">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-saffron shrink-0 mt-0.5" />
                      <div>
                        F2, Phase II, Meenakshi Residency,<br />
                        Arekere, Bannerghatta Road,<br />
                        Bangalore &mdash; 560076
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={16} className="text-saffron shrink-0 mt-1" />
                      <a href="tel:+918971859875" className="hover:text-white transition-colors">+91 89718 59875</a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={16} className="text-saffron shrink-0 mt-1" />
                      <a href="mailto:info@darpanfoundation.com" className="hover:text-white transition-colors break-all">info@darpanfoundation.com</a>
                    </div>
                  </div>
                </div>

                {/* Ashram */}
                <div className="bg-creamCard rounded-2xl p-7 border border-charcoal/5">
                  <h3 className="font-display text-xl text-charcoal mb-4">Darpan Ashram</h3>
                  <div className="space-y-3 text-sm text-charcoal/75">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-saffron shrink-0 mt-0.5" />
                      <div>
                        Urigam, Krishnagiri District,<br />
                        Tamil Nadu &mdash; 635102
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="bg-saffron text-white rounded-2xl p-7">
                  <h3 className="font-display text-xl text-white mb-4">Follow Guruji</h3>
                  <div className="flex gap-3">
                    <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"><YoutubeIcon size={18} /></a>
                    <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"><InstagramIcon size={18} /></a>
                    <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"><FacebookIcon size={18} /></a>
                    <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"><TwitterIcon size={18} /></a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-creamCard pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="aspect-[16/7] rounded-2xl overflow-hidden border border-charcoal/5 relative">
              {/* TODO: Replace with Google Maps embed once API key is in place. */}
              <iframe
                title="Darpan Foundation map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.585%2C12.875%2C77.605%2C12.895&layer=mapnik&marker=12.885%2C77.5953"
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="text-xs text-charcoal/50 mt-3 text-center italic">
              Map shows the Bannerghatta Road area in Bengaluru. The ashram is in Urigam village, Krishnagiri District (Tamil Nadu).
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
