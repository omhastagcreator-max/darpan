import { NextRequest, NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'
import { ratelimit } from '@/lib/ratelimit'

// ============================================================
// Seed route — DEVELOPMENT / STAGING ONLY by default.
//
// Hardening applied vs. previous version:
//   1. Requires ?token= matching SEED_SECRET (defense in depth).
//   2. Refuses to run when NODE_ENV === 'production' unless
//      ALLOW_PROD_SEED=true is also set.
//   3. Rate-limited per IP (3 req / 10 min).
//   4. Never returns demo passwords in the response body.
//   5. Removed from middleware's public route list — even with the
//      token, only fully-formed requests reach this handler.
// ============================================================

export const dynamic = 'force-dynamic'

interface SeedAccount {
  name: string
  email: string
  role: 'customer' | 'distributor' | 'delivery' | 'admin'
  is_demo_user: boolean
}

const PRODUCTS = [
  { name: 'Pearl Millet (Bajra) Atta', description: 'Traditional bajra flour, high in iron and magnesium.', price_customer: 129, price_500g: 129, price_10kg: 2300, price_30kg: 6800, stock: 180, category: 'Flour', image_url: '/products/Bajra Atta.jpeg' },
  { name: 'Barely (Jou) Flour', description: 'Healthy barely flour, great for breads and rotis.', price_customer: 119, price_500g: 119, price_10kg: 2100, price_30kg: 6100, stock: 150, category: 'Flour', image_url: '/products/Barely (Jou) Flour.jpeg' },
  { name: 'Chana Atta', description: 'Pure chana flour, rich in protein.', price_customer: 139, price_500g: 139, price_10kg: 2500, price_30kg: 7400, stock: 200, category: 'Flour', image_url: '/products/Chana Atta.jpeg' },
  { name: 'Foxnut (Makhana)', description: 'Premium quality foxnuts. Perfect for light snacking.', price_customer: 199, price_500g: 199, price_10kg: 3500, price_30kg: 10000, stock: 50, category: 'Snacks', image_url: '/products/Foxnut.jpeg' },
  { name: 'Kuttu Atta', description: 'Buckwheat flour for fasting.', price_customer: 169, price_500g: 169, price_10kg: 3000, price_30kg: 8900, stock: 100, category: 'Flour', image_url: '/products/Kuttu Atta.jpeg' },
  { name: 'Makka Atta (Corn Flour)', description: 'Traditional corn flour. Essential for makki ki roti.', price_customer: 99, price_500g: 99, price_10kg: 1700, price_30kg: 5000, stock: 120, category: 'Flour', image_url: '/products/Makka Atta(Corn Flour).jpeg' },
  { name: 'Soyabean Atta', description: 'Protein-rich soyabean flour.', price_customer: 149, price_500g: 149, price_10kg: 2600, price_30kg: 7600, stock: 80, category: 'Flour', image_url: '/products/Soyabean Atta.jpeg' },
]

// Demo accounts — emails only. Passwords are read from env so they
// can be rotated without a code change and never appear in this file.
const DEMO_ACCOUNTS: SeedAccount[] = [
  { name: 'Apurti Admin',     email: process.env.NEXT_PUBLIC_DEMO_ADMIN_EMAIL       || 'admin@apurti.local',     role: 'admin',       is_demo_user: false },
  { name: 'Raju Distributor', email: process.env.NEXT_PUBLIC_DEMO_DISTRIBUTOR_EMAIL || 'wholesale@apurti.local', role: 'distributor', is_demo_user: false },
  { name: 'Express Delivery', email: process.env.NEXT_PUBLIC_DEMO_DELIVERY_EMAIL    || 'driver@apurti.local',    role: 'delivery',    is_demo_user: false },
  { name: 'Demo Customer',    email: process.env.NEXT_PUBLIC_DEMO_CUSTOMER_EMAIL    || 'customer@apurti.local',  role: 'customer',    is_demo_user: false },
]

const PASSWORDS: Record<string, string | undefined> = {
  admin:       process.env.NEXT_PUBLIC_DEMO_ADMIN_PASSWORD,
  distributor: process.env.NEXT_PUBLIC_DEMO_DISTRIBUTOR_PASSWORD,
  delivery:    process.env.NEXT_PUBLIC_DEMO_DELIVERY_PASSWORD,
  customer:    process.env.NEXT_PUBLIC_DEMO_CUSTOMER_PASSWORD,
}

function unauthorized(reason: string) {
  return NextResponse.json({ success: false, error: reason }, { status: 401 })
}

export async function GET(req: NextRequest) {
  // 1. Token gate
  const expected = process.env.SEED_SECRET
  if (!expected || expected.length < 16) {
    return NextResponse.json(
      { success: false, error: 'Seed disabled — server is missing SEED_SECRET (must be ≥ 16 chars).' },
      { status: 503 },
    )
  }
  const token = req.nextUrl.searchParams.get('token')
  if (token !== expected) return unauthorized('Invalid or missing token.')

  // 2. Production refusal
  if (process.env.NODE_ENV === 'production' && process.env.ALLOW_PROD_SEED !== 'true') {
    return unauthorized('Refusing to seed in production. Set ALLOW_PROD_SEED=true to override.')
  }

  // 3. Per-IP rate limit
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'anon'
  const { success } = await ratelimit.limit(`seed:${ip}`)
  if (!success) return NextResponse.json({ success: false, error: 'Rate limited.' }, { status: 429 })

  // 4. Verify all demo passwords are configured
  for (const a of DEMO_ACCOUNTS) {
    const pw = PASSWORDS[a.role]
    if (!pw || pw.length < 12) {
      return NextResponse.json(
        {
          success: false,
          error: `Refusing to seed: NEXT_PUBLIC_DEMO_${a.role.toUpperCase()}_PASSWORD must be set (≥ 12 chars).`,
        },
        { status: 400 },
      )
    }
  }

  try {
    const supabase = await createAdminClient()
    const createdUsers: Record<string, string> = {}

    for (const u of DEMO_ACCOUNTS) {
      const password = PASSWORDS[u.role]!
      const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
        email: u.email,
        password,
        email_confirm: true,
        user_metadata: { name: u.name },
      })

      let userId: string | undefined
      if (authError && authError.message.includes('already been registered')) {
        const { data: existing } = await supabase.auth.admin.listUsers()
        userId = existing?.users?.find((user) => user.email === u.email)?.id
      } else if (authUser?.user) {
        userId = authUser.user.id
      }
      if (!userId) continue

      createdUsers[`${u.role}_${u.email}`] = userId
      await supabase.from('users').upsert(
        { id: userId, name: u.name, email: u.email, role: u.role, is_demo_user: u.is_demo_user },
        { onConflict: 'id' },
      )
    }

    const { data: insertedProducts } = await supabase
      .from('products')
      .upsert(PRODUCTS, { onConflict: 'name' })
      .select()
    const products = insertedProducts || []

    const dist1Id = createdUsers[`distributor_${DEMO_ACCOUNTS[1].email}`]
    if (dist1Id && products.length > 0) {
      const pricingData = products.map((p, i) => ({
        distributor_id: dist1Id,
        product_id: p.id,
        packing: '500g',
        custom_price: Math.round(p.price_customer * (i % 2 === 0 ? 0.78 : 0.82)),
        custom_offer: i % 2 === 0 ? 22 : 18,
      }))
      await supabase
        .from('distributor_pricing')
        .upsert(pricingData, { onConflict: 'distributor_id,product_id,packing' })
    }

    const customerId = createdUsers[`customer_${DEMO_ACCOUNTS[3].email}`]
    const deliveryId = createdUsers[`delivery_${DEMO_ACCOUNTS[2].email}`]
    const statuses = ['pending', 'accepted', 'picked', 'out_for_delivery', 'delivered', 'delivered', 'delivered', 'pending', 'accepted', 'delivered']

    if (customerId && products.length >= 2) {
      for (let i = 0; i < 10; i++) {
        const status = statuses[i]
        const orderProducts = [products[i % products.length], products[(i + 1) % products.length]]
        const total = orderProducts.reduce((s, p) => s + p.price_customer, 0)

        const { data: order } = await supabase
          .from('orders')
          .insert({
            user_id: customerId,
            user_role: 'customer',
            total_amount: total,
            status,
            assigned_delivery_id: ['accepted', 'picked', 'out_for_delivery', 'delivered'].includes(status) ? deliveryId : null,
            delivery_location_lat: 28.6139 + (Math.random() - 0.5) * 0.1,
            delivery_location_lng: 77.2090 + (Math.random() - 0.5) * 0.1,
            customer_name: 'Demo Customer',
            delivery_address: 'Demo Address, Delhi 110001',
            customer_phone: '9999900000',
            created_at: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toISOString(),
          })
          .select()
          .single()

        if (order) {
          await supabase.from('order_items').insert(
            orderProducts.map((p) => ({
              order_id: order.id,
              product_id: p.id,
              quantity: Math.floor(Math.random() * 3) + 1,
              price: p.price_customer,
            })),
          )
        }
      }

      if (dist1Id) {
        for (let i = 0; i < 10; i++) {
          const status = statuses[(i + 3) % statuses.length]
          const bulkProducts = products.slice(i % 5, (i % 5) + 3)
          const total = bulkProducts.reduce((s, p) => s + p.price_customer * 10, 0) * 0.8

          const { data: distOrder } = await supabase
            .from('orders')
            .insert({
              user_id: dist1Id,
              user_role: 'distributor',
              total_amount: total,
              status,
              assigned_delivery_id: ['accepted', 'picked', 'out_for_delivery', 'delivered'].includes(status) ? deliveryId : null,
              created_at: new Date(Date.now() - i * 48 * 60 * 60 * 1000).toISOString(),
            })
            .select()
            .single()

          if (distOrder) {
            await supabase.from('order_items').insert(
              bulkProducts.map((p) => ({
                order_id: distOrder.id,
                product_id: p.id,
                quantity: 10,
                price: Math.round(p.price_customer * 0.8),
              })),
            )
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Demo data seeded. Demo credentials are in your local .env.local.',
      seeded: { products: products.length, users: Object.keys(createdUsers).length },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown seed error.'
    console.error('Seed error:', err)
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}
