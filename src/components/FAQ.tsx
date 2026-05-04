'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import FadeIn from './FadeIn'

export interface FAQItem {
  q: string
  a: string
}

interface FAQProps {
  eyebrow?: string
  title?: string
  items: FAQItem[]
}

export default function FAQ({ eyebrow = 'Common Questions', title = 'Before you decide', items }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-ivory">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <FadeIn className="text-center mb-12">
          <span className="text-darpanTeal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-darpanNavy leading-tight">
            {title}
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className={`bg-white border rounded-2xl overflow-hidden transition-all ${
                openIdx === i
                  ? 'border-darpanTeal shadow-lg shadow-darpanTeal/10'
                  : 'border-darpanNavy/10 hover:border-darpanNavy/20'
              }`}>
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 group"
                >
                  <span className={`font-medium text-base md:text-lg ${openIdx === i ? 'text-darpanTeal' : 'text-darpanNavy'} group-hover:text-darpanTeal transition-colors`}>
                    {item.q}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIdx === i
                      ? 'bg-darpanTeal text-white'
                      : 'bg-darpanPale text-darpanTeal'
                  }`}>
                    {openIdx === i ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-6 text-darpanInk/80 leading-relaxed text-[15px] border-t border-darpanNavy/5 pt-5">
                    {item.a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
