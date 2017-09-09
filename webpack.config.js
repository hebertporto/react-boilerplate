const env = process.env.NODE_ENV
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const VENDOR_LIBS = [
  'react', 'react-dom', 'redux', 'react-redux', 'prop-types', 'redux-thunk',
  'react-router-dom', 'react-router-redux',
]

module.exports = {
  entry: {
    bundle: './client/src/index.jsx',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, './client/dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        enforce: 'pre',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, './client/dist'),
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-3'],
          },
        },
      },
      {
        test: /\.less$/,
        use: env === 'production'
          ? ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader'],
            publicPath: 'client/dist',
          })
          : ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpeg|jpg|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 40000,
              name: 'assets/images/[hash]-[name].[ext]',
            },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: './client/src/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new ExtractTextPlugin({
      filename: '[name].[hash].css',
      disable: false,
      allChunks: true,
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
  },
}
