import type { Meta, StoryFn } from '@storybook/vue3';

import UCard from './UCard.vue';

interface ComponentArgs {
  elevation?: number;
  color?: string;
  text?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Surfaces/Card',
  component: UCard,
  parameters: {
    docs: {
      description: {
        component: "UCard is a thin wrapper around Vuetify's VCard component.",
      },
      import: `import { UCard } from '@ultimate/core-ui/components'`,
    },
    Vuetify: {
      component: 'VCard',
      content:
        "UCard is a thin wrapper around Vuetify's VCard component. For more details, please refer to the Vuetify documentation.",
      link: 'https://vuetifyjs.com/en/components/cards/',
    },
    anatomy: {
      description: `
        The recommended placement of elements inside of v-card is: 
          Place v-card-title, v-card-subtitle or other title text on top
          Place v-card-text and other forms of media below the card header
          Place v-card-actions after card content
        `,
      Image: '/images/stories/ucard.anatomy.png',
      data: [
        {
          element: '1. Container',
          description:
            'The Card container holds all v-card components. Composed of 3 major parts: v-card-item, v-card-text, and v-card-actions',
        },
        {
          element: '2. Title (optional)',
          description: 'A heading with increased font-size',
        },
        {
          element: '3. Subtitle (optional)',
          description: 'A subheading with a lower emphasis text color',
        },
        {
          element: '4. Text (optional)',
          description: 'A content area with a lower emphasis text color',
        },
        {
          element: '5. Actions (optional)',
          description: 'A content area that typically contains one or more v-btn component',
        },
      ],
    },
  },
  argTypes: {
    elevation: { control: 'number', description: 'Elevation (0-24)' },
    color: { control: 'color', description: 'Theme or CSS color' },
    text: { control: 'text', description: 'Default slot text' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UCard },
  setup() {
    return { args };
  },
  template: '<UCard v-bind="args"></UCard>',
});

Default.args = {
  elevation: 2,
  text: 'Card content',
};
