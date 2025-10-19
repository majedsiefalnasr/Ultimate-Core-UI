# 🧠 Copilot Prompt Templates — Ultimate Core UI

This file provides **ready-to-use Copilot prompts** to help you generate Vue 3 components, stories, and tests following Ultimate Core UI’s architecture and standards.

Use these prompts in **VS Code comments**, **Copilot Chat**, or any IDE-integrated Copilot environment.

---

## 🧩 1. Create a new component extending a Vuetify component

```markdown
// Copilot: Create a new component called UCard extending VCard from Vuetify.
// It should inherit all Vuetify props, slots, and events.
// Add a new prop `bordered: boolean` (default false) that toggles a border style.
// Include a <style lang="scss"> section using BEM class names.
// Output: UCard.vue + UCard.scss + index.ts
```

---

## 🧱 2. Create Storybook stories for that component

```markdown
// Copilot: Generate Storybook stories for UCard using CSF3 format.
// Include stories: Default, WithBorder, and CustomContent.
// Each story should demonstrate Vuetify prop passthrough.
// Output: UCard.stories.ts
```

---

## 🧪 3. Create Vitest tests for that component

```markdown
// Copilot: Write unit tests for UCard using Vitest + Vue Test Utils.
// Test slot rendering, bordered prop toggle, and inherited Vuetify props.
// Output: UCard.test.ts
```

---

## 💅 4. Generate SCSS file

```markdown
// Copilot: Create a SCSS file for UCard with BEM naming.
// Add styles for .u-card and .u-card--bordered using Bootstrap variables.
// Output: UCard.scss
```

---

## ⚙️ 5. Create composables or utilities

```markdown
// Copilot: Create a Vue composable called useButtonLoading that manages button loading state.
// It should provide `loading`, `startLoading`, and `stopLoading`.
// Use TypeScript and Vue’s reactivity API.
```

---

## 🧩 6. Generate index export file

```markdown
// Copilot: Create an index.ts file that exports all components from the current folder.
// Each export should use named and default exports for tree-shakability.
```

---

## 🧠 7. Create a new component from scratch (not extending Vuetify)

```markdown
// Copilot: Create a new component called UBadge that displays a small label.
// It should accept props: color (string), text (string), and rounded (boolean).
// Use Bootstrap classes for styling and <script setup> syntax.
// Include UBadge.vue + UBadge.scss + Storybook + Vitest test.
```

---

## 🧾 8. Generate documentation snippets

```markdown
// Copilot: Create markdown documentation for UCard component.
// Include usage examples, available props (including inherited Vuetify props), and Storybook link.
```

---

### ✅ Best Practices

- Always use `<script setup lang="ts">`.
- Components must start with `U` prefix.
- Pass all unknown attributes using `v-bind="attrs"`.
- Follow BEM naming for SCSS.
- Create a Storybook and test file for every component.
- Keep prompts concise and action-oriented.
