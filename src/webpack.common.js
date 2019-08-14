const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEST_DIR = '../build/';
const SRC_DIR = './';
const ASSESTS_DIR = 'assets/';

module.exports = {

	entry: {
		'app': SRC_DIR + 'app.jsx'
	},

	output: {
		path: path.resolve(__dirname, DEST_DIR),
		filename: ASSESTS_DIR + 'js/[hash].js',
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				},
			}
		}
	},


	module: {
		rules: [
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				]
			},

			{
				test: /\.js?x$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
					}
				]
			},

			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'postcss-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},

			{
				test: /\.(png|jpg|jpeg|svg|ico)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: ASSESTS_DIR + 'img/',
							name: '[hash].[ext]',
						}
					}
				]
			},

			{
				test: /\.(woff|woff2|ttf|eot)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: ASSESTS_DIR + 'fonts/',
							name: '[hash].[ext]',
						}
					}
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			meta: {
				viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				description: '',
				keywords: '',
				'format-detection': 'telephone=no',
				MobileOptimized: '320',
				'theme-color': '#ffae00'
			},
			title: 'Расчет сметы под ключ - Мос-Брусчатка',
			favicon: SRC_DIR + 'img/favicon.ico',
			template: SRC_DIR + 'index.ejs',
			hash: true,
			xhtml: true
		}),
	],

};
