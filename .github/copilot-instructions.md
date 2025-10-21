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
  // Import Vuetify's VBtn component (Base component)
  import { VBtn } from 'vuetify/components';
  // Import local styles
  import './UBtn.scss';

  defineOptions({
    name: 'UBtn',
    inheritAttrs: false,
  });

  // Define slots with proper typing
  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-btn v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-btn>
</template>

<style scoped lang="scss"></style>
```

---

## 4. Storybook Example — `UBtn.stories.ts`

```ts
import type { Meta, StoryObj } from '@storybook/vue3';
import UBtn from './UBtn.vue';

interface ComponentArgs {
  density?: 'default' | 'comfortable' | 'compact';
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  block?: boolean;
  rounded?: string | number | boolean;
  elevation?: number;
  ripple?: boolean;
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  icon?: string;
  loading?: boolean;
  spaced?: 'start' | 'end' | 'both';
  color?: string;
  disabled?: boolean;
  label?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Button',
  component: UBtn,
  parameters: {
    docs: {
      description: {
        component:
          'The UBtn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.',
      },
      import: `import { UBtn } from '@ultimate/core-ui/components'`,
    },
    Vuetify: {
      component: 'VBtn',
      content:
        "This component is built on top of Vuetify's VBtn component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/buttons/',
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The recommended placement of elements inside of <UBtn> is: Place text in the center. Place visual content around container text',
      Image: '/images/stories/ubtn.anatomy.png',
      data: [
        {
          element: '1. Container',
          description:
            'In addition to text, the Button container typically holds a v-icon component',
        },
        {
          element: '2. Icon (optional)',
          description: 'Leading media content intended to improve visual context',
        },
        {
          element: '3. Text',
          description: 'A content area for displaying text and other inline elements',
        },
      ],
    },
  },
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Density (default | comfortable | compact)',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'Size: x-small | small | default | large | x-large',
      table: { defaultValue: { summary: 'default' } },
    },
    block: {
      control: 'boolean',
      description: 'Full width',
      table: { defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'text',
      description: 'This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: { defaultValue: { summary: 'rounded' } },
    },
    elevation: {
      control: 'number',
      description: 'Elevation (box-shadow). Number from 0 to 24.',
      table: { defaultValue: { summary: '2' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Ripple effect',
      table: { defaultValue: { summary: 'true' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description: 'Visual variant (elevated | flat | tonal | outlined | text | plain)',
      table: { defaultValue: { summary: 'elevated' } },
    },
    icon: {
      control: 'text',
      description: 'Icon name (Material Design Icons)',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { defaultValue: { summary: 'false' } },
    },
    spaced: {
      control: { type: 'select' },
      options: ['start', 'end', 'both'],
      description: 'Adds space when using icon with label',
    },
    color: {
      control: 'color',
      description: 'Theme color or CSS color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text', description: 'Default slot text (used by the Default story)' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<UBtn v-bind="args">{{ args.label || "Button" }}</UBtn>',
});

Default.args = {
  color: 'primary',
  label: 'Primary',
} as ComponentArgs;
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
    "body": ["<UBtn>$1</UBtn>"],
    "description": "Insert a UBtn component"
  },
  "u-btn Component": {
    "prefix": "u-btn",
    "body": ["<u-btn>$1</u-btn>"],
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

---

## 8. TypeScript typing rules (important)

When Copilot generates TypeScript code for this repository, avoid using the `any` type. This project enforces `@typescript-eslint/no-explicit-any` and `strict`-like typing rules. Use the following guidance when producing TypeScript:

- Never emit `: any` or cast values to `any` (for example `(x as any)`).
- Prefer narrow, explicit types. When the exact type is unknown, use safe alternatives:
  - Use `unknown` when you truly don't know the type, then narrow it with type guards before use.
  - Use union types or indexed types when appropriate (for example `Record<string, unknown>`).
  - Define small, local interfaces or types for structural typing rather than falling back to `any`.

Examples:

- Bad (forbidden):

```ts
const c = comp as any;
if (c.name) {
  app.component((c as any).name, c as any);
}
```

- Good (preferred):

```ts
type InstallableComponent = Component & { install?: (app: App) => void; name?: string };
const c = comp as unknown as InstallableComponent;
if (!c) return;
if (typeof c.install === 'function') {
  c.install(app);
} else if (typeof c.name === 'string') {
  app.component(c.name, c as Component);
}
```

If narrowing requires runtime checks, generate explicit type guards rather than using `any` or suppressing lint rules. If you must use a temporary broader type, prefer `unknown` and document why with a short comment.

If Copilot cannot produce a well-typed result, produce a brief TODO comment and leave the specific typing to a human. Example:

```ts
// TODO: determine exact component export type here — using `unknown` until clarified
const comp = exports[name] as unknown;
// human: replace `unknown` with specific interface if needed
```

This rule is enforced by CI and local linting; follow it to avoid pre-commit failures.
