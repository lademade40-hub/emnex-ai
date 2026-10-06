"use client";

import { ArrowUpRight } from "lucide-react";
import { ALL_VIDEOS } from "@/lib/site-data";
import FilmCard from "./film-card";
import Reveal, { MaskLine } from "./reveal";
import { useSiteRouter } from "./router";

/* ------------------------------------------------------------------ */
/* Work archive — the complete index of every film                    */
/* ------------------------------------------------------------------ */

export default function WorkPage() {
  const { navigate } = useSiteRouter();
  const [
    showreel,
    featured,
    cinematic,
    brandVisual,
    commercial,
    creator,
    profile,
    brandFilm,
    camI,
    camII,
  ] = ALL_VIDEOS;

  return (
    <div className="pb-28 pt-28 md:pb-40 md:pt-44">
      {/* page header */}
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal y={14}>
          <p className="mb-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="transition-colors hover:text-bone"
            >
              HOME
            </a>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            ( THE ARCHIVE )
          </p>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-8">
          <h1 className="font-wide text-[14vw] font-extrabold leading-[0.9] tracking-[-0.02em] text-bone sm:text-[11vw] lg:text-[7.2rem]">
            <MaskLine delay={0.05}>
              COMPLETE{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                index
              </em>
            </MaskLine>
          </h1>
          <Reveal delay={0.25} className="max-w-xs pb-2">
            <p className="text-sm leading-relaxed text-smoke md:text-[15px]">
              Ten AI-powered visuals — every film, concept and study produced
              by EMNEX AI, in one place.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-baseline justify-between gap-4 border-t border-white/[0.07] pt-5 font-mono text-[10px] tracking-[0.3em] text-faint md:text-[11px]">
            <span>TAP ANY FILM TO WATCH WITH SOUND</span>
            <span className="shrink-0 whitespace-nowrap">( 10 FILMS )</span>
          </div>
        </Reveal>
      </header>

      {/* archive grid */}
      <div className="mx-auto mt-16 max-w-[1600px] px-5 md:mt-24 md:px-10">
        {/* 001 — full-width opener */}
        <FilmCard video={showreel} aspectClass="aspect-[4/3] md:aspect-[21/9]" />

        {/* 002 + 003 */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <FilmCard
            video={featured}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7"
          />
          <FilmCard
            video={cinematic}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:mt-20 lg:mt-28"
          />
        </div>

        {/* 004 + 005 — mirrored */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <FilmCard
            video={brandVisual}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:order-1"
          />
          <FilmCard
            video={commercial}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7 md:order-2 md:mt-20"
          />
        </div>

        {/* 006 — full-width interlude */}
        <div className="mt-16 md:mt-24">
          <FilmCard video={creator} aspectClass="aspect-[4/3] md:aspect-[21/9]" />
        </div>

        {/* 007 + 008 */}
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8 lg:gap-12">
          <FilmCard
            video={profile}
            aspectClass="aspect-[4/3]"
            className="md:col-span-7"
          />
          <FilmCard
            video={brandFilm}
            aspectClass="aspect-[4/3] md:aspect-[3/3.6]"
            className="md:col-span-5 md:mt-20 lg:mt-28"
          />
        </div>

        {/* 009 + 010 — transformation diptych */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <div className="mb-8 flex items-baseline justify-between gap-4 border-t border-white/[0.07] pt-6">
              <h2 className="font-mono text-[10px] tracking-[0.32em] text-smoke md:text-[11px]">
                PRODUCT TRANSFORMATION STUDY
              </h2>
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

        {/* honesty line */}
        <Reveal className="mt-16">
          <p className="border-t border-white/[0.06] pt-6 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-faint md:text-[11px]">
            ALL FILMS ARE ORIGINAL AI-PRODUCED CONCEPTS AND CREATIVE STUDIES BY
            EMNEX AI.
          </p>
        </Reveal>
      </div>

      {/* end CTA */}
      <div className="mx-auto mt-24 max-w-[1600px] px-5 md:mt-32 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden border border-white/[0.09] px-6 py-14 text-center md:px-10 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(200,168,120,0.07),transparent_70%)]"
            />
            <p className="mb-4 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              ( NEXT )
            </p>
            <h2 className="font-wide mx-auto max-w-3xl text-3xl font-extrabold leading-tight tracking-[-0.015em] text-bone sm:text-4xl md:text-6xl">
              YOUR BRAND COULD BE{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                next.
              </em>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-smoke md:text-[15px]">
              Tell me about your product, idea or campaign — your brief opens
              directly in WhatsApp and I reply personally.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/contact");
                }}
                className="group inline-flex w-full items-center justify-center gap-3 bg-bone px-10 py-5 font-mono text-[11px] tracking-[0.25em] text-ink transition-all duration-300 hover:bg-brass sm:w-auto"
              >
                START A PROJECT
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
              <a
                href="#/"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                }}
                className="inline-flex w-full items-center justify-center border border-white/25 px-10 py-5 font-mono text-[11px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone/10 sm:w-auto"
              >
                BACK TO HOME
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
