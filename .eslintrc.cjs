module.exports = {
  env: {
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  globals: {
    require: "readonly",
    module: "readonly",
    test: "readonly",
    expect: "readonly",
    describe: "readonly",
  },
  extends: ["eslint:recommended"],
};
