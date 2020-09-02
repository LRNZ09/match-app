const path = require('path')

const { getDefaultConfig } = require('metro-config')
const blacklist = require('metro-config/src/defaults/blacklist')

module.exports = (async () => {
	const {
		resolver: { assetExts, sourceExts },
	} = await getDefaultConfig()

	return {
		resolver: {
			assetExts: assetExts.filter((extension) => extension !== 'svg'),
			blacklistRE: blacklist([
				// This stops "react-native run-windows" from causing the metro server to crash if its already running
				new RegExp(
					`${path
						.resolve(path.dirname(''), 'windows')
						.replace(/[/\\]/g, '/')}.*`,
				),
				// This prevents "react-native run-windows" from hitting: EBUSY: resource busy or locked, open msbuild.ProjectImports.zip
				/.*\.ProjectImports\.zip/,
			]),
			sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
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
