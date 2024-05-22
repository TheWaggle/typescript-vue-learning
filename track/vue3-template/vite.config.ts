import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // ビルド設定 - 出力ファイルを指定することができる
  build: {
    // build したファイルを public ディレクトリに出力する
    outDir: 'public',
    rollupOptions: {
      output: {
        // JavaScript を public/index.js 1枚にまとめる
        entryFileNames: 'index.js',
        assetFileNames: (assetInfo) => {
          // CSS を public/style.css にまとめる
          if (assetInfo.name?.endsWith('.css')) {
            return 'style.css'
          }
          return `assets/${assetInfo.name}`
        }
      }
    }
  }
})
