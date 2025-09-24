module.exports = [
  {
    ignores: ["node_modules/**", "coverage/**"],
  },
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly",
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
      },
      ecmaVersion: "latest",
      sourceType: "script",
    },
    rules: {
      // Put your custom rules here, or extend recommended
    },
  },
];
