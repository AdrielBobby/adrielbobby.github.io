import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site is served from the root of adrielbobby.github.io, so base stays '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
