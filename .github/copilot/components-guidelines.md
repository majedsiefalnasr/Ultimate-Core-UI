# 🎨 Component Guidelines

> Guidelines for creating Vue 3 components in @UltimateCoreUI

---

## Component Generation Checklist

When generating a new component (e.g., `UInput`), ensure:

- [ ] Extends the corresponding Vuetify base component (e.g., `VInput`)
- [ ] Uses `inheritAttrs: false`
- [ ] Forwards all props via `v-bind="$attrs"`
- [ ] Forwards all slots dynamically
- [ ] Includes proper JSDoc documentation
- [ ] Supports both PascalCase and kebab-case usage
- [ ] Has optional SCSS file (if styling needed)

---

## Component File Structure

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

---

## Key Requirements

### Script Section

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

### Template Section

- Wrap Vuetify component with `v-bind="$attrs"`
- Forward all slots using `v-for` loop on `$slots`
- Use dynamic slot binding with `#[name]` syntax

### Style Section

- Use `<style scoped lang="scss"></style>`
- Keep empty unless specific enhancements requested
- Never add styles without user request

---

## Complete Example: UBtn

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

## Optional Enhancements

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

---

## Naming Conventions

- **Components**: PascalCase `UButton`, `UTextField`
- **Files**: PascalCase `UButton.vue`, `UButton.stories.ts`
- **Props**: camelCase `modelValue`, `hideDetails`
- **Events**: kebab-case in template, camelCase in emit
- **Slots**: kebab-case `header-content`, camelCase in defineSlots

---

## Documentation Best Practices

### Component Description

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

---

## Common Patterns

### Component with Custom Props

```vue
<script setup lang="ts">
  import { VTextField } from 'vuetify/components';
  import { computed } from 'vue';

  interface Props {
    maxLength?: number;
    showCounter?: boolean;
  }

  const props = defineProps<Props>();

  const counterText = computed(() => {
    if (!props.showCounter) return undefined;
    return `${props.maxLength} characters max`;
  });
</script>

<template>
  <v-text-field v-bind="$attrs" :counter="counterText">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-text-field>
</template>
```

### Component with Emits

```vue
<script setup lang="ts">
  import { VBtn } from 'vuetify/components';

  interface Emits {
    (e: 'custom-event', value: string): void;
  }

  const emit = defineEmits<Emits>();

  const handleClick = () => {
    emit('custom-event', 'clicked');
  };
</script>

<template>
  <v-btn v-bind="$attrs" @click="handleClick">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-btn>
</template>
```

---

## Testing Components

### Basic Usage Test

```vue
<template>
  <u-component-name prop="value" :number-prop="42" @event="handleEvent"> Content </u-component-name>
</template>
```

### Slot Test

```vue
<template>
  <u-component-name>
    <template #header>
      <div>Custom Header</div>
    </template>
    <template #default>
      <div>Main Content</div>
    </template>
  </u-component-name>
</template>
```

---

**End of Component Guidelines**
