import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import { UCol, UDateInput, URow } from '../index';

interface ComponentArgs {
  label?: string;
  modelValue?: Date | Date[] | null;
  multiple?: boolean | 'range';
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  hideDetails?: boolean | 'auto';
  prependIcon?: string;
  prependInnerIcon?: string;
  appendIcon?: string;
  appendInnerIcon?: string;
  prefix?: string;
  suffix?: string;
  min?: string;
  max?: string;
  maxWidth?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Date Inputs',
  component: UDateInput,
  parameters: {
    docs: {
      description: {
        component:
          'The u-date-input component combines a text field with a date picker. It is meant to be a direct replacement for a standard date input.',
      },
      import: `import { UDateInput } from '@ultimate/core-ui/components'`,
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

          return `<u-date-input${attrsString}></u-date-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VDateInput',
      content:
        'At its core, the v-date-input component is a basic container that extends v-text-field.',
      link: 'https://vuetifyjs.com/en/components/date-inputs/',
    },
    Primary: {
      description:
        'The u-date-input combines a text field with a date picker for easy date selection.',
    },
    api: {
      data: [
        {
          element: { title: 'v-date-input', link: 'https://vuetifyjs.com/en/api/v-date-input/' },
          description: 'Primary component',
        },
        {
          element: { title: 'v-date-picker', link: 'https://vuetifyjs.com/en/api/v-date-picker/' },
          description: 'Date picker component',
        },
        {
          element: { title: 'v-text-field', link: 'https://vuetifyjs.com/en/api/v-text-field/' },
          description: 'Text field component',
        },
      ],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Sets the text of the input label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'date',
      description: 'The v-model value of the component',
      table: {
        type: { summary: 'Date | Date[] | null' },
        defaultValue: { summary: 'undefined' },
      },
    },
    multiple: {
      control: 'select',
      options: [false, true, 'range'],
      description: 'Allow the selection of multiple dates or a date range',
      table: {
        type: { summary: "boolean | 'range'" },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: 'select',
      options: [
        'outlined',
        'plain',
        'underlined',
        'filled',
        'solo',
        'solo-inverted',
        'solo-filled',
      ],
      description: 'Applies a distinct style to the component',
      table: {
        type: {
          summary:
            "'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'",
        },
        defaultValue: { summary: "'filled'" },
      },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component',
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: "Makes the picker readonly (doesn't allow to select new date)",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Allows for the component to be cleared',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideDetails: {
      control: 'select',
      options: [false, true, 'auto'],
      description: 'Hides hint and validation errors',
      table: {
        type: { summary: "boolean | 'auto'" },
        defaultValue: { summary: 'false' },
      },
    },
    prependIcon: {
      control: 'text',
      description: "Prepends an icon to the outside the component's input",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$calendar'" },
      },
    },
    prependInnerIcon: {
      control: 'text',
      description: 'Creates an icon in the prepend-inner slot',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    prefix: {
      control: 'text',
      description: 'Displays prefix text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    suffix: {
      control: 'text',
      description: 'Displays suffix text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    min: {
      control: 'text',
      description: 'Minimum allowed date (ISO 8601 format)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'text',
      description: 'Maximum allowed date (ISO 8601 format)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDateInput },
  setup() {
    return { args };
  },
  template: `<u-date-input v-bind="args"></u-date-input>`,
});

Default.args = {
  label: 'Date input',
} as ComponentArgs;

// Model Story
const modelTemplate = `
    <div class="d-flex justify-center">
      <u-date-input
        v-model="model"
        label="Select a date"
        max-width="368"
      ></u-date-input>
    </div>
`;

/**
 * The default model value is a Date object, but is displayed as formatted text in the input.
 */
export const Model: StoryFn<ComponentArgs> = () => ({
  components: { UDateInput },
  setup() {
    const model = shallowRef(null);
    return { model };
  },
  template: modelTemplate,
});

Model.parameters = {
  docs: {
    source: {
      code: `<template>${modelTemplate}</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const model = shallowRef(null);
</script>`,
    },
  },
};

// Multiple Story
const multipleTemplate = `
    <div class="d-flex justify-center">
      <u-date-input
        v-model="model"
        label="Select day(s)"
        max-width="368"
        multiple
      ></u-date-input>
    </div>
`;

/**
 * Using the multiple prop, the default model value is an empty array.
 */
export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { UDateInput },
  setup() {
    const model = shallowRef(null);
    return { model };
  },
  template: multipleTemplate,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>${multipleTemplate}</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const model = shallowRef(null);
</script>`,
    },
  },
};

// Range Story
const rangeTemplate = `
    <div class="d-flex justify-center">
      <u-date-input
        v-model="model"
        label="Select range"
        max-width="368"
        multiple="range"
      ></u-date-input>
    </div>
`;

/**
 * Using the multiple prop with a value of range, select 2 dates to select them and all the dates between them.
 */
export const Range: StoryFn<ComponentArgs> = () => ({
  components: { UDateInput },
  setup() {
    const model = shallowRef(null);
    return { model };
  },
  template: rangeTemplate,
});

Range.parameters = {
  docs: {
    source: {
      code: `<template>${rangeTemplate}</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const model = shallowRef(null);
</script>`,
    },
  },
};

// Calendar Icon Story
const calendarIconTemplate = `
    <u-row dense>
      <u-col cols="12" md="6">
        <u-date-input
          label="Select a date"
          prepend-icon=""
          prepend-inner-icon="hugeicons:calendar-01"
          variant="solo"
        ></u-date-input>
      </u-col>

      <u-col cols="12" md="6">
        <u-date-input
          label="Select a date"
          prepend-icon=""
          variant="solo"
        ></u-date-input>
      </u-col>
    </u-row>
`;

/**
 * You can move the calendar icon within the input or entirely by utilizing the prepend-icon and prepend-inner-icon properties.
 */
export const CalendarIcon: StoryFn<ComponentArgs> = () => ({
  components: { UDateInput, URow, UCol },
  setup() {
    return {};
  },
  template: calendarIconTemplate,
});

CalendarIcon.parameters = {
  docs: {
    source: {
      code: `<template>${calendarIconTemplate}</template>`,
    },
  },
};
