"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { SectionScrollManager } from "./router";
import Nav from "./nav";
import Footer from "./footer";

/** Shared chrome for every page: film grain, sticky nav, cinematic
 *  fade-up page transition keyed by route, footer, section scroll fixups. */
export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-screen flex-col bg-ink text-bone">
      {/* film grain */}
      <div aria-hidden="true" className="grain-overlay" />

      <SectionScrollManager />
      <Nav />

      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}
