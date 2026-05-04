'use client'

import { useState } from 'react'
import Button from './Button'

interface EnquiryFormProps {
  programName?: string
  buttonLabel?: string
  showProgramField?: boolean
  showCityField?: boolean
  showSkillsField?: boolean
}

export default function EnquiryForm({
  programName,
  buttonLabel = 'Send Enquiry',
  showProgramField = false,
  showCityField = false,
  showSkillsField = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    // TODO: wire up to backend / mailer (e.g. Resend, SendGrid, custom API route).
    // For now, simulate a successful submit so the UX is testable.
    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-creamCard border border-saffron/20 rounded-2xl p-8 text-center">
        <h3 className="font-display text-2xl text-charcoal mb-3">Thank you.</h3>
        <p className="text-charcoal/70">
          Your message has reached us. We will be in touch soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className={`grid grid-cols-1 ${showCityField ? 'md:grid-cols-2' : ''} gap-4`}>
        <Field label="Phone" name="phone" type="tel" required />
        {showCityField && <Field label="City" name="city" />}
      </div>
      {showProgramField && (
        <Field
          label="Program of interest"
          name="program"
          defaultValue={programName ?? ''}
        />
      )}
      {showSkillsField && (
        <Field label="Skills you'd like to offer" name="skills" />
      )}
      <div>
        <label className="block text-xs font-medium uppercase tracking-wider text-charcoal/60 mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full bg-white border border-charcoal/20 rounded-xl px-4 py-3 text-base text-charcoal focus:outline-none focus:border-saffron transition-colors"
          placeholder="Share what brings you here…"
          required
        />
      </div>
      <label className="flex items-start gap-3 text-xs text-charcoal/60">
        <input type="checkbox" required className="mt-0.5 accent-saffron" />
        <span>I agree to be contacted in response to this enquiry.</span>
      </label>
      <div>
        <Button>{loading ? 'Sending…' : buttonLabel}</Button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  defaultValue,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  defaultValue?: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium uppercase tracking-wider text-charcoal/60 mb-2">
        {label}
        {required && <span className="text-saffron"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-white border border-charcoal/20 rounded-xl px-4 py-3 text-base text-charcoal focus:outline-none focus:border-saffron transition-colors"
      />
    </div>
  )
}
