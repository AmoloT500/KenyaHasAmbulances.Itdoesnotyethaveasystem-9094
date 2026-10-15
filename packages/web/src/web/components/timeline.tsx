import { TIMELINE, type TimelineRow } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

const statusMeta: Record<TimelineRow["status"], { dot: string; label: string }> = {
  delivered: { dot: "dot-green", label: "Delivered" },
  partial: { dot: "dot-gold", label: "Partly delivered" },
  unmet: { dot: "dot-red", label: "Not delivered" },
};

export function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="wrap">
        <SectionHead
          kicker="27 years of the same gap"
          title="What was promised, and what happened"
          sub="Kenya has not been idle on emergency care. It has been active, repeatedly, and the same gap keeps being rediscovered — because the part that saves lives at the scene is the part that never gets a budget line."
        />

        <div style={{ marginTop: 64 }}>
          {TIMELINE.map((row) => {
            const meta = statusMeta[row.status];
            return (
              <Reveal className="tl-row" key={row.year}>
                <div>
                  <div className="tl-year">{row.year}</div>
                  <div
                    className="label-sm"
                    style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span className={`dot ${meta.dot}`} aria-hidden="true" />
                    {meta.label}
                  </div>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: 17 }}>{row.what}</p>
                </div>
                <div style={{ display: "grid", gap: 20 }}>
                  <div>
                    <div className="tl-cell-head tone-green">
                      <span className="dot dot-green" aria-hidden="true" />
                      The commitment
                    </div>
                    <p style={{ margin: 0, color: "#2b2b2b" }}>{row.promise}</p>
                  </div>
                  <div>
                    <div className="tl-cell-head tone-red">
                      <span className="dot dot-red" aria-hidden="true" />
                      What actually happened
                    </div>
                    <p style={{ margin: 0, color: "#2b2b2b" }}>{row.reality}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
