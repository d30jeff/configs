import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import importNewline from 'eslint-plugin-import-newlines';
import newline from 'eslint-plugin-newline-destructuring';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortKeys from 'eslint-plugin-sort-keys';
import tseslint from 'typescript-eslint';

export default {
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  plugins: {

    '@stylistic': stylistic,
    '@typescript-eslint': tsEslintPlugin,
    'import': importPlugin,
    'import-newlines': importNewline,
    'newline-destructuring': newline,
    'simple-import-sort': simpleImportSort,
    'sort-keys': sortKeys,
  },
  rules: {
    ...importPlugin.configs.typescript.rules,
    '@stylistic/explicit-module-boundary-types': 'off',
    '@stylistic/no-explicit-any': 'off',
    '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    '@stylistic/semi': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': ['error', {
      after: true,
      before: true,
    }],
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', {
      after: true,
      before: false,
    }],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'global-require': 'off',
    'import-newlines/enforce': ['error', { items: 2 }],
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'key-spacing': [2, { afterColon: true }],
    'keyword-spacing': [
      'error',
      {
        after: true,
        before: true,
      },
    ],
    'lines-between-class-members': ['error', 'always'],
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
    'new-parens': ['error', 'always'],
    'newline-destructuring/newline': ['error', { items: 2 }],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
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
          minProperties: 2,
          multiline: true,
        },
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
        },
      },
    ],
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': 'error',
    'prefer-destructuring': 'warn',
    // 'prettier/prettier': ['warn', { usePrettierrc: false }],
    'quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: false,
      },
    ],
    'semi': ['error', 'always'],
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
    'space-before-blocks': ['error', 'always'],
    'template-curly-spacing': ['error', 'never'],
  },
};
