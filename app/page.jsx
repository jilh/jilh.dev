import fs from 'node:fs';
import path from 'node:path';
import AdvocatePage from '../components/AdvocatePage';
import { moments } from '../content/data';

export const metadata = {
  title: 'Stephen Afolayan | Developer Advocate & Community Builder',
  description:
    'I build developer communities from zero. Developer advocate, community and program manager. TEDx speaker. Coding since 2009, building communities since 2017.',
  openGraph: {
    title: 'Stephen Afolayan | Developer Advocate & Community Builder',
    description: 'I build developer communities from zero.',
    type: 'website',
  },
};

export default function Page() {
  // A photo appears on the site only once its file exists in /public.
  const available = moments.filter((m) => fs.existsSync(path.join(process.cwd(), 'public', m.src)));
  return <AdvocatePage moments={available} />;
}
