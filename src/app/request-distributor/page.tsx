import Link from 'next/link'
import { submitDistributorRequest } from './actions'

export const dynamic = 'force-dynamic'

export default function RequestDistributorPage({
  searchParams,
}: {
  searchParams?: { ok?: string; error?: string }
}) {
  const submitted = searchParams?.ok === '1'
  const error = searchParams?.error

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEF9F4] p-6 text-center">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-5">
          <span className="text-4xl">✅</span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 mb-2">Request submitted</h1>
        <p className="text-gray-600 max-w-sm">
          Thanks — our team will review your details and reach out within 1–2 business days.
        </p>
        <Link href="/login" className="mt-6 text-[#BA181B] font-semibold underline">
          Back to sign in
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FEF9F4] flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-sm border border-gray-100 p-6">
        <h1 className="text-xl font-black text-gray-900">Become a distributor</h1>
        <p className="text-sm text-gray-500 mt-1 mb-5">
          Tell us about your business. We&apos;ll set up wholesale pricing for you.
        </p>

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-3 py-2">
            {decodeURIComponent(error)}
          </div>
        )}

        <form action={submitDistributorRequest} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">Business / contact name *</label>
            <input name="name" required minLength={2} maxLength={120} className="input" placeholder="Apurti Foods Wholesale" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">Phone *</label>
            <input name="phone" required minLength={10} maxLength={15} className="input" placeholder="10-digit mobile" />
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-600 mb-1.5">City *</label>
            <input name="city" required minLength={2} maxLength={80} className="input" placeholder="Bengaluru" />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">Submit request</button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-4">
          Already have an account? <Link href="/login" className="text-[#BA181B] font-semibold">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
