const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  extends: ['plugin:import/recommended'],
  rules: {
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'error',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/named': 'off',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        pathGroups: [{ pattern: '@/**', group: 'internal' }],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
  },
});
