'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from './ThemeProvider'

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export function Navbar({ currentSlug }: { currentSlug?: string }) {
  const { toggle } = useTheme()

  const services = [
    { href: '/services/opportunity-eligibility', label: 'Opportunity & eligibility', code: '01' },
    { href: '/services/proposal-development', label: 'Proposal development', code: '02' },
    { href: '/services/compliance-review', label: 'Compliance review', code: '03' },
    { href: '/services/capture-strategy', label: 'Capture & strategy', code: '04' },
    { href: '/services/submission-systems', label: 'Submission & systems', code: '05' },
    { href: '/services/debrief-resubmission', label: 'Debrief & resubmission', code: '06' },
  ]

  return (
    <nav className="bar">
      <div className="bar-in">
        <Link className="brand-lock" href="/" aria-label="Keystone home">
          <Image className="logo-light" src="/assets/logo-mark.png" alt="Keystone" width={34} height={34} />
          <Image className="logo-dark" src="/assets/logo-mark-dark.png" alt="Keystone" width={34} height={34} />
          <span className="bn">Keystone</span>
        </Link>

        <div className="navlinks">
          <div className="navdrop">
            <button className="navdrop-t" aria-haspopup="true">
              Services <ChevronDown />
            </button>
            <div className="navdrop-menu" role="menu">
              <div className="mlabel">The six services</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href} className={currentSlug === s.href.split('/').pop() ? 'cur' : ''}>
                  <span>{s.label}</span>
                  <span className="mc">{s.code}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#process">Process</Link>
          <Link href="/#work">Engagements</Link>
          <Link href="/#about">About</Link>
        </div>

        <div className="nav-right">
          <div className="navdrop internal">
            <button className="navdrop-t alt" aria-haspopup="true">
              Internal <ChevronDown />
            </button>
            <div className="navdrop-menu right" role="menu">
              <div className="mlabel">Working documents</div>
              <Link href="/marketing/launch-strategy">
                <span>Launch strategy</span>
                <span className="mc">GTM</span>
              </Link>
              <Link href="/marketing/launch-film">
                <span>Launch film</span>
                <span className="mc">0:30</span>
              </Link>
            </div>
          </div>
          <button className="ttoggle" onClick={toggle} aria-label="Toggle theme">
            <svg className="tt-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg className="tt-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>
          <Link href="/#contact" className="btn btn-primary">Book a consultation</Link>
        </div>
      </div>
    </nav>
  )
}
