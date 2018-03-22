const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  devtool:"source-map",

  entry: {
    "app.bundle" : './src/index.js',
    "app.preloader" : './src/preloader.js'
  },

  output: {
    path: path.join(__dirname,'dist'),
    filename: '[name].js',
    publicPath : '/dist/'
  },

  devServer: {
    port: 3000,
    stats: "errors-only",
    open: true
  },

  module:{
    rules : [
      {
        test : /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },

      {
        test : /\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },

      {
        test : /\.css$/,
        use: ExtractTextPlugin.extract('css-loader','style-loader')
      },

      {
        test : /\.(jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'images/',
              publicPath : './images'
            }
          }
        ]
      },

      {
        test : /\.(ttf|woff|woff2|eot|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'fonts/',
              publicPath : './fonts'
            }
          }
        ]
      },

      {
        test : /\.(mp3)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name : '[name].[ext]',
              outputPath : 'sounds/',
              publicPath : './sounds'
            }
          }
        ]
      }
    ]
  },

  plugins: [
        new ExtractTextPlugin('app.bundle.css'),
    ]
};
