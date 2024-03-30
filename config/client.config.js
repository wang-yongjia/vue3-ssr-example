let path = require("path");
let baseConfig = require("./base.config");
let { merge } = require("webpack-merge");
module.exports = merge(baseConfig, {
  target: "web", // 构建目标环境
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "../build/client"),
  },
});
