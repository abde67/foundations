import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      emitWarning: true, // ✅ emit warnings instead of errors
      emitError: false,
    }),
  ],

  server: {
    hmr: {
      overlay: false, // stop showing red screen overlay
    },
  },
});
