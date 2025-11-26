import type { Meta, StoryFn } from '@storybook/vue3';

import { UBadge, UBtn, UIcon, UList, UListItem, USpacer, UToolbar } from '../index';

interface ComponentArgs {
  content?: string | number;
  color?: string;
  textColor?: string;
  dot?: boolean;
  inline?: boolean;
  floating?: boolean;
  bordered?: boolean;
  icon?: string;
  location?: string;
  max?: string | number;
  offsetX?: string | number;
  offsetY?: string | number;
  modelValue?: boolean;
  rounded?: string | number | boolean;
  transition?: string | boolean;
  tile?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Badges',
  component: UBadge,
  parameters: {
    docs: {
      description: {
        component:
          'The u-badge component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.',
      },
      import: `import { UBadge } from '@ultimate/core-ui/components'`,
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

          return `<u-badge${attrsString}><u-btn icon="hugeicons:notification-01"></u-btn></u-badge>`;
        },
      },
    },
    Vuetify: {
      component: 'VBadge',
      content:
        "This component is built on top of Vuetify's VBadge component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/badges/',
    },
    Primary: {
      description:
        'Badges in their simplest form display to the upper right of the content that it wraps and requires the badge slot.',
    },
    api: {
      data: [
        {
          element: { title: 'v-badge', link: 'https://vuetifyjs.com/en/api/v-badge/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: 'Text content to show in the badge.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
      },
    },
    textColor: {
      control: 'color',
      description:
        'Applies a specified color to the control text - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
      },
    },
    dot: {
      control: 'boolean',
      description: 'Reduce the size of the badge and hide its contents.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    inline: {
      control: 'boolean',
      description:
        'Display as an inline block instead of absolute position. location, floating, and offset will have no effect.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    floating: {
      control: 'boolean',
      description:
        'Move the badge further away from the slotted content. Equivalent to an 8px offset.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    bordered: {
      control: 'boolean',
      description:
        'Applies a 2px by default and 1.5px border around the badge when using the dot property.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: {
        type: { summary: 'string' },
      },
    },
    location: {
      control: 'text',
      description:
        "Specifies the component's location. Can combine by using a space separated string.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top end' },
      },
    },
    max: {
      control: 'text',
      description:
        'Sets the maximum number allowed when using the content prop with a number like value. If the content number exceeds the maximum value, a + suffix is added.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    offsetX: {
      control: 'text',
      description: 'Offset the badge on the x-axis.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    offsetY: {
      control: 'text',
      description: 'Offset the badge on the y-axis.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    modelValue: {
      control: 'boolean',
      description: 'Controls whether the component is visible or hidden.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
      },
    },
    transition: {
      control: 'text',
      description:
        'Sets the component transition. Can be one of the built in or custom transition.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'scale-rotate-transition' },
      },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBadge, UBtn },
  setup() {
    return { args };
  },
  template: `
    <u-badge v-bind="args">
      <u-btn icon="hugeicons:notification-01"></u-btn>
    </u-badge>
  `,
});

Default.args = {
  content: '5',
  color: 'error',
} as ComponentArgs;

// Dot Story
const dotStoryTemplate = `
  <u-toolbar color="grey-lighten-3" title="Application">
    <u-btn stacked>
      <u-badge
        color="error"
        dot
      >
        <u-icon icon="hugeicons:news"></u-icon>
      </u-badge>

      News
    </u-btn>

    <u-btn stacked>
      <u-badge
        color="error"
        dot
      >
        <u-icon icon="hugeicons:blogger"></u-icon>
      </u-badge>

      Blog
    </u-btn>

    <u-btn
      variant="tonal"
      stacked
    >
      <u-icon icon="hugeicons:door-02"></u-icon>

      Login
    </u-btn>
  </u-toolbar>
`;

/**
 * The dot property removes badge’s content and reduces its overall size. This is useful
 * when you need to draw a user’s attention subtly.
 */
export const Dot: StoryFn<ComponentArgs> = () => ({
  components: { UBadge, UBtn, UIcon, UToolbar },
  template: dotStoryTemplate,
});

Dot.parameters = {
  docs: {
    source: {
      code: `<template>${dotStoryTemplate}</template>`,
    },
  },
};

// Inline Story
const inlineStoryTemplate = `
  <u-list
    class="mx-auto"
    max-width="256"
    border
  >
    <u-list-item
      prepend-icon="hugeicons:inbox"
      title="Inbox"
      link
    >
      <template v-slot:append>
        <u-badge
          color="error"
          content="6"
          inline
        ></u-badge>
      </template>
    </u-list-item>

    <u-list-item
      prepend-icon="hugeicons:sent-02"
      title="Sent Mail"
      link
    ></u-list-item>

    <u-list-item
      prepend-icon="hugeicons:delete-02"
      title="Trash"
      link
    >
      <template v-slot:append>
        <u-badge
          color="info"
          content="12"
          inline
        ></u-badge>
      </template>
    </u-list-item>

    <u-list-item
      prepend-icon="hugeicons:alert-circle"
      title="Spam"
      link
    ></u-list-item>
  </u-list>
`;

/**
 * Inline badges can be placed anywhere with content and can render without a default slot.
 */
export const Inline: StoryFn<ComponentArgs> = () => ({
  components: { UBadge, UList, UListItem },
  template: inlineStoryTemplate,
});

Inline.parameters = {
  docs: {
    source: {
      code: `<template>${inlineStoryTemplate}</template>`,
    },
  },
};

// Content Story
const contentStoryTemplate = `
  <u-toolbar color="blue-grey-darken-3">
    <u-spacer></u-spacer>

    <u-btn class="text-none" stacked>
      <u-badge color="success" dot>
        <u-icon>hugeicons:home-01</u-icon>
      </u-badge>
    </u-btn>

    <u-btn class="text-none" stacked>
      <u-icon>hugeicons:user-group</u-icon>
    </u-btn>

    <u-btn class="text-none" stacked>
      <u-badge color="error" content="9+">
        <u-icon>hugeicons:store-01</u-icon>
      </u-badge>
    </u-btn>

    <u-btn class="text-none" stacked>
      <u-badge color="error" content="2">
        <u-icon>hugeicons:notification-01</u-icon>
      </u-badge>
    </u-btn>

    <u-btn class="text-none" stacked>
      <u-icon>hugeicons:menu-02</u-icon>
    </u-btn>

    <u-spacer></u-spacer>
  </u-toolbar>
`;

/**
 * For simple text, use the content property to display a value on the badge.
 */
export const Content: StoryFn<ComponentArgs> = () => ({
  components: { UBadge, UBtn, UIcon, USpacer, UToolbar },
  template: contentStoryTemplate,
});

Content.parameters = {
  docs: {
    source: {
      code: `<template>${contentStoryTemplate}</template>`,
    },
  },
};
