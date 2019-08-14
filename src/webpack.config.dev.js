const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

const DEST_DIR = '../build/';

module.exports = merge(common, {
	mode: 'development',

	watchOptions: {
		ignored: ['node_modules/']
	},

	

	devServer: {
		contentBase: path.join(__dirname, DEST_DIR),
		port: 9999,
		overlay: true,
		open: true
	},

	watch: true,
});
