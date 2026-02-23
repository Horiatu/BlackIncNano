import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import manifest from './public/manifest.json' // Import the manifest file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [crx({ manifest })],
})