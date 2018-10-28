// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        entry: [
            './src/app.js', 
            './src/styles/main.scss'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'javascripts/bundle.js'
    },
    watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'stylesheets/style.css',
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
          })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use:  [
                    {
                        loader: 'style-loader'
                    }, {
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                          plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                              require('precss'),
                              require('autoprefixer')
                            ];
                          }
                        }
                    }, { 
                        loader: 'sass-loader'
                    }
                ]
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        proxy: [ // allows redirect of requests to webpack-dev-server to another destination
            {
              context: ['/api', '/users'],  // can have multiple
              target: 'http://localhost:3000', //server and port to redirect to
              secure: false //don't use https
            }
        ],
        hot: true,
        port: 9000,
        overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
            warnings: true, // default false
            errors: true, //default false
        },
    }
}