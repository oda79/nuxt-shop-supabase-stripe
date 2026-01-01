# Nuxt Shop (Layered Architecture)

A modular e-commerce application built with **Nuxt 3**, using **Nuxt Layers**
to separate UI foundations, business logic, and application-specific code.

This project is intentionally structured to practice **real-world architecture**
and scalability patterns.

---

## Architecture Overview

This repository uses **Nuxt Layers** to split responsibilities:

```
layers/
├── base # UI + design system (Tailwind, layouts, shared components)
├── shop-commerce # Business logic (Prisma, Supabase, API, schemas)
app/ # Application layer (pages, branding, overrides)
```


### Layer Responsibilities

#### 🧱 Base Layer (`layers/base`)
- Tailwind CSS setup and design tokens
- Shared UI components
- Layouts
- Generic composables (theme, click-outside, currency, etc.)

> No business logic, no database, no auth.

---

#### 🛒 Commerce Layer (`layers/shop-commerce`)
- Prisma schema, migrations, and seed scripts
- Prisma client configuration
- Server API routes
- Zod schemas for accounts and domain models
- Commerce composables (auth, cart, checkout)

> This layer can be reused by another Nuxt app.

---

#### 🧠 App Layer (`app/`)
- Pages (`/login`, `/register`, `/my-account`, etc.)
- App-level layout
- SEO & metadata
- Runtime configuration
- Overrides of base/commerce components if needed

> Highest priority layer.

---

## Tech Stack

- **Nuxt 3** – SSR + API routes
- **Nuxt Layers** – modular architecture
- **Tailwind CSS** – styling
- **Supabase** – authentication & PostgreSQL
- **Prisma** – ORM & migrations
- **Zod** – validation schemas
- **Stripe** – payments (planned)
- **TypeScript** – full type safety

---

## Tailwind CSS

- Tailwind config lives at the **root**
- Styles are defined in the **base layer**
- Tailwind scans all layers via the root config

---

## Environment Variables

Create a `.env` file in the project root. At minimum:

```
DATABASE_URL=
DIRECT_URL=
SUPABASE_URL=
SUPABASE_KEY=
STRIPE_SECRET_KEY=
```

Details and additional variables will be documented as the project evolves.

---

## Database (Prisma)

- Prisma schema and migrations live in `layers/shop-commerce/prisma`
- Prisma config is defined in `layers/shop-commerce/prisma.config.ts`

Common commands:

```bash
cd layers/shop-commerce
npx prisma migrate dev
npx prisma generate
npx prisma db seed
```

---

## Status

🚧 Work in progress

Features, structure, and documentation will evolve over time.

