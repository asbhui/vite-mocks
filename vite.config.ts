/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1600,
    outDir: 'build',
    rollupOptions: {
      treeshake: true,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    include: ['**/?(*.)test.ts?(x)'],
    setupFiles: 'vitest.setup.tsx',
    // mockReset: true,
    // clearMocks: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@libraries': '/src/libraries',
    },
  },
});
