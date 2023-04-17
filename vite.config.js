import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // createSvgSpritePlugin({     // svg sprite 按需引入
    //   symbolId: 'icon-[name]',
    // }),
    // createSvgIconsPlugin({  // svg icon
    //   iconDirs: [path.resolve(process.cwd(), 'src/pages/homepage/assets')],
    //   symbolId: 'icon-[name]',
    // }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets')],
      symbolId: 'icon-[name]',
    })
  ],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "${path.resolve(__dirname, '/src/variable.scss')}";`
  //     }
  //   }
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // '@': path.resolve(__dirname, 'src')
    }
  }
})
