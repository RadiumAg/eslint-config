const { rules: orderRules } = require('@raag/eslint-config-import-order');

module.exports = {
  extends: ['react-app',  '@raag/eslint-config-ts'],
  rules: { ...orderRules },
};
