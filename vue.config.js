// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    // 配置反向代理
    proxy: {
      // 当地址中有 /api 的时候会触发代理机制
      '/api': {
        // 要代理的服务地址
        target: 'http://127.0.0.1:4523/m1/1138619-0-default',
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: { fallback: { path: require.resolve('path-browserify') } }
  }
}
