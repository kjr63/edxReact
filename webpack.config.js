//console.log(__dirname);
const path = require('path');
module.exports = {
    entry: "./public_html/jsx/app.jsx",
    mode: "development",
    output: {
        path: path.join(__dirname, 'public_html', 'js'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx$/,
            exclude: /node_modules/
        }//, {
         //   test: /\.scss$/,
         //   use: "sass-loader"
        //}
        ]
    },
    devtool: "cheap-module-eval-source-map"
}
