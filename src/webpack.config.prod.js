const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const common = require('./webpack.common.js');

module.exports = merge(common,{
	mode: 'production',
	devtool: 'source-map',


	plugins: [
		
		new CleanWebpackPlugin(),

		new ImageminPlugin({ test: /\.(jpeg|jpg|png|gif|svg)$/i }),

		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
	],
});
