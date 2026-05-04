'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Guruji', href: '/guruji' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Programs', href: '/programs' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Visit Us', href: '/darpan-ashram' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-bold tracking-wider text-charcoal">
          DARPAN
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide uppercase hover:text-saffron transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-saffron text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-saffron/90 transition-all hover:scale-105"
          >
            Donate
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-charcoal"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-ivory shadow-lg flex flex-col py-6 px-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-display hover:text-saffron"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            className="bg-saffron text-white px-6 py-3 rounded-full text-center mt-4 text-sm font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  )
}
