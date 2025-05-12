# Configs

This is a bundle configuration files for eslint, prettier, and typescript based on my subjective preference.

Feel free to fork and modify as needed for your use case.

### Motivation

To alleviate the pain of maintaining different eslint, typescript config, and prettier configuration across different projects.

### Installation

**npm**

`npm i -D @deojeff/configs eslint`

**yarn**

`yarn add -D @deojeff/configs eslint`

**pnpm**

`pnpm add -D @deojeff/configs eslint`

# Usage

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


# Rule Details

Work in progress, please refer to the eslint file for more information.

## Basics
## Arrays
## Objects
## Functions
## Classes

## Basics

## Arrays

### Spacing
`'array-bracket-spacing': ['error', 'never']`

❌ There should be no space after `[` and before `]`

`export const arrays = [ 1, 2, 3, 4, 5 ];`

✅ No spaces

`export const arrays = [1, 2, 3, 4, 5];`

### Class Properties

❌ Unexpected blank line between class members

```
export class Person {
  name: string;

  age: string;
}
```

✅ No additional lines between properties

```
class Person {
  name: string;
  age: string;
}
```


### Class Methods

❌ Expected blank line between class members
```ts
export class Person {
  name: string;
  age: string;

  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
```

✅ Require additional lines between methods

```ts
export class Person {
  name: string;
  age: string;

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}
```
