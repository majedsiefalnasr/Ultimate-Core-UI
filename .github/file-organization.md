# 📁 File Organization

> Guidelines for organizing files in the @UltimateCoreUI project

---

## Component Folder Structure

Each component should follow this structure:

```
src/components/UComponentName/
├── UComponentName.vue       # Component file
├── UComponentName.stories.ts # Storybook stories
├── UComponentName.scss       # Optional styles
└── index.ts                  # Export file
```

---

## Index File Pattern

Each component folder must have an `index.ts` file that exports the component:

```ts
export { default as UComponentName } from './UComponentName.vue';
```

### Multiple Component Exports

For components with sub-components:

```ts
export { default as UCard } from './UCard.vue';
export { default as UCardTitle } from './UCardTitle.vue';
export { default as UCardText } from './UCardText.vue';
export { default as UCardActions } from './UCardActions.vue';
```

---

## Complete Project Structure

```
ultimate-core-ui/
├── .github/
│   └── copilot/
│       ├── copilot-instructions.md
│       ├── components-guidelines.md
│       ├── storybook-guidelines.md
│       ├── typescript-guidelines.md
│       ├── icon-guidelines.md
│       ├── file-organization.md
│       └── snippets-guidelines.md
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
│   │   ├── UCard/
│   │   │   ├── UCard.vue
│   │   │   ├── UCardTitle.vue
│   │   │   ├── UCardText.vue
│   │   │   ├── UCardActions.vue
│   │   │   ├── UCard.stories.ts
│   │   │   └── index.ts
│   │   └── index.ts           # Export all components
│   ├── snippets/
│   │   ├── UBtn.code-snippets
│   │   ├── UTextField.code-snippets
│   │   └── README.md
│   ├── styles/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── main.scss
│   └── index.ts               # Main library entry
├── .storybook/
│   ├── main.ts
│   ├── preview.ts
│   └── theme.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Component Index Structure

### Main Components Index

The `src/components/index.ts` file should export all components:

```ts
// Buttons
export { UBtn, UBtnGroup, UBtnToggle, UIconBtn } from './UBtn';

// Text Fields
export { UTextField, UTextarea, USelect } from './UTextField';

// Cards
export { UCard, UCardTitle, UCardText, UCardActions } from './UCard';

// Layout
export { UContainer, URow, UCol, USpacer } from './UGrid';

// Navigation
export { UAppBar, UNavigationDrawer, UFooter } from './UNavigation';

// Feedback
export { UAlert, USnackbar, UDialog } from './UFeedback';

// Data Display
export { UTable, UDataTable, UList, UListItem } from './UDataDisplay';

// Forms
export { UForm, UCheckbox, URadio, USwitch, USlider } from './UForms';
```

---

## Library Entry Point

The main `src/index.ts` file should:

1. Export all components
2. Export types
3. Export utilities
4. Provide installation function

```ts
// Export all components
export * from './components';

// Export types
export type * from './types';

// Export utilities
export * from './utils';

// Vue plugin installation
import type { App } from 'vue';
import * as components from './components';

export default {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
```

---

## Snippets Organization

### Snippet Folder Structure

```
src/snippets/
├── UBtn.code-snippets
├── UTextField.code-snippets
├── UCard.code-snippets
├── UAlert.code-snippets
└── README.md
```

### Snippet File Naming

- Use PascalCase matching component name
- Add `.code-snippets` extension
- One file per component (or component group)

---

## Styles Organization

### Style Folder Structure

```
src/styles/
├── _variables.scss       # SCSS variables
├── _mixins.scss          # Reusable mixins
├── _functions.scss       # SCSS functions
├── _typography.scss      # Typography styles
├── _utilities.scss       # Utility classes
└── main.scss             # Main entry point
```

### Component Styles

Component-specific styles go in the component folder:

```
src/components/UBtn/
├── UBtn.vue
├── UBtn.scss             # Component-specific styles
└── index.ts
```

---

## Storybook Configuration

### Storybook Folder Structure

```
.storybook/
├── main.ts               # Storybook configuration
├── preview.ts            # Global decorators and parameters
├── theme.ts              # Custom theme
└── public/               # Static assets
    └── favicon.ico
```

---

## Type Definitions

### Types Folder Structure

```
src/types/
├── components.d.ts       # Component type declarations
├── props.d.ts            # Shared prop types
├── emits.d.ts            # Shared emit types
└── index.ts              # Type exports
```

### Component Type Declaration Example

```ts
// src/types/components.d.ts
import type { DefineComponent } from 'vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UBtn: DefineComponent<BtnProps>;
    UTextField: DefineComponent<TextFieldProps>;
    UCard: DefineComponent<CardProps>;
  }
}
```

---

## Testing Organization

### Test Folder Structure

```
src/components/UBtn/
├── UBtn.vue
├── UBtn.stories.ts
├── UBtn.spec.ts          # Unit tests
└── index.ts
```

Or use a separate test directory:

```
tests/
├── unit/
│   ├── UBtn.spec.ts
│   ├── UTextField.spec.ts
│   └── UCard.spec.ts
└── e2e/
    ├── button.spec.ts
    └── form.spec.ts
```

---

## Build Output Structure

After build, the output should be organized as:

```
dist/
├── es/                   # ES module build
│   ├── components/
│   ├── styles/
│   └── index.js
├── lib/                  # CommonJS build
│   ├── components/
│   ├── styles/
│   └── index.js
├── types/                # TypeScript declarations
│   ├── components/
│   └── index.d.ts
└── styles/               # Compiled CSS
    └── main.css
```

---

## Documentation Organization

### Documentation Folder Structure

```
docs/
├── guide/
│   ├── getting-started.md
│   ├── installation.md
│   └── theming.md
├── components/
│   ├── buttons.md
│   ├── forms.md
│   └── layout.md
├── api/
│   ├── components.md
│   ├── props.md
│   └── events.md
└── examples/
    ├── basic-form.md
    ├── data-table.md
    └── dashboard.md
```

---

## File Naming Conventions

### Component Files

- **Vue Components**: PascalCase `UButton.vue`, `UTextField.vue`
- **Story Files**: PascalCase with `.stories.ts` extension
- **Style Files**: PascalCase with `.scss` extension
- **Index Files**: Always `index.ts`

### Other Files

- **Type Files**: camelCase with `.d.ts` extension
- **Test Files**: Match component name with `.spec.ts` extension
- **Config Files**: kebab-case `vite.config.ts`, `tsconfig.json`
- **Documentation**: kebab-case `.md` files

---

## Import Path Conventions

### Absolute Imports

Configure path aliases in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@styles/*": ["./src/styles/*"],
      "@utils/*": ["./src/utils/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}
```

### Usage in Code

```ts
// ❌ Wrong (relative imports in stories)
import { UBtn } from '../../components/UBtn';

// ✅ Correct (absolute imports)
import { UBtn } from '@components/UBtn';

// ✅ Correct (from local index)
import { UBtn, UContainer } from '../index';
```

---

## Package.json Structure

### Exports Field

```json
{
  "exports": {
    ".": {
      "import": "./dist/es/index.js",
      "require": "./dist/lib/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./components": {
      "import": "./dist/es/components/index.js",
      "require": "./dist/lib/components/index.js",
      "types": "./dist/types/components/index.d.ts"
    },
    "./styles": "./dist/styles/main.css"
  }
}
```

---

## Git Organization

### .gitignore

```
# Dependencies
node_modules/

# Build outputs
dist/
.storybook-static/

# Environment
.env
.env.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
```

---

## File Generation Order

When creating a new component, follow this order:

1. **Component File** → `UComponentName.vue`
2. **Index File** → `index.ts` (export statement)
3. **Story File** → `UComponentName.stories.ts`
4. **Snippet File** → `UComponentName.code-snippets`
5. **Style File** → `UComponentName.scss` (if needed)
6. **Update Main Index** → Add to `src/components/index.ts`

---

## Checklist for New Components

- [ ] Component file in correct folder
- [ ] Index file with export
- [ ] Story file with examples
- [ ] Snippet file with both naming styles
- [ ] Added to main components index
- [ ] Optional SCSS file if needed
- [ ] Type declarations if custom types needed

---

**End of File Organization Guidelines**
