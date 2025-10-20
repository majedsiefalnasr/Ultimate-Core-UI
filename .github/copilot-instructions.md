# 🧠 Copilot Instructions (v2.1)

**Project:** Ultimate Core UI — Vuetify-based UI Library  
**Purpose:** Developer-oriented Copilot configuration guide for building, maintaining, and extending the UI component system.

---

## ⚙️ 1. Overview

This guide defines how GitHub Copilot and developers should generate, extend, and document Ultimate Core UI components.  
Ultimate Core UI builds upon **Vuetify**, extending its components (`VBtn`, `VCard`, etc.) into your library’s namespace (`UBtn`, `UCard`, …).

**Goals:**

- Ensure component consistency across the design system.
- Keep compatibility with Vuetify’s props, emits, and slots.
- Maintain top-level code clarity through JSDoc and snippet metadata.
- Prepare code for automated snippet generation and developer onboarding.

---

## 🧱 2. Architecture Rules

### 🔸 Component Inheritance

- Every Ultimate Core UI component should **extend its Vuetify equivalent**.
- Props, emits, and slots from Vuetify must pass through transparently.
- Example: `UBtn` → inherits all from `VBtn`.

### 🔸 Local Props Policy

- Local props are **optional** and **must not** be generated unless explicitly requested.
- Copilot should **not create or duplicate** Vuetify props.
- When a new prop is requested, it must be well documented with JSDoc.

### 🔸 Component Naming

- Prefix all extended components with `U` (for Ultimate).  
  Example: `UBtn`, `UCard`, `UDialog`, `UInput`.
- Maintain PascalCase naming for Vue components.

---

## 💬 3. Documentation Standards

### 🧾 JSDoc Enforcement

Every component must include:

- A descriptive JSDoc block at the top.
- Inline documentation for props, emits, and slots.

#### Example JSDoc

```js
/**
 * Extended UBtn component built on Vuetify's VBtn.
 * Inherits all VBtn props, slots, and emits.
 *
 * @component
 * @extends VBtn
 * @example
 * <UBtn color="primary" @click="onClick">Click Me</UBtn>
 */
```

---

## ⚡ 4. Snippet Metadata in Components

Each component file must begin with a **snippet metadata header** for IDE recognition.

Example:

```js
// snippet:UBtn
// <UBtn color="primary" @click="onClick">Click Me</UBtn>
```

This allows snippet generators and IDEs to auto-register snippets dynamically.

---

## 🧩 5. Snippet Convention Guide

| Type            | Convention                                   | Example                              |
| --------------- | -------------------------------------------- | ------------------------------------ |
| **Trigger**     | lowercase, same as component name            | `ubtn`                               |
| **Prefix**      | Always `u` for Ultimate Core UI              | `UBtn`, `UCard`, `UDialog`           |
| **Body**        | Minimal functional example                   | `<UBtn color="primary">Label</UBtn>` |
| **Description** | “Ultimate Core UI – [ComponentName] snippet” | “Ultimate Core UI – Button snippet”  |

---

## 💡 6. VS Code Snippet JSON Template

Place the following JSON file in `.vscode/snippets/ultimate-core-ui.code-snippets`:

```json
{
  "UBtn": {
    "prefix": "ubtn",
    "body": ["<UBtn color=\"${1:primary}\">${2:Label}</UBtn>"],
    "description": "Ultimate Core UI – Button snippet"
  },
  "UCard": {
    "prefix": "ucard",
    "body": ["<UCard title=\"${1:Card Title}\">", "  ${2:Card content}", "</UCard>"],
    "description": "Ultimate Core UI – Card snippet"
  },
  "UDialog": {
    "prefix": "udialog",
    "body": ["<UDialog v-model=\"${1:isOpen}\">", "  ${2:Dialog content}", "</UDialog>"],
    "description": "Ultimate Core UI – Dialog snippet"
  }
}
```

This ensures developers can type `ubtn` + `Tab` in VS Code and instantly generate a working component usage snippet.

---

## 🤖 7. Copilot Behavior Rules

Copilot must:

1. **Inherit Vuetify logic** (props, emits, slots) automatically.
2. **Not create local props** unless explicitly requested.
3. **Include JSDoc** for every component, prop, and slot.
4. **Insert snippet headers** at the top of each file.
5. **Provide examples** within `@example` tags for documentation clarity.
6. Prefer **composition API** syntax and script setup for cleaner code.
7. Follow **Vuetify + Ultimate Core UI** naming conventions.

---

## 🧩 8. Example: `UBtn.vue`

```vue
<!-- snippet:UBtn -->
<!-- <UBtn color="primary" @click="onClick">Click Me</UBtn> -->

<script setup>
  /**
   * Extended UBtn component built on Vuetify's VBtn.
   * Inherits all VBtn props, slots, and emits.
   *
   * @component
   * @extends VBtn
   * @example
   * <UBtn color="primary" @click="onClick">Click Me</UBtn>
   */

  import { VBtn } from 'vuetify/components';

  defineProps(VBtn.props);
  defineEmits(VBtn.emits);
</script>

<template>
  <VBtn v-bind="$props" v-on="$attrs">
    <slot />
  </VBtn>
</template>
```

---

## 📦 9. Best Practices Summary

✅ Always inherit from Vuetify components.  
✅ Don’t duplicate props or emits.  
✅ Add local props only on explicit request.  
✅ Use JSDoc for all code.  
✅ Include snippet headers for automation.  
✅ Follow consistent naming and folder structure.  
✅ Keep examples simple, minimal, and working.

---

## 🏁 10. Quick Reference

**Component folder structure:**

```
src/
└── components/
    ├── UBtn/
    │   ├── UBtn.vue
    │   └── index.ts
    ├── UCard/
    │   ├── UCard.vue
    │   └── index.ts
    └── UDialog/
        ├── UDialog.vue
        └── index.ts
```

**File header snippet pattern:**

```js
// snippet:<ComponentName>
// <ComponentName ...>...</ComponentName>
```

**JSDoc must always include:**

- @component
- @extends (Vuetify component)
- @example
- Optional: @prop, @slot, @emit (if local additions exist)

---

🧩 **End of Copilot Instructions v2.1**
