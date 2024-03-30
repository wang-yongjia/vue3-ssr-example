let path = require("path");
let nodeExternals = require("webpack-node-externals");
let { DefinePlugin } = require("webpack");
let { VueLoaderPlugin } = require("vue-loader/dist/index");
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    // 定义两个环境变量，关闭option api 和 pro 调试的提示
    new DefinePlugin({
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".wasm", ".jsx", ".jsx", "vue"],
  },
};
