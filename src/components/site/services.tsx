"use client";

import { ArrowUpRight } from "lucide-react";
import { SERVICES, WHATSAPP_LINK } from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services — what I create"
      className="scroll-mt-20 border-b border-white/[0.06] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-14 md:mb-20">
          <Reveal y={14}>
            <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              ( SERVICES )
            </p>
          </Reveal>
          <h2 className="font-wide text-[12vw] font-extrabold leading-[0.92] tracking-[-0.02em] text-bone sm:text-[9vw] lg:text-[6rem]">
            <MaskLine delay={0.05}>
              WHAT I{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                create
              </em>
            </MaskLine>
          </h2>
        </div>

        {/* numbered editorial rows — no cards */}
        <div role="list">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 0.06} y={20}>
              <a
                role="listitem"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Discuss ${service.title.toLowerCase()} — start a project`}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-5 border-t border-white/[0.07] py-8 transition-colors duration-500 last:border-b hover:bg-white/[0.02] md:grid-cols-12 md:items-center md:gap-8 md:py-10"
              >
                <span className="font-mono text-[11px] tracking-[0.3em] text-faint transition-colors duration-500 group-hover:text-brass md:col-span-1">
                  {service.number}
                </span>

                <h3 className="font-wide col-span-2 self-center text-lg font-bold tracking-wide text-bone transition-all duration-500 group-hover:translate-x-2 group-hover:text-bone sm:text-xl md:col-span-5 md:text-2xl">
                  {service.title}
                </h3>

                <p className="col-span-3 mt-1 max-w-md text-sm leading-relaxed text-smoke transition-colors duration-500 group-hover:text-ash md:col-span-5 md:mt-0 md:text-[15px]">
                  {service.description}
                </p>

                <span
                  aria-hidden="true"
                  className="hidden justify-self-end text-faint transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-brass md:col-span-1 md:block"
                >
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.25} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10">
          <p className="max-w-xl text-sm leading-relaxed text-faint">
            Every engagement is built around the brand, the product and the
            message — not a fixed package. Tell me what you need and we shape
            the film around it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
