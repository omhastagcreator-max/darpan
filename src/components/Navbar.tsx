'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const programsList = [
  { name: 'Ignite Self', href: '/ignite-self', desc: 'Channel your inner fire' },
  { name: 'Sahaj Smriti Kriya', href: '/sahaj-smriti-kriya', desc: 'Command your life energy' },
  { name: 'Sahaj Smriti Yog', href: '/sahaj-smriti-yog', desc: 'The path back to yourself' },
  { name: 'Swadhyay', href: '/swadhyay', desc: 'Study yourself' },
  { name: 'Satsang', href: '/satsang', desc: 'In the company of Truth' },
  { name: 'Seva', href: '/seva', desc: 'Love in action' },
  { name: 'Upanishad', href: '/upanishad', desc: 'Ancient conversations renewed' },
  { name: 'Nakshatra Darpan', href: '/nakshatra-darpan', desc: 'See the infinite' },
  { name: 'Children & Teens', href: '/children-and-teens', desc: 'Life touching life' },
  { name: 'Workshops', href: '/workshops', desc: 'Art as meditation' },
]

const initiativesList = [
  { name: 'Kshetra Darpan', href: '/kshetra-darpan', desc: 'Sustainable farming' },
  { name: 'Mann Darpan', href: '/mann-darpan', desc: 'Mental wellness' },
  { name: 'Vidya Darpan', href: '/vidya-darpan', desc: 'Education for all' },
  { name: 'Kaushal Darpan', href: '/kaushal-darpan', desc: 'Vocational skill' },
  { name: 'Jeevan Darpan', href: '/jeevan-darpan', desc: 'Purposeful retirement' },
  { name: 'Atma Darpan', href: '/atma-darpan', desc: 'Spiritual awakening' },
]

const visitList = [
  { name: 'Darpan Ashram', href: '/darpan-ashram', desc: 'Location, schedule, facilities' },
  { name: 'Register Your Visit', href: '/register-your-visit', desc: 'Plan your stay' },
  { name: 'Host Your Event', href: '/host-your-event', desc: 'Bring your group' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  // Pages without dark hero — Navbar should always render solid on these
  const lightPagePrefixes = ['/donate', '/volunteer', '/contact', '/blogs', '/information', '/about-us', '/vision', '/register-your-visit', '/host-your-event']
  const isLightPage = lightPagePrefixes.some((p) => pathname?.startsWith(p))

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  const solid = isScrolled || isLightPage
  const linkColor = solid ? 'text-charcoal' : 'text-ivory'

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        solid ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className={`font-display text-2xl font-bold tracking-[0.2em] ${linkColor}`}>
          DARPAN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-7">
          <NavLink href="/" label="Home" linkColor={linkColor} />
          <NavLink href="/guruji" label="Guruji" linkColor={linkColor} />
          <NavLink href="/about-us" label="About" linkColor={linkColor} />

          <Dropdown
            label="Programs"
            items={programsList}
            isOpen={openDropdown === 'programs'}
            setOpen={(v) => setOpenDropdown(v ? 'programs' : null)}
            linkColor={linkColor}
            indexHref="/programs"
            columns={2}
          />
          <Dropdown
            label="Initiatives"
            items={initiativesList}
            isOpen={openDropdown === 'initiatives'}
            setOpen={(v) => setOpenDropdown(v ? 'initiatives' : null)}
            linkColor={linkColor}
            indexHref="/initiatives"
            columns={2}
          />
          <Dropdown
            label="Visit"
            items={visitList}
            isOpen={openDropdown === 'visit'}
            setOpen={(v) => setOpenDropdown(v ? 'visit' : null)}
            linkColor={linkColor}
            indexHref="/visit-us"
            columns={1}
          />

          <NavLink href="/blogs" label="Blog" linkColor={linkColor} />
          <Link
            href="/donate"
            className="bg-saffron text-white px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-saffron/90 transition-all hover:scale-105"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden ${linkColor}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[80vh] overflow-y-auto bg-ivory shadow-lg flex flex-col py-6 px-6 space-y-2 border-t border-charcoal/10">
          <MobileLink href="/" label="Home" />
          <MobileLink href="/guruji" label="Guruji" />
          <MobileLink href="/about-us" label="About Us" />
          <MobileLink href="/vision" label="Vision" />
          <MobileGroup label="Programs" indexHref="/programs" items={programsList} />
          <MobileGroup label="Initiatives" indexHref="/initiatives" items={initiativesList} />
          <MobileGroup label="Visit" indexHref="/visit-us" items={visitList} />
          <MobileLink href="/blogs" label="Blog" />
          <MobileLink href="/volunteer" label="Volunteer" />
          <MobileLink href="/contact" label="Contact" />
          <Link
            href="/donate"
            className="bg-saffron text-white px-6 py-3 rounded-full text-center mt-4 text-sm font-medium uppercase tracking-wider"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, label, linkColor }: { href: string; label: string; linkColor: string }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium tracking-wide uppercase hover:text-saffron transition-colors ${linkColor}`}
    >
      {label}
    </Link>
  )
}

function Dropdown({
  label,
  items,
  isOpen,
  setOpen,
  linkColor,
  indexHref,
  columns,
}: {
  label: string
  items: { name: string; href: string; desc: string }[]
  isOpen: boolean
  setOpen: (v: boolean) => void
  linkColor: string
  indexHref: string
  columns: 1 | 2
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className={`flex items-center gap-1 text-sm font-medium tracking-wide uppercase hover:text-saffron transition-colors ${linkColor}`}>
        {label} <ChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 ${
            columns === 2 ? 'w-[640px]' : 'w-[300px]'
          } bg-ivory rounded-2xl shadow-2xl border border-charcoal/10 overflow-hidden`}
        >
          <div className={`p-6 grid ${columns === 2 ? 'grid-cols-2' : 'grid-cols-1'} gap-2`}>
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block p-3 rounded-lg hover:bg-creamCard transition-colors group"
              >
                <div className="font-display text-base text-charcoal group-hover:text-saffron transition-colors">
                  {item.name}
                </div>
                <div className="text-xs text-charcoal/60 mt-0.5">{item.desc}</div>
              </Link>
            ))}
          </div>
          <Link
            href={indexHref}
            className="block bg-creamCard px-6 py-3 text-center text-xs font-medium uppercase tracking-widest text-saffron hover:bg-saffron/10 transition-colors"
          >
            View All →
          </Link>
        </div>
      )}
    </div>
  )
}

function MobileLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-base font-display text-charcoal py-2 hover:text-saffron">
      {label}
    </Link>
  )
}

function MobileGroup({
  label,
  indexHref,
  items,
}: {
  label: string
  indexHref: string
  items: { name: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-charcoal/10 pt-2">
      <button
        className="flex w-full items-center justify-between text-base font-display text-charcoal py-2"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pl-4 pb-2 space-y-2">
          <Link href={indexHref} className="block text-sm text-saffron uppercase tracking-wider">
            View all
          </Link>
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="block text-sm text-charcoal/80 hover:text-saffron py-1">
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
