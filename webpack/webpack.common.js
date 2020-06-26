const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.tsx'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, '..', 'src', 'components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(jpeg|jpg|png|svg|)$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            options: {
              publicPath: './dist/',
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',
          },
          {
            options: {
              publicPath: './dist/',
              name: '[name].[ext]?[hash]',
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'index.html'),
      filename: path.resolve(__dirname, '..', 'dist', 'index.html'),
    }),
  ],
};
