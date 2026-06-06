// vite.config.js
// This is the configuration file for Vite — our build tool and local dev server.
// Vite compiles your modern JS/JSX into browser-compatible code and hot-reloads
// the page instantly whenever you save a file.

// 'defineConfig' is a helper from Vite that gives you autocomplete when editing
// this file in an editor like VS Code. It doesn't change what the config does.
import { defineConfig } from 'vite';

// This official Vite plugin adds React-specific support:
//   - Transforms JSX (the HTML-looking syntax inside .jsx files) into regular JS
//   - Enables Fast Refresh so only the component you edited re-renders on save
import react from '@vitejs/plugin-react';

// We export the config object so Vite can read it when you run `npm run dev`.
// 'export default' makes this the main (only) thing exported from this file.
export default defineConfig({
  plugins: [react()],
  base: '/',

  build: {
    // Raise the warning threshold to 600 kB so Three.js (which is inherently
    // large) does not trigger a false-alarm warning after chunking.
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // manualChunks splits the final bundle into separate files that the
        // browser can download in parallel and cache independently.
        // Without this, everything is packed into one massive file.
        manualChunks: {
          // React core — changes rarely, so the browser can cache it long-term
          'react-vendor': ['react', 'react-dom'],

          // Framer Motion — animation library, large, keep separate
          'framer': ['framer-motion'],

          // Three.js — 3D library, the heaviest dependency, keep separate
          'three': ['three'],
        },
      },
    },
  },
});
