import type { Meta, StoryFn } from '@storybook/vue3';

import {
  UAppBarNavIcon,
  UBtn,
  UCard,
  UList,
  UListItem,
  UListSubheader,
  UToolbar,
  UToolbarItems,
  UToolbarTitle,
} from '../index';

import UDivider from './UDivider.vue';

interface ComponentArgs {
  inset?: boolean;
  vertical?: boolean;
  thickness?: string | number;
  color?: string;
  length?: string | number;
  opacity?: string | number;
  theme?: string;
  class?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Dividers',
  component: UDivider,
  parameters: {
    docs: {
      description: {
        component: 'The u-divider component is used to separate sections of lists or layouts.',
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

          return `<u-divider${attrsString}></u-divider>`;
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
    api: {
      data: [
        {
          element: { title: 'v-divider', link: 'https://vuetifyjs.com/en/api/v-divider/' },
          description: 'The divider component.',
        },
      ],
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
      control: 'text',
      description: 'Sets the dividers thickness. Default unit is px.',
      table: { type: { summary: 'string | number' } },
    },
    length: {
      control: 'text',
      description: 'Sets the dividers length. Default unit is px.',
      table: { type: { summary: 'string | number' } },
    },
    opacity: {
      control: 'text',
      description: 'Sets the component’s opacity value',
      table: { type: { summary: 'string | number' } },
    },
    color: {
      control: 'color',
      description: 'Theme color or CSS color to control appearance.',
      table: { type: { summary: 'string' } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
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

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDivider },
  setup() {
    return { args };
  },
  template: '<u-divider v-bind="args" />',
});

Default.args = {} as ComponentArgs;

// Inset Story
const insetTemplate = `
    <u-card class="mx-auto" max-width="425">
      <u-list lines="two">
        <u-list-subheader>Today</u-list-subheader>

        <u-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
          title="Brunch this weekend?"
        >
          <template #subtitle>
            <span class="font-weight-bold">Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?
          </template>
        </u-list-item>

        <u-divider inset></u-divider>

        <u-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg"
        >
          <template #title>
            Summer BBQ <span class="text-grey-lighten-1">4</span>
          </template>

          <template #subtitle>
            <span class="font-weight-bold">to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend.
          </template>
        </u-list-item>

        <u-divider inset></u-divider>

        <u-list-item
          prepend-avatar="https://cdn.vuetifyjs.com/images/lists/3.jpg"
          title="Oui oui"
        >
          <template #subtitle>
            <span class="font-weight-bold">Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?
          </template>
        </u-list-item>
      </u-list>
    </u-card>
  `;

/**
 * Inset dividers are moved 72px to the right. This will cause them to line up with list items.
 */
export const Inset: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList, UListItem, UListSubheader, UDivider },
  template: insetTemplate,
});

Inset.parameters = {
  docs: {
    source: {
      code: `<template>${insetTemplate}</template>`,
    },
  },
};

// Vertical Story
const verticalTemplate = `
    <div class="w-100">
      <div class="text-body-2 mb-1">dividers with <code>vertical</code></div>
      <u-toolbar color="purple">
        <template #prepend>
          <div class="text-h5 px-3">Title</div>
        </template>

        <u-divider class="mx-3" vertical></u-divider>
        <u-toolbar-title>My Home</u-toolbar-title>

        <u-toolbar-items>
          <u-btn variant="text">News</u-btn>
          <u-divider vertical></u-divider>
          <u-btn variant="text">Blog</u-btn>
          <u-divider vertical></u-divider>
          <u-btn variant="text">Music</u-btn>
        </u-toolbar-items>
        <u-divider vertical></u-divider>
        <u-app-bar-nav-icon class="ms-2"></u-app-bar-nav-icon>
      </u-toolbar>

      <div class="text-body-2 mt-3 mb-1">dividers with <code>vertical</code> and <code>inset</code></div>
      <u-toolbar color="teal">
        <template #prepend>
          <div class="text-h5 px-3">Title</div>
        </template>

        <u-divider class="mx-3" inset vertical></u-divider>
        <u-toolbar-title>My Home</u-toolbar-title>

        <u-toolbar-items>
          <u-btn variant="text">News</u-btn>
          <u-divider inset vertical></u-divider>
          <u-btn variant="text">Blog</u-btn>
          <u-divider inset vertical></u-divider>
          <u-btn variant="text">Music</u-btn>
        </u-toolbar-items>
        <u-divider inset vertical></u-divider>
        <u-app-bar-nav-icon class="ms-2"></u-app-bar-nav-icon>
      </u-toolbar>
    </div>
  `;

/**
 * Vertical dividers give you more tools for unique layouts.
 */
export const Vertical: StoryFn<ComponentArgs> = () => ({
  components: {
    UToolbar,
    UToolbarTitle,
    UToolbarItems,
    UAppBarNavIcon,
    UBtn,
    UDivider,
  },
  template: verticalTemplate,
});

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>${verticalTemplate}</template>
<style scoped>
.v-toolbar .v-divider {
  --v-border-opacity: .7
}
</style>`,
    },
  },
};
