"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import {
  BUDGET_OPTIONS,
  PROJECT_TYPES,
  WHATSAPP_LINK,
  WHATSAPP_NUMBER_INTL,
  buildWhatsAppBriefUrl,
} from "@/lib/site-data";
import Reveal, { MaskLine } from "./reveal";
import { useSiteRouter } from "./router";

const labelClass = "mb-1.5 block font-mono text-[10px] tracking-[0.3em] text-faint";
const inputClass =
  "w-full border-b bg-transparent py-3.5 text-[15px] text-bone placeholder:text-faint/60 outline-none transition-colors duration-300";
const errorClass = "mt-2 font-mono text-[10px] tracking-[0.14em] text-[#c4694f]";

const NEXT_STEPS = [
  {
    number: "01",
    title: "SEND THE BRIEF",
    description:
      "Fill in the form — it opens directly in WhatsApp with everything pre-filled.",
  },
  {
    number: "02",
    title: "PERSONAL REPLY",
    description:
      "I review your brief and reply on WhatsApp with ideas, a timeline and a quote.",
  },
  {
    number: "03",
    title: "PRODUCTION BEGINS",
    description:
      "Once we align on the direction, your film moves from concept to final delivery.",
  },
];

/* ------------------------------------------------------------------ */
/* Contact page — project inquiry form that lands on WhatsApp          */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const { navigate } = useSiteRouter();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: { name?: string; message?: string } = {};
    if (!name.trim()) next.name = "PLEASE TELL ME YOUR NAME.";
    if (!message.trim())
      next.message = "A SENTENCE OR TWO ABOUT THE PROJECT HELPS ME REPLY FASTER.";
    setErrors(next);
    if (next.name || next.message) return;

    const url = buildWhatsAppBriefUrl({ name, brand, email, type, budget, message });
    setSentUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="pb-28 pt-28 md:pb-40 md:pt-44">
      {/* page header */}
      <header className="mx-auto max-w-[1600px] px-5 md:px-10">
        <Reveal y={14}>
          <p className="mb-6 flex items-center gap-4 font-mono text-[10px] tracking-[0.35em] text-brass md:text-[11px]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              className="transition-colors hover:text-bone"
            >
              HOME
            </a>
            <span aria-hidden="true" className="text-faint">
              /
            </span>
            <span aria-hidden="true" className="h-px w-10 bg-brass" />
            ( START A PROJECT )
          </p>
        </Reveal>

        <div className="flex flex-wrap items-end justify-between gap-8">
          <h1 className="font-wide text-[13vw] font-extrabold leading-[0.92] tracking-[-0.02em] text-bone sm:text-[10vw] lg:text-[6.6rem]">
            <MaskLine delay={0.05}>
              START YOUR{" "}
              <em className="font-serif font-medium italic tracking-normal text-brass">
                project.
              </em>
            </MaskLine>
          </h1>
          <Reveal delay={0.25} className="max-w-xs pb-2">
            <p className="text-sm leading-relaxed text-smoke md:text-[15px]">
              Tell me about your product, idea or campaign — your brief opens
              directly in WhatsApp, and I reply personally.
            </p>
          </Reveal>
        </div>
      </header>

      {/* form + side panel */}
      <div className="mx-auto mt-16 max-w-[1600px] px-5 md:mt-24 md:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-0">
          {/* ------------------------------------------------ form */}
          <div className="lg:col-span-7 lg:pr-16">
            <Reveal>
              <p className="mb-10 border-b border-white/[0.07] pb-5 font-mono text-[10px] tracking-[0.28em] text-faint">
                FIELDS MARKED <span className="text-brass">*</span> ARE REQUIRED
                — EVERYTHING ELSE IS OPTIONAL
              </p>
            </Reveal>

            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                <Reveal y={12}>
                  <label htmlFor="cf-name" className={labelClass}>
                    NAME <span className="text-brass">*</span>
                  </label>
                  <input
                    id="cf-name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    className={`${inputClass} ${
                      errors.name
                        ? "border-[#c4694f]"
                        : "border-white/15 focus:border-brass"
                    }`}
                  />
                  {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
                </Reveal>

                <Reveal y={12} delay={0.05}>
                  <label htmlFor="cf-brand" className={labelClass}>
                    BRAND / COMPANY
                  </label>
                  <input
                    id="cf-brand"
                    type="text"
                    autoComplete="organization"
                    placeholder="Brand or company name"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className={`${inputClass} border-white/15 focus:border-brass`}
                  />
                </Reveal>

                <Reveal y={12} delay={0.1}>
                  <label htmlFor="cf-email" className={labelClass}>
                    EMAIL
                  </label>
                  <input
                    id="cf-email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@brand.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${inputClass} border-white/15 focus:border-brass`}
                  />
                </Reveal>

                <Reveal y={12} delay={0.15}>
                  <label htmlFor="cf-type" className={labelClass}>
                    PROJECT TYPE
                  </label>
                  <div className="relative">
                    <select
                      id="cf-type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className={`${inputClass} appearance-none border-white/15 pr-8 focus:border-brass ${
                        type ? "text-bone" : "text-faint/60"
                      }`}
                    >
                      <option value="" disabled className="bg-coal text-faint">
                        SELECT A SERVICE
                      </option>
                      {PROJECT_TYPES.map((t) => (
                        <option key={t} value={t} className="bg-coal text-bone">
                          {t}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                      strokeWidth={1.5}
                    />
                  </div>
                </Reveal>

                <Reveal y={12} delay={0.2} className="sm:col-span-2">
                  <label htmlFor="cf-budget" className={labelClass}>
                    BUDGET RANGE
                  </label>
                  <div className="relative">
                    <select
                      id="cf-budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className={`${inputClass} appearance-none border-white/15 pr-8 focus:border-brass ${
                        budget ? "text-bone" : "text-faint/60"
                      }`}
                    >
                      <option value="" disabled className="bg-coal text-faint">
                        SELECT A RANGE (OPTIONAL)
                      </option>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b} className="bg-coal text-bone">
                          {b}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
                      strokeWidth={1.5}
                    />
                  </div>
                </Reveal>

                <Reveal y={12} delay={0.25} className="sm:col-span-2">
                  <label htmlFor="cf-message" className={labelClass}>
                    YOUR BRIEF <span className="text-brass">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    rows={5}
                    placeholder="What are we making? The product, the goal, references you like, where it will run, any timeline…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    className={`${inputClass} resize-none border-white/15 focus:border-brass ${
                      errors.message ? "border-[#c4694f]" : ""
                    }`}
                  />
                  {errors.message ? (
                    <p className={errorClass}>{errors.message}</p>
                  ) : null}
                </Reveal>
              </div>

              {/* submit / confirmation */}
              <div className="mt-12">
                {sentUrl ? (
                  <div className="border border-brass/40 bg-brass/[0.06] px-6 py-6 md:px-8">
                    <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-brass">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                      WHATSAPP SHOULD BE OPENING WITH YOUR BRIEF
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-smoke">
                      Just hit send in WhatsApp and it lands with me. Didn&rsquo;t
                      open?{" "}
                      <a
                        href={sentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone underline decoration-brass/60 underline-offset-4 transition-colors hover:text-brass"
                      >
                        Tap here to try again
                      </a>
                      . You can also edit the form and send an updated brief.
                    </p>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-bone px-10 py-5 font-mono text-[12px] tracking-[0.25em] text-ink transition-all duration-300 hover:bg-brass"
                  >
                    SEND VIA WHATSAPP
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </button>
                  <p className="max-w-[300px] font-mono text-[10px] leading-relaxed tracking-[0.18em] text-faint">
                    NOTHING IS STORED ON THIS SITE — THE BRIEF GOES STRAIGHT TO
                    MY WHATSAPP.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* ------------------------------------------------ side panel */}
          <aside className="lg:col-span-5 lg:border-l lg:border-white/[0.07] lg:pl-16">
            {/* direct line */}
            <Reveal delay={0.1}>
              <div className="border border-white/[0.09] px-6 py-8 md:px-8">
                <p className="mb-5 font-mono text-[10px] tracking-[0.35em] text-brass">
                  ( DIRECT LINE )
                </p>
                <p className="font-wide text-2xl font-extrabold tracking-tight text-bone md:text-3xl">
                  {WHATSAPP_NUMBER_INTL}
                </p>
                <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.22em] text-faint">
                  FASTEST RESPONSE — MESSAGE ME DIRECTLY, NO FORM NEEDED
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 border border-white/25 px-8 py-4 font-mono text-[11px] tracking-[0.25em] text-bone transition-all duration-300 hover:border-bone hover:bg-bone hover:text-ink"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
                  OPEN WHATSAPP
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </a>
              </div>
            </Reveal>

            {/* what happens next */}
            <Reveal delay={0.2} className="mt-12">
              <p className="mb-7 font-mono text-[10px] tracking-[0.35em] text-faint">
                ( WHAT HAPPENS NEXT )
              </p>
              <ul className="space-y-7">
                {NEXT_STEPS.map((step) => (
                  <li key={step.number} className="flex gap-5">
                    <span className="pt-1 font-mono text-[10px] tracking-[0.3em] text-brass">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-mono text-[11px] tracking-[0.25em] text-bone">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-smoke">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* availability */}
            <Reveal delay={0.3} className="mt-12">
              <div className="border-t border-white/[0.07] pt-7">
                <p className="mb-3 font-mono text-[10px] tracking-[0.35em] text-faint">
                  ( AVAILABILITY )
                </p>
                <p className="text-sm leading-relaxed text-smoke">
                  Currently booking new projects — working with brands,
                  founders and agencies worldwide, fully remote. From a single
                  ad to a full campaign, every project is discussed personally.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
