const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',  // 没有这个github page会找不到静态资源
  outputDir: 'dist', // dist
  assetsDir: 'static',
  transpileDependencies: true,
  lintOnSave: false,
})
