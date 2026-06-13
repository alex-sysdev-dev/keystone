import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata = { title: 'Client Portal — Keystone' }

export default async function PortalPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '80px 0' }}>
        <div className="wrap">
          <div style={{ marginBottom: '40px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>Client portal</div>
            <h1 style={{ fontSize: 'clamp(28px,3vw,40px)', fontWeight: 600, letterSpacing: '-0.03em', margin: 0 }}>
              Welcome back
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--ink-2)', marginTop: '12px', fontWeight: 300 }}>
              {user.email}
            </p>
          </div>
          <div style={{
            border: '1px solid var(--line)',
            borderRadius: 'var(--r-lg)',
            padding: '48px',
            background: 'var(--surface-glass)',
            textAlign: 'center',
            color: 'var(--muted)',
            fontSize: '15px',
            fontWeight: 300,
          }}>
            Your engagement dashboard is being set up. Your Keystone lead will be in touch shortly.
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
