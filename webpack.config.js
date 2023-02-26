const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/controller.js',
	mode: 'development',
	plugins: [new ESLintPlugin()],
	output: {
		publicPath: '',
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.svg$/g,
				loader: 'svg-inline-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
