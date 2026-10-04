'use client';

import { useCallback, useEffect, useState } from 'react';
import { Count, Reveal } from './bits';
import { Communities, Apps, Program, Values, Resume, Contact } from './sections';
import { Talks, Moments } from './showcase';
import { person, lenses, marquee, timeline } from '../content/data';

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  };

  return (
    <button
      className="theme"
      onClick={flip}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      title={theme === 'dark' ? 'Light theme' : 'Dark theme'}
    >
      {theme === 'dark' ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

export default function Site({ moments = [] }) {
  const [lens, setLensState] = useState('advocate');

  // Read ?lens=builder from the URL, so you can send a recruiter the right view.
  useEffect(() => {
    try {
      const q = new URLSearchParams(window.location.search).get('lens');
      if (q && lenses[q]) setLensState(q);
    } catch (e) {}
  }, []);

  const setLens = useCallback((key) => {
    setLensState(key);
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lens', key);
      window.history.replaceState(null, '', url);
    } catch (e) {}
  }, []);

  const L = lenses[lens];

  const renderers = {
    communities: (tone) => <Communities key="communities" tone={tone} />,
    apps: (tone) => <Apps key="apps" tone={tone} />,
    program: (tone) => <Program key="program" tone={tone} />,
    talks: (tone) => <Talks key="talks" tone={tone} />,
    moments: (tone) => <Moments key="moments" tone={tone} items={moments} />,
  };
  // Sections alternate light/dark by position. The photo gallery is skipped until you add photos.
  const keys = L.order.filter((k) => k !== 'moments' || moments.length > 0);

  return (
    <>
      <a className="skip" href="#proof">
        Skip to content
      </a>

      <nav className="nav" aria-label="Main">
        <div className="nav-in">
          <a className="logo" href="#top" aria-label="jilh, back to top">
            jilh
          </a>
          <div className="nav-links">
            <a href="#story">Story</a>
            <a href="#proof">Proof</a>
            <a href="#talks">Talks</a>
            {moments.length > 0 && <a href="#moments">Moments</a>}
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-tools">
            <div className="lens" data-lens={lens} role="group" aria-label="Choose a lens">
              <span className="thumb" aria-hidden="true" />
              {Object.entries(lenses).map(([key, l]) => (
                <button key={key} aria-pressed={lens === key} onClick={() => setLens(key)}>
                  {l.label}
                </button>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <header id="top" className="hero dark">
        <div className="wrap">
          <p className="eyebrow">
            Stephen Afolayan · Developer Advocate · Community &amp; Program Manager · React Native Engineer
          </p>
          <h1 key={lens} className="swap">
            {L.headline[0]} <em>{L.headline[1]}</em>
          </h1>
          <p key={`${lens}-sub`} className="lede swap">
            {L.sub}
          </p>
          <div className="cta">
            <a className="btn" href="#proof">
              See the proof
            </a>
            <a className="btn ghost" href="#resume">
              Get the resume
            </a>
          </div>
          <div className="stats" key={`${lens}-stats`}>
            {L.stats.map((s) => (
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

      <div className="marquee dark" aria-hidden="true">
        <div className="track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>

      <section id="story" className="sec dark">
        <div className="wrap">
          <Reveal className="head">
            <p className="kicker">Since 2009</p>
            <h2>
              Seventeen years of <em>building.</em>
            </h2>
            <p className="sec-sub">
              I started with HTML in Dreamweaver. The work changed shape over the years, but the habit stayed:
              make the thing, then gather the people who will use it.
            </p>
          </Reveal>
        </div>
        <ol className="tl" tabIndex={0} aria-label="Timeline, scroll sideways">
          {timeline.map((t) => (
            <li className={`tl-item ${t.now ? 'now' : ''}`} key={t.year}>
              <span className="yr">{t.year}</span>
              <p>{t.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <div id="proof" key={lens}>
        {keys.map((k, i) => renderers[k](i % 2 === 0 ? 'light' : 'dark'))}
      </div>

      <Values tone="light" />
      <Resume tone="dark" lens={lens} setLens={setLens} />
      <Contact tone="light" />

      <footer className="foot dark">
        <div className="wrap foot-in">
          <span>© 2026 {person.name}</span>
          <span className="serif">Just Introduce Life to Humanity.</span>
        </div>
      </footer>
    </>
  );
}
