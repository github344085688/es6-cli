/**
 * Created by f on 2022/6/20.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin')
// friendly-errors-webpack-plugin 和 node-notifier 结局 webpack 改善控制面板信息不友好的体验
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');

// 端口号
const PORT = 9000;

const config = {
  mode: 'development',
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  entry: {
    index: path.resolve(__dirname, './src/main.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // babel 的参数配置全部放在 .babelrc 中
          { loader: 'babel-loader' },
          {
            loader: 'eslint-loader',
            options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
              formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
            }
          }
        ],
        enforce: 'post',
        include: [path.resolve(__dirname, 'src')], // 指定检查的目录
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 0 => 默认，没有 loader; 1 => postcss-loader; 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          'postcss-loader',

        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 小于 10kB(10240字节）的内联文件
              limit: 10 * 1024,
              // 移除 url 中的引号
              // (在大多数情况下它们都不是必要的)
              noquotes: true,
              iesafe: true // 兼容ie
            }
          },
          {
            loader: 'image-webpack-loader' // 压缩 loader
          }
        ],
        // 这会应用该 loader，在其它之前
        enforce: 'pre'
      },
      {
        // 文件解析
        test: /\.(eot|woff|ttf|woff2|appcache|mp4|pdf)(\?|$)/,
        loader: 'file-loader',
        query: {
          // 这么多文件，ext不同，所以需要使用[ext]
          name: 'assets/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'
    }),
    // new StyleLintPlugin({
    //   emitErrors: true // 默认是true，将遇见的错误信息发送给 webpack 的编辑器处理。
    //   // failOnError: true // 默认是false，如果是 true遇见 StyleLint 报错则终止 Webpack 编译，【这个属性在生产打包才使用】。
    // }),
    new HtmlPlugin({
      template: path.resolve(__dirname, './index.html'),
      filename: 'index.html',
      chunks: ['index']
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${PORT}`],
        notes: ['Some additionnal notes to be displayed unpon successful compilation']
      },
      onErrors: function (severity, errors) {
        if (severity !== 'error') {
          return
        }
        const error = errors[0]
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || ''
        })
      },
      clearConsole: true
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    inline: true,
    port: PORT, // 让devServer监听3000端口
    progress: true, // 显示打包进度条
    compress: true, // 是否启用Gzip压缩，默认为false
    stats: 'none' // https://webpack.js.org/configuration/stats/#root
  }
}

module.exports = config;