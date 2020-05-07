const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

// Use all the base config, but mode is in dev
module.exports = merge(baseConfig, {
  mode: "development",
  devServer: {
    port: 3000, // change the port the dev server runs on
  },
  devtool: "source-map", // map from generated to original source code so when debugging can see it easily
});
