import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

// Import U-components from the library barrel
import { UBtn, UIcon, ULayout, USpacer, USystemBar } from '../index';

interface ComponentArgs {
  color?: string;
  window?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/System Bars',
  component: USystemBar,
  parameters: {
    docs: {
      description: {
        component:
          'The u-system-bar component can be used for displaying statuses to the user. It looks like the Android system bar and can contain icons, spacers, and some text.',
      },
      import: `import { USystemBar } from '@ultimate/core-ui/components'`,
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

          return `<template>
  <u-system-bar${attrsString}>
    <u-icon icon="hugeicons:wifi-01"></u-icon>
    <u-icon icon="hugeicons:signal-full-02" class="ms-2"></u-icon>
    <u-icon icon="hugeicons:battery-full" class="ms-2"></u-icon>

    <span class="ms-2">3:13PM</span>
  </u-system-bar>
</template>`;
        },
      },
    },
    Vuetify: {
      component: 'VSystemBar',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/system-bars/',
    },
    Primary: {
      description:
        'Primary usage: u-system-bar in its simplest form displays a small container with default theme.',
    },
    api: {
      data: [
        {
          element: { title: 'v-system-bar', link: 'https://vuetifyjs.com/en/api/v-system-bar/' },
          description: 'Primary Component',
        },
      ],
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'Place informational icons to the left, textual information (for example time) to the right.',
      Image: '/images/stories/USystemBar.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The System Bar container has a default slot with content justified right',
        },
        {
          element: '2. Icon items (optional)',
          description: 'Used to convey information through the use of icons',
        },
        {
          element: '3. Text (optional)',
          description: 'Textual content that is typically used to show time',
        },
      ],
    },
  },
  argTypes: {
    color: {
      name: 'color',
      description: 'Change the background color of the system bar.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    window: {
      name: 'window',
      description: 'Enables the window variant which typically contains window controls.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  } as any,
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USystemBar, UIcon },
  setup() {
    return { args };
  },
  template: `
    <u-system-bar v-bind="args">
      <u-icon icon="hugeicons:wifi-01"></u-icon>
      <u-icon icon="hugeicons:signal-full-02" class="ms-2"></u-icon>
      <u-icon icon="hugeicons:battery-full" class="ms-2"></u-icon>

      <span class="ms-2">3:13PM</span>
    </u-system-bar>
  `,
});

Default.args = {} as ComponentArgs;

export const Color: StoryFn<ComponentArgs> = () => ({
  components: { USystemBar, UIcon, ULayout },
  setup() {
    const now = ref('08:30');
    return { now };
  },
  template: `
    <div>
      <ULayout style="height: 50px">
        <USystemBar color="primary">
          <UIcon class="ms-2" icon="hugeicons:wifi-01"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:signal-full-02"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:battery-full"></UIcon>
          <span class="ms-2">08:30</span>
        </USystemBar>
      </ULayout>

      <ULayout style="height: 50px">
        <USystemBar color="red-lighten-2">
          <UIcon class="ms-2" icon="hugeicons:wifi-01"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:signal-full-02"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:battery-full"></UIcon>
          <span class="ms-2">18:30</span>
        </USystemBar>
      </ULayout>

      <ULayout style="height: 50px">
        <USystemBar color="indigo-darken-2">
          <UIcon class="ms-2" icon="hugeicons:wifi-01"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:signal-full-02"></UIcon>
          <UIcon class="ms-2" icon="hugeicons:battery-full"></UIcon>
          <span class="ms-2">13:24</span>
        </USystemBar>
      </ULayout>
    </div>
  `,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <v-layout style="height: 50px">
      <u-system-bar color="primary">
        <u-icon class="ms-2" icon="hugeicons:wifi-01"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:signal-full-02"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:battery-full"></u-icon>
        <span class="ms-2">08:30</span>
      </u-system-bar>
    </v-layout>

    <v-layout style="height: 50px">
      <u-system-bar color="red-lighten-2">
        <u-icon class="ms-2" icon="hugeicons:wifi-01"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:signal-full-02"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:battery-full"></u-icon>
        <span class="ms-2">18:30</span>
      </u-system-bar>
    </v-layout>

    <v-layout style="height: 50px">
      <u-system-bar color="indigo-darken-2">
        <u-icon class="ms-2" icon="hugeicons:wifi-01"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:signal-full-02"></u-icon>
        <u-icon class="ms-2" icon="hugeicons:battery-full"></u-icon>
        <span class="ms-2">13:24</span>
      </u-system-bar>
    </v-layout>
  </div>
</template>`,
    },
  },
};

Color.args = {} as ComponentArgs;

export const Window: StoryFn<ComponentArgs> = () => ({
  components: { USystemBar, UIcon, USpacer, UBtn },
  template: `
    <ULayout style="height: 50px">
      <USystemBar window>
        <UIcon class="me-2" icon="hugeicons:message-01"></UIcon>

        <span>10 unread messages</span>

        <USpacer></USpacer>

        <UBtn icon="hugeicons:minus-sign" variant="text"></UBtn>

        <UBtn class="ms-2" icon="hugeicons:square" variant="text"></UBtn>

        <UBtn class="ms-2" icon="hugeicons:cancel-01" variant="text"></UBtn>
      </USystemBar>
    </ULayout>
  `,
});

Window.parameters = {
  docs: {
    source: {
      code: `<template>
  <v-layout style="height: 50px">
    <u-system-bar window>
      <u-icon class="me-2" icon="hugeicons:message-01"></u-icon>

      <span>10 unread messages</span>

      <u-spacer></u-spacer>

      <u-btn icon="hugeicons:minus-sign" variant="text"></u-btn>

      <u-btn class="ms-2" icon="hugeicons:square" variant="text"></u-btn>

      <u-btn class="ms-2" icon="hugeicons:cancel-01" variant="text"></u-btn>
    </u-system-bar>
  </v-layout>
</template>`,
    },
  },
};

Window.args = {} as ComponentArgs;
