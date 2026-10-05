"use client";

import { ArrowUpRight } from "lucide-react";
import {
  NAV_LINKS,
  SOCIALS,
  EMAIL,
  EMAIL_LINK,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_DISPLAY,
} from "@/lib/site-data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label="Footer"
      className="border-t border-white/[0.08] pb-[max(2rem,env(safe-area-inset-bottom))] pt-16 md:pt-24"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        {/* giant wordmark */}
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 md:mb-20">
          <p
            aria-hidden="true"
            className="font-wide select-none text-[16vw] font-extrabold leading-[0.85] tracking-[-0.02em] text-bone/[0.14] md:text-[10rem]"
          >
            EMNEX
            <span className="font-serif font-medium italic text-brass/25"> AI</span>
          </p>
          <p className="sr-only">EMNEX AI</p>
          <p className="max-w-[240px] pb-3 font-mono text-[10px] leading-relaxed tracking-[0.2em] text-faint md:text-[11px]">
            AI-POWERED PRODUCT FILMS &amp; CINEMATIC BRAND VIDEOS
          </p>
        </div>

        {/* link columns */}
        <div className="grid gap-12 border-t border-white/[0.07] pt-12 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <div>
            <h3 className="mb-6 font-mono text-[10px] tracking-[0.32em] text-faint">
              MENU
            </h3>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-line text-sm font-medium tracking-wide text-ash transition-colors hover:text-bone"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-[10px] tracking-[0.32em] text-faint">
              SOCIAL
            </h3>
            <ul className="space-y-4">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-sm font-medium tracking-wide text-ash transition-colors hover:text-bone"
                  >
                    <span className="link-line">{social.label}</span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass"
                      strokeWidth={1.5}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-[10px] tracking-[0.32em] text-faint">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={EMAIL_LINK}
                  className="link-line text-sm font-medium tracking-wide text-ash transition-colors hover:text-bone"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm font-medium tracking-wide text-ash transition-colors hover:text-bone"
                >
                  WhatsApp — {WHATSAPP_NUMBER_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-[10px] tracking-[0.32em] text-faint">
              NEW PROJECT
            </h3>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border border-white/20 px-6 py-3.5 font-mono text-[10px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-ink"
            >
              START A PROJECT
            </a>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] tracking-[0.22em] text-faint">
            © {year} EMNEX AI — ALL RIGHTS RESERVED
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] text-faint">
            VISUALS CREATED WITH AI PRODUCTION
          </p>
        </div>
      </div>
    </footer>
  );
}
