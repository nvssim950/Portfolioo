import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/data";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ProjectDetail } from "@/components/project-detail";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return PROJECTS.filter((p) => p.description).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.title} — Case study`;
  const description = project.tagline ?? project.blurb;
  const ogImage = project.screenshots?.[0]?.src;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default async function ProjectPage(
  { params }: { params: Promise<Params> },
) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project || !project.description) notFound();
  return (
    <main className="relative">
      <Nav />
      <ProjectDetail project={project} />
      <Footer />
    </main>
  );
}
