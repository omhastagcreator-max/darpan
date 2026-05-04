import FadeIn from './FadeIn'

export interface JourneyStep {
  num: string
  title: string
  desc: string
}

interface JourneyTimelineProps {
  eyebrow?: string
  title?: string
  steps: JourneyStep[]
  variant?: 'light' | 'dark'
}

export default function JourneyTimeline({
  eyebrow = 'Your Journey',
  title = 'How it unfolds',
  steps,
  variant = 'light',
}: JourneyTimelineProps) {
  const isDark = variant === 'dark'
  return (
    <section className={`py-24 md:py-32 ${isDark ? 'bg-darpanNavy text-ivory' : 'bg-ivory text-darpanNavy'}`}>
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <FadeIn className="text-center mb-16">
          <span className={`uppercase tracking-[0.3em] text-xs font-semibold mb-4 block ${isDark ? 'text-darpanCyan' : 'text-darpanTeal'}`}>
            {eyebrow}
          </span>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            {title}
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-7 md:left-1/2 top-3 bottom-3 w-px ${isDark ? 'bg-darpanCyan/20' : 'bg-darpanTeal/30'}`} />

          <div className="space-y-12">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col md:flex-row md:items-center gap-6 ${
                    isEven ? '' : 'md:flex-row-reverse'
                  }`}>
                    {/* Number bubble */}
                    <div className={`absolute left-7 md:left-1/2 -translate-x-1/2 z-10 w-14 h-14 rounded-full ${
                      isDark ? 'bg-darpanTeal text-white' : 'bg-darpanTeal text-white'
                    } flex items-center justify-center font-display text-lg font-semibold shadow-lg shadow-darpanTeal/30`}>
                      {step.num}
                    </div>

                    {/* Content card */}
                    <div className={`md:w-[calc(50%-3rem)] pl-20 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-darpanPale border border-darpanNavy/8'}`}>
                        <h3 className="font-display text-xl mb-2">{step.title}</h3>
                        <p className={`text-sm leading-relaxed ${isDark ? 'text-ivory/75' : 'text-darpanInk/75'}`}>
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
