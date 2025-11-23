import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, USnackbarQueue, UTextField } from '../index';

interface ComponentArgs {
  absolute?: boolean;
  activator?: unknown;
  activatorProps?: unknown;
  attach?: string | boolean | Element;
  closable?: string | boolean;
  closeDelay?: string | number;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  closeText?: string;
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
  modelValue?: unknown[];
  multiLine?: boolean;
  offset?: string | number | number[];
  opacity?: string | number;
  openDelay?: string | number;
  openOnClick?: boolean;
  openOnFocus?: boolean;
  openOnHover?: boolean;
  origin?: string;
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
  title: 'Components/Feedback/Snackbar Queue',
  component: USnackbarQueue,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-snackbar-queue` component displays a sequence of messages provided via v-model (an array).',
      },
      import: `import { USnackbarQueue } from '@ultimate/core-ui/components'`,
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
  <div style="height: 188px">
    <u-text-field v-model="text" label="Queue a message" hide-details @keydown.enter="onClick">
      <template v-slot:append-inner>
        <u-btn
          :disabled="!text"
          append-icon="hugeicons:arrow-right-02"
          text="Queue"
          variant="flat"
          slim
          @click="onClick"></u-btn>
      </template>
    </u-text-field>

    <u-list density="compact" variant="tonal" nav>
      <u-list-subheader>Queue:</u-list-subheader>
      <u-fade-transition v-for="message in messages" :key="message" appear>
        <u-list-item
          :title="message"></u-list-item>
      </u-fade-transition>
    </u-list>

    <u-snackbar-queue${attrsString} v-model="messages"></u-snackbar-queue>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const text = ref('');
const messages = ref<string[]>([]);
function onClick() {
  if (text.value && text.value.trim() !== '') {
    messages.value.push(text.value);
    text.value = '';
    console.log('Current queue:', messages.value);
  }
}
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VSnackbarQueue',
      content: "Wrapper around Vuetify's `VSnackbarQueue` and individual `VSnackbar` components.",
      link: 'https://vuetifyjs.com/en/components/snackbars/',
    },
  },
  argTypes: {
    absolute: {
      control: 'boolean',
      description: 'Applies position:absolute to the content element.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closable: {
      control: 'boolean',
      description: 'Show a dismiss button that closes the active snackbar.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    closeText: {
      control: 'text',
      description: 'Text for the close button when using `closable`.',
      table: { defaultValue: { summary: "'$vuetify.dismiss'" } },
    },
    timeout: {
      control: 'number',
      description: 'Milliseconds before auto-hide. Default: 5000',
      table: { defaultValue: { summary: '5000' } },
    },
    modelValue: {
      control: 'object',
      description: 'Array of messages or message objects that form the queue.',
    },
    multiLine: {
      control: 'boolean',
      description: 'Deprecated — use min-height instead.',
      table: { defaultValue: { summary: 'false' } },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Open on hover. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    vertical: {
      control: 'boolean',
      description: 'Stack content vertically. Default: false',
      table: { defaultValue: { summary: 'false' } },
    },
    zIndex: {
      control: 'number',
      description: 'z-index used for the component. Default: 2000',
      table: { defaultValue: { summary: '2000' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USnackbarQueue, UBtn, UTextField },
  setup() {
    const text = ref('');
    const messages = ref<string[]>([]);

    function onClick() {
      if (text.value && text.value.trim() !== '') {
        messages.value.push(text.value);
        text.value = '';

        console.log('Current queue:', messages.value);
      }
    }

    return { args, text, messages, onClick };
  },
  template: `
  <div style="height: 188px">
    <u-text-field v-model="text" label="Queue a message" hide-details @keydown.enter="onClick">
      <template v-slot:append-inner>
        <u-btn
          :disabled="!text"
          append-icon="hugeicons:arrow-right-02"
          text="Queue"
          variant="flat"
          slim
          @click="onClick"></u-btn>
      </template>
    </u-text-field>

    <u-list density="compact" variant="tonal" nav>
      <u-list-subheader>Queue:</u-list-subheader>
      <u-fade-transition v-for="message in messages" :key="message" appear>
        <u-list-item
          :title="message"></u-list-item>
      </u-fade-transition>
    </u-list>

    <u-snackbar-queue v-bind="args" v-model="messages"></u-snackbar-queue>
  </div>
  `,
});

Default.args = {
  color: 'primary',
  timeout: 5000,
} as ComponentArgs;
