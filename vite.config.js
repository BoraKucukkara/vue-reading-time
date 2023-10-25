const path = require('path');
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/install.js'),
      name: 'packageLib',
      fileName: (format) => `package-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [vue()],
})