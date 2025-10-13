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
