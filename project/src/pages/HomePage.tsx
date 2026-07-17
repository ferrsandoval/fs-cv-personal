import { useSite } from "../context/SiteContext";
import { ProgressBar } from "../components/ProgressBar";
import { SideDots } from "../components/SideDots";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";
import { Education } from "../components/Education";
import { Contact } from "../components/Contact";
import {
  useCounters,
  useHeroGlow,
  useMagnetic,
  useReveal,
  useScrollFx,
  useSectionDots,
  useTilt,
} from "../hooks/useInteractions";

export function HomePage() {
  const { lang } = useSite();

  // DOM-driven effects rebind on language swap (text nodes re-render). Passing
  // `lang` as the dependency re-runs each effect so listeners target fresh nodes.
  useReveal(lang);
  useCounters(lang);
  useMagnetic(lang);
  useTilt(lang);
  useScrollFx();
  useHeroGlow();
  useSectionDots();

  return (
    <>
      <ProgressBar />
      <SideDots />
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
