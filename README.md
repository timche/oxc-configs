# oxc-configs

> Opinionated Oxfmt and Oxlint configs

## Install

```sh
bun add -d @timche/oxc-configs
```

The Oxlint config enables [type-aware linting](https://oxc.rs/docs/guide/usage/linter/type-aware.html), which needs an extra dependency:

```sh
bun add -d oxlint-tsgolint
```

Type-aware rules read type information from the `tsconfig.json` that Oxlint discovers for each file. Files that no `tsconfig.json` covers report their types as `error`, which makes the `typescript/no-unsafe-*` rules fire on every expression in them. The config already turns those rules off for `*.test.js`, `*.test.jsx`, `*.test.ts` and `*.test.tsx`. Other layouts, such as tests in a `__tests__` directory or behind a separate `tsconfig.test.json`, need either an override of your own or the tests included in the discovered config.

The type-aware rules assume a strict `tsconfig.json`. Without `strictNullChecks`, `typescript/no-unnecessary-condition` and `typescript/prefer-nullish-coalescing` report results that don't hold.

## Usage

`oxfmt.config.ts`

```ts
import { defineConfig } from "oxfmt";
import oxfmtConfig from "@timche/oxc-configs/oxfmt";

export default defineConfig(oxfmtConfig);
```

`oxlint.config.ts`

```ts
import { defineConfig } from "oxlint";
import oxlintConfig from "@timche/oxc-configs/oxlint";

export default defineConfig(oxlintConfig);
```
