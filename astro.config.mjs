// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },

  integrations: [solidJs()],

  // Prettierを無効化
  prettier: false,
})
