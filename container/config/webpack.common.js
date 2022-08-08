//** Remember,  this is what is going to take some kind of HTML file inside of our project and inject a couple of different script tags inside of it. */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      /**
       * set loaders babel is processing all of our code from ES 20 16 15 to ES 5 code
       */
      {
        test: /\.m?js$/, // every file with mjs or js is going to be proccesed by babel
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            /**
             * @babel/preset-react -> process JSX tags
             * @babe/preset-env -> transform code to ES 5
             * @babel/plugin-transform-runtime add a bit of aditional code for enabling extra features async/await
             */
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
