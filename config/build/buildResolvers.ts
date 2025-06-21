import { BuildOptions } from './types/config';
import { Configuration } from 'webpack';

export function buildResolvers(options: BuildOptions): Configuration['resolve'] {
	return {
		extensions: ['.tsx', '.ts', '.js'],
		// alias: {
		// 	'@src': options.paths.src,
		// },
	};
}
