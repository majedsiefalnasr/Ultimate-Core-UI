import type { Meta, StoryFn } from '@storybook/vue3';

import { UBreadcrumbs, UIcon } from '../index';

interface BreadcrumbItem {
  title: string;
  disabled: boolean;
  href: string;
}

interface ComponentArgs {
  items?: (string | BreadcrumbItem)[];
  activeClass?: string;
  activeColor?: string;
  bgColor?: string;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  divider?: string;
  icon?: string;
  rounded?: string | number | boolean;
  tag?: string;
  tile?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: UBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          'The u-breadcrumbs component is used as a navigational helper and hierarchy for pages.',
      },
      import: `import { UBreadcrumbs } from '@ultimate/core-ui/components'`,
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

          return `<u-breadcrumbs${attrsString}></u-breadcrumbs>`;
        },
      },
    },
    Vuetify: {
      component: 'VBreadcrumbs',
      content:
        "This component is built on top of Vuetify's VBreadcrumbs component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/breadcrumbs/',
    },
    Primary: {
      description: 'By default, breadcrumbs use a text divider. This can be any string.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-breadcrumbs',
            link: 'https://vuetifyjs.com/en/api/v-breadcrumbs/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-breadcrumbs-item',
            link: 'https://vuetifyjs.com/en/api/v-breadcrumbs-item/',
          },
          description: 'Sub-component used for each breadcrumb',
        },
        {
          element: {
            title: 'v-breadcrumbs-divider',
            link: 'https://vuetifyjs.com/en/api/v-breadcrumbs-divider/',
          },
          description: 'Sub-component used for dividing breadcrumbs',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'An array of strings or objects used for automatically generating children components.',
      table: { type: { summary: 'array' }, defaultValue: { summary: '[]' } },
    },
    activeClass: {
      control: 'text',
      description: 'The class applied to the component when it is in an active state.',
      table: { type: { summary: 'string' } },
    },
    activeColor: {
      control: 'text',
      description: 'The applied color when the component is in an active state.',
      table: { type: { summary: 'string' } },
    },
    bgColor: {
      control: 'color',
      description: "Applies specified color to the control's background.",
      table: { type: { summary: 'string' } },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control.',
      table: { type: { summary: 'string' } },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    divider: {
      control: 'text',
      description: 'Specifies the dividing character between items.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '/' } },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: { type: { summary: 'string' } },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius applied to the component.',
      table: { type: { summary: 'string | number | boolean' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'ul' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBreadcrumbs },
  setup() {
    return { args };
  },
  template: '<u-breadcrumbs v-bind="args"></u-breadcrumbs>',
});

Default.args = {
  items: ['Foo', 'Bar', 'Fizz'],
} as ComponentArgs;

// Divider Story
const dividerStoryTemplate = `
  <div>
    <u-breadcrumbs
      :items="items"
      divider="-"
    ></u-breadcrumbs>

    <u-breadcrumbs
      :items="items"
      divider="."
    ></u-breadcrumbs>
  </div>
`;

/**
 * Breadcrumbs separator can be set using divider property.
 */
export const Divider: StoryFn<ComponentArgs> = () => ({
  components: { UBreadcrumbs },
  setup() {
    const items = [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ];
    return { items };
  },
  template: dividerStoryTemplate,
});

Divider.parameters = {
  docs: {
    source: {
      code: `
<template>${dividerStoryTemplate}</template>

<script setup>
  const items = [
    {
      title: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]
</script>
      `,
    },
  },
};

// Prepend Story
const prependStoryTemplate = `
  <u-breadcrumbs :items="items">
    <template v-slot:prepend>
      <u-icon icon="hugeicons:home-01" size="small"></u-icon>
    </template>
  </u-breadcrumbs>
`;

/**
 * Prepend content with the prepend slot.
 */
export const Prepend: StoryFn<ComponentArgs> = () => ({
  components: { UBreadcrumbs, UIcon },
  setup() {
    const items = [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ];
    return { items };
  },
  template: prependStoryTemplate,
});

Prepend.parameters = {
  docs: {
    source: {
      code: `
<template>${prependStoryTemplate}</template>

<script setup>
  const items = [
    {
      title: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]
</script>
      `,
    },
  },
};

// Dividers Story (Icon Dividers)
const dividersStoryTemplate = `
  <div>
    <u-breadcrumbs :items="items">
      <template v-slot:divider>
        <u-icon icon="hugeicons:arrow-right-double"></u-icon>
      </template>
    </u-breadcrumbs>

    <u-breadcrumbs :items="items">
      <template v-slot:divider>
        <u-icon icon="hugeicons:arrow-right-01"></u-icon>
      </template>
    </u-breadcrumbs>
  </div>
`;

/**
 * To customize the divider, use the divider slot.
 */
export const Dividers: StoryFn<ComponentArgs> = () => ({
  components: { UBreadcrumbs, UIcon },
  setup() {
    const items = [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ];
    return { items };
  },
  template: dividersStoryTemplate,
});

Dividers.parameters = {
  docs: {
    source: {
      code: `
<template>${dividersStoryTemplate}</template>

<script setup>
  const items = [
    {
      title: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]
</script>
      `,
    },
  },
};

// Title Story
const titleStoryTemplate = `
<u-breadcrumbs :items="items">
  <template v-slot:title="{ item }">
    {{ item.title.toUpperCase() }}
  </template>
</u-breadcrumbs>
`;

/**
 * You can use the title slot to customize each breadcrumb title.
 */
export const Title: StoryFn<ComponentArgs> = () => ({
  components: { UBreadcrumbs },
  setup() {
    const items = [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ];
    return { items };
  },
  template: titleStoryTemplate,
});

Title.parameters = {
  docs: {
    source: {
      code: `
<template>${titleStoryTemplate}</template>

<script setup>
  const items = [
    {
      title: 'Dashboard',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]
</script>
      `,
    },
  },
};
