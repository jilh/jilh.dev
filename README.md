# jilh portfolio (v3)

Two sites in one, pure black or pure white, Next.js static export for Netlify.

- `/` is the **Advocate** view (communities, talks, photos). Offers the DevRel and Community & Program resumes.
- `/builder/` is the **Builder** view (apps, craft). Offers the React Native resume.
- Each page links only its own resumes, plus a "see the other side" section and a hint under the hero buttons.

## Files you supply (put them in `public/`)
- `logo-black.png` (shown in light theme) and `logo-white.png` (shown in dark theme). If missing, the text "jilh" shows.
- `resumes/Stephen_Afolayan_DevRel_Resume.pdf`, `resumes/Stephen_Afolayan_Community_Program_Resume.pdf`, `resumes/Stephen_Afolayan_React_Native_Resume.pdf`
- `images/rc-hymns.png`, `anony-ng.png`, `akosori.png`, `vendorl.png` (phone screenshots, about 540x1140)
- `images/moments/*.jpg`: event photos named in `content/data.js` (`moments`). A photo shows only once its file exists.

## Edit content
All copy is in `content/data.js`. Add an app to `builder.apps.items` and a talk to `talks.videos`; the pickers and scrollers grow on their own.

## Tool icons
Edit the `WANTED` list in `scripts/build-icons.mjs`, run `npm run icons`, then reference the key in `content/data.js`.

## Fonts
Instrument Serif (headlines) and Inter (everything else). Nothing else is loaded.

## Run and deploy
```
npm install
npm run dev      # local
npm run build    # outputs ./out
```
Netlify reads `netlify.toml` (build `npm run build`, publish `out`). Old `?lens=` links are no longer used.
