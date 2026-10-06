"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site-data";
import { useSiteRouter } from "./router";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  const { navigate } = useSiteRouter();

  return (
    <a
      href="/"
      onClick={(e) => {
        e.preventDefault();
        navigate("/");
      }}
      aria-label="EMNEX AI — home"
      className={cn(
        "group inline-flex items-baseline gap-2 leading-none select-none",
        className
      )}
    >
      <span className="font-wide text-lg font-extrabold tracking-[0.14em] text-bone transition-colors duration-300 group-hover:text-white md:text-xl">
        EMNEX
      </span>
      <span className="font-serif text-lg italic tracking-wide text-brass transition-colors duration-300 group-hover:text-brass md:text-xl">
        AI
      </span>
    </a>
  );
}

export default function Nav() {
  const { route, navigate } = useSiteRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (to: Parameters<typeof navigate>[0], sectionId?: string) => {
    setMenuOpen(false);
    navigate(to, sectionId);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10"
        >
          <Wordmark />

          <ul className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = link.route !== "/" && route === link.route;
              return (
                <li key={link.label}>
                  <a
                    href={link.route}
                    aria-current={active ? "page" : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      goTo(link.route, link.sectionId);
                    }}
                    className={cn(
                      "link-line font-mono text-[11px] tracking-[0.28em] transition-colors duration-300",
                      active ? "text-bone" : "text-ash hover:text-bone"
                    )}
                  >
                    {active ? (
                      <span className="mr-2 inline-block h-1 w-1 -translate-y-0.5 rounded-full bg-brass align-middle" />
                    ) : null}
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                goTo("/contact");
              }}
              aria-current={route === "/contact" ? "page" : undefined}
              className={cn(
                "hidden items-center border px-5 py-2.5 font-mono text-[11px] tracking-[0.22em] transition-all duration-300 sm:inline-flex",
                route === "/contact"
                  ? "border-brass bg-brass text-ink"
                  : "border-white/20 text-bone hover:border-bone hover:bg-bone hover:text-ink"
              )}
            >
              START A PROJECT
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center text-bone lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[90] flex flex-col bg-ink/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5 md:h-20">
              <Wordmark />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-bone"
              >
                <X className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-2 px-8"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.route}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(link.route, link.sectionId);
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                  className="group flex items-baseline gap-4 border-b border-white/[0.06] py-5"
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                    0{i + 1}
                  </span>
                  <span className="font-wide text-4xl font-bold tracking-tight text-bone transition-colors group-hover:text-brass">
                    {link.label}
                  </span>
                </motion.a>
              ))}

              <motion.a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo("/contact");
                }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.5 }}
                className="group flex items-baseline gap-4 border-b border-white/[0.06] py-5"
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                  05
                </span>
                <span className="font-wide text-4xl font-bold tracking-tight text-brass">
                  START A PROJECT
                </span>
              </motion.a>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="px-8 pb-12"
            >
              <p className="mb-5 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-faint">
                EVERY PROJECT STARTS WITH A CONVERSATION — THE FORM OPENS
                DIRECTLY IN WHATSAPP.
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
