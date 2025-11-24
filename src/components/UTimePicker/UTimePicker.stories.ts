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

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker },
  setup() {
    return { args };
  },
  template: `<u-time-picker v-bind="args"></u-time-picker>`,
});

Default.args = {} as ComponentArgs;

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
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-time-picker v-model="time" :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes" format="24hr" max="22:15" min="9:30" scrollable></u-time-picker>

        <u-time-picker v-model="timeStep" :allowed-minutes="allowedStep" format="24hr"></u-time-picker>
      </u-row>
    </u-container>
  `,
});

AllowedTimes.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-time-picker v-model="time" :allowed-hours="allowedHours" :allowed-minutes="allowedMinutes" format="24hr" max="22:15" min="9:30" scrollable></u-time-picker>

      <u-time-picker v-model="timeStep" :allowed-minutes="allowedStep" format="24hr"></u-time-picker>
    </u-row>
  </u-container>
</template>
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

export const Colors: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-time-picker color="green-lighten-1"></u-time-picker>
        <u-time-picker color="pink"></u-time-picker>
      </u-row>
    </u-container>
  `,
});

Colors.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-time-picker color="green-lighten-1"></u-time-picker>
      <u-time-picker color="pink"></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Disabled: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, URow },
  setup() {
    const picker = ref(null);
    return { args, picker };
  },
  template: `
    <u-row align="center" justify="space-around">
      <u-time-picker v-model="picker" disabled></u-time-picker>
      <u-time-picker v-model="picker" :landscape="$vuetify?.display?.smAndUp" disabled></u-time-picker>
    </u-row>
  `,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row align="center" justify="space-around">
    <u-time-picker v-model="picker" disabled></u-time-picker>
    <u-time-picker v-model="picker" :landscape="$vuetify.display.smAndUp" disabled></u-time-picker>
  </u-row>
</template>
<script setup>
import { ref } from 'vue'
const picker = ref(null)
</script>`,
    },
  },
};

export const Elevation: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-time-picker elevation="15"></u-time-picker>
      </u-row>
    </u-container>
  `,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-time-picker elevation="15"></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Format: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-time-picker format="24hr"></u-time-picker>
      </u-row>
    </u-container>
  `,
});

Format.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-time-picker format="24hr"></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const NoHeader: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-time-picker hide-header></u-time-picker>
      </u-row>
    </u-container>
  `,
});

NoHeader.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-time-picker hide-header></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Range: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, URow, UCol },
  setup() {
    const start = ref(null);
    const end = ref(null);
    return { args, start, end };
  },
  template: `
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
  `,
});

Range.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>
<script setup>
import { ref } from 'vue'
const start = ref(null)
const end = ref(null)
</script>`,
    },
  },
};

export const ReadOnly: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-time-picker readonly></u-time-picker>
      </u-row>
    </u-container>
  `,
});

ReadOnly.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-time-picker readonly></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Scrollable: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, URow },
  setup() {
    const picker = ref(null);
    return { args, picker };
  },
  template: `
    <u-row align="center" justify="space-around">
      <u-time-picker v-model="picker" scrollable></u-time-picker>
    </u-row>
  `,
});

Scrollable.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row align="center" justify="space-around">
    <u-time-picker v-model="picker" scrollable></u-time-picker>
  </u-row>
</template>
<script setup>
import { ref } from 'vue'
const picker = ref(null)
</script>`,
    },
  },
};

export const UseSeconds: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-time-picker use-seconds></u-time-picker>
      </u-row>
    </u-container>
  `,
});

UseSeconds.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-time-picker use-seconds></u-time-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const DialogAndMenu: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimePicker, UContainer, URow, UCol, UTextField, UMenu, UDialog },
  setup() {
    const time = ref(null);
    const showMenu = ref(false);
    const showDialog = ref(false);
    return { args, time, showMenu, showDialog };
  },
  template: `
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
  `,
});

DialogAndMenu.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>
<script setup>
import { ref } from 'vue'
const time = ref(null)
const showMenu = ref(false)
const showDialog = ref(false)
</script>`,
    },
  },
};
