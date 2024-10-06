module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  ignorePatterns: ['dist/**/*'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },

  rules: {
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'dot-notation': 0,
    'no-underscore-dangle': 0,
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/prefer-default-export': 0,
  },
};
