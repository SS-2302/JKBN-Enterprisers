import { Hero } from '../components/Hero';
import { DealsSection } from '../components/DealsSection';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { News } from '../components/News';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <DealsSection />
      <Services />
      <About />
      <Projects />
      <News />
      <Contact />
    </>
  );
}