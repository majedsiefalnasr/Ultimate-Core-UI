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

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container id="input-usage" fluid>
    <u-row>
      <u-col cols="12">
        <u-input :messages="['Messages']" append-icon="hugeicons:close-24" prepend-icon="hugeicons:phone-24">
          Default Slot
        </u-input>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Error: StoryFn<ComponentArgs> = (_args) => ({
  components: { UInput },
  setup() {
    return {};
  },
  template: `
    <u-input :error-messages="['Fatal error', 'Another error']" :max-errors="2" disabled error>
      Input
    </u-input>
  `,
});

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-input :error-messages="['Fatal error', 'Another error']" :max-errors="2" disabled error>
    Input
  </u-input>
</template>`,
    },
  },
};

export const HideDetails: StoryFn<ComponentArgs> = (_args) => ({
  components: { UInput, UTextField },
  setup() {
    const rules = [
      (v: unknown) => Boolean(v) || 'Required.',
      (v: unknown) => (typeof v === 'string' && v.length >= 3) || 'Min 3 characters',
    ];
    return { rules };
  },
  template: `
    <div>
      <u-text-field
        :rules="rules"
        hide-details="auto"
        label="Main input"
      ></u-text-field>
      <u-text-field label="Another input"></u-text-field>
    </div>
  `,
});

HideDetails.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-input :rules="rules" hide-details="auto" label="Main input"></u-input>
    <u-input label="Another input"></u-input>
  </div>
</template>
<script setup>
const rules = [
  value => !!value || 'Required.',
  value => (value && value.length >= 3) || 'Min 3 characters',
]
</script>`,
    },
  },
};

export const Loading: StoryFn<ComponentArgs> = (_args) => ({
  components: { UInput },
  setup() {
    return {};
  },
  template: `
    <u-text-field color="success" disabled loading>
      Loading
    </u-text-field>
  `,
});

Loading.args = {} as ComponentArgs;

Loading.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-text-field color="success" disabled loading>
    Loading
  </u-text-field>
</template>`,
    },
  },
};

export const Rules: StoryFn<ComponentArgs> = (_args) => ({
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
  template: `
    <u-text-field :rules="rules"></u-text-field>
  `,
});

Rules.args = {} as ComponentArgs;

Rules.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-input :rules="rules"></u-input>
</template>
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
