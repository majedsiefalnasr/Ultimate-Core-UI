# GitHub Copilot Instructions

### 🔄 Project Awareness & Context

- **Always read `BRIEF.md` and `README.md`** at the start of a new conversation to understand the project's architecture, goals, style, and constraints.
- **Maintain consistency** with the component structure, naming conventions, and design philosophy described in `BRIEF.md`.
- **Understand that this is a Vue 3-based UI component library** built on top of Vuetify. All code should align with that ecosystem.

---

### 🧱 Code Structure & Modularity

- **Never create a file longer than 500 lines of code.** If approaching that limit, refactor into smaller modules.
- **Each component lives in its own folder** (e.g., `UButton/`), containing its `.vue`, `.stories.ts`, `.test.ts`, and optional `index.ts` files.
- **Organize code into clearly separated modules**, grouped by feature or responsibility (e.g., `components/`, `composables/`, `utils/`, `styles/`).
- **Avoid circular imports** by keeping dependencies one-directional.
- **Always create a re-export entry point** in `src/index.ts` for tree-shakable imports.

---

### 🧪 Testing & Reliability

- **Follow the testing conventions** defined in `BRIEF.md`.
- **Each component must have at least one test file** that includes:
  - 1 test for expected behavior
  - 1 test for edge case
  - 1 test for failure case
- **Tests should live in a `/tests` folder** mirroring the `src` structure.
- Use **Vitest + Vue Testing Library** for component testing.

---

### 📎 Style & Conventions

- **Follow Vue 3 Composition API syntax** (`<script setup lang="ts">` preferred).
- **Use SCSS modules or scoped SCSS** for styling.
- Write **docstrings for every function and composable** using Google style.
- Follow **TypeScript best practices** — define prop types, emits, and return types.
- **Use PascalCase for components**, `camelCase` for composables, and `SCREAMING_SNAKE_CASE` for constants.

---

### 📚 Documentation & Explainability

- **Document each component in Storybook** with:
  - Default state
  - Props
  - Events
  - Slots
- **Update `README.md` and Storybook Docs** when new components or props are added.
- Comment **non-obvious logic** and add inline `# Reason:` comments for design decisions.
- Keep all code understandable by a mid-level Vue developer.

---

### 🧠 AI Behavior Rules

- **Never assume missing context. Ask questions if uncertain.**
- **Never hallucinate libraries or functions** – only use known packages (`vue`, `vuetify`, `vite`, etc.).
- **Confirm all file paths and module names** exist before referencing them.

---

### 🛠️ Code Quality & Maintenance

- Refactor for clarity without changing functionality.
- Avoid unnecessary complexity – prefer simple, declarative Vue patterns.
- Maintain **consistent naming conventions** across all components.
- Use **type hints** and avoid any-typed logic.
- Avoid commented-out code and redundant comments.
- **Never use `eval` or `exec`.**

---

### 🗂️ File Organization & Management

- **Follow the `src/` structure** defined in `BRIEF.md`.  
  Don’t create new directories unless they fit the library architecture.
- **Don’t delete files** without explicit reason — if deprecated, mark them as such and add a note.

---

### 📦 Dependencies & Packages

- Check if a dependency exists in `package.json` before suggesting new ones.
- Keep **Vuetify and Vue as peer dependencies** — don’t bundle them.
- If a new package is required, document it in `README.md` with a short purpose note.

---

### 📝 Commit Messages & Version Control

- Use clear, descriptive messages, e.g.,  
  `feat(button): add loading state prop`  
  `fix(card): adjust responsive padding`
- Follow semantic versioning guidelines for releases.

---

### ⚠️ Security & Privacy

- Never commit secrets or API keys.
- Add `.env` and related files to `.gitignore`.
- Review code for any potential vulnerabilities (especially file imports or DOM injection).

---

### ♿ Accessibility & Inclusively

- Ensure all components are **keyboard accessible**.
- Add **ARIA labels** when appropriate.
- Follow Vuetify’s accessibility best practices.
- Use inclusive, neutral language in comments and docs.

---

### 📝 Issue & PR Templates

- Use templates from `.github/ISSUE_TEMPLATE/` and `.github/pull_request_template/`.
- Always fill required fields and link to relevant components or issues.

---

### ⬆️ Dependency Updates

- Test all dependency updates before merging.
- Update `README.md` if setup steps or versions change.
- Check for security advisories.

---

### 📁 Handling Large Files

- Don’t commit files >100MB.
- Use Git LFS or external storage for assets.
- Add `.gitignore` patterns for large or temporary files.

---
