import config from './eslint/eslint.node.mjs';

export default [
  {
    files: ['**/*.{js,ts,mjs}'],
    ignores: ['node_modules'],
  },
  ...config,
];
