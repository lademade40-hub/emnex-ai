"use client";

import { PROFILE_IMAGE, EMAIL_LINK, WHATSAPP_LINK } from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";

const FOCUS_ROWS = [
  { label: "FOCUS", value: "AI PRODUCT COMMERCIALS — BRAND FILMS" },
  { label: "FORMATS", value: "SOCIAL — CAMPAIGNS — PRODUCT VISUALS" },
  { label: "APPROACH", value: "CREATIVE DIRECTION + AI PRODUCTION" },
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="Behind EMNEX AI"
      className="scroll-mt-20 border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* portrait */}
          <Reveal className="lg:col-span-5" y={30}>
            <figure className="group relative max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-px translate-x-3 translate-y-3 border border-brass/25 transition-transform duration-700 group-hover:translate-x-4 group-hover:translate-y-4"
              />
              <div className="video-frame relative aspect-[4/5] border border-white/10">
                <img
                  src={PROFILE_IMAGE}
                  alt="Portrait of the creator behind EMNEX AI"
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:grayscale-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.3em] text-bone/70 md:text-[10px]">
                  EMNEX AI — CREATOR
                </figcaption>
              </div>
            </figure>
          </Reveal>

          {/* text */}
          <div className="lg:col-span-7">
            <Reveal y={14}>
              <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
                ( ABOUT )
              </p>
            </Reveal>

            <h2 className="font-wide text-4xl font-extrabold leading-[1.02] tracking-[-0.015em] text-bone sm:text-5xl md:text-6xl">
              <MaskLine delay={0.05}>BEHIND</MaskLine>
              <MaskLine delay={0.15}>
                EMNEX{" "}
                <em className="font-serif font-medium italic tracking-normal text-brass">
                  AI
                </em>
              </MaskLine>
            </h2>

            <Reveal delay={0.3} className="mt-8 max-w-xl">
              <p className="text-[15px] leading-relaxed text-smoke md:text-base">
                EMNEX AI is a creative visual brand focused on using AI-powered
                production to create cinematic product advertisements,
                promotional videos and striking branded content.
              </p>
            </Reveal>

            <Reveal delay={0.4} className="mt-12">
              <dl>
                {FOCUS_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="flex flex-col gap-1 border-t border-white/[0.07] py-4 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <dt className="font-mono text-[10px] tracking-[0.3em] text-faint">
                      {row.label}
                    </dt>
                    <dd className="font-mono text-[11px] tracking-[0.18em] text-ash sm:text-right">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.5} className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/20 px-6 py-3 font-mono text-[10px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-ink"
              >
                SAY HELLO
              </a>
              <a
                href={EMAIL_LINK}
                className="link-line inline-flex items-center py-3 font-mono text-[10px] tracking-[0.25em] text-smoke transition-colors hover:text-bone"
              >
                EMNEXAI@GMAIL.COM
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
