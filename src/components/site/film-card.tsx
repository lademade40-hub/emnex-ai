"use client";

import type { VideoAsset } from "@/lib/site-data";
import SmartVideo from "./smart-video";
import { useLightbox } from "./lightbox";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

/** Cinematic film tile with hover state — shared by Home selected work
 *  and the Work archive page. Clicking opens the immersive viewer. */
export default function FilmCard({
  video,
  aspectClass,
  className,
}: {
  video: VideoAsset;
  aspectClass: string;
  className?: string;
}) {
  const { open } = useLightbox();

  return (
    <article className={cn("group", className)}>
      <button
        onClick={() => open(video)}
        aria-label={`Play film — ${video.title}`}
        className="block w-full cursor-pointer text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
      >
        <div
          className={cn(
            "video-frame border border-white/[0.07]",
            aspectClass
          )}
        >
          <SmartVideo
            src={video.src}
            poster={video.poster}
            ariaLabel={`${video.tag} — ${video.title}`}
            videoClassName="group-hover:scale-[1.035] group-focus-visible:scale-[1.035]"
          />

          {/* hover veil */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15"
          />

          {/* play badge */}
          <div
            aria-hidden="true"
            className="absolute right-4 top-4 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full border border-white/30 bg-ink/40 text-bone opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:h-14 md:w-14"
          >
            <Play className="ml-0.5 h-4 w-4 fill-current" strokeWidth={1} />
          </div>
        </div>

        {/* caption */}
        <div className="mt-4 flex items-baseline justify-between gap-4 md:mt-5">
          <div className="flex items-baseline gap-3 md:gap-4">
            <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
              {video.index}
            </span>
            <h3 className="text-sm font-semibold tracking-wide text-bone transition-colors duration-300 group-hover:text-brass md:text-base">
              {video.title}
            </h3>
          </div>
          <span className="shrink-0 font-mono text-[9px] tracking-[0.28em] text-smoke md:text-[10px]">
            {video.tag}
          </span>
        </div>
      </button>
    </article>
  );
}
