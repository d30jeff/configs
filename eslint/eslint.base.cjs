const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const eslintPluginPrettier = require('eslint-plugin-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const newline = require('eslint-plugin-newline-destructuring');
const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const sortKeys = require('eslint-plugin-sort-keys');
const importPlugin = require('eslint-plugin-import');
const stylisticTS = require('@stylistic/eslint-plugin-ts');
const stylisticJS = require('@stylistic/eslint-plugin-js');

module.exports = {
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
  ],
  plugins: {
    '@typescript-eslint': tsEslintPlugin,
    'newline-destructuring': newline,
    'import': importPlugin,
    '@stylistic/ts': stylisticTS,
    '@stylistic/js': stylisticJS,
    'sort-keys': sortKeys,
    'prettier': eslintPluginPrettier,
    "simple-import-sort": simpleImportSort,
  },
  rules: {
    ...importPlugin.configs.typescript.rules,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'prettier/prettier': ['warn', {
      usePrettierrc: false,
    }],
    'sort-keys/sort-keys-fix': 1,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'global-require': 'off',
    'no-shadow': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-cycle': 'off',
    'import/extensions': 'off',
    '@stylistic/ts/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@stylistic/ts/no-explicit-any': 'off',
    'no-tabs': 'error',
    semi: 'error',
    'no-param-reassign': 'off',
    'no-trailing-spaces': 'error',
    'no-restricted-syntax': 'off',
    'object-curly-spacing': [2, 'always'],
    'no-undefined': 'off',
    'key-spacing': [
      2,
      { afterColon: true, },
    ],
    'no-empty': 'warn',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 'off',
    'prefer-destructuring': 'warn',
    quotes: ['error', 'single', {
      avoidEscape: false,
      allowTemplateLiterals: true,
    }],
    'no-lone-blocks': 'off',
    'no-redeclare': 'off',
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        'ignoreTemplateLiterals': true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$'
      },
    ],
    'no-useless-escape': 'warn',
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    '@stylistic/js/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'no-use-before-define': 'off',
    'no-return-await': 'error',
    'sort-keys': ['error', 'asc', { "caseSensitive": true, "natural": false, "minKeys": 2 }],
  }
}
