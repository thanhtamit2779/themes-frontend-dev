var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var DashboardPlugin   = require('webpack-dashboard/plugin');
var path              = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});



module.exports = {
  resolve: {
    alias: {},

    extensions: ['.js', '.jsx', '.scss', '.css']
  },

  entry: './src/index.js',

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: '/',
    compress: true,
    port: 3000,
    host : 'localhost',
    historyApiFallback: true,
    hot: true,
    inline: true,
  },

  externals: {},

  //devtool: 'eval-source-map',
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    extractSass,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        css: ['style.css'],
        js: [ "bundle.js"],
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'root.jQuery': 'jquery',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
      }, {
          loader: "css-loader", options: {
              sourceMap: true
          }
      }, {
          loader: "sass-loader", options: {
              sourceMap: true
          }
      }]
      },
      { 
        test: /\.js$/, 
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.jpg$|\.woff2$|\.eot$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      }
    ]
  }
}