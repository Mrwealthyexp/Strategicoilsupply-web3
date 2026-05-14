# StrategicOilSupply Web3 Domain Sales Website

A 3-page React website for the `.strategicoilsupply` Web3 TLD — designed to showcase available domains, explain pricing tiers, and drive registrations through the Freename platform.

## Live Demo

Deployed via Vercel: [your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| **Home** | `/` | Value proposition, stats, benefits, featured domains preview |
| **Available Domains** | `/domains` | Searchable, filterable inventory of 52 premium SLDs across 4 tiers |
| **Register** | `/register` | Pricing tiers, how-it-works steps, comparison table vs .com |

## Design System

- **Palette**: Earth tones — Deep Brown (`#1a1208`), Copper (`#B87333`), Bronze (`#CD853F`), Gold (`#D4A574`)
- **Typography**: Inter (headings), system sans-serif (body)
- **Framework**: React + TypeScript + Vite + Tailwind CSS + shadcn/ui

## Tech Stack

- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS 3.4
- shadcn/ui components
- React Router (SPA navigation)
- Lucide React (icons)

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deploy to Vercel (via GitHub)

### Step 1: Push to GitHub

1. Create a new repo on GitHub (e.g., `strategicoilsupply-web`)
2. Push this project:

```bash
git init
git add .
git commit -m "Initial commit: 3-page Web3 domain sales site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/strategicoilsupply-web.git
git push -u origin main
```

### Step 2: Connect Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"**
3. Import your `strategicoilsupply-web` repo
4. **Framework Preset**: Select `Vite`
5. **Build Command**: `npm run build` (pre-filled)
6. **Output Directory**: `dist` (pre-filled)
7. Click **Deploy**

Done — your site is live on a Vercel URL in ~30 seconds.

### Step 3: Connect Your Freename Domain

1. Copy your Vercel URL (e.g., `https://strategicoilsupply-web.vercel.app`)
2. Go to [freename.com/dashboard](https://freename.com/dashboard)
3. Portfolio → `globalenergy.strategicoilsupply` → **Manage** → **Records**
4. Enable **"Forward Domain"** → paste your Vercel URL
5. Save and approve with wallet

Visitors with Freename DNS will now see your site at `globalenergy.strategicoilsupply`.

## Domain Inventory (52 SLDs)

### Corporate Tier — $25,000
- vitol, trafigura, gunvor, mercuria, aramco, shell, bp, total, exxon, chevron

### Premium Tier — $5,000
- trading, drilling, refining, pipeline, rotterdam, singapore, storage, chartering, logistics, bunkering

### Professional Tier — $1,000
- houston, basra, permian, northsea, upstream, downstream, midstream, consulting, compliance, advisor

### Entry Tier — $300
- tanker, terminal, lng, diesel, gasoline, fueloil, bitumen, lube, wax, sulfur, petcoke

## File Structure

```
src/
├── components/
│   └── Layout.tsx          # Navigation + Footer
├── pages/
│   ├── Home.tsx            # Landing page
│   ├── Domains.tsx         # Domain inventory with search/filter
│   └── Register.tsx        # Pricing + how to register
├── components/ui/          # shadcn/ui components (Button, Card, Input)
├── App.tsx                 # Router setup
├── main.tsx                # Entry point
└── index.css               # Global styles + custom theme
```

## Customization Guide

### Change the TLD name
Edit `src/components/Layout.tsx` and `src/pages/*.tsx` — replace `.strategicoilsupply` with your TLD.

### Add/remove domains
Edit `src/pages/Domains.tsx` — the `domains` array contains all inventory.

### Change pricing
Edit prices in `src/pages/Domains.tsx` and `src/pages/Register.tsx`.

### Change colors
Edit `src/index.css` — update CSS custom properties under `:root`.

## License

MIT — Built for the .strategicoilsupply TLD ecosystem.
