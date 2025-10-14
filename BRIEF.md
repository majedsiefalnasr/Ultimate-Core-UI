# 🧭 BRIEF.md — Ultimate Core UI Project Overview

## 📘 Project Summary

**Name:** Ultimate Core UI (`@ultimate/core-ui`)  
**Description:** Ultimate Core UI Library is a Vue 3-based component library designed to help build modern, responsive UIs efficiently.  
It leverages **Vite**, **TypeScript**, **Vuetify**, **Bootstrap**, and **Storybook** to streamline development, ensure scalability, and enable visual documentation.

---

## 🧱 Core Technologies

| Category           | Stack                         |
| ------------------ | ----------------------------- |
| Framework          | Vue 3                         |
| Compiler           | Vite                          |
| Language           | TypeScript                    |
| UI Base            | Vuetify                       |
| Styling            | Bootstrap 5 + Custom SCSS     |
| Documentation      | Storybook 9+                  |
| Testing            | Vitest / Vue Test Utils       |
| Linting            | ESLint + Prettier             |
| Package Management | npm / pnpm                    |
| Distribution       | Tree-shakable ES module build |

---

## 🧩 Project Goals

1. Build a reusable and consistent component system built on Vuetify.
2. Ensure components are tree-shakable and optimized for performance.
3. Provide interactive documentation via Storybook.
4. Maintain strong typing, accessibility, and responsiveness.
5. Enable external developers to install and use the library easily.

---

## 🗂️ Folder Structure

```Blain
ultimate-core-ui/
├── packages/
│   └── ultimate-core-ui/
│       ├── src/
│       │   ├── components/
│       │   │   └── UButton/
│       │   │       └── _u-button.scss
│       │   │       └── UButton.vue
│       │   │       └── UButton.stories.ts
│       │   │       └── UButton.test.ts
│       │   │       └── index.ts
│       │   ├── composables/
│       │   ├── styles/
│       │   └── index.ts
│       ├── tests/
│       ├── vite.config.ts
│       └── package.json
│
├── storybook/
│   ├── stories/
│   ├── main.ts
│   └── preview.ts
│
├── README.md
├── BRIEF.md
└── copilot-instructions.md
```

---

## ⚙️ Development Workflow

| Step                 | Command                       | Description                        |
| -------------------- | ----------------------------- | ---------------------------------- |
| Install Dependencies | `npm install`                 | Installs all required packages     |
| Run Storybook        | `npm run storybook`           | Starts the Storybook server        |
| Development Mode     | `npm run dev`                 | Hot-reload development environment |
| Run Tests            | `npm run test`                | Executes unit tests                |
| Build Library        | `npm run build`               | Builds for production              |
| Publish to npm       | `npm publish --access public` | Publishes the package              |

---

## 🧩 Component Architecture

Each component in Ultimate Core UI wraps or extends a Vuetify base component with consistent design tokens and props.  
Example structure for a single component:

```Blank
src/components/UButton/
├── UButton.vue
├── UButton.stories.ts
├── UButton.test.ts
└── index.ts
```

**Export rule:**  
Every component should be exported via `src/index.ts`:

```ts
export { default as UButton } from './components/UButton/UButton.vue';
```

---

## 🧠 Design Principles

1. **Simplicity:** Easy to use and extend.
2. **Consistency:** Unified design system built on Vuetify + Bootstrap tokens.
3. **Accessibility:** Follows WCAG and ARIA guidelines.
4. **Performance:** Tree-shakable builds via Vite.
5. **Documentation:** Every component must have a Storybook story and JSDoc/TypeDoc comments.

---

## 🧪 Testing Guidelines

- Each component should include:
  - ✅ A success case (expected behavior)
  - ⚠️ An edge case (unusual or null props)
  - ❌ A failure case (invalid usage)
- Test files should mirror component paths under `/tests/`.

---

## 🧰 Build & Distribution

- Use **Vite library mode** for building the library.
- Ensure **Vuetify and Bootstrap** are **peer dependencies**, not bundled.
- Output format: `es` and `umd`.
- Include `.d.ts` TypeScript declaration files.

---

## 🧭 Naming Conventions

| Type            | Example              |
| --------------- | -------------------- |
| Component       | `UButton.vue`        |
| SCSS file       | `_u-button.scss`     |
| Storybook Story | `UButton.stories.ts` |
| Test file       | `UButton.test.ts`    |
| Export Name     | `UButton`            |

---

## 🧩 Storybook Rules

- Each component must have a corresponding story.
- Stories must include:
  - **Default example**
  - **Variants (sizes, colors, states)**
  - **Docs tab** with prop tables and notes.

---

## ⚡ Deployment

Ultimate Core UI can be distributed via npm or used locally through linking:

```bash
npm link
npm link @ultimate/core-ui
```

---

## 🔐 Security & Accessibility

- No inline styles that break accessibility contrast.
- Ensure semantic markup in all components.
- No hardcoded secrets or tokens.

---

## ✅ Summary

Ultimate Core UI is a Vue 3 + Vuetify component library focused on:

- Simplicity, speed, and scalability.
- Modern tooling (Vite, Storybook, TypeScript).
- Extensibility and documentation-first workflow.
