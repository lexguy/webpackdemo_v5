/*
 * @Author: xuwei
 * @Date: 2021-03-22 20:53:27
 * @LastEditTime: 2021-03-23 00:09:58
 * @LastEditors: xuwei
 * @Description: 在Webpack4 中，可以不配置任何配置文件，但是相较于输入命令和参数，配置文件依然高效的多
 *
 *    https://www.webpackjs.com/concepts/output/
 *    https://www.webpackjs.com/guides/getting-started/
 *
 */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(), // 注意查看该库的最新版的传参方式 ，5.27.1文档上需要传参，但这里使用的库的 v3.0.0 已经不需要（或者传入options对象）
    new HtmlWebpackPlugin({
      title: "Output Manager",
    }),
  ],
};
