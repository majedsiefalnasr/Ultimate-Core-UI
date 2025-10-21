import type { Meta, StoryFn } from '@storybook/vue3';

import UCard from './UCard.vue';

interface ComponentArgs {
  title?: string;
  subtitle?: string;
  text?: string;
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  color?: string;
  elevation?: number;
  hover?: boolean;
  href?: string;
  link?: boolean;
  disabled?: boolean;
  image?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Card',
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
    title: { control: 'text', description: 'Card title text' },
    subtitle: { control: 'text', description: 'Card subtitle text' },
    text: { control: 'text', description: 'Default slot text' },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description:
        'The variant prop gives you easy access to several different card styles. Available variants are: elevated (default), flat, tonal, outlined, text, and plain.',
      table: { defaultValue: { summary: 'elevated' } },
    },
    color: {
      control: 'color',
      description:
        'Cards can be colored by using any of the builtin colors and contextual names using the color prop.',
    },
    elevation: {
      control: 'number',
      description:
        'The elevation property provides up to 24 levels of shadow depth. By default, cards rest at 2dp.',
      table: { defaultValue: { summary: '2' } },
    },
    hover: {
      control: 'boolean',
      description:
        'When using the hover prop, the cards will increase its elevation when the mouse is hovered over them.',
      table: { defaultValue: { summary: 'false' } },
    },
    href: {
      control: 'text',
      description:
        'The card becomes an anchor with the href prop. Provide a URL to make the card an <a> element.',
    },
    link: {
      control: 'boolean',
      description:
        'Add the link prop for the same style without adding an anchor (useful for router-link or programmatic navigation).',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'The disabled prop can be added in order to prevent a user from interacting with the card.',
      table: { defaultValue: { summary: 'false' } },
    },
    image: {
      control: 'text',
      description: 'Apply a specific background image to the Card (provide a URL).',
    },
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
  title: 'Card Title',
  subtitle: 'Card subtitle secondary text',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
};
