import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const services = [
  {
    slug: 'opportunity-eligibility',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
    title: 'Opportunity & eligibility',
    desc: 'We map your work to the right programs and confirm eligibility before a dollar of effort is spent.',
    bullets: ['Solicitation scan & fit scoring', 'Agency & program targeting', 'Go / no-go recommendation'],
  },
  {
    slug: 'proposal-development',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><path d="M14 4v5h5M8 13h8M8 17h6" /></svg>,
    title: 'Proposal development',
    desc: 'We write the narrative, build the work plan, and assemble every required form to the letter of the solicitation.',
    bullets: ['Technical & project narrative', 'Budget & justification', 'Forms, certifications & attachments'],
  },
  {
    slug: 'compliance-review',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
    title: 'Compliance review',
    desc: "A line-by-line check against the criteria reviewers actually score — before you submit, not after you lose.",
    bullets: ['Solicitation cross-walk', 'Page, format & font compliance', 'Reviewer-criteria audit'],
  },
  {
    slug: 'capture-strategy',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>,
    title: 'Capture & strategy',
    desc: 'Positioning, win themes, and a multi-cycle roadmap so each submission is stronger than the last.',
    bullets: ['Win-theme development', 'Competitive positioning', 'Phase I → Phase II roadmap'],
  },
  {
    slug: 'submission-systems',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" /></svg>,
    title: 'Submission & systems',
    desc: "We register, package, and submit through Grants.gov, SAM.gov, and agency portals — and confirm receipt.",
    bullets: ['SAM.gov & Grants.gov setup', 'Workspace packaging', 'Submission & receipt verification'],
  },
  {
    slug: 'debrief-resubmission',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></svg>,
    title: 'Debrief & resubmission',
    desc: "If a proposal doesn't land, we read the reviews, fix what scored low, and turn it around for the next cycle.",
    bullets: ['Reviewer-comment analysis', 'Targeted revisions', 'Resubmission planning'],
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">

        {/* HERO */}
        <section className="hero">
          <div className="hero-grid-bg" />
          <div className="wrap hero-in">
            <div className="hero-tag">
              <span className="chip">Federal</span>
              <b>Grant strategy &amp; proposal development</b>
            </div>
            <h1 className="hero-h">Funding favors the well-prepared.</h1>
            <p className="hero-sub">
              Keystone helps small businesses win competitive federal grants and contracts — with proposals built to the agency&apos;s exact criteria, compliance-checked, and review-ready.
            </p>
            <div className="hero-cta">
              <Link href="#contact" className="btn btn-primary btn-lg">
                Start an engagement <ArrowRight />
              </Link>
              <Link href="#process" className="btn btn-ghost btn-lg">See how it works</Link>
            </div>
            <div className="hero-meta">
              <div className="hm"><CheckIcon /> SBIR/STTR, NIH, NSF, DOE &amp; DoD</div>
              <div className="hm"><CheckIcon /> Compliance-checked to the solicitation</div>
              <div className="hm"><CheckIcon /> Submission-ready in Grants.gov &amp; SAM</div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats" aria-label="The federal landscape">
          <div style={{ maxWidth: 'var(--maxw)', margin: '0 auto' }}>
            <div className="stats-in">
              <div className="stat"><div className="v">$1.2T+</div><div className="l">Awarded in federal assistance each year</div></div>
              <div className="stat"><div className="v">2,400+</div><div className="l">Active federal grant &amp; assistance programs</div></div>
              <div className="stat"><div className="v">26</div><div className="l">Grant-making federal agencies</div></div>
              <div className="stat"><div className="v">$4.5B</div><div className="l">Set aside annually for SBIR / STTR alone</div></div>
            </div>
            <div className="stats-note">
              <div className="eyebrow">The opportunity is enormous — and the competition is procedural. Most strong applicants lose on compliance, not merit.</div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="band" id="services">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">What we do</div>
              <h2>Full-cycle grant and proposal advisory.</h2>
              <p>From identifying the right solicitation to a compliant, review-ready submission — Keystone runs the parts of the process where applications are won or lost.</p>
            </div>
            <div className="svc-grid">
              {services.map((s) => (
                <Link key={s.slug} className="svc" href={`/services/${s.slug}`}>
                  <div className="ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul>{s.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  <span className="svc-more">View service <ArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="band" id="process">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">How it works</div>
              <h2>A disciplined path from idea to award.</h2>
              <p>Every engagement runs the same structured sequence. You always know what stage you&apos;re in, what&apos;s due, and what&apos;s next.</p>
            </div>
            <div className="proc">
              {[
                { n: '01', h: 'Qualify', p: 'Confirm fit, eligibility, and the right solicitation. Honest go / no-go.' },
                { n: '02', h: 'Strategize', p: 'Win themes, reviewer criteria, budget shape, and a writing plan.' },
                { n: '03', h: 'Write', p: 'Narrative, work plan, budget, and every attachment — to spec.' },
                { n: '04', h: 'Comply', p: 'Line-by-line audit against the solicitation and scoring rubric.' },
                { n: '05', h: 'Submit', p: 'Package, submit, verify receipt — and prepare the next cycle.' },
              ].map((step) => (
                <div key={step.n} className="step">
                  <div className="n">{step.n}</div>
                  <div className="bar" />
                  <h4>{step.h}</h4>
                  <p>{step.p}</p>
                </div>
              ))}
            </div>
            <div className="proc-foot">
              <span className="eyebrow">Typical first cycle</span>
              <span style={{ color: 'var(--muted)', fontSize: '13.5px' }}>6–10 weeks, depending on solicitation complexity and readiness.</span>
            </div>
          </div>
        </section>

        {/* ENGAGEMENTS */}
        <section className="band" id="work">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">Engagements &amp; origin</div>
              <h2>The kind of work we take on.</h2>
              <p>Starting with our founder&apos;s own federal submission. The rest are representative of how Keystone engages across program types — illustrative scope and targets, not guaranteed outcomes.</p>
            </div>
            <div className="eng-grid">
              <Link className="eng" href="/services/opportunity-eligibility#case">
                <div className="eng-top">
                  <span className="eng-tag">Firsthand · USTRANSCOM CSO</span>
                  <h3>AxiomOps — our founder&apos;s own federal submission</h3>
                  <p>Before Keystone, our founder built AxiomOps and targeted a USTRANSCOM Commercial Solutions Opening himself — self-registering SAM.gov and submitting solo. That experience became this firm.</p>
                </div>
                <div className="eng-bot">
                  <div className="m"><div className="mv">Solo</div><div className="ml">Targeted, registered &amp; submitted alone</div></div>
                  <div className="m"><div className="mv">CSO</div><div className="ml">The right vehicle over a forced fit</div></div>
                </div>
              </Link>
              <Link className="eng" href="/services/proposal-development#case">
                <div className="eng-top">
                  <span className="eng-tag">NIH · R01</span>
                  <h3>Helix Therapeutics — science into a fundable proposal</h3>
                  <p>Compelling preclinical data, no proposal capacity. We restructured the application around the Specific Aims and review criteria and assembled a complete, compliant package.</p>
                </div>
                <div className="eng-bot">
                  <div className="m"><div className="mv">40 → 12</div><div className="ml">Pages distilled to a criteria-aligned narrative</div></div>
                  <div className="m"><div className="mv">1 wk</div><div className="ml">Buffer before the deadline</div></div>
                </div>
              </Link>
              <Link className="eng" href="/services/submission-systems#case">
                <div className="eng-top">
                  <span className="eng-tag">HHS · HRSA</span>
                  <h3>Meridian Community Health — cleared the federal plumbing</h3>
                  <p>A nonprofit FQHC with an inactive SAM registration and no UEI, three weeks out. We untangled the registrations and submitted four days early, receipt confirmed.</p>
                </div>
                <div className="eng-bot">
                  <div className="m"><div className="mv">3 wks</div><div className="ml">Inactive registration to on-time submission</div></div>
                  <div className="m"><div className="mv">4 days</div><div className="ml">Submitted ahead of deadline</div></div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="band" id="about">
          <div className="wrap">
            <div className="sec-head">
              <div className="eyebrow">About Keystone</div>
              <h2>The piece that holds the application together.</h2>
            </div>
            <div className="about-grid">
              <p className="about-statement">
                A keystone is the one stone that lets an arch carry weight. <b>That&apos;s the role we play</b> — the structural piece between a worthy organization and the agency deciding where public money goes. We bring the rigor, the process, and the procedural fluency so your ideas are judged on their merit, not lost on a technicality.
              </p>
              <div className="creds">
                {[
                  { title: 'Compliance-first method', sub: 'Every proposal audited to the solicitation', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /></svg> },
                  { title: "Reviewer's-eye reading", sub: 'We score your draft the way the panel will', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg> },
                  { title: 'Plain-language clarity', sub: 'Technical depth without the jargon fog', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h12" /></svg> },
                  { title: 'No-surprise process', sub: 'Clear stages, deadlines, and ownership', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg> },
                ].map((c) => (
                  <div key={c.title} className="cred">
                    <div className="ci">{c.icon}</div>
                    <div><div className="ct">{c.title}</div><div className="cs">{c.sub}</div></div>
                  </div>
                ))}
              </div>
            </div>

            <div className="founder">
              <div className="founder-photo">
                <Image src="/assets/founder.jpg" alt="Alexander Aguilar, Principal & Founder of Keystone" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} />
              </div>
              <div className="founder-body">
                <div className="eyebrow">Principal &amp; Founder</div>
                <h3>Alexander Aguilar</h3>
                <div className="founder-role">Full-stack developer · Operations technologist</div>
                <p>
                  Alex founded Keystone after living the federal process end to end. He built <b>AxiomOps</b> — an agentic, multi-agent AI platform for logistics operations — and then wrote and submitted its federal proposal himself.
                </p>
                <p>
                  That submission, a <b>USTRANSCOM Commercial Solutions Opening</b> targeting logistics optimization (AoI-902), meant registering the entity in SAM.gov, decoding the solicitation, and producing the technical white paper, budget, and briefing solo. Keystone exists so the next founder doesn&apos;t have to learn it the hard way.
                </p>
                <div className="founder-creds">
                  <span>Built AxiomOps · agentic AI</span>
                  <span>USTRANSCOM CSO · AoI-902</span>
                  <span>SAM.gov · UEI registered</span>
                  <span>Wrote &amp; submitted Phase I</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="band" id="contact">
          <div className="wrap">
            <div className="cta">
              <div className="cta-grid-bg" />
              <div>
                <h2>Tell us what you&apos;re applying for.</h2>
                <p>A 30-minute consultation to assess fit, map the right solicitation, and outline a path to a submission. No obligation.</p>
              </div>
              <div className="cta-side">
                <a href="mailto:hello@keystone.co" className="btn btn-primary btn-lg">
                  Book a consultation <ArrowRight />
                </a>
                <div className="line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="M4 8h16" /></svg>
                  Mon–Fri · responses within one business day
                </div>
                <div className="line">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  Las Vegas, NV · serving applicants nationwide
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTERNAL LAUNCH LINK */}
        <aside className="launch-link" aria-label="Internal: launch strategy">
          <div className="ll-in">
            <Link className="launch-poster" href="/marketing/launch-strategy">
              <span className="lp-thumb">
                <span className="lpg" />
                <span className="lpc">
                  <Image src="/assets/logo-mark-dark.png" alt="" width={15} height={15} />
                  <span className="lpt">Putting Keystone <em>on the map.</em></span>
                </span>
              </span>
              <span className="ll-copy">
                <span className="ll-k">Internal · Working document</span>
                <h3>Launch &amp; go-to-market strategy</h3>
                <p>Market study, positioning, channels, ad creative, launch film &amp; PR.</p>
              </span>
            </Link>
            <Link className="ll-cta" href="/marketing/launch-strategy">
              Open strategy <ArrowRight />
            </Link>
          </div>
        </aside>

      </main>
      <Footer />
    </>
  )
}
