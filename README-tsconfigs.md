# TypeScript config and build notes

This project uses two TypeScript configuration files to separate developer-time checks from build-time declaration emission.

Files

- `tsconfig.json` — primary config used during development and for type-checking (e.g., `npx vue-tsc --noEmit`).
  - Does NOT set `emitDeclarationOnly` so `--noEmit` checks can run without conflict.
  - Includes helpful `types` entries used during dev (e.g., `vite/client`, `vitest/globals`).

- `tsconfig.build.json` — build-only config that _extends_ `tsconfig.json` and enables declaration-only emission.
  - Sets `emitDeclarationOnly: true`, `declaration: true` and `declarationDir: "./dist/types"`.
  - Used only when building type declarations.

Scripts

- `npm run build` — runs the full build and then emits type declarations using `tsconfig.build.json`.
  - Internally calls: `vite build && vue-tsc -p tsconfig.build.json --declaration --emitDeclarationOnly`

- `npm run build:types` — declaration-only emit (useful for CI caching or incremental builds).
  - Internally calls: `vue-tsc -p tsconfig.build.json --declaration --emitDeclarationOnly`

Why this split?

- Developer checks often use `--noEmit`. If `emitDeclarationOnly` is present in the root config, `--noEmit` and `emitDeclarationOnly` conflict and break type checks.
- Splitting into a build-only tsconfig keeps development fast and unblocked while still allowing a single-command declaration emit for packaging/publishing.

Usage examples

Run a fast dev type-check:

```bash
npx vue-tsc --noEmit
```

Emit declarations for publishing (fast declaration-only emit):

```bash
npm run build:types
```

Or build everything (bundles + declarations):

```bash
npm run build
```
