"use client";

import { PROCESS_STEPS } from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";

export default function Process() {
  return (
    <section
      id="process"
      aria-label="The creative process"
      className="scroll-mt-20 border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* sticky heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal y={14}>
                <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
                  ( THE PROCESS )
                </p>
              </Reveal>
              <h2 className="font-wide text-4xl font-extrabold leading-[1.02] tracking-[-0.015em] text-bone sm:text-5xl md:text-6xl">
                <MaskLine delay={0.05}>FROM IDEA</MaskLine>
                <MaskLine delay={0.15}>
                  TO FINAL{" "}
                  <em className="font-serif font-medium italic tracking-normal text-brass">
                    film.
                  </em>
                </MaskLine>
              </h2>
              <Reveal delay={0.3} className="mt-8 max-w-md">
                <p className="text-[15px] leading-relaxed text-smoke">
                  EMNEX AI provides creative direction and production from the
                  first sketch to the final cut — not simply raw AI generations.
                  Every frame is chosen, sequenced and finished with intent.
                </p>
              </Reveal>
            </div>
          </div>

          {/* steps */}
          <ol className="lg:col-span-7">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.05} y={24}>
                <li className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-white/[0.07] py-9 last:border-b md:grid-cols-[auto_220px_1fr] md:gap-10 md:py-12">
                  <span className="font-mono text-[12px] tracking-[0.3em] text-brass md:text-[13px]">
                    {step.number}
                  </span>
                  <h3 className="font-wide text-xl font-bold tracking-wide text-bone transition-transform duration-500 group-hover:translate-x-1.5 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="col-span-2 max-w-md text-sm leading-relaxed text-smoke md:col-span-1 md:text-[15px]">
                    {step.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
