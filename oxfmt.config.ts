import { defineConfig } from "oxfmt";

const oxfmtConfig = defineConfig({
  sortImports: {
    newlinesBetween: false,
  },
  sortPackageJson: {
    sortScripts: true,
  },
  sortTailwindcss: {
    functions: ["cn", "cva"],
  },
});

export default oxfmtConfig;
