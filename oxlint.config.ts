import { defineConfig } from "oxlint";

const oxlintConfig = defineConfig({
  plugins: ["typescript", "unicorn", "oxc", "import", "react", "jsx-a11y"],
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
    "import/no-named-as-default-member": "off",
    "react/react-in-jsx-scope": "off",
    // Spreading in a `map` is how an immutable update is written; the in-place
    // mutation it asks for is the thing such code is avoiding.
    "oxc/no-map-spread": "off",

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
    "typescript/strict-void-return": "error",
    "no-promise-executor-return": "error",
    "unicorn/error-message": "error",
    "unicorn/throw-new-error": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/catch-error-name": "error",

    // Logic errors that still compile.
    "typescript/no-unnecessary-condition": "error",
    // A `default` case answers for the members left unlisted, which is the only
    // sane way to switch on a wide union from a library.
    "typescript/switch-exhaustiveness-check": [
      "error",
      { considerDefaultExhaustiveForUnions: true },
    ],
    "typescript/restrict-plus-operands": "error",
    "typescript/no-deprecated": "error",
    "typescript/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
    "typescript/no-mixed-enums": "error",
    "typescript/related-getter-setter-pairs": "error",
    "typescript/no-non-null-asserted-nullish-coalescing": "error",
    // A string or boolean `||` is a deliberate falsy fallback, not a nullish
    // one: `"" ?? next` and `false ?? next` keep the falsy value, so rewriting
    // one changes what it answers. Numbers and objects still report, where
    // `count || 10` discards a stored `0`.
    "typescript/prefer-nullish-coalescing": [
      "error",
      { ignorePrimitives: { string: true, boolean: true } },
    ],
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
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-new-buffer": "error",
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
    "react/button-has-type": "error",
    "react/jsx-no-target-blank": "error",
    "react/checked-requires-onchange-or-readonly": "error",

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
        // The same missing type information makes these two report the
        // opposite way round: an assertion or a check the program needs looks
        // redundant, and their fixes delete code the compiler then rejects.
        "typescript/no-unnecessary-type-assertion": "off",
        "typescript/no-unnecessary-condition": "off",
        // Test helpers commonly return a union of a sync and an async
        // function, and React's `act` is typed void but awaited by design.
        "typescript/await-thenable": "off",
        "typescript/no-confusing-void-expression": "off",
        // Test doubles are declared `async` to satisfy a promise-returning
        // contract, and dropping the keyword would turn a rejection into a
        // synchronous throw.
        "typescript/require-await": "off",
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
