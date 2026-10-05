"use client";

import Reveal, { MaskLine } from "./reveal";

export default function Statement() {
  return (
    <section
      aria-label="Creative statement"
      className="relative border-b border-white/[0.06] py-28 md:py-48"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-col items-center text-center">
          <Reveal y={14}>
            <p className="mb-10 font-mono text-[10px] tracking-[0.35em] text-faint md:text-[11px]">
              ( THE POINT )
            </p>
          </Reveal>

          <p className="font-wide max-w-4xl text-xl font-semibold leading-snug tracking-tight text-smoke sm:text-2xl md:text-[2rem]">
            <MaskLine delay={0.05}>
              THE GOAL ISN&rsquo;T TO MAKE SOMETHING
            </MaskLine>
            <MaskLine delay={0.13}>THAT LOOKS AI-GENERATED.</MaskLine>
          </p>

          <h2 className="font-wide mt-10 max-w-6xl text-[9.5vw] font-extrabold leading-[1.02] tracking-[-0.02em] text-bone sm:mt-14 md:text-[5.6rem]">
            <MaskLine delay={0.2}>THE GOAL IS TO MAKE</MaskLine>
            <MaskLine delay={0.3}>
              SOMETHING PEOPLE{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                remember.
              </em>
            </MaskLine>
          </h2>

          <Reveal delay={0.5}>
            <span
              aria-hidden="true"
              className="mt-14 block h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
