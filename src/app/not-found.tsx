import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FEF9F4] p-6 text-center">
      <p className="text-6xl mb-4">🌾</p>
      <h1 className="text-2xl font-black text-gray-900 mb-2">Page not found</h1>
      <p className="text-gray-500 max-w-sm mb-6">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="bg-[#BA181B] hover:bg-[#991518] text-white font-semibold px-5 py-2.5 rounded-xl">
        Back to home
      </Link>
    </div>
  )
}
