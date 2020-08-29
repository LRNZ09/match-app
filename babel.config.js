module.exports = {
	plugins: [
		[
			'module-resolver',
			{
				alias: { '~': './src' },
				extensions: ['.json', '.ts', '.tsx'],
			},
		],
		'emotion',
	],
	presets: ['module:metro-react-native-babel-preset'],
}
