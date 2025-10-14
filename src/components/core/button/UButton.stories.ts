import type { Meta, StoryFn } from '@storybook/vue3';

import UButton from './UButton.vue';

// Strongly-typed args for the UButton stories to avoid `any` eslint errors.
interface UButtonArgs {
  color?: string;
  variant?: 'text' | 'flat' | 'tonal' | 'elevated' | 'contained' | string;
  size?: string;
  loading?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  block?: boolean;
  label?: string;
}

// Clean CSF stories for UButton. Keep minimal and easy to parse to avoid
// Storybook indexing issues.
const meta: Meta<UButtonArgs> = {
  title: 'Core/Button/UButton',
  component: UButton,
  parameters: {
    docs: {
      description: {
        component:
          'UButton — thin wrapper around Vuetify `VBtn`. Forwards attributes to VBtn; use standard VBtn props.',
      },
    },
  },
  argTypes: {
    color: { control: 'color', description: 'Theme color or CSS color' },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'tonal', 'elevated', 'contained'],
      description: 'Visual variant (text, flat, tonal, elevated, contained)',
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'Size: x-small | small | default | large | x-large',
    },
    loading: { control: 'boolean', description: 'Loading state' },
    disabled: { control: 'boolean', description: 'Disabled state' },
    rounded: { control: 'boolean', description: 'Rounded corners' },
    block: { control: 'boolean', description: 'Full width' },
    label: { control: 'text', description: 'Default slot text (used by the Default story)' },
  },
};

export default meta;

export const Default: StoryFn<UButtonArgs> = (args) => ({
  components: { UButton },
  setup() {
    return { args };
  },
  template: '<UButton v-bind="args">{{ args.label || "Button" }}</UButton>',
});

Default.args = {
  color: 'primary',
  variant: 'contained',
  size: 'default',
  loading: false,
  disabled: false,
  rounded: false,
  block: false,
  label: 'Primary',
} as UButtonArgs;

export const Variants = () => ({
  components: { UButton },
  template: `
    <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
      <UButton color="primary" variant="text">Text</UButton>
      <UButton color="primary" variant="flat">Flat</UButton>
      <UButton color="primary" variant="tonal">Tonal</UButton>
      <UButton color="primary" variant="elevated">Elevated</UButton>
      <UButton color="primary" variant="contained">Contained</UButton>
    </div>
  `,
});

export const SizesAndIcon = () => ({
  components: { UButton },
  template: `
    <div style="display:flex;gap:12px;align-items:center">
      <UButton variant="contained" size="x-small">x-small</UButton>
      <UButton variant="contained" size="small">small</UButton>
      <UButton variant="contained" size="default">default</UButton>
      <UButton variant="contained" size="large">large</UButton>
      <UButton variant="contained" size="x-large">x-large</UButton>
      <UButton variant="contained"><template #icon>⭐</template>Icon</UButton>
    </div>
  `,
});

export const LoadingAndDisabled = () => ({
  components: { UButton },
  template: `
    <div style="display:flex;gap:12px;align-items:center">
      <UButton color="primary" variant="contained" :loading="true">Loading</UButton>
      <UButton color="primary" variant="contained" :disabled="true">Disabled</UButton>
    </div>
  `,
});

export const BlockAndRounded = () => ({
  components: { UButton },
  template: `
    <div style="width:320px;display:flex;flex-direction:column;gap:12px">
      <UButton color="primary" variant="contained" :block="true">Block</UButton>
      <UButton color="primary" variant="contained" :rounded="true">Rounded</UButton>
    </div>
  `,
});
