import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/home/',
  plugins: [react()]
})

// npm run build
// git subtree push --prefix dist origin gh-pages