import { defineConfig } from 'vite'
import path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // now "@/..." maps to /src
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // no more api setting
      },
    },
  },
});