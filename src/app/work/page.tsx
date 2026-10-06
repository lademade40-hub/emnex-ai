import type { Metadata } from "next";
import WorkPage from "@/components/site/work-page";

export const metadata: Metadata = {
  title: "Work Archive — EMNEX AI",
  description:
    "The complete archive of EMNEX AI films — AI-powered product advertisements, concept studies and cinematic brand visuals, all in one index.",
};

export default function Page() {
  return <WorkPage />;
}
