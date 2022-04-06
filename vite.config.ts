import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue'],
    }),

    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /\/#\//,
        replacement: pathResolve('types') + '/',
      },
    ],
  },
  //   esbuild: {
  //     jsxFactory: 'h',
  //     jsxFragment: 'Fragment',
  //     jsxInject: 'import { h } from "vue";',
  //   },
  css: {
    // css预处理器
    preprocessorOptions: {
      scss: {
        charset: false,
        additionalData: `@import "./src/assets/default/baseProperty.scss";@import "./src/assets/default/common.scss";`,
      },
    },
  },
  server: {
    proxy: {
      '/206-user': {
        target: 'http://206-manage-lung.dev.cechealth.cn',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/user/, ''),
      },
      '/cus': {
        target: 'https://www.taobao.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cus/, ''),
      },
    },
  },
})
