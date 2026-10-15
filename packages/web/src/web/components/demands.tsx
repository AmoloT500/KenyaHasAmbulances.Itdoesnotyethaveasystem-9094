import { DEMANDS } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

const toneClass: Record<string, string> = {
  green: "tone-green",
  gold: "tone-gold",
  red: "tone-red",
  ink: "tone-ink",
};

export function Demands() {
  return (
    <section className="section" id="demands">
      <div className="wrap">
        <SectionHead
          kicker="What to ask for"
          title="Four audiences, specific asks"
          sub="Complaints do not move budgets. Specific, attributable asks do. Each item below can be answered with a yes, a no, or a date."
        />

        <div className="grid-4" style={{ marginTop: 64 }}>
          {DEMANDS.map((group) => (
            <Reveal
              key={group.who}
              style={{
                borderTop: "3px solid var(--ink)",
                paddingTop: 20,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <h3
                className={`display-md ${toneClass[group.tone]}`}
                style={{ fontSize: 20, margin: 0 }}
              >
                {group.who}
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
                {group.asks.map((ask) => (
                  <li key={ask} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span
                      className={`dot dot-${group.tone}`}
                      style={{ marginTop: 8 }}
                      aria-hidden="true"
                    />
                    <span style={{ fontSize: 15.5, lineHeight: 1.5 }}>{ask}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
