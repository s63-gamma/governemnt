const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');
const webpack = require('webpack');

var API_URL = {
  production: JSON.stringify('https://api.guushamm.nl/'),
  development: JSON.stringify('http://localhost:8080/g-movement-0.0.1-SNAPSHOT/')
};

// check environment mode
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';


module.exports = {
  entry: path.resolve(__dirname, './src/main.jsx'),
  output: {
    path: path.resolve(__dirname, 'build/'),
    filename: 'script.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(eot|gif|jpe?g|png|svg|ttf|woff2?)(\?.*)?$/,
        loaders: ['file'],
      },
    ],
  },
  externals: {
    // Workaround for https://github.com/airbnb/enzyme/issues/47
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name
    }),
    new webpack.DefinePlugin({
      'API_URL': API_URL[environment]
    })
  ]
};
