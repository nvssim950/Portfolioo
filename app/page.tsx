import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Craft } from "@/components/craft";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Process />
      <Craft />
      <CTA />
      <Footer />
    </main>
  );
}
