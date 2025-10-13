import path from 'path';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    // Generate .d.ts files during build. Configured for monorepo usage.
    dts({
      // output types into dist alongside build
      outDir: 'dist',
      // respect package.json `types` field and generate a single index.d.ts
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'UltimateCoreUI',
      fileName: (format: string) => `ultimate-core-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'vuetify'],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: 'Vuetify',
        },
      },
    },
  },
});
