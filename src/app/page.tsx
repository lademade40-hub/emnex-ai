import { LightboxProvider } from "@/components/site/lightbox";
import Nav from "@/components/site/nav";
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
import Footer from "@/components/site/footer";

export default function Home() {
  return (
    <LightboxProvider>
      <div className="relative min-h-screen bg-ink text-bone">
        {/* film grain */}
        <div aria-hidden="true" className="grain-overlay" />

        <Nav />

        <main>
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
        </main>

        <Footer />
      </div>
    </LightboxProvider>
  );
}
