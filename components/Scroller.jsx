'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Arrow } from './ui';

// A horizontal, snap-scrolling row. Arrow buttons only appear when the content overflows,
// so a few items sit still and many become a carousel.
export default function Scroller({ children, label, className = '' }) {
  const ref = useRef(null);
  const [st, setSt] = useState({ overflow: false, prev: false, next: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setSt({
      overflow: el.scrollWidth > el.clientWidth + 4,
      prev: el.scrollLeft > 4,
      next: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', update);
      ro.disconnect();
    };
  }, [update]);

  const by = (dir) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: 'smooth' });
  };

  return (
    <div className={`scroller ${className}`}>
      {st.overflow && (
        <div className="scroll-ctl">
          <button onClick={() => by(-1)} disabled={!st.prev} aria-label={`Scroll ${label} left`}>
            <Arrow dir="left" />
          </button>
          <button onClick={() => by(1)} disabled={!st.next} aria-label={`Scroll ${label} right`}>
            <Arrow dir="right" />
          </button>
        </div>
      )}
      <div className="scroll-track" ref={ref} tabIndex={0} aria-label={label}>
        {children}
      </div>
    </div>
  );
}
