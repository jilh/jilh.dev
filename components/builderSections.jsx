'use client';

import { useState } from 'react';
import { Reveal, Head } from './bits';
import Scroller from './Scroller';
import Phone from './Phone';
import { Arrow } from './ui';
import { person } from '../content/data';

// One phone, one app at a time. Pick an app and the whole stage changes.
// With many apps the picker scrolls sideways, so the section never gets longer.
export function AppStage({ apps }) {
  const [i, setI] = useState(0);
  const a = apps.items[i];
  const href = a.link === 'vendorl' ? person.vendorl : person.play;

  return (
    <section id="apps" className="sec">
      <div className="wrap">
        <Head kicker={apps.kicker} title={apps.title} em={apps.em} sub={apps.sub} />
        <div className="stage">
          <Reveal className="stage-phone">
            <Phone app={a} />
          </Reveal>
          <Reveal className="stage-info" delay={100}>
            <Scroller label="apps" className="tabs">
              {apps.items.map((app, idx) => (
                <button key={app.name} className="chip tab item" aria-pressed={idx === i} onClick={() => setI(idx)}>
                  {app.name}
                </button>
              ))}
            </Scroller>
            <div className="app-detail" key={a.name}>
              <p className="kicker">{a.meta}</p>
              <h3>{a.name}</h3>
              <p className="hook">{a.hook}</p>
              <ul className="feat">
                {a.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="app-foot">
                <div className="chips">
                  {a.stack.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
                <strong className={a.soon ? 'mut' : ''}>{a.metric}</strong>
                <a className="textlink" href={href} target="_blank" rel="noreferrer">
                  {a.soon ? 'vendorl.com' : 'Google Play'} <Arrow dir="ne" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Craft({ craft }) {
  return (
    <section id="craft" className="sec">
      <div className="wrap">
        <Head kicker={craft.kicker} title={craft.title} em={craft.em} />
        <ol className="craft">
          {craft.items.map((c, i) => (
            <Reveal as="li" key={c.name} delay={(i % 3) * 80}>
              <span className="ch-n">{String(i + 1).padStart(2, '0')}</span>
              <h3>{c.name}</h3>
              <p>{c.where}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
