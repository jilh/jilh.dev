'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { advocate, builder } from '../content/data';
import Logo from './Logo';
import { SunIcon, MoonIcon } from './ui';

const lenses = [advocate, builder];

function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  }, []);

  const flip = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-anim');
    setTheme(next);
    root.dataset.theme = next;
    window.setTimeout(() => root.classList.remove('theme-anim'), 450);
    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  };

  const to = theme === 'dark' ? 'light' : 'dark';
  return (
    <button className="theme" onClick={flip} aria-label={`Switch to ${to} theme`} title={`${to[0].toUpperCase()}${to.slice(1)} theme`}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function Nav() {
  const pathname = usePathname() || '/';
  const active = pathname.startsWith('/builder') ? builder : advocate;

  return (
    <nav className="nav" aria-label="Main">
      <div className="nav-in">
        <Logo />
        <div className="nav-links">
          {active.nav.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </div>
        <div className="nav-tools">
          <div className="lens" data-lens={active.key} role="group" aria-label="Switch view">
            <span className="thumb" aria-hidden="true" />
            {lenses.map((l) => (
              <Link key={l.key} href={l.path} aria-current={l.key === active.key ? 'page' : undefined}>
                {l.label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
