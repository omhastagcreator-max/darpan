import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white font-display text-2xl mb-6">Darpan Foundation</h3>
            <p className="font-quote italic text-lg mb-6">A mirror for every seeker of truth.</p>
            <div className="space-y-2 text-sm text-ivory/60">
              <p>F2, Phase II, Meenakshi Residency</p>
              <p>Arekere, Bannerghatta Road</p>
              <p>Bangalore – 560076</p>
              <p className="pt-2">+91 8971859875</p>
              <p>info@darpanfoundation.com</p>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Programs</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/programs/ignite-self" className="hover:text-saffron transition-colors">Ignite Self</Link></li>
              <li><Link href="/programs/sahaj-smriti-kriya" className="hover:text-saffron transition-colors">Sahaj Smriti Kriya</Link></li>
              <li><Link href="/programs/sahaj-smriti-yog" className="hover:text-saffron transition-colors">Sahaj Smriti Yog</Link></li>
              <li><Link href="/programs/swadhyay" className="hover:text-saffron transition-colors">Swadhyay</Link></li>
              <li><Link href="/programs/satsang" className="hover:text-saffron transition-colors">Satsang</Link></li>
              <li><Link href="/programs/seva" className="hover:text-saffron transition-colors">Seva</Link></li>
            </ul>
          </div>

          {/* Column 3: Initiatives */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Initiatives</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/initiatives/kshetra-darpan" className="hover:text-saffron transition-colors">Kshetra Darpan</Link></li>
              <li><Link href="/initiatives/mann-darpan" className="hover:text-saffron transition-colors">Mann Darpan</Link></li>
              <li><Link href="/initiatives/vidya-darpan" className="hover:text-saffron transition-colors">Vidya Darpan</Link></li>
              <li><Link href="/initiatives/kaushal-darpan" className="hover:text-saffron transition-colors">Kaushal Darpan</Link></li>
              <li><Link href="/initiatives/jeevan-darpan" className="hover:text-saffron transition-colors">Jeevan Darpan</Link></li>
              <li><Link href="/initiatives/atma-darpan" className="hover:text-saffron transition-colors">Atma Darpan</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about-us" className="hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link href="/guruji" className="hover:text-saffron transition-colors">Guruji Shri Nandkishore</Link></li>
              <li><Link href="/darpan-ashram" className="hover:text-saffron transition-colors">Darpan Ashram</Link></li>
              <li><Link href="/donate" className="hover:text-saffron transition-colors">Donate</Link></li>
              <li><Link href="/volunteer" className="hover:text-saffron transition-colors">Volunteer</Link></li>
              <li><Link href="/contact" className="hover:text-saffron transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Darpan Foundation | All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
