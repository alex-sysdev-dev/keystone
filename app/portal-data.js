/* Keystone Portal — demo data (plain JS, attached to window) */
window.PortalData = {
  user: { name: "Dr. Elena Park", initials: "EP", role: "Principal Investigator", org: "Helix Therapeutics" },

  manager: { name: "Alexander Aguilar", initials: "AA", role: "Your Keystone lead" },

  proposal: {
    id: "KS-2041",
    title: "Novel Autoimmune Therapy",
    agency: "NIH",
    institute: "NIAID",
    mechanism: "R01",
    solicitation: "PA-25-303",
    ceiling: "$2.4M",
    period: "5 years",
    due: "2026-07-21T17:00:00",
    submittedVia: "eRA Commons · ASSIST",
    stageIndex: 2, // 0-based across the 5 stages
  },

  stages: [
    { n: "01", t: "Qualify", d: "Fit & eligibility confirmed" },
    { n: "02", t: "Strategize", d: "Aims, win themes, budget shape" },
    { n: "03", t: "Write", d: "Narrative & attachments in draft" },
    { n: "04", t: "Comply", d: "Cross-walk & rubric audit" },
    { n: "05", t: "Submit", d: "Package, submit, verify receipt" },
  ],

  compliance: [
    { group: "Eligibility", items: [
      { t: "Entity type & PI eligibility", d: "Confirmed against PA-25-303", s: "pass" },
      { t: "SAM.gov registration active", d: "Renews 03/2027", s: "pass" },
      { t: "eRA Commons accounts", d: "PI + SO roles assigned", s: "pass" },
    ]},
    { group: "Format & page limits", items: [
      { t: "Research strategy ≤ 12 pages", d: "Currently 12.5 — trim required", s: "fix" },
      { t: "Font & margin compliance", d: "Arial 11, 0.5in margins", s: "pass" },
      { t: "File naming & PDF flattening", d: "Verified on last assembly", s: "pass" },
    ]},
    { group: "Forms & certifications", items: [
      { t: "SF-424 (R&R) complete", d: "All required fields", s: "pass" },
      { t: "Data management & sharing plan", d: "Required for this NOFO", s: "fix" },
      { t: "Human subjects & clinical trial info", d: "Delayed-onset justified", s: "pass" },
    ]},
    { group: "Narrative", items: [
      { t: "Specific Aims (1 page)", d: "Approved by you", s: "pass" },
      { t: "Significance & Innovation", d: "Reviewer-criteria aligned", s: "pass" },
      { t: "Approach — rigor & feasibility", d: "Reviewer-criteria aligned", s: "pass" },
    ]},
    { group: "Budget", items: [
      { t: "Detailed budget & justification", d: "Tied to aims", s: "pass" },
      { t: "Indirect (F&A) rate applied", d: "Negotiated rate on file", s: "pass" },
      { t: "Subaward & consortium budgets", d: "Single-site — none required", s: "pass" },
    ]},
  ],

  documents: [
    { id: "DOC-114", name: "Research Strategy — v6", type: "Narrative", ext: "DOCX", s: "review", ver: "6", updated: "2h ago", by: "Keystone" },
    { id: "DOC-118", name: "Specific Aims — final", type: "Narrative", ext: "PDF", s: "approved", ver: "4", updated: "Yesterday", by: "You" },
    { id: "DOC-121", name: "Budget & Justification", type: "Budget", ext: "XLSX", s: "review", ver: "3", updated: "Yesterday", by: "Keystone" },
    { id: "DOC-109", name: "Data Management & Sharing Plan", type: "Forms", ext: "DOCX", s: "draft", ver: "1", updated: "3 days ago", by: "Keystone" },
    { id: "DOC-102", name: "Biosketch — E. Park", type: "Forms", ext: "PDF", s: "approved", ver: "2", updated: "5 days ago", by: "You" },
    { id: "DOC-126", name: "Letters of Support (3)", type: "Support", ext: "PDF", s: "draft", ver: "1", updated: "6 days ago", by: "You" },
    { id: "DOC-130", name: "Facilities & Resources", type: "Forms", ext: "DOCX", s: "approved", ver: "1", updated: "1 week ago", by: "Keystone" },
  ],

  milestones: [
    { date: "May 12", t: "Engagement kickoff", d: "Goals, solicitation, and writing plan set.", s: "done" },
    { date: "May 28", t: "Specific Aims approved", d: "You signed off on the one-page aims.", s: "done" },
    { date: "Jun 19", t: "Full draft to you for review", d: "Research strategy, budget, and forms.", s: "current" },
    { date: "Jul 03", t: "Compliance cross-walk complete", d: "Line-by-line audit against PA-25-303.", s: "upcoming" },
    { date: "Jul 14", t: "Final internal review", d: "Last read before assembly.", s: "upcoming" },
    { date: "Jul 21", t: "Submission deadline", d: "5:00 PM local — submitted & verified early.", s: "upcoming", deadline: true },
  ],

  messages: [
    { from: "them", who: "Alexander Aguilar", initials: "AA", time: "9:24 AM", text: "Morning Elena — the Research Strategy v6 is up for your review. I tightened the Approach section around the rigor reviewers flagged last cycle." },
    { from: "them", who: "Alexander Aguilar", initials: "AA", time: "9:25 AM", text: "One thing I need from you: a quick confirm on the animal model numbers in Aim 2 so the budget matches." },
    { from: "me", who: "You", initials: "EP", time: "9:41 AM", text: "Great, thank you. Numbers in Aim 2 are correct — 24 mice per cohort, 3 cohorts. Reviewing the strategy now." },
    { from: "them", who: "Alexander Aguilar", initials: "AA", time: "9:46 AM", text: "Perfect. We're 12.5 pages on the strategy — I'll trim half a page without losing substance and flag it on the compliance checklist." },
  ],

  invoices: [
    { id: "INV-0042", desc: "R01 engagement — milestone 2 of 3", date: "Jun 01, 2026", amount: "$6,500", s: "due" },
    { id: "INV-0031", desc: "R01 engagement — milestone 1 of 3", date: "May 12, 2026", amount: "$6,500", s: "paid" },
    { id: "INV-0024", desc: "Opportunity & eligibility assessment", date: "Apr 28, 2026", amount: "$1,500", s: "paid" },
  ],

  activity: [
    { ic: "doc", t: "Research Strategy v6 uploaded", m: "Alexander Aguilar · awaiting your review", time: "2h" },
    { ic: "check", t: "Specific Aims approved", m: "You approved DOC-118", time: "1d" },
    { ic: "msg", t: "New message from your Keystone lead", m: "“the Research Strategy v6 is up…”", time: "1d" },
    { ic: "shield", t: "Compliance: 2 items need a fix", m: "Page limit and data-sharing plan", time: "2d" },
    { ic: "doc", t: "Budget & Justification v3 uploaded", m: "Alexander Aguilar", time: "2d" },
  ],
};
