/// <reference types="vitest" />

import { defineConfig, PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import { rm } from 'fs/promises';
import { resolve } from 'path';

// custom vite plugin to remove certain files after build (such as the mockServiceWorker)
const bundleExclude = (excludeOutputFile: string): PluginOption => ({
  apply: 'build',
  enforce: 'post',
  name: 'bundle-exclude',
  writeBundle: async (outputOpts) => {
    if (outputOpts?.dir) {
      const excludeTarget = resolve(outputOpts.dir, excludeOutputFile);
      await rm(excludeTarget, { force: true });
    }
  },
});

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
  plugins: [react(), bundleExclude('mockServiceWorker.js')],
});
