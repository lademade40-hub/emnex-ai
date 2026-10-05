"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type SmartVideoProps = {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  /** Load and play immediately (hero). */
  eager?: boolean;
  /** Show native controls (lightbox). */
  controls?: boolean;
  /** Pause when scrolled out of view (default true). */
  pauseOffscreen?: boolean;
  ariaLabel?: string;
  onLoaded?: () => void;
};

/**
 * Performance-first video:
 * - below-fold sources are not fetched until the frame approaches the viewport
 * - playback pauses automatically when scrolled far away
 * - muted + playsInline + loop for cinematic autoplay behavior
 */
export default function SmartVideo({
  src,
  poster,
  className,
  videoClassName,
  eager = false,
  controls = false,
  pauseOffscreen = true,
  ariaLabel,
  onLoaded,
}: SmartVideoProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [nearViewport, setNearViewport] = useState(eager);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (eager) return;
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setNearViewport(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "350px 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;
    if (nearViewport) {
      video.play().catch(() => {
        /* autoplay can be rejected until user interaction — poster stays visible */
      });
    } else if (pauseOffscreen) {
      video.pause();
    }
  }, [nearViewport, shouldLoad, pauseOffscreen]);

  const setMutedRef = useCallback((node: HTMLVideoElement | null) => {
    if (node) node.muted = true;
  }, []);

  return (
    <div
      ref={frameRef}
      className={cn("relative h-full w-full overflow-hidden bg-coal", className)}
    >
      {shouldLoad ? (
        <video
          ref={(node) => {
            videoRef.current = node;
            setMutedRef(node);
          }}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload={eager ? "auto" : "metadata"}
          controls={controls}
          aria-label={ariaLabel}
          onLoadedData={() => {
            setLoaded(true);
            onLoaded?.();
          }}
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
            videoClassName
          )}
        />
      ) : null}
      {!loaded ? (
        <div
          aria-hidden="true"
          className="frame-shimmer absolute inset-0 bg-gradient-to-br from-coal via-carbon to-coal"
        />
      ) : null}
    </div>
  );
}
