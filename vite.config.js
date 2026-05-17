import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'oxc', // Vite 8 ka default
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
  // esbuild ki jagah oxc options use karein console drop karne ke liye
  oxc: {
    drop: ['console', 'debugger'],
  },
});
