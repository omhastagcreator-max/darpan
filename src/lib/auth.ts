// ============================================================
// Server-only auth helpers.
//
// Pages and server actions should call requireRole() instead of
// duplicating the user → profile → role check. This guarantees
// consistent enforcement and one place to add audit logging.
// ============================================================

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import type { UserRole, UserProfile } from '@/lib/types'

export interface AuthedUser {
  user: { id: string; email: string | undefined }
  profile: UserProfile
}

/**
 * Returns the authenticated user with their profile, or redirects to /login.
 * Optionally enforces one of `allowedRoles`. If the role check fails the
 * user is redirected to the home for their actual role rather than /login,
 * to avoid a loop.
 */
export async function requireRole(allowedRoles: UserRole[] = []): Promise<AuthedUser> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', user.id)
    .single()

  if (!profile) redirect('/login')

  if (allowedRoles.length > 0 && !allowedRoles.includes(profile.role)) {
    const home: Record<UserRole, string> = {
      admin: '/admin',
      distributor: '/distributor',
      delivery: '/delivery',
      customer: '/',
    }
    redirect(home[profile.role as UserRole] ?? '/')
  }

  return {
    user: { id: user.id, email: user.email },
    profile: profile as UserProfile,
  }
}
