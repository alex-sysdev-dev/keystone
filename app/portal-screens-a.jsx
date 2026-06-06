/* Keystone Portal — screens A: Dashboard, Proposal, Deadlines */
const { Icon, Card, Pill, Avatar, Meter, Ring, StageTracker, Countdown } = window;

function StatTile({ icon, label, value, sub, kind }) {
  return (
    <Card className="stat">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span className="label">{label}</span>
        <span className="ic"><Icon name={icon} size={18} /></span>
      </div>
      <div className="v" style={{ marginTop: 14 }}>{value}</div>
      <div className="delta">{kind ? <Pill kind={kind}>{sub}</Pill> : sub}</div>
    </Card>
  );
}

function LeadCard() {
  const D = window.PortalData;
  return (
    <Card>
      <span className="label" style={{ display: "block", marginBottom: 16 }}>Your Keystone lead</span>
      <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
        <Avatar initials={D.manager.initials} />
        <div><div style={{ fontWeight: 600, fontSize: 15 }}>{D.manager.name}</div><div style={{ fontSize: 12.5, color: "var(--muted)" }}>{D.manager.role}</div></div>
      </div>
      <div style={{ display: "flex", gap: 9, marginTop: 18 }}>
        <button className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={() => window.__go("messages")}><Icon name="msg" size={14} />Message</button>
        <button className="btn btn-ghost btn-sm"><Icon name="clock" size={14} />Book call</button>
      </div>
    </Card>
  );
}

function DashboardScreen({ go }) {
  const D = window.PortalData;
  window.__go = go;
  const p = D.proposal;
  const _ck = D.compliance.flatMap((g) => g.items);
  const compliancePct = Math.round((_ck.filter((i) => i.s === "pass").length / _ck.length) * 100);
  const _fixes = _ck.filter((i) => i.s === "fix").length;
  return (
    <div className="page">
      <div className="page-head">
        <div className="greet">Good morning, Elena</div>
        <h1>Your R01 is on track for July 21.</h1>
        <p className="sub">Here's where {p.title} stands today — and the two things waiting on you.</p>
      </div>

      <div className="grid-cols g-4" style={{ marginBottom: 18 }}>
        <StatTile icon="clock" label="To deadline" value={<Countdown due={p.due} compact />} sub={<Pill kind="ok">On track</Pill>} />
        <StatTile icon="proposal" label="Current stage" value={<span>3<small> / 5</small></span>} sub="Writing — draft with you" />
        <StatTile icon="documents" label="Awaiting you" value={<span>2</span>} sub={<Pill kind="warn">Action needed</Pill>} />
        <StatTile icon="shield" label="Compliance" value={<span>{compliancePct}<small>%</small></span>} sub={`${_fixes} items to fix`} />
      </div>

      <Card glass={false} className="span-2" style={{ marginBottom: 18 }}>
        <div className="card-head" style={{ marginBottom: 22 }}>
          <div><h3 className="card-title">Where your proposal stands</h3><p className="card-sub">The five-stage path from idea to a verified submission.</p></div>
          <Pill kind="info">Stage 3 · Write</Pill>
        </div>
        <StageTracker stages={D.stages} currentIndex={p.stageIndex} />
      </Card>

      <div className="dash-grid">
        <div style={{ display: "grid", gap: 18 }}>
          <Card>
            <div className="card-head">
              <div><span className="label" style={{ display: "block", marginBottom: 10 }}>Submission deadline · NIH {p.mechanism}</span>
                <div style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em" }}>Mon, July 21, 2026 · 5:00 PM</div></div>
              <Pill kind="ok">Submitting 4 days early</Pill>
            </div>
            <div style={{ margin: "20px 0 22px" }}><Countdown due={p.due} /></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, color: "var(--muted)", marginBottom: 8 }}><span>Engagement progress</span><span className="mono">62%</span></div>
            <Meter pct={62} />
          </Card>

          <Card>
            <div className="card-head"><h3 className="card-title">Recent activity</h3><button className="btn btn-soft btn-sm" onClick={() => go("messages")}>View all</button></div>
            <div className="rows">
              {D.activity.map((a, i) => (
                <div className="row-i" key={i}>
                  <span className="ric"><Icon name={a.ic} size={16} /></span>
                  <div className="rmain"><div className="rtitle">{a.t}</div><div className="rmeta">{a.m}</div></div>
                  <span className="rtime">{a.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <Card>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Needs you</span>
            <div className="rows">
              <div className="row-i" style={{ paddingTop: 0 }}>
                <span className="ric"><Icon name="doc" size={16} /></span>
                <div className="rmain"><div className="rtitle">Review Research Strategy v6</div><div className="rmeta">Uploaded 2h ago</div></div>
              </div>
              <button className="btn btn-primary btn-sm" style={{ width: "100%", marginTop: 4 }} onClick={() => go("documents")}>Open document<Icon name="arrow" size={14} /></button>
              <div className="row-i">
                <span className="ric"><Icon name="check" size={16} /></span>
                <div className="rmain"><div className="rtitle">Confirm Aim 2 budget figures</div><div className="rmeta">Asked by your lead</div></div>
              </div>
              <button className="btn btn-ghost btn-sm" style={{ width: "100%" }} onClick={() => go("messages")}>Reply in messages</button>
            </div>
          </Card>
          <LeadCard />
        </div>
      </div>
    </div>
  );
}

function ProposalScreen({ go }) {
  const D = window.PortalData; const p = D.proposal;
  const _ck = D.compliance.flatMap((g) => g.items);
  const _pass = _ck.filter((i) => i.s === "pass").length;
  const _cpct = Math.round((_pass / _ck.length) * 100);
  const _fixes = _ck.filter((i) => i.s === "fix").length;
  const facts = [
    ["Agency · Institute", `${p.agency} · ${p.institute}`],
    ["Mechanism", `${p.mechanism} — Research Project Grant`],
    ["Solicitation", p.solicitation],
    ["Award ceiling", `${p.ceiling} over ${p.period}`],
    ["Submit via", p.submittedVia],
    ["Deadline", "Jul 21, 2026 · 5:00 PM"],
  ];
  return (
    <div className="page">
      <div className="page-head">
        <div style={{ display: "flex", gap: 9, marginBottom: 12, flexWrap: "wrap" }}>
          <Pill kind="solid" icon={false}>{p.agency} · {p.mechanism}</Pill>
          <Pill icon={false}>{p.solicitation}</Pill>
          <Pill kind="info">Active engagement</Pill>
        </div>
        <h1>{p.title}</h1>
        <p className="sub">Engagement {p.id} · led by {D.manager.name}</p>
      </div>

      <Card glass={false} style={{ marginBottom: 18 }}>
        <div className="card-head" style={{ marginBottom: 22 }}><h3 className="card-title">Progress</h3><Pill kind="info">Stage 3 · Write</Pill></div>
        <StageTracker stages={D.stages} currentIndex={p.stageIndex} />
      </Card>

      <div className="dash-grid">
        <div style={{ display: "grid", gap: 18 }}>
          <Card>
            <h3 className="card-title" style={{ marginBottom: 16 }}>Engagement overview</h3>
            {facts.map(([k, v]) => (<div className="kv-row" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>))}
            <div className="divider" />
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span className="ric" style={{ width: 34, height: 34, borderRadius: 10, border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-2)", flexShrink: 0 }}><Icon name="target" size={16} /></span>
              <div><div style={{ fontWeight: 600, fontSize: 14 }}>Current focus</div><div style={{ fontSize: 13.5, color: "var(--ink-2)", fontWeight: 300, marginTop: 3 }}>Finalizing the Research Strategy and tightening the Approach section against last cycle's reviewer notes.</div></div>
            </div>
          </Card>

          <Card>
            <div className="card-head"><h3 className="card-title">Milestones</h3><button className="btn btn-soft btn-sm" onClick={() => go("deadlines")}>Timeline</button></div>
            <div className="tl">
              {D.milestones.map((m, i) => (
                <div className={`tl-i ${m.s}`} key={i}>
                  <span className="node" />
                  <div className="tdate">{m.date}{m.deadline ? " · Deadline" : ""}</div>
                  <div className="ttitle">{m.t}</div>
                  <div className="tdesc">{m.d}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div style={{ display: "grid", gap: 18 }}>
          <Card style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <span className="label" style={{ marginBottom: 18 }}>Compliance</span>
            <Ring pct={_cpct} value={_cpct + "%"} label="Ready" />
            <div style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 300, margin: "18px 0 16px" }}>{_pass} of {_ck.length} requirements cleared. {_fixes} need a fix.</div>
            <button className="btn btn-ghost btn-sm" style={{ width: "100%" }} onClick={() => go("compliance")}>Open checklist<Icon name="arrow" size={14} /></button>
          </Card>
          <LeadCard />
          <Card>
            <div className="card-head"><span className="label">Latest documents</span><button className="btn btn-soft btn-sm" onClick={() => go("documents")}>All</button></div>
            <div className="rows">
              {D.documents.slice(0, 3).map((d) => (
                <div className="row-i" key={d.id} style={{ cursor: "pointer" }} onClick={() => go("documents")}>
                  <span className="ric"><Icon name="doc" size={16} /></span>
                  <div className="rmain"><div className="rtitle" style={{ fontSize: 13.5 }}>{d.name}</div><div className="rmeta">{d.ext} · {d.updated}</div></div>
                  <Pill kind={d.s === "approved" ? "ok" : d.s === "review" ? "warn" : ""} icon={false}>{d.s === "review" ? "Review" : d.s === "approved" ? "Approved" : "Draft"}</Pill>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function DeadlinesScreen({ go }) {
  const D = window.PortalData; const p = D.proposal;
  return (
    <div className="page">
      <div className="page-head"><h1>Deadlines & timeline</h1><p className="sub">Every date that matters for {p.title} — and the one that can't move.</p></div>

      <Card style={{ marginBottom: 18 }}>
        <div className="card-head">
          <div><span className="label" style={{ display: "block", marginBottom: 10 }}>The deadline that can't move</span>
            <div style={{ fontSize: 21, fontWeight: 600, letterSpacing: "-0.02em" }}>NIH {p.mechanism} · {p.solicitation}</div>
            <div style={{ fontSize: 14, color: "var(--muted)", marginTop: 3 }}>Monday, July 21, 2026 · 5:00 PM local</div></div>
          <Pill kind="ok">Submitting 4 days early</Pill>
        </div>
        <div style={{ margin: "22px 0 0" }}><Countdown due={p.due} /></div>
      </Card>

      <Card>
        <div className="card-head"><h3 className="card-title">Milestone timeline</h3>
          <div style={{ display: "flex", gap: 8 }}><Pill kind="ok" icon={false}>2 done</Pill><Pill kind="warn" icon={false}>1 active</Pill><Pill icon={false}>3 upcoming</Pill></div>
        </div>
        <div className="tl">
          {D.milestones.map((m, i) => (
            <div className={`tl-i ${m.s}`} key={i}>
              <span className="node" />
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <div className="tdate">{m.date}</div>
                {m.deadline && <Pill kind="risk" icon={false}>Hard deadline</Pill>}
                {m.s === "current" && <Pill kind="warn" icon={false}>In progress</Pill>}
                {m.s === "done" && <Pill kind="ok" icon={false}>Complete</Pill>}
              </div>
              <div className="ttitle">{m.t}</div>
              <div className="tdesc">{m.d}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

Object.assign(window, { DashboardScreen, ProposalScreen, DeadlinesScreen });
