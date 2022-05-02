const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['plugin:yml/prettier', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        trailingComma: 'all',
        arrowParens: 'avoid',
      },
    ],
  },
});
