import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  base: "/true-form-frontend/",  // ✅ this is required
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: "dist",
  },
})
