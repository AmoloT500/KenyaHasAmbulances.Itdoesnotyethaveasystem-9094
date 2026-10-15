import { ONE_PAGER } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { CopyButton } from "./ui/copy-button";
import { SectionHead } from "./section-head";

export function OnePager() {
  const plainText = [
    ONE_PAGER.title.toUpperCase(),
    "",
    ONE_PAGER.intro,
    "",
    ...ONE_PAGER.points.flatMap((p) => [`${p.n} ${p.head}`, p.body, ""]),
    "WHAT WE ARE ASKING FOR",
    ...ONE_PAGER.ask.map((a) => `- ${a}`),
    "",
    "Source: Office of the Auditor-General, Performance Audit Report on Provision of Emergency Medical Care Services in Kenya, November 2025.",
  ].join("\n");

  return (
    <section className="section band-soft" id="case">
      <div className="wrap">
        <SectionHead
          kicker="The one-pager"
          title={ONE_PAGER.title}
          sub={ONE_PAGER.intro}
        />

        <Reveal className="onepager" >
          <div className="no-print" style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
            <div className="label">Five findings · one conclusion</div>
            <div style={{ display: "flex", gap: 10 }}>
              <CopyButton text={plainText} label="Copy as text" />
              <button type="button" className="btn" onClick={() => window.print()}>
                Print / PDF
              </button>
            </div>
          </div>

          <div className="onepager-points" style={{ marginTop: 28 }}>
            {ONE_PAGER.points.map((point) => (
              <div className="onepager-point" key={point.n}>
                <div className="mono label" style={{ color: "var(--red)" }}>
                  {point.n}
                </div>
                <div>
                  <h3 className="display-md" style={{ fontSize: 20, margin: 0 }}>
                    {point.head}
                  </h3>
                  <p style={{ margin: "8px 0 0", color: "#2b2b2b" }}>{point.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="onepager-asks"
            style={{ marginTop: 36, borderTop: "1px solid var(--ink)", paddingTop: 24 }}
          >
            <div className="label" style={{ marginBottom: 12 }}>
              What we are asking for
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {ONE_PAGER.ask.map((ask) => (
                <li className="onepager-ask" key={ask}>
                  <span className="dot dot-green" style={{ marginTop: 9 }} aria-hidden="true" />
                  <span>{ask}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mono onepager-note" style={{ fontSize: 11, color: "var(--mute)", marginTop: 28 }}>
            Every figure above is from the Auditor-General's performance audit, tabled 27 November
            2025. Figures from sampled counties and facilities are marked as sampled.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
