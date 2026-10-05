"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { WHATSAPP_LINK, EMAIL_LINK } from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";

export default function FinalCta() {
  return (
    <section
      aria-label="Start a project"
      className="relative overflow-hidden py-28 md:py-48"
    >
      {/* soft radial warmth — restrained, no gradient clichés */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(200,168,120,0.07),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal y={14}>
            <p className="mb-8 flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
              START A PROJECT
              <span aria-hidden="true" className="h-px w-8 bg-brass" />
            </p>
          </Reveal>

          <h2 className="font-wide max-w-6xl text-[11vw] font-extrabold leading-[0.98] tracking-[-0.02em] text-bone sm:text-[8.5vw] lg:text-[6.8rem]">
            <MaskLine delay={0.05}>HAVE A PRODUCT</MaskLine>
            <MaskLine delay={0.15}>THAT DESERVES</MaskLine>
            <MaskLine delay={0.25}>
              <em className="font-serif font-medium italic tracking-normal text-brass">
                attention?
              </em>
            </MaskLine>
          </h2>

          <Reveal delay={0.4} className="mt-8 max-w-md">
            <p className="text-[15px] leading-relaxed text-smoke md:text-base">
              Let&rsquo;s turn it into something people can&rsquo;t stop
              watching.
            </p>
          </Reveal>

          <Reveal delay={0.5} className="mt-12 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 bg-bone px-10 py-5 font-mono text-[12px] tracking-[0.25em] text-ink transition-all duration-300 hover:bg-brass sm:w-auto"
            >
              START A PROJECT
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
              />
            </a>
            <a
              href={EMAIL_LINK}
              className="inline-flex w-full items-center justify-center gap-3 border border-white/25 px-10 py-5 font-mono text-[12px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone/10 sm:w-auto"
            >
              <Mail className="h-4 w-4" strokeWidth={1.5} />
              EMAIL ME
            </a>
          </Reveal>

          <Reveal delay={0.6} className="mt-10">
            <p className="font-mono text-[10px] tracking-[0.3em] text-faint">
              PROJECTS DISCUSSED PERSONALLY — CUSTOM REQUIREMENTS WELCOME
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
