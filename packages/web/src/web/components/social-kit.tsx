import { useState } from "react";
import { SOCIAL_KIT } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { CopyButton } from "./ui/copy-button";
import { SectionHead } from "./section-head";

export function SocialKit() {
  const [active, setActive] = useState(0);
  const block = SOCIAL_KIT[active];

  return (
    <section className="section band-soft" id="kit">
      <div className="wrap">
        <SectionHead
          kicker="Campaign kit"
          title="Ready to post, in your own name"
          sub="Copy any block and publish it. Nothing here needs rewriting — but if you are publishing as an organisation, attribute the figures to the Auditor-General's report and keep the word sampled wherever a figure came from the audit's sample."
        />

        <Reveal style={{ marginTop: 56 }}>
          <div className="tablist" role="tablist" aria-label="Campaign kit formats">
            {SOCIAL_KIT.map((item, i) => (
              <button
                type="button"
                key={item.platform}
                role="tab"
                id={`kit-tab-${i}`}
                aria-selected={active === i}
                aria-controls="kit-panel"
                className="tab"
                onClick={() => setActive(i)}
              >
                {item.platform}
              </button>
            ))}
          </div>

          <div
            id="kit-panel"
            role="tabpanel"
            aria-labelledby={`kit-tab-${active}`}
            style={{ marginTop: 20 }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 14,
              }}
            >
              <div className="label muted">{block.format}</div>
              <CopyButton text={block.body} label="Copy this block" />
            </div>
            <div className="copy-block">
              <pre className="copy-text">{block.body}</pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
