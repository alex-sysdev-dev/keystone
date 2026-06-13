import Link from 'next/link'
import Image from 'next/image'

export function Footer({ showDisclaimer = false }: { showDisclaimer?: boolean }) {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-top">
          <div className="ft-brand">
            <Image className="logo-light" src="/assets/logo-lockup.png" alt="Keystone — Federal Grant Advisory" width={160} height={30} />
            <Image className="logo-dark" src="/assets/logo-lockup-dark.png" alt="Keystone — Federal Grant Advisory" width={160} height={30} />
            <p>Federal grant strategy and proposal development for organizations doing work worth funding.</p>
          </div>
          <div className="ft-col">
            <h4>Services</h4>
            <Link href="/services/opportunity-eligibility">Opportunity &amp; eligibility</Link>
            <Link href="/services/proposal-development">Proposal development</Link>
            <Link href="/services/compliance-review">Compliance review</Link>
            <Link href="/services/capture-strategy">Capture &amp; strategy</Link>
          </div>
          <div className="ft-col">
            <h4>More</h4>
            <Link href="/services/submission-systems">Submission &amp; systems</Link>
            <Link href="/services/debrief-resubmission">Debrief &amp; resubmission</Link>
            <Link href="/#work">Engagements</Link>
            <Link href="/#about">About</Link>
          </div>
          <div className="ft-col">
            <h4>Contact</h4>
            <Link href="/#contact">Book a consultation</Link>
            <a href="mailto:hello@keystone.co">hello@keystone.co</a>
            <Link href="/#contact">Las Vegas, NV</Link>
          </div>
        </div>
        <div className="ft-bot">
          <div className="eyebrow">© 2026 Keystone Federal Grant Advisory</div>
          {showDisclaimer ? (
            <div className="ft-disclaimer">Case studies are representative engagements that illustrate Keystone&apos;s approach across sectors; figures describe typical scope and targets, not guaranteed outcomes.</div>
          ) : (
            <div className="eyebrow">Operational Intelligence · Built to spec</div>
          )}
        </div>
      </div>
    </footer>
  )
}
