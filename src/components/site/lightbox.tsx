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
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { VideoAsset } from "@/lib/site-data";

type LightboxContextValue = {
  open: (video: VideoAsset) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightbox must be used within LightboxProvider");
  return ctx;
}

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [video, setVideo] = useState<VideoAsset | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = useCallback((v: VideoAsset) => setVideo(v), []);
  const close = useCallback(() => setVideo(null), []);

  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [video, close]);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {video ? (
          <motion.div
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Video viewer — ${video.title}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/92 backdrop-blur-sm"
            onClick={close}
          >
            {/* top bar */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 md:px-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.25em] text-brass">
                  {video.index}
                </span>
                <span className="text-sm font-medium tracking-wide text-bone/90">
                  {video.title}
                </span>
              </div>
              <button
                onClick={close}
                aria-label="Close video viewer"
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone transition-all duration-300 hover:rotate-90 hover:border-bone hover:bg-bone hover:text-ink"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* video */}
            <motion.div
              ref={dialogRef}
              initial={{ scale: 0.94, y: 24 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-[5] mx-4 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.8)]">
                <video
                  src={video.src}
                  poster={video.poster}
                  controls
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[76vh] w-full bg-black object-contain"
                  aria-label={video.title}
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.3em] text-smoke">
                  {video.tag}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                  EMNEX AI
                </span>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
