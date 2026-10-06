"use client";

import { WORK_VIDEOS } from "@/lib/site-data";
import FilmCard from "./film-card";
import Reveal, { MaskLine } from "./reveal";
import { useSiteRouter } from "./router";
import { ArrowRight } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Selected work — curated editorial grid                             */
/* ------------------------------------------------------------------ */

export default function Work() {
  const { navigate } = useSiteRouter();
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
        <FilmCard
          video={cinematic}
          aspectClass="aspect-[4/3] md:aspect-[21/9]"
        />

        {/* 02 — asymmetric pair, right column drops */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <FilmCard
            video={brandVisual}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7"
          />
          <FilmCard
            video={commercial}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:mt-20 lg:mt-28"
          />
        </div>

        {/* 03 — asymmetric pair, mirrored */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <FilmCard
            video={creator}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:order-1"
          />
          <FilmCard
            video={profile}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7 md:order-2 md:mt-20"
          />
        </div>

        {/* 04 — full-width interlude */}
        <div className="mt-16 md:mt-24">
          <FilmCard
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
            <FilmCard video={camI} aspectClass="aspect-[4/3]" />
            <FilmCard video={camII} aspectClass="aspect-[4/3]" />
          </div>
        </div>

        {/* honest footnote */}
        <Reveal className="mt-16 md:mt-20">
          <p className="border-t border-white/[0.06] pt-6 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-faint md:text-[11px]">
            ALL FILMS ARE ORIGINAL AI-PRODUCED CONCEPTS AND CREATIVE STUDIES BY
            EMNEX AI.
          </p>
        </Reveal>

        {/* full archive link */}
        <Reveal className="mt-10 md:mt-14">
          <a
            href="/work"
            onClick={(e) => {
              e.preventDefault();
              navigate("/work");
            }}
            aria-label="Open the complete work archive — all 10 films"
            className="group flex items-center justify-between gap-6 border border-white/[0.09] px-6 py-7 transition-colors duration-500 hover:border-bone/40 md:px-10 md:py-9"
          >
            <span className="font-mono text-[11px] tracking-[0.3em] text-ash transition-colors duration-300 group-hover:text-bone md:text-[13px]">
              VIEW FULL ARCHIVE
              <span className="ml-3 text-faint">— ALL 10 FILMS</span>
            </span>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-ash transition-all duration-300 group-hover:translate-x-2 group-hover:text-brass"
              strokeWidth={1.5}
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
