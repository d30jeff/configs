import config from './eslint/eslint.node.mjs';

export default [
  {
    files: ['./dev/*.ts'],
    ignores: ['./eslint'],
  },
  ...config,
];
