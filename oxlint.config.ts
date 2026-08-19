import { defineConfig } from "oxlint";

const oxlintConfig = defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import", "react"],
  categories: {
    correctness: "error",
    suspicious: "error",
    perf: "error",
  },
  rules: {
    // Turned on by the enabled categories, but they cost more than they catch.
    "no-underscore-dangle": "off",
    "no-await-in-loop": "off",
    "typescript/consistent-return": "off",
    "typescript/no-extraneous-class": "off",
    "unicorn/consistent-function-scoping": "off",
    "import/no-unassigned-import": "off",
    "react/react-in-jsx-scope": "off",

    // Escape hatches out of the type system.
    "typescript/no-explicit-any": "error",
    "typescript/no-non-null-assertion": "error",
    "typescript/no-unsafe-argument": "error",
    "typescript/no-unsafe-assignment": "error",
    "typescript/no-unsafe-call": "error",
    "typescript/no-unsafe-member-access": "error",
    "typescript/no-unsafe-return": "error",
    "typescript/no-unsafe-function-type": "error",
    "typescript/no-empty-object-type": "error",
    "typescript/no-invalid-void-type": "error",
    "typescript/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],

    // Async work and thrown values.
    "typescript/no-misused-promises": "error",
    "typescript/only-throw-error": "error",
    "typescript/prefer-promise-reject-errors": "error",
    "typescript/use-unknown-in-catch-callback-variable": "error",
    "typescript/require-await": "error",
    "typescript/return-await": "error",
    "no-promise-executor-return": "error",
    "unicorn/error-message": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/catch-error-name": "error",

    // Logic errors that still compile.
    "typescript/no-unnecessary-condition": "error",
    "typescript/switch-exhaustiveness-check": "error",
    "typescript/restrict-plus-operands": "error",
    "typescript/no-deprecated": "error",
    "typescript/prefer-nullish-coalescing": "error",
    "typescript/prefer-optional-chain": "error",
    eqeqeq: ["error", "always", { null: "ignore" }],
    "array-callback-return": "error",
    "no-case-declarations": "error",
    "no-fallthrough": "error",
    "no-loop-func": "error",
    "no-prototype-builtins": "error",
    "no-self-compare": "error",
    "no-constructor-return": "error",
    "no-return-assign": "error",
    "no-param-reassign": "error",
    "no-template-curly-in-string": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-object-constructor": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "guard-for-in": "error",
    radix: "error",
    "symbol-description": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "unicorn/no-immediate-mutation": "error",
    "unicorn/no-object-as-default-parameter": "error",
    "unicorn/no-negation-in-equality-check": "error",
    "unicorn/no-typeof-undefined": "error",
    "unicorn/consistent-date-clone": "error",
    "unicorn/consistent-empty-array-spread": "error",
    "unicorn/new-for-builtins": "error",
    "oxc/bad-bitwise-operator": "error",

    // Code that has no effect.
    "no-useless-assignment": "error",
    "no-unreachable-loop": "error",
    "no-else-return": "error",
    "unicorn/no-useless-promise-resolve-reject": "error",
    "unicorn/no-useless-switch-case": "error",

    // One spelling for constructs that have several.
    curly: ["error", "all"],
    "no-var": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "prefer-arrow-callback": "error",
    "prefer-object-spread": "error",
    "prefer-object-has-own": "error",
    "prefer-exponentiation-operator": "error",
    "prefer-regex-literals": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "object-shorthand": "error",
    "typescript/consistent-type-imports": "error",
    "typescript/no-import-type-side-effects": "error",
    "unicorn/consistent-existence-index-check": "error",
    "unicorn/no-unreadable-array-destructuring": "error",
    "unicorn/no-unreadable-iife": "error",
    "unicorn/prefer-node-protocol": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-math-min-max": "error",
    "unicorn/prefer-native-coercion-functions": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-regexp-test": "error",
    "unicorn/prefer-single-call": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-structured-clone": "error",
    "unicorn/require-array-join-separator": "error",
    "unicorn/require-number-to-fixed-digits-argument": "error",

    // The shape of the module graph.
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-mutable-exports": "error",
    "import/first": "error",

    // React rules that sit outside the enabled categories.
    "react/rules-of-hooks": "error",
    "react/react-compiler": "error",

    // A blanket disable comment switches off everything above.
    "unicorn/no-abusive-eslint-disable": "error",
  },
  overrides: [
    {
      // Test files often sit outside the tsconfig program, which types every
      // expression in them as `error` and makes the type-safety rules fire on
      // all of it. Assertions also work with deliberately partial fixtures.
      files: ["**/*.test.{js,jsx,ts,tsx}"],
      rules: {
        "typescript/no-explicit-any": "off",
        "typescript/no-non-null-assertion": "off",
        "typescript/no-unsafe-argument": "off",
        "typescript/no-unsafe-assignment": "off",
        "typescript/no-unsafe-call": "off",
        "typescript/no-unsafe-member-access": "off",
        "typescript/no-unsafe-return": "off",
        "typescript/no-unsafe-type-assertion": "off",
        "typescript/ban-ts-comment": "off",
      },
    },
  ],
  env: {
    builtin: true,
  },
  options: {
    typeAware: true,
    reportUnusedDisableDirectives: "error",
  },
});

export default oxlintConfig;
