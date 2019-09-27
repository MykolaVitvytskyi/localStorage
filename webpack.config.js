const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
            }
        ]
        },
        plugins: [
        new ExtractTextPlugin("styles.css"),
        ]
}

module.exports = conf;