import { METHOD_NOTE, SOURCES } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

export function Sources() {
  return (
    <section className="section" id="sources">
      <div className="wrap">
        <SectionHead
          kicker="Sources and method"
          title="Check every number yourself"
          sub="This page is built to be audited. Every figure traces to one of the documents below, and where a figure comes from a sample rather than a national total, the page says so."
        />

        <Reveal style={{ marginTop: 56 }}>
          {SOURCES.map((source) => (
            <div className="source-row" key={source.detail} style={{ borderTopColor: "var(--line)" }}>
              <div className="label">{source.label}</div>
              <p style={{ margin: "8px 0 10px", color: "#2b2b2b" }}>{source.detail}</p>
              <a
                className="mono"
                style={{ fontSize: 11.5, color: "var(--ink)", wordBreak: "break-all" }}
                href={source.href}
                target="_blank"
                rel="noreferrer noopener"
              >
                {source.href}
              </a>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div className="hairline-box" style={{ padding: "clamp(20px, 3vw, 32px)", marginTop: 48 }}>
            <div className="label tone-red">{METHOD_NOTE.head}</div>
            <ul style={{ margin: "16px 0 0", paddingLeft: 20, display: "grid", gap: 12 }}>
              {METHOD_NOTE.body.map((line) => (
                <li key={line} style={{ color: "#2b2b2b", maxWidth: "78ch" }}>
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer no-print">
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="display-md" style={{ fontSize: "clamp(20px, 3vw, 34px)" }}>
          The report exists. The clinicians exist. The budget line does not.
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 24,
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          <a className="label" href="#case">
            The case
          </a>
          <a className="label" href="#evidence">
            Evidence
          </a>
          <a className="label" href="#kit">
            Campaign kit
          </a>
          <a className="label" href="#add">
            Add your name
          </a>
          <a className="label" href="#sources">
            Sources
          </a>
        </div>
        <hr className="rule" style={{ borderTopColor: "#2e2e2e", margin: "40px auto 24px" }} />
        <p className="mono" style={{ fontSize: 11, color: "#8f8f8f", margin: 0 }}>
          Campaign kit · compiled 15 October 2026 · All figures from the Office of the
          Auditor-General, Kenya, and the public documents listed under Sources.
        </p>
        <p className="mono" style={{ fontSize: 11, color: "#6f6f6f", marginTop: 8 }}>
          This page is a public-interest briefing, not legal advice. Verify figures against the
          primary documents before republishing.
        </p>
      </div>
    </footer>
  );
}
