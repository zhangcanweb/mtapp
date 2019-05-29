const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js')
  },
  resolve: {
    extensions: ['.vue', '.js', '.json ']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require('eslint-formatter-friendly') // 指定错误报告的格式规范
        }
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1 * 1024
            }
          }
        ]
      }, {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // 小于 10kB(10240字节）的内联文件
          limit: 10 * 1024,
          // 移除 url 中的引号
          // (在大多数情况下它们都不是必要的)
          noquotes: true
        }
      }, // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   loader: 'image-webpack-loader',
      //   // 这会应用该 loader，在其它之前
      //   enforce: 'pre'
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin(),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, '../dll/vendors.dll.js')
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dll/vendors.dll.json')
    })
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
};
