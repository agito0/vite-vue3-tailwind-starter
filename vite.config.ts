import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
// import { VueRouterAutoImports } from 'unplugin-vue-router'
import Components from 'unplugin-vue-components/vite'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

const crossHost = '';

export default defineConfig({
  plugins: [
    VueRouter({ importMode: 'sync' }),
    vue(),
    Components({ resolvers: [HeadlessUiResolver()] }),
    AutoImport({
      imports: ['vue'],
      // imports: ['vue', '@vueuse/head', VueRouterAutoImports],
    }),
  ],
  resolve: {
    alias: {
      '@':'/src/',
    }
  },
  server: {
    open: true, //浏览器自动打开页面
    host: "0.0.0.0", //如果是真机测试，就使用这个IP
    port: 8089,
    // https: true,
    hmr: true,
    proxy: { //配置跨域
      '/api': {
        target: crossHost,
        changeOrigin: true,
        ws: true,
      },
      '/livechat': {
        target: crossHost,
        changeOrigin: true,
        ws: true,
      },
      '/downloadupload': {
        target: crossHost,
        changeOrigin: true,
        ws: true,
      },
      '/download': {
        target: crossHost,
        changeOrigin: true,
        ws: true,
      },
      '/v1': {
        target: crossHost,
        changeOrigin: true,
      },
      '/ws': {
        target: 'wss://internel-slardar.airudder.com',//后端目标接口地址
        changeOrigin: true,//是否允许跨域
        ws: true //开启ws, 如果是http代理此处可以不用设置
      },
      
    }
  },
})
