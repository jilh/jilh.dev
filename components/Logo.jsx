'use client';

import { useEffect, useRef, useState } from 'react';

// Dark theme shows /logo-white.png, light theme shows /logo-black.png.
// Both sit in the page and CSS picks one by theme, so there is no flash on load.
// If a file is missing, that theme falls back to the text "jilh".
function Mark({ src, theme }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  const cls = `logo-for-${theme}`;

  useEffect(() => {
    const img = ref.current;
    // the error can fire before React hydrates, so check again once mounted
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) return <span className={`logo-txt ${cls}`}>jilh</span>;
  return <img ref={ref} className={`logo-img ${cls}`} src={src} alt="" height="40" onError={() => setFailed(true)} />;
}

export default function Logo() {
  return (
    <a className="logo" href="#top" aria-label="jilh, back to top">
      <Mark theme="dark" src="/logo-white.png" />
      <Mark theme="light" src="/logo-black.png" />
    </a>
  );
}
