import { Bio } from "@/components/Bio";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { QA } from "@/components/QA";
import { Team } from "@/components/Team";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Bio />
        <Experience />
        <Team />
        <QA />
      </main>
      <Footer />
    </>
  );
}
