interface LotusDividerProps {
  className?: string
  color?: string
}

export default function LotusDivider({ className = '', color = 'currentColor' }: LotusDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="block h-px w-16 bg-current opacity-30" />
      <svg viewBox="0 0 64 32" width="32" height="16" fill={color} aria-hidden="true">
        {/* Stylised lotus / mandala mark */}
        <path d="M32 4c-2 6-6 10-12 12 6 2 10 6 12 12 2-6 6-10 12-12-6-2-10-6-12-12z" opacity="0.9" />
        <circle cx="32" cy="16" r="2" />
        <path d="M8 16c4-2 8-2 12 0-4 2-8 2-12 0z" opacity="0.4" />
        <path d="M44 16c4-2 8-2 12 0-4 2-8 2-12 0z" opacity="0.4" />
      </svg>
      <span className="block h-px w-16 bg-current opacity-30" />
    </div>
  )
}
