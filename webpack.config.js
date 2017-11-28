var path = require('path')
var webpack = require('webpack')
var version = process.env['npm_package_version']
module.exports = {
  entry: {
    GoTop: path.resolve("src/js", "GoTop.js"),
    hide: path.resolve("src/js", "hide.js"),
    show: path.resolve("src/js", "show.js")
  },
  output: {
    filename: "[name]." + version + ".min.js",
    //filename: '[name].test.min.js',
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      }
    ]
  }
};