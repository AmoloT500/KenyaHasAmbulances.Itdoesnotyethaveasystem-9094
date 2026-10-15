import { INCENTIVES, INFERENCE_NOTE } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

export function Incentives() {
  return (
    <section className="section" id="incentives">
      <div className="wrap">
        <SectionHead
          kicker="Why it persists"
          title="Follow the incentive, not the intention"
          sub="Kenya keeps producing the same finding because the system rewards the hospital end and leaves the scene unfunded. Below: what the documents say, and then the incentive that arrangement creates. The first is evidence. The second is our reading of it, and it is labelled as such."
        />

        <div style={{ marginTop: 64 }}>
          {INCENTIVES.map((item, i) => (
            <Reveal
              key={item.head}
              style={{
                borderTop: "1px solid var(--line)",
                paddingBlock: 32,
                display: "grid",
                gap: 20,
                gridTemplateColumns: "minmax(0, 1fr)",
              }}
            >
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span className="mono label" style={{ color: "var(--mute)", paddingTop: 4 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-md" style={{ fontSize: "clamp(21px, 2.4vw, 30px)", margin: 0 }}>
                  {item.head}
                </h3>
              </div>

              <div className="grid-2" style={{ marginTop: 4 }}>
                <div className="hairline-box" style={{ padding: 20 }}>
                  <div className="label tone-red">Documented</div>
                  <p style={{ margin: "10px 0 0", color: "#2b2b2b" }}>{item.documented}</p>
                </div>
                <div className="hairline-box" style={{ padding: 20, background: "var(--soft)" }}>
                  <div className="label" style={{ color: "var(--mute)" }}>
                    What that rewards · inference
                  </div>
                  <p style={{ margin: "10px 0 0", color: "#2b2b2b" }}>{item.rewards}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div
            className="band-dark"
            style={{ padding: "clamp(24px, 4vw, 44px)", marginTop: 40 }}
          >
            <div className="label" style={{ color: "var(--gold-bright)" }}>
              {INFERENCE_NOTE.head}
            </div>
            <div className="grid-2" style={{ marginTop: 20 }}>
              <p style={{ margin: 0, color: "#e6e6e6" }}>{INFERENCE_NOTE.documented}</p>
              <p style={{ margin: 0, color: "#e6e6e6" }}>{INFERENCE_NOTE.inferred}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
