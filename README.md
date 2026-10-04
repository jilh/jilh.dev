# jilh.dev

Static Next.js site (black and white), built to deploy on Netlify.

## What's special about it

A **lens switch** in the top bar toggles between **Advocate** and **Builder**.
It changes the headline, the stats, the order of the proof sections, and which resumes are offered.

Send a recruiter a link that opens in the right lens:

- `https://YOUR-SITE/?lens=advocate`
- `https://YOUR-SITE/?lens=builder`

## 1. Add your files

**Resumes** (PDF, exact names, in `public/resumes/`):

- `Stephen_Afolayan_DevRel_Resume.pdf`
- `Stephen_Afolayan_Community_Program_Resume.pdf`
- `Stephen_Afolayan_React_Native_Resume.pdf`

Do not add the academic CV here.

**App screenshots** (PNG or JPG, in `public/images/`), named to match `content/data.js`:

- `rc-hymns.png`, `anony-ng.png`, `akosori.png`, `vendorl.png`

Wide 16:10 shots work best. Until a file exists, the card shows a clean placeholder.
If you use `.jpg`, change the extension in `content/data.js`.

**Event and stage photos** go in `public/images/moments/`. The seed list in `content/data.js`
(`moments`) already names the files it expects, for example `tedx-tau.jpg` and `binapti-conf.jpg`.
A photo appears on the site only once its file exists, and the whole "Moments" section stays hidden
until you add the first one. For each photo, fill in `when`, `place` and `note` so the lightbox
tells the story. Add more by copying a line and changing `src`, `title` and `tags`.

## 2. Edit the words

Everything on the page lives in `content/data.js`. Change numbers, titles and text there.
When Vendorl launches, set `soon: false`, update `metric`, and point its link to the Play Store.

### Growing the site

- **More apps:** add an entry to `apps` in `content/data.js`. Four fit on screen; a fifth turns the row
  into a swipeable carousel with arrow buttons (arrows appear only when needed).
- **More talks:** add entries to `talks.videos` (YouTube `id`, optional `start` in seconds).
  The one with `featured: true` plays first. With two or more, a scrollable "More talks" row appears
  and clicking a card swaps the featured player.
- **Photos:** see "Event and stage photos" above. Filter chips (All, On stage, Hosting, Community)
  build themselves from the `tags` you use.
- **Theme:** visitors can flip light and dark with the sun/moon button. The choice is remembered, and
  the default is dark. Sections alternate light and dark against each other in both themes.

## 3. Run it locally

```bash
npm install
npm run dev
```

## 4. Deploy on Netlify

Option A, from GitHub: push this folder to a repo, then in Netlify choose
**Add new site > Import an existing project**. Build settings are already in `netlify.toml`
(command `npm run build`, publish folder `out`).

Option B, drag and drop: run `npm run build`, then drag the generated `out` folder into Netlify.

## Notes

- Fonts (Inter, Space Grotesk, JetBrains Mono, Instrument Serif) load from Google Fonts.
- Resume links download as files (see the header rule in `netlify.toml`).
- There is no social preview image yet. Add one at `public/og.png` and reference it in `app/layout.jsx`.
- Add a "Writing" section when you have your first posts. It is deliberately not on the page yet.
