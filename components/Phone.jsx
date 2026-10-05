'use client';

import { FadeImg } from './bits';

// A phone frame. Shows the app's screenshot when the file exists, otherwise a quiet placeholder.
export default function Phone({ app, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <span className="phone-notch" aria-hidden="true" />
      <div className="phone-screen">
        <div className="phone-ph" aria-hidden="true">
          <span>{app.name}</span>
        </div>
        {app.image && <FadeImg key={app.image} className="phone-img" src={app.image} alt={`${app.name} screenshot`} />}
      </div>
    </div>
  );
}
