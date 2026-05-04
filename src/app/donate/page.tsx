'use client'

import { useState } from 'react'
import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import LotusDivider from '@/components/LotusDivider'
import { Heart, Sprout, BookOpen, Hammer, Users, Gift } from 'lucide-react'

const tiers = [
  { amount: 500, label: 'Books & stationery', icon: BookOpen, desc: 'Supply books and stationery for a child for one month.' },
  { amount: 1000, label: 'Feed an ashram family', icon: Heart, desc: 'Feed an ashram family for a week.' },
  { amount: 5000, label: 'Sponsor skill training', icon: Hammer, desc: 'Sponsor a young person through Kaushal Darpan skills training.' },
  { amount: 10000, label: 'Support natural farming', icon: Sprout, desc: 'Support natural farming at the ashram for one season.' },
]

const causes = [
  { Icon: Sprout, title: 'Goshala', desc: 'Sheltering and caring for the indigenous cows that anchor our natural farming.' },
  { Icon: BookOpen, title: 'Mentor a Million', desc: 'Education and mentorship for rural children — 6,500+ already reached.' },
  { Icon: Users, title: 'Vanaprasthashram', desc: 'Sponsor a Kuteer (cottage) for a senior citizen at the ashram.' },
  { Icon: Heart, title: 'Annadanam', desc: 'Sponsor a meal at the ashram on a meaningful day.' },
]

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')

  const finalAmount = selectedAmount ?? (customAmount ? parseInt(customAmount, 10) : 0)

  function handleDonate() {
    // TODO: integrate Razorpay (or Cashfree / Stripe) here.
    // Example: window.Razorpay({ key, amount: finalAmount * 100, currency: 'INR', ... }).open()
    alert(`Razorpay integration is pending. Amount: ₹${finalAmount}`)
  }

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Every act of giving is an act of transformation."
        subtitle="For those who receive, and for those who give. Whatever your contribution, it ripples outward — into communities, classrooms, fields, hearts."
        variant="light"
        height="short"
      />

      {/* TIER SELECTOR */}
      <section className="py-20 md:py-24 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-12">
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Choose an Amount
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-charcoal leading-tight">
              Where would you like your contribution to go?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {tiers.map((t) => {
              const isActive = selectedAmount === t.amount
              return (
                <button
                  key={t.amount}
                  onClick={() => {
                    setSelectedAmount(t.amount)
                    setCustomAmount('')
                  }}
                  className={`text-left p-6 rounded-2xl border-2 transition-all ${
                    isActive
                      ? 'border-saffron bg-saffron/5 shadow-lg'
                      : 'border-charcoal/10 bg-creamCard hover:border-saffron/40'
                  }`}
                >
                  <t.icon size={24} className={`mb-3 ${isActive ? 'text-saffron' : 'text-charcoal/60'}`} />
                  <div className={`font-display text-3xl mb-1 ${isActive ? 'text-saffron' : 'text-charcoal'}`}>
                    ₹{t.amount.toLocaleString('en-IN')}
                  </div>
                  <div className={`text-sm font-medium mb-1 ${isActive ? 'text-charcoal' : 'text-charcoal'}`}>
                    {t.label}
                  </div>
                  <div className="text-xs text-charcoal/60 leading-relaxed">{t.desc}</div>
                </button>
              )
            })}
          </div>

          {/* Custom Amount */}
          <FadeIn className="bg-creamCard rounded-2xl p-6 border border-charcoal/5">
            <label className="block text-xs uppercase tracking-widest text-charcoal/60 font-medium mb-3">
              Or enter a custom amount (₹)
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="number"
                min={1}
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value)
                  setSelectedAmount(null)
                }}
                placeholder="Custom amount"
                className="flex-1 bg-white border border-charcoal/15 rounded-full px-6 py-4 text-lg focus:outline-none focus:border-saffron transition-colors"
              />
              <button
                onClick={handleDonate}
                disabled={!finalAmount}
                className={`rounded-full px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all ${
                  finalAmount
                    ? 'bg-saffron text-white hover:bg-saffron/90 hover:scale-105'
                    : 'bg-charcoal/10 text-charcoal/40 cursor-not-allowed'
                }`}
              >
                {finalAmount ? `Donate ₹${finalAmount.toLocaleString('en-IN')}` : 'Select an amount'}
              </button>
            </div>
            <p className="text-xs text-charcoal/50 mt-4">
              {/* TODO: Wire to Razorpay (or preferred PSP). Confirm 80G eligibility with finance team. */}
              Eligible for 80G tax exemption (subject to confirmation).
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-creamCard py-24 md:py-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <FadeIn className="text-center mb-14">
            <div className="text-saffron mb-6">
              <LotusDivider />
            </div>
            <span className="text-saffron uppercase tracking-[0.3em] text-xs font-medium mb-4 block">
              Where Your Gift Goes
            </span>
            <h2 className="font-display text-3xl md:text-5xl mb-5 leading-tight">
              Specific causes you can support.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {causes.map((c, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-2xl p-6 border border-charcoal/5 h-full">
                  <div className="text-saffron mb-3">
                    <c.Icon size={24} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-display text-lg text-charcoal mb-2">{c.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <FadeIn>
            <Gift className="text-saffron mx-auto mb-5" size={32} />
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Prefer to volunteer instead? <a href="/volunteer" className="text-saffron underline underline-offset-4 hover:no-underline">Find a way to give your time.</a>
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
