import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './',
  server: {
    port: 8081,
    open: true,
    proxy: {
      '/api': {
        target: 'https://30ad-41-220-200-222.ngrok-free.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/sisden')
      }
    }
  }
})
