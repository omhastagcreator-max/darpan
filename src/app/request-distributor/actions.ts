'use server'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { createAdminClient } from '@/lib/supabase/server'
import { writeRatelimit } from '@/lib/ratelimit'

function err(msg: string): never {
  redirect(`/request-distributor?error=${encodeURIComponent(msg)}`)
}

export async function submitDistributorRequest(formData: FormData) {
  const name = (formData.get('name') as string | null)?.trim() ?? ''
  const phone = (formData.get('phone') as string | null)?.trim() ?? ''
  const city = (formData.get('city') as string | null)?.trim() ?? ''

  if (name.length < 2 || name.length > 120) err('Please enter a valid name.')
  if (!/^[0-9+\-\s()]{10,15}$/.test(phone)) err('Please enter a valid phone number.')
  if (city.length < 2 || city.length > 80) err('Please enter a valid city.')

  const headerStore = await headers()
  const ip = headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'anon'
  const { success } = await writeRatelimit.limit(`distreq:${ip}`)
  if (!success) err('Too many requests. Please try again in a minute.')

  const admin = await createAdminClient()
  const { error } = await admin
    .from('distributor_requests')
    .insert({ name, phone, city, status: 'pending' })

  if (error) err(error.message)

  redirect('/request-distributor?ok=1')
}
