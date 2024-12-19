const baseConfig = require('./eslint.base.cjs')
const parser = require('@typescript-eslint/parser');
const tseslint = require('typescript-eslint');
const react = require('eslint-plugin-react');
const tailwindcss = require('eslint-plugin-tailwindcss');
const reactRefresh = require('eslint-plugin-react-refresh');
const a11y = require('eslint-plugin-jsx-a11y');
const storybook = require('eslint-plugin-storybook');
const reactHooks = require('eslint-plugin-react-hooks');

module.exports = tseslint.config({
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist"],
  languageOptions: {
    parserOptions: {
      parser,
    },
  },
  extends: [
    ...baseConfig.extends,
  ],
  plugins: {
    ...baseConfig.plugins,
    'react': react,
    tailwindcss,
    storybook,
    'react-refresh': reactRefresh,
    'jsx-a11y': a11y,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...baseConfig.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-children-prop': 'off',
    'react/require-default-props': 'off',
    'react/no-unused-prop-types': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/sort-prop-types': [2, {}],
    'jsx-a11y/label-has-associated-control': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'], },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-fragments': 'off',
    'react/no-array-index-key': 'off',
    'react/no-unescaped-entities': 'off',
    'react/button-has-type': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react/display-name': 'off',
    'react/jsx-indent': ['error', 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-first-prop-new-line": ["error"],
    "react/jsx-max-props-per-line": ['error', {
      "maximum": 1,
      "when": "always"
    }],
    "react/jsx-closing-bracket-location": ["error", {
      "nonEmpty": "line-aligned",
      "selfClosing": "line-aligned",
    }],
    'tailwindcss/no-custom-classname': 'off',
  },
})
