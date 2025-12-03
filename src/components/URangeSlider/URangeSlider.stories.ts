import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UCard, UCardText, UCol, UIcon, URangeSlider, URow, UTextField } from '../index';

interface ComponentArgs {
  appendIcon?: string | unknown;
  baseColor?: string;
  centerAffix?: boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  elevation?: string | number;
  error?: boolean;
  errorMessages?: string | string[];
  focused?: boolean;
  glow?: boolean;
  hideDetails?: boolean | 'auto';
  hideSpinButtons?: boolean;
  hint?: string;
  iconColor?: string | boolean;
  id?: string;
  label?: string;
  max?: string | number;
  maxErrors?: string | number;
  maxWidth?: string | number;
  messages?: string | string[];
  min?: string | number;
  minWidth?: string | number;
  modelValue?: (string | number)[];
  name?: string;
  noKeyboard?: boolean;
  persistentHint?: boolean;
  prependIcon?: string | unknown;
  readonly?: boolean;
  reverse?: boolean;
  ripple?: boolean;
  rounded?: string | number | boolean;
  rules?: unknown[];
  showTicks?: boolean | 'always';
  step?: string | number;
  strict?: boolean;
  theme?: string;
  thumbColor?: string;
  thumbLabel?: boolean | 'always';
  thumbSize?: string | number;
  ticks?: number[] | Record<number, string>;
  tickSize?: string | number;
  tile?: boolean;
  trackColor?: string;
  trackFillColor?: string;
  trackSize?: string | number;
  validateOn?: string;
  validationValue?: unknown;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Range Sliders',
  component: URangeSlider,
  parameters: {
    docs: {
      description: {
        component:
          'The u-range-slider component complements the u-slider component nicely when you are in need of representing a range of values.',
      },
      import: `import { URangeSlider } from '@ultimate/core-ui/components'`,
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

          return `<u-range-slider${attrsString}></u-range-slider>`;
        },
      },
    },
    Vuetify: {
      component: 'VRangeSlider',
      content:
        'Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.',
      link: 'https://vuetifyjs.com/en/components/range-sliders/',
    },
    Primary: {
      description:
        'Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-range-slider',
            link: 'https://vuetifyjs.com/en/api/v-range-slider/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    appendIcon: {
      control: 'text',
      description: 'Creates a v-icon component after default content in the append slot.',
      table: {
        type: { summary: 'string | Component' },
        defaultValue: { summary: 'undefined' },
      },
    },
    baseColor: {
      control: 'text',
      description: 'Sets the color of the input when it is not focused.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    centerAffix: {
      control: 'boolean',
      description: 'Vertically align appendInner, prependInner, clearIcon and label in the center.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    color: {
      control: 'text',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Changes the direction of the input.',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    elevation: {
      control: 'text',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '2' },
      },
    },
    error: {
      control: 'boolean',
      description: 'Puts the input in a manual error state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    errorMessages: {
      control: 'text',
      description: 'Puts the input in an error state and passes through custom error messages.',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    focused: {
      control: 'boolean',
      description: 'Forces a focused state styling on the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    glow: {
      control: 'boolean',
      description:
        'Makes prepend/append icons full opacity when the input is focused and apply color.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideDetails: {
      control: 'select',
      options: [false, true, 'auto'],
      description: 'Hides hint and validation errors.',
      table: {
        type: { summary: "boolean | 'auto'" },
        defaultValue: { summary: 'false' },
      },
    },
    hideSpinButtons: {
      control: 'boolean',
      description: 'Hides spin buttons on the input when type is set to number.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hint: {
      control: 'text',
      description: 'Displays hint text below the input when focused.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconColor: {
      control: 'text',
      description: 'Sets the color of the prepend/append icons.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    id: {
      control: 'text',
      description: 'Sets the DOM id on the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    label: {
      control: 'text',
      description: 'Sets the text of the v-label or v-field-label component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    max: {
      control: 'text',
      description: 'Sets the maximum allowed value.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '100' },
      },
    },
    maxErrors: {
      control: 'text',
      description: 'Control the maximum number of shown errors from validation.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '1' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    messages: {
      control: 'text',
      description: 'Displays a list of messages or a single message if using a string.',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    min: {
      control: 'text',
      description: 'Sets the minimum allowed value.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'object',
      description: 'The v-model value of the component.',
      table: {
        type: { summary: '(string | number)[]' },
        defaultValue: { summary: '[0, 0]' },
      },
    },
    name: {
      control: 'text',
      description: "Sets the component's name attribute.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    noKeyboard: {
      control: 'boolean',
      description: 'FOR INTERNAL USE ONLY Ignore keyboard events.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    persistentHint: {
      control: 'boolean',
      description: 'Forces hint to always be visible.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    prependIcon: {
      control: 'text',
      description: 'Prepends an icon to the component, uses the same syntax as v-icon.',
      table: {
        type: { summary: 'string | Component' },
        defaultValue: { summary: 'undefined' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts input in readonly state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    reverse: {
      control: 'boolean',
      description: 'Reverses the slider direction.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius applied to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    rules: {
      control: 'object',
      description:
        'Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.',
      table: {
        type: { summary: 'ValidationRule[]' },
        defaultValue: { summary: '[]' },
      },
    },
    showTicks: {
      control: 'select',
      options: [false, true, 'always'],
      description:
        "Show track ticks. If true it shows ticks when using slider. If set to 'always' it always shows ticks.",
      table: {
        type: { summary: "boolean | 'always'" },
        defaultValue: { summary: 'false' },
      },
    },
    step: {
      control: 'text',
      description: 'If greater than 0, sets step interval for ticks.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    strict: {
      control: 'boolean',
      description: 'Disallows dragging the ending thumb past the starting thumb and vice versa.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    thumbColor: {
      control: 'text',
      description: 'Sets the thumb and thumb label color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    thumbLabel: {
      control: 'select',
      options: [undefined, false, true, 'always'],
      description:
        "Show thumb label. If true it shows label when using slider. If set to 'always' it always shows label.",
      table: {
        type: { summary: "boolean | 'always'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    thumbSize: {
      control: 'text',
      description: 'Controls the size of the thumb label.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '20' },
      },
    },
    ticks: {
      control: 'object',
      description:
        "Show track ticks. If true it shows ticks when using slider. If set to 'always' it always shows ticks.",
      table: {
        type: { summary: 'number[] | Record<number, string>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tickSize: {
      control: 'text',
      description: 'Controls the size of ticks.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '2' },
      },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    trackColor: {
      control: 'text',
      description: "Sets the track's color.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    trackFillColor: {
      control: 'text',
      description: "Sets the track's fill color.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    trackSize: {
      control: 'text',
      description: "Sets the track's size (height).",
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '4' },
      },
    },
    validateOn: {
      control: 'select',
      options: [
        'eager',
        'lazy',
        'blur',
        'input',
        'submit',
        'invalid-input',
        'blur lazy',
        'input lazy',
        'submit lazy',
        'invalid-input lazy',
        'blur eager',
        'input eager',
        'submit eager',
        'invalid-input eager',
        'lazy blur',
        'lazy input',
        'lazy submit',
        'lazy invalid-input',
        'eager blur',
        'eager input',
        'eager submit',
        'eager invalid-input',
      ],
      description: 'Change what type of event triggers validation to run.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    validationValue: {
      control: 'text',
      description: 'The value used when applying validation rules.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
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
  components: { URangeSlider },
  setup() {
    return { args };
  },
  template: '<u-range-slider v-bind="args"></u-range-slider>',
});

Default.args = {
  color: 'primary',
  modelValue: [25, 75],
} as ComponentArgs;

// Strict Story
const strictTemplate = `
    <u-card>
      <u-card-text>
        <u-range-slider
          v-model="value"
          strict
        ></u-range-slider>
      </u-card-text>
    </u-card>
  `;

/**
 * With the strict prop applied, the thumbs of the range slider are not allowed to cross
 * over each other.
 */
export const Strict: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardText, URangeSlider },
  setup() {
    const value = ref([30, 60]);
    return { value };
  },
  template: strictTemplate,
});

Strict.parameters = {
  docs: {
    source: {
      code: `<template>${strictTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref([20, 40])
</script>
      `,
    },
  },
};

// Disabled Story
const disabledTemplate = `
    <u-row>
      <u-col cols="12">
        <u-range-slider
          v-model="value"
          label="Disabled"
          disabled
        ></u-range-slider>
      </u-col>
    </u-row>
  `;

/**
 * You cannot interact with disabled sliders.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { UCol, URow, URangeSlider },
  setup() {
    const value = ref([30, 60]);
    return { value };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>${disabledTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref([30, 60])
</script>
      `,
    },
  },
};

// MinAndMax Story
const minAndMaxTemplate = `
    <u-range-slider
      v-model="range"
      :max="10"
      :min="-10"
      :step="1"
      class="align-center"
      hide-details
    >
      <template v-slot:prepend>
        <u-text-field
          v-model="range[0]"
          density="compact"
          style="width: 70px"
          type="number"
          variant="outlined"
          hide-details
          single-line
        ></u-text-field>
      </template>
      <template v-slot:append>
        <u-text-field
          v-model="range[1]"
          density="compact"
          style="width: 70px"
          type="number"
          variant="outlined"
          hide-details
          single-line
        ></u-text-field>
      </template>
    </u-range-slider>
  `;

/**
 * You can set min and max values of sliders.
 */
export const MinAndMax: StoryFn<ComponentArgs> = () => ({
  components: { URangeSlider, UTextField },
  setup() {
    const range = ref([-5, 5]);
    return { range };
  },
  template: minAndMaxTemplate,
});

MinAndMax.parameters = {
  docs: {
    source: {
      code: `<template>${minAndMaxTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const range = ref([-5, 5])
</script>
      `,
    },
  },
};

// Step Story
const stepTemplate = `
    <u-range-slider
      v-model="value"
      step="10"
      thumb-label="always"
    ></u-range-slider>
  `;

/**
 * u-range-slider can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.
 */
export const Step: StoryFn<ComponentArgs> = () => ({
  components: { URangeSlider },
  setup() {
    const value = ref([20, 40]);
    return { value };
  },
  template: stepTemplate,
});

Step.parameters = {
  docs: {
    source: {
      code: `<template>${stepTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref([20, 40])
</script>
      `,
    },
  },
};

// VerticalSliders Story
const verticalSlidersTemplate = `
    <u-range-slider
      v-model="value"
      direction="vertical"
    ></u-range-slider>
  `;

/**
 * You can use the vertical prop to switch sliders to a vertical orientation. If you need to change the height of a vertical slider, be aware that u-range-slider is not a simple HTML element. This means plain CSS on the component will not affect the correct internal element. Instead, you must use a deep selector.
 */
export const VerticalSliders: StoryFn<ComponentArgs> = () => ({
  components: { URangeSlider },
  setup() {
    const value = ref([20, 40]);
    return { value };
  },
  template: verticalSlidersTemplate,
});

VerticalSliders.parameters = {
  docs: {
    source: {
      code: `<template>${verticalSlidersTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref([20, 40])
</script>
      `,
    },
  },
};

// ThumbLabel Story
const thumbLabelTemplate = `
    <u-row>
      <u-col class="pa-12">
        <u-range-slider
          :model-value="[0, 1]"
          :step="1"
          :ticks="seasons"
          max="3"
          min="0"
          show-ticks="always"
          thumb-label="always"
          tick-size="4"
        >
          <template v-slot:thumb-label="{ modelValue }">
            <u-icon :icon="season(modelValue)" theme="dark"></u-icon>
          </template>
        </u-range-slider>
      </u-col>
    </u-row>
  `;

/**
 * Using the tick-labels prop along with the thumb-label slot, you can create a very customized solution.
 */
export const ThumbLabel: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UIcon, URangeSlider, URow },
  setup() {
    const seasons = ref({
      0: 'Winter',
      1: 'Spring',
      2: 'Summer',
      3: 'Fall',
    });
    const icons = ref([
      'hugeicons:snow',
      'hugeicons:leaf-01',
      'hugeicons:fire',
      'hugeicons:water-energy',
    ]);
    function season(val: number) {
      return icons.value[val];
    }
    return { seasons, icons, season };
  },
  template: thumbLabelTemplate,
});

ThumbLabel.parameters = {
  docs: {
    source: {
      code: `<template>${thumbLabelTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const seasons = ref({
    0: 'Winter',
    1: 'Spring',
    2: 'Summer',
    3: 'Fall',
  })
  const icons = ref([
    'hugeicons:snow',
    'hugeicons:leaf-01',
    'hugeicons:fire',
    'hugeicons:water-energy',
  ])
  function season (val) {
    return icons.value[val]
  }
</script>
      `,
    },
  },
};
