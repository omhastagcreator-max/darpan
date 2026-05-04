'use client'

import { Play } from 'lucide-react'

interface YouTubeCardProps {
  videoId: string
  title: string
  speaker?: string
}

export default function YouTubeCard({ videoId, title, speaker }: YouTubeCardProps) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative rounded-2xl overflow-hidden bg-charcoal aspect-video"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-saffron flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Play className="ml-1 text-white" size={24} fill="white" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-ivory">
        <h4 className="font-display text-lg leading-snug">{title}</h4>
        {speaker && <p className="text-xs uppercase tracking-widest text-goldLight mt-1">{speaker}</p>}
      </div>
    </a>
  )
}
