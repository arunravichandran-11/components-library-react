// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  rules: [
    {
      test: /\.s?css$/,
      use: [
        'style-loader', // Creates `style` nodes from JS strings
        'css-loader', // Translates CSS into CommonJS
        'sass-loader',
      ],
    },
    // {
    //   test: /\.s?css$/,
    //   use: [
    //     {
    //       loader: 'style-loader'
    //     },
    //     {
    //       loader: 'css-loader',
    //       options: {
    //         import: true,
    //       },
    //     },
    //     {
    //       loader: 'sass-loader',
    //       options: {},
    //     },
    //   ],
    // },
  ],
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[name].css',
    // }),
  ],
  // minimizer: [
  //   new OptimizeCssAssetsPlugin({
  //     cssProcessorOptions: {},
  //   }),
  // ],
};
