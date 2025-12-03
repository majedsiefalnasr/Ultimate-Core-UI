import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref, shallowRef } from 'vue';

import { UCol, UContainer, UNumberInput, URow } from '../index';

interface ComponentArgs {
  controlVariant?: 'default' | 'stacked' | 'split' | 'hidden';
  reverse?: boolean;
  label?: string;
  hideInput?: boolean;
  inset?: boolean;
  min?: number;
  max?: number;
  step?: number;
  precision?: number | null;
  modelValue?: number;
  variant?:
    | 'outlined'
    | 'filled'
    | 'underlined'
    | 'plain'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  hideDetails?: boolean | string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Number Inputs',
  component: UNumberInput,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-number-input` extends the standard HTML number-type input, ensuring style consistency across browsers as a replacement for `<input type="number">`.',
      },
      import: `import { UNumberInput } from '@ultimate/core-ui/components'`,
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

          return `<u-number-input${attrsString}></u-number-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VNumberInput',
      content:
        "This component is built on top of Vuetify's VNumberInput component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/number-inputs/',
    },
    Primary: {
      description: 'This is the usage description placeholder.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-number-input',
            link: 'https://vuetifyjs.com/en/api/v-number-input/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    controlVariant: {
      control: { type: 'select' },
      options: ['default', 'stacked', 'split', 'hidden'],
      description: 'Changes the layout of the stepper buttons.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
        category: 'Props',
      },
    },
    reverse: {
      control: { type: 'boolean' },
      description:
        'Reverses the stepper buttons position for default and stacked control variants.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Sets the text of the label.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: undefined },
        category: 'Props',
      },
    },
    hideInput: {
      control: { type: 'boolean' },
      description: 'Hides the input element and displays only stepper buttons.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    inset: {
      control: { type: 'boolean' },
      description: 'Changes the background-color of the stepper buttons to transparent.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    min: {
      control: { type: 'number' },
      description: 'Sets the minimum allowed value.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        category: 'Props',
      },
    },
    max: {
      control: { type: 'number' },
      description: 'Sets the maximum allowed value.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        category: 'Props',
      },
    },
    step: {
      control: { type: 'number' },
      description: 'Sets the increment/decrement value when using stepper buttons.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
        category: 'Props',
      },
    },
    precision: {
      control: { type: 'number' },
      description:
        'Sets the number of decimal places to display. Use null for unrestricted precision.',
      table: {
        type: { summary: 'number | null' },
        defaultValue: { summary: '0' },
        category: 'Props',
      },
    },
    modelValue: {
      control: { type: 'number' },
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
        category: 'Props',
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'outlined',
        'filled',
        'underlined',
        'plain',
        'solo',
        'solo-inverted',
        'solo-filled',
      ],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'filled' },
        category: 'Props',
      },
    },
    hideDetails: {
      control: { type: 'boolean' },
      description:
        'Hides hint and validation errors. When set to auto messages will be rendered only if there are messages (hint, error message etc) to display.',
      table: {
        type: { summary: 'boolean | string' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UNumberInput },
  setup() {
    return { args };
  },
  template: `<u-number-input v-bind="args"></u-number-input>`,
});

Default.args = {
  reverse: false,
  controlVariant: 'default',
  label: '',
  hideInput: false,
  inset: false,
} as ComponentArgs;

// Control Variant story
const controlVariantTemplate = `
    <u-container>
      <u-row>
        <u-col cols="12" md="4" sm="4">
          <h5>Default</h5>

          <u-number-input control-variant="default"></u-number-input>
        </u-col>

        <u-col cols="12" md="4" sm="4">
          <h5>Stacked</h5>

          <u-number-input control-variant="stacked"></u-number-input>
        </u-col>

        <u-col cols="12" md="4" sm="4">
          <h5>Split</h5>

          <u-number-input control-variant="split"></u-number-input>
        </u-col>

        <u-col cols="12" md="4" sm="4">
          <h5>Hidden</h5>

          <u-number-input control-variant="hidden"></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The control-variant prop offers an easy way to customize steppers button layout.
 * The following values are valid options: default, stacked, split and hidden.
 */
export const ControlVariant: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  template: controlVariantTemplate,
});

ControlVariant.parameters = {
  docs: {
    source: {
      code: `<template>${controlVariantTemplate}</template>`,
    },
  },
};

// Reverse story
const reverseTemplate = `
    <u-container>
      <u-row>
        <u-col cols="12" md="4" sm="4">
          <h5>Default</h5>

          <u-number-input
            control-variant="default"
            reverse
          ></u-number-input>
        </u-col>

        <u-col cols="12" md="4" sm="4">
          <h5>Stacked</h5>

          <u-number-input
            control-variant="stacked"
            reverse
          ></u-number-input>
        </u-col>

        <u-col cols="12" md="4" sm="4">
          <h5>Split</h5>

          <u-number-input
            control-variant="split"
          ></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The reverse prop automatically changes the stepper buttons’ position to the opposite
 * side for both the default and stacked control variants.
 */
export const Reverse: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  template: reverseTemplate,
});

Reverse.parameters = {
  docs: {
    source: {
      code: `<template>${reverseTemplate}</template>`,
    },
  },
};

// Hide Input story
const hideInputTemplate = `
    <u-container>
      <u-row justify="center">
        <u-col cols="auto">
          <u-number-input variant="outlined" hide-details hide-input></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The hide-input prop hides the input field, allowing only the stepper buttons to be visible.
 * These stepper buttons follow a stacked control-variant layout.
 */
export const HideInput: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  template: hideInputTemplate,
});

HideInput.parameters = {
  docs: {
    source: {
      code: `<template>${hideInputTemplate}</template>`,
    },
  },
};

// Inset story
const insetTemplate = `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <h5>Default</h5>

          <u-number-input
            control-variant="default"
            inset
          ></u-number-input>
        </u-col>

        <u-col cols="12" sm="6">
          <h5>Stacked</h5>

          <u-number-input
            control-variant="stacked"
            inset
          ></u-number-input>
        </u-col>

        <u-col cols="12" sm="6">
          <h5>Split</h5>

          <u-number-input
            control-variant="split"
            inset
          ></u-number-input>
        </u-col>

        <u-col cols="12" sm="6">
          <h5>Hide-input</h5>

          <u-number-input
            hide-input
            inset
          ></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The inset prop adjusts the style of the stepper buttons by reducing the size of the
 * button dividers.
 */
export const Inset: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  template: insetTemplate,
});

Inset.parameters = {
  docs: {
    source: {
      code: `<template>${insetTemplate}</template>`,
    },
  },
};

// Min Max story
const minMaxTemplate = `
    <u-container>
      <u-row>
        <u-col>
          <h5>min:10/max:20</h5>

          <u-number-input
            :max="20"
            :min="10"
            :model-value="15"
          ></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The min and max props specify the minimum and maximum values accepted by v-number-input,
 * behaving identically to the native min and max attributes for <input type="number">.
 */
export const MinMax: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  template: minMaxTemplate,
});

MinMax.parameters = {
  docs: {
    source: {
      code: `<template>${minMaxTemplate}</template>`,
    },
  },
};

// Step story
const stepTemplate = `
    <u-container>
      <u-row>
        <u-col>
          <h5>step 2; min:10; max:20</h5>

          <u-number-input
            :max="20"
            :min="10"
            :model-value="15"
            :step="2"
          ></u-number-input>
        </u-col>
        <u-col>
          <h5>step {{ step }}, rounding on blur</h5>
          <u-number-input
            v-model="roundedValue"
            :step="step"
          ></u-number-input>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The step prop behaves the same as the step attribute in the <input type="number">, it
 * defines the incremental steps for adjusting the numeric value.
 */
export const Step: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  setup() {
    const step = 50;
    const value = shallowRef(100);
    const roundedValue = computed({
      get: () => value.value,
      set: (v) => (value.value = Math.round(v / step) * step),
    });

    return { step, roundedValue };
  },
  template: stepTemplate,
});

Step.parameters = {
  docs: {
    source: {
      code: `<template>${stepTemplate}</template>

<script setup>
  import { computed, shallowRef } from 'vue'

  const step = 50
  const value = shallowRef(100)
  const roundedValue = computed({
    get: () => value.value,
    set: v => value.value = Math.round(v / step) * step,
  })
</script>`,
    },
  },
};

// Precision story
const precisionTemplate = `
    <u-container>
      <u-row>
        <u-col>
          <h5>(default precision="0")</h5>
          <u-number-input v-model="example1" :precision="0" hide-details="auto"></u-number-input>
          <code class="d-block pt-3">value: {{ example1 }}</code>
        </u-col>
      </u-row>
      <u-row>
        <u-col>
          <h5>(precision="2")</h5>
          <u-number-input v-model="example2" :precision="2" hide-details="auto"></u-number-input>
          <code class="d-block pt-3">value: {{ example2 }}</code>
        </u-col>
        <u-col>
          <h5>(precision="5")</h5>
          <u-number-input v-model="example3" :precision="5" hide-details="auto"></u-number-input>
          <code class="d-block pt-3">value: {{ example3 }}</code>
        </u-col>
        <u-col>
          <h5>(precision unrestricted)</h5>
          <u-number-input v-model="example4" :precision="null" hide-details="auto"></u-number-input>
          <code class="d-block pt-3">value: {{ example4 }}</code>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The precision prop enforces strict precision. It is expected to be an integer value in
 * range between 0 and 15. Input will prevent user from typing or pasting an invalid value.
 */
export const Precision: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UNumberInput, URow },
  setup() {
    const example1 = ref(4.052);
    const example2 = ref(123);
    const example3 = ref(25.5);
    const example4 = ref(0.052);

    return { example1, example2, example3, example4 };
  },
  template: precisionTemplate,
});

Precision.parameters = {
  docs: {
    source: {
      code: `<template>${precisionTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const example1 = ref(4.052)
  const example2 = ref(123)
  const example3 = ref(25.5)
  const example4 = ref(0.052)
</script>`,
    },
  },
};
