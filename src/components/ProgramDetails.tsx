import FadeIn from './FadeIn'
import { Clock, Users, MapPin, IndianRupee, Calendar, CheckCircle2, Languages, Heart } from 'lucide-react'

interface DetailsProps {
  duration?: string
  format?: string
  whoFor?: string
  schedule?: string
  language?: string
  fee?: string
  location?: string
  prerequisite?: string
}

export default function ProgramDetails(props: DetailsProps) {
  const rows = [
    { Icon: Clock, label: 'Duration', value: props.duration },
    { Icon: Calendar, label: 'Format', value: props.format },
    { Icon: Users, label: 'Who it&rsquo;s for', value: props.whoFor },
    { Icon: MapPin, label: 'Location', value: props.location },
    { Icon: Calendar, label: 'Schedule', value: props.schedule },
    { Icon: Languages, label: 'Language', value: props.language },
    { Icon: IndianRupee, label: 'Contribution', value: props.fee },
    { Icon: CheckCircle2, label: 'Prerequisite', value: props.prerequisite },
  ].filter((r) => r.value)

  return (
    <FadeIn>
      <div className="bg-white border border-darpanNavy/10 rounded-2xl p-2 shadow-xl shadow-darpanNavy/5">
        <div className="bg-darpanNavy text-ivory rounded-t-xl px-7 py-5">
          <div className="flex items-center gap-2 text-darpanCyan uppercase tracking-[0.25em] text-xs font-semibold">
            <Heart size={14} /> Program at a glance
          </div>
        </div>
        <div className="divide-y divide-darpanNavy/8">
          {rows.map((r, i) => (
            <div key={i} className="flex items-start gap-5 px-7 py-5">
              <div className="text-darpanTeal shrink-0 pt-0.5">
                <r.Icon size={18} strokeWidth={1.8} />
              </div>
              <div className="flex-1">
                <div className="text-xs uppercase tracking-widest text-darpanInk/55 font-semibold mb-1" dangerouslySetInnerHTML={{ __html: r.label }} />
                <div className="text-darpanNavy text-[15px] leading-relaxed">{r.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
