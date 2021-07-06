module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    quotes: [
      'error', 'single'
    ],
    semi: [
      'error', 'always'
    ],
    'space-in-parens': [
      'error', 'never'
    ],
    'space-before-function-paren': [
      'error', 'never'
    ],
    'constructor-super': 'error',
    'no-else-return': [
      'error', { allowElseIf: false }
    ],
    'no-floating-decimal': 'error',
    'no-multi-spaces': 'error',
    'array-bracket-newline': [
      'error', 'always'
    ],
    'brace-style': 'error',
    'comma-dangle': [
      'error', 'never'
    ],
    'comma-spacing': [
      'error', { before: false, after: true }
    ],
    'keyword-spacing': [
      'error', { before: true }
    ],
    'lines-between-class-members': [
      'error', 'always'
    ]
  }
};
