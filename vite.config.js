import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: process.env.VERCEL_ENV === 'production' ? '/' : '/SridharPortfolioAug/',
  plugins: [react()],
  server: { port: 5173 }
})