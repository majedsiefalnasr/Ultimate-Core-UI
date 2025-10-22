import type { Meta, StoryFn } from '@storybook/vue3';
import { UExpansionPanel, UExpansionPanels } from '@ultimate/core-ui/components';

interface ComponentArgs {
  variant?: 'default' | 'accordion' | 'inset' | 'popout';
  multiple?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/ExpansionPanels',
  component: UExpansionPanels,
  parameters: {
    docs: {
      description: {
        component:
          'The UExpansionPanel component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the multiple property, the expansion-panel can remain open until explicitly closed.',
      },
      import: `import { UExpansionPanels } from '@ultimate/core-ui/components'`,
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

          return `<UExpansionPanels${attrsString}>
  <UExpansionPanel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </UExpansionPanel>
  <UExpansionPanel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </UExpansionPanel>
  <UExpansionPanel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
  </UExpansionPanel>
</UExpansionPanels>`;
        },
      },
    },
    Primary: {
      description:
        'Expansion panels in their simplest form display a list of expandable items. You can either declare the markup explicitly, or use the title and text props.',
    },
    Vuetify: {
      component: 'VExpansionPanels',
      content:
        "This component is built on top of Vuetify's VExpansionPanels component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/expansion-panels/',
    },
    APIs: {
      data: [
        {
          element: {
            title: 'v-expansion-panels',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panels/',
          },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-expansion-panel',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel/',
          },
          description:
            'Sub-component that wraps v-expansion-panel-text and v-expansion-panel-title',
        },
        {
          element: {
            title: 'v-expansion-panel-text',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel-text/',
          },
          description:
            'Sub-component used to display the Expanion Panel’s text. Wraps the #text slot',
        },
        {
          element: {
            title: 'v-expansion-panel-title',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel-title/',
          },
          description:
            '	Sub-component used to display the Expansion Panel’s title. Wraps the #title slot',
        },
      ],
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'accordion', 'inset', 'popout'],
      description:
        'Visual variant of the expansion panels. `accordion` removes margins around the active panel, `inset` makes panels smaller when active, `popout` makes panels larger.',
      table: {
        type: { summary: 'default | accordion | inset | popout' },
        defaultValue: { summary: 'default' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple panels to be open at once.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable both the expansion-panel and its content.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Readonly behaves like disabled but does not change styles.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UExpansionPanels, UExpansionPanel },
  setup() {
    return { args };
  },
  template: `
    <UExpansionPanels v-bind="args">
      <UExpansionPanel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </UExpansionPanel>
      <UExpansionPanel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </UExpansionPanel>
      <UExpansionPanel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </UExpansionPanel>
    </UExpansionPanels>
  `,
});

Default.args = {} as ComponentArgs;
