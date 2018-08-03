const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
     vendor: ['styled-components'],
    app1: 'http://localhost:3001/bundle.js',
    app2: './src/app.2.js',
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
  ]
}
