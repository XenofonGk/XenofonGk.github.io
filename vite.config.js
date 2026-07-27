import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' because this deploys to a *username*.github.io user page (served at root).
// If you ever move this to a project repo instead (username.github.io/repo-name),
// change base to '/repo-name/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
