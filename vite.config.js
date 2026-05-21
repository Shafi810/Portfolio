import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    minify: 'oxc', // Fast production minification
    chunkSizeWarningLimit: 1000, // Warning limit ko 1000kB kar diya taake harmless warnings na aayein
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Path separators (\ ya /) dono ko handle karne ke liye simple package name check
          const packages = ['react', 'react-dom', 'framer-motion', 'react-scroll'];
          if (packages.some(pkg => id.includes(pkg) && id.includes('node_modules'))) {
            return 'vendor'; // In heavy libraries ko alag bundle me daal dega
          }
        },
      },
    },
  },
  // Production build me console logs drop karne ke liye sahi configuration
  esbuild: {
    drop: ['console', 'debugger'],
  },
});
