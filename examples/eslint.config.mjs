import config from '../eslint/eslint.node.mjs';

export default [
  {
    files: ['**/*.{ts,js,cjs,mjs}'],
    ignores: [
      'dist',
      'type-dist',
      'node_modules',
      'libs/prisma/**/*',
    ],
  },
  ...config,
];
