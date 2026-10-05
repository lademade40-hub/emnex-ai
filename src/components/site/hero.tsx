"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SmartVideo from "./smart-video";
import { MaskLine } from "./reveal";
import { HERO_VIDEO, WHATSAPP_LINK } from "@/lib/site-data";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="EMNEX AI — cinematic AI visuals"
      className="relative h-[100svh] min-h-[600px] w-full overflow-hidden"
    >
      {/* video backdrop */}
      <motion.div style={reduce ? undefined : { y: videoY }} className="absolute inset-0">
        <SmartVideo
          src={HERO_VIDEO.src}
          poster={HERO_VIDEO.poster}
          eager
          ariaLabel="Showreel opening film by EMNEX AI"
          className="absolute inset-0"
        />
      </motion.div>

      {/* cinematic overlays — kept minimal so the film stays visible */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/55"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_40%,rgba(10,10,11,0.55)_100%)]"
      />

      {/* content */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-0 z-10 pb-14 md:pb-20"
      >
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-6 flex items-center gap-4 md:mb-8">
            <span aria-hidden="true" className="h-px w-10 bg-brass md:w-16" />
            <p className="font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
              AI VISUAL PRODUCTION
            </p>
          </div>

          <h1 className="font-wide text-[13.5vw] font-extrabold leading-[0.94] tracking-[-0.02em] text-bone sm:text-[11vw] lg:text-[7.6rem] xl:text-[8.6rem]">
            <MaskLine delay={0.15}>AI VISUALS.</MaskLine>
            <MaskLine delay={0.3}>
              BUILT TO{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                SELL.
              </em>
            </MaskLine>
          </h1>

          <div className="mt-7 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md text-[15px] leading-relaxed text-ash md:text-base"
            >
              AI-powered product advertisements and cinematic promotional videos
              created for brands that want to stand out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 bg-bone px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-ink transition-all duration-300 hover:bg-brass"
              >
                VIEW MY WORK
                <ArrowDown
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                  strokeWidth={2}
                />
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-bone backdrop-blur-sm transition-all duration-300 hover:border-bone hover:bg-bone/10"
              >
                START A PROJECT
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* corner meta */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute right-5 top-24 z-10 hidden items-center gap-3 md:right-10 lg:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.35em] text-ash/70">
          SHOWREEL — {HERO_VIDEO.index}
        </span>
        <span aria-hidden="true" className="scroll-cue-line block h-10 w-px bg-brass/70" />
      </motion.div>
    </section>
  );
}
