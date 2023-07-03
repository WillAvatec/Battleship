const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  devServer: {
    static: "./dist",
  },
  entry: "./src/controller.js",
  mode: "development",
  plugins: [new ESLintPlugin()],
  devtool: "inline-source-map",
  output: {
    publicPath: "",
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
