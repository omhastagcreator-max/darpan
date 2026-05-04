import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { YoutubeIcon, InstagramIcon, FacebookIcon, TwitterIcon } from './SocialIcons'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Logo variant="light" />
            </Link>
            <p className="text-base mb-6 text-darpanCyan italic">
              A mirror for every seeker of truth.
            </p>
            <div className="space-y-3 text-sm text-ivory/60">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-saffron shrink-0" />
                <div>
                  <p>F2, Phase II, Meenakshi Residency,</p>
                  <p>Arekere, Bannerghatta Road,</p>
                  <p>Bangalore – 560076</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-saffron shrink-0" />
                <a href="tel:+918971859875" className="hover:text-white transition-colors">+91 89718 59875</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-saffron shrink-0" />
                <a href="mailto:info@darpanfoundation.com" className="hover:text-white transition-colors break-all">info@darpanfoundation.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/ignite-self" className="hover:text-saffron transition-colors">Ignite Self</Link></li>
              <li><Link href="/sahaj-smriti-kriya" className="hover:text-saffron transition-colors">Sahaj Smriti Kriya</Link></li>
              <li><Link href="/sahaj-smriti-yog" className="hover:text-saffron transition-colors">Sahaj Smriti Yog</Link></li>
              <li><Link href="/swadhyay" className="hover:text-saffron transition-colors">Swadhyay</Link></li>
              <li><Link href="/satsang" className="hover:text-saffron transition-colors">Satsang</Link></li>
              <li><Link href="/seva" className="hover:text-saffron transition-colors">Seva</Link></li>
              <li><Link href="/upanishad" className="hover:text-saffron transition-colors">Upanishad</Link></li>
              <li><Link href="/nakshatra-darpan" className="hover:text-saffron transition-colors">Nakshatra Darpan</Link></li>
              <li><Link href="/children-and-teens" className="hover:text-saffron transition-colors">Children &amp; Teens</Link></li>
              <li><Link href="/workshops" className="hover:text-saffron transition-colors">Workshops</Link></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Initiatives</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/kshetra-darpan" className="hover:text-saffron transition-colors">Kshetra Darpan</Link></li>
              <li><Link href="/mann-darpan" className="hover:text-saffron transition-colors">Mann Darpan</Link></li>
              <li><Link href="/vidya-darpan" className="hover:text-saffron transition-colors">Vidya Darpan</Link></li>
              <li><Link href="/kaushal-darpan" className="hover:text-saffron transition-colors">Kaushal Darpan</Link></li>
              <li><Link href="/jeevan-darpan" className="hover:text-saffron transition-colors">Jeevan Darpan</Link></li>
              <li><Link href="/atma-darpan" className="hover:text-saffron transition-colors">Atma Darpan</Link></li>
            </ul>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mt-10 mb-4">Visit</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/darpan-ashram" className="hover:text-saffron transition-colors">Darpan Ashram</Link></li>
              <li><Link href="/register-your-visit" className="hover:text-saffron transition-colors">Register Your Visit</Link></li>
              <li><Link href="/host-your-event" className="hover:text-saffron transition-colors">Host Your Event</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Foundation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-us" className="hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link href="/guruji" className="hover:text-saffron transition-colors">Guruji Shri Nandkishore</Link></li>
              <li><Link href="/vision" className="hover:text-saffron transition-colors">Vision</Link></li>
              <li><Link href="/blogs" className="hover:text-saffron transition-colors">Blog</Link></li>
              <li><Link href="/information" className="hover:text-saffron transition-colors">Information Hub</Link></li>
              <li><Link href="/donate" className="hover:text-saffron transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="hover:text-saffron transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
            </ul>

            <h4 className="text-white font-medium uppercase tracking-wider text-sm mt-10 mb-4">Ashram</h4>
            <p className="text-xs text-ivory/60 leading-relaxed">
              Urigam Village, Krishnagiri District, Tamil Nadu &ndash; 635102
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/50">
          <p>&copy; {new Date().getFullYear()} Darpan Foundation. All rights reserved.</p>
          <div className="flex space-x-5">
            <a href="#" aria-label="YouTube" className="hover:text-saffron transition-colors"><YoutubeIcon size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-saffron transition-colors"><InstagramIcon size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-saffron transition-colors"><FacebookIcon size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-saffron transition-colors"><TwitterIcon size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
