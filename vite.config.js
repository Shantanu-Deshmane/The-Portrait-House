import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor code into a separate cacheable chunk.
        // Note: In Vite 6, React is pre-bundled via optimizeDeps and
        // included in the vendor chunk automatically. We only need to
        // split react-router-dom explicitly since it's the largest dep.
        manualChunks(id) {
          // Bundle all node_modules into a single 'vendor' chunk
          // so they're cached independently from app code
          if (id.includes('node_modules')) {
            if (id.includes('react-router-dom') || id.includes('react-router') || id.includes('@remix-run')) {
              return 'vendor-router';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})
