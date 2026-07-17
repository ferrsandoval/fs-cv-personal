import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Root-domain deploy (e.g. https://tudominio.com/). If deploying to a
  // subfolder instead (e.g. https://tudominio.com/cv/), set this to that
  // path and update RewriteBase in public/.htaccess to match.
  base: '/',
  plugins: [react(), tailwindcss()],
})
