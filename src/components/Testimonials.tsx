import FadeIn from './FadeIn'
import LotusDivider from './LotusDivider'
import { Quote } from 'lucide-react'

export interface Testimonial {
  quote: string
  name: string
  role?: string
  image?: string
}

interface TestimonialsProps {
  eyebrow?: string
  title?: string
  items: Testimonial[]
  variant?: 'light' | 'dark' | 'cream'
}

const bgMap = {
  light: 'bg-ivory text-darpanNavy',
  cream: 'bg-darpanPale text-darpanNavy',
  dark: 'bg-darpanNavy text-ivory',
}

export default function Testimonials({
  eyebrow = 'Voices from the Path',
  title = 'What seekers are saying',
  items,
  variant = 'cream',
}: TestimonialsProps) {
  const isDark = variant === 'dark'
  return (
    <section className={`${bgMap[variant]} py-24 md:py-32`}>
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <div className={`mb-6 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
            <LotusDivider />
          </div>
          <span className={`uppercase tracking-[0.3em] text-xs font-semibold mb-4 block ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            {title}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((t, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className={`relative h-full p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-darpanNavy/8'} hover:shadow-lg hover:-translate-y-1 transition-all`}>
                <Quote className={`mb-5 ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'} opacity-30`} size={36} />
                <p className={`text-base leading-relaxed mb-7 ${isDark ? 'text-ivory/85' : 'text-darpanInk/85'}`}>
                  {t.quote}
                </p>
                <div className="flex items-center gap-4 pt-5 border-t border-darpanNavy/10">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                    <div className="w-12 h-12 rounded-full brand-gradient flex items-center justify-center text-white font-semibold">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className={`font-semibold text-sm ${isDark ? 'text-ivory' : 'text-darpanNavy'}`}>{t.name}</div>
                    {t.role && (
                      <div className={`text-xs ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>{t.role}</div>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
