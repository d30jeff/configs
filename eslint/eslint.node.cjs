const baseConfig = require('./eslint.base.cjs')
const parser = require('@typescript-eslint/parser');
const tseslint = require('typescript-eslint');
const pluginSecurity = require('eslint-plugin-security');

module.exports = tseslint.config({
  files: ["**/*.ts", '../*.cjs'],
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
    'eslint-plugin-security': pluginSecurity.configs.recommended
  },
  rules: {
    ...baseConfig.rules,
  },
})
