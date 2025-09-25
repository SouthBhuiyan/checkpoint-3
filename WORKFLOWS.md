# 🧪 GitHub Actions Workflows – Documentation

This document explains each workflow used in this project and how it supports continuous integration, testing, and deployment.

---

## 1. CI Pipeline – `.github/workflows/ci.yml`

### ✅ Purpose:

Run linting, formatting, tests, and simulate a build process.

### 🔁 Trigger:

- On every push to `main` or `develop`
- On every pull request to `main`

### 🧩 Jobs:

- `lint`: Lints and formats code using ESLint and Prettier (via reusable action)
- `test`: Runs Jest tests, generates coverage report
- `build`: Simulates a build process and uploads a fake artifact

### 🔗 Job Dependencies:

- `test` depends on `lint`
- `build` depends on `test`

### 🔐 Secrets:

- None required

---

## 2. Deployment Workflow – `.github/workflows/deploy.yml`

### ✅ Purpose:

Deploys the project to GitHub Pages on every push to `main`.

### 🔁 Trigger:

- Push to the `main` branch

### 🌐 Outcome:

Publishes static content (like `index.html`) to GitHub Pages  
Live URL: `https://<your-username>.github.io/checkpoint-3`

### 🔐 Secrets:

- No secrets required (uses GitHub Pages built-in permissions)

---

## 3. Audit Workflow – `.github/workflows/audit.yml`

### ✅ Purpose:

Runs a daily automated security audit using `npm audit`.

### 🔁 Trigger:

- Scheduled: Every day at midnight UTC
- Can also be run manually using “Run workflow” button

### 🛡️ Behavior:

- Runs `npm audit` and creates a GitHub Issue if vulnerabilities are found

### 🔐 Secrets:

- None required

---

## 4. Reusable Composite Action – `.github/actions/reusable/ci-steps/action.yml`

### ✅ Purpose:

DRY out lint + Prettier steps to reuse across workflows

### 📦 What It Does:

- Runs ESLint on all JS/TS files
- Runs Prettier formatting check

### 💡 Used In:

- `lint` job inside `ci.yml`

---

## 🛠️ Troubleshooting

| Problem                       | Solution                                             |
| ----------------------------- | ---------------------------------------------------- |
| Workflow not triggering       | Check your branch name (must be `main` or `develop`) |
| Lint/format step failing      | Run `npx prettier --write .` or fix ESLint errors    |
| Coverage shows 0%             | Ensure Jest is collecting from real source files     |
| Deploy not working            | Check if GitHub Pages is enabled under repo Settings |
| Audit issue not being created | Confirm `npm audit` detects vulnerabilities          |

---

## 📌 Notes

- All workflows follow the GitHub Actions best practices.
- The CI pipeline is modular and easily extensible.
