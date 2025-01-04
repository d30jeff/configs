# Configs

This is my personal configuration files for eslint, prettier, and typescript that works for me.
Feel free to fork and modify as needed for your use case.

### Motivation

To alleviate the pain of maintaining different eslint, typescript config, and prettier configuration across different projects.

### Installation

**npm**

`npm i -D @deojeff/configs`

**yarn**

`yarn add -D @deojeff/configs`

**pnpm**

`pnpm add -D @deojeff/configs`

# Usage

### Eslint

Install eslint as devDependencies in your project.

`pnpm install -D eslint`

**React**

In `eslint.config.mjs`

```
import config from '@deojeff/configs/eslint/eslint.react.mjs';

export default [
  {
    files: ["./src"],
    ignores: ["dist"]
  },
  ...config
];
```

**NodeJS**

In `eslint.config.mjs`

```
import config from '@deojeff/configs/eslint/eslint.node.mjs';

export default [
  {
    files: ["./src"],
    ignores: ["dist"]
  },
  ...config
];
```

## Prettier

In `package.json`

```
{
  ...
  "prettier": "@deojeff/configs/prettier/prettier.config.mjs",
}
```

## TypeScript

**React**

```
{
  "extends": "@deojeff/configs/typescript/react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "outDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    },
    "allowUnreachableCode": true
  },
  "include": ["src", "vite.config.ts"],
  "exclude": ["node_modules", "./dist"]
}
```

**NodeJS**

```
{
  "compilerOptions": {
    "module": "Node16",
    "moduleResolution": "Node16",
    "allowJs": true,
    "lib": ["ESNext"],
    "declaration": true,
    "removeComments": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "useDefineForClassFields": false,
    "allowSyntheticDefaultImports": true,
    "noUnusedParameters": false,
    "noUnusedLocals": false,
    "target": "ESNext",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": ".",
    "typeRoots": ["./src/types", "node_modules/@types"],
    "incremental": true,
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```
