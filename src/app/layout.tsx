import type { Metadata } from 'next'
import { Poppins, Noto_Serif_Devanagari } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-serif-devanagari',
})

export const metadata: Metadata = {
  title: 'Darpan Foundation — A mirror for every seeker of truth',
  description:
    'Darpan Foundation. Spiritual transformation through Sahaj Smriti Yog, Ashram life, and social initiatives in education, nature, skill and senior care.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${notoSerifDevanagari.variable} scroll-smooth`}
    >
      <body className="relative bg-ivory text-charcoal flex flex-col min-h-screen font-sans">
        <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.025] mix-blend-overlay bg-noise"></div>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
