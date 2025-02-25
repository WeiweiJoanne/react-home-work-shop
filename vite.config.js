import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-home-work-shop/', // 填入你的 GitHub repository 名稱
  build: {
    outDir: 'dist', // 確保輸出資料夾是 dist
  },
})
