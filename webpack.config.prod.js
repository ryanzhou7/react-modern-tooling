const merge = require("webpack-merge");

// analyze the bundle we create with webpack
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const baseConfig = require("./webpack.config.base");

// Use all the base config, but mode is in prod
module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // So it generates a report.html for viewing just once (not continuously)
      openAnalyzer: true, // DO open up the browser just generate the report
      reportFilename: "bundle_size.html", // custom bundle report name
    }),
  ],

  // Don't bundle some code but reference it from a cdn
  externals: {
    react: "React", // LHS package name, RHS import
    "react-dom": "ReactDOM",
  },
});
