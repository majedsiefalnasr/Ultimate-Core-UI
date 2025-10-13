import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Use built ESM bundle from the library's dist so the playground is isolated
      '@ultimate/core-ui': path.resolve(__dirname, '..', 'dist', 'ultimate-core-ui.es.js'),
    },
  },
  server: {
    port: 5174,
    fs: {
      // Allow serving files from the repo root so the playground can import the built bundle
      allow: [path.resolve(__dirname, '..')],
    },
  },
});
