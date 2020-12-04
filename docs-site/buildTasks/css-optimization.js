// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  rules: [
    {
      // test: /\.s[ac]ss$/i,
      test: /\.s?css$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          // include: ['node_modules'],
          options: {
            import: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {},
        },
      ],
    },
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
