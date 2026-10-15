import { TALKING_POINTS } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { CopyButton } from "./ui/copy-button";
import { SectionHead } from "./section-head";

export function TalkingPoints() {
  const asText = TALKING_POINTS.map((point, i) => `${i + 1}. ${point}`).join("\n\n");

  return (
    <section className="section" id="talking-points">
      <div className="wrap">
        <SectionHead
          kicker="Talking points"
          title="Twelve lines you can use as they are"
          sub="Written to be said out loud or quoted in print. Each one carries a number and a source, so it can be checked rather than believed."
        />

        <Reveal style={{ marginTop: 56 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "space-between",
              alignItems: "center",
              borderTop: "1px solid var(--ink)",
              paddingTop: 20,
            }}
          >
            <div className="label muted">12 points · audit-sourced</div>
            <CopyButton text={asText} label="Copy all twelve" />
          </div>

          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {TALKING_POINTS.map((point, i) => (
              <li className="talking-point" key={point}>
                <span className="mono label" style={{ color: "var(--red)", paddingTop: 4 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
