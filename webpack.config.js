//console.log(__dirname);
const path = require('path');
//const { WebpackWarPlugin } = require('webpack-war-plugin');

//export funktio

module.exports = function (env) {
	const isProduction = ( env === 'production' );
	return (
		{
			entry: {
				app: "./public_html/jsx/app.jsx"
			},
			mode: isProduction ? "production" : "development",
			output: {
				path: path.join(__dirname, 'public_html', 'js'),
				filename: "[name].js"
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
			devtool: isProduction ? "source-map" : "cheap-module-eval-source-map",
			devServer: {
				contentBase: path.join(__dirname, 'public_html'),
				inline:true,
				port: 8080
			},
			node: {
				fs: 'empty'
			}
		}
	);
}

// export olio

/*
module.exports = {
    entry: {
		app: "./public_html/src/component/app.src",
		blog: "./public_html/src/component/blog.src"
	},
    mode: "development",
    output: {
        path: path.join(__dirname, 'public_html', 'js'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.src$/,
            exclude: /node_modules/
        }//, {
         //   test: /\.scss$/,
         //   use: "sass-loader"
        //}
        ]
    },
    devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, 'public_html')
	}
}
*/
