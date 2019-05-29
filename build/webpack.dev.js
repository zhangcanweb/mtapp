const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[hash:8].js'
  },
  devServer: {
    contentBase: 'dist',
    // open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          }, {
            loader: 'less-loader'
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer'),
                require('postcss-sprites')({ spritePath: '../src/assets/img/sprites' })
              ]
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
});
