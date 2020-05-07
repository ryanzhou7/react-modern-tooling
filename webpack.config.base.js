const path = require("path");

// Used for injection our js bundle into a html, since react needs to be hosted
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply this rule to all files ending in .js
        loader: "babel-loader", // Tell webpack to use babel to convert to the preset below
        exclude: /node_modules/, // don't include node modules
        // Had options object here for babel
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
      },
    ],
  },

  // Plugins for webpack
  plugins: [
    new HtmlWebpackPlugin({
      // What template to make the html in dist from
      template: "./src/index.html",
    }),
  ],
};
