'use server'

import { createClient as createAdminClient } from '@supabase/supabase-js'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { writeRatelimit } from '@/lib/ratelimit'

export interface ActionResult {
  error?: string
  success?: boolean
}

export async function registerDistributor(
  _prevState: unknown,
  formData: FormData,
): Promise<ActionResult> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { error: 'You must be signed in.' }

    const { data: profile } = await supabase.from('users').select('role').eq('id', user.id).single()
    if (profile?.role !== 'admin') return { error: 'Admins only.' }

    // Rate limit by admin id + ip — prevents accidental double-submission
    // and slows down a compromised admin token.
    const headerStore = await headers()
    const ip = headerStore.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'admin'
    const { success: rateOk } = await writeRatelimit.limit(`admin:registerDistributor:${user.id}:${ip}`)
    if (!rateOk) return { error: 'Too many requests. Please slow down.' }

    const name = (formData.get('name') as string | null)?.trim() ?? ''
    const email = (formData.get('email') as string | null)?.trim().toLowerCase() ?? ''
    const phone = (formData.get('phone') as string | null)?.trim() ?? ''
    const password = (formData.get('password') as string | null) ?? ''

    if (!name || name.length < 2) return { error: 'Name is required (min 2 chars).' }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: 'Invalid email.' }
    if (password.length < 12) return { error: 'Password must be at least 12 characters.' }
    if (phone && !/^[0-9+\-\s()]{10,15}$/.test(phone)) return { error: 'Invalid phone.' }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY
    if (!url || !key) return { error: 'Server is missing Supabase credentials.' }

    const adminAuth = createAdminClient(url, key, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const { data: authData, error: authError } = await adminAuth.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name },
    })

    if (authError) {
      if (authError.message.includes('already been registered')) {
        return { error: 'That email is already registered.' }
      }
      return { error: authError.message }
    }
    if (!authData.user) return { error: 'Could not create account.' }

    const { error: dbError } = await adminAuth.from('users').insert({
      id: authData.user.id,
      name,
      email,
      phone,
      role: 'distributor',
      is_demo_user: false,
    })

    if (dbError) {
      // Roll back the auth user so we don't leave an orphan.
      await adminAuth.auth.admin.deleteUser(authData.user.id)
      return { error: `Profile creation failed: ${dbError.message}` }
    }

    revalidatePath('/admin')
    return { success: true }
  } catch (err) {
    console.error('registerDistributor error:', err)
    return { error: 'Could not register distributor. Try again or contact support.' }
  }
}
