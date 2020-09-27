const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
	const {
		resolver: { assetExts, sourceExts },
	} = await getDefaultConfig()

	return {
		resolver: {
			assetExts: assetExts.filter((extension) => extension !== 'svg'),
			sourceExts: [...sourceExts, 'svg'],
		},
		transformer: {
			babelTransformerPath: require.resolve('react-native-svg-transformer'),
			getTransformOptions: async () => ({
				transform: {
					experimentalImportSupport: false,
					inlineRequires: false,
				},
			}),
		},
	}
})()
