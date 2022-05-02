const { defineConfig } = require('eslint-define-config');
const basic = require('@radium/eslint-config-basic');

module.exports = defineConfig({
  extends: [
    '@radium/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    ...basic.overrides,
    {
      files: ['*.ts'],
      rules: {
        'no-undef': 'off',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off',
      },
    },
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
    'eol-last': 'error',
    'no-trailing-spaces': 'error',
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    eqeqeq: 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    camelcase: ['error', { properties: 'never' }],
    semi: ['error', 'always'],
    indent: ['off', 2, { SwitchCase: 2 }],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/member-delimiter-style': ['off'],
  },
});
