'use client';

import { Reveal, Count, Media, Head } from './bits';
import Scroller from './Scroller';
import { person, communities, apps, program, values, openTo, lenses } from '../content/data';

export function Communities({ tone }) {
  return (
    <section id="communities" className={`sec ${tone}`}>
      <div className="wrap">
        <Head
          kicker="Communities"
          title="Starting where nothing exists"
          em="yet."
          sub="Five communities, built from zero. The pattern is the same each time: find the builders, give them a reason to meet, and make it last."
        />
        <div className="grid-2">
          {communities.map((c, i) => (
            <Reveal as="article" className="card" key={c.name} delay={(i % 2) * 80}>
              <div className="big">{c.big}</div>
              <h3>{c.name}</h3>
              <p className="role">
                {c.role} · {c.years}
              </p>
              <dl className="story">
                <dt>Start</dt>
                <dd>{c.start}</dd>
                <dt>Moves</dt>
                <dd>{c.moves}</dd>
                <dt>Result</dt>
                <dd>{c.result}</dd>
              </dl>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Apps({ tone }) {
  return (
    <section id="apps" className={`sec ${tone}`}>
      <div className="wrap">
        <Head
          kicker="Apps"
          title="Shipped, with real users,"
          em="on real phones."
          sub="Built with Expo and React Native. The source is private because of the payment integrations, and I am happy to walk through the code on a call."
        />
        <Scroller label="apps">
          {apps.map((a) => {
            const href = a.link === 'vendorl' ? person.vendorl : person.play;
            return (
              <article className="card app item" key={a.name}>
                <Media src={a.image} alt={`${a.name} screenshot`} label={a.name} />
                <div className="app-body">
                  <p className="meta">{a.meta}</p>
                  <h3>{a.name}</h3>
                  <p className="hook">{a.hook}</p>
                  <ul>
                    {a.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {a.stack.map((s) => (
                      <span className="chip" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="app-foot">
                    <strong className={a.soon ? 'soon' : ''}>{a.metric}</strong>
                    <a href={href} target="_blank" rel="noreferrer">
                      {a.soon ? 'vendorl.com' : 'Google Play'} ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </Scroller>
      </div>
    </section>
  );
}

export function Program({ tone }) {
  return (
    <section id="programs" className={`sec ${tone}`}>
      <div className="wrap">
        <Head kicker="Programs" title="Turning a strategy into" em="people with jobs." />
        <div className="program">
          <Reveal className="program-big">
            <div className="giant">
              <Count to={program.big} suffix={program.bigSuffix} />
            </div>
            <p>{program.bigLabel}</p>
            <p className="meta">Brave Redemptive · Program Manager since June 2024</p>
          </Reveal>
          <Reveal className="program-text" delay={100}>
            {program.points.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="meta" style={{ marginTop: 28 }}>
              {program.toolsIntro}
            </p>
            <div className="chips">
              {program.tools.map((t) => (
                <span className="chip" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Values({ tone }) {
  return (
    <section id="values" className={`sec ${tone}`}>
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
        <p className="amen">{values.alt}</p>
      </div>
    </section>
  );
}

export function Resume({ tone, lens, setLens }) {
  const L = lenses[lens];
  const otherKey = lens === 'advocate' ? 'builder' : 'advocate';
  return (
    <section id="resume" className={`sec ${tone}`}>
      <div className="wrap">
        <Head
          kicker="Resume"
          title="The version that fits"
          em="what you are hiring for."
          sub="One person, two shapes of work. Pick the resume that matches the role."
        />
        <p className="lens-note">
          Showing resumes for the <strong>{L.label}</strong> lens.
        </p>
        <div className="resume-grid" key={lens}>
          {L.resumes.map((r, i) => (
            <Reveal className="card resume-card" key={r.title} delay={i * 90}>
              <p className="meta">PDF</p>
              <h3>{r.title}</h3>
              <p>{r.for}</p>
              <a className="btn" href={r.file} download>
                Download resume ↓
              </a>
            </Reveal>
          ))}
        </div>
        <button className="link-btn" onClick={() => setLens(otherKey)}>
          Hiring for something else? Switch to the {lenses[otherKey].label} lens →
        </button>
      </div>
    </section>
  );
}

export function Contact({ tone }) {
  return (
    <section id="contact" className={`sec ${tone}`}>
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
              LinkedIn ↗
            </a>
            <a href={person.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={person.play} target="_blank" rel="noreferrer">
              Google Play ↗
            </a>
          </div>
          <p className="meta" style={{ marginTop: 40 }}>
            Open to
          </p>
          <ul className="open-list">
            {openTo.map((o) => (
              <li key={o}>{o}</li>
            ))}
          </ul>
          <p className="meta" style={{ marginTop: 20 }}>
            Remote, or with relocation. Canada, US, EU, and Africa.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
