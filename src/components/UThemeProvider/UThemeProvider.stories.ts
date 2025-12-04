import type { Meta, StoryFn } from '@storybook/vue3';

import { UCard, UThemeProvider } from '../index';

interface ComponentArgs {
  tag?: string;
  theme?: string;
  withBackground?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Providers/Theme Providers',
  component: UThemeProvider,
  parameters: {
    docs: {
      description: {
        component: 'This is the component description placeholder.',
      },
      import: `import { UThemeProvider } from '@ultimate/core-ui/components'`,
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

          return `<u-theme-provider${attrsString} class="pa-10">
  <u-card subtitle="Subtitle" title="Title"></u-card>
</u-theme-provider>`;
        },
      },
    },
    Vuetify: {
      component: 'VThemeProvider',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/theme-providers/',
    },
    Primary: {
      description:
        'By default, u-theme-provider is a renderless component that allows you to change the applied theme for all of its children. When using the with-background prop, the u-theme-provider wraps its children in an element and applies the selected theme’s background color to it.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-theme-provider',
            link: 'https://vuetifyjs.com/en/api/v-theme-provider/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string | FunctionalComponent' },
        defaultValue: { summary: "'div'" },
      },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    withBackground: {
      control: 'boolean',
      name: 'with-background',
      description: "Wraps children and applies the current theme's background color.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  } as any,
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UThemeProvider, UCard },
  setup() {
    return { args };
  },
  template: `
    <u-theme-provider class="pa-10" v-bind="args">
      <u-card subtitle="Subtitle" title="Title"></u-card>
    </u-theme-provider>
  `,
});

Default.args = {
  theme: 'dark',
  withBackground: true,
} as ComponentArgs;
