'use client';

import { useEffect, useRef, useState } from 'react';

export function Reveal({ children, className = '', as: Tag = 'div', delay = 0 }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${on ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function Head({ kicker, title, em, sub }) {
  return (
    <Reveal className="head">
      <p className="kicker">{kicker}</p>
      <h2>
        {title} <em>{em}</em>
      </h2>
      {sub && <p className="sec-sub">{sub}</p>}
    </Reveal>
  );
}

export function Count({ to, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const [val, setVal] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) return;

    let raf = 0;
    let started = false;
    setVal(0);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          const t0 = performance.now();
          const duration = 1400;
          const tick = (t) => {
            const p = Math.min((t - t0) / duration, 1);
            setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}

// An image that stays invisible until it has actually loaded, so a failed image never shows a broken icon.
export function FadeImg({ src, alt = '', className = '', ...rest }) {
  const [ok, setOk] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setOk(true);
  }, []);

  return <img ref={ref} src={src} alt={alt} className={`fade ${ok ? 'ok' : ''} ${className}`} onLoad={() => setOk(true)} {...rest} />;
}

// Shows your screenshot if the file exists, otherwise a designed placeholder.
export function Media({ src, alt, label, ratio = '16 / 10' }) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  // The placeholder is always underneath. The image fades in over it only once it has loaded.
  return (
    <div className="media" style={{ aspectRatio: ratio }}>
      <div className="media-ph" aria-hidden="true">
        <span>{label}</span>
      </div>
      {src && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading="lazy"
          className={loaded ? 'ok' : ''}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
