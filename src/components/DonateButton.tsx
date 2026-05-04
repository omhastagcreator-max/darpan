'use client'

interface DonateButtonProps {
  amount?: number | string
  label?: string
  className?: string
}

/**
 * Small client-only button for triggering the donation flow.
 * Kept separate so donate/page.tsx can stay a Server Component
 * and still export `metadata`.
 */
export default function DonateButton({
  amount,
  label = 'Donate',
  className = 'bg-darpanTeal text-white rounded-full px-5 py-2 text-xs uppercase tracking-widest font-semibold hover:bg-darpanNavy transition-colors self-start',
}: DonateButtonProps) {
  function handleClick() {
    // TODO: integrate Razorpay (or Cashfree / Stripe) here.
    // Example: new window.Razorpay({ key, amount: (amount ?? 0) * 100, currency: 'INR', ... }).open()
    const detail = amount ? `\nAmount: ₹${amount}` : ''
    alert(`Payment gateway integration is pending. Please use the bank details below for now.${detail}`)
  }

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  )
}
