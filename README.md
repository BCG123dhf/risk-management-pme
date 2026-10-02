# Risk Management PME

This project is a production-ready MVP for an internal control and risk management application targeting SMEs in Burkina Faso.

## Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- Supabase Auth
- Recharts / charting support

## Features
- Dashboard of KPIs
- Risk tracking
- Internal control monitoring
- Incident and non-conformity follow-up
- Corrective action planning
- Reporting and exports
- Role-based access

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Create `.env` from `.env.example`:

```bash
cp .env.example .env
```

3. Generate Prisma client:

```bash
npx prisma generate
```

4. Run database migrations:

```bash
npx prisma migrate dev --name init
```

5. Start the app:

```bash
npm run dev
```

6. Open the app at:

```text
http://localhost:3000
```

## Project structure

- `app/` – application pages and layout
- `components/` – reusable UI and dashboard components
- `lib/` – utilities and helpers
- `prisma/` – Prisma schema and database logic
- `public/` – static assets

## Suggested next steps
- Connect Prisma to PostgreSQL
- Add authentication
- Add forms for create/update/delete risk entries
- Add PDF and Excel exports
- Add API CRUD routes
- Configure deployment for Vercel + Supabase
