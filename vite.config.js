import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // Updated to a function format compatible with Vite 8 / Rolldown
        manualChunks(id) {
          const packages = ['react', 'react-dom', 'framer-motion', 'react-scroll'];
          if (packages.some(pkg => id.includes(`node_modules/${pkg}`))) {
            return 'vendor';
          }
        },
      },
    },
  },
});
