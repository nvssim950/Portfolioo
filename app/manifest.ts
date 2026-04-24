import type { MetadataRoute } from "next";
import { PROFILE } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PROFILE.name} ${PROFILE.role}`,
    short_name: PROFILE.short,
    description:
      "Nassim Baheddi freelance engineer building n8n automations, AI agents, and Next.js web apps.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    orientation: "portrait",
    categories: ["productivity", "developer-tools", "business"],
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
