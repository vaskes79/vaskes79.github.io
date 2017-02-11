'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const postcssCustomProperties = require('postcss-custom-properties');
const optimizeCss = require('cssnano');
const postcssPlugins =  [
  postcssNested,
  // postcssCustomProperties,
  autoprefixer
]

const NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');


module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index'
  },

  output: {
    path: path.join(__dirname, 'public_html'),
    publicPath: '/',
    filename: 'js/[name].js?[hash]',
    library: '[name]'
  },

  watch: NODE_ENV === 'development',
  devtool: NODE_ENV === 'development' ? "cheap-inline-module-source-map" : false,
  watchOptions: {
    aggregateTimeout: 100
  },

  resolve: {
    modules: ['node_modules']
    // extensions: ['', '.js', '.jsx']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader', '*'],
    // extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style', 
          use: 'css!postcss?browsers=last 2 versions'
        })
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style', 
          use: 'css!postcss?browsers=last 2 versions!sass-loader?resolve url'
        })
      },
      {
        test: /\.(png|jpe?g|JPG|ttf|eot|woff|woff2)$/,
        loader: 'file?name=assets/[name].[ext]'
      },
      {
        test: /\.svg$/,
        exclude: /(node_modules)/,
        loaders: ['react-svg-inline-loader']
      }
    ]
  },


  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return postcssPlugins;
        }
      }
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css?[contenthash]', 
      allChunks: true, 
      disable: NODE_ENV === 'development'
    }),
    new HtmlWebpackPlugin({
      title: 'dev static build',
      favicon: 'favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, 'public_html'),
    hot: true,
    inline: true,
    historyApiFallback: true // if static file not found, go /index.html
  }
};

if (NODE_ENV == 'production') {

  postcssPlugins.push(optimizeCss);

  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          // don't show unreachable variables etc
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      })
  );
}