import vue from '@vitejs/plugin-vue'
import path from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'AnchorUI',
      fileName: format => `anchor-ui.${format}.js`,
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
})
