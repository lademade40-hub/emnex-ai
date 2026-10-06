"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

/** The site behaves as a multi-page website: distinct pages, per-page titles,
 *  deep-linkable hash URLs (#/work, #/contact) and back/forward support. */
export type SiteRoute = "/" | "/work" | "/contact";

const TITLES: Record<SiteRoute, string> = {
  "/": "EMNEX AI — AI-Powered Product Films & Cinematic Brand Videos",
  "/work": "Work Archive — EMNEX AI",
  "/contact": "Start a Project — EMNEX AI",
};

function parseHash(): SiteRoute {
  const raw = window.location.hash.replace(/^#/, "");
  if (raw === "/work" || raw === "/contact") return raw;
  return "/";
}

type SiteRouterValue = {
  route: SiteRoute;
  navigate: (to: SiteRoute, sectionId?: string) => void;
};

const SiteRouterContext = createContext<SiteRouterValue | null>(null);

export function useSiteRouter(): SiteRouterValue {
  const ctx = useContext(SiteRouterContext);
  if (!ctx) throw new Error("useSiteRouter must be used within SiteRouterProvider");
  return ctx;
}

export function SiteRouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<SiteRoute>("/");
  const pendingSection = useRef<string | null>(null);

  const scrollToSection = useCallback((id: string) => {
    // two frames — guarantees the target view is mounted before scrolling
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
    });
  }, []);

  const navigate = useCallback(
    (to: SiteRoute, sectionId?: string) => {
      if (to === route) {
        if (sectionId) scrollToSection(sectionId);
        else window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      pendingSection.current = sectionId ?? null;
      window.location.hash = to; // fires hashchange → route effect below
    },
    [route, scrollToSection]
  );

  // deep-link support on first load (e.g. /#/contact)
  useEffect(() => {
    const initial = parseHash();
    if (initial === "/") return;
    const raf = window.requestAnimationFrame(() => setRoute(initial));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // per-page title + scroll management on every route change
  useEffect(() => {
    document.title = TITLES[route];
    const target = pendingSection.current;
    pendingSection.current = null;
    if (target) scrollToSection(target);
    else window.scrollTo({ top: 0, behavior: "auto" });
  }, [route, scrollToSection]);

  const value = useMemo(() => ({ route, navigate }), [route, navigate]);

  return (
    <SiteRouterContext.Provider value={value}>{children}</SiteRouterContext.Provider>
  );
}
