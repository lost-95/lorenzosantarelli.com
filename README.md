# lorenzosantarelli.com

Personal portfolio of Lorenzo Santarelli – AI & Automation Specialist | IT Manager.

React + TypeScript + Vite + Tailwind CSS. English by default, Italian via the EN/IT switch (or `?lang=it`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build      # outputs dist/
```

## Content

- All copy (both languages) lives in `content.ts`. Keep it in sync with the CVs.
- CVs: `public/Lorenzo_Santarelli_CV_EN.pdf` and `public/Lorenzo_Santarelli_CV_IT.pdf`
  (`public/cv-lorenzo-santarelli.pdf` is kept as a copy of the English CV for old links).

## Deploy

Cloudflare Workers Builds deploys every push to `main` (`npm run build`, then `npx wrangler deploy`).
`worker/index.js` serves `dist/` and proxies `/f1-predictor/*` to the F1 Predictor app on Netlify.
