import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Configura alias para resolver las importaciones de FontAwesome
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons': '@fortawesome/free-solid-svg-icons',
    },
  },
});
