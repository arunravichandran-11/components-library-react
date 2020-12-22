const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

var cssConfig = require('./buildTasks/css-optimization.js');
var htmlOptimizationConfig = require('./buildTasks/html-optimization.js');
var scriptsOptimizationConfig = require('./buildTasks/scripts-optimization.js');

module.exports = {
  mode: 'production',
  devServer: {
    port: 4300,
    open: true,
    contentBase: './public',
    publicPath: '/',
    historyApiFallback: true,
  },
  context: __dirname,
  entry: './src/index.js',
  module: {
    rules: [...scriptsOptimizationConfig.rules, ...cssConfig.rules],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      // 'sample-react-lib-by-arun/lib': [path.resolve(__dirname, 'node_modules/sample-react-lib-by-arun/lib')]
    },
  },
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...scriptsOptimizationConfig.plugins,
    ...cssConfig.plugins,
    ...htmlOptimizationConfig.plugins,
    new CompressionPlugin(),
    new CopyWebpackPlugin({
      patterns: [{from: 'public/_redirects', to: path.resolve(__dirname, 'dist/')}],
    }),
  ],
  performance: {
    maxEntrypointSize: 100000,
    hints: 'warning',
  },
  optimization: {
    nodeEnv: 'production',
    // splitChunks: {chunks: 'all'},
    minimize: true,
    // minimizer: [...cssConfig.minimizer, ...scriptsOptimizationConfig.minimizer],
  },
};