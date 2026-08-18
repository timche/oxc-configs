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
