# Byrdz Eye website

Portfolio site for Byrdz Eye ([@byrdz_eye](https://www.instagram.com/byrdz_eye/)), a New Orleans photographer and filmmaker.

It's a plain static site (HTML, CSS and a little JavaScript), so there is nothing to install or build.

## Run it locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Add photos

The site ships with colored placeholders where photos go. To swap in real shots:

1. Put image files in `images/` (JPG or WebP, about 2000px on the long side is plenty).
2. Edit `gallery.js` and set each entry's `src`, for example `src: "images/portrait-01.jpg"`.
3. Set `hero` and `about` in the same file for the big homepage image and the About photo.

Each gallery entry also has a `category` (portraits, culture, street, events) that drives the filter buttons, and a `shape` (tall, wide, square) that sets the tile size.

## Sections

- **Hero**: "Don't take it personally." with the hero photo
- **Work**: filterable gallery with a lightbox
- **Film**: the *It All Makes Sense* documentary, slow-motion work and event recaps
- **About**: bio and services
- **Contact**: booking form (not wired to email yet) plus Instagram links

## Deploy

Any static host works: GitHub Pages (Settings → Pages → deploy from this branch), Netlify or Vercel.
