const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const loader = require("sass-loader");

module.exports = {

    entry: './src/js/index.js',

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js',
      },

      module: {
        rules: [

          {
            test: /\.(sass|css|scss)$/,
            use: [
              // Creates `style` nodes from JS strings
             {
                loader:  MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
             },
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },

          {

            test: /\.(png|jpe?g|gif)$/i,

            use: [

              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              },
            ]
          },

          {
            test: /\.html$/i,
            loader: 'html-loader',
          },

        ],
      },

      devServer: {
        contentBase: path.join(__dirname, 'build'),
        // compress: true,
        port: 9000,
        writeToDisk: true,
        stats: 'errors-only',
        open: true
        },

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
        }),

        new HtmlWebpackPlugin({
          template: './src/distributors.html',
          filename: 'distributors.html'
          }),

        new HtmlWebpackPlugin({
          template: './src/about.html',
          filename: 'about.html'
          }),

        new HtmlWebpackPlugin({
          template: './src/contact.html',
          filename: 'contact.html'
          }),
      

        new MiniCssExtractPlugin()
    ],
};