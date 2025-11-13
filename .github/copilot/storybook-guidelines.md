# 📖 Enhanced Storybook Copilot Instructions

> Comprehensive guidelines for generating Storybook stories that STRICTLY follow the project's TypeScript file structure

---

## 🎯 Core Principle

**ALWAYS follow the exact TypeScript file structure provided below. No deviations allowed.**

---

## 📁 Mandatory File Structure

Every story MUST follow this exact structure:

```typescript
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue'; // Import Vue composables as needed

import { ComponentName, ComponentUsedInStory1, ComponentUsedInStory2 } from '../index';

interface ComponentArgs {
  // Component props go here with proper TypeScript types
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Category/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Component description goes here',
      },
      import: `import { ComponentName } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<component-kebab-case${attrsString}></component-kebab-case>`;
        },
      },
    },
    Vuetify: {
      component: 'VComponentName',
      content: 'Statement about how this component wraps/uses Vuetify',
      link: 'https://vuetifyjs.com/en/components/component-name/',
    },
    Primary: {
      description: 'Component default usage description',
    },
    api: {
      data: [
        {
          element: {
            title: 'API element title',
            link: 'API element link',
          },
          description: 'API element description',
        },
      ],
    },
    anatomy: {
      data: [
        {
          part: 'Part name',
          description: 'Description of this part of the component',
        },
      ],
    },
  },
  argTypes: {
    // Define all important props here
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { ComponentName },
  setup() {
    return { args };
  },
  template: `<ComponentName v-bind="args"></ComponentName>`,
});

Default.args = {
  // Default prop values
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<!-- User-provided code goes here exactly as provided -->`,
    },
  },
};

// Additional stories follow the same pattern
export const StoryName: StoryFn<ComponentArgs> = (args) => ({
  components: { ComponentName, OtherComponents },
  setup() {
    // Setup logic here
  },
  template: `<!-- Template here -->`,
});

StoryName.args = {
  // Story-specific args
} as ComponentArgs;

StoryName.parameters = {
  docs: {
    description: {
      story: 'Story description',
    },
    source: {
      code: `<!-- User-provided code here -->`,
    },
  },
};
```

---

## 🔒 Strict Rules (NO EXCEPTIONS)

### 1. **Meta Object Structure**

```typescript
const meta: Meta<ComponentArgs> = {
  title: 'Components/Category/ComponentName', // ✅ Required
  component: ComponentName, // ✅ Required
  parameters: {
    docs: {
      /* ... */
    }, // ✅ Required
    Vuetify: {
      /* ... */
    }, // ✅ Required
    Primary: {
      /* ... */
    }, // ✅ Required
    api: {
      /* ... */
    }, // ✅ Required
    anatomy: {
      /* ... */
    }, // ✅ Optional
  },
  argTypes: {
    /* ... */
  }, // ✅ Required
};
```

**All four parameter sections are MANDATORY:**

- `docs` - Component documentation
- `Vuetify` - Vuetify component reference
- `Primary` - Default usage description
- `api` - API element references
- `anatomy` - Component anatomy (if applicable)

### 2. **Story Pattern (CRITICAL)**

**ALWAYS use this exact pattern:**

```typescript
export const StoryName: StoryFn<ComponentArgs> = (args) => ({
  components: { ComponentName },
  setup() {
    return { args };
  },
  template: `<ComponentName v-bind="args"></ComponentName>`,
});

// Separate args definition - ALWAYS cast as ComponentArgs
StoryName.args = {
  prop1: 'value',
} as ComponentArgs;

// Separate parameters definition
StoryName.parameters = {
  docs: {
    source: {
      code: `<!-- Code here -->`,
    },
  },
};
```

**Key Points:**

- ✅ Use `StoryFn<ComponentArgs>`, NEVER `StoryObj`
- ✅ ALWAYS separate `.args` and `.parameters` definitions
- ✅ ALWAYS cast `.args` as `as ComponentArgs`
- ✅ ALWAYS include `parameters.docs.source.code`

### 3. **Import Structure**

```typescript
// 1. Storybook types (REQUIRED)
import type { Meta, StoryFn } from '@storybook/vue3';

// 2. Vue composables (as needed)
import { ref, computed, watch } from 'vue';

// 3. Component imports from '../index' (REQUIRED)
import { ComponentName, HelperComponent1, HelperComponent2 } from '../index';
```

**Rules:**

- ✅ Import ALL components from `../index`
- ✅ NEVER import from individual component files
- ✅ Always use named imports in destructured format

### 4. **ComponentArgs Interface**

```typescript
interface ComponentArgs {
  // All component props with proper TypeScript types
  label?: string;
  modelValue?: string | number | boolean;
  color?: string;
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'plain';
  disabled?: boolean;
  loading?: boolean;

  // Story-specific props for content/slots
  content?: string;
  icon?: string;
}
```

**Rules:**

- ✅ Define ALL props the component accepts
- ✅ Use proper TypeScript types (not `any`)
- ✅ Use union types for enums (`'option1' | 'option2'`)
- ✅ Make props optional with `?` unless required

### 5. **U-Components in Stories (CRITICAL)**

**NEVER use V-components. ALWAYS use U-components.**

```typescript
// ❌ WRONG - DO NOT USE
template: `
  <v-container>
    <v-row>
      <v-col>...</v-col>
    </v-row>
  </v-container>
`;

// ✅ CORRECT - ALWAYS USE
import { UContainer, URow, UCol } from '../index';

template: `
  <u-container>
    <u-row>
      <u-col>...</u-col>
    </u-row>
  </u-container>
`;
```

**Common U-Components:**
| Purpose | Components |
|---------|-----------|
| Layout | `UContainer`, `URow`, `UCol`, `USpacer` |
| Cards | `UCard`, `UCardTitle`, `UCardText`, `UCardActions` |
| Buttons | `UBtn`, `UBtnGroup`, `UIconBtn` |
| Forms | `UTextField`, `USelect`, `UCheckbox`, `URadio` |
| Typography | `UIcon`, `ULabel`, `UDivider` |

### 6. **Icons Format**

**ALWAYS use Hugeicons format:**

```typescript
// ❌ WRONG
icon: 'mdi-home';
icon: 'fa-home';

// ✅ CORRECT
icon: 'hugeicons:home-01';
icon: 'hugeicons:information-circle';
```

### 7. **Source Code Transform**

**ALWAYS include this exact transform in meta.parameters.docs.source:**

```typescript
source: {
  transform: (src: string, storyContext: { args: ComponentArgs }) => {
    const { args } = storyContext;

    const attrsArray = Object.entries(args as Record<string, unknown>)
      .filter(([_, value]) => value !== undefined && value !== false)
      .map(([key, value]) => {
        if (value === true) return key;
        if (typeof value === 'string') return `${key}="${value}"`;
        if (typeof value === 'number') return `:${key}="${value}"`;
        return `:${key}="${JSON.stringify(value)}"`;
      });

    const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

    return `<component-kebab-case${attrsString}></component-kebab-case>`;
  },
}
```

**Replace `component-kebab-case` with actual kebab-case component name.**

---

## 📋 User-Provided Code Handling

### When User Provides Example Code:

1. **Preserve Original in Docs:**

   ```typescript
   StoryName.parameters = {
     docs: {
       source: {
         code: `<!-- User's exact code here -->`,
       },
     },
   };
   ```

2. **Transform for Live Story:**
   - Replace `v-*` tags with `u-*` equivalents
   - Replace icon formats with Hugeicons
   - Move `<script setup>` logic into story `setup()` function
   - Import all U-components used

3. **Example Transformation:**

   ```typescript
   // User provides:
   const userCode = `<template>
     <v-container>
       <v-btn icon="mdi-home">Click</v-btn>
     </v-container>
   </template>`;

   // Story implementation:
   export const Example: StoryFn<ComponentArgs> = () => ({
     components: { UBtn, UContainer },
     setup() {
       return {};
     },
     template: `
       <u-container>
         <u-btn icon="hugeicons:home-01">Click</u-btn>
       </u-container>
     `,
   });

   // Docs show original:
   Example.parameters = {
     docs: {
       source: {
         code: userCode, // Exact user code
       },
     },
   };
   ```

---

## ✅ Required Stories Checklist

Every component MUST have these stories:

### 1. Default Story (REQUIRED)

```typescript
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { ComponentName },
  setup() {
    return { args };
  },
  template: `<ComponentName v-bind="args"></ComponentName>`,
});

Default.args = {
  // Default values
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<!-- Default example -->`,
    },
  },
};
```

### 2. Additional Story Examples

```typescript
export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { ComponentName, UContainer },
  setup() {
    return {};
  },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4">
      <ComponentName variant="elevated" />
      <ComponentName variant="flat" />
      <ComponentName variant="outlined" />
    </u-container>
  `,
});

Variants.args = {} as ComponentArgs;

Variants.parameters = {
  docs: {
    description: {
      story: 'Shows different variants',
    },
    source: {
      code: `<!-- Variants code -->`,
    },
  },
};
```

---

## 🚨 Common Mistakes to AVOID

| ❌ Wrong                         | ✅ Correct                                        |
| -------------------------------- | ------------------------------------------------- |
| `export const Story: StoryObj`   | `export const Story: StoryFn<ComponentArgs>`      |
| `Story.args = { prop: 'value' }` | `Story.args = { prop: 'value' } as ComponentArgs` |
| No `Story.parameters`            | Always include `Story.parameters`                 |
| Using `v-container`              | Use `u-container`                                 |
| `icon: 'mdi-home'`               | `icon: 'hugeicons:home-01'`                       |
| Import from `./Component.vue`    | Import from `../index`                            |
| Missing `Vuetify` parameter      | Always include all 4 parameter sections           |

---

## 🎯 Complete Example (Reference This)

```typescript
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UFileInput, UContainer, URow, UCol } from '../index';

interface ComponentArgs {
  label?: string;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
  chips?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/File Inputs',
  component: UFileInput,
  parameters: {
    docs: {
      description: {
        component: "The file input component is used to select files from the user's device.",
      },
      import: `import { UFileInput } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<u-file-input${attrsString}></u-file-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VFileInput',
      content: "This component uses Vuetify's VFileInput component internally.",
      link: 'https://vuetifyjs.com/en/components/file-inputs/',
    },
    Primary: {
      description: "Basic file input for selecting files from the user's device.",
    },
    api: {
      data: [
        {
          element: {
            title: 'File Input API',
            link: '/api/file-input',
          },
          description: 'Complete API documentation for the file input component.',
        },
      ],
    },
    anatomy: {
      data: [
        {
          part: 'Input Field',
          description:
            'The main input area where users can click to select files or drag and drop them.',
        },
        {
          part: 'Chips',
          description: 'Displays selected files as chips when the chips prop is enabled.',
        },
      ],
    },
  },
  argTypes: {
    label: { control: 'text', description: 'The input label' },
    accept: { control: 'text', description: 'Accepted file types' },
    multiple: { control: 'boolean', description: 'Allow multiple files' },
    disabled: { control: 'boolean', description: 'Disable the input' },
    chips: { control: 'boolean', description: 'Display selected files as chips' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: `<u-file-input v-bind="args"></u-file-input>`,
});

Default.args = {
  label: 'File input',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-file-input label="File input"></u-file-input>
</template>`,
    },
  },
};

export const Accept: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput, UContainer },
  setup() {
    return { args };
  },
  template: `
    <u-container class="pa-4">
      <u-file-input v-bind="args"></u-file-input>
    </u-container>
  `,
});

Accept.args = {
  label: 'Select images only',
  accept: 'image/*',
} as ComponentArgs;

Accept.parameters = {
  docs: {
    description: {
      story: 'Restrict file selection to specific types using the accept attribute.',
    },
    source: {
      code: `<template>
  <u-file-input 
    label="Select images only" 
    accept="image/*"
  ></u-file-input>
</template>`,
    },
  },
};
```

---

## 📝 Final Checklist

Before submitting any story, verify:

- [ ] Uses `StoryFn<ComponentArgs>` pattern (not `StoryObj`)
- [ ] Has `ComponentArgs` interface with all props
- [ ] Meta object has all 4 parameter sections (docs, Vuetify, Primary, api)
- [ ] Includes `source.transform` function in meta
- [ ] All stories have separate `.args` with `as ComponentArgs` cast
- [ ] All stories have `.parameters.docs.source.code`
- [ ] Uses U-components only (no V-components)
- [ ] Uses Hugeicons format for all icons
- [ ] Imports all components from `../index`
- [ ] Has at least Default story
- [ ] argTypes defined for all important props

---

**Remember: This structure is NON-NEGOTIABLE. Follow it exactly for every story file.**
