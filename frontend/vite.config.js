import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'esnext'
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:8001',
      '/websocket': {
        target: 'ws://127.0.0.1:8001',
        ws: true
      }
    }
  }
});
