import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UCol, UContainer, UDialog, UMenu, URow, UTextField, UTimePicker } from '../index';

interface ComponentArgs {
  format?: 'ampm' | '24hr';
  scrollable?: boolean;
  disabled?: boolean;
  elevation?: string | number;
  hideHeader?: boolean;
  readonly?: boolean;
  useSeconds?: boolean;
  min?: string;
  max?: string;
}

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

const meta: Meta<ComponentArgs> = {
  title: 'Components/Pickers/Time Pickers',
  component: UTimePicker,
  parameters: {
    docs: {
      description: {
        component:
          'The u-time-picker is a stand-alone component that provides a visual way to select a time. It defaults to a light theme.',
      },
      import: `import { UTimePicker } from '@ultimate/core-ui/components'`,
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

          return `<u-time-picker${attrsString}></u-time-picker>`;
        },
      },
    },
    Vuetify: {
      component: 'VTimePicker',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/time-pickers/',
    },
  },
  argTypes: {
    format: {
      control: 'select',
      options: ['ampm', '24hr'],
      description: 'Defines the display format for the picker.',
      table: { type: { summary: "'ampm' | '24hr'" }, defaultValue: { summary: "'ampm'" } },
    },
    scrollable: {
      control: 'boolean',
      description: 'Allows changing hour/minute with mouse scroll.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the picker.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    elevation: {
      control: 'text',
      description: 'Applies elevation (shadow) to the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    hideHeader: {
      control: 'boolean',
      name: 'hide-header',
      description: 'Hides the picker header.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts picker in readonly state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    useSeconds: {
      control: 'boolean',
      name: 'use-seconds',
      description: 'Toggles seconds input in the picker.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    min: {
      control: 'text',
      description: 'Minimum allowed time.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    max: {
      control: 'text',
      description: 'Maximum allowed time.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  } as any,
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker },
  setup() {
    return { args };
  },
  template: `<u-time-picker v-bind="args"></u-time-picker>`,
});

Default.args = {} as ComponentArgs;

// AllowedTimes Story
const allowedTimesTemplate = `
    <u-container>
      <u-row justify="space-around">
        <u-time-picker v-model="time" :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes" format="24hr" max="22:15" min="9:30" scrollable></u-time-picker>

        <u-time-picker v-model="timeStep" :allowed-minutes="allowedStep" format="24hr"></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * You can specify allowed times using arrays, objects, and functions. You can also
 * specify time step/precision/interval - e.g. 10 minutes.
 */
export const AllowedTimes: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow, UCol },
  setup() {
    const time = ref('11:15');
    const timeStep = ref('10:10');
    const allowedHours = (v: number) => v % 2 === 1;
    const allowedMinutes = (v: number) => v >= 10 && v <= 50;
    const allowedStep = (m: number) => m % 10 === 0;
    return { args, time, timeStep, allowedHours, allowedMinutes, allowedStep };
  },
  template: allowedTimesTemplate,
});

AllowedTimes.parameters = {
  docs: {
    source: {
      code: `<template>${allowedTimesTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const time = ref('11:15')
  const timeStep = ref('10:10')

  const allowedHours = v => v % 2 === 1
  const allowedMinutes = v => v >= 10 && v <= 50
  const allowedStep = m => m % 10 === 0
</script>`,
    },
  },
};

// Colors Story
const colorsTemplate = `
    <u-container>
      <u-row justify="space-around">
        <u-time-picker color="green-lighten-1"></u-time-picker>
        <u-time-picker color="pink"></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * Time picker colors can be set using the color prop.
 */
export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: colorsTemplate,
});

Colors.parameters = {
  docs: {
    source: {
      code: `<template>${colorsTemplate}</template>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `
    <u-row align="center" justify="space-around">
      <u-time-picker v-model="picker" disabled></u-time-picker>
      <u-time-picker v-model="picker" :landscape="$vuetify?.display?.smAndUp" disabled></u-time-picker>
    </u-row>
  `;

/**
 * You can’t interact with disabled picker.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, URow },
  setup() {
    const picker = ref(null);

    return { picker };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>${disabledTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const picker = ref(null)
</script>`,
    },
  },
};

// Elevation Story
const elevationTemplate = `
    <u-container>
      <u-row justify="center">
        <u-time-picker elevation="15"></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * Emphasize the u-time-picker component by providing an elevation from 0 to 24.
 * Elevation modifies the box-shadow css property.
 */
export const Elevation: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: elevationTemplate,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<template>${elevationTemplate}</template>`,
    },
  },
};

// Format Story
const formatTemplate = `
    <u-container>
      <u-row justify="center">
        <u-time-picker format="24hr"></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * A time picker can be switched to 24hr format. Note that the format prop defines only
 * the way the picker is displayed, picker’s value (model) is always in 24hr format.
 */
export const Format: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: formatTemplate,
});

Format.parameters = {
  docs: {
    source: {
      code: `<template>${formatTemplate}</template>`,
    },
  },
};

// NoHeader Story
const noHeaderTemplate = `
    <u-container>
      <u-row justify="center">
        <u-time-picker hide-header></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * You can remove picker’s header.
 */
export const NoHeader: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: noHeaderTemplate,
});

NoHeader.parameters = {
  docs: {
    source: {
      code: `<template>${noHeaderTemplate}</template>`,
    },
  },
};

// Range Story
const rangeTemplate = `
    <div>
      <h1>Plan your event:</h1>
      <u-row align="center" justify="space-around">
        <u-col style="width: 350px; flex: 0 1 auto;">
          <h2>Start:</h2>
          <u-time-picker v-model="start" :max="end"></u-time-picker>
        </u-col>
        <u-col style="width: 350px; flex: 0 1 auto;">
          <h2>End:</h2>
          <u-time-picker v-model="end" :min="start"></u-time-picker>
        </u-col>
      </u-row>
    </div>
  `;

/**
 * This is an example of joining pickers together using min and max prop.
 */
export const Range: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, URow, UCol },
  setup() {
    const start = ref(null);
    const end = ref(null);
    return { start, end };
  },
  template: rangeTemplate,
});

Range.parameters = {
  docs: {
    source: {
      code: `<template>${rangeTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const start = ref(null)
  const end = ref(null)
</script>`,
    },
  },
};

// ReadOnly Story
const readOnlyTemplate = `
    <u-container>
      <u-row justify="center">
        <u-time-picker readonly></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * Read-only picker behaves same as disabled one, but looks like default one.
 */
export const ReadOnly: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: readOnlyTemplate,
});

ReadOnly.parameters = {
  docs: {
    source: {
      code: `<template>${readOnlyTemplate}</template>`,
    },
  },
};

// Scrollable Story
const scrollableTemplate = `
    <u-row align="center" justify="space-around">
      <u-time-picker v-model="picker" scrollable></u-time-picker>
    </u-row>
  `;

/**
 * You can edit time picker’s value using mouse wheel.
 */
export const Scrollable: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, URow },
  setup() {
    const picker = ref(null);
    return { picker };
  },
  template: scrollableTemplate,
});

Scrollable.parameters = {
  docs: {
    source: {
      code: `<template>${scrollableTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const picker = ref(null)
</script>`,
    },
  },
};

// UseSeconds Story
const useSecondsTemplate = `
    <u-container>
      <u-row justify="center">
        <u-time-picker use-seconds></u-time-picker>
      </u-row>
    </u-container>
  `;

/**
 * Time picker can have seconds input.
 */
export const UseSeconds: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow },
  template: useSecondsTemplate,
});

UseSeconds.parameters = {
  docs: {
    source: {
      code: `<template>${useSecondsTemplate}</template>`,
    },
  },
};

// DialogAndMenu Story
const dialogAndMenuTemplate = `
    <u-container>
      <u-row justify="space-around">
        <u-col cols="11" sm="5">
          <u-text-field :model-value="time" label="Picker in menu" prepend-icon="hugeicons:clock-01" readonly>
            <u-menu v-model="showMenu" :close-on-content-click="false" activator="parent" min-width="0">
              <u-time-picker v-model="time"></u-time-picker>
            </u-menu>
          </u-text-field>
        </u-col>

        <u-col cols="11" sm="5">
          <u-text-field :model-value="time" label="Picker in dialog" prepend-icon="hugeicons:clock-01" readonly>
            <u-dialog v-model="showDialog" activator="parent" width="auto">
              <u-time-picker v-model="time"></u-time-picker>
            </u-dialog>
          </u-text-field>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * Due to the flexibility of pickers, you can really dial in the experience exactly
 * how you want it.
 */
export const DialogAndMenu: StoryFn<ComponentArgs> = () => ({
  components: { UTimePicker, UContainer, URow, UCol, UTextField, UMenu, UDialog },
  setup() {
    const time = ref(null);
    const showMenu = ref(false);
    const showDialog = ref(false);
    return { time, showMenu, showDialog };
  },
  template: dialogAndMenuTemplate,
});

DialogAndMenu.parameters = {
  docs: {
    source: {
      code: `<template>${dialogAndMenuTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const time = ref(null)
  const showMenu = ref(false)
  const showDialog = ref(false)
</script>`,
    },
  },
};
