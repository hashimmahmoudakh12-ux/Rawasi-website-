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

## Change the $800 price

Open `data/trips.js`, find the `yosemite-2027` trip, and change `price: 800`. The trip card, the home page featured card, the price card and the live total all update.
Gear rental prices are in the same object under `rentals`. The FAQ text that lists them is in `data/site.js` (`id: "gear"`).

## Add the registration / payment link

In `data/trips.js`, set `registerUrl: "https://your-payment-link"`. Every "Reserve your spot" button uses it. Any gear rentals the visitor switches on are added to the link as `?rentals=sleep,tent,pack`.

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

## Swap images and videos

All placeholder images are in `assets/`. Replace a file with your own photo and **keep the same filename**. JPGs around 1800–2400px wide work well.

| File | Used for |
|---|---|
| `hero-sierra.jpg` | Home hero poster / fallback |
| `hero.mp4` | Home hero background video (autoplays muted and loops). Keep it short and small, under 5 MB, H.264 |
| `yosemite-hetch-hetchy.jpg`, `yosemite-winter-stars.jpg` | Yosemite card / trip hero |
| `sierra-*.jpg` | Sierra 2026 card, gallery, home tiles |
| `guide-*.jpg` | Guide portraits (square) |
| `about-brotherhood.jpg`, `guide-training.jpg` | About page |
| `og-image.jpg` | Social share preview (1200×630) |
| `logo.svg`, `favicon.svg`, `apple-touch-icon.png`, `/favicon.ico` | Logo and icons |

To use a background video on a trip page, set `heroVideo: "assets/your-video.mp4"` on the trip in `data/trips.js`.
The YouTube film uses its id (`youtube: "XKM4X516dsk"`).

## Contact details and form

- Phone and email: set `phone` and `email` in `data/site.js`. These replace the `[PHONE]` and `[EMAIL]` placeholders.
- Form: create a free form at formspree.io and replace `YOUR_FORM_ID` in `contact.html`. Until you do, the form opens the visitor's email app instead.

## Deploy

- **Vercel**: import the GitHub repo at vercel.com/new. Framework: *Other*. Leave the build command empty and the output directory as `.`. Every push to the branch you choose then redeploys.
- **Netlify**: drag and drop the folder, or connect the repo. No build command is needed.
- Update `https://rawasiadventures.com` in each page's canonical and og tags if your domain is different.
