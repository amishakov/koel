/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import laravel from 'laravel-vite-plugin'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    laravel({
      input: [
        'resources/assets/js/app.ts',
        'resources/assets/js/remote/app.ts'
      ],
      refresh: true
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/assets/js'),
      '@modules': path.resolve(__dirname, './node_modules')
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: path.resolve(__dirname, './resources/assets/js/__tests__/setup.ts')
  }
})
