import type { Meta, StoryFn } from '@storybook/vue3';

// Import all U-components from the components index
import { UCol, UContainer, UInput, URow, UTextField } from '../index';

interface ComponentArgs {
  messages?: string[] | string;
  appendIcon?: string | boolean;
  prependIcon?: string | boolean;
  disabled?: boolean;
  error?: boolean;
  maxErrors?: string | number;
  hideDetails?: boolean | 'auto';
  hint?: string;
  persistentHint?: boolean;
  loading?: boolean;
  rules?: Array<((v: unknown) => true | string) | string | boolean>;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Inputs',
  component: UInput,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot.',
      },
      import: `import { UInput } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          // Build attributes string from args
          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<u-input${attrsString}></u-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VInput',
      content:
        "This component is a wrapper around Vuetify's `v-input` and exposes the same base API.",
      link: 'https://vuetifyjs.com/en/components/inputs/',
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UInput, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
  <u-container id="input-usage" fluid>
    <u-row>
      <u-col cols="12">
        <u-input v-bind="args">Default Slot</u-input>
      </u-col>
    </u-row>
  </u-container>
`,
});

Default.args = {
  messages: ['Messages'],
  appendIcon: 'hugeicons:cancel-01',
  prependIcon: 'hugeicons:smart-phone-01',
} as ComponentArgs;

// Error Story
const errorTemplate = `
  <u-input :error-messages="['Fatal error', 'Another error']" :max-errors="2" disabled error>
    Input
  </u-input>
`;

/**
 * Input component with error states and messages.
 */
export const Error: StoryFn<ComponentArgs> = () => ({
  components: { UInput },
  template: errorTemplate,
});

Error.parameters = {
  docs: {
    source: {
      code: `<template>${errorTemplate}</template>`,
    },
  },
};

// HideDetails Story
const hideDetailsTemplate = `
  <div>
    <u-text-field
      :rules="rules"
      hide-details="auto"
      label="Main input"
    ></u-text-field>
    <u-text-field label="Another input"></u-text-field>
  </div>
`;

/**
 * Control the visibility of input details and hints.
 */
export const HideDetails: StoryFn<ComponentArgs> = () => ({
  components: { UInput, UTextField },
  setup() {
    const rules = [
      (v: unknown) => Boolean(v) || 'Required.',
      (v: unknown) => (typeof v === 'string' && v.length >= 3) || 'Min 3 characters',
    ];
    return { rules };
  },
  template: hideDetailsTemplate,
});

HideDetails.parameters = {
  docs: {
    source: {
      code: `<template>${hideDetailsTemplate}</template>
<script setup>
const rules = [
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
]
</script>`,
    },
  },
};

// Loading Story
const loadingTemplate = `
  <u-text-field color="success" disabled loading>
    Loading
  </u-text-field>
`;

/**
 * Input component with loading state.
 */
export const Loading: StoryFn<ComponentArgs> = () => ({
  components: { UInput },
  template: loadingTemplate,
});

Loading.parameters = {
  docs: {
    source: {
      code: `<template>${loadingTemplate}</template>`,
    },
  },
};

// Rules Story
const rulesTemplate = `
  <u-text-field :rules="rules"></u-text-field>
`;

/**
 * Input component with validation rules.
 */
export const Rules: StoryFn<ComponentArgs> = () => ({
  components: { UInput },
  setup() {
    const rules = [
      (v: unknown) => Boolean(v) || 'Required.',
      (v: unknown) => String(v ?? '').length <= 20 || 'Max 20 characters',
      (v: unknown) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(String(v ?? '')) || 'Invalid e-mail.';
      },
    ];

    return { rules };
  },
  template: rulesTemplate,
});

Rules.parameters = {
  docs: {
    source: {
      code: `<template>${rulesTemplate}</template>
<script setup>
const rules = [
  value => !!value || 'Required.',
  value => (value || '').length <= 20 || 'Max 20 characters',
  value => {
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return pattern.test(value) || 'Invalid e-mail.'
  },
]
</script>`,
    },
  },
};
