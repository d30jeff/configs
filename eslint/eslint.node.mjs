import parser from '@typescript-eslint/parser';
import ngModuleSort from 'eslint-plugin-ng-module-sort';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

import baseConfig from './eslint.base.mjs';

export default tseslint.config(
  {
    extends: [baseConfig.extends],
    languageOptions: {
      globals: {
        __dirname: 'readonly',
        console: 'readonly',
        process: 'readonly',
      },
      parserOptions: { parser },
    },
    plugins: {
      ...baseConfig.plugins,
      'eslint-plugin-security': pluginSecurity.configs.recommended,
      'ng-module-sort': ngModuleSort,
    },
    rules: {
      ...baseConfig.rules,
      'ng-module-sort/decorator-array-items': 'error',
    },
  },
);
