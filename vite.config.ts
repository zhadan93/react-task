import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-task/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  plugins: [react(), ghPages()],
  server: {
    open: true,
  },
});
