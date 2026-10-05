import Hero from './Hero';
import Phone from './Phone';
import { Story, Tools, Values, Resume, Other, Contact } from './shared';
import { AppStage, Craft } from './builderSections';
import { builder as d } from '../content/data';

// The Builder page: apps, devices, code.
export default function BuilderPage() {
  const apps = d.apps.items;
  const aside = (
    <div className="hero-aside" aria-hidden="true">
      <Phone app={apps[2]} className="p-back" />
      <Phone app={apps[0]} className="p-front" />
    </div>
  );
  return (
    <div className="page lens-builder">
      <Hero hero={d.hero} aside={aside} />
      <Story story={d.story} />
      <AppStage apps={d.apps} />
      <Craft craft={d.craft} />
      <Tools tools={d.tools} />
      <Values />
      <Resume resume={d.resume} />
      <Other other={d.other} />
      <Contact />
    </div>
  );
}
