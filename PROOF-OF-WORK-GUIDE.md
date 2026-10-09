# Proof of Work — asset setup guide

The portfolio reads evidence from `lib/project-proof.ts`. Keep this repo as the source of the website and its small image assets; keep large videos and presentation PDFs in Google Drive or YouTube/Vimeo.

## Folder structure to use in Google Drive

Create one top-level folder named `Saumya Portfolio — Proof of Work`, then one folder per project:

- `01-hoopr`
- `02-milld`
- `03-woktok`
- `04-eat-kried`
- `05-green-packaging`
- `06-price-of-popcorn`
- `07-sportsyard`
- `08-epicure-robotics`
- `09-cotopay`
- `10-framer-hosting`
- `11-krismar-marbles`
- `12-bengaluru-short-film-festival`
- `13-house-of-andhra`
- `14-asan-cup`
- `15-phurr`

Suggested filenames: `01-final-video`, `02-pitch-deck-public`, `03-campaign-timeline`, `04-selected-slides`. Export presentations as PDFs for predictable viewing. Remove private client information, personal contact details, unreleased creator rates, internal budgets, and any material you don't have permission to publish.

## Make a Drive file public

For each file you intend to show:
1. In Google Drive, right-click the file and choose **Share**.
2. Under **General access**, choose **Anyone with the link**.
3. Set the role to **Viewer** (not Editor).
4. Copy the file link.
5. Open the link in a private/incognito window where you are not signed in. Confirm it opens without requesting access.

Sharing a parent folder is not a guarantee that every file will embed correctly; test each individual file. Anyone with the link can view and forward it, so only publish material you are allowed to make public.

## Add an item to the website

Open `lib/project-proof.ts` and add an object to that project's `items` array.

### YouTube video
```ts
{ type: 'youtube', title: 'Final film', description: 'Directed, shot and edited by me.', url: 'https://www.youtube.com/watch?v=VIDEO_ID' }
```

### Google Drive PDF
```ts
{ type: 'drive-pdf', title: 'Campaign deck', description: 'Selected strategy and planning slides.', url: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing' }
```

### Google Drive video
```ts
{ type: 'drive-video', title: 'Behind the scenes', url: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing' }
```

### Image stored in this repo
Put an optimised JPG/WebP in `public/proof/<project-slug>/`, then use:
```ts
{ type: 'image', title: 'Campaign key visual', url: '/proof/phurr/missing-poster.webp' }
```

### External prototype or document link
```ts
{ type: 'link', title: 'Explore the prototype', description: 'Open the interactive version.', url: 'https://example.com', actionLabel: 'Open project ↗' }
```

The component supports multiple items per project. Keep the strongest 2–6 pieces; use a short caption to say what the asset proves and identify your role accurately. The Proof of Work section stays hidden until a project has at least one real item, so the live site won't display empty placeholders.

## Project-to-evidence checklist

- Hoopr: final video; optional selected frames.
- Mill'd: each video; distinguish full ownership from direction support.
- WokTok: final ad; optional script/concept.
- Eat Kried: final video; optional script or production stills.
- Green Packaging: episode; optional thumbnail/script/research sources.
- The Price of Popcorn: episode; optional thumbnail/script/research sources.
- Sportsyard: research deck/audit and recommendations that are safe to share.
- Epicure Robotics: identity, logo exploration and application mockups.
- CotoPay: landing-page screens and a working prototype if available.
- Framer Hosting: redesign screens and prototype if available.
- Krismar Marbles: research and pitch-deck PDF.
- Bengaluru Short Film Festival: campaign deck, audience plan, timeline and KPIs.
- House of Andhra: 7Ps/marketing strategy and relevant creative assets.
- Asan Cup: campaign deck, content routes, sample carousel/reel concepts and timeline.
- PHURR: influencer strategy, creator plan with private rates removed, launch timeline, PHURR Kit and poster/card artwork.

Do not invent performance numbers or describe proposed work as executed work. Mark concepts and mockups as concepts.
