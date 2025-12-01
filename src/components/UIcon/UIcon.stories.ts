import type { Meta, StoryFn } from '@storybook/vue3';
import type { FunctionalComponent } from 'vue';

import { UBtn, UIcon, URow } from '../index';

interface ComponentArgs {
  color?: string;
  disabled?: boolean;
  end?: boolean;
  icon?: string | (string | [string, number])[] | FunctionalComponent;
  opacity?: string | number;
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large' | string | number;
  start?: boolean;
  tag?: string;
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Images & icons/Icons',
  component: UIcon,
  parameters: {
    docs: {
      description: {
        component:
          'The u-icon component provides a large set of glyphs to provide context to various aspects of your application. Icons support themes and multiple sizes.',
      },
      import: `import { UIcon } from '@ultimate/core-ui/components'`,
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

          return `<u-icon${attrsString}></u-icon>`;
        },
      },
    },
    Vuetify: {
      component: 'VIcon',
      content: "The u-icon component is built on top of Vuetify's v-icon component.",
      link: 'https://vuetifyjs.com/en/components/icons/',
    },
    Primary: {
      description:
        'Icons come in two themes (light and dark), and five different sizes (x-small, small, default, large, and x-large).',
    },
    api: {
      data: [
        {
          element: { title: 'v-icon', link: 'https://vuetifyjs.com/en/api/v-icon/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description:
        'Applies specified color to the control — supports utility colors (e.g., success) or CSS colors.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    end: {
      control: 'boolean',
      description: 'Applies margin at the start of the component (when placed at end).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    icon: {
      control: 'text',
      description:
        'Apply a specific icon. Always use Iconify Hugeicons syntax, e.g. hugeicons:play.',
      table: { type: { summary: 'string | FunctionalComponent | (string | [string, number])[]' } },
    },
    opacity: {
      control: 'text',
      description: 'Sets the component’s opacity value.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'Sets width/height. Can be a predefined size or a number (px).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'default' },
      },
    },
    start: {
      control: 'boolean',
      description: 'Applies margin at the end of the component (when placed at start).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'i' } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UIcon },
  setup() {
    return { args };
  },
  template: `
  <div class="text-center">
    <u-icon v-bind="args"></u-icon>
  </div>
`,
});

Default.args = {
  icon: 'hugeicons:app-store',
  size: 'default',
} as ComponentArgs;

// Color Story
const colorTemplate = `
  <u-row class="py-4" justify="space-around">
    <u-icon color="green-darken-2" icon="hugeicons:building-03" size="large"></u-icon>
    <u-icon color="blue-darken-2" icon="hugeicons:message-01" size="large"></u-icon>
    <u-icon color="purple-darken-2" icon="hugeicons:dialpad-circle-01" size="large"></u-icon>
    <u-icon color="teal-darken-2" icon="hugeicons:mail-01" size="large"></u-icon>
    <u-icon color="blue-grey-darken-2" icon="hugeicons:git-branch" size="large"></u-icon>
    <u-icon color="orange-darken-2" icon="hugeicons:arrow-up-02" size="large"></u-icon>
  </u-row>
`;

/**
 * Using color helpers you can change the color of an icon from the standard dark and light themes.
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { UIcon, URow },
  template: colorTemplate,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>${colorTemplate}</template>`,
    },
  },
};

// Buttons Story
const buttonsTemplate = `
  <div class="text-center">
    <div>
      <u-btn class="ma-2" color="primary">
        Accept
        <u-icon icon="hugeicons:checkmark-circle-02" end></u-icon>
      </u-btn>

      <u-btn class="ma-2" color="red">
        Decline
        <u-icon icon="hugeicons:cancel-01" end></u-icon>
      </u-btn>

      <u-btn class="ma-2">
        <u-icon icon="hugeicons:cancel-circle" start></u-icon>
        Cancel
      </u-btn>
    </div>

    <div>
      <u-btn class="ma-2" color="orange-darken-2">
        <u-icon icon="hugeicons:arrow-left-02" start></u-icon>
        Back
      </u-btn>

      <u-btn class="ma-2" color="purple" icon="hugeicons:wrench-01"></u-btn>
      <u-btn class="ma-2" color="indigo" icon="hugeicons:cloud-upload"></u-btn>
    </div>

    <div>
      <u-btn class="ma-2" color="blue-lighten-2" icon="hugeicons:thumbs-up" variant="text"></u-btn>
      <u-btn class="ma-2" color="red-lighten-2" icon="hugeicons:thumbs-down" variant="text"></u-btn>
    </div>
  </div>
`;

/**
 * Icons can be used inside of buttons to add emphasis to the action.
 */
export const Buttons: StoryFn<ComponentArgs> = () => ({
  components: { UIcon, UBtn },
  template: buttonsTemplate,
});

Buttons.parameters = {
  docs: {
    source: {
      code: `<template>${buttonsTemplate}</template>`,
    },
  },
};
