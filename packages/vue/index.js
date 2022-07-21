const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  globals: {
    // Reactivity Transform
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',
    $customRef: 'readonly',
    $toRef: 'readonly',
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        // script setup
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',

        // RFC: https://github.com/vuejs/rfcs/discussions/430
        defineOptions: 'readonly',
      },
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  extends: ['plugin:vue/vue3-recommended', '@raag/eslint-config-ts'],
  rules: {
    'vue/max-attributes-per-line': [
      'off',
      {
        singleline: 3,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/eqeqeq': 'error',
    'vue/no-v-html': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'never',
        },
      },
    ],
    "vue/require-default-prop":"off",
    // Reactivity Transform
    'vue/no-setup-props-destructure': 'off',
  },
});
