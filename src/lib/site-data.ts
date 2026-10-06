import type { SiteRoute } from "@/components/site/router";

export type VideoAsset = {
  id: string;
  index: string;
  title: string;
  tag: string;
  src: string;
  poster: string;
};

/** Cloudinary serves a still frame of any video by swapping the extension. */
function posterFor(src: string): string {
  return src
    .replace("/video/upload/", "/video/upload/so_1/")
    .replace(/\.mp4$/, ".jpg");
}

function asset(
  id: string,
  index: string,
  title: string,
  tag: string,
  src: string
): VideoAsset {
  return { id, index, title, tag, src, poster: posterFor(src) };
}

/* ------------------------------------------------------------------ */
/* Portfolio video assets — provided by EMNEX AI                      */
/* ------------------------------------------------------------------ */

export const HERO_VIDEO: VideoAsset = asset(
  "hero-film",
  "001",
  "AI Visuals — Showreel Opening",
  "SHOWREEL",
  "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229492/Untitled_design_28.mp4"
);

export const FEATURED_VIDEO: VideoAsset = asset(
  "featured-film",
  "002",
  "AI Product Film",
  "COMMERCIAL CONCEPT",
  "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229473/Contra_1.mp4"
);

export const WORK_VIDEOS: VideoAsset[] = [
  asset(
    "work-cinematic-product",
    "003",
    "Cinematic Product Advertisement",
    "PRODUCT FILM",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229479/Untitled_design_26.mp4"
  ),
  asset(
    "work-brand-visual",
    "004",
    "AI Brand Visual",
    "BRAND VISUAL",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229472/Untitled_design_32.mp4"
  ),
  asset(
    "work-commercial-concept",
    "005",
    "AI Commercial Concept",
    "COMMERCIAL",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229469/Contra_3.mp4"
  ),
  asset(
    "work-creator-campaign",
    "006",
    "Creator Campaign Visual",
    "CAMPAIGN",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229468/Creator_pointing_at_AI_advertise__20260911144648.mp4"
  ),
  asset(
    "work-profile-film",
    "007",
    "AI Creator Profile Film",
    "PROFILE FILM",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229462/AI_creator_profile_advertisement_20260911144617.mp4"
  ),
  asset(
    "work-brand-film",
    "008",
    "Cinematic Brand Film",
    "BRAND FILM",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229460/Contra_2.mp4"
  ),
  asset(
    "work-camera-concept-1",
    "009",
    "Cinematic Camera Concept — I",
    "PRODUCT CONCEPT",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229460/Camera_disassembling_and_reassem__20260923230600.mp4"
  ),
  asset(
    "work-camera-concept-2",
    "010",
    "Cinematic Camera Concept — II",
    "PRODUCT CONCEPT",
    "https://res.cloudinary.com/jtjd6zpo/video/upload/v1791229459/Camera_disassembling_and_reassem__20260923230550.mp4"
  ),
];

export const ALL_VIDEOS: VideoAsset[] = [HERO_VIDEO, FEATURED_VIDEO, ...WORK_VIDEOS];

/* ------------------------------------------------------------------ */
/* Contact & social                                                   */
/* ------------------------------------------------------------------ */

export const WHATSAPP_NUMBER_DISPLAY = "0816 298 3333";
export const WHATSAPP_NUMBER_INTL = "+234 816 298 3333";

export const WHATSAPP_LINK =
  "https://wa.me/2348162983333?text=" +
  encodeURIComponent("Hi EMNEX AI, I'd like to discuss a project.");

/* ------------------------------------------------------------------ */
/* Project inquiry form → WhatsApp brief                              */
/* ------------------------------------------------------------------ */

export const PROJECT_TYPES = [
  "AI Product Commercial",
  "Cinematic Brand Film",
  "Social Media Ads",
  "Product Visualization",
  "Creative AI Content",
  "Something else",
];

export const BUDGET_OPTIONS = [
  "To be discussed",
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "Above $1,000",
];

export type BriefFields = {
  name: string;
  brand: string;
  email: string;
  type: string;
  budget: string;
  message: string;
};

/** Turns the inquiry form into a structured WhatsApp message. */
export function buildWhatsAppBriefUrl(f: BriefFields): string {
  const lines = [
    "Hello EMNEX AI — I'd like to start a project.",
    "",
    `NAME: ${f.name.trim()}`,
    f.brand.trim() ? `BRAND: ${f.brand.trim()}` : null,
    f.email.trim() ? `EMAIL: ${f.email.trim()}` : null,
    f.type ? `PROJECT TYPE: ${f.type}` : null,
    f.budget ? `BUDGET: ${f.budget}` : null,
    "",
    "BRIEF:",
    f.message.trim(),
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  return `https://wa.me/2348162983333?text=${encodeURIComponent(lines)}`;
}

export const EMAIL = "emnexai@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/emnex_ai/?hl=en" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61564717200555",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@emnexfpu9jg" },
];

export const PROFILE_IMAGE =
  "https://res.cloudinary.com/jtjd6zpo/image/upload/v1790602534/5848204809893253084.jpg";

/* ------------------------------------------------------------------ */
/* Services                                                           */
/* ------------------------------------------------------------------ */

export const SERVICES = [
  {
    number: "01",
    title: "AI PRODUCT COMMERCIALS",
    description:
      "High-impact AI-generated advertisements designed around products, campaigns and launches.",
  },
  {
    number: "02",
    title: "CINEMATIC BRAND FILMS",
    description:
      "Story-driven visual content designed to give brands a stronger visual identity.",
  },
  {
    number: "03",
    title: "SOCIAL MEDIA ADS",
    description:
      "Short-form promotional videos created to capture attention and communicate products quickly.",
  },
  {
    number: "04",
    title: "PRODUCT VISUALIZATION",
    description:
      "Transform products and concepts into visual worlds that would be difficult or expensive to produce traditionally.",
  },
  {
    number: "05",
    title: "CREATIVE AI CONTENT",
    description:
      "Experimental visual concepts, branded campaigns and creative AI-powered content.",
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                         */
/* ------------------------------------------------------------------ */

export const INDUSTRIES = [
  { title: "BEAUTY", detail: "Skincare • Cosmetics • Personal Care" },
  { title: "FASHION", detail: "Clothing • Accessories • Luxury" },
  { title: "TECH", detail: "Devices • Apps • Consumer Technology" },
  { title: "E-COMMERCE", detail: "Products • DTC Brands • Online Stores" },
  { title: "FOOD & HOSPITALITY", detail: "Restaurants • Food Brands • Hospitality" },
  {
    title: "CREATORS & AGENCIES",
    detail: "Personal Brands • Creative Agencies • Campaigns",
  },
];

/* ------------------------------------------------------------------ */
/* Process                                                            */
/* ------------------------------------------------------------------ */

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "CONCEPT",
    description: "Develop the visual idea and creative direction.",
  },
  {
    number: "02",
    title: "VISUAL DEVELOPMENT",
    description: "Create products, environments, scenes and visual concepts with AI.",
  },
  {
    number: "03",
    title: "MOTION",
    description: "Transform the visual concepts into cinematic moving sequences.",
  },
  {
    number: "04",
    title: "EDITING",
    description: "Combine motion, pacing, transitions, sound and visual effects.",
  },
  {
    number: "05",
    title: "FINAL FILM",
    description:
      "Deliver a polished visual ready for social media, campaigns or brand promotion.",
  },
];

export type NavLink = {
  label: string;
  route: SiteRoute;
  /** Home-page section the link scrolls to (when route is "/"). */
  sectionId?: string;
};

export const NAV_LINKS: NavLink[] = [
  { label: "WORK", route: "/work" },
  { label: "SERVICES", route: "/", sectionId: "services" },
  { label: "PROCESS", route: "/", sectionId: "process" },
  { label: "ABOUT", route: "/", sectionId: "about" },
];
