# BanglaRTP

**Free community resource for Bangladeshis in the Research Triangle (Raleigh, Durham, Chapel Hill, Cary, Morrisville, NC)**

স্বাগতম — Welcome. Everything a Bangladeshi family needs in one place: halal grocery, masjids, halal restaurants, community events, a newcomer guide, and a directory of Bangla-speaking professionals.

**Live demo:** [bangla-rtp.vercel.app](https://bangla-rtp.vercel.app) *(after deployment)*

---

## Purpose

The RTP area has a large and growing Bangladeshi community — students at NCSU and UNC, H-1B workers at Cisco, Red Hat, SAS, IBM, and countless other companies, and families who've called the Triangle home for decades. Yet for newcomers, finding a halal butcher, a Bengali-speaking pediatrician, or the nearest masjid can be genuinely hard.

BanglaRTP is **100% free, no paywall, no ads** — built by and for the community.

---

## Features

| Page | Description |
|------|-------------|
| `/` | Home with hero, quick links, upcoming events |
| `/grocery` | 10+ halal grocery stores, filter by city |
| `/masjids` | 6 masjids with prayer times, Jumu'ah info |
| `/restaurants` | 12+ halal restaurants, filter by cuisine |
| `/events` | Community events (Eid, cricket, meetups), submit form |
| `/newcomer` | 30/60/90-day checklist for new arrivals |
| `/newcomer/first-week` | SSN, phone, bank account guide |
| `/newcomer/first-month` | DMV, housing, schools, utilities |
| `/newcomer/first-three-months` | Community, healthcare, taxes, immigration |
| `/directory` | Bangla-speaking doctors, lawyers, CPAs, realtors |
| `/entrepreneurs` | Local Bangladeshi entrepreneurs & home businesses |
| `/entrepreneurs/submit` | Free submission form for new business listings |
| `/community` | Community feed — posts, needs, offers, ride share, stories |
| `/community/new` | Create a post (sign-in required for live mode) |
| `/community/[id]` | Post detail with comments |
| `/community/profile` | User profile and own posts |
| `/auth/signin` | Sign in / create account |
| `/about` | Mission, community orgs, contact/corrections form |

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + `@tailwindcss/typography`
- **Supabase** (PostgreSQL + Auth for admin, optional for basic use)
- **next-mdx-remote** for newcomer guide markdown
- **lucide-react** for icons
- Deployed to **Vercel**

---

## Local Development

### 1. Clone and install

```bash
git clone https://github.com/your-org/bangla-rtp
cd bangla-rtp
npm install
```

### 2. Environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

> **Note:** The app works without Supabase — all data is served from static TypeScript files in `/data/`. Supabase is only needed for the submission/contact form persistence.

### 3. Run dev server

```bash
npm run dev
# Open http://localhost:3000
```

---

## Supabase Setup (Optional but recommended)

### Create project

1. Go to [supabase.com](https://supabase.com) and create a free project
2. Copy your Project URL and anon key into `.env.local`

### Run migrations

```bash
# Using Supabase CLI
supabase db push

# Or manually in Supabase SQL Editor:
# Paste contents of supabase/migrations/001_initial.sql
```

### Seed data

```bash
# Via Supabase CLI
supabase db reset

# Or in SQL Editor: paste supabase/seed.sql
```

---

## Deploy to Vercel

### One-click deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/bangla-rtp)

### Manual deploy

```bash
npm install -g vercel
vercel
```

Add your environment variables in the Vercel dashboard under **Settings > Environment Variables**.

---

## Content Contribution Guide

### Adding a new grocery store, restaurant, or masjid

Edit the relevant file in `/data/`:
- `/data/grocery.ts` — halal grocery stores
- `/data/restaurants.ts` — halal restaurants
- `/data/masjids.ts` — masjids
- `/data/events.ts` — community events
- `/data/professionals.ts` — community directory

Follow the existing TypeScript interfaces in `/lib/types.ts`.

### Updating the newcomer guide

Edit markdown files in `/content/newcomer/`:
- `first-week.md`
- `first-month.md`
- `first-three-months.md`

Standard GitHub-flavored markdown is supported.

### Submitting via the website

Users can submit corrections, new listings, and events through the contact form at `/about#contact`. Submissions go into the `submissions` table in Supabase for moderation.

---

## Community Organizations

BanglaRTP was built to support the work of:

| Org | Description |
|-----|-------------|
| **TBSNC** | Triangle Bangladeshi Society of North Carolina |
| **BANC** | Bangladeshi Association of North Carolina |
| **BSA@NCSU** | Bangladeshi Students Association at NC State |
| **BPOCNC** | Bangladeshi Professionals Organization of Carolinas |
| **ICM** | Islamic Center of Morrisville |
| **IAR** | Islamic Association of Raleigh |

This site is not affiliated with any of the above — it's an independent community volunteer project that aims to complement their work.

---

## License

MIT — free to use, fork, and adapt for other communities.

---

*Made with ❤️ by the RTP Bangladeshi community. আমাদের জন্য, আমাদের দ্বারা.*
