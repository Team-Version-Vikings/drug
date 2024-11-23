import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/diseasesearch": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
    port: 5173,
    historyApiFallback: true, // Ensures fallback to index.html
  },
});
