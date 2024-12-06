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

In `eslint.config.cjs`

```
const config = require('@deojeff/configs/eslint/eslint.react.cjs')

module.exports = config;
```

**NodeJS**

```
const config = require('@deojeff/configs/eslint/eslint.node.cjs')

module.exports = config;
```

## Prettier

In `package.json`

```
{
  ...
  "prettier": "@deojeff/configs/prettier/prettier.config.cjs",
}
```

## TypeScript

TODO:
