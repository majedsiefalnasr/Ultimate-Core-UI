import type { Meta, StoryFn } from '@storybook/vue3';
import { UExpansionPanel, UExpansionPanels } from '@ultimate/core-ui/components';

interface ComponentArgs {
  title?: string;
  text?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/ExpansionPanel',
  component: UExpansionPanel,
  parameters: {
    docs: {
      description: {
        component:
          "The UExpansionPanel component wraps Vuetify's VExpansionPanel and forwards all props, slots and emits.",
      },
      import: `import { UExpansionPanel } from '@ultimate/core-ui/components'`,
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

          const attrsString = attrsArray.length > 0 ? '\n    ' + attrsArray.join('\n    ') : '';

          return `
<UExpansionPanels>
  <UExpansionPanel${attrsString}>
  </UExpansionPanel>
</UExpansionPanels>`;
        },
      },
    },
    Vuetify: {
      component: 'VExpansionPanel',
      content:
        "This component is built on top of Vuetify's VExpansionPanel component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/expansion-panel/',
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the expansion panel.',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: 'The text content of the expansion panel.',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UExpansionPanel, UExpansionPanels },
  setup() {
    return { args };
  },
  template: `
    <UExpansionPanels>
      <UExpansionPanel v-bind="args"></UExpansionPanel>
    </UExpansionPanels>
  `,
});

Default.args = {
  title: 'Example panel',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
} as ComponentArgs;
