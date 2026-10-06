import type { Metadata } from "next";
import ContactPage from "@/components/site/contact-page";

export const metadata: Metadata = {
  title: "Start a Project — EMNEX AI",
  description:
    "Tell EMNEX AI about your brand and the film you need. Fill the brief and it opens directly in WhatsApp — no accounts, no waiting.",
};

export default function Page() {
  return <ContactPage />;
}
