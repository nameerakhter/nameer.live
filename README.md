# nameer.live

Personal portfolio site with a fullstack monorepo scaffold. **Right now only the client portfolio is in active use** — the public site at `/` is a static React page with no API calls. The server (`apps/server`) ships with the starter template (Hono, Better Auth, Drizzle, workers) but **is not wired into the live portfolio yet** and does not need to run for portfolio work.

| Area | Status | Notes |
| --- | --- | --- |
| `apps/client` — portfolio (`/`) | **Active** | Static content in `routes/index.tsx` and `routes/-components/` |
| `apps/client` — `_app/*`, `_auth/*` | Scaffold only | Starter routes (login, settings, notifications) — not part of the live site |
| `apps/server` | Scaffold only | Present for future use; ignore unless explicitly asked to add backend features |

Built with **Vite**, **React 19**, **TanStack Router**, **Hono**, **Drizzle**, and **Better Auth**. Orchestrated with **Turborepo** and **Bun**.

For portfolio changes, work in `apps/client` only. You do **not** need PostgreSQL, Redis, or `bun run dev` on the server unless you are deliberately working on backend/scaffold features.

---

## For AI agents

Read this section before making changes. The goal is small, correct diffs that match existing patterns — not clever rewrites.

### Before you code

1. **Identify the package** you are changing:
   - `apps/client` — React frontend (`@repo/client`) — **this is where almost all current work happens**
   - `apps/server` — Hono API, workers, cron (`@repo/server`) — **scaffold only; not used by the live portfolio yet**
   - `packages/config` — shared ESLint/Prettier config only
2. **Default to client-only work.** Unless the task explicitly mentions API, auth, database, or workers, stay in `apps/client` and do not start the server or add backend endpoints.
3. **Load the right skill** from `.agents/skills/` (also referenced in `AGENTS.md`):
   - Frontend UI/pages → `.agents/skills/frontend/SKILL.md`
   - Backend routes/workers/cron → `.agents/skills/backend/SKILL.md`
   - React lifecycle/data → `.agents/skills/no-use-effect/SKILL.md` (**always applies to React code**)
   - Auth → `.agents/skills/better-auth-best-practices/SKILL.md`
   - shadcn/ui → `.agents/skills/shadcn/SKILL.md`
4. **Read surrounding code** in the file and its neighbors before adding abstractions.
5. **Run checks** after substantive edits:
   ```bash
   bun run typecheck
   bun run lint
   ```

### Engineering principles (follow strictly)

#### 1. Prefer the simplest solution that works

- **Minimize scope.** A focused 10-line fix beats a 200-line refactor.
- **Do not over-abstract.** No helper hooks, wrapper components, or utility files for one-off logic.
- **Do not add features** the user did not ask for (extra error handling, config layers, premature generalization).
- **Reuse what exists** — extend an existing component or function instead of creating a parallel pattern.
- **Match local style** — naming, imports, file placement, and typing should look like the surrounding code.

#### 2. Never use `useEffect` in components

`useEffect` is banned in React components in this repo. See `.agents/skills/no-use-effect/SKILL.md`.

| Instead of… | Use… |
| --- | --- |
| Syncing derived state (`setX(f(y))`) | Compute inline during render, or `useMemo` if expensive |
| Fetching on mount / when ID changes | TanStack Router **loaders** + TanStack Query + `honoClient` |
| User-triggered work | **Event handlers** (`onClick`, `onSubmit`, …) |
| Resetting state when a prop changes | **`key` prop** to remount the subtree |
| One-time external DOM/widget setup | `useMountEffect` inside a **custom hook only** (never in components) |
| Subscribing to browser/external stores | `useSyncExternalStore` inside a **custom hook only** |

`useEffect` may appear **only** inside reusable custom hooks (e.g. `useMountEffect`, `theme-provider`). **Components must not import or call `useEffect`.**

#### 3. Do not reach for `useSyncExternalStore` by default

`useSyncExternalStore` is for **real external stores** (browser APIs, DOM class mutations, `localStorage`, third-party widgets) when you cannot derive the value during render.

**Do not use it when:**

- The value can be computed from React state/props/context during render
- CSS or Tailwind responsive classes are enough (`md:`, `hidden`, etc.)
- TanStack Query already owns the data
- You are mirroring state that already lives in React

**Use it when:**

- Subscribing to something outside React's render model (see `use-resolved-theme.ts` for an approved pattern)
- Encapsulated in `src/hooks/` with a clear `subscribe` + `getSnapshot` + `getServerSnapshot`

If you think you need it, check whether a simpler approach exists first.

#### 4. Data fetching on the client

The portfolio (`/`) is **static** — no loaders, no `honoClient`, no TanStack Query. All content is hardcoded in `routes/-components/`.

The `_app/*` scaffold routes *do* use loaders + `honoClient`, but those routes are not part of the live site. Only follow the patterns below when working on scaffold/app features:

- **Route loaders** prefetch into TanStack Query (`loader` in route definition).
- **Mutations** use TanStack Query `useMutation` + invalidate/refetch keys.
- **Typed API** via `honoClient` in `apps/client/src/lib/hono.ts` (imports server `App` type from `@repo/server/app`).
- **Query UI states** — branch on `status` with `match` from `ts-pattern`; read `data` inside `status: 'success'`, not `query.data?.` at the top level.
- **Never** `useEffect(() => fetch(...))`.

#### 5. React components

- **Functional components only** — no class components.
- **Colocate by default** — page-only UI in `routes/.../-components/`; shared UI in `src/components/<kebab-name>/`.
- **Import shared components** via barrel: `@/components/notification-card`, not the inner file path.
- **No external layout in leaf components** — parents control margin/placement; children don't own page offsets.
- **App pages** (`_app/*`) use `PageContainer` → `Breadcrumb` → `PageHeader` — scaffold only, not the live site.
- **Portfolio home** (`routes/index.tsx`) uses the `portfolio` layout — **not** `PageContainer`. This is the active product. Styles live under `.portfolio` in `apps/client/src/styles/globals.css`.

#### 6. Backend

- Organize by **module** under `apps/server/src/<module>/` (`router`, `middleware`, `worker`, `cron`, `utils`).
- Cross-module shared code → `apps/server/src/lib/`.
- Validate with `zValidator` + `zod`; throw `HTTPException` for HTTP errors.
- Named async handler functions (not anonymous route arrows).
- Mount routers in `apps/server/src/app.ts`.
- After schema changes: `bun run db:generate` then `bun run db:migrate`.

#### 7. Git and PR hygiene

- **Do not commit** unless the user explicitly asks.
- **Do not push** unless asked.
- **Do not** run destructive git commands (`reset --hard`, `push --force` to main) unless explicitly requested.

### Where things live

```
.
├── AGENTS.md                 # Skill-loading instructions for agents
├── .agents/skills/           # Detailed conventions (frontend, backend, no-use-effect, …)
├── apps/
│   ├── client/src/
│   │   ├── components/       # Shared components (2+ pages) + ui/ (shadcn)
│   │   ├── hooks/            # Shared hooks (queries, theme, mobile, …)
│   │   ├── lib/              # hono client, auth, env, utils
│   │   ├── routes/
│   │   │   ├── index.tsx     # Public portfolio (/) — ACTIVE, static, no API
│   │   │   ├── -components/  # Portfolio-only components (TanStack ignores `-` dirs)
│   │   │   ├── _app/         # Authenticated app shell routes (scaffold, not live)
│   │   │   └── _auth/        # Login, signup, password reset (scaffold, not live)
│   │   └── styles/globals.css
│   └── server/src/
│       ├── app.ts            # Hono app + router mounts
│       ├── index.ts          # Bootstraps HTTP / workers / cron
│       ├── lib/              # db, redis, auth, logger, mq, env
│       └── <module>/         # Feature modules (auth, file, notification, …)
├── packages/config/          # Shared ESLint + Prettier
└── docker/                   # Local infra compose (Redis, MinIO, Loki, …)
```

### Common mistakes to avoid

```tsx
// BAD — effect to derive state
useEffect(() => setFiltered(items.filter(fn)), [items])

// GOOD
const filtered = items.filter(fn)
```

```tsx
// BAD — useSyncExternalStore for something React already knows
const isOpen = useSyncExternalStore(...)

// GOOD — useState + onClick
const [open, setOpen] = useState(false)
```

```tsx
// BAD — fetch in useEffect
useEffect(() => { fetch('/api/x').then(setData) }, [])

// GOOD — route loader + query
export const Route = createFileRoute('/_app/foo')({
  loader: () => getFooFromQueryClient(),
  component: FooPage,
})
```

```tsx
// BAD — new BadgeWrapperFactory for one page
// GOOD — use existing PortfolioBadge in routes/-components/portfolio-badge.tsx
```

```ts
// BAD — anonymous Hono handler
.get('/', async (c) => c.json({ ok: true }))

// GOOD — named handler (server convention)
.get('/', async function getHealth(c) {
  return c.json({ ok: true })
})
```

### Quick reference links

| Topic | Location |
| --- | --- |
| Frontend conventions | [.agents/skills/frontend/SKILL.md](.agents/skills/frontend/SKILL.md) |
| Project structure examples | [.agents/skills/frontend/references/project-structure.md](.agents/skills/frontend/references/project-structure.md) |
| No useEffect rules | [.agents/skills/no-use-effect/SKILL.md](.agents/skills/no-use-effect/SKILL.md) |
| Backend conventions | [.agents/skills/backend/SKILL.md](.agents/skills/backend/SKILL.md) |
| Client package details | [apps/client/README.md](apps/client/README.md) |
| Server package details | [apps/server/README.md](apps/server/README.md) |

---

## Tech stack

| Layer   | Technologies                                                             |
| ------- | ------------------------------------------------------------------------ |
| Client  | React 19, Vite, TanStack Router, TanStack Query, Tailwind CSS, shadcn/ui |
| Server  | Bun, Hono, Drizzle ORM, Better Auth, BullMQ, Redis, MinIO                |
| Tooling | TypeScript, ESLint, Prettier, Turbo                                      |

## Prerequisites

- [Bun](https://bun.sh) 1.3.11 (see `packageManager` in root `package.json`)
- PostgreSQL database
- Optional local services via Docker Compose: Redis, MinIO, Loki, Grafana, Browserless

## Getting started

For **portfolio work** (the common case), you only need the client:

```bash
bun install
bun run --filter=@repo/client dev
```

The full stack setup below is only needed if you are working on the server or `_app`/`_auth` scaffold routes.

### Full stack setup

```bash
# Install dependencies (skip if already done)
bun install

# Configure environment variables
cp apps/client/.env.example apps/client/.env
cp apps/server/.env.example apps/server/.env

# Start infrastructure (Redis, MinIO, etc.)
docker compose -f docker/docker-compose.yaml up -d

# Run database migrations
bun run db:migrate

# Start client and server in development mode
bun run dev
```

The client runs at [http://localhost:5173](http://localhost:5173) by default. The server listens on port `3000`.

Copy the `.env.example` files and adjust values for your local setup. The server example includes defaults that match `docker/docker-compose.yaml` (Redis on `6379`, MinIO on `9000`).

### Environment variables

Example files live at `apps/client/.env.example` and `apps/server/.env.example`. See the package READMEs for full details:

- [Client environment variables](apps/client/README.md#environment-variables)
- [Server environment variables](apps/server/README.md#environment-variables)
- [Server runtime subsystems](apps/server/README.md#runtime-subsystems) — `ENABLE_HTTP_SERVER`, `ENABLE_QUEUE_WORKERS`, `ENABLE_CRON`

**Client** (`apps/client`):

| Variable            | Description                                         |
| ------------------- | --------------------------------------------------- |
| `VITE_API_BASE_URL` | Base URL of the API server (embedded at build time) |

**Server** (`apps/server`):

| Variable                                            | Description                                                          |
| --------------------------------------------------- | -------------------------------------------------------------------- |
| `DATABASE_URL`                                      | PostgreSQL connection string (`postgresql://…`)                      |
| `HEALTHCHECK_API_KEY`                               | API key for health checks (min. 32 characters)                       |
| `S3_ACCESS_KEY` / `S3_SECRET_KEY`                   | MinIO / S3 credentials                                               |
| `CORS_ORIGIN`                                       | Allowed CORS origin (default: `http://localhost:5173`)               |
| `BETTER_AUTH_URL`                                   | Auth server URL (default: `http://localhost:3000`)                   |
| `APP_BASE_URL`                                      | Frontend URL for emails and links (default: `http://localhost:5173`) |
| `REDIS_HOST`, `REDIS_PORT`, `REDIS_DB`              | Redis connection settings                                            |
| `S3_ENDPOINT`, `S3_PORT`, `S3_USE_SSL`, `S3_BUCKET` | Object storage settings                                              |
| `ENABLE_HTTP_SERVER`                                | Enable the HTTP API server (default: `true`)                         |
| `ENABLE_QUEUE_WORKERS`                              | Enable BullMQ background workers (default: `true`)                   |
| `ENABLE_CRON`                                       | Enable scheduled cron jobs (default: `true`)                         |
| `NODE_ENV`, `PORT`                                  | Runtime mode and HTTP port (default: `3000`)                         |
| `LOKI_HOST`, `LOKI_USERNAME`, `LOKI_PASSWORD`       | Optional log shipping to Grafana Loki                                |
| `SMTP_USER`, `SMTP_PASSWORD`                        | Optional email delivery                                              |

## Scripts

Scripts are defined per package and orchestrated from the root. Run any script from the repo root with `bun run <script>`, or from a specific package with `bun run --filter=<package> <script>`.

### Root (`package.json`)

| Script             | Description                                                                                |
| ------------------ | ------------------------------------------------------------------------------------------ |
| `dev`              | Starts all packages in dev mode via Turbo (client Vite server + server with watch)         |
| `dev:client`       | Starts only the client                                                                     |
| `build`            | Builds the client via Turbo                                                                |
| `build:server`     | Builds the server via Turbo                                                                |
| `clean`            | Removes `node_modules` and `dist` directories across the monorepo                          |
| `lint`             | Runs root ESLint and workspace lint in parallel                                            |
| `format`           | Runs root Prettier and workspace format in parallel                                        |
| `typecheck`        | Type-checks all packages via Turbo                                                         |
| `typecheck:watch`  | Runs `typecheck:watch` in all packages via Turbo                                           |
| `match-versions`   | Syncs dependency versions across workspaces (`prematch-versions` runs `bun install` first) |
| `db:generate`      | Generates Drizzle migrations in `@repo/server`                                             |
| `db:migrate`       | Applies Drizzle migrations in `@repo/server`                                               |
| `db:seed`          | Forwards to `@repo/server` (script not yet defined in the server package)                  |

### Client — `@repo/client` (`apps/client/package.json`)

| Script            | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `dev`             | Starts the Vite development server with HMR                        |
| `build`           | Type-checks with `tsc`, then produces a production build with Vite |
| `preview`         | Serves the production build locally for testing                    |
| `lint`            | Runs ESLint with auto-fix on the client source                     |
| `format`          | Formats client files with Prettier                                 |
| `typecheck`       | Runs `tsc --noEmit` to verify types without emitting files         |
| `typecheck:watch` | Runs `tsc --watch --noEmit` for continuous type checking           |

### Server — `@repo/server` (`apps/server/package.json`)

| Script            | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `dev`             | Starts the server with Bun in watch mode (`src/index.ts`)  |
| `prebuild`        | Cleans the `dist` directory before building                |
| `build`           | Bundles the server for production via `scripts/build.ts`   |
| `start`           | Runs the compiled server from `dist/index.js`              |
| `db:generate`     | Generates Drizzle ORM migration files from schema changes  |
| `db:migrate`      | Applies pending Drizzle migrations to the database         |
| `lint`            | Runs ESLint with auto-fix on the server source             |
| `format`          | Formats server files with Prettier                         |
| `typecheck`       | Runs `tsc --noEmit` to verify types without emitting files |
| `typecheck:watch` | Runs `tsc --watch --noEmit` for continuous type checking   |

### Config — `@repo/config` (`packages/config/package.json`)

Shared tooling package. It does not expose `dev`, `build`, or `typecheck` scripts — it provides ESLint and Prettier configuration consumed by other packages.

| Script   | Description                                     |
| -------- | ----------------------------------------------- |
| `lint`   | Runs ESLint with auto-fix on the config package |
| `format` | Formats config files with Prettier              |

## Running scripts in a single package

```bash
# Client only
bun run --filter=@repo/client dev

# Server only
bun run --filter=@repo/server dev

# Production server
bun run --filter=@repo/server build
bun run --filter=@repo/server start
```

## Docker

Each app has a production Dockerfile under `apps/client/docker/` and `apps/server/docker/`. Both images must be built from the **repository root** so the monorepo context (workspaces, lockfile, and shared packages) is available.

### Build images

Run these commands from the project root:

```bash
# Client — static SPA served on port 80
docker build \
  -f apps/client/docker/Dockerfile \
  --build-arg VITE_API_BASE_URL=http://localhost:3000 \
  -t nameer-live-client \
  .

# Server — Bun API on port 3000
docker build \
  -f apps/server/docker/Dockerfile \
  -t nameer-live-server \
  .
```

`VITE_API_BASE_URL` is baked into the client bundle at build time. Set it to the URL where the API will be reachable from the browser (for example `https://api.example.com` in production).

### Run containers

The server image expects runtime environment variables (see [Environment variables](#environment-variables) above). Pass them with `-e` flags or an env file:

```bash
docker run --rm -p 3000:3000 \
  --env-file apps/server/.env \
  nameer-live-server
```

Or pass variables individually:

```bash
docker run --rm -p 3000:3000 \
  -e DATABASE_URL=postgresql://user:pass@host:5432/db \
  -e HEALTHCHECK_API_KEY=your-secret-key-at-least-32-chars \
  -e S3_ACCESS_KEY=minioadmin \
  -e S3_SECRET_KEY=minioadmin \
  nameer-live-server
```

To run API-only, worker-only, or cron-only containers, set the `ENABLE_*` flags — see [Server runtime subsystems](apps/server/README.md#runtime-subsystems).

```bash
docker run --rm -p 8080:80 nameer-live-client
```

The client container serves the built SPA with [static-web-server](https://github.com/static-web-server/static-web-server) and exposes port `80`. Map it to any host port as needed (for example `-p 8080:80`).

### Image overview

| Image  | Dockerfile                      | Default port | Notes                                                                                                                                        |
| ------ | ------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Client | `apps/client/docker/Dockerfile` | `80`         | Multi-stage: Bun installs deps and runs `bun run build --filter @repo/client`, then copies `apps/client/dist` into a static-web-server image |
| Server | `apps/server/docker/Dockerfile` | `3000`       | Multi-stage: Bun builds `@repo/server`, then runs `dist/index.js`; `sharp` is reinstalled in the final stage as a native dependency          |

### Local infrastructure

`docker/docker-compose.yaml` is separate from the app images. Use it to run supporting services locally (Redis, MinIO, Loki, Grafana, Browserless):

```bash
docker compose -f docker/docker-compose.yaml up -d
```
