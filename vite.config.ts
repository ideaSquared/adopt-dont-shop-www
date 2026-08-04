import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Static single-page marketing site. No dev proxy, no PWA, no backend — this
// deploys as plain static assets (Cloudflare Pages). Kept deliberately lean so
// it can be lifted into the monorepo as `app.marketing` later with the same
// stack (React + Vite + vanilla-extract).
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
