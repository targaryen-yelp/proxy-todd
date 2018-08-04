// const path = require("path");
// const webpack = require("webpack");
// // module.exports = {
// //   entry: {
// //     vendor: ['styled-components'],
// //     app1: './dist/bundleTodd.js',
// //     app2: './dist/bundleBartow.js',
// //     app3: './dist/bundleAnders.js',
// //     app4: './dist/bundleCleo.js'
// //   },
// //   plugins: [
// //     new webpack.optimize.splitChunks({
// //       name: "vendor",
// //       minChunks: Infinity,
// //     }),
// //   ],
// //   optimization: {
// //     splitChunks: {
// //       chunks: 'async',
// //       minSize: 30000,
// //       maxSize: 0,
// //       minChunks: 1,
// //       maxAsyncRequests: 5,
// //       maxInitialRequests: 3,
// //       automaticNameDelimiter: '~',
// //       name: true,
// //       cacheGroups: {
// //         vendors: {
// //           test: /[\\/]node_modules[\\/]/,
// //           priority: -10
// //         },
// //         default: {
// //           minChunks: 2,
// //           priority: -20,
// //           reuseExistingChunk: true
// //         }
// //       }
// //     }
// //   },
// //   output: {
// //     path: path.resolve(__dirname, "./client"),
// //     filename: "bundle.js"
// //   },
// //   module: {
// //     rules: [
// //       {
// //         loader: "babel-loader",
// //         test: /\.js[x]?/,
// //         exclude: /node_modules/,
// //         options: {
// //           presets: ["react", "env"]
// //         }
// //       }
// //     ]
// //   },
// //   resolve: {
// //     extensions: [".js", ".jsx"]
// //   }
// // };

// module.exports = {
//   entry: {
//     vendor: ['styled-components'],
//     app1: './dist/bundleTodd.js',
//     app2: './dist/bundleBartow.js',
//     app3: './dist/bundleAnders.js',
//     app4: './dist/bundleCleo.js'
//   },
//   plugins: [
//       new webpack.optimize.CommonsChunkPlugin({
//         name: "vendor",
//         filename: "vendor.js",
//         minChunks: Infinity,
//       }),
//   ],
//   output: {
//     filename: "[name].js",
//     path: path.join(__dirname, './dist' )
//   }
// }
