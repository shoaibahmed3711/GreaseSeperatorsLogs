import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendors': ['react', 'react-dom'],
          // Add other large dependencies as necessary
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit to 1000 kB
  },
});
