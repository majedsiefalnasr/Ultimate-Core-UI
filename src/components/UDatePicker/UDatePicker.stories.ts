import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';
import { useDate } from 'vuetify';

import { UContainer, URow } from '../UGrid';

import { UDatePicker } from './index';

interface ComponentArgs {
  elevation?: string | number;
  width?: string | number;
  showAdjacentMonths?: boolean;
  color?: string;
  allowedDates?: unknown[] | ((date: unknown) => boolean);
  max?: unknown;
  min?: unknown;
  modelValue?: unknown;
  landscape?: boolean;
  hideHeader?: boolean;
  showWeek?: boolean;
  bgColor?: string;
  rounded?: string | number | boolean;
  disabled?: boolean;
  multiple?: number | boolean | string | 'range';
  viewMode?: 'month' | 'year' | 'months';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Pickers/Date Pickers',
  component: UDatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'u-date-picker is a fully featured date selection component that lets users select a date.',
      },
      import: `import { UDatePicker } from '@ultimate/core-ui/components'`,
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

          return `<u-date-picker${attrsString}></u-date-picker>`;
        },
      },
    },
    Vuetify: {
      component: 'VDatePicker',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/date-pickers/',
    },
    Primary: {
      description:
        'Date pickers come in two orientation variations, portrait (default) and landscape. By default they are emitting input event when the day (for date picker) or month (for month picker), but with reactive prop they can update the model even after clicking year/month.',
    },
    api: {
      data: [
        {
          element: { title: 'v-date-picker', link: 'https://vuetifyjs.com/en/api/v-date-picker/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    elevation: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 10, 15, 20, 24],
      description: 'Designates an elevation applied to the component between 0 and 24',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: 'text',
      description: 'Width of the picker',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    showAdjacentMonths: {
      control: 'boolean',
      description: 'Toggles visibility of days from previous and next months',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'text',
      description: 'Applies specified color to the control - supports utility colors or css color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'text',
      description: 'Maximum allowed date/month (ISO 8601 format)',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: 'undefined' },
      },
    },
    min: {
      control: 'text',
      description: 'Minimum allowed date/month (ISO 8601 format)',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: 'undefined' },
      },
    },
    landscape: {
      control: 'boolean',
      description: 'Changes the picker to landscape mode',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideHeader: {
      control: 'boolean',
      description: 'Hides the header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showWeek: {
      control: 'boolean',
      description: 'Toggles visibility of the week numbers in the body of the calendar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    multiple: {
      control: 'select',
      options: [false, true, 'range'],
      description:
        'Allow the selection of multiple dates. The range value selects all dates between two selections',
      table: {
        type: { summary: "number | boolean | (string & {}) | 'range'" },
        defaultValue: { summary: 'false' },
      },
    },
    viewMode: {
      control: 'select',
      options: ['month', 'year', 'months'],
      description: 'Determines which picker in the date or month picker is being displayed',
      table: {
        type: { summary: "'month' | 'year' | 'months'" },
        defaultValue: { summary: "'month'" },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDatePicker },
  setup() {
    return { args };
  },
  template: '<u-date-picker v-bind="args"></u-date-picker>',
});

Default.args = {} as ComponentArgs;

export const Elevation: StoryFn<ComponentArgs> = (args) => ({
  components: { UDatePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-date-picker v-bind="args"></u-date-picker>
      </u-row>
    </u-container>
  `,
});

Elevation.args = {
  elevation: 24,
} as ComponentArgs;

Elevation.parameters = {
  docs: {
    description: {
      story:
        'The u-date-picker component supports elevation up to a maximum value of 24. For more information on elevations, visit the official Material Design elevations page.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-date-picker elevation="24"></u-date-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Width: StoryFn<ComponentArgs> = (args) => ({
  components: { UDatePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="center">
        <u-date-picker v-bind="args"></u-date-picker>
      </u-row>
    </u-container>
  `,
});

Width.args = {
  width: 400,
} as ComponentArgs;

Width.parameters = {
  docs: {
    description: {
      story: "You can specify the picker's width or make it full width.",
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="center">
      <u-date-picker width="400"></u-date-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const ShowSiblingMonths: StoryFn<ComponentArgs> = (args) => ({
  components: { UDatePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-date-picker v-bind="args"></u-date-picker>
      </u-row>
    </u-container>
  `,
});

ShowSiblingMonths.args = {
  showAdjacentMonths: true,
} as ComponentArgs;

ShowSiblingMonths.parameters = {
  docs: {
    description: {
      story:
        'By default days from previous and next months are not visible. They can be displayed using the show-adjacent-months prop.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-date-picker show-adjacent-months></u-date-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const Colors: StoryFn<ComponentArgs> = (args) => ({
  components: { UDatePicker, UContainer, URow },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-date-picker v-bind="args"></u-date-picker>
      </u-row>
    </u-container>
  `,
});

Colors.args = {
  color: 'primary',
} as ComponentArgs;

Colors.parameters = {
  docs: {
    description: {
      story: 'Date picker colors can be set using the color props.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-date-picker color="primary"></u-date-picker>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const AllowedDates: StoryFn<ComponentArgs> = () => ({
  components: { UDatePicker, UContainer, URow },
  setup() {
    const date = ref(new Date('2018-03-02'));
    const adapter = useDate();

    function allowedDates(val: unknown) {
      return parseInt(adapter.toISO(val).split('-')[2], 10) % 2 === 0;
    }

    return { date, allowedDates };
  },
  template: `
    <u-container>
      <u-row justify="space-around">
        <u-date-picker
          v-model="date"
          :allowed-dates="allowedDates"
          max="2018-03-20"
          min="2016-06-15"
        ></u-date-picker>
      </u-row>
    </u-container>
  `,
});

AllowedDates.parameters = {
  docs: {
    description: {
      story:
        'Specify allowed dates using objects or functions. When using objects, accepts a date string in the format of YYYY-MM-DD. When using functions, accepts a date object as a parameter and should return a boolean.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row justify="space-around">
      <u-date-picker
        v-model="date"
        :allowed-dates="allowedDates"
        max="2018-03-20"
        min="2016-06-15"
      ></u-date-picker>
    </u-row>
  </u-container>
</template>

<script setup lang="ts">
import { useDate } from 'vuetify';
import { ref } from 'vue';

const date = ref(new Date('2018-03-02'));
const adapter = useDate();

function allowedDates(val: unknown) {
  return parseInt(adapter.toISO(val).split('-')[2], 10) % 2 === 0;
}
</script>`,
    },
  },
};
