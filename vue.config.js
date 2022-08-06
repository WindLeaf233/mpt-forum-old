const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // 解决跨域问题
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:2333',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
