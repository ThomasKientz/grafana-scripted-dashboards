const path = require("path");
const ReturnPlugin = require("./return-plugin.js");
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/scripted.js",
  output: {
    filename: "script_webpack.js",
    path: path.resolve(__dirname, "dist")
  },
  stats: {
    errorDetails: true
  },
  optimization: {
    minimize: false
  },
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       terserOptions: {
  //         parse: {
  //           bare_returns: true
  //         }
  //       }
  //     })
  //   ]
  // },
  mode: "production",
  plugins: [new ReturnPlugin()]
};
