"use client";

import { motion } from "framer-motion";
import { LightboxProvider } from "@/components/site/lightbox";
import { SiteRouterProvider, useSiteRouter } from "@/components/site/router";
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
import WorkPage from "@/components/site/work-page";
import ContactPage from "@/components/site/contact-page";

function HomeView() {
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

function SiteShell() {
  const { route } = useSiteRouter();

  return (
    <div className="relative flex min-h-screen flex-col bg-ink text-bone">
      {/* film grain */}
      <div aria-hidden="true" className="grain-overlay" />

      <Nav />

      <motion.main
        key={route}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {route === "/" ? (
          <HomeView />
        ) : route === "/work" ? (
          <WorkPage />
        ) : (
          <ContactPage />
        )}
      </motion.main>

      <Footer />
    </div>
  );
}

export default function Home() {
  return (
    <SiteRouterProvider>
      <LightboxProvider>
        <SiteShell />
      </LightboxProvider>
    </SiteRouterProvider>
  );
}
