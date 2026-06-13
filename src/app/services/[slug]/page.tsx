import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { getService, services } from '@/data/services'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) return {}
  return { title: `${s.title} — Keystone` }
}

const ArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const serviceIcons: Record<string, React.ReactNode> = {
  'opportunity-eligibility': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  'proposal-development': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><path d="M14 4v5h5M8 13h8M8 17h6" /></svg>,
  'compliance-review': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  'capture-strategy': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>,
  'submission-systems': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" /></svg>,
  'debrief-resubmission': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7M21 4v5h-5" /></svg>,
}

const receiveIcons: Record<string, React.ReactNode> = {
  doc: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11l5 5v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" /><path d="M14 4v5h5" /></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>,
  chart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg>,
  pin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="9" /></svg>,
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = getService(slug)
  if (!s) notFound()

  return (
    <>
      <Navbar currentSlug={slug} />
      <main>

        {/* HERO */}
        <section className="shero">
          <div className="shero-grid" />
          <div className="wrap shero-in">
            <div>
              <div className="crumb">
                <Link href="/">Keystone</Link>
                <span className="sep">/</span>
                <Link href="/#services">Services</Link>
                <span className="sep">/</span>
                <span className="cur">{s.title.replace("Don't write the wrong proposal.", "Opportunity & eligibility").replace("The proposal, written to spec.", "Proposal development")}</span>
              </div>
              <div className="scode">
                <span className="ic">{serviceIcons[s.slug]}</span>
                Service {s.num} · {s.category}
              </div>
              <h1>{s.title}</h1>
              <p className="lede">{s.lede}</p>
              <div className="shero-cta">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  {s.ctaLabel} <ArrowRight />
                </Link>
                <a href="#case" className="btn btn-ghost btn-lg">Read the case study</a>
              </div>
            </div>
            <div className="shero-side">
              <div className="sk">Best for</div>
              <div className="sv">{s.bestFor}</div>
              <div className="sk">Typical timeline</div>
              <div className="sv">{s.timeline}</div>
              <div className="sk">Agencies</div>
              <div className="sv">{s.agencies}</div>
            </div>
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">The challenge</span>
              <h2>{s.challengeTitle}</h2>
            </div>
            <div className="challenge">
              <div className="ctext">
                <p>{s.challengeP1}</p>
                <p dangerouslySetInnerHTML={{ __html: s.challengeP2 }} />
              </div>
              <div className="cstat">
                <div className="cv">{s.statValue}</div>
                <div className="cl">{s.statLabel}</div>
                <div className="cdiv" />
                <div className="csrc">SOURCE · {s.statSource}</div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What we do</span>
              <h2>{s.whatWeDoTitle}</h2>
              {s.whatWeDoSub && <p>{s.whatWeDoSub}</p>}
            </div>
            <div className="deliv">
              {s.deliverables.map((d) => (
                <div key={d.num} className="dcell">
                  <div className="dnum">{d.num}</div>
                  <h3>{d.title}</h3>
                  <p>{d.desc}</p>
                  <div className="dtags">{d.tags.map((t) => <span key={t}>{t}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">How it works</span>
              <h2>{s.processTitle}</h2>
            </div>
            <div className="miniproc">
              {s.steps.map((step) => (
                <div key={step.n} className="mp">
                  <div className="mpn">{step.n}</div>
                  <div>
                    <div className="mph">{step.title}</div>
                    <p className="mpd">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU RECEIVE */}
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">What you receive</span>
              <h2>{s.receiveTitle}</h2>
            </div>
            <div className="receive">
              {s.receive.map((r) => (
                <div key={r.title} className="rc">
                  <div className="ric">{receiveIcons[r.icon]}</div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CASE STUDY */}
        <section className="band" id="case">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">{s.caseEyebrow}</span>
              <h2>{s.caseTitle}</h2>
            </div>
            <div className="case">
              <div className="case-top">
                <div className="case-narr">
                  <span className="case-flag"><span className="dot" />{s.caseFlag}</span>
                  <div className="case-client">
                    <div className="cav">{s.caseAvatar}</div>
                    <div>
                      <div className="cc-n">{s.caseClientName}</div>
                      <div className="cc-s">{s.caseClientSub}</div>
                    </div>
                  </div>
                  {s.caseBlocks.map((b) => (
                    <div key={b.label} className="case-block">
                      <div className="cb-l">{b.label}</div>
                      <p className="cb-t" dangerouslySetInnerHTML={{ __html: b.text }} />
                    </div>
                  ))}
                </div>
                <div className="case-metrics">
                  {s.caseMetrics.map((m) => (
                    <div key={m.value} className="cm">
                      <div className="cmv">{m.value}</div>
                      <div className="cml">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="case-quote">
                <span className="qm">&ldquo;</span>
                <div>
                  <p className="qt">{s.caseQuote}</p>
                  <div className="qa">{s.caseAttrib}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        <section className="band">
          <div className="wrap">
            <div className="sec-head">
              <span className="eyebrow">Related services</span>
              <h2>{s.relatedTitle}</h2>
            </div>
            <div className="related">
              {s.related.map((r) => (
                <Link key={r.href} className="rel" href={r.href}>
                  <div>
                    <div className="rk">{r.code}</div>
                    <h4>{r.title}</h4>
                  </div>
                  <span className="arr"><ArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="band">
          <div className="wrap">
            <div className="cta">
              <div className="cta-grid-bg" />
              <div>
                <h2>{s.ctaTitle}</h2>
                <p>{s.ctaDesc}</p>
              </div>
              <div className="cta-side">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Book a consultation <ArrowRight />
                </Link>
                {s.ctaLines.map((line) => (
                  <div key={line} className="line">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer showDisclaimer />
    </>
  )
}
