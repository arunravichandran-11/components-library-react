const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            "plugins": [
              ["transform-class-properties", { "spec": true }]
            ]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          'css-loader', // Translates CSS into CommonJS
          'sass-loader',
        ],
        // use: [
        //   'style-loader', // Creates `style` nodes from JS stringss
        //   'css-loader', // Translates CSS into CommonJS
        //   'sass-loader', // Compiles Sass to CSS
        // ],
      },
      // {
      //   test: /\.(png|svg|jpg|gif|jpeg)$/,
      //   // use: ['file-loader'],
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         // limit: 8192,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(svg|eot|woff|woff2|ttf)$/,
      //   use: ['file-loader'],
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '@Components': path.join(__dirname, '../components/')
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    publicPath: '/',
    historyApiFallback: true,

    // historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  // optimization: {
  //   splitChunks: {chunks: 'all'},
  // },
};

module.exports = config;
