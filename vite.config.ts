import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// ✅ Set base path to your repository name for GitHub Pages
export default defineConfig({
  base: '/true-form-frontend/',
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: 'dist',
  },
})
