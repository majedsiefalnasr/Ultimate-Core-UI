# Copilot / Storybook: Story Generation Instructions

> Version: 1.0
> Purpose: Conventions and examples for generating Storybook stories for @UltimateCoreUI components.

This document is a focused, standalone set of instructions for generating Storybook `.stories.ts` files that match the repository's conventions and the examples (for instance `UAlert.stories.ts`). Keep it small, actionable, and compatible with the project's existing Copilot instructions.

## Quick contract

- Input: A U-component (e.g., `UAlert.vue`) and its public API (props, slots, emits).
- Output: A TypeScript Storybook file (`<ComponentName>.stories.ts`) that uses `StoryFn<ComponentArgs>`, exports `default` meta and multiple stories (Default, Variants, Examples).
- Success: Story file compiles in Storybook and produces clean docs source code via a docs `transform`.

## File location & naming

- Place story files next to the component: `src/components/<ComponentName>/<ComponentName>.stories.ts`.
- Use PascalCase file name matching the component (e.g., `UAlert.stories.ts`).

## Must-follow patterns

1. Use `StoryFn<ComponentArgs>` pattern — never `StoryObj`.
2. Always export a `default` meta object typed as `Meta<ComponentArgs>`.
3. Use `U`-prefixed components (UContainer, URow, UCol, etc.) in story templates; do not import or use `V` (Vuetify) components directly in stories. When using any U-components in a story, import them from the local `index` barrel and register them in the story factory. Example:

```ts
import { UComponentName, UContainer, URow } from '../index';

// then inside story factory
components: {
  (UComponentName, UContainer, URow);
}
```

4. Use `components: { UComponent, UContainer, ... }` in story factories to register components used in templates (see import pattern above).
5. Provide a `ComponentArgs` interface describing the props used in stories, with accurate types.

## Recommended imports

import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, computed } from 'vue';

// IMPORTANT: When importing components for the story, import U-components
// from the local `index` barrel next to the component directory. Example:
// import { UComponentName, UContainer, URow } from '../index';

// DO NOT import Vuetify `V...` components here for story templates. Use
// U-prefixed wrappers only.

## Meta (default export) guidelines

- title: "Components/<Category>/<ComponentName>"
- component: UComponentName
- parameters.docs.description.component: brief description
- parameters.docs.import: `import { UComponentName } from '@ultimate/core-ui/components'`

### Docs source transform

Include a `source.transform` function that converts `args` into a minimal, readable component example for docs. Follow this pattern:

- Filter undefined and false values from args
- Render boolean true as attribute name
- Render strings as key="value"
- Render numbers as :key="value"
- Other objects as :key="JSON.stringify(value)"

Example transform snippet (pseudocode):

- const attrsArray = Object.entries(args)
  .filter(([_, v]) => v !== undefined && v !== false)
  .map(([k, v]) => {
  if (v === true) return k;
  if (typeof v === 'string') return `${k}="${v}"`;
  if (typeof v === 'number') return `:${k}="${v}"`;
  return `:${k}="${JSON.stringify(v)}"`;
  });
- return `<u-component-name ${attrsString}></u-component-name>`;

This pattern is already used in `UAlert.stories.ts` and keeps docs source tidy.

When the user provides story code

The user will often provide the exact code they want shown in docs. Follow these rules so the repository conventions stay consistent while preserving the user's intent:

- You must use the user's provided code verbatim inside the story's `parameters.docs.source.code` so docs show exactly what the user supplied. Do not alter that string.
- For the live story (the template that Storybook actually renders), perform only the minimal mechanical transformations necessary so the example works in this repo: replace Vuetify tags with U- equivalents, replace icons with Iconify Hugeicons format, and move any inline `<script>` logic into the story factory's `setup()` function. In short: the docs show the user's original code; the live story shows a transformed version that renders correctly in this codebase.

Practical transformation rules for the live template (minimal and mechanical):

1. Replace Vuetify tags (`v-*`) with their U- equivalents
   - Examples: `<v-container>` -> `<u-container>`, `<v-row>` -> `<u-row>`, `<v-col>` -> `<u-col>`, `<v-alert>` -> `<u-alert>`.
   - Attributes/props remain unchanged unless they reference component names. After replacing tags, import the U-components from `../index` and register them in the story factory's `components: { ... }` object.

2. Replace icons to Iconify Hugeicons format
   - Replace `mdi-*` tokens with `hugeicons:...` equivalents when possible. If no clear mapping exists, use a reasonable Hugeicons fallback like `hugeicons:information-circle` and leave an inline comment in the story for manual review.

3. Move inline `<script>` blocks into the story `setup()` function
   - `<script setup lang="ts">` contents should become the body of `setup()` and all refs/methods returned.
   - Plain `<script>` (Options API) blocks should be converted to Composition API `setup()` (translate `data()` to `ref`/`reactive`, `methods` to functions, etc.).
   - Example conversion (Options API -> setup):

     // user provided
     <script>
     export default {
        data() { return { count: 0 } },
        methods: { increment() { this.count++ } }
     }
     </script>

     // becomes inside story factory
     setup() {
     const count = ref(0);
     const increment = () => (count.value++);
     return { count, increment };
     }

4. Keep the user's original markup exactly as-is in `parameters.docs.source.code`. Only the live template should be transformed.

Additionally: when importing U-components for a transformed live template, always import them together from the local `index` barrel as described earlier. Example:

```ts
import { UAlert, UContainer, URow } from '../index';

export const Example: StoryFn<ComponentArgs> = (args) => ({
  components: { UAlert, UContainer, URow },
  setup() {
    return { args };
  },
  template: `... transformed markup ...`,
});
```

Finally, when using the user's provided code as a story example (for Variants or other examples), add their original snippet into the corresponding story's docs `source.code`. For example:

```ts
Variants.parameters = {
  docs: {
    source: {
      code: `
// paste the user-provided code here exactly as they sent it
      `,
    },
  },
};
```

By following these steps you both preserve the user's example and keep
the project's story conventions consistent.

## Story examples docs block requirement

When the user's code is used as a story example (for example the `Variants`
story), always include their original snippet under:

Variants.parameters = {
docs: {
source: {
code: `// <paste user-provided code here exactly as they sent it>`
}
}
};

This ensures Storybook's docs show the user's original markup exactly. The
live template used by the story should be the transformed variant (U-tags,
Hugeicons, setup()) so the story actually renders.

## ArgTypes and controls

- Define `argTypes` for important props you want to surface to Storybook controls (type, variant, color, icon, closable, etc.).
- Provide `control`, `options` (for enums), and `table` metadata (`type.summary`, `defaultValue.summary`).
- Prefer explicit argTypes for widely-used props; leave obscure props out for clarity.

## Story patterns (must include)

1. Default (Primary) story
   - Exports a `Default: StoryFn<ComponentArgs> = (args) => ({ ... })`
   - Registers the component(s)
   - Uses `setup()` returning `{ args }`
   - Template: `<UComponent v-bind="args"></UComponent>`
   - Define `Default.args = { ... }` separately

2. Variants story
   - Showcases `variant` values or other common visual permutations
   - Can be a factory that ignores `args` and renders multiple components inside a `u-container` layout
   - Add `Variants.parameters.docs.source.code` with an example snippet similar to the template

3. Examples with slots or reactive state
   - Use `setup()` and `ref()` state for interactivity
   - Demonstrate use of slots using the named slot syntax inside template strings

## Slots & named slots

- When stories need to show slots, include a template with `<template v-slot:title>` or `<template #title>` where applicable.
- Use `components: { UComponent, UContainer }` and include the slot markup in the template string.

## Icons and icon rules

- Follow project rule: ALWAYS use Iconify Hugeicons format for icons (`hugeicons:icon-name-##`).
- Stories and examples must not reference `mdi-` or other icon libraries.
- If a component shows examples using `$vuetify` or `mdi-*` in legacy stories, update them to Hugeicons when generating new stories.

## Examples (minimal)

Default story (pattern):

export const Default: StoryFn<ComponentArgs> = (args) => ({
components: { UComponentName },
setup() { return { args }; },
template: '<u-component-name v-bind="args">Content</u-component-name>',
});

Default.args = {
/_ example props _/
variant: 'tonal',
title: 'Example Title',
};

Variant story (layout):

export const Variants: StoryFn<ComponentArgs> = () => ({
components: { UComponentName, UContainer },
template: `     <u-container class="pa-4 d-flex flex-column ga-4">
      <UComponentName variant="elevated" title="Elevated" />
      <UComponentName variant="flat" title="Flat" />
    </u-container>
  `,
});

Set `Variants.parameters.docs.source.code` to a clean code snippet matching the template.

## Accessibility

- When stories show closable or interactive controls, include ARIA-relevant props such as `close-label` in examples so docs surface accessible usage.

## Testing & validation

- After generating a story file, run Storybook or the project's Storybook build to ensure no import/type errors.
- If you can't run Storybook locally, at minimum ensure TypeScript compiles for the story file (project's typechecker) and linting passes.

## Troubleshooting common issues

- Story shows `V` components in examples: replace them with `U` equivalents or add a small wrapper import if U-equivalent is missing.
- Docs source shows raw objects: ensure args transform stringifies objects and uses `:` for non-string values.
- Icons rendering incorrectly: confirm the icon string uses `hugeicons:...` format and Iconify is available in the project.

## Small checklist for generated story files

- [ ] File at `src/components/<Component>/<Component>.stories.ts`
- [ ] `default` meta object present and typed `Meta<ComponentArgs>`
- [ ] `StoryFn<ComponentArgs>` used for stories
- [ ] `ComponentArgs` defined with main props used in stories
- [ ] `argTypes` specified for prominent props
- [ ] `parameters.docs.source.transform` implemented for clean docs code
- [ ] Stories use `U`-components for layout
- [ ] Icon strings use Hugeicons format where relevant

## Example templates to copy from

- Use `src/components/UAlert/UAlert.stories.ts` as a canonical example. It demonstrates docs.transform, argTypes, multiple stories, use of `u-container` layout, border/color examples, and docs.source snippets.

---

Notes

- Keep story files focused and small; delegate large interactive demos to the project's `playground/` if needed.
- If adding stories that rely on other U-helpers (UContainer/UGrid/etc.), import those U-helpers from their package locations and register them in the story factory's `components` object.

End of story-generation instructions.
