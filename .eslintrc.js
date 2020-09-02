module.exports = {
	extends: [
		'@lrnz09/eslint-config',
		'@lrnz09/eslint-config/typescript',
		'@lrnz09/eslint-config/react-native',
	],
	parserOptions: {
		project: './tsconfig.json',
	},
	root: true,
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
}
