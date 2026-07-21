import { defineConfig } from "oxlint";

const oxlintConfig = defineConfig({
  plugins: ["typescript", "unicorn", "oxc"],
  categories: {
    correctness: "error",
  },
  rules: {
    curly: ["error", "all"],
    "typescript/no-non-null-assertion": "error",
  },
  env: {
    builtin: true,
  },
});

export default oxlintConfig;
