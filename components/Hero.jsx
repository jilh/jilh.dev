'use client';

import Link from 'next/link';
import { Count } from './bits';
import { Arrow } from './ui';

export default function Hero({ hero, aside }) {
  const { eyebrow, headline, sub, primary, hint, stats } = hero;
  return (
    <header id="top" className="hero">
      <div className={`wrap hero-grid ${aside ? 'two' : ''}`}>
        <div className="hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1>
            {headline[0]} <em>{headline[1]}</em>
          </h1>
          <p className="lede">{sub}</p>
          <div className="cta">
            <a className="btn" href={primary.href}>
              {primary.label}
            </a>
            <a className="btn ghost" href="#resume">
              Get the resume
            </a>
          </div>
          <p className="hint">
            {hint.text}{' '}
            <Link href={hint.href}>
              {hint.label} <Arrow />
            </Link>
          </p>
        </div>
        {aside}
      </div>
      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="num">
                <Count to={s.to} suffix={s.suffix || ''} />
              </div>
              <div className="lab">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
