"use client";

import { Play } from "lucide-react";
import { FEATURED_VIDEO } from "@/lib/site-data";
import SmartVideo from "./smart-video";
import Reveal, { MaskLine } from "./reveal";
import { useLightbox } from "./lightbox";

export default function Featured() {
  const { open } = useLightbox();

  return (
    <section
      aria-label="Featured film"
      className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-36"
    >
      {/* faint backdrop word — quiet depth, not decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-10 hidden select-none font-wide text-[11rem] font-extrabold leading-none tracking-tight text-white/[0.025] xl:block"
      >
        FILM
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8 md:mb-16">
          <div>
            <Reveal y={14}>
              <p className="mb-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
                <span aria-hidden="true" className="h-px w-10 bg-brass" />
                FEATURED FILM
              </p>
            </Reveal>
            <h2 className="font-wide text-4xl font-extrabold tracking-[-0.015em] text-bone sm:text-5xl md:text-7xl">
              <MaskLine delay={0.1}>
                AI PRODUCT{" "}
                <em className="font-serif font-medium italic tracking-normal text-brass">
                  film
                </em>
              </MaskLine>
            </h2>
          </div>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-sm leading-relaxed text-smoke md:text-[15px]">
              An AI-powered visual concept designed to transform a product or
              idea into a cinematic advertising experience.
            </p>
          </Reveal>
        </div>

        {/* the film */}
        <Reveal delay={0.1}>
          <button
            onClick={() => open(FEATURED_VIDEO)}
            aria-label="Watch featured film — AI Product Film"
            className="group relative block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brass"
          >
            <div className="video-frame aspect-[4/3] border border-white/[0.07] md:aspect-[21/9]">
              <SmartVideo
                src={FEATURED_VIDEO.src}
                poster={FEATURED_VIDEO.poster}
                ariaLabel="Featured AI product film by EMNEX AI"
                videoClassName="group-hover:scale-[1.02]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"
              />

              {/* center play control */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-ink/30 text-bone backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-brass group-hover:bg-brass group-hover:text-ink md:h-28 md:w-28">
                  <Play className="ml-1 h-6 w-6 fill-current md:h-8 md:w-8" strokeWidth={1} />
                </span>
              </div>

              {/* bottom meta strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
                <span className="font-mono text-[10px] tracking-[0.3em] text-bone/80">
                  {FEATURED_VIDEO.index} — {FEATURED_VIDEO.tag}
                </span>
                <span className="hidden font-mono text-[10px] tracking-[0.3em] text-bone/50 md:block">
                  SOUND ON IN VIEWER
                </span>
              </div>
            </div>
          </button>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[15px] leading-relaxed text-smoke">
            Product films built frame by frame — concept, motion and edit
            handled as one cinematic piece.
          </p>
          <button
            onClick={() => open(FEATURED_VIDEO)}
            className="inline-flex w-fit items-center gap-3 border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-ink"
          >
            <Play className="h-3.5 w-3.5 fill-current" strokeWidth={1} />
            WATCH FILM
          </button>
        </Reveal>
      </div>
    </section>
  );
}
