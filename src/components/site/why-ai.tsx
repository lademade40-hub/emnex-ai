"use client";

import Reveal, { MaskLine } from "./reveal";

export default function WhyAi() {
  return (
    <section
      aria-label="Why AI video"
      className="relative overflow-hidden border-b border-white/[0.06] py-24 md:py-40"
    >
      {/* faint backdrop word */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 bottom-0 hidden select-none font-wide text-[10rem] font-extrabold leading-none tracking-tight text-white/[0.02] xl:block"
      >
        WHY
      </div>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal y={14}>
              <p className="mb-8 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
                ( WHY AI VIDEO )
              </p>
            </Reveal>

            <h2 className="font-wide text-3xl font-extrabold leading-[1.08] tracking-[-0.015em] text-bone sm:text-[2.9rem] sm:leading-[1.05] md:text-[4rem]">
              <MaskLine delay={0.05}>WHAT IF YOUR NEXT</MaskLine>
              <MaskLine delay={0.13}>CAMPAIGN DIDN&rsquo;T HAVE</MaskLine>
              <MaskLine delay={0.21}>TO LOOK LIKE</MaskLine>
              <MaskLine delay={0.29}>
                <em className="font-serif font-medium italic tracking-normal text-brass">
                  everyone else&rsquo;s?
                </em>
              </MaskLine>
            </h2>
          </div>

          <div className="flex flex-col justify-end gap-10 lg:col-span-4 lg:pb-2">
            <Reveal delay={0.25}>
              <p className="text-[15px] leading-relaxed text-smoke md:text-base">
                AI gives brands a new way to explore visual ideas, worlds and
                product stories that traditional production can make expensive,
                complicated or time-consuming.
              </p>
            </Reveal>
            <Reveal delay={0.35}>
              <div className="border-l-2 border-brass/60 pl-6">
                <p className="font-serif text-xl italic leading-relaxed text-bone md:text-2xl">
                  &ldquo;The technology is only the tool. The creative
                  direction is what makes the difference.&rdquo;
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.45}>
              <p className="text-sm leading-relaxed text-faint md:text-[15px]">
                EMNEX AI is about creativity, storytelling and advertising — AI
                is simply the production instrument that makes bold ideas
                achievable.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
