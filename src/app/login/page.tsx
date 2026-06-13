'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${location.origin}/portal` },
    })
    setSent(true)
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
        <div className="wrap" style={{ maxWidth: '480px' }}>
          <div className="eyebrow" style={{ marginBottom: '12px' }}>Client portal</div>
          <h1 style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 600, letterSpacing: '-0.03em', margin: '0 0 8px' }}>
            Sign in
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--ink-2)', margin: '0 0 32px', fontWeight: 300 }}>
            We&apos;ll send a magic link to your email.
          </p>

          {sent ? (
            <div style={{
              border: '1px solid var(--line)',
              borderRadius: 'var(--r-lg)',
              padding: '32px',
              background: 'var(--surface-glass)',
              textAlign: 'center',
            }}>
              <div style={{ fontWeight: 600, marginBottom: '8px' }}>Check your inbox</div>
              <p style={{ fontSize: '14px', color: 'var(--ink-2)', margin: 0, fontWeight: 300 }}>
                We sent a sign-in link to <b>{email}</b>. Click it to access the portal.
              </p>
            </div>
          ) : (
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  padding: '12px 16px',
                  border: '1px solid var(--line-strong)',
                  borderRadius: 'var(--r-sm)',
                  background: 'var(--surface)',
                  color: 'var(--ink)',
                  fontSize: '15px',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary btn-lg"
                style={{ justifyContent: 'center' }}
              >
                {loading ? 'Sending…' : 'Send magic link'}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
