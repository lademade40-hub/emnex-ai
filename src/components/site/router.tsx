"use client";

import { useCallback, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

/** The site is a true multi-page Next.js website with real routes:
 *  "/" (home), "/work" (archive) and "/contact" (project form).
 *  This module keeps the site's own navigation helpers on top of the
 *  App Router so every CTA supports same-page section scrolling. */
export type SiteRoute = "/" | "/work" | "/contact";

const SECTION_KEY = "emnex:pendingSection";

type SiteRouterValue = {
  route: SiteRoute;
  navigate: (to: SiteRoute, sectionId?: string) => void;
};

function scrollToSection(id: string) {
  // two frames — guarantees the target view is mounted before scrolling
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
    });
  });
}

/** Shared navigation helper — wraps next/navigation with section support. */
export function useSiteRouter(): SiteRouterValue {
  const route = (usePathname() ?? "/") as SiteRoute;
  const router = useRouter();

  const navigate = useCallback(
    (to: SiteRoute, sectionId?: string) => {
      if (to === route) {
        if (sectionId) scrollToSection(sectionId);
        else window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      if (sectionId) {
        // hand the pending section to <SectionScrollManager/> which runs
        // after the new route has mounted
        try {
          window.sessionStorage.setItem(SECTION_KEY, sectionId);
        } catch {
          /* storage unavailable — navigation still works */
        }
        router.push(to, { scroll: false });
        return;
      }
      router.push(to); // App Router scrolls to top by default
    },
    [route, router]
  );

  return { route, navigate };
}

/** Drop into the root layout — after every route change, scrolls to the
 *  section requested by a cross-page navigate() call (e.g. footer
 *  "SERVICES" from /work → /#services). */
export function SectionScrollManager() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    // skip the very first mount — no navigation has happened yet
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    let id: string | null = null;
    try {
      id = window.sessionStorage.getItem(SECTION_KEY);
      window.sessionStorage.removeItem(SECTION_KEY);
    } catch {
      /* noop */
    }
    if (id) scrollToSection(id);
  }, [pathname]);

  return null;
}
