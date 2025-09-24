import js from '@eslint/js'

export default [
  {
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...js.configs.recommended.languageOptions?.globals,
        test: true,
        expect: true,
        describe: true,
        beforeEach: true,
        afterEach: true
      },
    },
  }
]
