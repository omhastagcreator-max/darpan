import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Darpan brand palette — derived from the logo (navy + teal + cyan).
        // Token names kept stable so existing JSX still works.
        saffron: '#2EB5B5',     // Primary teal (legacy alias)
        forest: '#0E2A47',      // Deep navy (legacy alias)
        ivory: '#FFFFFF',       // Page background
        charcoal: '#0E2A47',    // Body text uses brand navy
        goldLight: '#5BC4C4',   // Accent on dark surfaces
        creamCard: '#F2F8FA',   // Card surface — pale cool blue
        // Aliases for clarity in new code
        darpanNavy: '#0E2A47',
        darpanTeal: '#2EB5B5',
        darpanCyan: '#5BC4C4',
        darpanPale: '#F2F8FA',
        darpanInk: '#1A2B3D',
        darpanMid: '#194B73',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        display: ['var(--font-poppins)', 'serif'],
        sanskrit: ['var(--font-noto-serif-devanagari)', 'serif'],
        quote: ['var(--font-poppins)', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'shimmer': 'shimmer 8s ease-in-out infinite',
        'spin-slow': 'spin 32s linear infinite',
        'spin-slower': 'spin 60s linear infinite',
        'spin-reverse': 'spin 40s linear infinite reverse',
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'tilt': 'tilt 10s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, -1%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.55', transform: 'scale(1.06)' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(0.5deg)' },
          '75%': { transform: 'rotate(-0.5deg)' },
        },
      },
      backgroundImage: {
        'noise':
          'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        'darpan-gradient':
          'linear-gradient(135deg, #0E2A47 0%, #194B73 35%, #2A8A99 70%, #2EB5B5 100%)',
        'darpan-gradient-soft':
          'linear-gradient(180deg, #F2F8FA 0%, #FFFFFF 100%)',
        'darpan-mandala':
          'radial-gradient(circle at top left, rgba(94,196,196,0.18) 0px, transparent 220px), radial-gradient(circle at top right, rgba(14,42,71,0.12) 0px, transparent 220px)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}

export default config
