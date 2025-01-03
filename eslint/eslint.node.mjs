import parser from '@typescript-eslint/parser';
import pluginSecurity from 'eslint-plugin-security';
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
    'eslint-plugin-security': pluginSecurity.configs.recommended,
  },
  rules: {
    ...baseConfig.rules,
  },
});