# D-Cybernex Systems Premium Website

A premium React + Vite + Tailwind CSS static website for D-Cybernex Systems.

## What is included

- React + Vite
- Tailwind CSS
- Light premium cybersecurity design
- D-Cybernex logo asset
- Uploaded circuit animation used as hero/video background
- No backend dependency
- GitHub Pages ready
- Contact via `mailto:` only
- No founder name, no personal email, no phone number

## Local setup

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

This project is configured for the repository:

```text
https://github.com/Dhimanab/D-Cybernex1
```

The Vite base path is set to:

```js
base: process.env.VITE_BASE_PATH || '/D-Cybernex1/'
```

Deploy using:

```bash
npm run deploy
```

Then in GitHub:

```text
Settings → Pages → Source: Deploy from a branch → gh-pages → /root
```

Live URL:

```text
https://dhimanab.github.io/D-Cybernex1/
```

## Update contact email

Edit:

```text
src/data/siteData.js
```
