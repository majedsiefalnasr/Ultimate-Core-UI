# 🧠 Copilot Instructions for @UltimateCoreUI

## 1. Purpose & Overview

These instructions guide GitHub Copilot to generate **Vue 3 components** for the `@UltimateCoreUI` library, built on top of **Vuetify**.  
Each component must behave as an **extended Vuetify component** (like `VBtn`), inheriting all props, emits, attrs, and slots.

Copilot should ensure:

- The component works as `<UComponent>` and `<u-component>`.
- Follows the structure and coding style shown in the canonical `UBtn` example below.
- Automatically generates Storybook files and snippet entries.

---

## 2. Component Generation Template

When generating a new component (e.g., `UInput`), Copilot must:

1. Create a Vue component that **extends a Vuetify base component** (e.g., `VInput`).
2. Inherit **all props, slots, emits, and attrs** using `v-bind="$attrs"` and slot forwarding.
3. Set `inheritAttrs: false`.
4. Define a component name like `UInput`.
5. Support both **PascalCase** and **kebab-case** usages.
6. Include **JSDoc** with examples.
7. Add **optional local props** or style sections if the user requests enhancement.

---

## 3. Canonical Example — `UBtn.vue`

This file is the reference pattern for all components.

```vue
<!-- snippet:UBtn -->
<!-- <UBtn>Click Me</UBtn> -->

<script setup lang="ts">
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

  defineOptions({
    name: 'UBtn',
    inheritAttrs: false,
  });
</script>

<template>
  <v-btn v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name as string" v-bind="slotData || {}" />
    </template>
  </v-btn>
</template>

<style scoped lang="scss">
  // keep local styles in UBtn.scss; uncomment if needed
  // @import './UBtn.scss';
</style>
```

---

## 4. Storybook Example — `UBtn.stories.ts`

```ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UBtn from './UBtn.vue';

const meta: Meta<typeof UBtn> = {
  title: 'Components/UBtn',
  component: UBtn,
  tags: ['autodocs'],
  args: {
    color: 'primary',
    children: 'Click Me',
  },
};

export default meta;
type Story = StoryObj<typeof UBtn>;

export const Default: Story = {
  args: { color: 'primary' },
  render: (args) => ({
    components: { UBtn },
    setup() {
      return { args };
    },
    template: '<UBtn v-bind="args">Click Me</UBtn>',
  }),
};

export const Icon: Story = {
  render: (args) => ({
    components: { UBtn },
    setup() {
      return { args };
    },
    template: '<UBtn icon="mdi-heart" />',
  }),
};
```

---

## 5. VS Code Snippet Generation

For each component, Copilot must generate snippets under:  
`src/snippets/<component>.code-snippets`

Each snippet must support **PascalCase** and **kebab-case** triggers.

Example — `UBtn.code-snippets`:

```json
{
  "UBtn Component": {
    "prefix": "UBtn",
    "body": ["<UBtn color="primary" @click="onClick">Click Me</UBtn>"],
    "description": "Insert a UBtn component"
  },
  "u-btn Component": {
    "prefix": "u-btn",
    "body": ["<u-btn color="primary" @click="onClick">Click Me</u-btn>"],
    "description": "Insert a u-btn component"
  }
}
```

---

## 6. Optional Enhancements

If user specifies **“add Optional Enhancement”**, Copilot may:

- Add new local props (e.g., `loading`, `variant`, `size`).
- Import and use component-specific SCSS.
- Add slots or computed helpers for extended functionality.

---

## 7. File Naming & Folder Rules

Each component folder follows this pattern:

```
src
├── components/UComponent/
│   ├── UComponent.vue
│   ├── UComponent.stories.ts
│   ├── index.ts
│   └── UComponent.scss (optional)
├── snippets/
│   ├── .vscode/
│   │   ├── UComponent.code-snippets
│   │   └── ...
│   └── README.md
└── ...
```

Example for `UBtn`:

```
src
├── components/UBtn/
│   ├── UBtn.vue
│   ├── UBtn.stories.ts
│   ├── index.ts
│   └── UBtn.scss (optional)
├── snippets/
│   ├── .vscode/
│   │   ├── UBtn.code-snippets
│   │   └── ...
│   └── README.md
└── ...
```

---

✅ **Copilot Rule Summary**

1. Follow the canonical `UBtn.vue` structure.
2. Generate `.stories.ts` beside the component.
3. Create `.code-snippets` entries for both `<UComponent>` and `<u-component>`.
4. Support both naming styles.
5. Add enhancements only when requested.
6. Always use Vuetify base components.
