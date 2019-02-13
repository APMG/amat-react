const path = require("path");
const globImporter = require("node-sass-glob-importer");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  // use devMode unless mode is set to production
  const devMode = argv.mode !== "production" ? true : false;

  return {
    entry: [
      "core-js/modules/es6.promise",
      "core-js/modules/es6.array.iterator",
      path.resolve(__dirname, "./src/index.js")
    ],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      library: ["AmatReact"],
      libraryTarget: "umd",
      publicPath: "/dist/"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: devMode ? "style-loader" : MiniCssExtractPlugin.loader
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                importer: globImporter(),
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new MiniCssExtractPlugin({
        filename: devMode ? "[name].css" : "[name].[hash].css",
        chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
      })
    ]
    // output: {
    //   path: __dirname + '/dist',
    //   publicPath: '/',
    //   filename: 'bundle.js'
    // }
    //   devServer: {
    //     contentBase: './dist',
    //     port: 3005
    //   }
  };
};
