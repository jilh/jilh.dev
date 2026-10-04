import fs from 'node:fs';
import path from 'node:path';
import Site from '../components/Site';
import { moments } from '../content/data';

export default function Page() {
  // A photo appears on the site only once its file exists in /public.
  const available = moments.filter((m) => fs.existsSync(path.join(process.cwd(), 'public', m.src)));
  return <Site moments={available} />;
}
