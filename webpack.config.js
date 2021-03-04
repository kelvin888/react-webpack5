const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')
let mode = "development";

if(process.env.NODE_ENV === "production"){
    mode = "production"
}

module.exports = {
  mode: mode,

  output:{
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]"
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }), 
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
        }
      }
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: "./dist",
  },
};
