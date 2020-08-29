module.exports = {
	env: {
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'@react-native-community',
		'universe',
		'universe/node',
		'universe/native',
		'plugin:react-hooks/recommended',
	],
	parserOptions: {
		ecmaVersion: 11,
	},
	plugins: ['emotion'],
	root: true,
	rules: {
		// '@emotion/pkg-renaming': 'warn',
		'emotion/styled-import': 'error',
		'emotion/syntax-preference': ['error', 'object'],
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '~/**',
						group: 'parent',
						position: 'before',
					},
				],
			},
		],
	},
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
}
