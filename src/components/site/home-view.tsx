import Hero from "@/components/site/hero";
import Intro from "@/components/site/intro";
import Work from "@/components/site/work";
import Featured from "@/components/site/featured";
import Services from "@/components/site/services";
import Industries from "@/components/site/industries";
import Process from "@/components/site/process";
import WhyAi from "@/components/site/why-ai";
import Statement from "@/components/site/statement";
import About from "@/components/site/about";
import FinalCta from "@/components/site/final-cta";

/** The home page composition — every section in editorial order. */
export default function HomeView() {
  return (
    <>
      <Hero />
      <Intro />
      <Work />
      <Featured />
      <Services />
      <Industries />
      <Process />
      <WhyAi />
      <Statement />
      <About />
      <FinalCta />
    </>
  );
}
