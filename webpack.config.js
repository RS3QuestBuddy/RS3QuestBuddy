const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./Networking/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/[base]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "Networking/index.css",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"), // Ensure this is the correct path to your index.html
      filename: "index.html",
    }),
  ],
};