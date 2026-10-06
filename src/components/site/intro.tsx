"use client";

import Reveal, { MaskLine } from "./reveal";

export default function Intro() {
  return (
    <section
      aria-label="Introduction"
      className="relative border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3" y={16}>
            <p className="font-mono text-[10px] tracking-[0.35em] text-faint md:text-[11px]">
              ( THE STUDIO )
            </p>
          </Reveal>

          <div className="lg:col-span-9">
            <h2 className="font-wide max-w-4xl text-3xl font-bold leading-[1.08] tracking-[-0.015em] text-bone sm:text-4xl md:text-[3.4rem] md:leading-[1.04]">
              <MaskLine delay={0.05}>I TURN IDEAS INTO</MaskLine>
              <MaskLine delay={0.15}>
                VISUAL{" "}
                <em className="font-serif font-medium italic tracking-normal text-brass">
                  experiences.
                </em>
              </MaskLine>
            </h2>

            <Reveal delay={0.3} className="mt-8 max-w-xl">
              <p className="text-[15px] leading-relaxed text-smoke md:text-base">
                I create AI-powered product advertisements and cinematic
                promotional videos that help brands turn products, concepts and
                ideas into striking visual experiences.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
