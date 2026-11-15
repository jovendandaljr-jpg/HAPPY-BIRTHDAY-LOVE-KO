# A Day Made for You ♡

A responsive, no-build birthday experience for Chloe Cliechelle S. Dela Cruz (“Clong”), celebrating November 17, 2026. The site uses semantic HTML, CSS, and vanilla JavaScript only.

## Preview

Open `index.html` directly in a browser. For the smoothest local preview, serve this folder with any static file server (for example, `python -m http.server 8000`) and open `http://localhost:8000`.

## Personalize

Edit the single `window.BIRTHDAY` object at the top of `js/main.js`. It contains the name, date, editable profile prompts, timeline, gallery paths and captions, 18 reasons, open-when letters, wishes, gifts, and music path. The main birthday letter is in `birthdayLetter`.

Replace the provided image paths with your own files:

- `assets/images/debut-prenup.jpg` — featured, full-color debut/prenup portrait
- `assets/images/final-photo.jpg` — finale background
- `assets/images/memories/` — the 10 uploaded gallery photos; their filenames and captions are configured in `js/main.js`

Add `assets/music/background.mp3` for background music. The page attempts autoplay, with a first-interaction fallback if the browser blocks it. Your 10 memory photos and three childhood photos are included in their asset folders; add `assets/images/debut-prenup.jpg` and `assets/images/final-photo.jpg` when ready.

## Files

- `index.html` — page structure and metadata
- `css/style.css`, `css/animations.css`, `css/responsive.css` — design, motion, and responsive layouts
- `js/main.js` — central content configuration and interactions
- `js/gallery.js`, `js/countdown.js`, `js/audio.js`, `js/surprises.js` — focused features

The countdown uses the explicit `+08:00` offset for Asia/Manila. Reduced-motion preferences are respected. Gallery images load lazily, and discovered reason cards persist in local storage.

- `assets/images/childhood/childhood-01.jpg` through `childhood-03.jpg` — childhood photos shown beside the celebrant introduction.
