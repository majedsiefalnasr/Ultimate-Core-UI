import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UCol, UContainer, UIcon, URow, UTooltip } from '../index';

interface ComponentArgs {
  interactive?: boolean;
  location?: string;
  openOnClick?: boolean;
  openOnHover?: boolean;
  modelValue?: boolean;
  text?: string;
  activator?: any;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Tooltips',
  component: UTooltip,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-tooltip` component displays helper text when users hover or focus an element. It can also be controlled programmatically with v-model.',
      },
      import: `import { UTooltip } from '@ultimate/core-ui/components'`,
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
  <u-tooltip${attrsString}>
    <template v-slot:activator="{ props }">
      <u-btn v-bind="props">Hover Over Me</u-btn>
    </template>
  </u-tooltip>
</template>`;
        },
      },
    },
    Vuetify: {
      component: 'VTooltip',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/tooltips/',
    },
    Primary: {
      description: 'Tooltips can wrap any element.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-tooltip',
            link: 'https://vuetifyjs.com/en/api/v-tooltip/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    interactive: {
      control: 'boolean',
      description: 'Allow pointer events inside the tooltip (interactive).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    location: {
      control: 'text',
      description: 'Anchor point for the tooltip (start, end, top, bottom, etc).',
      table: { type: { summary: 'Anchor' } },
    },
    openOnClick: {
      control: 'boolean',
      description: 'Open the tooltip on click instead of hover.',
      table: { type: { summary: 'boolean' } },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Open tooltip on hover.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    modelValue: {
      control: 'boolean',
      description: 'v-model to control visibility programmatically.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    text: {
      control: 'text',
      description: 'Text content of the tooltip.',
      table: { type: { summary: 'string' } },
    },
  } as any,
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTooltip, UBtn },
  setup() {
    return { args };
  },
  template: `
    <div class="text-center">
      <u-tooltip v-bind="args">
        <template v-slot:activator="{ props }">
          <u-btn v-bind="props">Hover Over Me</u-btn>
        </template>
      </u-tooltip>
    </div>
  `,
});

Default.args = {
  text: 'Tooltip',
} as ComponentArgs;

/**
 * The interactive prop prevents the tooltip from closing during mouse interactions. For example, if the tooltip contains text that users might want to click or copy.
 */
export const Interactive: StoryFn<ComponentArgs> = (args) => ({
  components: { UTooltip, UIcon, UBtn },
  setup() {
    return { args };
  },
  template: `
    <div class="d-flex justify-center">
      <u-tooltip interactive>
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn icon v-bind="activatorProps"><u-icon icon="hugeicons:information-circle"/></u-btn>
        </template>
        <div>
          <a class="text-primary font-weight-medium" href="/blog/announcing-vuetify-3.8/#vtooltip-interactive">Learn more</a>
          about interactive tooltip.
        </div>
      </u-tooltip>
    </div>
  `,
});

Interactive.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-center">
    <u-tooltip interactive>
      <template v-slot:activator="{ props: activatorProps }">
        <u-btn icon v-bind="activatorProps"><u-icon icon="hugeicons:information-circle"/></u-btn>
      </template>
      <div>
        <a class="text-primary font-weight-medium" href="/blog/announcing-vuetify-3.8/#vtooltip-interactive">Learn more</a>
        about interactive tooltip.
      </div>
    </u-tooltip>
  </div>
</template>`,
    },
  },
};

/**
 * Use the location prop to specify on which side of the element the tooltip should show.
 */
export const Location: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn, UTooltip, URow },
  setup() {
    return { args };
  },
  template: `
    <div class="d-flex justify-space-around">
      <u-btn>
        Start
        <u-tooltip activator="parent" location="start">Tooltip</u-tooltip>
      </u-btn>

      <u-btn>
        End
        <u-tooltip activator="parent" location="end">Tooltip</u-tooltip>
      </u-btn>

      <u-btn>
        Top
        <u-tooltip activator="parent" location="top">Tooltip</u-tooltip>
      </u-btn>

      <u-btn>
        Bottom
        <u-tooltip activator="parent" location="bottom">Tooltip</u-tooltip>
      </u-btn>
    </div>
  `,
});

Location.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-space-around">
    <u-btn>
      Start
      <u-tooltip activator="parent" location="start">Tooltip</u-tooltip>
    </u-btn>

    <u-btn>
      End
      <u-tooltip activator="parent" location="end">Tooltip</u-tooltip>
    </u-btn>

    <u-btn>
      Top
      <u-tooltip activator="parent" location="top">Tooltip</u-tooltip>
    </u-btn>

    <u-btn>
      Bottom
      <u-tooltip activator="parent" location="bottom">Tooltip</u-tooltip>
    </u-btn>
  </div>
</template>`,
    },
  },
};

/**
 * The open-on-click prop allows tooltip to open when the activator is clicked. Useful for touch devices or when manual triggering is preferred.
 */
export const OpenOnClick: StoryFn<ComponentArgs> = (args) => ({
  components: { UTooltip, UBtn },
  setup() {
    return { args };
  },
  template: `
    <div class="text-center">
      <u-tooltip :open-on-hover="false" open-on-click>
        <template v-slot:activator="{ props }">
          <u-btn v-bind="props">Click me</u-btn>
        </template>
        <span>Open on click tooltip</span>
      </u-tooltip>
    </div>
  `,
});

OpenOnClick.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-tooltip :open-on-hover="false" open-on-click>
      <template v-slot:activator="{ props }">
        <u-btn v-bind="props">Click me</u-btn>
      </template>
      <span>Open on click tooltip</span>
    </u-tooltip>
  </div>
</template>`,
    },
  },
};

/**
 * Tooltip visibility can be programmatically changed using v-model.
 */
export const Visibility: StoryFn<ComponentArgs> = (args) => ({
  components: { UContainer, URow, UCol, UTooltip, UBtn, UIcon },
  setup() {
    const show = ref(false);
    return { args, show };
  },
  template: `
    <u-container class="text-center" fluid>
      <u-row class="flex" justify="space-between">
        <u-col cols="12">
          <u-btn @click="show = !show">toggle</u-btn>
        </u-col>

        <u-col class="mt-12" cols="12">
          <u-tooltip v-model="show" location="top">
            <template v-slot:activator="{ props }">
              <u-btn icon v-bind="props"><u-icon icon="hugeicons:shopping-bag-03" color="grey-lighten-1"/></u-btn>
            </template>
            <span>Programmatic tooltip</span>
          </u-tooltip>
        </u-col>
      </u-row>
    </u-container>
  `,
});

Visibility.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container class="text-center" fluid>
    <u-row class="flex" justify="space-between">
      <u-col cols="12">
        <u-btn @click="show = !show">toggle</u-btn>
      </u-col>

      <u-col class="mt-12" cols="12">
        <u-tooltip v-model="show" location="top">
          <template v-slot:activator="{ props }">
            <u-btn icon v-bind="props"><u-icon icon="hugeicons:shopping-bag-03" color="grey-lighten-1"/></u-btn>
          </template>
          <span>Programmatic tooltip</span>
        </u-tooltip>
      </u-col>
    </u-row>
  </u-container>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>`,
    },
  },
};
