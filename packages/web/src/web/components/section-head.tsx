import { Reveal } from "../hooks/use-reveal";

/** Centred uppercase section title in the reference's rhythm. */
export function SectionHead({
  kicker,
  title,
  sub,
  id,
}: {
  kicker?: string;
  title: string;
  sub?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div id={id}>
        {kicker ? <div className="label section-kicker">{kicker}</div> : null}
        <h2 className="display section-title">{title}</h2>
        {sub ? <p className="section-sub lede">{sub}</p> : null}
      </div>
    </Reveal>
  );
}
