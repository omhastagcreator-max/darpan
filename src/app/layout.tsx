import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Noto_Serif_Devanagari, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-serif-devanagari',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Darpan Foundation | A mirror for every seeker of truth',
  description: 'A place built entirely for individual transformation. A mirror for every seeker of truth.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} ${notoSerifDevanagari.variable} ${playfair.variable} scroll-smooth`}>
      <body className="relative bg-ivory text-charcoal flex flex-col min-h-screen">
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay bg-noise"></div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
