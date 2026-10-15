import { MYTHS } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";

export function Myths() {
  return (
    <section className="section band-soft" id="myths">
      <div className="wrap">
        <SectionHead
          kicker="Answer the obvious objections"
          title="Six things people say, and the answer"
          sub="Every answer below is sourced to the audit, the policy, or published government statements — so the kit survives being challenged on air."
        />

        <div style={{ marginTop: 56 }}>
          {MYTHS.map((row) => (
            <Reveal className="myth-row" key={row.myth}>
              <div>
                <div className="label tone-red">They say</div>
                <p
                  className="display-md"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", margin: "10px 0 0" }}
                >
                  {row.myth}
                </p>
              </div>
              <div>
                <div className="label tone-green">The record</div>
                <p style={{ margin: "10px 0 0", color: "#2b2b2b" }}>{row.fact}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
