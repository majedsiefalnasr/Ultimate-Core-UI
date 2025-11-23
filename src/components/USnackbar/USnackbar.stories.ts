import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, USheet, USnackbar } from '../index';

interface ComponentArgs {
  absolute?: boolean;
  activator?: unknown;
  activatorProps?: unknown;
  attach?: string | boolean | Element;
  closeDelay?: string | number;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  color?: string;
  contained?: boolean;
  contentClass?: unknown;
  contentProps?: unknown;
  disabled?: boolean;
  eager?: boolean;
  height?: string | number;
  location?: string;
  locationStrategy?: unknown;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: boolean;
  multiLine?: boolean;
  offset?: string | number | number[];
  opacity?: string | number;
  openDelay?: string | number;
  openOnClick?: boolean;
  openOnFocus?: boolean;
  openOnHover?: boolean;
  origin?: string | 'auto' | 'overlap';
  position?: string;
  rounded?: string | number | boolean;
  target?: unknown;
  text?: string;
  theme?: string;
  tile?: boolean;
  timeout?: string | number;
  timer?: string | boolean;
  transition?: string | boolean | unknown;
  variant?: string;
  vertical?: boolean;
  width?: string | number;
  zIndex?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Snackbars',
  component: USnackbar,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-snackbar` component displays a temporary message to the user with optional actions and positioning.',
      },
      import: `import { USnackbar } from '@ultimate/core-ui/components'`,
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
  <div class="text-center ma-2">
    <u-btn @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar${attrsString} v-model="snackbar">
      {{ text }}

      <template v-slot:actions>
        <u-btn color="pink" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const snackbar = ref(false)
const text = ref("Hello, I'm a snackbar")
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VSnackbar',
      content: "Wrapper around Vuetify's `VSnackbar` component.",
      link: 'https://vuetifyjs.com/en/components/snackbars/',
    },
    Primary: {
      description: 'Snackbars support positioning, timeout and actions to inform users briefly.',
    },
  },
  argTypes: {
    absolute: {
      control: 'boolean',
      description: 'Applies position:absolute to the content element.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    activator: {
      control: 'text',
      description: 'Explicitly set the overlay activator (element/component or selector).',
    },
    activatorProps: { control: 'object', description: 'Props passed to activator.' },
    attach: {
      control: 'text',
      description: 'Teleport destination (selector|element|true to disable).',
      table: {
        type: { summary: 'string | boolean | Element' },
        defaultValue: { summary: 'false' },
      },
    },
    closeDelay: {
      control: 'number',
      description: 'Milliseconds to wait before closing on hover/focus.',
    },
    closeOnBack: {
      control: 'boolean',
      description: 'Close on browser back navigation. Default: true',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    closeOnContentClick: {
      control: 'boolean',
      description: 'Close when clicking content. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    color: { control: 'text', description: 'Sets color for snackbar.' },
    contained: {
      control: 'boolean',
      description: 'Limit size to offset parent. Implies absolute+attach.',
    },
    contentClass: { control: 'text', description: 'Add class to detached content.' },
    contentProps: { control: 'object', description: 'Props applied to content element.' },
    disabled: { control: 'boolean', description: 'Disable interactions.' },
    eager: { control: 'boolean', description: 'Force content render on mount.' },
    height: { control: 'text', description: 'Height for snackbar.' },
    location: {
      control: 'text',
      description: "Anchor point for positioning (e.g., 'bottom').",
      table: { defaultValue: { summary: 'bottom' } },
    },
    locationStrategy: {
      control: 'text',
      description: 'Positioning strategy function or static.',
      table: { defaultValue: { summary: 'static' } },
    },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    minHeight: { control: 'text' },
    minWidth: { control: 'text' },
    modelValue: {
      control: 'boolean',
      description: 'v-model value (open state). Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    multiLine: {
      control: 'boolean',
      description: 'Deprecated, use min-height. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    offset: { control: 'text', description: 'Offset from target.' },
    opacity: { control: 'text', description: 'Scrim opacity (if scrim enabled).' },
    openDelay: { control: 'number', description: 'Milliseconds to wait before opening.' },
    openOnClick: { control: 'boolean', description: 'Open on activator click.' },
    openOnFocus: { control: 'boolean', description: 'Open on activator focus.' },
    openOnHover: {
      control: 'boolean',
      description: 'Open on hover. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    origin: {
      control: 'text',
      description: 'Transition origin (auto/overlap).',
      table: { defaultValue: { summary: 'auto' } },
    },
    position: { control: 'text', description: 'Position css value (fixed/static/etc).' },
    rounded: { control: 'text', description: 'Border radius variant.' },
    target: {
      control: 'text',
      description: 'Target element or coordinates for connected strategy.',
    },
    text: { control: 'text', description: 'Content text for snackbar.' },
    theme: { control: 'text', description: 'Theme applied to component and children.' },
    tile: {
      control: 'boolean',
      description: 'Remove border radius. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    timeout: {
      control: 'number',
      description: 'Milliseconds before auto-hide. Default: 5000',
      table: { defaultValue: { summary: '5000' } },
    },
    timer: {
      control: 'text',
      description: 'Show progress timer; string sets color.',
      table: { defaultValue: { summary: 'false' } },
    },
    transition: { control: 'text', description: 'Transition used for the snackbar.' },
    variant: {
      control: 'select',
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Visual variant. Default: elevated',
      table: { defaultValue: { summary: 'elevated' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Stack content vertically. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    width: { control: 'text', description: 'Width for the component.' },
    zIndex: {
      control: 'number',
      description: 'z-index used for the component. Default: 2000',
      table: { defaultValue: { summary: '2000' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USnackbar, UBtn },
  setup() {
    const snackbar = ref(false);
    const text = ref("Hello, I'm a snackbar");
    return { args, snackbar, text };
  },
  template: `
  <div class="text-center ma-2">
    <u-btn @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-bind="args" v-model="snackbar">
      {{ text }}

      <template v-slot:actions>
        <u-btn color="pink" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
  `,
});

Default.args = {} as ComponentArgs;

export const MultiLine: StoryFn<ComponentArgs> = () => ({
  components: { USnackbar, UBtn },
  setup() {
    const snackbar = ref(false);
    const text = ref(
      'I am a multi-line snackbar.\nI can have more than one line. This is another line that is quite long.'
    );
    return { snackbar, text };
  },
  template: `
  <div class="text-center">
    <u-btn color="red-darken-2" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" multi-line>
      {{ text }}

      <template v-slot:actions>
        <u-btn color="red" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
  `,
});

MultiLine.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-btn color="red-darken-2" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" multi-line>
      {{ text }}

      <template v-slot:actions>
        <u-btn color="red" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const snackbar = ref(false)
const text = ref('I am a multi-line snackbar.\nI can have more than one line. This is another line that is quite long.')
</script>`,
    },
  },
};

export const Timeout: StoryFn<ComponentArgs> = () => ({
  components: { USnackbar, UBtn },
  setup() {
    const snackbar = ref(false);
    const text = ref('My timeout is set to 2000.');
    const timeout = ref(2000);
    return { snackbar, text, timeout };
  },
  template: `
  <div class="text-center">
    <u-btn color="orange-darken-2" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:actions>
        <u-btn color="blue" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
  `,
});

Timeout.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-btn color="orange-darken-2" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" :timeout="timeout">
      {{ text }}

      <template v-slot:actions>
        <u-btn color="blue" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const snackbar = ref(false)
const text = ref('My timeout is set to 2000.')
const timeout = ref(2000)
</script>`,
    },
  },
};

export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { USnackbar, UBtn, USheet },
  template: `
  <u-sheet class="d-flex flex-column">
    <u-snackbar :timeout="2000">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" v-bind="props">open</u-btn>
      </template>
      Lorem ipsum dolor sit amet consectetur.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="blue-grey" rounded="pill">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="blue-grey" rounded="pill" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>rounded="pill"</strong>.
    </u-snackbar>

    <u-snackbar :timeout="2000" class="elevation-24" color="deep-purple-accent-4">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="deep-purple-accent-4" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>elevation="24"</strong>.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="primary" variant="tonal">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="primary" variant="tonal" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>tonal</strong> variant.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="success" variant="outlined">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="success" variant="outlined" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>outlined</strong> variant.
    </u-snackbar>
  </u-sheet>
  `,
});

Variants.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-sheet class="d-flex flex-column">
    <u-snackbar :timeout="2000">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" v-bind="props">open</u-btn>
      </template>
      Lorem ipsum dolor sit amet consectetur.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="blue-grey" rounded="pill">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="blue-grey" rounded="pill" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>rounded="pill"</strong>.
    </u-snackbar>

    <u-snackbar :timeout="2000" class="elevation-24" color="deep-purple-accent-4">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="deep-purple-accent-4" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>elevation="24"</strong>.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="primary" variant="tonal">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="primary" variant="tonal" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>tonal</strong> variant.
    </u-snackbar>

    <u-snackbar :timeout="2000" color="success" variant="outlined">
      <template v-slot:activator="{ props }">
        <u-btn class="ma-2" color="success" variant="outlined" v-bind="props">open</u-btn>
      </template>
      Snackbar with <strong>outlined</strong> variant.
    </u-snackbar>
  </u-sheet>
</template>`,
    },
  },
};

export const Vertical: StoryFn<ComponentArgs> = () => ({
  components: { USnackbar, UBtn },
  setup() {
    const snackbar = ref(false);
    return { snackbar };
  },
  template: `
  <div class="text-center">
    <u-btn color="indigo" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" vertical>
      <div class="text-subtitle-1 pb-2">This is a snackbar message</div>
      <p>This is a longer paragraph explaining something</p>
      <template v-slot:actions>
        <u-btn color="indigo" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
  `,
});

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-btn color="indigo" @click="snackbar = true">Open Snackbar</u-btn>

    <u-snackbar v-model="snackbar" vertical>
      <div class="text-subtitle-1 pb-2">This is a snackbar message</div>
      <p>This is a longer paragraph explaining something</p>
      <template v-slot:actions>
        <u-btn color="indigo" variant="text" @click="snackbar = false">Close</u-btn>
      </template>
    </u-snackbar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const snackbar = ref(false)
</script>`,
    },
  },
};
