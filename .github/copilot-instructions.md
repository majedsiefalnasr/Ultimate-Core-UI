# 🧠 Copilot Instructions for @UltimateCoreUI

> **Version**: 2.1  
> **Last Updated**: November 2025  
> **Purpose**: Comprehensive guidelines for generating Vue 3 components and Storybook stories

---

## 📋 Table of Contents

1. [Overview & Philosophy](#1-overview--philosophy)
2. [Vue Component Structure](#2-vue-component-structure)
3. [Storybook Stories](#3-storybook-stories)
4. [VS Code Snippets](#4-vs-code-snippets)
5. [File Organization](#5-file-organization)
6. [TypeScript Guidelines](#6-typescript-guidelines)
7. [Quick Reference](#7-quick-reference)
8. [Additional Guidelines](#8-additional-guidelines)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Overview & Philosophy

### Purpose

The `@UltimateCoreUI` library extends **Vuetify** components with a unified design system and enhanced functionality. Each U-component is a **wrapper** that:

- ✅ Inherits **all** Vuetify props, slots, emits, and attrs
- ✅ Supports both `<UComponent>` (PascalCase) and `<u-component>` (kebab-case)
- ✅ Maintains full Vuetify API compatibility
- ✅ Allows optional enhancements when needed

### Core Principles

1. **Transparency**: Components pass through all Vuetify functionality
2. **Consistency**: Follow the canonical `UBtn` pattern for all components
3. **Documentation**: Every component includes JSDoc, stories, and snippets
4. **Type Safety**: Strict TypeScript without `any` types

---

---

## 2. Vue Component Structure

### 2.1 Component Generation Checklist

When generating a new component (e.g., `UInput`), ensure:

- [ ] Extends the corresponding Vuetify base component (e.g., `VInput`)
- [ ] Uses `inheritAttrs: false`
- [ ] Forwards all props via `v-bind="$attrs"`
- [ ] Forwards all slots dynamically
- [ ] Includes proper JSDoc documentation
- [ ] Supports both PascalCase and kebab-case usage
- [ ] Has optional SCSS file (if styling needed)

### 2.2 File Structure

```vue
<!-- snippet:UComponentName -->
<!-- <UComponentName>Example</UComponentName> -->

<script setup lang="ts">
  /**
   * [Component Description]
   *
   * @component UComponentName
   * @extends VComponentName
   * @example
   * <u-component-name prop="value">Content</u-component-name>
   */
  import { VComponentName } from 'vuetify/components';
  import './UComponentName.scss'; // Optional

  defineOptions({
    name: 'UComponentName',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-component-name v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-component-name>
</template>

<style scoped lang="scss">
  // Component-specific styles (optional)
</style>
```

### 2.3 Key Requirements

#### Script Section

1. **Imports**
   - Import Vuetify base component from `'vuetify/components'`
   - Import local SCSS only if needed
2. **JSDoc Documentation**
   - Brief description of component purpose
   - `@component` tag with component name
   - `@extends` tag referencing Vuetify base
   - `@example` tag with usage code

3. **Component Options**
   - Always set `name: 'UComponentName'`
   - Always set `inheritAttrs: false`

4. **Slots Definition**
   - Use dynamic slot typing: `{ [key: string]: (props: Record<string, unknown>) => unknown }`

#### Template Section

- Wrap Vuetify component with `v-bind="$attrs"`
- Forward all slots using `v-for` loop on `$slots`
- Use dynamic slot binding with `#[name]` syntax

#### Style Section

- Use `<style scoped lang="scss"></style>`
- Keep empty unless specific enhancements requested
- Never add styles without user request

### 2.4 Complete Example: UBtn

```vue
<!-- snippet:UBtn -->
<!-- <UBtn>Click Me</UBtn> -->

<script setup lang="ts">
  /**
   * Enhanced Vuetify button component with additional styling capabilities.
   *
   * @component UBtn
   * @extends VBtn
   * @example
   * <u-btn color="primary" @click="handleClick">Click Me</u-btn>
   */
  import { VBtn } from 'vuetify/components';
  import './UBtn.scss';

  defineOptions({
    name: 'UBtn',
    inheritAttrs: false,
  });

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

---

## 3. Storybook Stories

### 3.1 Story File Structure

Each component must have a corresponding `.stories.ts` file with:

- [ ] Proper TypeScript imports
- [ ] ComponentArgs interface
- [ ] Meta configuration
- [ ] ArgTypes definitions
- [ ] Multiple story examples
- [ ] Documentation parameters

### 3.2 Required Imports

```ts
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, computed } from 'vue'; // Import as needed
import { UComponentName } from '../index';
```

### 3.3 ComponentArgs Interface

Define all relevant props with proper TypeScript types:

```ts
interface ComponentArgs {
  // Required props
  label?: string;
  modelValue?: string | number | boolean;

  // Optional props
  color?: string;
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  disabled?: boolean;
  loading?: boolean;

  // Story-specific props (for slot content, etc.)
  content?: string;
}
```

### 3.4 Meta Configuration

```ts
const meta: Meta<ComponentArgs> = {
  title: 'Components/Category/ComponentName',
  component: UComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Brief description of what the component does.',
      },
      import: `import { UComponentName } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          // Build clean code example from args
          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';
          return `<u-component-name${attrsString}></u-component-name>`;
        },
      },
    },
    // Add these ONLY if specifically requested:
    Vuetify: {
      component: 'VComponentName',
      content: 'Brief note about the base Vuetify component.',
      link: 'https://vuetifyjs.com/en/components/component-name/',
    },
    Primary: {
      description: 'Usage description or key features.',
    },
    api: {
      data: [
        {
          element: { title: 'v-component', link: 'https://...' },
          description: 'Primary component',
        },
      ],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Sets the component label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    // ... more argTypes
  },
};

export default meta;
```

### 3.5 Story Pattern (CRITICAL)

**Always use `StoryFn` pattern**, never `StoryObj`:

```ts
export const StoryName: StoryFn<ComponentArgs> = (args) => ({
  components: { UComponentName, UContainer, URow, UCol }, // Include needed components
  setup() {
    const state = ref('value');
    return { args, state };
  },
  template: `
    <u-component-name v-bind="args">
      Content
    </u-component-name>
  `,
});

// Separate args definition
StoryName.args = {
  label: 'Example',
  color: 'primary',
};

// Separate parameters definition
StoryName.parameters = {
  docs: {
    description: {
      story: 'Description of what this story demonstrates.',
    },
    source: {
      code: `<template>
  <u-component-name label="Example" color="primary">
    Content
  </u-component-name>
</template>`,
    },
  },
};
```

### 3.6 Using U-Components in Stories (CRITICAL)

**NEVER use V-components in stories**. Always use U-components for layout and helpers.

#### ❌ Wrong:

```ts
template: `
  <v-container>
    <v-row>
      <v-col>...</v-col>
    </v-row>
  </v-container>
`;
```

#### ✅ Correct:

```ts
// 1. Import U-components
import { UContainer, URow, UCol } from '../UGrid';

// 2. Add to components object
export const Example: StoryFn<ComponentArgs> = () => ({
  components: { UComponentName, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <u-component-name></u-component-name>
        </u-col>
      </u-row>
    </u-container>
  `,
});

// 3. Use U-components in docs too
Example.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-component-name></u-component-name>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};
```

### 3.7 Common U-Components for Stories

| Category       | Components                                         |
| -------------- | -------------------------------------------------- |
| **Layout**     | `UContainer`, `URow`, `UCol`, `USpacer`            |
| **Cards**      | `UCard`, `UCardTitle`, `UCardText`, `UCardActions` |
| **Buttons**    | `UBtn`, `UBtnGroup`, `UBtnToggle`, `UIconBtn`      |
| **Typography** | `UIcon`, `ULabel`, `UDivider`                      |
| **Forms**      | `UTextField`, `USelect`, `UCheckbox`, `URadio`     |

### 3.8 Story Examples

#### Basic Story with Args

```ts
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<u-btn v-bind="args">Click Me</u-btn>',
});

Default.args = {
  color: 'primary',
  variant: 'elevated',
};
```

#### Story with Reactive State

```ts
export const WithCounter: StoryFn<ComponentArgs> = () => ({
  components: { UBtn },
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    return { count, increment };
  },
  template: `
    <u-btn @click="increment">
      Clicked {{ count }} times
    </u-btn>
  `,
});

WithCounter.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-btn @click="increment">
    Clicked {{ count }} times
  </u-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const increment = () => count.value++;
</script>`,
    },
  },
};
```

#### Story with Layout

```ts
export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6" md="4">
          <u-btn variant="elevated">Elevated</u-btn>
        </u-col>
        <u-col cols="12" sm="6" md="4">
          <u-btn variant="flat">Flat</u-btn>
        </u-col>
        <u-col cols="12" sm="6" md="4">
          <u-btn variant="outlined">Outlined</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
```

---

---

## 4. VS Code Snippets

### 4.1 Snippet Requirements

For each component, generate a snippet file:  
`src/snippets/<component-name>.code-snippets`

Each snippet must support **both** PascalCase and kebab-case triggers.

### 4.2 Snippet Template

```json
{
  "UComponentName Component": {
    "prefix": "UComponentName",
    "body": ["<UComponentName $1>$2</UComponentName>"],
    "description": "Insert a UComponentName component"
  },
  "u-component-name Component": {
    "prefix": "u-component-name",
    "body": ["<u-component-name $1>$2</u-component-name>"],
    "description": "Insert a u-component-name component"
  }
}
```

### 4.3 Advanced Snippet Example

For components with common props:

```json
{
  "UBtn with props": {
    "prefix": "UBtnFull",
    "body": [
      "<UBtn",
      "  color=\"${1:primary}\"",
      "  variant=\"${2:elevated}\"",
      "  @click=\"${3:handleClick}\"",
      ">",
      "  ${4:Button Text}",
      "</UBtn>"
    ],
    "description": "Insert a UBtn with common props"
  }
}
```

---

## 5. File Organization

### 5.1 Component Folder Structure

```
src/components/UComponentName/
├── UComponentName.vue       # Component file
├── UComponentName.stories.ts # Storybook stories
├── UComponentName.scss       # Optional styles
└── index.ts                  # Export file
```

### 5.2 Index File Pattern

```ts
export { default as UComponentName } from './UComponentName.vue';
```

### 5.3 Complete Project Structure

```
ultimate-core-ui/
├── src/
│   ├── components/
│   │   ├── UBtn/
│   │   │   ├── UBtn.vue
│   │   │   ├── UBtn.stories.ts
│   │   │   ├── UBtn.scss
│   │   │   └── index.ts
│   │   ├── UTextField/
│   │   │   ├── UTextField.vue
│   │   │   ├── UTextField.stories.ts
│   │   │   └── index.ts
│   │   └── index.ts           # Export all components
│   ├── snippets/
│   │   ├── UBtn.code-snippets
│   │   ├── UTextField.code-snippets
│   │   └── README.md
│   ├── styles/
│   │   └── _mixins.scss
│   └── index.ts               # Main library entry
├── .github/
│   └── copilot-instructions.md
└── package.json
```

---

## 6. TypeScript Guidelines

### 6.1 Core Principles

**CRITICAL**: This project enforces strict TypeScript rules:

- ❌ **NEVER use `any`**
- ✅ Use `unknown` when type is unclear
- ✅ Use union types for multiple possible types
- ✅ Use `Record<string, unknown>` for object types
- ✅ Create specific interfaces/types instead of `any`

### 6.2 Type Safety Rules

#### ❌ Bad (Forbidden):

```ts
const component = comp as any;
const handler = (data: any) => {};
const result: any = getValue();
```

#### ✅ Good (Required):

```ts
type InstallableComponent = Component & {
  install?: (app: App) => void;
  name?: string;
};

const component = comp as unknown as InstallableComponent;

const handler = (data: Record<string, unknown>) => {
  // Type guard to narrow
  if ('value' in data && typeof data.value === 'string') {
    console.log(data.value);
  }
};

const result: string | number | undefined = getValue();
```

### 6.3 Common Patterns

#### Type Guards

```ts
function isValidComponent(comp: unknown): comp is Component {
  return typeof comp === 'object' && comp !== null && 'render' in comp;
}

if (isValidComponent(component)) {
  // TypeScript knows component is Component here
  app.component('MyComp', component);
}
```

#### Generic Constraints

```ts
function processValue<T extends string | number>(value: T): T {
  return value;
}
```

#### Unknown with Narrowing

```ts
function handleData(data: unknown): void {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  } else if (typeof data === 'object' && data !== null) {
    console.log(Object.keys(data));
  }
}
```

### 6.4 Slot Types

For Vue component slots, use:

```ts
defineSlots<{
  default?: (props: { item: string }) => unknown;
  header?: (props: { title: string }) => unknown;
  [key: string]: (props: Record<string, unknown>) => unknown;
}>();
```

### 6.5 Event Handler Types

```ts
interface ComponentEmits {
  (e: 'update:modelValue', value: string): void;
  (e: 'click', event: MouseEvent): void;
  (e: 'change', payload: { value: string; index: number }): void;
}

const emit = defineEmits<ComponentEmits>();
```

---

## 7. Quick Reference

### 7.1 Component Checklist

- [ ] Component extends Vuetify base with `v-bind="$attrs"`
- [ ] `inheritAttrs: false` is set
- [ ] All slots forwarded dynamically
- [ ] JSDoc with `@component`, `@extends`, `@example`
- [ ] Both PascalCase and kebab-case work
- [ ] Optional SCSS file imported if needed
- [ ] Story file created with multiple examples
- [ ] VS Code snippets created (both naming styles)
- [ ] No `any` types in TypeScript code
- [ ] All icons use Iconify Hugeicons format (`hugeicons:icon-name-##`)

### 7.2 Story Checklist

- [ ] Import `StoryFn` from `@storybook/vue3`
- [ ] Define `ComponentArgs` interface
- [ ] Create meta configuration with proper title
- [ ] Define argTypes with controls and descriptions
- [ ] Use U-components (not V-components) in templates
- [ ] Import needed U-components for layout
- [ ] Separate `.args` and `.parameters` definitions
- [ ] Include documentation source code
- [ ] Multiple story examples (Default, Variants, Interactive)
- [ ] All icons use Iconify Hugeicons format (`hugeicons:icon-name-##`)

### 7.3 Common U-Components Import

```ts
// Layout
import { UContainer, URow, UCol, USpacer } from '../UGrid';

// Cards
import { UCard, UCardTitle, UCardText, UCardActions } from '../UCard';

// Buttons
import { UBtn, UBtnGroup, UBtnToggle, UIconBtn } from '../UBtn';

// Form Controls
import { UTextField, USelect, UCheckbox, URadio } from '../UTextField';
```

### 7.4 Copilot Rules Summary

1. ✅ Follow the canonical `UBtn` structure for all components
2. ✅ Always use Vuetify base components in Vue files
3. ✅ Always use U-components in story templates and docs
4. ✅ Use `StoryFn<ComponentArgs>` pattern (never `StoryObj`)
5. ✅ Support both `<UComponent>` and `<u-component>` naming
6. ✅ Generate snippets for both naming styles
7. ✅ No `any` types - use `unknown` with type guards
8. ✅ Separate story function, `.args`, and `.parameters`
9. ✅ Import U-components for story layouts
10. ✅ Include comprehensive JSDoc documentation
11. ✅ **ALWAYS use Iconify Hugeicons (`hugeicons:icon-name-##`) - NEVER use MDI or other icon libraries**

### 7.5 File Generation Order

When creating a new component:

1. **Component File** → `UComponentName.vue`
2. **Index File** → `index.ts` (export statement)
3. **Story File** → `UComponentName.stories.ts`
4. **Snippet File** → `UComponentName.code-snippets`
5. **Style File** → `UComponentName.scss` (if needed)

---

## 8. Additional Guidelines

### 8.1 Optional Enhancements

If user requests **"add Optional Enhancement"**, you may:

- ✅ Add new local props beyond Vuetify base
- ✅ Implement custom computed properties
- ✅ Add component-specific methods
- ✅ Create custom SCSS styles
- ✅ Add extra slots for customization

**Example**:

```vue
<script setup lang="ts">
  import { VBtn } from 'vuetify/components';
  import { computed } from 'vue';

  interface Props {
    loading?: boolean; // Custom prop
    loadingText?: string; // Custom prop
  }

  const props = defineProps<Props>();

  const buttonText = computed(() => {
    return props.loading ? props.loadingText : undefined;
  });
</script>
```

### 8.2 Naming Conventions

- **Components**: PascalCase `UButton`, `UTextField`
- **Files**: PascalCase `UButton.vue`, `UButton.stories.ts`
- **Snippets**: PascalCase files `UButton.code-snippets`
- **Props**: camelCase `modelValue`, `hideDetails`
- **Events**: kebab-case in template, camelCase in emit

### 8.3 Icon Guidelines (CRITICAL)

**ALWAYS use Iconify Hugeicons for all icons** - Never use Material Design Icons (MDI) or any other icon library.

#### Icon Usage Rules

1. **Format**: All icons MUST use the Iconify Hugeicons format: `hugeicons:icon-name-##`
2. **Finding Icons**: Search the Iconify Hugeicons library at [Iconify - Hugeicons](https://icon-sets.iconify.design/hugeicons/)
3. **Naming Pattern**: Follow the pattern `hugeicons:icon-name-##` where `##` is typically `01`, `02`, etc.

#### Common Icon Mappings

| Purpose         | Icon                           | Usage                 |
| --------------- | ------------------------------ | --------------------- |
| **Navigation**  | `hugeicons:arrow-left-01`      | Previous/back buttons |
|                 | `hugeicons:arrow-right-01`     | Next/forward buttons  |
|                 | `hugeicons:arrow-up-01`        | Scroll up/expand      |
|                 | `hugeicons:arrow-down-01`      | Scroll down/collapse  |
| **Actions**     | `hugeicons:search-01`          | Search fields         |
|                 | `hugeicons:add-01`             | Add/create buttons    |
|                 | `hugeicons:delete-02`          | Delete actions        |
|                 | `hugeicons:edit-02`            | Edit actions          |
|                 | `hugeicons:save-01`            | Save actions          |
|                 | `hugeicons:cancel-01`          | Cancel/close actions  |
| **UI Elements** | `hugeicons:menu-01`            | Menu/hamburger        |
|                 | `hugeicons:home-01`            | Home navigation       |
|                 | `hugeicons:settings-01`        | Settings/config       |
|                 | `hugeicons:notification-01`    | Notifications/alerts  |
|                 | `hugeicons:user-01`            | User/profile          |
|                 | `hugeicons:calendar-01`        | Date pickers          |
|                 | `hugeicons:clock-01`           | Time/duration         |
| **Status**      | `hugeicons:tick-01`            | Success/complete      |
|                 | `hugeicons:alert-02`           | Warning/caution       |
|                 | `hugeicons:information-circle` | Info/help             |
|                 | `hugeicons:cancel-circle`      | Error/failure         |

#### Icon Replacement Process

When migrating existing icons or creating new components:

1. **Search for MDI icons**: Look for any `mdi-*` patterns
2. **Find Hugeicons equivalent**: Search Iconify Hugeicons library
3. **Replace with proper format**: Use `hugeicons:icon-name-##` format
4. **Update documentation**: Ensure code examples use Hugeicons

**Example Migration**:

```ts
// ❌ Wrong (MDI)
icon = 'mdi-arrow-left';
icon = 'mdi-magnify';
icon = 'mdi-account';

// ✅ Correct (Hugeicons)
icon = 'hugeicons:arrow-left-01';
icon = 'hugeicons:search-01';
icon = 'hugeicons:user-01';
```

#### In Stories

Always use Hugeicons in:

- Component templates
- Story examples
- Documentation code blocks
- Data arrays with icon properties

```ts
// Example in story data
const items = [
  { name: 'Home', icon: 'hugeicons:home-01' },
  { name: 'Search', icon: 'hugeicons:search-01' },
  { name: 'Settings', icon: 'hugeicons:settings-01' },
];
```

### 8.4 Documentation Best Practices

#### Component Description

- Start with what the component does
- Mention key features
- Reference Vuetify base component

```ts
/**
 * Enhanced button component with loading states and icon support.
 * Extends Vuetify's VBtn with additional customization options.
 *
 * @component UBtn
 * @extends VBtn
 * @example
 * <u-btn color="primary" loading @click="submit">Submit</u-btn>
 */
```

#### Story Descriptions

- Explain what the story demonstrates
- Include use cases
- Mention important props shown

```ts
StoryName.parameters = {
  docs: {
    description: {
      story:
        'Demonstrates button variants including elevated, flat, outlined, and text. Use the variant prop to change the button appearance.',
    },
  },
};
```

---

## 9. Troubleshooting

### Common Issues

**Issue**: Slots not forwarding properly  
**Solution**: Ensure using `v-for="(_, name) in $slots"` with dynamic slot names

**Issue**: TypeScript errors with `any`  
**Solution**: Replace with `unknown` and add type guards

**Issue**: Stories using V-components  
**Solution**: Import and use U-components instead

**Issue**: Props not passing through  
**Solution**: Verify `v-bind="$attrs"` and `inheritAttrs: false`

---

## 10. Version History

- **v2.1** (November 2025): Added mandatory Iconify Hugeicons guidelines with comprehensive icon usage rules
- **v2.0** (October 2025): Complete reorganization with enhanced guidelines
- **v1.5**: Added U-component requirement for stories
- **v1.0**: Initial copilot instructions

---

**End of Instructions**
