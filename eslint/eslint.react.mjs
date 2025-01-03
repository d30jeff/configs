import parser from '@typescript-eslint/parser';
import a11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import storybook from 'eslint-plugin-storybook';
import tailwindcss from 'eslint-plugin-tailwindcss';
import tseslint from 'typescript-eslint';

import baseConfig from './eslint.base.mjs';

export default tseslint.config({
  extends: [...baseConfig.extends],
  languageOptions: {
    parserOptions: {
      parser,
    },
  },
  plugins: {
    ...baseConfig.plugins,
    'jsx-a11y': a11y,
    'react': react,
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    storybook,
    tailwindcss,
  },
  rules: {
    ...baseConfig.rules,
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'line-aligned',
        selfClosing: 'line-aligned',
      },
    ],
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
    ],
    'react/jsx-first-prop-new-line': ['error'],
    'react/jsx-fragments': 'off',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 1,
        when: 'always',
      },
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/no-children-prop': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-prop-types': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/sort-prop-types': [2, {}],
    'tailwindcss/no-custom-classname': 'off',
  },
});
