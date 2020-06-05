/* config-overrides.js */

const path = require('path')
const { override, addWebpackResolve, fixBabelImports, overrideDevServer } = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')
const devServerConfig = () => config => {
  return {
    ...config,
    port: 3000,
    proxy: {
      '/mock/158/airi': {
        target: 'https://api.guaik.org',
        changeOrigin: true,
        secure: false
      }
    }
  }
}

module.exports = {
  webpack: override(
    addReactRefresh(),
    // https://github.com/facebook/create-react-app/issues/5118#issuecomment-464368371
    addWebpackResolve({
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    })
  ),
  devServer: overrideDevServer(devServerConfig())
}
// https://api.guaik.org/mock/158/airi
