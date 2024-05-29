import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendors': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 2000, // Increase the warning limit to 1000 kB
  },
});
