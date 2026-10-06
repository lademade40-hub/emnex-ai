import type { Metadata, Viewport } from "next";
import { Archivo, Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LightboxProvider } from "@/components/site/lightbox";
import SiteShell from "@/components/site/site-shell";
import { SITE_URL } from "@/lib/site-data";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  style: ["italic", "normal"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_TITLE = "EMNEX AI — AI-Powered Product Films & Cinematic Brand Videos";
const SITE_DESCRIPTION =
  "EMNEX AI creates AI-powered product advertisements, cinematic promotional videos and striking visual content for brands.";
const OG_IMAGE =
  "https://res.cloudinary.com/jtjd6zpo/image/upload/v1790602534/5848204809893253084.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  alternates: { canonical: "/" },
  description: SITE_DESCRIPTION,
  keywords: [
    "EMNEX AI",
    "AI video",
    "AI product advertisements",
    "cinematic brand videos",
    "AI commercial",
    "product visualization",
    "social media ads",
    "AI content creation",
  ],
  authors: [{ name: "EMNEX AI" }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "EMNEX AI",
    type: "website",
    images: [{ url: OG_IMAGE, alt: "EMNEX AI — cinematic AI visuals" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  // Google Search Console ownership verification — set GOOGLE_SITE_VERIFICATION
  // in Vercel env vars to the value Google gives you (e.g. "google1234abcd.html" content).
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${archivo.variable} ${bodoni.variable} ${plexMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        <LightboxProvider>
          <SiteShell>{children}</SiteShell>
        </LightboxProvider>
      </body>
    </html>
  );
}
