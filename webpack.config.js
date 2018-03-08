const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin(
  {
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body'
  }
);

module.exports = {
  // starting file to transform to normal js
  entry: __dirname + '/app/index.js',

  module: {
    rules: [
      {
        // transform all js files
        test: /\.js$/,
        // exclude node modules
        exclude: /node_modules/,
        // which transformer to use
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    // which file to save transformed js to
    filename: 'transformed.js',
    // where the file is located
    path: __dirname + '/build'
  },

  plugins: [ HTMLWebpackPluginConfig ]
};
