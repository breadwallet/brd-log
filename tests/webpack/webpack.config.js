const path = require('path');

module.exports = {
  entry: './entry.js',
  mode: 'development',
  output: {
    filename: 'out.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /entry\.js$/,
        exclude: /(node_modules)/,
        loader: 'brd-log/loader',
      }
    ]
  }
};


