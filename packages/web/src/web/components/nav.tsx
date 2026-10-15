import { NAV_LINKS, TICKER } from "../lib/campaign-data";

export function Ticker() {
  // Duplicated once so the marquee can loop seamlessly at -50%.
  const items = [...TICKER, ...TICKER];
  return (
    <div className="ticker no-print" aria-label="Key audit findings">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span className="ticker-item" key={`${item}-${i}`}>
            <span className="dot dot-red" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Nav() {
  return (
    <header className="topbar no-print">
      <div className="wrap topbar-inner">
        <a className="brand" href="#top">
          <span className="dot dot-red" aria-hidden="true" />
          <span>Prehospital Kit</span>
        </a>
        <nav className="nav-links" aria-label="Sections">
          {NAV_LINKS.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="btn" href="#kit">
          Share the kit
        </a>
      </div>
    </header>
  );
}
