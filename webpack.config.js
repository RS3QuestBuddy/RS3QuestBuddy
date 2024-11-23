const path = require("path");

/**
 * @type {import("webpack").Configuration}
 */
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: "./Networking/main.tsx", // Update as per your entry file path
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js", // Use a dynamic name for output files
    publicPath: "/", // Ensure the dev server serves files from root
  },
  devtool: "source-map",
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Serve content from "dist"
    },
    port: 3000, // Port for dev server
    open: true, // Automatically open browser
    hot: true, // Enable hot module replacement (HMR)
    historyApiFallback: true, // Fallback to `index.html` for SPAs
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
