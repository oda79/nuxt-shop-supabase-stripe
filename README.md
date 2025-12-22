# Nuxt-Shop-Supabase-Stripe

A lightweight e-commerce shop built with **Nuxt 3** and a modern full-stack setup.  
This project serves as a learning and experimentation ground for building a real-world shop architecture using current best practices.

---

## Tech Stack

- **Nuxt 3** – frontend framework (SSR + API routes)
- **Supabase (PostgreSQL)** – database
- **Prisma** – ORM and migrations
- **Stripe** – payments
- **Zod** – runtime validation and DTO schemas
- **TypeScript** – end-to-end type safety

---

## Project Goals

- Practice building a real e-commerce flow (products, cart, checkout)
- Learn Nuxt server routes and backend integration
- Use Prisma correctly with migrations and seeds
- Validate all external and user input with Zod
- Maintain a clean separation between:
  - database models
  - API DTOs
  - frontend logic

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

## Database

- Prisma is used as the ORM
- Migrations live in `prisma/migrations`
- Database seeding is handled via Prisma seed scripts

Common commands:

```bash
npx prisma migrate dev
npx prisma db seed
```

---

## Status

🚧 Work in progress

Features, structure, and documentation will evolve over time.

