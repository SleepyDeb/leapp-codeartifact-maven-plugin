const path = require('path');
const PACKAGE = require('./package.json');
const CopyPlugin = require("copy-webpack-plugin");
const { homedir } = require('os');

const buildDirectory = path.resolve(__dirname, `${PACKAGE.name}`);
const leappPluginDirectory = path.resolve(homedir(), `.Leapp/plugins/`, `${PACKAGE.name}`);

module.exports = env => ({
  mode: 'none',
  entry: './plugin-index.ts',
  output: {
    path: env.output === 'plugin' ? buildDirectory : leappPluginDirectory,
    filename: 'plugin.js',
    clean: true,
    library: {
      type: 'commonjs2',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './package.json',
          to: `./package.json`},
        { 
          from: './icon.png',
          to: './icon.png'
        },
        { 
          from: 'README.md',
          to: '.'
        },
        { 
          from: 'LICENSE',
          to: '.'
        },
      ]
    })
  ],
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
});