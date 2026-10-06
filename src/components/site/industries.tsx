"use client";

import { INDUSTRIES } from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";

export default function Industries() {
  return (
    <section
      aria-label="Industries I create for"
      className="relative border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-14 max-w-5xl md:mb-20">
          <Reveal y={14}>
            <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              ( WHO I CREATE FOR )
            </p>
          </Reveal>
          <h2 className="font-wide text-3xl font-extrabold leading-[1.06] tracking-[-0.015em] text-bone sm:text-5xl md:text-6xl">
            <MaskLine delay={0.05}>BUILT FOR BRANDS</MaskLine>
            <MaskLine delay={0.15}>
              WITH SOMETHING TO{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                say.
              </em>
            </MaskLine>
          </h2>
        </div>

        {/* typographic grid — hairline dividers, no cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => (
            <Reveal
              key={industry.title}
              delay={(i % 3) * 0.08}
              y={22}
              className="group border-t border-white/[0.08] py-8 sm:pr-8 md:py-10"
            >
              <div
                className="flex h-full flex-col justify-between gap-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-wide text-2xl font-bold tracking-tight text-ash transition-all duration-500 group-hover:translate-x-1 group-hover:text-bone md:text-[1.9rem] md:leading-tight">
                    {industry.title}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.18em] text-faint transition-colors duration-500 group-hover:text-smoke md:text-[11px]">
                    {industry.detail.toUpperCase()}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
