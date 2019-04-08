const path = require('path')
const fs = require('fs')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NODE_ENV = process.env.NODE_ENV


const devMode = NODE_ENV !== 'production'
const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = (...relativePaths) =>
  path.resolve(appDirectory, ...relativePaths)

module.exports = {
  entry: resolveAppPath('src/index.js'),
  mode: process.env.NODE_ENV,
  output: {
    publicPath: '/'
  },
  resolve: {
    modules: ['node_modules', resolveAppPath('src')],
    extensions: ['.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveAppPath('src/index.html'),
      inject: true
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: {
      disableDotRule: true
    },
    port: 4200,
    host: '0.0.0.0',
    stats: false, // quiet
    overlay: true,
    disableHostCheck: true,
    watchOptions: {
      ignored: [resolveAppPath('build'), resolveAppPath('node_modules')]
    }
  }
}
