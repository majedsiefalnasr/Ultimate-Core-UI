import type { Meta, StoryFn } from '@storybook/vue3';

import { UEmptyState } from './index';

interface ComponentArgs {
  actionText?: string;
  bgColor?: string;
  color?: string;
  headline?: string;
  height?: string | number;
  href?: string;
  icon?: string;
  image?: string;
  justify?: 'start' | 'end' | 'center';
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  size?: string | number;
  text?: string;
  textWidth?: string | number;
  theme?: string;
  title?: string;
  to?: string;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Empty States',
  component: UEmptyState,
  parameters: {
    docs: {
      description: {
        component:
          'The u-empty-state component is used to indicate that a list is empty or that no search results were found.',
      },
      import: `import { UEmptyState } from '@ultimate/core-ui/components'`,
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

          return `<u-empty-state${attrsString}></u-empty-state>`;
        },
      },
    },
    Vuetify: {
      component: 'VEmptyState',
      content:
        "This component is built on top of Vuetify's VEmptyState component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/empty-states/',
    },
    Primary: {
      description:
        'A basic empty state is composed of a title and a description. It can also include an icon and a button.',
    },
    api: {
      data: [
        {
          element: { title: 'v-empty-state', link: 'https://vuetifyjs.com/en/api/v-empty-state/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    actionText: {
      control: 'text',
      description: 'The text used for the action button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    bgColor: {
      control: 'color',
      description:
        "Applies specified color to the control's background. Used on components that also support the color prop.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    headline: {
      control: 'text',
      description: 'A large headline often used for 404 pages.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    href: {
      control: 'text',
      description: 'The URL the action button links to.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    image: {
      control: 'text',
      description: 'Apply a specific image using v-img.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'end', 'center'],
      description: 'Control the justification of the text.',
      table: {
        type: { summary: "'start' | 'end' | 'center'" },
        defaultValue: { summary: "'center'" },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minHeight: {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    size: {
      control: 'text',
      description:
        'The size used to control the dimensions of the media element inside the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    text: {
      control: 'text',
      description: 'Specify content text for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    textWidth: {
      control: 'text',
      description: 'Sets the width of the text container.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '500' } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    to: {
      control: 'text',
      description: 'The URL the action button links to.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UEmptyState },
  setup() {
    return { args };
  },
  template: '<u-empty-state v-bind="args"></u-empty-state>',
});

Default.args = {
  headline: 'Whoops, 404',
  title: 'Page not found',
  text: 'The page you were looking for does not exist',
  image: 'https://vuetifyjs.b-cdn.net/docs/images/logos/v.png',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-empty-state
    headline="Whoops, 404"
    title="Page not found"
    text="The page you were looking for does not exist"
    image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
  ></u-empty-state>
</template>`,
    },
  },
};

// Content Story
export const Content: StoryFn<ComponentArgs> = () => ({
  components: { UEmptyState },
  setup() {
    const onClickAction = () => {
      alert('You clicked the action button');
    };
    return { onClickAction };
  },
  template: `
    <u-empty-state
      headline="No Messages Yet"
      text="You haven't received any messages yet. When you do, they'll appear here."
      title="Check back later."
      @click:action="onClickAction"
    ></u-empty-state>
  `,
});

Content.parameters = {
  docs: {
    description: {
      story:
        'There are three main properties for configuring text content, title, subtitle, and text.',
    },
    source: {
      code: `<template>
  <u-empty-state
    headline="No Messages Yet"
    text="You haven't received any messages yet. When you do, they'll appear here."
    title="Check back later."
    @click:action="onClickAction"
  ></u-empty-state>
</template>

<script setup lang="ts">
function onClickAction() {
  alert('You clicked the action button');
}
</script>`,
    },
  },
};

// Media Story
export const Media: StoryFn<ComponentArgs> = () => ({
  components: { UEmptyState },
  template: `
    <u-empty-state
      icon="hugeicons:search-01"
      text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
      title="We couldn't find a match."
    ></u-empty-state>
  `,
});

Media.parameters = {
  docs: {
    description: {
      story: 'Add an icon or image to the empty state to help convey its purpose.',
    },
    source: {
      code: `<template>
  <u-empty-state
    icon="hugeicons:search-01"
    text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
    title="We couldn't find a match."
  ></u-empty-state>
</template>`,
    },
  },
};

// Actions Story
export const Actions: StoryFn<ComponentArgs> = () => ({
  components: { UEmptyState },
  setup() {
    const onClickAction = () => {
      alert('You clicked the action button');
    };
    return { onClickAction };
  },
  template: `
    <u-empty-state
      action-text="Retry Request"
      image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
      text="There might be a problem with your connection or our servers. Please check your internet connection or try again later. We appreciate your patience."
      title="Something Went Wrong"
      @click:action="onClickAction"
    ></u-empty-state>
  `,
});

Actions.parameters = {
  docs: {
    description: {
      story: 'Add a button to the empty state to help users take action.',
    },
    source: {
      code: `<template>
  <u-empty-state
    action-text="Retry Request"
    image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/connection.svg"
    text="There might be a problem with your connection or our servers. Please check your internet connection or try again later. We appreciate your patience."
    title="Something Went Wrong"
    @click:action="onClickAction"
  ></u-empty-state>
</template>

<script setup lang="ts">
function onClickAction() {
  alert('You clicked the action button');
}
</script>`,
    },
  },
};
