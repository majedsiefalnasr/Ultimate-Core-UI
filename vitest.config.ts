import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [],
    testTransformMode: {
      web: ['**/*.vue'],
    },
    alias: {
      '@': '/src',
    },
    deps: {
      inline: [],
    },
    server: {
      deps: {
        inline: ['vuetify'],
      },
    },
  },
});
