# Rawasi Adventures — website

Guided outdoor adventures for Muslim men. This is a static site built with plain HTML, CSS and vanilla JS. There is no build step, so it runs on Vercel, Netlify, GitHub Pages or any static host. You can also open `index.html` directly from your computer.

```
index.html              Home
trips.html              All trips (filter: All · Upcoming · Past)
trips/yosemite-2027.html  Upcoming trip page (template for future trips)
trips/sierra-2026.html    Past trip page (recap + gallery)
about.html  faq.html  contact.html
styles.css              All styles
main.js                 All behaviour (nav, toggles, filters, FAQ, rendering)
data/trips.js           ← ALL TRIP DATA lives here
data/site.js            Links, guides, FAQ, packing list, refund policy, phone/email
assets/                 Images, video, logo, icons
```

To preview locally, run `python3 -m http.server` and open http://localhost:8000. Double-clicking `index.html` also works.

## Content source

All text, prices, dates, policies, guide bios, testimonials and photos come from the old site, rawasiadventures.com.
- `scrape/<page>.md`: the full text of every old page.
- `scrape/image-manifest.md`: every old image, with its source URL, local path, alt text and page.
- `assets/original/`: the original full-resolution files. The site itself uses the optimized copies in `assets/photos/` and `assets/people/`.

## Change the price or spots left

Open `data/trips.js`, find the `yosemite-2027` trip, and change `price: 770` or `spotsLeft: 9`. The trip card, the home page featured card, the price card and the mobile reserve bar all update.
The FAQ for each trip is in `data/site.js` under `faqGroups`.

## Registration / payment link

`registerUrl` in `data/trips.js` points to the Squarespace checkout product on the old site. If the domain moves off Squarespace, replace it with the new payment link.

## Add a new trip

1. In `data/trips.js`, copy the `yosemite-2027` object, paste it at the top of the array, and change the values. Give it a new `slug`, for example `"zion-2027"`, and set `page: "trips/zion-2027.html"`.
   - `startDate` / `endDate` use `YYYY-MM-DD`. Once `endDate` has passed, the trip moves to **Past** automatically.
   - `status`: `"open"` (Registration open), `"soldout"`, `"waitlist"` or `"soon"`.
   - `featured: true` puts it on the home page. Only one trip should be featured.
   - For a past trip, add `stats`, `recap`, `gallery` and `youtube` (see `sierra-2026`). The page then switches to the recap layout.
2. Copy `trips/yosemite-2027.html` to `trips/zion-2027.html`. In the new file, change:
   - `data-trip-page="yosemite-2027"` → `data-trip-page="zion-2027"`
   - the `<title>`, `description`, `og:*`, `twitter:*` and `canonical` tags.
3. Optionally, add the trip to the footer's "Trips" column (it is repeated in every page footer).

## Images

| Folder / file | Used for |
|---|---|
| `assets/photos/` | Trip, home and about photos (from the old site) |
| `assets/people/` | Guide, founder and testimonial headshots |
| `assets/rawasi-logo.png` | The real Rawasi logo (nav and footer) |
| `favicon.ico`, `assets/favicon-32.png`, `assets/apple-touch-icon.png` | The old site's favicon (logo mark) |
| `assets/og-image.jpg` | Social share fallback: the logo on the brand's dark color (1200×630) |
| `assets/og-hetchhetchy.jpg`, `assets/og-emigrant.jpg` | Trip page share images |

To use a background video on a trip page, set `heroVideo: "assets/your-video.mp4"` on the trip in `data/trips.js`.

## Contact details and form

- Phone and email are set in `data/site.js` (`phone`, `phoneDisplay`, `email`).
- Form: it opens the visitor's email app addressed to contact@rawasiadventures.com. To receive messages directly, create a form at formspree.io and set the form `action` in `contact.html` to its URL.

## Deploy

- **Vercel**: import the GitHub repo at vercel.com/new. Framework: *Other*. Leave the build command empty and the output directory as `.`. Every push to the branch you choose then redeploys.
- **Netlify**: drag and drop the folder, or connect the repo. No build command is needed.
- Update `https://rawasiadventures.com` in each page's canonical and og tags if your domain is different.
