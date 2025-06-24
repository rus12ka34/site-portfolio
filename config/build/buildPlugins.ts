import htmlWebpackPlugin from 'html-webpack-plugin';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { BuildOptions } from './types/config';
import webpack from 'webpack';

export function buildPlugins(options: BuildOptions): webpack.Configuration['plugins'] {
	const { paths, isDev } = options;
  const plugins: webpack.Configuration['plugins'] = [];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  plugins.push(new MiniCssExtractPlugin({
    filename: isDev ? "[name].css" : "[name].[contenthash].css",
    chunkFilename: isDev ? "[id].css" : "[id].[contenthash].css",
  }));
  plugins.push(new htmlWebpackPlugin({ title: 'Агрегатор', template: paths.html }));
  plugins.push(new webpack.DefinePlugin({
    __IS_DEV__: Boolean(isDev)
  }));

	return plugins;
}
