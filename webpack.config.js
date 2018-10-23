// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        entry: ['./src/app.js', './src/styles/main.scss']
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
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:  [
                    'style-loader', 
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'sass-loader'
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
        port: 9000,
        overlay: { // Shows a full-screen overlay in the browser when there are compiler errors or warnings
            warnings: true, // default false
            errors: true, //default false
        },
    }
}