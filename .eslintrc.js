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
    'universe/web',
    'plugin:react-hooks/recommended',
    'plugin:jest/all',
  ],
  parserOptions: {
    ecmaVersion: 11,
  },
  root: true,
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
}
