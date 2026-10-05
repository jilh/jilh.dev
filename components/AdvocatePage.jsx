import Hero from './Hero';
import { Marquee, Story, Tools, Values, Resume, Other, Contact } from './shared';
import { Proof, Program } from './advocateSections';
import { Talks, Moments } from './showcase';
import { advocate as d } from '../content/data';

// The Advocate page: people, rooms, stages. (Photos appear once their files exist.)
export default function AdvocatePage({ moments = [] }) {
  return (
    <div className="page lens-advocate">
      <Hero hero={d.hero} />
      <Marquee items={d.marquee} />
      <Story story={d.story} />
      <Proof proof={d.proof} />
      <Program program={d.program} />
      <Talks />
      {moments.length > 0 && <Moments items={moments} />}
      <Tools tools={d.tools} />
      <Values />
      <Resume resume={d.resume} />
      <Other other={d.other} />
      <Contact />
    </div>
  );
}
