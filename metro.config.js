const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
	const {
		resolver: { assetExts, sourceExts },
	} = await getDefaultConfig()

	return {
		resolver: {
			assetExts: assetExts.filter((ext) => ext !== 'svg'),
			sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
		},
		transformer: {
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
	}
})()
