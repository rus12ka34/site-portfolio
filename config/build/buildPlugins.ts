import htmlWebpackPlugin from 'html-webpack-plugin';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildPlugins(options: BuildOptions): webpack.Configuration['plugins'] {
	const { paths, isDev } = options;
      
	const plugins: webpack.Configuration['plugins'] = [];
  plugins.push(new MiniCssExtractPlugin({
    filename: isDev ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
  }));
  plugins.push(new htmlWebpackPlugin({ title: 'ПОПЫТОЧКИ', template: paths.html }));
  plugins.push(new webpack.ProgressPlugin());

	return plugins;
}
