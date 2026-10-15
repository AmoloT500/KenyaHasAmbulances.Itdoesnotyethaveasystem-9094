import { Nav, Ticker } from "../components/nav";
import { Hero } from "../components/hero";
import { OnePager } from "../components/one-pager";
import { Evidence } from "../components/evidence";
import { QuoteBand } from "../components/quote-band";
import { Timeline } from "../components/timeline";
import { Money } from "../components/money";
import { Incentives } from "../components/incentives";
import { Myths } from "../components/myths";
import { TalkingPoints } from "../components/talking-points";
import { SocialKit } from "../components/social-kit";
import { Demands } from "../components/demands";
import { Endorsements } from "../components/endorsements";
import { Footer, Sources } from "../components/sources";

export default function Index() {
  return (
    <>
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <OnePager />
        <Evidence />
        <QuoteBand />
        <Timeline />
        <Money />
        <Incentives />
        <Myths />
        <TalkingPoints />
        <SocialKit />
        <Demands />
        <Endorsements />
        <Sources />
      </main>
      <Footer />
    </>
  );
}
