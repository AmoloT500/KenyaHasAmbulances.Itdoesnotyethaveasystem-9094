import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

const bars = [
  {
    label: "Kenya health budget, FY2026/27",
    amount: "KSh 177.2 bn",
    width: 100,
    tone: "outline",
    note: "Total allocation to the health sector, including construction of new facilities.",
  },
  {
    label: "What the Ministry told the Auditor-General it needs",
    amount: "KSh 11.725 bn",
    width: 6.6,
    tone: "gold",
    note: "Sought from the National Treasury to close the audited emergency care gaps. A request, not an allocation.",
  },
  {
    label: "Emergency, Chronic & Critical Illness Fund, FY2026/27",
    amount: "KSh 4 bn",
    width: 2.3,
    tone: "green",
    note: "The Auditor-General's verdict: established, but not fully operationalised and accessible at all levels of health care.",
  },
];

export function Money() {
  return (
    <section className="section band-soft" id="money">
      <div className="wrap">
        <SectionHead
          kicker="The money"
          title="Emergency care is 6.6% of the health budget away"
          sub="Kenya is not short of a plan. It is short of a ring-fenced line. The Ministry's own figure for closing the gaps identified in the audit is KSh 11.725 billion — a number that sits in the Ministry's written comments to the Auditor-General, in the report's appendix."
        />

        <Reveal className="compare" style={{ marginTop: 64 }}>
          {bars.map((bar) => (
            <div key={bar.label}>
              <div
                className="label"
                style={{ minHeight: 34, display: "flex", alignItems: "flex-start" }}
              >
                {bar.label}
              </div>
              <div className={`stat-figure ${bar.tone === "gold" ? "tone-gold" : bar.tone === "green" ? "tone-green" : "tone-ink"}`} style={{ marginTop: 8 }}>
                {bar.amount}
              </div>
              <div className="bar-track" style={{ marginTop: 16 }}>
                <div
                  className="bar-fill"
                  style={{
                    width: `${Math.max(bar.width, 2.2)}%`,
                    background:
                      bar.tone === "gold"
                        ? "var(--gold-bright)"
                        : bar.tone === "green"
                          ? "var(--green-bright)"
                          : "var(--soft)",
                  }}
                  aria-hidden="true"
                />
              </div>
              <p className="stat-note" style={{ fontFamily: "var(--body)", fontSize: 13.5, color: "#2b2b2b" }}>
                {bar.note}
              </p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <div
            style={{
              marginTop: 56,
              borderTop: "1px solid var(--ink)",
              paddingTop: 28,
              display: "grid",
              gap: 20,
            }}
          >
            <p className="lede" style={{ maxWidth: "72ch", margin: 0 }}>
              Ring-fencing is not a technicality. In the audit, not one of 16 sampled counties and not
              one of 114 sampled health facilities had a specific emergency medical care budget.
              Emergency care was funded out of whatever was left under other votes — in a service
              whose defining feature is that demand is unpredictable.
            </p>
            <p className="lede" style={{ maxWidth: "72ch", margin: 0 }}>
              A ring-fenced line is also the only way to know whether any of this is improving. Without
              it, the next audit will find the same thing, and the next auditor will write the same
              paragraphs.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
