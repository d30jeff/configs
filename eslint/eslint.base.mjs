import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import newline from 'eslint-plugin-newline-destructuring';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import tseslint from 'typescript-eslint';

export default {
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  plugins: {
    '@stylistic': stylistic,
    '@typescript-eslint': tsEslintPlugin,
    'import': importPlugin,
    'newline-destructuring': newline,
    'prettier': eslintPluginPrettier,
    'simple-import-sort': simpleImportSort,
    'sort-keys': sortKeys,
  },
  rules: {
    ...importPlugin.configs.typescript.rules,
    '@stylistic//no-explicit-any': 'off',
    '@stylistic/explicit-module-boundary-types': 'off',
    '@stylistic/object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'comma-dangle': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'key-spacing': [
      2,
      {
        afterColon: true,
      },
    ],
    'max-len': [
      'error',
      {
        code: 120,
        ignoreComments: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'no-empty': 'warn',
    'no-lone-blocks': 'off',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-param-reassign': 'off',
    'no-redeclare': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'no-useless-escape': 'warn',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: {
          minProperties: 3,
          multiline: true,
        },
        ImportDeclaration: {
          minProperties: 2,
          multiline: true,
        },
        ObjectExpression: 'always',
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [2, 'always'],
    'prefer-destructuring': 'warn',
    'prettier/prettier': [
      'warn',
      {
        usePrettierrc: false,
      },
    ],
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: false,
      },
    ],
    'semi': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        minKeys: 2,
        natural: false,
      },
    ],
    'sort-keys/sort-keys-fix': 1,
  },
};
