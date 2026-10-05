"use client";

import type { VideoAsset } from "@/lib/site-data";
import { WORK_VIDEOS } from "@/lib/site-data";
import SmartVideo from "./smart-video";
import Reveal, { MaskLine } from "./reveal";
import { useLightbox } from "./lightbox";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Portfolio item                                                     */
/* ------------------------------------------------------------------ */

function PortfolioItem({
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

/* ------------------------------------------------------------------ */
/* Selected work — curated editorial grid                             */
/* ------------------------------------------------------------------ */

export default function Work() {
  const [cinematic, brandVisual, commercial, creator, profile, brandFilm, camI, camII] =
    WORK_VIDEOS;

  return (
    <section
      id="work"
      aria-label="Selected work"
      className="scroll-mt-20 border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* header */}
        <div className="mb-16 md:mb-24">
          <Reveal y={14}>
            <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              ( PORTFOLIO )
            </p>
          </Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-wide text-[13vw] font-extrabold leading-[0.9] tracking-[-0.02em] text-bone sm:text-[10vw] lg:text-[6.4rem]">
              <MaskLine delay={0.05}>
                SELECTED{" "}
                <sup className="font-mono text-[0.22em] font-normal tracking-[0.2em] text-smoke">
                  (08)
                </sup>
              </MaskLine>
            </h2>
            <Reveal delay={0.25} className="max-w-xs pb-2">
              <p className="text-sm leading-relaxed text-smoke md:text-[15px]">
                AI-powered visuals created to capture attention.
              </p>
            </Reveal>
          </div>
        </div>

        {/* 01 — full-width opener */}
        <PortfolioItem
          video={cinematic}
          aspectClass="aspect-[4/3] md:aspect-[21/9]"
        />

        {/* 02 — asymmetric pair, right column drops */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <PortfolioItem
            video={brandVisual}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7"
          />
          <PortfolioItem
            video={commercial}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:mt-20 lg:mt-28"
          />
        </div>

        {/* 03 — asymmetric pair, mirrored */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <PortfolioItem
            video={creator}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:order-1"
          />
          <PortfolioItem
            video={profile}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7 md:order-2 md:mt-20"
          />
        </div>

        {/* 04 — full-width interlude */}
        <div className="mt-16 md:mt-24">
          <PortfolioItem
            video={brandFilm}
            aspectClass="aspect-[4/3] md:aspect-[21/9]"
          />
        </div>

        {/* 05 — product transformation diptych */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between gap-4 border-t border-white/[0.07] pt-6">
              <h3 className="font-mono text-[10px] tracking-[0.32em] text-smoke md:text-[11px]">
                PRODUCT TRANSFORMATION STUDY
              </h3>
              <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                TWO VERSIONS
              </span>
            </div>
          </Reveal>
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
            <PortfolioItem video={camI} aspectClass="aspect-[4/3]" />
            <PortfolioItem video={camII} aspectClass="aspect-[4/3]" />
          </div>
        </div>

        {/* honest footnote */}
        <Reveal className="mt-16 md:mt-20">
          <p className="border-t border-white/[0.06] pt-6 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-faint md:text-[11px]">
            ALL FILMS ARE ORIGINAL AI-PRODUCED CONCEPTS AND CREATIVE STUDIES BY
            EMNEX AI.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
