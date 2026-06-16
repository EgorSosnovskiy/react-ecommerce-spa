import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/',
    clean: true,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.js', '.jsx'],

    alias: {
      modules: path.resolve(__dirname, 'src/modules'),
      shared: path.resolve(__dirname, 'src/shared'),
      pages: path.resolve(__dirname, 'src/pages'),
      app: path.resolve(__dirname, 'src/app'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              esModule: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
                namedExport: false,
              },
            },
          },
        ],
      },

      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],

  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
