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
  // 'plugins' is an array — you can add multiple Vite plugins here later.
  // Right now we only need the React plugin.
  plugins: [react()],
});
