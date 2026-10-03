import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Foundation } from "@/components/site/foundation";
import { Stats } from "@/components/site/stats";
import { Experience } from "@/components/site/experience";
import { Community } from "@/components/site/community";
import { Committee } from "@/components/site/committee";
import { Operate } from "@/components/site/operate";
import { Voices } from "@/components/site/voices";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      {/* Skip link for accessibility */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:font-mono-tech focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink"
      >
        Skip to content
      </a>

      <Nav />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <Foundation />
        <Stats />
        <Experience />
        <Community />
        <Committee />
        <Operate />
        <Voices />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
