import { useState } from "react";
import { KENYA_COUNTIES } from "../lib/campaign-data";
import { Reveal } from "../hooks/use-reveal";
import { SectionHead } from "./section-head";
import {
  useAddEndorsement,
  useEndorsementStats,
  useEndorsements,
} from "../queries/endorsements";

export function Endorsements() {
  const stats = useEndorsementStats();
  const list = useEndorsements();
  const add = useAddEndorsement();

  const [name, setName] = useState("");
  const [county, setCounty] = useState("Nairobi");
  const [role, setRole] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    if (name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    try {
      await add.mutateAsync({ name, county, role, organisation });
      setName("");
      setRole("");
      setOrganisation("");
      setDone(true);
      window.setTimeout(() => setDone(false), 5000);
    } catch {
      setError("That didn't save. Please try again.");
    }
  }

  return (
    <section className="section band-dark" id="add">
      <div className="wrap" style={{ maxWidth: 900 }}>
        <SectionHead
          kicker="Add your name"
          title="Count the people who want this fixed"
          sub="No account, no email. A name and a county, so counties and Parliament can see the demand where it lives. Adding your name endorses the asks on this page — the ring-fenced budget line, the scheme of service, funded community first response."
        />

        <Reveal style={{ marginTop: 48 }}>
          <div
            style={{
              border: "1px solid #333",
              padding: "clamp(20px, 3vw, 32px)",
              background: "#111",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 16,
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <div>
                <div className="label" style={{ color: "var(--gold-bright)" }}>
                  Endorsements so far
                </div>
                <div className="stat-figure" style={{ color: "#fff", marginTop: 8 }}>
                  {stats.isLoading ? "—" : (stats.data?.total ?? 0)}
                </div>
              </div>
              <div style={{ maxWidth: 420 }}>
                {stats.isLoading ? (
                  <div className="label-sm" style={{ color: "#8f8f8f" }}>
                    Loading counties…
                  </div>
                ) : stats.data && stats.data.counties.length > 0 ? (
                  <div className="label-sm" style={{ color: "#d6d6d6", lineHeight: 1.8 }}>
                    {stats.data.counties
                      .map((c) => `${c.county} ${c.count}`)
                      .join(" · ")}
                  </div>
                ) : (
                  <div className="label-sm" style={{ color: "#8f8f8f" }}>
                    No endorsements yet. Be the first.
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={submit} style={{ marginTop: 28 }}>
              <div className="form-row form-row-2">
                <label style={{ display: "grid", gap: 8 }}>
                  <span className="label-sm" style={{ color: "#d6d6d6" }}>
                    Your name
                  </span>
                  <input
                    className="field"
                    aria-label="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Achieng Otieno"
                    maxLength={80}
                    required
                  />
                </label>
                <label style={{ display: "grid", gap: 8 }}>
                  <span className="label-sm" style={{ color: "#d6d6d6" }}>
                    County
                  </span>
                  <select
                    className="field"
                    aria-label="County"
                    value={county}
                    onChange={(e) => setCounty(e.target.value)}
                  >
                    {KENYA_COUNTIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="form-row form-row-2" style={{ marginTop: 12 }}>
                <label style={{ display: "grid", gap: 8 }}>
                  <span className="label-sm" style={{ color: "#d6d6d6" }}>
                    What you do (optional)
                  </span>
                  <input
                    className="field"
                    aria-label="What you do (optional)"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. paramedic, nurse, driver, resident"
                    maxLength={80}
                  />
                </label>
                <label style={{ display: "grid", gap: 8 }}>
                  <span className="label-sm" style={{ color: "#d6d6d6" }}>
                    Organisation (optional)
                  </span>
                  <input
                    className="field"
                    aria-label="Organisation (optional)"
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    placeholder="Only if you are endorsing for one"
                    maxLength={100}
                  />
                </label>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <button className="btn btn-solid" type="submit" disabled={add.isPending}>
                  {add.isPending ? "Saving…" : "Add my name"}
                </button>
                {done ? (
                  <span className="label-sm" style={{ color: "var(--green-bright)" }}>
                    Added. Thank you.
                  </span>
                ) : null}
                {error ? (
                  <span className="label-sm" style={{ color: "#ff7b70" }}>
                    {error}
                  </span>
                ) : null}
              </div>
            </form>
          </div>
        </Reveal>

        <Reveal style={{ marginTop: 40 }}>
          <div className="label" style={{ color: "#8f8f8f", marginBottom: 16 }}>
            Recent names
          </div>
          {list.isLoading ? (
            <div className="grid-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="endorsement-chip"
                  style={{ background: "#151515", borderColor: "#2e2e2e", height: 78 }}
                />
              ))}
            </div>
          ) : list.data && list.data.length > 0 ? (
            <div className="grid-3">
              {list.data.slice(0, 18).map((item) => (
                <div
                  className="endorsement-chip"
                  key={item.id}
                  style={{ background: "#151515", borderColor: "#2e2e2e" }}
                >
                  <div className="label-sm" style={{ color: "#fff" }}>
                    {item.name}
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "#a3a3a3" }}>
                    {item.county}
                    {item.role ? ` · ${item.role}` : ""}
                  </div>
                  {item.organisation ? (
                    <div className="mono" style={{ fontSize: 11, color: "#7d7d7d" }}>
                      {item.organisation}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <p className="muted" style={{ margin: 0 }}>
              No names yet. The first one is yours.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
