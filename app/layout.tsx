import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { PROFILE, STACK } from "@/lib/data";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://nvssim.me";
const TWITTER_HANDLE = "@BaheddiN52174";

const TITLE = `${PROFILE.name} ${PROFILE.role}`;
const DESCRIPTION =
  "Nassim Baheddi freelance engineer building n8n automations, AI agents, and Next.js web apps. Based in Algiers, working with founders worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${PROFILE.name}`,
  },
  description: DESCRIPTION,
  applicationName: PROFILE.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Nassim Baheddi",
    "Nassim",
    "Baheddi",
    "nvssim",
    "n8n automation",
    "n8n developer",
    "n8n expert",
    "AI agents",
    "LangChain developer",
    "OpenAI agents",
    "Claude agents",
    "Anthropic",
    "GPT-4",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "TailwindCSS",
    "Supabase",
    "Postgres",
    "Vercel",
    "freelance developer",
    "freelance Algiers",
    "freelance Algeria",
    "freelance engineer",
    "full-stack developer",
    "automation engineer",
    "founder engineer",
    "UI/UX designer",
    "web development Algeria",
    "ESI Algiers",
    "École Nationale Supérieure d'Informatique",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.socials.linkedin }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  category: "technology",
  classification: "Portfolio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: PROFILE.name,
    locale: "en_US",
    firstName: "Nassim",
    lastName: "Baheddi",
    username: "nvssim",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  // Add your verification tokens once you have them:
  // verification: {
  //   google: "google-site-verification=XXXX",
  //   other: { "msvalidate.01": "XXXX" },
  // },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PROFILE.name,
    alternateName: [PROFILE.short, "nvssim"],
    url: SITE_URL,
    image: `${SITE_URL}/nassim.jpg`,
    jobTitle: PROFILE.role,
    description: DESCRIPTION,
    email: `mailto:${PROFILE.email}`,
    knowsAbout: STACK.map((s) => s.name),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: PROFILE.school,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Algiers",
        addressCountry: "DZ",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Algiers",
      addressCountry: "DZ",
    },
    nationality: { "@type": "Country", name: "Algeria" },
    sameAs: [
      PROFILE.socials.github,
      PROFILE.socials.linkedin,
      PROFILE.socials.x,
      PROFILE.socials.reddit,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: PROFILE.name,
    description: DESCRIPTION,
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#person` },
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: `${PROFILE.name} Automation, Agents & Web`,
    url: SITE_URL,
    description: DESCRIPTION,
    image: `${SITE_URL}/nassim.jpg`,
    provider: { "@id": `${SITE_URL}/#person` },
    areaServed: { "@type": "Place", name: "Worldwide" },
    serviceType: [
      "n8n automation",
      "AI agent development",
      "Next.js web development",
      "UI/UX design",
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${display.variable}`}>
      <body className="bg-background text-foreground font-sans antialiased">
        <SmoothScroll />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
