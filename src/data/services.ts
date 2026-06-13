export interface ServiceData {
  slug: string
  num: string
  category: string
  title: string
  lede: string
  ctaLabel: string
  bestFor: string
  timeline: string
  agencies: string
  challengeTitle: string
  challengeP1: string
  challengeP2: string
  statValue: string
  statLabel: string
  statSource: string
  whatWeDoTitle: string
  whatWeDoSub: string
  deliverables: { num: string; title: string; desc: string; tags: string[] }[]
  processTitle: string
  steps: { n: string; title: string; desc: string }[]
  receiveTitle: string
  receive: { icon: string; title: string; desc: string }[]
  caseEyebrow: string
  caseTitle: string
  caseFlag: string
  caseAvatar: string
  caseClientName: string
  caseClientSub: string
  caseBlocks: { label: string; text: string }[]
  caseMetrics: { value: string; label: string }[]
  caseQuote: string
  caseAttrib: string
  relatedTitle: string
  related: { href: string; code: string; title: string }[]
  ctaTitle: string
  ctaDesc: string
  ctaLines: string[]
}

const ARROW_SVG = `M5 12h14M13 6l6 6-6 6`

export const services: ServiceData[] = [
  {
    slug: 'opportunity-eligibility',
    num: '01',
    category: 'Pre-award',
    title: "Don't write the wrong proposal.",
    lede: "Before a single page is drafted, we confirm you're pursuing the right program — one you're eligible for, competitive in, and that actually funds the work you do. The cheapest proposal to win is the one you never should have written.",
    ctaLabel: 'Assess my fit',
    bestFor: 'First-time applicants & teams weighing multiple programs',
    timeline: '1–2 weeks to a go / no-go decision',
    agencies: 'SBIR/STTR · NIH · NSF · DOE · USDA · DoD',
    challengeTitle: 'Most wasted grant effort happens before the writing starts.',
    challengeP1: 'Teams pour months into a proposal for a program they were never eligible for, or one where their work is a poor thematic fit — and the rejection says nothing about the quality of their idea.',
    challengeP2: '<b>The federal landscape is vast and badly signposted.</b> Thousands of active programs across 26 agencies, each with its own eligibility rules, set-asides, and unstated reviewer preferences. Choosing well is a research discipline, not a guess.',
    statValue: '2,400+',
    statLabel: 'Active federal grant & assistance programs an applicant must triage to find the right one.',
    statSource: 'USASPENDING / CFDA LISTINGS',
    whatWeDoTitle: 'A structured fit assessment.',
    whatWeDoSub: 'We evaluate your organization and your project against the live solicitation landscape and return a clear, defensible recommendation on where to compete.',
    deliverables: [
      { num: '01', title: 'Solicitation landscape scan', desc: 'We survey open and forecasted opportunities across the agencies that fund your domain, building a shortlist of programs worth your time.', tags: ['Grants.gov', 'SAM.gov', 'Agency forecasts'] },
      { num: '02', title: 'Eligibility verification', desc: 'Entity type, size standards, ownership, registration status, cost-share capacity — we confirm every gating requirement before you commit.', tags: ['Size standards', 'Set-asides', 'Cost share'] },
      { num: '03', title: 'Fit & competitiveness scoring', desc: 'We score each shortlisted program on thematic fit, your competitive position, award size, and probability — so trade-offs are explicit.', tags: ['Thematic fit', 'Win likelihood', 'Award size'] },
      { num: '04', title: 'Program & agency targeting', desc: 'For the lead candidate we map the program officer, review structure, typical award profile, and the cadence of future cycles.', tags: ['Program officer', 'Review model', 'Cycle calendar'] },
      { num: '05', title: 'Readiness gap check', desc: "We flag what you'll need before you can submit — registrations, letters, preliminary data, partners — so nothing surfaces at the deadline.", tags: ['Registrations', 'Partners', 'Prelim data'] },
      { num: '06', title: 'Go / no-go recommendation', desc: 'A plain, honest call: pursue, prepare-and-wait, or pass. If the answer is pass, we say so — and point you to a better-fit cycle.', tags: ['Decision memo', 'Rationale', 'Next cycle'] },
    ],
    processTitle: 'From a vague intention to a targeted decision.',
    steps: [
      { n: '01', title: 'Intake & objectives', desc: 'A working session to understand your technology or program, your organization, your funding goal, and your real constraints on time and cost-share.' },
      { n: '02', title: 'Landscape research', desc: 'We build the shortlist — open solicitations and forecasted cycles — and verify eligibility against each before anything reaches you.' },
      { n: '03', title: 'Scoring & comparison', desc: 'Each candidate is scored on the same rubric so you can weigh a large, competitive award against a smaller, near-certain one with eyes open.' },
      { n: '04', title: 'Recommendation & roadmap', desc: 'We deliver the go / no-go memo and, for a "go," a one-page roadmap to a submission-ready proposal in the chosen cycle.' },
    ],
    receiveTitle: 'Tangible artifacts, not a verbal opinion.',
    receive: [
      { icon: 'doc', title: 'Opportunity shortlist', desc: 'A ranked table of viable programs with eligibility status, award range, deadlines, and fit score.' },
      { icon: 'check', title: 'Eligibility report', desc: 'A documented check against every gating requirement for the lead program — no nasty surprises later.' },
      { icon: 'chart', title: 'Go / no-go memo', desc: 'A one-page decision with the reasoning, recommended cycle, and the readiness gaps to close first.' },
    ],
    caseEyebrow: 'Firsthand · From our founder',
    caseTitle: 'Our founder learned program targeting the hard way.',
    caseFlag: 'Firsthand · Founder story',
    caseAvatar: 'AX',
    caseClientName: 'AxiomOps',
    caseClientSub: "Built by Keystone's founder · Agentic AI for logistics",
    caseBlocks: [
      { label: 'The situation', text: 'Before Keystone, founder <b>Alexander Aguilar</b> built <b>AxiomOps</b> — an agentic, multi-agent AI platform for logistics operations — and set out to fund it federally as a first-time applicant: no proposal experience, and a maze of programs to choose from.' },
      { label: 'What he learned', text: "The highest-leverage decision wasn't the writing — it was the <b>vehicle</b>. Rather than force the platform into an ill-fitting grant, he targeted a <b>USTRANSCOM Commercial Solutions Opening</b> (AoI-902, logistics optimization) — a far better fit for a dual-use logistics tool." },
      { label: 'What he did', text: 'He verified eligibility, <b>registered the entity in SAM.gov</b> and secured a UEI, decoded the solicitation, and wrote and submitted the proposal solo — the exact gauntlet this service now runs for you, so you don\'t face it alone.' },
    ],
    caseMetrics: [
      { value: 'Solo', label: 'Targeted, registered, and submitted without a consultant — the hard way' },
      { value: 'CSO', label: 'Chose a Commercial Solutions Opening over a poorly-fitting grant vehicle' },
      { value: 'AoI-902', label: 'Logistics optimization — a true fit for the platform, not a forced one' },
    ],
    caseQuote: "I taught myself which federal door to knock on — and learned that picking the right program is half the battle. Keystone exists so you don't have to learn it solo.",
    caseAttrib: '— Alexander Aguilar, Founder, Keystone',
    relatedTitle: 'The next steps after a "go".',
    related: [
      { href: '/services/capture-strategy', code: 'Service 04', title: 'Capture & strategy' },
      { href: '/services/proposal-development', code: 'Service 02', title: 'Proposal development' },
    ],
    ctaTitle: "Not sure you're aiming at the right program?",
    ctaDesc: "That's exactly the question this service answers. A short consultation, an honest read on fit — before you invest in writing.",
    ctaLines: ['Honest go / no-go — we\'ll tell you to pass if you should', 'Decision in 1–2 weeks'],
  },
  {
    slug: 'proposal-development',
    num: '02',
    category: 'Development',
    title: 'The proposal, written to spec.',
    lede: 'We turn a strong idea and a pile of requirements into a complete, persuasive, fully-compliant application — narrative, work plan, budget, and every form the solicitation demands.',
    ctaLabel: 'Discuss my proposal',
    bestFor: 'Teams without in-house proposal capacity',
    timeline: '4–8 weeks per submission',
    agencies: 'NIH · NSF · DOE · SBIR/STTR',
    challengeTitle: 'A brilliant project and a blank proposal are not the same thing.',
    challengeP1: "Reviewers don't fund the work you do — they fund the proposal in front of them. A weak narrative, a misaligned budget, or a missing Specific Aim can sink genuinely excellent science.",
    challengeP2: '<b>Writing to a federal solicitation is its own craft.</b> It means answering the exact review criteria, in the structure reviewers expect, with the evidence they weight most — under a strict page and format limit.',
    statValue: '25–40',
    statLabel: 'Distinct attachments, forms, and certifications a typical federal application requires — each with its own rules.',
    statSource: 'TYPICAL NIH / GRANTS.GOV PACKAGE',
    whatWeDoTitle: 'We write and assemble the whole package.',
    whatWeDoSub: "From the first outline to the final assembled submission, we own the document — working from your science and data, in your voice, to the agency's specification.",
    deliverables: [
      { num: '01', title: 'Narrative & specific aims', desc: 'We draft the technical and project narrative — aims, significance, innovation, approach — built around the criteria reviewers actually score.', tags: ['Significance', 'Innovation', 'Approach'] },
      { num: '02', title: 'Work plan & timeline', desc: 'A credible, milestone-driven plan that shows the work is feasible within the period and budget of performance.', tags: ['Milestones', 'Gantt', 'Feasibility'] },
      { num: '03', title: 'Budget & justification', desc: "A defensible budget tied line-by-line to the work, with a justification that survives a program officer's scrutiny.", tags: ['Direct costs', 'Justification', 'Cost share'] },
      { num: '04', title: 'Forms & certifications', desc: 'Every required form, representation, and certification completed correctly — the unglamorous part that disqualifies the unwary.', tags: ['SF-424', 'Reps & certs', 'Attachments'] },
      { num: '05', title: 'Biosketches & support', desc: "We format biosketches, current-and-pending support, and facilities documents to the agency's current templates.", tags: ['Biosketch', 'Other support', 'Facilities'] },
      { num: '06', title: 'Letters & supporting docs', desc: 'We coordinate letters of support, data-management plans, and any solicitation-specific attachments.', tags: ['Letters', 'DMP', 'Appendices'] },
    ],
    processTitle: 'A managed writing process, not a scramble.',
    steps: [
      { n: '01', title: 'Outline & criteria map', desc: 'We reverse-engineer the solicitation into an outline mapped to every review criterion and scoring factor before drafting a word.' },
      { n: '02', title: 'Drafting in passes', desc: 'We draft section by section, reviewing with you at each pass so the science stays accurate and the argument stays sharp.' },
      { n: '03', title: 'Budget & forms build', desc: 'In parallel we build the budget, justification, and full forms package so nothing is left for the final week.' },
      { n: '04', title: 'Assembly & internal review', desc: 'We assemble the complete application and run an internal read against the criteria before handing off to compliance review.' },
    ],
    receiveTitle: 'A complete, submission-ready application.',
    receive: [
      { icon: 'doc', title: 'Full proposal narrative', desc: "The complete technical and project narrative, drafted to the solicitation's structure and page limits." },
      { icon: 'chart', title: 'Budget & justification', desc: 'A line-item budget workbook with a written justification tied to each cost.' },
      { icon: 'check', title: 'Assembled forms package', desc: 'Every form, certification, and attachment, completed and organized for submission.' },
    ],
    caseEyebrow: 'Representative engagement',
    caseTitle: "Helix Therapeutics had the science. They didn't have the proposal.",
    caseFlag: 'Representative engagement',
    caseAvatar: 'HX',
    caseClientName: 'Helix Therapeutics',
    caseClientSub: 'Immunology biotech · NIH R01 applicant',
    caseBlocks: [
      { label: 'The situation', text: 'Helix, a small immunology team spun out of an academic lab, had compelling preclinical data for a novel autoimmune therapy and a looming <b>NIH R01</b> deadline — but no one with the bandwidth or experience to write the application.' },
      { label: 'What we found', text: "Their science was strong; their draft was a 40-page dump of methods with no narrative arc, a budget that didn't match the aims, and three missing required documents. Reviewers would never reach the merit." },
      { label: 'What we did', text: "We restructured the application around the <b>Specific Aims</b> and review criteria, rewrote significance and approach for a study-section audience, rebuilt the budget to match the work, and assembled a complete, compliant package — handed off with a week to spare." },
    ],
    caseMetrics: [
      { value: '40 → 12', label: 'Pages of unstructured methods distilled into a focused, criteria-aligned narrative' },
      { value: '100%', label: 'Required documents complete at submission — three were missing at intake' },
      { value: '1 wk', label: 'Buffer before deadline — no last-night scramble' },
    ],
    caseQuote: "Our data was always good. Keystone made the application as good as the science — and got it in early enough that we slept the night before the deadline.",
    caseAttrib: '— Co-founder & CSO, Helix Therapeutics (representative)',
    relatedTitle: 'Before you write, and after.',
    related: [
      { href: '/services/capture-strategy', code: 'Service 04', title: 'Capture & strategy' },
      { href: '/services/compliance-review', code: 'Service 03', title: 'Compliance review' },
    ],
    ctaTitle: 'Have the idea but not the proposal?',
    ctaDesc: "That's the gap we fill. Bring us your science and your solicitation — we'll bring the application.",
    ctaLines: ["Written in your voice, to the agency's spec", 'Typical first draft in 2–3 weeks'],
  },
  {
    slug: 'compliance-review',
    num: '03',
    category: 'Quality gate',
    title: 'Win on merit, not technicalities.',
    lede: "A line-by-line audit of your proposal against the solicitation and the scoring rubric — so a format slip, a page overage, or a missing certification never costs you an award you earned.",
    ctaLabel: 'Request a review',
    bestFor: 'Teams submitting a proposal they wrote themselves',
    timeline: '3–5 days per review',
    agencies: 'NSF · NIH · DOE · DoD · State',
    challengeTitle: 'Reviewers reject for compliance long before they judge on merit.',
    challengeP1: "A margin that's too narrow, a font half a point too small, a missing biosketch, an ineligible cost — any one can move a proposal straight to the rejection pile, unread on the merits.",
    challengeP2: "<b>Compliance is the easiest points to keep and the easiest to lose.</b> The rules are knowable and exact, but they're scattered across the solicitation, the agency guide, and the forms — and they change between cycles.",
    statValue: '~25%',
    statLabel: 'Of submissions are commonly returned without review for administrative or compliance errors — wholly avoidable losses.',
    statSource: 'AGENCY APPLICANT GUIDANCE, TYPICAL',
    whatWeDoTitle: "We read your proposal the way the reviewer's checklist does.",
    whatWeDoSub: "Before you submit, we cross-walk every requirement in the solicitation against your draft and flag every gap — fatal, scoring, and cosmetic — with a fix for each.",
    deliverables: [
      { num: '01', title: 'Solicitation cross-walk', desc: 'We build a requirement-by-requirement matrix from the solicitation and check your proposal against every line.', tags: ['Requirement matrix', 'Gap log', 'Sign-off'] },
      { num: '02', title: 'Eligibility & registration audit', desc: "We re-confirm entity eligibility, size standards, and that SAM/Grants.gov registrations are active and won't lapse before the deadline.", tags: ['Eligibility', 'SAM status', 'Renewals'] },
      { num: '03', title: 'Format & page compliance', desc: 'Margins, fonts, line spacing, page limits, file types and naming — checked against the exact current rules.', tags: ['Page limits', 'Fonts', 'File specs'] },
      { num: '04', title: 'Reviewer-criteria audit', desc: 'We score your draft against the published review criteria and flag where it under-answers what panels weight most.', tags: ['Scoring rubric', 'Weighting', 'Evidence'] },
      { num: '05', title: 'Budget & cost compliance', desc: "We check allowability, cost-share math, indirect rates, and that the budget narrative matches the numbers.", tags: ['Allowability', 'Indirect', 'Cost share'] },
      { num: '06', title: 'Forms & certification check', desc: 'Every required form, rep, and certification verified present, current, and correctly completed.', tags: ['Forms', 'Reps & certs', 'Signatures'] },
    ],
    processTitle: 'A clean gate between draft and submission.',
    steps: [
      { n: '01', title: 'Requirement extraction', desc: 'We pull every "must," "shall," and limit from the solicitation and agency guide into a single compliance matrix.' },
      { n: '02', title: 'Line-by-line audit', desc: 'We check the proposal against the matrix, classifying each finding as fatal, scoring, or cosmetic.' },
      { n: '03', title: 'Findings & fixes', desc: 'You get a prioritized findings report — every issue paired with a specific, actionable fix.' },
      { n: '04', title: 'Re-check & sign-off', desc: 'After you correct, we re-verify the fixes and give a final pre-submission sign-off.' },
    ],
    receiveTitle: 'A documented, defensible compliance pass.',
    receive: [
      { icon: 'check', title: 'Compliance matrix', desc: 'The full requirement-by-requirement cross-walk with each item marked pass or fix.' },
      { icon: 'doc', title: 'Findings report', desc: 'A prioritized list of every issue — fatal, scoring, cosmetic — with a fix for each.' },
      { icon: 'shield', title: 'Pre-submission sign-off', desc: 'A final verification that the corrected proposal meets every gating requirement.' },
    ],
    caseEyebrow: 'Representative engagement',
    caseTitle: 'Cascade Materials was one formatting rule from disqualification.',
    caseFlag: 'Representative engagement',
    caseAvatar: 'CM',
    caseClientName: 'Cascade Materials',
    caseClientSub: 'Advanced materials · NSF proposal',
    caseBlocks: [
      { label: 'The situation', text: 'Cascade, a materials-science team pursuing an <b>NSF</b> award, had written a strong proposal in-house and was a day from submitting. They asked us for a final compliance check "just to be safe."' },
      { label: 'What we found', text: 'The cross-walk caught three issues that would have returned the proposal without review: the project description ran half a page over the limit, a required data-management plan was missing, and the biosketches used a retired format. None touched the science — all were fatal.' },
      { label: 'What we did', text: 'We flagged each with a fix, trimmed the overage without losing substance, supplied a compliant DMP template, and reformatted the biosketches to the current NSF version — then re-verified before sign-off.' },
    ],
    caseMetrics: [
      { value: '3', label: 'Fatal compliance issues caught with a day to spare — any one disqualifying' },
      { value: '0', label: 'Substance lost trimming the half-page overage' },
      { value: '< 5 days', label: 'From clean-up request to a verified, submission-ready proposal' },
    ],
    caseQuote: "We thought we were done. The review found three things that would have gotten us thrown out before a reviewer read a sentence. Cheapest insurance we've ever bought.",
    caseAttrib: '— Principal Investigator, Cascade Materials (representative)',
    relatedTitle: 'The work on either side of the gate.',
    related: [
      { href: '/services/proposal-development', code: 'Service 02', title: 'Proposal development' },
      { href: '/services/submission-systems', code: 'Service 05', title: 'Submission & systems' },
    ],
    ctaTitle: 'About to submit something you wrote yourself?',
    ctaDesc: 'Let us run the compliance gate first. A few days now beats a returned-without-review notice later.',
    ctaLines: ['Every "must" in the solicitation, verified', 'Turnaround in 3–5 days'],
  },
  {
    slug: 'capture-strategy',
    num: '04',
    category: 'Strategy',
    title: 'Stronger every cycle.',
    lede: 'Positioning, win themes, and a multi-cycle roadmap — so each submission builds on the last and your program becomes a known, fundable quantity to the agency over time.',
    ctaLabel: 'Map my strategy',
    bestFor: 'Organizations pursuing funding as a long-term program',
    timeline: 'Ongoing / per cycle',
    agencies: 'DOE · ARPA-E · DoD · NSF',
    challengeTitle: 'One-off proposals leave compounding advantage on the table.',
    challengeP1: "Treating each application as an isolated sprint means re-learning the agency every time, never building relationships with program officers, and never turning a near-miss into next cycle's win.",
    challengeP2: "<b>The strongest applicants run a capture program, not a proposal.</b> They position early, shape their narrative to the agency's priorities, and sequence Phase I toward Phase II and beyond.",
    statValue: '3×',
    statLabel: 'Phase II and follow-on funding can dwarf an initial Phase I award — capture is what makes that path deliberate.',
    statSource: 'SBIR/STTR PROGRAM STRUCTURE',
    whatWeDoTitle: 'We treat your funding as a campaign.',
    whatWeDoSub: 'We develop the positioning and win themes that make your proposals coherent and memorable, and a roadmap that sequences cycles toward the largest, most strategic awards.',
    deliverables: [
      { num: '01', title: 'Win-theme development', desc: 'We distill your differentiators into a small set of repeatable win themes that thread through every proposal.', tags: ['Differentiators', 'Themes', 'Messaging'] },
      { num: '02', title: 'Competitive positioning', desc: "We assess who else competes for these dollars and position your work where it's strongest and least crowded.", tags: ['Landscape', 'White space', 'Edge'] },
      { num: '03', title: 'Agency & PO engagement', desc: 'We help you engage program officers appropriately — the legitimate pre-proposal contact that shapes a fundable idea.', tags: ['Program officers', 'Pre-proposal', 'Relationships'] },
      { num: '04', title: 'Phase I → II roadmap', desc: 'We sequence your submissions so a Phase I is designed from day one to enable a competitive Phase II.', tags: ['Sequencing', 'Phase II', 'Commercialization'] },
      { num: '05', title: 'Portfolio planning', desc: 'For teams chasing several programs, we plan the portfolio so effort goes where expected value is highest.', tags: ['Portfolio', 'Prioritization', 'Cadence'] },
      { num: '06', title: 'Win/loss learning loop', desc: "Every outcome feeds the next cycle — what scored, what didn't, and what to change.", tags: ['Debrief', 'Iteration', 'Improvement'] },
    ],
    processTitle: 'Strategy that compounds across cycles.',
    steps: [
      { n: '01', title: 'Position & differentiate', desc: 'We define what makes your work fundable and where it wins, grounding the win themes in evidence.' },
      { n: '02', title: 'Map the multi-cycle path', desc: 'We lay out the sequence of programs and phases that move you toward the largest strategic awards.' },
      { n: '03', title: 'Engage & shape', desc: 'We guide legitimate program-officer engagement so your idea is shaped to agency priorities before you write.' },
      { n: '04', title: 'Review & re-aim', desc: 'After each cycle we fold the outcome back into the strategy and sharpen the next move.' },
    ],
    receiveTitle: 'A strategy you can run, not a slide deck.',
    receive: [
      { icon: 'chart', title: 'Win-theme framework', desc: 'A documented set of differentiators and win themes to thread through every proposal.' },
      { icon: 'pin', title: 'Capture roadmap', desc: 'A multi-cycle plan sequencing programs and phases toward your strategic targets.' },
      { icon: 'doc', title: 'Positioning brief', desc: 'A competitive read and the white space where your work is strongest.' },
    ],
    caseEyebrow: 'Representative engagement',
    caseTitle: 'Solara Grid stopped applying and started capturing.',
    caseFlag: 'Representative engagement',
    caseAvatar: 'SG',
    caseClientName: 'Solara Grid',
    caseClientSub: 'Long-duration energy storage · DOE / ARPA-E',
    caseBlocks: [
      { label: 'The situation', text: 'Solara, a grid-storage startup, had submitted to <b>DOE</b> programs twice as one-off efforts and missed both times — each application a from-scratch scramble with no through-line.' },
      { label: 'What we found', text: 'There was no consistent positioning, no relationship with program officers, and the two proposals told different stories about the same technology. Reviewers saw an unfocused team, not a fundable program.' },
      { label: 'What we did', text: 'We built a win-theme framework around their long-duration differentiator, engaged the relevant program office appropriately ahead of the next cycle, and designed their Phase I to set up a specific, larger Phase II — turning scattered shots into a sequenced campaign.' },
    ],
    caseMetrics: [
      { value: '2 → 1', label: 'Scattered one-off proposals replaced by a single sequenced capture plan' },
      { value: 'Phase II', label: 'Designed into the Phase I from day one, not improvised later' },
      { value: '1 voice', label: 'Consistent positioning across every submission and PO conversation' },
    ],
    caseQuote: "We'd been treating each grant like a lottery ticket. Keystone turned it into a strategy — same technology, but now the agency sees a program worth backing.",
    caseAttrib: '— CEO, Solara Grid (representative)',
    relatedTitle: 'Where strategy begins and continues.',
    related: [
      { href: '/services/opportunity-eligibility', code: 'Service 01', title: 'Opportunity & eligibility' },
      { href: '/services/debrief-resubmission', code: 'Service 06', title: 'Debrief & resubmission' },
    ],
    ctaTitle: 'Applying once, or building a funding program?',
    ctaDesc: "If federal funding is core to your roadmap, capture strategy is how you compound your odds. Let's map the campaign.",
    ctaLines: ['Positioning that carries across every cycle', 'Phase I designed to enable Phase II'],
  },
  {
    slug: 'submission-systems',
    num: '05',
    category: 'Submission',
    title: 'Through the federal plumbing.',
    lede: 'Registration, packaging, and submission through SAM.gov, Grants.gov, and agency portals — the brittle, deadline-critical machinery where good proposals die of technicalities. We run it and confirm receipt.',
    ctaLabel: 'Start my registrations',
    bestFor: 'First-time submitters & teams new to federal portals',
    timeline: 'Allow 3–5 weeks for registrations',
    agencies: 'All Grants.gov & SAM.gov programs',
    challengeTitle: 'The last mile is where deadlines are missed.',
    challengeP1: 'A finished proposal still has to clear SAM.gov registration, an active UEI, a Grants.gov workspace, role assignments, file-format rules, and a submission process that can reject a package at 11:58 PM for a reason no one anticipated.',
    challengeP2: '<b>Registrations alone can take weeks.</b> SAM.gov validation, UEI issuance, and authorized-organization-representative roles are slow, sequential, and unforgiving — and they expire.',
    statValue: '2–5 wks',
    statLabel: 'Typical lead time to complete SAM.gov registration and validation before an entity can even submit.',
    statSource: 'SAM.GOV REGISTRATION GUIDANCE',
    whatWeDoTitle: 'We own the submission machinery end to end.',
    whatWeDoSub: 'From first-time registration to verified receipt, we handle the federal systems so a portal quirk or an expired registration never stands between your work and the deadline.',
    deliverables: [
      { num: '01', title: 'SAM.gov & UEI setup', desc: 'We complete or renew SAM.gov registration and secure your Unique Entity ID — the gate to every federal submission.', tags: ['SAM.gov', 'UEI', 'Validation'] },
      { num: '02', title: 'Grants.gov workspace', desc: 'We set up the workspace, assign roles, and configure the application package correctly the first time.', tags: ['Workspace', 'AOR roles', 'Package'] },
      { num: '03', title: 'Portal-specific submission', desc: 'Many agencies use their own systems — eRA Commons, Research.gov, ASSIST. We submit through the right one, correctly.', tags: ['eRA Commons', 'Research.gov', 'ASSIST'] },
      { num: '04', title: 'File packaging & validation', desc: 'We assemble attachments to the exact format, naming, and size rules and clear every validation error before submission.', tags: ['File specs', 'Naming', 'Validation'] },
      { num: '05', title: 'Submission & confirmation', desc: 'We submit ahead of the deadline and capture the tracking number and agency confirmation as proof of on-time receipt.', tags: ['Tracking #', 'Receipt', 'Timestamp'] },
      { num: '06', title: 'Renewal monitoring', desc: 'We track registration expirations so a lapsed SAM record never blocks a future cycle.', tags: ['Expirations', 'Renewals', 'Alerts'] },
    ],
    processTitle: 'A deadline you actually hit.',
    steps: [
      { n: '01', title: 'Registration audit', desc: 'We check the status of every required registration and start renewals early — weeks before they\'re needed.' },
      { n: '02', title: 'Package configuration', desc: 'We build the submission package in the right system with correct roles and validated files.' },
      { n: '03', title: 'Early submission', desc: 'We submit ahead of the deadline, leaving room to resolve any portal error without panic.' },
      { n: '04', title: 'Receipt verification', desc: 'We confirm and document agency receipt so you have proof the package landed on time.' },
    ],
    receiveTitle: 'Proof your proposal landed on time.',
    receive: [
      { icon: 'check', title: 'Active registrations', desc: 'SAM.gov, UEI, and portal roles confirmed active and current through your deadline.' },
      { icon: 'doc', title: 'Validated package', desc: 'Every file assembled to spec and cleared of validation errors before submission.' },
      { icon: 'clock', title: 'Receipt confirmation', desc: 'The tracking number and agency timestamp documenting on-time submission.' },
    ],
    caseEyebrow: 'Representative engagement',
    caseTitle: 'Meridian Community Health nearly missed on registration alone.',
    caseFlag: 'Representative engagement',
    caseAvatar: 'MC',
    caseClientName: 'Meridian Community Health',
    caseClientSub: 'Federally Qualified Health Center · HHS / HRSA',
    caseBlocks: [
      { label: 'The situation', text: 'Meridian, a nonprofit FQHC pursuing an <b>HRSA</b> service-expansion grant, had a strong program narrative but had never submitted federally — and assumed registration was a same-week task.' },
      { label: 'What we found', text: 'Their SAM.gov registration was inactive, they had no UEI, and no authorized organization representative was assigned in Grants.gov. With three weeks to the deadline, the plumbing — not the proposal — was the real risk.' },
      { label: 'What we did', text: 'We triaged the registrations immediately, expedited SAM validation and UEI issuance, assigned AOR roles, configured the Grants.gov workspace, validated the package, and submitted four days early — with the confirmation captured.' },
    ],
    caseMetrics: [
      { value: '3 wks', label: 'From inactive registration to a verified, on-time federal submission' },
      { value: '4 days', label: 'Submitted ahead of deadline — buffer for any portal error' },
      { value: '100%', label: 'Receipt confirmed and documented — no ambiguity about on-time filing' },
    ],
    caseQuote: "We almost lost the grant before writing a word of it — purely on registration. Keystone untangled the federal systems and got us in days early.",
    caseAttrib: '— Executive Director, Meridian Community Health (representative)',
    relatedTitle: 'Before the package goes out.',
    related: [
      { href: '/services/compliance-review', code: 'Service 03', title: 'Compliance review' },
      { href: '/services/opportunity-eligibility', code: 'Service 01', title: 'Opportunity & eligibility' },
    ],
    ctaTitle: 'First federal submission? Start the registrations now.',
    ctaDesc: "SAM.gov and UEI can take weeks. The earlier we start the plumbing, the less it can threaten your deadline.",
    ctaLines: ['Registrations handled, roles assigned', 'Submitted early, receipt confirmed'],
  },
  {
    slug: 'debrief-resubmission',
    num: '06',
    category: 'Post-award',
    title: 'Turn a loss into a win.',
    lede: "A rejection is data. We read the reviewer comments, find exactly what scored low, fix it, and turn a near-miss into a stronger, resubmission-ready proposal for the next cycle.",
    ctaLabel: 'Review my feedback',
    bestFor: "Applicants who weren't funded and want to try again",
    timeline: '2–4 weeks to a revision plan',
    agencies: 'USDA · NIH · NSF · DOE · SBIR/STTR',
    challengeTitle: 'Most rejected proposals were close — and most applicants give up anyway.',
    challengeP1: 'A "not funded" rarely means "not fundable." Many strong proposals miss by a few points on one or two criteria — and the summary statement says exactly which ones.',
    challengeP2: '<b>The reviewer feedback is a roadmap most applicants never use.</b> Read closely, it tells you precisely what to strengthen — but it takes a dispassionate eye to act on criticism of your own work.',
    statValue: 'Often funded',
    statLabel: 'Many programs fund a meaningful share of resubmissions that directly address prior reviewer concerns.',
    statSource: 'TYPICAL FEDERAL RESUBMISSION PATTERNS',
    whatWeDoTitle: 'We mine the feedback and rebuild what scored low.',
    whatWeDoSub: "We translate the summary statement into a concrete revision plan, rewrite the weak sections, and position the resubmission to answer the panel's concerns head-on.",
    deliverables: [
      { num: '01', title: 'Reviewer-comment analysis', desc: 'We parse the summary statement line by line, separating fixable criticism from noise and ranking issues by scoring impact.', tags: ['Summary statement', 'Scoring', 'Triage'] },
      { num: '02', title: 'Score-gap diagnosis', desc: 'We pinpoint which criteria cost you the award and why — approach, significance, feasibility, budget, or fit.', tags: ['Criteria', 'Root cause', 'Priority'] },
      { num: '03', title: 'Targeted revision', desc: "We rewrite the sections that scored low, keeping what worked and strengthening what didn't.", tags: ['Rewrite', 'Evidence', 'Clarity'] },
      { num: '04', title: 'Response-to-reviewers', desc: 'Where the program allows, we draft the introduction that explicitly addresses prior concerns — a scored element in its own right.', tags: ['Intro', 'Point-by-point', 'Tone'] },
      { num: '05', title: 'New-data integration', desc: 'We work in any new preliminary data or progress since the last cycle to answer feasibility doubts.', tags: ['Prelim data', 'Progress', 'Feasibility'] },
      { num: '06', title: 'Resubmission planning', desc: 'We confirm the right cycle and any resubmission rules, and sequence the work to hit it comfortably.', tags: ['Cycle', 'Eligibility', 'Timeline'] },
    ],
    processTitle: 'From rejection to a sharper second shot.',
    steps: [
      { n: '01', title: 'Read the verdict', desc: "We analyze the summary statement and scores to understand exactly why the proposal wasn't funded." },
      { n: '02', title: 'Diagnose the gaps', desc: "We rank the issues by how much they cost you and decide what must change versus what's already strong." },
      { n: '03', title: 'Rebuild & respond', desc: 'We rewrite the weak sections and, where allowed, draft the explicit response to prior reviews.' },
      { n: '04', title: 'Re-aim & resubmit', desc: 'We confirm the cycle and resubmission rules and prepare a stronger, compliant package.' },
    ],
    receiveTitle: 'A clear path from "not funded" to "fundable."',
    receive: [
      { icon: 'doc', title: 'Feedback analysis', desc: 'A structured read of the summary statement, ranking every concern by scoring impact.' },
      { icon: 'chart', title: 'Revision plan', desc: 'A prioritized plan of exactly what to change before resubmitting.' },
      { icon: 'check', title: 'Resubmission package', desc: 'The rewritten, compliant proposal with a response-to-reviewers where permitted.' },
    ],
    caseEyebrow: 'Representative engagement',
    caseTitle: 'TerraGrain missed by a few points. The next cycle was different.',
    caseFlag: 'Representative engagement',
    caseAvatar: 'TG',
    caseClientName: 'TerraGrain AgriSystems',
    caseClientSub: 'Precision agriculture · USDA NIFA / SBIR',
    caseBlocks: [
      { label: 'The situation', text: 'TerraGrain, an ag-tech startup with a soil-sensing platform, was <b>not funded</b> on its first USDA NIFA SBIR attempt and assumed the idea had been rejected outright.' },
      { label: 'What we found', text: "The summary statement told a different story: strong significance and team, but a low approach score over an under-specified validation plan and a feasibility doubt the budget didn't address. The idea was fundable — the proposal wasn't yet." },
      { label: 'What we did', text: "We diagnosed the score gaps, rewrote the approach with a detailed validation methodology, folded in new field data gathered since submission, drafted a response addressing each prior concern, and prepared a compliant resubmission for the next cycle." },
    ],
    caseMetrics: [
      { value: '1 → 3', label: 'Low-scoring criteria reduced to addressed, evidenced sections' },
      { value: 'New data', label: 'Field results gathered since the last cycle, integrated to answer feasibility doubts' },
      { value: '1 cycle', label: 'From rejection to a stronger, resubmission-ready proposal' },
    ],
    caseQuote: "We'd written it off as a no. Keystone showed us the reviewers had basically handed us the fixes — we just hadn't read them that way.",
    caseAttrib: '— Founder, TerraGrain AgriSystems (representative)',
    relatedTitle: 'Rebuild, then aim higher.',
    related: [
      { href: '/services/proposal-development', code: 'Service 02', title: 'Proposal development' },
      { href: '/services/capture-strategy', code: 'Service 04', title: 'Capture & strategy' },
    ],
    ctaTitle: 'Got a "not funded" you think was close?',
    ctaDesc: "Send us the summary statement. We'll tell you honestly whether a resubmission is worth it — and exactly what to change if it is.",
    ctaLines: ['An honest read on whether to try again', 'Revision plan in 2–4 weeks'],
  },
]

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug)
}
