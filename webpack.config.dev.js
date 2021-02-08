const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/client/index.js"),
  devtool: "cheap-module-source-map",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/client/html/index.html"),
      title: "Travel Planner",
    }),
  ],
};
