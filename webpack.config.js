const path = require('path');

module.exports = [
  {
    entry: './src/entry/server.ts',
    output: {
      path: path.resolve(__dirname, 'scripts/server'),
      filename: 'server_addon.js'
    },
    resolve: {
      alias: {
        '@minecraft': path.resolve(__dirname, './src/minecraft/')
      },
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
  },
  {
    entry: './src/entry/client.ts',
    output: {
      path: path.resolve(__dirname, 'scripts/client'),
      filename: 'addon.js'
    },
    resolve: {
      alias: {
        '@minecraft': path.resolve(__dirname, './src/minecraft/')
      },
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
  }
];
