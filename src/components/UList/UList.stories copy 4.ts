import type { Meta, StoryFn } from '@storybook/vue3';
import { UCard, UList, UListItem } from '@ultimate/core-ui/components';

interface ComponentArgs {}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/List',
  component: UList,
  parameters: {
    docs: {
      description: {
        component:
          'The UList component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection. They provide a consistent styling for organizing groups of text and images.',
      },
      import: `import { UList } from '@ultimate/core-ui/components'`,
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

          return `
<UCard
  class="mx-auto"
  max-width="300"
>
  <UList ${attrsString} :items="items"></UList>
</UCard>`;
        },
      },
    },
    Vuetify: {
      component: 'VListItem',
      content:
        "This component is built on top of Vuetify's VList component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/lists/',
    },
    APIs: {
      data: [
        {
          element: {
            title: 'v-list',
            link: 'https://vuetifyjs.com/en/api/v-list/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-list-group',
            link: 'https://vuetifyjs.com/en/api/v-list-group/',
          },
          description: 'Sub-component used to display or hide groups of items',
        },
        {
          element: {
            title: 'v-list-subheader',
            link: 'https://vuetifyjs.com/en/api/v-list-subheader/',
          },
          description: 'Sub-component used to separate groups of items',
        },
        {
          element: {
            title: 'v-list-item',
            link: 'https://vuetifyjs.com/en/api/v-list-item/',
          },
          description: 'Sub-component used to display a single item or modify the `v-list` state',
        },
        {
          element: {
            title: 'v-list-item-title',
            link: 'https://vuetifyjs.com/en/api/v-list-item-title/',
          },
          description:
            'Sub-component used to display the title of a list item. Wraps the #title slot',
        },
        {
          element: {
            title: 'v-list-item-subtitle',
            link: 'https://vuetifyjs.com/en/api/v-list-item-subtitle/',
          },
          description:
            'Sub-component used to display the subtitle of a list item. Wraps the #subtitle slot',
        },
        {
          element: {
            title: 'v-list-item-action',
            link: 'https://vuetifyjs.com/en/api/v-list-item-action/',
          },
          description: 'Sub-component used to display v-checkbox or v-switch',
        },
        {
          element: {
            title: 'v-list-img',
            link: 'https://vuetifyjs.com/en/api/v-list-img/',
          },
          description: 'Sub-component that is used to wrap the v-img component',
        },
        {
          element: {
            title: 'v-list-item-media',
            link: 'https://vuetifyjs.com/en/api/v-list-item-media/',
          },
          description: 'Sub-component that is used to wrap the v-img component',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Items: Lists can either be created by markup using the many sub-components that are available, or by using the items prop.',
      table: { type: { summary: 'object | Array' } },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Density: supports the density property.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled: You cannot interact with disabled.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UList, UListItem, UCard },
  setup() {
    const items = [
      {
        title: 'Item #1',
        value: 1,
      },
      {
        title: 'Item #2',
        value: 2,
      },
      {
        title: 'Item #3',
        value: 3,
      },
    ];
    return { args, items };
  },
  template: `
    <UCard
      class="mx-auto"
      max-width="300"
    >
      <v-list v-bind="args" :items="items"></v-list>
    </UCard>
  `,
});

Default.args = {} as ComponentArgs;
