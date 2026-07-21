import { defineConfig } from "oxlint";

const oxlintConfig = defineConfig({
  rules: {
    curly: ["error", "all"],
    "typescript/no-non-null-assertion": "error",
  },
});

export default oxlintConfig;
