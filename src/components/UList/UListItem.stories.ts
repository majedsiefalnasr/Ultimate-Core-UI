import type { Meta, StoryFn } from '@storybook/vue3';
import { UListItem } from '@ultimate/core-ui/components';

interface ComponentArgs {
  title?: string;
  subtitle?: string;
  active?: boolean;
  disabled?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/ListItem',
  component: UListItem,
  parameters: {
    docs: {
      description: {
        component:
          'UListItem is a versatile component used to create items within a list. It is built on top of Vuetify’s VListItem component, inheriting its functionality and styling while providing additional customization options.',
      },
      import: `import { UListItem } from '@ultimate/core-ui/components'`,
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

          return `<UListItem${attrsString}></UListItem>`;
        },
      },
    },
    Vuetify: {
      component: 'VListItem',
      content:
        "This component is built on top of Vuetify's VListItem component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/lists/',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title text of the list item.',
    },
    subtitle: {
      control: 'text',
      description: 'The subtitle text of the list item.',
    },
    active: {
      control: 'boolean',
      description: 'Sets the list item as active.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the list item.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UListItem },
  setup() {
    return { args };
  },
  template: '<UListItem v-bind="args"></UListItem>',
});

Default.args = {
  title: 'Item Title',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
} as ComponentArgs;
