import type { Meta, StoryFn } from '@storybook/vue3';

import { UParallax } from '../index';

interface ComponentArgs {
  src?: string;
  scale?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Parallax',
  component: UParallax,
  parameters: {
    docs: {
      description: {
        component:
          'The u-parallax component creates a 3d effect that makes an image appear to scroll slower than the window.',
      },
      import: `import { UParallax } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<u-parallax${attrsString}></u-parallax>`;
        },
      },
    },
    Vuetify: {
      component: 'VParallax',
      content:
        "This component is built on top of Vuetify's VParallax component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/parallax/',
    },
    Primary: {
      description:
        'A parallax causes a shift in a background image when the user scrolls the page.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-parallax',
            link: 'https://vuetifyjs.com/en/api/v-parallax/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    src: {
      control: { type: 'text' },
      description: 'Image source URL for the parallax background.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    scale: {
      control: { type: 'number' },
      description: 'The scale of the parallax image.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0.5' },
        category: 'Props',
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UParallax },
  setup() {
    return { args };
  },
  template: `<u-parallax v-bind="args"></u-parallax>`,
});

Default.args = {
  src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
} as ComponentArgs;
