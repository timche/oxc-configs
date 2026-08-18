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

Type-aware rules read type information from the `tsconfig.json` that Oxlint discovers for each file. Files that no `tsconfig.json` covers report their types as `error`, which makes the `typescript/no-unsafe-*` rules fire on every expression in them. If your tests live behind a separate config such as `tsconfig.test.json`, either include them in the discovered config or turn those rules off for test files in an override.

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
