/**
 * Shared content registry — used by index pages, navigation, footers,
 * and to keep "summary" copy consistent across the site.
 */

export type ContentItem = {
  slug: string
  href: string
  name: string
  tagline: string
  sanskrit?: string
  short: string
  image?: string
}

export const programs: ContentItem[] = [
  {
    slug: 'ignite-self',
    href: '/ignite-self',
    name: 'Ignite Self',
    tagline: 'Channel your inner fire',
    short:
      'An experiential journey of self-inquiry and self-discovery. Kindle your inner fire and uncover the power to inspire transformation in others.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'sahaj-smriti-kriya',
    href: '/sahaj-smriti-kriya',
    name: 'Sahaj Smriti Kriya',
    tagline: 'Command your life energy',
    short:
      'A divinely revealed practice that re-energises the subtle currents of prana through the spine and brain — accelerating spiritual evolution.',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'sahaj-smriti-yog',
    href: '/sahaj-smriti-yog',
    name: 'Sahaj Smriti Yog',
    tagline: 'The path back to yourself',
    short:
      'A journey from clear thinking, to transcending thought, to genuine peace. You do not need to acquire anything new — only rediscover what is already within.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1788&auto=format&fit=crop',
  },
  {
    slug: 'swadhyay',
    href: '/swadhyay',
    name: 'Swadhyay',
    tagline: 'Study the most mysterious subject — yourself',
    short:
      'The practice of self-inquiry. No one can solve the mystery of self for another. At best, one becomes the mirror in which others see themselves clearly.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'satsang',
    href: '/satsang',
    name: 'Satsang',
    tagline: 'In the company of Truth',
    short:
      'Sat means Truth. Sang means company. Through interaction with Guruji, seekers locate themselves spiritually — comprehending their real identity.',
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'seva',
    href: '/seva',
    name: 'Seva',
    tagline: 'Love in action',
    short:
      'Seva is not volunteering. It is a living expression of love. Selfless service expands consciousness in ways no solitary practice can.',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'upanishad',
    href: '/upanishad',
    name: 'Upanishad',
    tagline: 'Ancient conversations, renewed',
    short:
      'A spiritual dialogue series. Guruji hosts conversations with scholars, artists, scientists and seekers — a treasure for any seeking mind.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'nakshatra-darpan',
    href: '/nakshatra-darpan',
    name: 'Nakshatra Darpan',
    tagline: 'Explore the vastness of the sky to see the infinite in yourself',
    short:
      'Darpan Ashram\'s open-air observatory in Urigam — free from light pollution. Stargazing sessions connecting ancient star-knowledge with the science of today.',
    image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'children-and-teens',
    href: '/children-and-teens',
    name: 'Children & Teens',
    tagline: 'Life touching life',
    short:
      'Raising curious, nature-connected, grounded young people. Helping children see life from a fresh perspective — from natural farming to interdependence.',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'workshops',
    href: '/workshops',
    name: 'Workshops',
    tagline: 'Art as meditation',
    short:
      'Creative workshops — natural soap making, art and craft — that serve as doorways to inner stillness and spiritual self-expression.',
    image: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?q=80&w=1740&auto=format&fit=crop',
  },
]

export const initiatives: ContentItem[] = [
  {
    slug: 'kshetra-darpan',
    href: '/kshetra-darpan',
    name: 'Kshetra Darpan',
    sanskrit: 'क्षेत्र',
    tagline: 'Pure Food for the Body',
    short:
      'Sustainable farming, natural food, environmental conservation — restoring purity to what reaches our plates.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'mann-darpan',
    href: '/mann-darpan',
    name: 'Mann Darpan',
    sanskrit: 'मन',
    tagline: 'Pure Food for the Mind',
    short:
      'Mental wellness, self-development, workshops for all ages — pure nourishment for the mind.',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'vidya-darpan',
    href: '/vidya-darpan',
    name: 'Vidya Darpan',
    sanskrit: 'विद्या',
    tagline: 'Pure Food for the Self',
    short:
      'Education for underprivileged children — 6,500+ beneficiaries across 40+ schools and 5 states.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'kaushal-darpan',
    href: '/kaushal-darpan',
    name: 'Kaushal Darpan',
    sanskrit: 'कौशल',
    tagline: 'Pure Food for the Self',
    short:
      'Vocational training, livelihood, rural empowerment — life skills, employability, and entrepreneurship.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'jeevan-darpan',
    href: '/jeevan-darpan',
    name: 'Jeevan Darpan',
    sanskrit: 'जीवन',
    tagline: 'Pure Food for the Self',
    short:
      'Senior citizen programmes — purposeful retirement, community living, sharing wisdom across generations.',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=1740&auto=format&fit=crop',
  },
  {
    slug: 'atma-darpan',
    href: '/atma-darpan',
    name: 'Atma Darpan',
    sanskrit: 'आत्मा',
    tagline: 'Pure Food for the Soul',
    short:
      'Spiritual awakening, meditation, transmission — for all. Bridging the human and the divine.',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop',
  },
]

export const upanishadVideos = [
  { videoId: 'M7lc1UVf-VE', title: 'Sh. K. K. Mohammed (Padma Shri) in conversation with Guruji', speaker: 'K. K. Mohammed' },
  { videoId: 'M7lc1UVf-VE', title: 'Sh. Amish Tripathi in conversation with Guruji', speaker: 'Amish Tripathi' },
  { videoId: 'M7lc1UVf-VE', title: 'Dr. Melissa Kapoor in conversation with Guruji', speaker: 'Dr. Melissa Kapoor' },
  { videoId: 'M7lc1UVf-VE', title: 'Dr. Makarand Paranjape — International Yoga Day 2025', speaker: 'Dr. Makarand Paranjape' },
  // TODO: Replace videoIds with the actual YouTube video IDs from playlist PLty53myrnL4TMF1g14CftemFFryIyAb_2
]
