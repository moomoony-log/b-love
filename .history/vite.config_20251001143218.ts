import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  
    port: 9090,       
    hmr: {
      clientPort: 9090  
    },
    watch: {
      usePolling: true 
    }
  }
})
