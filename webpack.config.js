const path = require('path');
const nodeExternals = require('webpack-node-externals');
const nodemonPlugin = require('nodemon-webpack-plugin');
module.exports = {
  entry: [path.resolve(__dirname, 'index.ts')],
  devtool: 'source-map',
  target: 'node',
  mode: process.env.NODE_ENV || 'development',
  optimization: {
    // We no not want to minimize our code.
    minimize: false,
    // do not set NODE_ENV
    nodeEnv: false
  },
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  module: {
    rules: [
      {
        exclude: [/node_modules/, /client/],
        test: /\.ts$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts']
  },
  watchOptions: {
    ignored: ['/node_modules/**', 'client/**']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, process.env.BUILD_FOLDER || 'bin'),
    pathinfo: true
  },
  plugins: [new nodemonPlugin()],
  externals: [nodeExternals()]
};

console.log(path.resolve(__dirname, 'client/mutual-fund-app'));
