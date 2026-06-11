import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourdomain.com",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  build: {
    format: "directory",
    inlineStylesheets: "never",
  },
  server: {
    host: "localhost",
    port: 4321,
  },
  vite: {
    server: {
      host: "localhost",
      strictPort: true,
      allowedHosts: [
        "localhost",
        "127.0.0.1",
        ".ngrok-free.app",
        ".ngrok.io",
        ".ngrok.app",
      ],
    },
    build: {
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
