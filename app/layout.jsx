import './globals.css';

export const metadata = {
  title: 'Stephen Afolayan | Developer Advocate, Community & Program Manager, React Native Engineer',
  description:
    'I build developer communities from zero and ship the apps to prove the tools work. Developer advocate, community and program manager, and React Native engineer. TEDx speaker.',
  openGraph: {
    title: 'Stephen Afolayan (jilh)',
    description: 'I build developer communities from zero and ship the apps to prove the tools work.',
    type: 'website',
  },
};

export const viewport = { themeColor: '#000000' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&family=Instrument+Serif:ital@0;1&display=swap"
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
