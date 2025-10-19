# 🤖 Copilot Instructions for Ultimate Core UI

## 🧭 Project Context

**Ultimate Core UI (`@ultimate/core-ui`)** is a **Vue 3 + TypeScript component library** built on top of **Vuetify** and **Bootstrap 5**.  
It provides a consistent design system and reusable UI components that extend Vuetify's base components (e.g., `UBtn` extends `VBtn`).  
Each component must **inherit Vuetify props, events, and slots**, while allowing additional customization through new props, slots, and SCSS layers.

### Goals

- Extend Vuetify components while preserving full compatibility with their props, slots, and events.
- Provide consistent design, accessibility, and responsiveness.
- Offer Storybook documentation for each component.
- Maintain strong typing, modular architecture, and tree-shakable builds.

---

## ⚙️ Component Architecture

Each component should follow these rules:

1. **Naming**
   - Component names are prefixed with `U` (e.g., `UBtn`, `UCard`, `UDialog`).
   - Folder and file names mirror the component name exactly.

2. **Structure Example**

   ```plaintext
   src/components/UBtn/
   ├── UBtn.vue
   ├── UBtn.scss
   ├── UBtn.stories.ts
   ├── UBtn.test.ts
   └── index.ts
   ```

3. **Extending Vuetify Components**  
   Use Vuetify’s base component (e.g., `VBtn`) as the foundation.

   ```ts
   <script setup lang="ts">
   import { VBtn } from 'vuetify/components'
   import { useAttrs } from 'vue'

   const props = defineProps({
     ...VBtn.props,
     variant: {
       type: String,
       default: 'primary',
     },
     loadingText: String,
   })

   const attrs = useAttrs()
   </script>

   <template>
     <VBtn v-bind="attrs" v-bind="props">
       <slot />
       <template v-if="props.loadingText" #loader>
         <span class="u-btn__loader">{{ props.loadingText }}</span>
       </template>
     </VBtn>
   </template>

   <style scoped lang="scss">
   @import './UBtn.scss';
   </style>
   ```

4. **Prop/Slot Inheritance**
   - Ensure all Vuetify props and slots still work.
   - Pass through all unknown props/attrs via `v-bind="attrs"`.

5. **Export Pattern**
   ```ts
   import UBtn from './UBtn.vue';
   export default UBtn;
   export * from './UBtn.vue';
   ```

---

## 💅 Styling Guidelines

- Base styles are built with **Bootstrap 5** utility classes and **custom SCSS**.
- Use BEM naming conventions (`.u-btn--variant`, `.u-card__header`).
- Each component has its own SCSS file.
- Theme variables are defined in `/src/styles/_variables.scss`.

---

## 📚 Storybook Conventions

- Each component must include a Storybook file (`ComponentName.stories.ts`).
- Stories use the **CSF3 format** with clear args and controls.

Example (`UBtn.stories.ts`):

```ts
import UBtn from './UBtn.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof UBtn> = {
  title: 'Components/UBtn',
  component: UBtn,
  args: {
    color: 'primary',
    text: 'Click me',
  },
  argTypes: {
    color: { control: 'select', options: ['primary', 'secondary', 'error'] },
  },
};
export default meta;
export const Default: StoryObj<typeof UBtn> = {};
```

---

## 🧪 Testing Standards

- Use **Vitest** with **Vue Test Utils**.
- Each component has a matching `ComponentName.test.ts`.
- Test coverage must include:
  - Rendering with default props.
  - Prop reactivity (especially inherited Vuetify props).
  - Events and slot rendering.

Example (`UBtn.test.ts`):

```ts
import { mount } from '@vue/test-utils';
import UBtn from './UBtn.vue';

describe('UBtn', () => {
  it('renders default slot', () => {
    const wrapper = mount(UBtn, { slots: { default: 'Hello' } });
    expect(wrapper.text()).toContain('Hello');
  });

  it('passes Vuetify props correctly', () => {
    const wrapper = mount(UBtn, { props: { color: 'secondary' } });
    expect(wrapper.props().color).toBe('secondary');
  });
});
```

---

## 🧠 Copilot Prompt Library

To make Copilot more effective, ready-to-use prompt templates are provided separately.

📄 **See:** [`docs/copilot-prompts.md`](../docs/copilot-prompts.md)

That file includes practical Copilot instructions to:

- Create new components extending Vuetify ones.
- Generate Storybook stories, tests, and SCSS files.
- Build utilities and composables.
- Produce documentation snippets automatically.

---

## 🧾 Linting & Formatting

- **ESLint + Prettier** are enforced.
- Use semicolons, single quotes, and trailing commas.
- Follow Vue 3 `<script setup>` conventions.

---

## 📦 Publishing Notes

- Each package should be tree-shakable and export named components.
- Use `vite build` for library builds.
- Include only `dist/` in published package.

---

## ✅ Summary

Copilot should always:

1. Use **TypeScript** and **<script setup>** syntax.
2. Extend **Vuetify** components while preserving compatibility.
3. Follow **BEM + SCSS modular structure**.
4. Create **Storybook** and **test** files for every new component.
5. Maintain **consistent naming** (`UComponentName`).
6. Enforce **linting and formatting** automatically.
