/* config-overrides.js */

const path = require('path')
const {
  override,
  addWebpackResolve,
  fixBabelImports,
  // addPostcssPlugins,
  overrideDevServer,
  useBabelRc
} = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')
const devServerConfig = () => config => {
  return {
    ...config,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://apitest.t.iwubida.com',
        changeOrigin: true,
        ws: false,
        secure: false
      }
    }
  }
}

module.exports = {
  webpack: override(
    // https://github.com/esetnik/customize-cra-react-refresh
    addReactRefresh({ disableRefreshCheck: true }),
    // https://github.com/facebook/create-react-app/issues/5118#issuecomment-464368371
    addWebpackResolve({
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }),
    useBabelRc(),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true
    })
    // addPostcssPlugins([
    //   require('postcss-px-to-viewport')({
    //     unitToConvert: 'px',
    //     viewportWidth: 1920,
    //     unitPrecision: 5,
    //     propList: ['*'],
    //     viewportUnit: 'vw',
    //     fontViewportUnit: 'vw',
    //     selectorBlackList: ['.ant', '.ignore'],
    //     minPixelValue: 1,
    //     mediaQuery: false,
    //     replace: true,
    //     exclude: [],
    //     landscape: false,
    //     landscapeUnit: 'vw',
    //     landscapeWidth: 1
    //   })
    // ])
  ),
  devServer: overrideDevServer(devServerConfig())
}
