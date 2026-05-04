import FadeIn from '@/components/FadeIn'
import PageHero from '@/components/PageHero'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Blog | Darpan Foundation',
  description:
    "Reflections, teachings, and stories from Guruji and the Darpan community.",
}

// Stub posts for now. TODO: replace with Sanity (or other CMS) fetch.
const posts = [
  {
    slug: 'why-meditation-is-not-an-escape',
    title: 'Why meditation is not an escape',
    excerpt:
      'Many approach spirituality as a turning away from life. Sahaj Smriti Yog offers a different orientation entirely — one of full involvement.',
    date: 'May 2, 2026',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1740&auto=format&fit=crop',
    category: 'Reflections',
  },
  {
    slug: 'kshetra-this-living-field',
    title: 'Kshetra — this living field',
    excerpt:
      'On the day we welcomed visiting school students, the connection between earth and self became immediate. A note from a tree-planting morning at the ashram.',
    date: 'April 18, 2026',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1740&auto=format&fit=crop',
    category: 'From the Ashram',
  },
  {
    slug: 'the-mirror-and-the-question',
    title: 'The mirror and the question',
    excerpt:
      'Self-Enquiry begins with one question. The work happens in the gap between the question and the next thought.',
    date: 'April 5, 2026',
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1740&auto=format&fit=crop',
    category: 'Teachings',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Reflections from the path."
        subtitle="Notes from Guruji, dispatches from the ashram, and the slow, patient work of seeing clearly."
        variant="light"
        height="short"
      />

      <section className="py-20 md:py-28 bg-ivory">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="group block bg-creamCard rounded-2xl overflow-hidden border border-charcoal/5 hover:shadow-xl transition-all hover:-translate-y-1 h-full"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-saffron uppercase tracking-widest text-[11px] font-medium">
                        {post.category}
                      </span>
                      <span className="text-charcoal/30 text-xs">·</span>
                      <span className="flex items-center gap-1 text-charcoal/60 text-xs">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl text-charcoal mb-3 group-hover:text-saffron transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <span className="text-saffron text-xs uppercase tracking-widest font-medium inline-flex items-center gap-1">
                      Read <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-16">
            <p className="text-charcoal/50 text-sm italic">
              {/* TODO: Connect blog index to Sanity / WordPress CMS for live content. */}
              These are placeholder posts. The blog is wired to receive content from your CMS of choice.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
