'use client';

import { Reveal, Head, Count } from './bits';
import { Big } from './ui';

export function Proof({ proof }) {
  return (
    <section id="proof" className="sec">
      <div className="wrap">
        <Head kicker={proof.kicker} title={proof.title} em={proof.em} />
        <div className="rows">
          {proof.items.map((c, i) => (
            <Reveal className="row" key={c.name} delay={i * 60}>
              <div className="row-n big">
                <Big text={c.big} />
              </div>
              <div className="row-b">
                <h3>{c.name}</h3>
                <p>{c.line}</p>
              </div>
              <div className="row-m">
                <span>{c.role}</span>
                <span>{c.years}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {proof.note && <p className="note">{proof.note}</p>}
      </div>
    </section>
  );
}

export function Program({ program }) {
  return (
    <section id="programs" className="sec">
      <div className="wrap">
        <Head kicker={program.kicker} title={program.title} em={program.em} />
        <div className="program">
          <Reveal>
            <div className="giant">
              <Count to={program.big} suffix={program.suffix} />
            </div>
            <p className="program-label">{program.label}</p>
          </Reveal>
          <Reveal delay={100} className="program-text">
            <p>{program.text}</p>
            <p className="kicker">{program.meta}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
