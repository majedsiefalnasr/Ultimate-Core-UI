# 📖 Storybook Guidelines

> Comprehensive guidelines for generating Storybook stories for @UltimateCoreUI components

---

## Quick Contract

- **Input**: A U-component (e.g., `UAlert.vue`) and its public API (props, slots, emits)
- **Output**: A TypeScript Storybook file (`<ComponentName>.stories.ts`)
- **Pattern**: Use `StoryFn<ComponentArgs>` with separate `.args` and `.parameters`
- **Success**: Story compiles in Storybook and produces clean docs source code

---

## File Location & Naming

- Place story files next to the component: `src/components/<ComponentName>/<ComponentName>.stories.ts`
- Use PascalCase file name matching the component (e.g., `UAlert.stories.ts`)

---

## Story File Structure

Each component must have a corresponding `.stories.ts` file with:

- [ ] Proper TypeScript imports
- [ ] ComponentArgs interface
- [ ] Meta configuration
- [ ] ArgTypes definitions
- [ ] Multiple story examples
- [ ] Documentation parameters

---

## Required Imports

```ts
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, computed } from 'vue'; // Import as needed
import { UComponentName } from '../index';
```

---

## ComponentArgs Interface

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

---

## Meta Configuration

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

---

## Story Pattern (CRITICAL)

**Always use `StoryFn` pattern**, never `StoryObj`:

```ts
export const StoryName: StoryFn<ComponentArgs> = (args) => ({
  components: { UComponentName, UContainer, URow, UCol },
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

---

## Using U-Components in Stories (CRITICAL)

**NEVER use V-components in stories**. Always use U-components for layout and helpers.

### ❌ Wrong:

```ts
template: `
  <v-container>
    <v-row>
      <v-col>...</v-col>
    </v-row>
  </v-container>
`;
```

### ✅ Correct:

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
```

---

## Common U-Components for Stories

| Category       | Components                                         |
| -------------- | -------------------------------------------------- |
| **Layout**     | `UContainer`, `URow`, `UCol`, `USpacer`            |
| **Cards**      | `UCard`, `UCardTitle`, `UCardText`, `UCardActions` |
| **Buttons**    | `UBtn`, `UBtnGroup`, `UBtnToggle`, `UIconBtn`      |
| **Typography** | `UIcon`, `ULabel`, `UDivider`                      |
| **Forms**      | `UTextField`, `USelect`, `UCheckbox`, `URadio`     |

---

## Story Examples

### Basic Story with Args

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

### Story with Reactive State

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

### Story with Layout

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

## When User Provides Story Code

The user will often provide the exact code they want shown in docs. Follow these rules:

### Rules for User-Provided Code

1. **Preserve Original Code**: Use the user's provided code verbatim in `parameters.docs.source.code`
2. **Transform for Live Story**: Perform minimal mechanical transformations for the live template:
   - Replace Vuetify tags (`v-*`) with U- equivalents
   - Replace icons with Iconify Hugeicons format
   - Move inline `<script>` logic into story `setup()` function
3. **Keep Docs Clean**: The docs show the user's original code; the live story shows transformed version

### Transformation Rules

#### 1. Replace Vuetify Tags

```ts
// User provides:
<v-container><v-row><v-col>...</v-col></v-row></v-container>

// Transform to:
<u-container><u-row><u-col>...</u-col></u-row></u-container>

// Import:
import { UContainer, URow, UCol } from '../index';
```

#### 2. Replace Icons

```ts
// User provides:
icon = 'mdi-home';

// Transform to:
icon = 'hugeicons:home-01';
```

#### 3. Move Script Logic

```ts
// User provides:
<script setup lang="ts">
const count = ref(0);
const increment = () => count.value++;
</script>

// Transform to story setup:
setup() {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
}
```

### Example Transformation

```ts
// User provides this code:
const userCode = `<template>
  <v-container>
    <v-alert icon="mdi-info">Alert</v-alert>
  </v-container>
</template>`;

// Story implementation:
export const UserExample: StoryFn<ComponentArgs> = () => ({
  components: { UAlert, UContainer },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-alert icon="hugeicons:information-circle">Alert</u-alert>
    </u-container>
  `,
});

// Docs show original:
UserExample.parameters = {
  docs: {
    source: {
      code: userCode, // Exact user-provided code
    },
  },
};
```

---

## ArgTypes and Controls

Define `argTypes` for important props:

```ts
argTypes: {
  variant: {
    control: 'select',
    options: ['elevated', 'flat', 'tonal', 'outlined', 'plain'],
    description: 'The visual style variant',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'elevated' },
    },
  },
  color: {
    control: 'color',
    description: 'The color of the component',
  },
  disabled: {
    control: 'boolean',
    description: 'Disables the component',
  },
}
```

---

## Required Story Examples

### 1. Default (Primary) Story

```ts
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UComponentName },
  setup() {
    return { args };
  },
  template: '<u-component-name v-bind="args"></u-component-name>',
});

Default.args = {
  variant: 'elevated',
  label: 'Example',
};
```

### 2. Variants Story

```ts
export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UComponentName, UContainer, URow, UCol },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4">
      <UComponentName variant="elevated" label="Elevated" />
      <UComponentName variant="flat" label="Flat" />
      <UComponentName variant="outlined" label="Outlined" />
    </u-container>
  `,
});

Variants.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-component-name variant="elevated" label="Elevated" />
  <u-component-name variant="flat" label="Flat" />
  <u-component-name variant="outlined" label="Outlined" />
</template>`,
    },
  },
};
```

### 3. Interactive Example

```ts
export const Interactive: StoryFn<ComponentArgs> = () => ({
  components: { UComponentName },
  setup() {
    const state = ref('');
    const handleChange = (value: string) => {
      state.value = value;
    };
    return { state, handleChange };
  },
  template: `
    <div>
      <u-component-name 
        v-model="state" 
        @change="handleChange"
      />
      <p>Current value: {{ state }}</p>
    </div>
  `,
});
```

---

## Story Checklist

- [ ] File at `src/components/<Component>/<Component>.stories.ts`
- [ ] `default` meta object typed as `Meta<ComponentArgs>`
- [ ] `StoryFn<ComponentArgs>` used for all stories
- [ ] `ComponentArgs` interface defined
- [ ] `argTypes` specified for prominent props
- [ ] `parameters.docs.source.transform` implemented
- [ ] Stories use U-components for layout
- [ ] Icon strings use Hugeicons format
- [ ] Separate `.args` and `.parameters` definitions
- [ ] Multiple story examples (Default, Variants, Interactive)

---

## Canonical Example

Use `src/components/UAlert/UAlert.stories.ts` as the reference example. It demonstrates:

- Clean docs transform
- Complete argTypes
- Multiple story variants
- U-component usage
- Border/color examples
- Documentation snippets

---

**End of Storybook Guidelines**
