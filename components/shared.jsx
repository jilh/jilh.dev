'use client';

import Link from 'next/link';
import { Reveal, Head } from './bits';
import { Arrow } from './ui';
import { icons } from '../content/icons';
import { person, values, openTo, where } from '../content/data';

export function Icon({ name }) {
  const ic = icons[name];
  if (!ic) return null;
  return <svg className="ico" viewBox={ic.viewBox} aria-hidden="true" focusable="false" dangerouslySetInnerHTML={{ __html: ic.body }} />;
}

export function Marquee({ items }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="track">
        {[...items, ...items].map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
  );
}

export function Story({ story }) {
  return (
    <section id="story" className="sec">
      <div className="wrap">
        <Head kicker={story.kicker} title={story.title} em={story.em} />
        <ol className="chapters">
          {story.chapters.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 90}>
              <span className="ch-n">{c.n}</span>
              <h3>{c.head}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Tools({ tools }) {
  return (
    <section id="tools" className="sec">
      <div className="wrap">
        <Head kicker={tools.kicker} title={tools.title} em={tools.em} />
        <ul className="tools">
          {tools.items.map((t, i) => (
            <Reveal as="li" className="tool" key={t.icon} delay={(i % 7) * 40}>
              <Icon name={t.icon} />
              <span>{icons[t.icon]?.title ?? t.icon}</span>
            </Reveal>
          ))}
        </ul>
        {tools.note && <p className="note">{tools.note}</p>}
      </div>
    </section>
  );
}

export function Values() {
  return (
    <section id="values" className="sec">
      <div className="wrap">
        <Reveal className="head">
          <p className="kicker">What drives me</p>
          <h2 className="values-line">
            <em>{values.line}</em>
          </h2>
          <p className="sec-sub">{values.intro}</p>
        </Reveal>
        <div className="pillars">
          {values.pillars.map((p, i) => (
            <Reveal className="pillar" key={p.name} delay={i * 90}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
        <p className="amen">{values.amen}</p>
      </div>
    </section>
  );
}

// Only the resumes that belong to this page are offered here.
export function Resume({ resume }) {
  return (
    <section id="resume" className="sec">
      <div className="wrap">
        <Head kicker="Resume" title={resume.title} em={resume.em} />
        <div className="cards">
          {resume.items.map((r, i) => (
            <Reveal className="card" key={r.title} delay={i * 90}>
              <p className="kicker">PDF</p>
              <h3>{r.title}</h3>
              <p className="mut">{r.for}</p>
              <a className="btn" href={r.file} download>
                Download resume <Arrow dir="down" />
              </a>
            </Reveal>
          ))}
        </div>
        <p className="elsewhere">
          {resume.elsewhere.text}{' '}
          <Link href={resume.elsewhere.href}>
            {resume.elsewhere.label} <Arrow />
          </Link>
        </p>
      </div>
    </section>
  );
}

// The invitation to see the other side of the site.
export function Other({ other }) {
  return (
    <section id="other" className="sec">
      <div className="wrap">
        <Reveal className="other-box">
          <p className="kicker">{other.kicker}</p>
          <h2>
            {other.title} <em>{other.em}</em>
          </h2>
          <p className="sec-sub">{other.text}</p>
          <Link className="btn" href={other.href}>
            {other.cta} <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <Reveal className="head">
          <p className="kicker">Contact</p>
          <h2>
            Let’s build something <em>people can count on.</em>
          </h2>
        </Reveal>
        <Reveal>
          <a className="mail" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="links">
            <a href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow dir="ne" />
            </a>
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub <Arrow dir="ne" />
            </a>
            <a href={person.play} target="_blank" rel="noreferrer">
              Google Play <Arrow dir="ne" />
            </a>
          </div>
          <p className="open">
            <span className="kicker">Open to</span>
            {openTo}
          </p>
          <p className="mut">{where}</p>
        </Reveal>
      </div>
    </section>
  );
}
