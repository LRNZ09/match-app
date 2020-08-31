module.exports = {
	env: {
		es2020: true,
	},
	extends: [
		'eslint:recommended',
		'universe/native',
		'plugin:@typescript-eslint/recommended',
		'plugin:unicorn/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:react-native/all',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
		'prettier/unicorn',
	],
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
