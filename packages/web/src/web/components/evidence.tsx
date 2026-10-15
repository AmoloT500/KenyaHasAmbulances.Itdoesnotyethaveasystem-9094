import { EVIDENCE } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

const toneClass: Record<string, string> = {
  red: "tone-red",
  green: "tone-green",
  gold: "tone-gold",
};

export function Legend() {
  const items = [
    { tone: "red", label: "The gap", text: "what the audit found missing or broken" },
    { tone: "green", label: "The promise", text: "what policy and the state committed to" },
    { tone: "gold", label: "The money", text: "budgets, allocations and requests" },
  ];
  return (
    <div
      className="grid-3"
      style={{ marginTop: 44, borderTop: "1px solid var(--ink)", paddingTop: 20 }}
    >
      {items.map((item) => (
        <div key={item.label} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span className={`dot dot-${item.tone}`} style={{ marginTop: 7 }} aria-hidden="true" />
          <div>
            <div className="label">{item.label}</div>
            <div className="label-sm muted" style={{ marginTop: 4 }}>
              {item.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Evidence() {
  return (
    <section className="section" id="evidence">
      <div className="wrap">
        <SectionHead
          kicker="The evidence"
          title="What the Auditor-General found"
          sub="A performance audit of emergency medical care services, triggered by the Senate Health Committee in 2022 and tabled in Parliament on 27 November 2025. It examined four financial years, 2021/22 to 2024/25, across the community, ambulance and hospital levels."
        />
        <Legend />

        {EVIDENCE.map((group) => (
          <Reveal className="evidence-group" key={group.id}>
            <div
              style={{
                display: "grid",
                gap: 20,
                gridTemplateColumns: "minmax(0, 1fr)",
              }}
            >
              <div className="label" style={{ color: "var(--mute)" }}>
                {group.label}
              </div>
              <h3 className="display-md" style={{ fontSize: "clamp(24px, 3.2vw, 40px)", margin: 0 }}>
                {group.title}
              </h3>
              <p className="lede" style={{ maxWidth: "70ch", margin: 0 }}>
                {group.summary}
              </p>
            </div>

            <div className="evidence-stats">
              {group.stats.map((stat) => (
                <div className="stat-panel" key={stat.label}>
                  <div
                    className={`stat-figure ${toneClass[stat.tone]}`}
                    style={{ fontSize: "clamp(26px, 2.6vw, 36px)" }}
                  >
                    {stat.figure}
                  </div>
                  <div className="label-sm" style={{ marginTop: 10 }}>
                    {stat.label}
                  </div>
                  <div className="stat-note">{stat.note}</div>
                </div>
              ))}
            </div>

            {group.quote ? (
              <blockquote
                style={{
                  margin: "32px 0 0",
                  borderLeft: "3px solid var(--red)",
                  paddingLeft: 20,
                  maxWidth: "72ch",
                }}
              >
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5 }}>
                  &ldquo;{group.quote.text}&rdquo;
                </p>
                <cite className="mono" style={{ display: "block", marginTop: 12, fontSize: 11, fontStyle: "normal", color: "var(--mute)" }}>
                  {group.quote.source}
                </cite>
              </blockquote>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
