const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./Networking/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
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
        test: /\.tsx?$/, // Match .ts and .tsx files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/,
        type: "asset/resource",
        generator: { filename: "[base]" },
      },
      {
        test: /\.(html|json)$/,
        type: "asset/resource",
        generator: { filename: "[base]" },
      },
      {
        test: /\.data\.png$/,
        loader: "alt1/imagedata-loader",
        type: "javascript/auto",
      },
      { test: /\.fontmeta.json/, loader: "alt1/font-loader" },
    ],
  },
};
