const path = require('path');

const common = {
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = [
  {
    ...common,
    entry: './src/entry/server.ts',
    output: {
      path: path.resolve(__dirname, 'scripts/server'),
      filename: 'server_addon.js'
    }
  },
  {
    ...common,
    entry: './src/entry/client.ts',
    output: {
      path: path.resolve(__dirname, 'scripts/client'),
      filename: 'addon.js'
    }
  }
];
