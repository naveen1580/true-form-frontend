import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/true-form-frontend/", // ✅ important for GitHub Pages
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
});
