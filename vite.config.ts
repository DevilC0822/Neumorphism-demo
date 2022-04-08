import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', //打包路径
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {
      // 正则表达式写法
      '^/api': {
        target: 'http://175.24.198.84:3000/', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // 生产环境打包配置
  //去除 console debugger
  build: {
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `js/${fileName}/[name].[hash].js`
        },
      },
    },
  },
})
