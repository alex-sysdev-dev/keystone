/* Keystone Portal — screens B: Documents, Compliance, Messages, Billing, Onboarding */
const { Icon: IconB, Card: CardB, Pill: PillB, Avatar: AvatarB, Meter: MeterB, Ring: RingB } = window;

const _now = () => { const d = new Date(); let h = d.getHours(), m = String(d.getMinutes()).padStart(2, "0"); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return `${h}:${m} ${ap}`; };
const _docMeta = { review: { kind: "warn", label: "Needs your approval" }, approved: { kind: "ok", label: "Approved" }, draft: { kind: "", label: "In progress" } };

function DocumentsScreen() {
  const D = window.PortalData;
  const [docs, setDocs] = React.useState(D.documents.map((d) => ({ ...d })));
  const [filter, setFilter] = React.useState("all");
  const setS = (id, s) => setDocs((ds) => ds.map((d) => (d.id === id ? { ...d, s, updated: "Just now", by: "You" } : d)));
  const filters = [["all", "All"], ["review", "Needs you"], ["approved", "Approved"], ["draft", "In progress"]];
  const shown = docs.filter((d) => filter === "all" || d.s === filter);
  const needs = docs.filter((d) => d.s === "review").length;

  return (
    <div className="page">
      <div className="page-head"><h1>Documents</h1><p className="sub">{needs > 0 ? `${needs} document${needs > 1 ? "s" : ""} waiting on your approval.` : "You're all caught up — nothing waiting on you."}</p></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 18, flexWrap: "wrap" }}>
        <div className="seg">
          {filters.map(([k, l]) => (<button key={k} className={filter === k ? "on" : ""} onClick={() => setFilter(k)}>{l}{k === "review" && needs ? ` · ${needs}` : ""}</button>))}
        </div>
        <button className="btn btn-primary btn-sm"><IconB name="upload" size={14} />Upload a file</button>
      </div>

      <CardB glass={false} pad="card-pad" style={{ padding: 8 }}>
        <table className="tbl">
          <thead><tr><th>Document</th><th>Type</th><th>Ver.</th><th>Updated</th><th>Status</th><th style={{ textAlign: "right" }}>Action</th></tr></thead>
          <tbody>
            {shown.map((d) => {
              const meta = _docMeta[d.s];
              return (
                <tr key={d.id}>
                  <td><div className="fname"><span className="fic"><IconB name="doc" size={15} /></span><div><div className="ft">{d.name}</div><div className="fm">{d.ext} · by {d.by}</div></div></div></td>
                  <td style={{ color: "var(--ink-2)" }}>{d.type}</td>
                  <td className="mono" style={{ color: "var(--muted)" }}>v{d.ver}</td>
                  <td style={{ color: "var(--muted)", fontSize: 13 }}>{d.updated}</td>
                  <td><PillB kind={meta.kind} icon={!!meta.kind}>{meta.label}</PillB></td>
                  <td>
                    <div className="row-act">
                      {d.s === "review" ? (
                        <React.Fragment>
                          <button className="btn btn-soft btn-sm" onClick={() => setS(d.id, "draft")}>Request changes</button>
                          <button className="btn btn-primary btn-sm" onClick={() => setS(d.id, "approved")}><IconB name="check" size={14} />Approve</button>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <button className="btn btn-ghost btn-sm"><IconB name="eye" size={14} />View</button>
                          <button className="btn btn-ghost btn-sm" aria-label="Download"><IconB name="download" size={14} /></button>
                        </React.Fragment>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {shown.length === 0 && <div className="empty"><IconB name="check" size={30} /><div>Nothing here — every document in this view is handled.</div></div>}
      </CardB>
    </div>
  );
}

const _ckMeta = { pass: { kind: "ok", label: "Cleared" }, fix: { kind: "risk", label: "Needs fix" }, pending: { kind: "warn", label: "Pending review" } };
function ComplianceScreen() {
  const D = window.PortalData;
  const [groups, setGroups] = React.useState(() => D.compliance.map((g) => ({ ...g, items: g.items.map((it) => ({ ...it, orig: it.s })) })));
  const toggle = (gi, ii) => setGroups((gs) => gs.map((g, x) => x !== gi ? g : { ...g, items: g.items.map((it, y) => y !== ii ? it : { ...it, s: it.s === "pass" ? (it.orig === "pass" ? "pending" : it.orig) : "pass" }) }));
  const all = groups.flatMap((g) => g.items);
  const passed = all.filter((i) => i.s === "pass").length;
  const pct = Math.round((passed / all.length) * 100);
  const fixes = all.filter((i) => i.s === "fix").length;

  return (
    <div className="page">
      <div className="page-head"><h1>Compliance checklist</h1><p className="sub">Every requirement in {D.proposal.solicitation}, checked before you submit. Click an item to mark it reviewed.</p></div>

      <div className="dash-grid" style={{ marginBottom: 18 }}>
        <CardB>
          <div className="card-head"><h3 className="card-title">Readiness</h3>{fixes > 0 ? <PillB kind="risk">{fixes} need a fix</PillB> : <PillB kind="ok">All clear</PillB>}</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--muted)", marginBottom: 9 }}><span>{passed} of {all.length} requirements cleared</span><span className="mono">{pct}%</span></div>
          <MeterB pct={pct} />
          <div style={{ display: "flex", gap: 20, marginTop: 22 }}>
            <div><div className="label" style={{ marginBottom: 6 }}>Cleared</div><div style={{ fontSize: 22, fontWeight: 600 }}>{passed}</div></div>
            <div><div className="label" style={{ marginBottom: 6 }}>Need fix</div><div style={{ fontSize: 22, fontWeight: 600, color: fixes ? "var(--risk)" : "var(--ink)" }}>{fixes}</div></div>
            <div><div className="label" style={{ marginBottom: 6 }}>Pending</div><div style={{ fontSize: 22, fontWeight: 600 }}>{all.length - passed - fixes}</div></div>
          </div>
        </CardB>
        <CardB style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
          <RingB pct={pct} value={pct + "%"} label="Ready" />
          <div style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 300, marginTop: 16 }}>Your lead clears every fix before submission.</div>
        </CardB>
      </div>

      {groups.map((g, gi) => {
        const gp = g.items.filter((i) => i.s === "pass").length;
        return (
          <div className="ck-group" key={g.group}>
            <div className="ck-gh"><div className="gt">{g.group}</div><span className="label">{gp}/{g.items.length} cleared</span></div>
            {g.items.map((it, ii) => {
              const meta = _ckMeta[it.s];
              return (
                <div className={`ck-item ${it.s === "pass" ? "checked" : ""} ${it.s === "fix" ? "fix" : ""}`} key={ii} onClick={() => toggle(gi, ii)}>
                  <span className="ck-box">{it.s === "pass" && <IconB name="check" size={12} />}{it.s === "fix" && <IconB name="alert" size={12} style={{ color: "var(--risk)" }} />}</span>
                  <div className="ck-main"><div className="ck-t">{it.t}</div><div className="ck-d">{it.d}</div></div>
                  <PillB kind={meta.kind} icon={false}>{meta.label}</PillB>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function MessagesScreen() {
  const D = window.PortalData;
  const [msgs, setMsgs] = React.useState(D.messages.map((m) => ({ ...m })));
  const [text, setText] = React.useState("");
  const scrollRef = React.useRef(null);
  React.useEffect(() => { const el = scrollRef.current; if (el) el.scrollTop = el.scrollHeight; }, [msgs]);
  const send = () => {
    const t = text.trim(); if (!t) return;
    setMsgs((m) => [...m, { from: "me", who: "You", initials: D.user.initials, time: _now(), text: t }]);
    setText("");
    setTimeout(() => setMsgs((m) => [...m, { from: "them", who: D.manager.name, initials: D.manager.initials, time: _now(), text: "Got it — thanks, Elena. I'll fold that in and update the checklist so you can see it move." }]), 1400);
  };
  const onKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

  return (
    <div className="page" style={{ paddingBottom: 0 }}>
      <div className="page-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <AvatarB initials={D.manager.initials} />
          <div><h1 style={{ fontSize: 21 }}>{D.manager.name}</h1><div style={{ fontSize: 13, color: "var(--muted)" }}>{D.manager.role} · usually replies within an hour</div></div>
        </div>
        <PillB kind="ok">Online</PillB>
      </div>

      <div className="chat">
        <div className="chat-scroll" ref={scrollRef}>
          <div className="day-sep">Today</div>
          {msgs.map((m, i) => (
            <div className={`msg ${m.from === "me" ? "me" : "them"}`} key={i}>
              <AvatarB initials={m.initials} />
              <div><div className="who">{m.who}</div><div className="bubble">{m.text}</div><div className="time">{m.time}</div></div>
            </div>
          ))}
        </div>
        <div className="composer">
          <textarea value={text} onChange={(e) => setText(e.target.value)} onKeyDown={onKey} placeholder="Message your Keystone lead…" rows={1} />
          <button className="btn btn-primary" style={{ height: 46 }} onClick={send}><IconB name="send" size={15} />Send</button>
        </div>
      </div>
    </div>
  );
}

function BillingScreen() {
  const D = window.PortalData;
  const [inv, setInv] = React.useState(D.invoices.map((i) => ({ ...i })));
  const pay = (id) => setInv((v) => v.map((i) => (i.id === id ? { ...i, s: "paid" } : i)));
  const num = (s) => Number(s.replace(/[^0-9.]/g, ""));
  const outstanding = inv.filter((i) => i.s === "due").reduce((a, i) => a + num(i.amount), 0);
  const paid = inv.filter((i) => i.s === "paid").reduce((a, i) => a + num(i.amount), 0);
  const usd = (n) => "$" + n.toLocaleString();

  return (
    <div className="page">
      <div className="page-head"><h1>Billing</h1><p className="sub">Your engagement plan and invoices. Fixed-fee, milestone-based — no surprises.</p></div>

      <div className="grid-cols g-3" style={{ marginBottom: 18 }}>
        <CardB className="stat"><span className="label" style={{ display: "block", marginBottom: 12 }}>Engagement plan</span><div style={{ fontSize: 18, fontWeight: 600 }}>R01 — full proposal</div><div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>Fixed fee · 3 milestones</div></CardB>
        <CardB className="stat"><span className="label" style={{ display: "block", marginBottom: 12 }}>Paid to date</span><div className="v">{usd(paid)}</div><div className="delta"><PillB kind="ok">Up to date</PillB></div></CardB>
        <CardB className="stat"><span className="label" style={{ display: "block", marginBottom: 12 }}>Outstanding</span><div className="v" style={{ color: outstanding ? "var(--ink)" : "var(--ink)" }}>{usd(outstanding)}</div><div className="delta">{outstanding ? <PillB kind="warn">1 invoice due</PillB> : <PillB kind="ok">Nothing due</PillB>}</div></CardB>
      </div>

      <CardB glass={false} style={{ padding: 8 }}>
        <table className="tbl">
          <thead><tr><th>Invoice</th><th>Description</th><th>Date</th><th>Amount</th><th>Status</th><th style={{ textAlign: "right" }}>Action</th></tr></thead>
          <tbody>
            {inv.map((i) => (
              <tr key={i.id}>
                <td className="mono ft">{i.id}</td>
                <td style={{ color: "var(--ink-2)" }}>{i.desc}</td>
                <td style={{ color: "var(--muted)", fontSize: 13 }}>{i.date}</td>
                <td className="ft">{i.amount}</td>
                <td><PillB kind={i.s === "paid" ? "ok" : "warn"}>{i.s === "paid" ? "Paid" : "Due"}</PillB></td>
                <td><div className="row-act">{i.s === "due" ? <button className="btn btn-primary btn-sm" onClick={() => pay(i.id)}>Pay now</button> : <button className="btn btn-ghost btn-sm"><IconB name="download" size={14} />Receipt</button>}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardB>
    </div>
  );
}

function OnboardingScreen({ go }) {
  const steps = ["Organization", "Project", "Funding goal", "Review"];
  const [step, setStep] = React.useState(0);
  const [done, setDone] = React.useState(false);
  const [fund, setFund] = React.useState("sbir");
  const fundOpts = [
    ["sbir", "SBIR / STTR", "Non-dilutive R&D for small businesses"],
    ["research", "Research grant", "NIH, NSF and similar"],
    ["contract", "Federal contract", "A specific solicitation or RFP"],
    ["nonprofit", "Nonprofit / formula", "HRSA, USDA, state-administered"],
  ];

  if (done) return (
    <div className="page">
      <CardB style={{ textAlign: "center", padding: "56px 32px", maxWidth: 600, margin: "30px auto" }}>
        <span className="ic" style={{ width: 56, height: 56, borderRadius: 16, margin: "0 auto 22px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--line-strong)", background: "var(--bg)" }}><IconB name="check" size={26} /></span>
        <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}>You're in good hands.</h1>
        <p style={{ fontSize: 15, color: "var(--ink-2)", fontWeight: 300, margin: "12px auto 26px", maxWidth: "44ch" }}>Thanks — your intake is in. {window.PortalData.manager.name} will review it and reach out within one business day with a go / no-go and the right solicitation.</p>
        <button className="btn btn-primary" onClick={() => go("dashboard")}>Go to my dashboard<IconB name="arrow" size={15} /></button>
      </CardB>
    </div>
  );

  return (
    <div className="page">
      <div className="page-head"><h1>Start a new engagement</h1><p className="sub">A few questions so we can assess fit and point you at the right program.</p></div>

      <div className="ob-steps">
        {steps.map((s, i) => (
          <div className={`ob-step ${i < step ? "done" : i === step ? "current" : ""}`} key={s}>
            <span className="obn">{i < step ? <IconB name="check" size={13} /> : i + 1}</span>
            <span className="obl">{s}</span>
            {i < steps.length - 1 && <span className="obline" />}
          </div>
        ))}
      </div>

      <CardB glass={false} pad="card-pad-lg" style={{ maxWidth: 720 }}>
        {step === 0 && (
          <div>
            <h3 className="card-title" style={{ marginBottom: 20 }}>About your organization</h3>
            <div className="field"><label>Organization name</label><input className="input" defaultValue="Helix Therapeutics" /></div>
            <div className="field"><label>Type</label><input className="input" placeholder="e.g. Small business, university, nonprofit" defaultValue="Small business (biotech)" /></div>
            <div className="field"><label>Website</label><input className="input" placeholder="https://" /><div className="hint">We use this to understand your work before our first call.</div></div>
          </div>
        )}
        {step === 1 && (
          <div>
            <h3 className="card-title" style={{ marginBottom: 20 }}>About your project</h3>
            <div className="field"><label>What are you building or studying?</label><textarea className="input" rows={3} style={{ resize: "vertical" }} placeholder="A few sentences in plain language." /></div>
            <div className="field"><label>Stage</label><div className="choice-grid">
              {[["Idea / pre-prototype"], ["Working prototype"], ["Early data / results"], ["Revenue / deployed"]].map(([c], i) => (
                <div className={`choice ${i === 1 ? "sel" : ""}`} key={c}><div className="ct">{c}</div></div>
              ))}
            </div></div>
          </div>
        )}
        {step === 2 && (
          <div>
            <h3 className="card-title" style={{ marginBottom: 20 }}>What funding are you after?</h3>
            <div className="choice-grid">
              {fundOpts.map(([k, t, d]) => (
                <div className={`choice ${fund === k ? "sel" : ""}`} key={k} onClick={() => setFund(k)}><div className="ct">{t}</div><div className="cd">{d}</div></div>
              ))}
            </div>
            <div className="field" style={{ marginTop: 20 }}><label>Target deadline (if you know it)</label><input className="input" placeholder="e.g. Sep 5, 2026 — or “not sure yet”" /></div>
          </div>
        )}
        {step === 3 && (
          <div>
            <h3 className="card-title" style={{ marginBottom: 20 }}>Review & submit</h3>
            <div className="kv-row"><span className="k">Organization</span><span className="v">Helix Therapeutics</span></div>
            <div className="kv-row"><span className="k">Type</span><span className="v">Small business (biotech)</span></div>
            <div className="kv-row"><span className="k">Stage</span><span className="v">Working prototype</span></div>
            <div className="kv-row"><span className="k">Funding goal</span><span className="v">{fundOpts.find((o) => o[0] === fund)[1]}</span></div>
            <div style={{ fontSize: 13.5, color: "var(--ink-2)", fontWeight: 300, marginTop: 18, lineHeight: 1.6 }}>When you submit, your Keystone lead reviews this and comes back within one business day with an honest go / no-go and the best-fit program.</div>
          </div>
        )}

        <div className="divider" />
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <button className="btn btn-ghost" onClick={() => (step === 0 ? go("dashboard") : setStep(step - 1))}>{step === 0 ? "Cancel" : "Back"}</button>
          {step < 3 ? <button className="btn btn-primary" onClick={() => setStep(step + 1)}>Continue<IconB name="arrow" size={15} /></button>
            : <button className="btn btn-primary" onClick={() => setDone(true)}><IconB name="check" size={15} />Submit intake</button>}
        </div>
      </CardB>
    </div>
  );
}

Object.assign(window, { DocumentsScreen, ComplianceScreen, MessagesScreen, BillingScreen, OnboardingScreen });
