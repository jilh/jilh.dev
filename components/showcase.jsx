'use client';

import { useCallback, useEffect, useState } from 'react';
import { Reveal, Head, FadeImg } from './bits';
import Scroller from './Scroller';
import { person, talks } from '../content/data';

const pad = (n) => String(n).padStart(2, '0');
const fmt = (s) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  return h ? `${h}:${pad(m)}:${pad(s % 60)}` : `${m}:${pad(s % 60)}`;
};
const thumb = (v) => `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
const watch = (v) => `https://www.youtube.com/watch?v=${v.id}${v.start ? `&t=${v.start}s` : ''}`;

function Player({ video }) {
  const [on, setOn] = useState(false);
  const src = `https://www.youtube.com/embed/${video.id}?start=${video.start || 0}&autoplay=1`;
  return (
    <div className="video">
      {on ? (
        <iframe
          src={src}
          title={`${video.event}: ${video.title}`}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button className="play" onClick={() => setOn(true)} aria-label={`Play: ${video.title}`}>
          <FadeImg className="poster" src={thumb(video)} alt="" />
          <span className="play-ico">▶</span>
          <span className="play-txt">{video.start ? `Play from ${fmt(video.start)}` : 'Play'}</span>
        </button>
      )}
    </div>
  );
}

export function Talks({ tone }) {
  const videos = talks.videos;
  const first = Math.max(0, videos.findIndex((v) => v.featured));
  const [i, setI] = useState(first);
  const v = videos[i];

  return (
    <section id="talks" className={`sec ${tone}`}>
      <div className="wrap">
        <Head kicker="Talks" title="On stage," em="and on the record." />
        <div className="talks">
          <Reveal>
            {/* key resets the player when you pick another talk */}
            <Player key={v.id + v.start} video={v} />
          </Reveal>
          <Reveal delay={100} className="talks-text">
            <p className="meta">
              {v.event}
              {v.when ? ` · ${v.when}` : ''}
            </p>
            <h3 className="talk-title">“{v.title}”</h3>
            {v.note && <p className="talk-note">{v.note}</p>}
            <a className="link" href={watch(v)} target="_blank" rel="noreferrer">
              Watch on YouTube ↗
            </a>
            <p className="meta" style={{ marginTop: 32 }}>
              Also on stage at
            </p>
            <ul className="stages">
              {talks.stages.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <a className="btn ghost" href={`mailto:${person.email}?subject=Speaking%20invitation`}>
              Invite me to speak
            </a>
          </Reveal>
        </div>

        {videos.length > 1 && (
          <div className="more-talks">
            <p className="meta">More talks</p>
            <Scroller label="talks">
              {videos.map((t, idx) => (
                <button
                  key={t.id + t.start}
                  className={`vcard item ${idx === i ? 'active' : ''}`}
                  onClick={() => setI(idx)}
                  aria-pressed={idx === i}
                >
                  <span className="vthumb">
                    <FadeImg src={thumb(t)} alt="" loading="lazy" />
                    <span className="vplay">▶</span>
                  </span>
                  <span className="vmeta">
                    {t.event}
                    {t.when ? ` · ${t.when}` : ''}
                  </span>
                  <strong>{t.title}</strong>
                </button>
              ))}
            </Scroller>
          </div>
        )}
      </div>
    </section>
  );
}

function Lightbox({ items, index, onClose, onNav }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNav(-1);
      if (e.key === 'ArrowRight') onNav(1);
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onNav]);

  const m = items[index];
  const line = [m.event, m.when, m.place].filter(Boolean).join(' · ');
  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={m.title} onClick={onClose}>
      <figure className="lb-in" onClick={(e) => e.stopPropagation()}>
        <img src={m.src} alt={m.alt || m.title} />
        <figcaption className="lb-cap">
          {line && <p className="meta">{line}</p>}
          <h3>{m.title}</h3>
          {m.note && <p>{m.note}</p>}
          <p className="meta">
            {index + 1} / {items.length}
          </p>
        </figcaption>
      </figure>
      <button className="lb-btn lb-x" onClick={onClose} aria-label="Close photo" autoFocus>
        ✕
      </button>
      {items.length > 1 && (
        <>
          <button
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <button
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

export function Moments({ tone, items }) {
  const tags = ['All', ...Array.from(new Set(items.flatMap((m) => m.tags || [])))];
  const [tag, setTag] = useState('All');
  const [open, setOpen] = useState(null);
  const shown = tag === 'All' ? items : items.filter((m) => (m.tags || []).includes(tag));

  const close = useCallback(() => setOpen(null), []);
  const nav = useCallback(
    (dir) => setOpen((o) => (o === null ? o : (o + dir + shown.length) % shown.length)),
    [shown.length]
  );

  return (
    <section id="moments" className={`sec ${tone}`}>
      <div className="wrap">
        <Head
          kicker="Moments"
          title="The rooms I have"
          em="stood in."
          sub="Stages, conferences, and meetups. Tap any photo for the story behind it."
        />
        {tags.length > 2 && (
          <div className="filters" role="group" aria-label="Filter photos">
            {tags.map((t) => (
              <button
                key={t}
                className="chip filter"
                aria-pressed={tag === t}
                onClick={() => {
                  setTag(t);
                  setOpen(null);
                }}
              >
                {t}
              </button>
            ))}
          </div>
        )}
        <div className="masonry">
          {shown.map((m, idx) => (
            <button key={m.src} className="tile" onClick={() => setOpen(idx)} aria-label={`Open photo: ${m.title}`}>
              <img src={m.src} alt={m.alt || m.title} loading="lazy" />
              <span className="tile-cap">
                <strong>{m.title}</strong>
                <small>{[m.when, m.place].filter(Boolean).join(' · ') || m.event}</small>
              </span>
            </button>
          ))}
        </div>
      </div>
      {open !== null && shown[open] && <Lightbox items={shown} index={open} onClose={close} onNav={nav} />}
    </section>
  );
}
