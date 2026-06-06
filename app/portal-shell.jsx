/* Keystone Portal — shell + shared UI (Babel). Exports to window. */

// ── Icons (Lucide-style line icons) ─────────────────────────────
const _P = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
const ICONS = {
  dashboard: <g {..._P}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></g>,
  proposal: <g {..._P}><path d="M5 3h9l5 5v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></g>,
  deadlines: <g {..._P}><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/><circle cx="12" cy="15" r="2.4"/><path d="M12 13.4V15l1 .8"/></g>,
  documents: <g {..._P}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></g>,
  compliance: <g {..._P}><path d="M12 3l8 3.5v5C20 16.5 16.7 20 12 21.5 7.3 20 4 16.5 4 11.5v-5z"/><path d="M9 12l2 2 4-4"/></g>,
  messages: <g {..._P}><path d="M21 11.5a8 8 0 0 1-11.6 7.1L3 21l2.4-6.4A8 8 0 1 1 21 11.5z"/></g>,
  billing: <g {..._P}><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/></g>,
  onboarding: <g {..._P}><path d="M12 3v18M3 12h18" opacity="0"/><path d="M5 12h14M12 5v14"/></g>,
  bell: <g {..._P}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></g>,
  search: <g {..._P}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></g>,
  sun: <g {..._P}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4"/></g>,
  moon: <g {..._P}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></g>,
  menu: <g {..._P}><path d="M3 6h18M3 12h18M3 18h18"/></g>,
  arrow: <g {..._P}><path d="M5 12h14M13 6l6 6-6 6"/></g>,
  chev: <g {..._P}><path d="M9 6l6 6-6 6"/></g>,
  check: <g {..._P}><path d="M20 6L9 17l-5-5"/></g>,
  plus: <g {..._P}><path d="M12 5v14M5 12h14"/></g>,
  upload: <g {..._P}><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></g>,
  download: <g {..._P}><path d="M12 4v12M7 11l5 5 5-5M5 20h14"/></g>,
  eye: <g {..._P}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></g>,
  clock: <g {..._P}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></g>,
  alert: <g {..._P}><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.8 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0z"/></g>,
  shield: <g {..._P}><path d="M12 3l8 3.5v5C20 16.5 16.7 20 12 21.5 7.3 20 4 16.5 4 11.5v-5z"/><path d="M9 12l2 2 4-4"/></g>,
  doc: <g {..._P}><path d="M6 3h7l5 5v13H6z"/><path d="M13 3v5h5"/></g>,
  msg: <g {..._P}><path d="M21 11.5a8 8 0 0 1-11.6 7.1L3 21l2.4-6.4A8 8 0 1 1 21 11.5z"/></g>,
  send: <g {..._P}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></g>,
  flag: <g {..._P}><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></g>,
  external: <g {..._P}><path d="M14 4h6v6M20 4l-8 8M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></g>,
  building: <g {..._P}><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h6"/></g>,
  target: <g {..._P}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></g>,
};
function Icon({ name, size = 18, style }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">{ICONS[name] || null}</svg>;
}

// ── Small shared components ─────────────────────────────────────
function Card({ className = "", glass = true, pad = "card-pad", children, ...rest }) {
  return <div className={`card ${glass ? "glass" : ""} ${pad} ${className}`} {...rest}>{children}</div>;
}
function Pill({ kind = "", icon = true, children }) {
  return <span className={`pill ${kind}`}>{icon && kind && <span className="d" />}{children}</span>;
}
function Avatar({ initials, className = "" }) {
  return <span className={`avatar ${className}`}>{initials}</span>;
}
function Meter({ pct }) {
  return <div className="meter"><i style={{ width: pct + "%" }} /></div>;
}
function Ring({ pct, value, label }) {
  const r = 54, c = 2 * Math.PI * r, off = c * (1 - pct / 100);
  return (
    <div className="ring">
      <svg width="130" height="130" viewBox="0 0 130 130" className="rt">
        <circle className="track" cx="65" cy="65" r={r} />
        <circle className="prog" cx="65" cy="65" r={r} strokeDasharray={c} strokeDashoffset={off} />
      </svg>
      <div className="rc"><div className="rv">{value}</div><div className="rl">{label}</div></div>
    </div>
  );
}
function StageTracker({ stages, currentIndex }) {
  return (
    <div className="stages">
      {stages.map((s, i) => {
        const cls = i < currentIndex ? "done" : i === currentIndex ? "current" : "todo";
        return (
          <div className={`stage ${cls}`} key={s.n}>
            <span className="dot">{i < currentIndex && <Icon name="check" size={10} />}</span>
            <span className="bar" />
            <div className="sn">{s.n}</div>
            <div className="st">{s.t}</div>
            <div className="sd">{s.d}</div>
          </div>
        );
      })}
    </div>
  );
}
function Countdown({ due, compact = false }) {
  const target = React.useMemo(() => new Date(due).getTime(), [due]);
  const calc = () => {
    const ms = Math.max(0, target - Date.now());
    return {
      d: Math.floor(ms / 86400000),
      h: Math.floor((ms % 86400000) / 3600000),
      m: Math.floor((ms % 3600000) / 60000),
      s: Math.floor((ms % 60000) / 1000),
    };
  };
  const [t, setT] = React.useState(calc);
  React.useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, [target]);
  const pad = (n) => String(n).padStart(2, "0");
  if (compact) return <span className="mono">{t.d}d {pad(t.h)}h {pad(t.m)}m</span>;
  const units = [["Days", t.d], ["Hrs", pad(t.h)], ["Min", pad(t.m)], ["Sec", pad(t.s)]];
  return (
    <div className="countdown">
      {units.map(([u, v], i) => (
        <React.Fragment key={u}>
          <div className="cd-unit"><div className="n">{v}</div><div className="u">{u}</div></div>
          {i < units.length - 1 && <div className="cd-sep">:</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Shell ───────────────────────────────────────────────────────
function Shell({ sections }) {
  const flat = sections.flatMap((s) => s.items);
  const [active, setActive] = React.useState(flat[0].id);
  const [navOpen, setNavOpen] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem("keystone-portal-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch { return "light"; }
  });
  React.useEffect(() => { document.documentElement.setAttribute("data-theme", theme); try { localStorage.setItem("keystone-portal-theme", theme); } catch {} }, [theme]);

  const go = (id) => { setActive(id); setNavOpen(false); document.querySelector(".main")?.scrollTo(0, 0); };
  const current = flat.find((s) => s.id === active);
  const Active = current.component;
  const D = window.PortalData;

  return (
    <div className={`app ${navOpen ? "nav-open" : ""}`}>
      <div className="app-grid" />
      <div className="scrim" onClick={() => setNavOpen(false)} />

      <aside className="sidebar">
        <div className="side-brand">
          <img className="logo-light" src="../assets/logo-mark.png" alt="" />
          <img className="logo-dark" src="../assets/logo-mark-dark.png" alt="" />
          <div><div className="bn">Keystone</div><div className="tag">Client Portal</div></div>
        </div>
        <div className="side-scroll">
          {sections.map((sec) => (
            <React.Fragment key={sec.label}>
              <div className="side-sec">{sec.label}</div>
              {sec.items.map((it) => (
                <div key={it.id} className={`nav-item ${active === it.id ? "active" : ""}`} onClick={() => go(it.id)}>
                  <Icon name={it.icon} />
                  <span>{it.label}</span>
                  {it.badge ? <span className="badge">{it.badge}</span> : null}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="side-foot">
          <div className="user-card">
            <Avatar initials={D.user.initials} />
            <div><div className="un">{D.user.name}</div><div className="ur">{D.user.org}</div></div>
          </div>
        </div>
      </aside>

      <div className="main">
        <div className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button className="icon-btn hamburger" onClick={() => setNavOpen(true)} aria-label="Menu"><Icon name="menu" /></button>
            <div className="crumbs"><span>Keystone</span><span className="sep">/</span><span className="cur">{current.label}</span></div>
          </div>
          <div className="topbar-right">
            <button className="icon-btn" aria-label="Search"><Icon name="search" /></button>
            <button className="icon-btn" aria-label="Notifications"><Icon name="bell" /><span className="dot" /></button>
            <button className="icon-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme">
              <span className="tt-moon"><Icon name="moon" /></span><span className="tt-sun"><Icon name="sun" /></span>
            </button>
          </div>
        </div>
        <Active go={go} />
      </div>
    </div>
  );
}

Object.assign(window, { Icon, ICONS, Card, Pill, Avatar, Meter, Ring, StageTracker, Countdown, Shell });
