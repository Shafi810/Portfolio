import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // ⚠️ Terser ki jagah default esbuild use karein, ye zyada fast hai
    minify: 'esbuild', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          const packages = ['react', 'react-dom', 'framer-motion', 'react-scroll'];
          if (packages.some(pkg => id.includes(`node_modules/${pkg}`))) {
            return 'vendor';
          }
        },
      },
    },
  },
  // Esbuild ke zariye console aur debugger remove karne ke liye:
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
