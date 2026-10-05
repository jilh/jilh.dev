import '@fontsource-variable/inter';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './globals.css';
import Nav from '../components/Nav';
import { person, values } from '../content/data';

export const metadata = {
  title: 'Stephen Afolayan',
  description: 'Developer advocate, community and program manager, and React Native engineer.',
};

export const viewport = { themeColor: '#000000' };

// Runs before the page paints, so the chosen theme never flashes. Dark is the default.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <footer className="foot">
          <div className="wrap foot-in">
            <span>© 2026 {person.name}</span>
            <span className="foot-line">{values.line}</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
