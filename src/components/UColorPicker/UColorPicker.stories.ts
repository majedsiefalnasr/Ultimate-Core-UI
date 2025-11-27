import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UCol, UColorPicker, UContainer, URow, USelect, USheet } from '../index';

interface ComponentArgs {
  // Core props
  modelValue?: string | Record<string, unknown>;
  mode?: 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa';
  modes?: ('rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa')[];
  hideCanvas?: boolean;
  hideInputs?: boolean;
  hideSliders?: boolean;
  hideHeader?: boolean;
  hideTitle?: boolean;
  hideEyeDropper?: boolean;
  title?: string;
  canvasHeight?: string | number;
  dotSize?: string | number;
  showSwatches?: boolean;
  swatches?: unknown[][];
  swatchesMaxHeight?: string | number;
  eyeDropperIcon?: string;
  landscape?: boolean;
  divided?: boolean;
  width?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  bgColor?: string;
  color?: string;
  elevation?: string | number;
  rounded?: string | number | boolean;
  border?: string | number | boolean;
  tile?: boolean;
  disabled?: boolean;
  location?: string;
  position?: 'fixed' | 'static' | 'relative' | 'absolute' | 'sticky';
  tag?: string;
  theme?: string;
  content?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Pickers/Color Pickers',
  component: UColorPicker,
  parameters: {
    docs: {
      description: {
        component:
          'The u-color-picker allows you to select a color using a variety of input methods.',
      },
      import: `import { UColorPicker } from '@ultimate/core-ui/components'`,
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

          return `<u-color-picker${attrsString}></u-color-picker>`;
        },
      },
    },
    Vuetify: {
      component: 'VColorPicker',
      content: 'The u-color-picker allows you to select a color using a variety of input methods.',
      link: 'https://vuetifyjs.com/en/components/color-pickers/',
    },
    Primary: {
      description:
        'The u-color-picker allows you to select a color using a variety of input methods.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-color-picker',
            link: 'https://vuetifyjs.com/en/api/v-color-picker/',
          },
          description: 'Primary component',
        },
      ],
    },
  },
  argTypes: {
    // Core props
    modelValue: {
      control: 'color',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'string | Record<string, unknown>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    mode: {
      control: 'select',
      options: ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa'],
      description: 'The current selected input type. Syncable with u-model:mode.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba' } },
    },
    modes: {
      control: 'object',
      description: 'Sets available input types.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: "['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa']" },
      },
    },

    // Display options
    hideCanvas: {
      control: 'boolean',
      description: 'Hides canvas.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideInputs: {
      control: 'boolean',
      description: 'Hides inputs.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideSliders: {
      control: 'boolean',
      description: 'Hides sliders.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideHeader: {
      control: 'boolean',
      description: 'Hide the picker header.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    hideTitle: {
      control: 'boolean',
      description: 'Hide the picker title.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideEyeDropper: {
      control: 'boolean',
      description: 'Hides eyedropper icon.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },

    // Canvas
    canvasHeight: {
      control: 'number',
      description: 'Height of canvas.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '150' } },
    },
    dotSize: {
      control: 'number',
      description: 'Changes the size of the selection dot on the canvas.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '10' } },
    },

    // Swatches
    showSwatches: {
      control: 'boolean',
      description: 'Displays color swatches.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    swatches: {
      control: 'object',
      description:
        'Sets the available color swatches to select from. 2D array of rows and columns, accepts any color format the picker does.',
      table: { type: { summary: 'array[][]' }, defaultValue: { summary: 'undefined' } },
    },
    swatchesMaxHeight: {
      control: 'number',
      description: 'Sets the maximum height of the swatches section.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '150' } },
    },

    // Eye dropper
    eyeDropperIcon: {
      control: 'text',
      description: 'Icon used to trigger EyeDropper API.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$eyeDropper' } },
    },

    // Layout
    landscape: {
      control: 'boolean',
      description: 'Puts the picker into landscape mode.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    divided: {
      control: 'boolean',
      description: 'Adds a divider between the header and controls.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'text',
      description: 'Sets the width of the color picker.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },

    // Styling
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    bgColor: {
      control: 'color',
      description: "Applies specified color to the control's background.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius applied to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    border: {
      control: 'text',
      description: 'Applies utility border classes to the component.',
      table: { type: { summary: 'string | number | boolean' }, defaultValue: { summary: 'false' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },

    // State
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UColorPicker },
  setup() {
    return { args };
  },
  template: '<u-color-picker v-bind="args"></u-color-picker>',
});

Default.args = {} as ComponentArgs;

// CustomizingLook Story Template
const customizingLookTemplate = `<div class="d-flex justify-space-around">
  <u-color-picker
    v-model="c1"
    hide-canvas
    hide-sliders
  ></u-color-picker>

  <u-color-picker
    v-model="c2"
    hide-inputs
    show-swatches
  ></u-color-picker>
</div>`;

/**
 * There are a number of props available to help you customize the component by hiding
 * or showing the various parts of the picker. You can independently hide the canvas,
 * the sliders, and the inputs. You can also show a collection of swatches.
 */
export const CustomizingLook: StoryFn<ComponentArgs> = () => ({
  components: { UColorPicker },
  setup() {
    const c1 = ref('#ff00ff');
    const c2 = ref('#00ff00');
    return { c1, c2 };
  },
  template: customizingLookTemplate,
});

CustomizingLook.parameters = {
  docs: {
    source: {
      code: `<template>${customizingLookTemplate}</template>
<script setup>
import { ref } from 'vue'
const c1 = ref('#ff00ff')
const c2 = ref('#00ff00')
</script>`,
    },
  },
};

// Elevation Story Template
const elevationTemplate = `<div class="d-flex justify-space-around">
  <u-color-picker v-model="picker" elevation="0"></u-color-picker>
  <u-color-picker v-model="picker" elevation="15"></u-color-picker>
</div>`;

/**
 * Adjust the elevation of the u-color-picker component using the elevation or flat prop.
 * The flat is equivalent to setting elevation to 0.
 */
export const Elevation: StoryFn<ComponentArgs> = () => ({
  components: { UColorPicker },
  setup() {
    const picker = ref(null);
    return { picker };
  },
  template: elevationTemplate,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<template>${elevationTemplate}</template>
<script setup>
import { ref } from 'vue'
const picker = ref(null)
</script>`,
    },
  },
};

// Mode Story Template
const modeTemplate = `<div class="d-flex justify-space-around">
  <u-color-picker v-model="color" :modes="['rgba']"></u-color-picker>

  <div class="d-flex flex-column">
    <u-color-picker v-model="color" v-model:mode="mode"></u-color-picker>
    <u-select v-model="mode" :items="modes" style="max-width: 300px"></u-select>
  </div>
</div>`;

/**
 * You can specify which input modes are available to your users with the modes prop.
 * If you only set a single mode, then the mode toggle will automatically be hidden.
 * You can also control the current mode with the mode v-model.
 */
export const Mode: StoryFn<ComponentArgs> = () => ({
  components: { UColorPicker, USelect },
  setup() {
    const color = ref('#ff00ff');
    const mode = ref('hsla');
    const modes = ref(['hsla', 'rgba', 'hexa']);
    return { color, mode, modes };
  },
  template: modeTemplate,
});

Mode.parameters = {
  docs: {
    source: {
      code: `<template>${modeTemplate}</template>
<script setup>
import { ref } from 'vue'
const color = ref('#ff00ff')
const mode = ref('hsla')
const modes = ref(['hsla','rgba','hexa'])
</script>`,
    },
  },
};

// Model Story Template
const modelTemplate = `<u-container>
  <u-row>
    <u-col cols="12" md="4">
      <u-btn class="my-4" block @click="color = null">null</u-btn>
      <u-btn class="my-4" block @click="color = '#ff00ff'">hex</u-btn>
      <u-btn class="my-4" block @click="color = '#ff00ffff'">hexa</u-btn>
      <u-btn class="my-4" block @click="color = { r: 255, g: 0, b: 255, a: 1 }">rgba</u-btn>
      <u-btn class="my-4" block @click="color = { h: 300, s: 1, l: 0.5, a: 1 }">hsla</u-btn>
      <u-btn class="my-4" block @click="color = { h: 300, s: 1, v: 1, a: 1 }">hsva</u-btn>
    </u-col>
    <u-col class="d-flex justify-center">
      <u-color-picker v-model="color"></u-color-picker>
    </u-col>
    <u-col cols="12" md="4">
      <u-sheet class="pa-4">
        <pre>{{ color }}</pre>
      </u-sheet>
    </u-col>
  </u-row>
</u-container>`;

/**
 * The u-color-picker uses the v-model prop to control the color displayed.
 * It supports hex strings such as #FF00FF and #FF00FF00, and objects representing
 * RGBA, HSLA and HSVA values. The component will try to emit the color in the same
 * format that was provided. If the value is null or an unsupported format, then the
 * u-color-picker will default to emitting hex colors.
 */
export const Model: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UColorPicker, UCol, UContainer, URow, USheet },
  setup() {
    const color = ref(null);
    return { color };
  },
  template: modelTemplate,
});

Model.parameters = {
  docs: {
    source: {
      code: `<template>${modelTemplate}</template>
<script setup>
import { ref } from 'vue'
const color = ref(null)
</script>`,
    },
  },
};

// Swatches Story Template
const swatchesTemplate = `<div class="d-flex justify-space-around">
  <u-color-picker class="ma-2" swatches-max-height="400px" show-swatches></u-color-picker>
  <u-color-picker :swatches="swatches" class="ma-2" show-swatches></u-color-picker>
</div>`;

/**
 * Using the show-swatches prop you can display an array of color swatches that users
 * can pick from. It is also possible to customize what colors are shown using the
 * swatches prop. This prop accepts a two-dimensional array, where the first dimension
 * defines a column, and second dimension defines the swatches from top to bottom by
 * providing rgba hex strings. You can also set the max height of the swatches section
 * with the swatches-max-height prop.
 */
export const Swatches: StoryFn<ComponentArgs> = () => ({
  components: { UColorPicker },
  setup() {
    const swatches = [
      ['#FF0000', '#AA0000', '#550000'],
      ['#FFFF00', '#AAAA00', '#555500'],
      ['#00FF00', '#00AA00', '#005500'],
      ['#00FFFF', '#00AAAA', '#005555'],
      ['#0000FF', '#0000AA', '#000055'],
    ];
    return { swatches };
  },
  template: swatchesTemplate,
});

Swatches.parameters = {
  docs: {
    source: {
      code: `<template>${swatchesTemplate}</template>
<script setup>
const swatches = [
  ['#FF0000', '#AA0000', '#550000'],
  ['#FFFF00', '#AAAA00', '#555500'],
  ['#00FF00', '#00AA00', '#005500'],
  ['#00FFFF', '#00AAAA', '#005555'],
  ['#0000FF', '#0000AA', '#000055'],
]
</script>`,
    },
  },
};
