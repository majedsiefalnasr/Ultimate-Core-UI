import type { Meta, StoryFn } from '@storybook/vue3';

import UDivider from './UDivider.vue';

interface ComponentArgs {
  inset?: boolean;
  vertical?: boolean;
  thickness?: string | number;
  color?: string;
  class?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Divider',
  component: UDivider,
  parameters: {
    docs: {
      description: {
        component:
          "The UDivider component is a thin line used to separate content. It extends Vuetify's VDivider and forwards all props and slots.",
      },
      import: `import { UDivider } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false && value !== 'default')
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<UDivider${attrsString} />`;
        },
      },
    },
    Primary: {
      description: 'Dividers in their simplest form display a horizontal line.',
    },
    Vuetify: {
      component: 'VDivider',
      content:
        "This component is built on top of Vuetify's VDivider component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/dividers/',
    },
  },
  argTypes: {
    inset: {
      control: 'boolean',
      description: 'Inset dividers are moved 72px to the right to line up with list items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Vertical dividers give you more tools for unique layouts.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    thickness: {
      control: 'number',
      description: 'Adjust the thickness of the divider (in px).',
      table: { type: { summary: 'number | string' } },
    },
    color: {
      control: 'color',
      description: 'Theme color or CSS color to control appearance.',
      table: { type: { summary: 'string' } },
    },
    class: {
      control: 'text',
      description: 'Add custom CSS classes to the divider (forwarded to the root element).',
      table: { type: { summary: 'string' }, category: 'Other' },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDivider },
  setup() {
    return { args };
  },
  template: '<UDivider v-bind="args" />',
});

Default.args = {} as ComponentArgs;
