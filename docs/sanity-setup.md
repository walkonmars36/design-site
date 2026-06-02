# Sanity CMS Integration — Design Site

## Overview

This document covers the setup of Sanity.io as a headless CMS for the `design-site` Astro project. The goal was to replace static JSON data with a cloud-based CMS, with an embedded Sanity Studio for content editing.

---

## Tech Stack

- **Astro 6.1.3** (upgraded from 4.5.9 during this session)
- **Node 22.22.2** (required for Astro 6 — managed via nvm)
- **Sanity v5** with `@sanity/astro` integration
- **React** (required by Sanity Studio)

---

## Prerequisites

- Node 22 must be active: `nvm use 22`
- Sanity account at sanity.io (signed in with GitHub)
- Sanity project ID: `azfpwdmk`
- Sanity dataset: `production`

---

## Packages Installed

```json
"@sanity/astro": "^3.3.1",
"@sanity/client": "^7.20.0",
"@astrojs/react": "^5.0.2",
"@astrojs/node": "^10.0.4",
"sanity": "^5.19.0",
"react": "^19.2.4",
"react-dom": "^19.2.4",
"styled-components": "^6.3.12"
```

---

## Project Structure

```
design-site/
├── sanity.config.ts              # Sanity Studio config (project root)
├── .env                          # Public env vars (committed to git)
├── .env.local                    # Secret token (NOT committed to git)
├── scripts/
│   └── import-projects.mjs      # Script to import JSON data into Sanity
└── src/
    └── sanity/
        ├── client.ts             # Sanity client for querying content
        └── schemaTypes/
            ├── index.ts          # Schema registry
            └── project.ts        # Project document type schema
```

---

## Configuration

### astro.config.mjs

```js
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    icon(),
    sanity({
      projectId: "azfpwdmk",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/studio",
    }),
    react(),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
```

### .env (committed to git — no secrets)

```
PUBLIC_SANITY_DATASET="production"
PUBLIC_SANITY_PROJECT_ID="azfpwdmk"
```

### .env.local (NOT committed to git)

```
SANITY_TOKEN=your_token_here
```

---

## Sanity Studio

The Studio is embedded in the Astro project and accessible at:

```
http://localhost:4321/studio
```

- Requires a Sanity login (GitHub)
- Schema changes appear instantly via hot reload
- Content is saved to the cloud automatically, published manually

### CORS Setup

For the Studio to work locally, `http://localhost:4321` must be added to the CORS origins in the Sanity dashboard:

**https://sanity.io/manage/personal/project/azfpwdmk/api**

- Add `http://localhost:4321` with **Allow credentials** checked

---

## Content Schema

### Project (`src/sanity/schemaTypes/project.ts`)

Mirrors the structure of the original `project-data.json` file.

| Field | Type | Notes |
|-------|------|-------|
| title | string | Required |
| slug | slug | Auto-generated from title |
| excerpt | text | Short summary |
| heading | string | Page heading |
| url | url | Live client site URL |
| services | array of strings | e.g. Website Design, SEO |
| tech | array of strings | e.g. Webflow, CSS |
| objective | text | Project objective |
| process | text | How it was built |
| result | text | Outcome |
| heroImage | image | With alt text field |
| featuredImage | image | With alt text field |

---

## Fetching Content in Astro

### Sanity Client (`src/sanity/client.ts`)

```ts
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "azfpwdmk",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});
```

### GROQ Query Examples

**All projects (projects.astro):**
```js
const projectData = await sanityClient.fetch(`
  *[_type == "project"] | order(_createdAt asc) {
    "id": slug.current,
    title,
    excerpt,
    "heroImage": heroImage.asset->url,
    "altHero": heroImage.alt,
  }
`);
```

**Single project ([id].astro):**
```js
const projects = await sanityClient.fetch(`
  *[_type == "project"] {
    "id": slug.current,
    title,
    heading,
    url,
    services,
    objective,
    process,
    result,
    tech,
    "heroImage": heroImage.asset->url,
    "altHero": heroImage.alt,
  }
`);
```

---

## Importing Data from JSON

A script was created to import all projects from the local JSON file into Sanity. It uses `createOrReplace` so it is safe to run multiple times without creating duplicates.

```bash
SANITY_TOKEN=your_token node scripts/import-projects.mjs
```

Or with the token stored in `.env.local`, run it manually with the token as above.

---

## Running the Project

```bash
nvm use 22
npm run dev
```

Then visit:
- **http://localhost:4321** — the site
- **http://localhost:4321/studio** — Sanity Studio

---

## What Still Needs Doing

- [ ] Upload images to Sanity and wire them up to the project pages
- [ ] Add the remaining content types (e.g. Blog Post)
- [ ] Add production CORS origin when the site is deployed
- [ ] Consider periodic Sanity content exports as a backup

---

## Important Notes

- The original `src/data/project-data.json` has been kept as a backup — do not delete it
- `.env.local` contains the Sanity write token — never commit or share this
- The Sanity free tier includes 10GB bandwidth, 5GB assets, and unlimited documents
- Content is only public after hitting **Publish** in the Studio
