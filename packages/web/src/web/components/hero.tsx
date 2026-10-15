import { CAMPAIGN, HERO_STATS } from "../lib/campaign-data";

const toneClass: Record<string, string> = {
  red: "tone-red",
  green: "tone-green",
  gold: "tone-gold",
  ink: "tone-ink",
};

function StatPanel({ stat }: { stat: (typeof HERO_STATS)[number] }) {
  return (
    <div className="stat-panel">
      <div className="label-sm muted">{stat.label}</div>
      <div className={`stat-figure ${toneClass[stat.tone]}`} style={{ marginTop: 10 }}>
        {stat.figure}
      </div>
      <div className="stat-note">{stat.note}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="hero-in label muted">{CAMPAIGN.kicker}</div>
        <h1
          className="display hero-headline hero-in"
          style={{ animationDelay: "90ms", marginTop: 18, marginInline: "auto" }}
        >
          {CAMPAIGN.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
      </div>

      <div className="wrap-wide hero-collage" style={{ marginTop: 64 }}>
        {/* left column — note and the response-time panel */}
        <div className="collage-col collage-offset hero-in" style={{ animationDelay: "180ms" }}>
          <p className="figure-note" style={{ borderTopColor: "var(--ink)" }}>
            Emergency care does not begin at the hospital gate. It begins with whoever is standing
            there when someone goes down — and with the number they dial.
          </p>
          <img
            src="/images/community-first-response.png"
            alt="Illustration: community members in high-visibility vests performing CPR on a person at a roadside"
            style={{ width: "100%", display: "block", border: "1px solid var(--line)" }}
            loading="lazy"
          />
          <div className="caption-tag">The first link</div>
        </div>

        {/* centre — the golden hour */}
        <div className="collage-col hero-in" style={{ animationDelay: "240ms" }}>
          <div className="squircle">
            <img
              src="/images/hero-golden-hour.png"
              alt="Illustration: an empty night highway with two people kneeling beside a casualty and a distant ambulance"
              style={{ width: "100%", display: "block", aspectRatio: "1 / 1", objectFit: "cover" }}
            />
          </div>
          <div className="caption-tag">The golden hour, lost</div>
          <div className="stat-panel">
            <div className="label-sm muted">Audit finding</div>
            <div className="stat-figure tone-red" style={{ marginTop: 10 }}>
              20–60 min
            </div>
            <div className="stat-note">
              Ambulance response time in the seven sampled counties whose dispatch records existed.
              National standard: 15–20 minutes. Only Machakos met it.
            </div>
          </div>
        </div>

        {/* right column — the numbers */}
        <div className="collage-col collage-offset-lg hero-in" style={{ animationDelay: "300ms" }}>
          <StatPanel stat={HERO_STATS[1]} />
          <StatPanel stat={HERO_STATS[2]} />
          <StatPanel stat={HERO_STATS[3]} />
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 72 }}>
        <div
          style={{
            display: "grid",
            gap: 32,
            gridTemplateColumns: "minmax(0, 1fr)",
            alignItems: "end",
            borderTop: "1px solid var(--ink)",
            paddingTop: 28,
          }}
        >
          <p className="lede" style={{ maxWidth: "68ch", margin: 0 }}>
            {CAMPAIGN.standfirst}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a className="btn btn-solid" href="#evidence">
              {CAMPAIGN.ctaEvidence}
            </a>
            <a className="btn" href="#add">
              {CAMPAIGN.ctaAct}
            </a>
            <a className="btn" href="#kit">
              Campaign kit
            </a>
          </div>
          <div className="label-sm muted">{CAMPAIGN.published}</div>
        </div>
      </div>
    </section>
  );
}
