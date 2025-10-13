# ⚓ Anchor UI

Anchor UI is a **Vue 3 component library** built on top of **Vuetify**, offering a modern, accessible, and consistent design system for building beautiful applications faster.

## 🚀 Features

- Vue 3 + TypeScript
- Vuetify-based components
- Storybook documentation
- Vite library build
- Tree-shakable imports
- Theming support

## 🧰 Commands

```bash
# Start Storybook
npm run storybook

# Run tests
npm run test

# Build library
npm run build
```

## 🧹 Linting & Formatting

This project includes ESLint and Prettier configurations for Vue 3 + TypeScript.

Install dev dependencies and run the linters:

```bash
npm install
npm run lint       # check for lint errors
npm run lint:fix   # auto-fix fixable lint issues
npm run format     # format files with Prettier
```

## 📦 Generating Type Declarations

This project uses `vite-plugin-dts` to emit TypeScript declaration files alongside the build output. To generate `.d.ts` files:

1. Install dependencies using npm:

```bash
npm install
```

2. Run the build (this will produce `dist/*.js` and `dist/index.d.ts`):

```bash
npm run build
```

If you're in a monorepo, ensure the package's `tsconfig.json` is configured to include the correct paths, or pass a custom `tsconfig` path in `vite.config.ts` (the plugin supports that option).

## 📥 Importing components

This library supports multiple import patterns depending on your needs.

- Individual import (tree-shakable, recommended for apps):

```ts
import UButton from '@ultimate/core-ui/src/components/UButton';

export default {
  components: { UButton },
};
```

- Barrel import from package entry (convenient for grouped imports):

```ts
import { UButton } from '@ultimate/core-ui/src';

export default {
  components: { UButton },
};
```

- Plugin install (registers all components globally):

```ts
import AnchorUI from '@ultimate/core-ui/src';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(AnchorUI);
app.mount('#app');
```

Notes:

- The examples above reference the `src` entry in this repository for local development. When consuming the published package, import from the package name (for example, `import { UButton } from '@ultimate/core-ui'`) — the build output will preserve the same public API.
- Prefer individual imports in production apps to reduce bundle size.
