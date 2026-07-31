import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
// On GitHub Pages the site is served from /MyPorfolio/, so the production
// build needs that base path. Local dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/MyPorfolio/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    sourcemap: false,
  },
}));
