import { Reveal } from "../hooks/use-reveal";

export function QuoteBand() {
  return (
    <section className="band-dark quote-band">
      <div className="wrap">
        <Reveal>
          <div className="label" style={{ color: "#8f8f8f" }}>
            The government agrees with the diagnosis
          </div>
          <blockquote className="quote-text" style={{ marginTop: 28 }}>
            &ldquo;The Ministry supports all core recommendations in the report&rdquo; — and concurs
            that <em>system-wide challenges in policy enforcement, resources and governance</em>{" "}
            underpin the current weaknesses in emergency service delivery.
          </blockquote>
          <div className="quote-source">
            Ministry of Health written comments on the draft audit, reproduced in Appendix 13 of the
            Auditor-General's report, November 2025
          </div>
          <hr className="rule" style={{ margin: "48px auto 0", maxWidth: 720 }} />
          <p
            className="lede"
            style={{ color: "#e6e6e6", maxWidth: "54ch", margin: "32px auto 0" }}
          >
            The diagnosis is not in dispute. What is in dispute is funding, staffing and who carries
            the cost of a system that currently stops at the hospital gate.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
