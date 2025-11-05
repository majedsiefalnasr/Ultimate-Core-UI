import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn } from '../UBtn';
import { UCard } from '../UCard';

import { UDefaultsProvider } from './index';

interface ComponentArgs {
  defaults?: {
    global?: Record<string, unknown>;
    [key: string]: Record<string, unknown> | undefined;
  };
  disabled?: boolean;
  reset?: string | number;
  root?: string | boolean;
  scoped?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Providers/Defaults Providers',
  component: UDefaultsProvider,
  parameters: {
    docs: {
      description: {
        component:
          'The defaults provider allows you to provide specific default prop values to components in a section of your application',
      },
      import: `import { UDefaultsProvider } from '@ultimate/core-ui/components'`,
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

          return `<u-defaults-provider${attrsString}>
      <u-btn>Button</u-btn>
    </u-defaults-provider>`;
        },
      },
    },
    Vuetify: {
      component: 'VDefaultsProvider',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/defaults-providers/',
    },
    Primary: {
      description:
        'The v-defaults-provider component is used to provide default props to components within its scope. It hooks into the Global configuration feature and makes it easy to assign multiple properties at once or scope out all incoming changes to any children.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-defaults-provider',
            link: 'https://vuetifyjs.com/en/api/v-defaults-provider/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    defaults: {
      control: 'object',
      description:
        'Specify new default prop values for components. Keep in mind that this will be merged with previously defined values',
      table: {
        type: {
          summary: '{ global: Record<string, unknown>; [string]: Record<string, unknown> }',
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description:
        "Turns off all calculations of new default values for improved performance in situations where defaults propagation isn't necessary",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    reset: {
      control: 'number',
      description: 'Reset the default values up the nested chain by {n} amount',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    root: {
      control: 'boolean',
      description: 'Force current defaults to match the application root defaults',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scoped: {
      control: 'boolean',
      description: 'Prevents the ability for default values to be inherited from parent components',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDefaultsProvider, UBtn },
  setup() {
    return { args };
  },
  template: `
    <u-defaults-provider v-bind="args">
      <u-btn>Button</u-btn>
    </u-defaults-provider>
  `,
});

Default.args = {} as ComponentArgs;

export const Defaults: StoryFn<ComponentArgs> = () => ({
  components: { UDefaultsProvider, UCard },
  setup() {
    const defaults = ref({
      global: {
        elevation: 10,
      },
      VCard: {
        color: 'secondary',
      },
    });

    return { defaults };
  },
  template: `
    <u-container>
      <u-card class="ma-10" subtitle="Subtitle" title="Title"></u-card>
      <u-defaults-provider :defaults="defaults">
        <u-card class="ma-10" subtitle="Subtitle" title="Title"></u-card>
      </u-defaults-provider>
    </u-container>
  `,
});

Defaults.parameters = {
  docs: {
    description: {
      story:
        'The v-defaults-provider expects a prop defaults which looks the same as the defaults object that you can pass to createVuetify when creating your application.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-card class="ma-10" subtitle="Subtitle" title="Title"></u-card>
    <u-defaults-provider :defaults="defaults">
      <u-card class="ma-10" subtitle="Subtitle" title="Title"></u-card>
    </u-defaults-provider>
  </u-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const defaults = ref({
  global: {
    elevation: 10,
  },
  VCard: {
    color: 'secondary',
  },
});
</script>`,
    },
  },
};
