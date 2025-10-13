# Playground

This is a minimal Vite + Vue 3 playground that runs against the library's built bundle in `dist/` so the playground is isolated from source changes.

How it works

- Vite alias maps `@ultimate/core-ui` to the library ESM bundle at `dist/ultimate-core-ui.es.js` so the playground imports the compiled output.
- The playground creates and installs a Vuetify instance from the library bundle (if the bundle exposes it) before mounting the app.

Quick start

1. From the repository root, install dependencies and build the library:

```bash
# install root deps
npm install

# build the library (creates `dist/`)
npm run build
```

2. Start the playground dev server:

```bash
cd playground
npm install
npm run dev
```

3. Open the dev server at http://localhost:5174 and interact with the demo.

Notes

- If you change the library sources you must re-run `npm run build` at the repo root for changes to appear in the playground.
- The playground still includes `vuetify` in its own dependencies to ensure peer deps are available at runtime.
