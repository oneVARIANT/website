# oneVRNT Website

Official website for **oneVRNT (VARIANT Community)** — a Philippines-based content creator and gaming collective established in 2023.

## Overview

A single-page React + TypeScript application built with Vite and hash-based navigation across four main sections:

- **Home (`#home`)** — Collective overview, highlights, and featured videos.
- **About Us (`#about`)** — Background and story of the VARIANT Community.
- **Talent (`#talent`)** — Creator roster with role-based filtering (`Variety`, `FPS`, `IRL`, `Streamer`, `Producer`, `Competitive`) and social links.
- **Contact Us (`#contact`)** — Inquiries and community contact details.

## Tech Stack

- **Framework:** [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 8](https://vite.dev/) + [React Compiler](https://react.dev/learn/react-compiler) (`babel-plugin-react-compiler`)
- **Linting:** [ESLint](https://eslint.org/) with `typescript-eslint`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`
- **Analytics:** [Vercel Web Analytics](https://vercel.com/analytics) (`@vercel/analytics`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [pnpm](https://pnpm.io/) (or `npm`)

### Installation

```bash
git clone https://github.com/oneVARIANT/website.git
cd website
pnpm install
```

> If you prefer `npm`, you can run `npm install` and replace `pnpm` with `npm run` in the commands below.

### Development

Start the local development server with Hot Module Replacement (HMR):

```bash
pnpm dev
```

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm build` | Type-check (`tsc -b`) and build for production (`vite build`) |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run ESLint across the codebase |

## Project Structure

```text
.
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Logos and media assets
│   ├── components/         # Reusable UI components (Navbar, Footer, TalentCard, Icons)
│   ├── data/               # Static site content, navigation tabs, and talent roster
│   ├── pages/              # Page views (HomePage, AboutPage, TalentPage, ContactPage)
│   ├── App.tsx             # Root component with hash-based tab routing & analytics
│   ├── App.css             # Application styles
│   ├── index.css           # Global styles
│   └── main.tsx            # Application entry point
├── index.html              # HTML entry point & Google Fonts
├── eslint.config.js        # ESLint configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite & React Compiler configuration
```

## Updating Content

Most site data is centralized under `src/data/`:

- **Talent Roster:** Edit `src/data/talent.ts` to add, update, or reorder creators and their roles/socials.
- **Featured Videos & Stats:** Edit `src/data/content.ts`.
- **Navigation Tabs:** Edit `src/data/navigation.ts`.

## Deployment

The production bundle is output to `dist/` via `pnpm build` and is configured for deployment on [Vercel](https://vercel.com/) with Vercel Web Analytics enabled in `src/App.tsx`.
