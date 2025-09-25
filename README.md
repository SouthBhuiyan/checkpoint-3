# ✅ Checkpoint 3 – CI/CD Workflow Assignment

## 🔧 Features Implemented

- ✅ ESLint configured and run via GitHub Actions
- ✅ Prettier for consistent code formatting
- ✅ Jest for unit testing with code coverage
- ✅ GitHub Actions CI Pipeline:
  - ✅ Linting step
  - ✅ Prettier formatting check
  - ✅ Tests with Jest and coverage

## 🧪 Sample Test Case

```js
const { add } = require('./src/math');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
