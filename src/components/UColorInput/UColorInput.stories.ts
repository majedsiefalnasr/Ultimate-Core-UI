import type { Meta, StoryFn } from '@storybook/vue3';

import { UCol, UColorInput, UContainer, URow } from '../index';

interface ComponentArgs {
  label?: string;
  modelValue?: string | Record<string, unknown>;
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  colorPip?: boolean;
  hidePip?: boolean;
  pipLocation?: 'append' | 'prepend' | 'prepend-inner' | 'append-inner';
  pipVariant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  pipIcon?: string;
  mode?: 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa';
  modes?: ('rgb' | 'rgba' | 'hsl' | 'hsla' | 'hex' | 'hexa')[];
  hideActions?: boolean;
  hideCanvas?: boolean;
  hideInputs?: boolean;
  hideSliders?: boolean;
  showSwatches?: boolean;
  swatches?: unknown[][];
  swatchesMaxHeight?: string | number;
  canvasHeight?: string | number;
  dotSize?: string | number;
  width?: string | number;
  hideEyeDropper?: boolean;
  eyeDropperIcon?: string;
  hideHeader?: boolean;
  hideTitle?: boolean;
  title?: string;
  active?: boolean;
  clearable?: boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  divided?: boolean;
  error?: boolean;
  errorMessages?: string | string[];
  flat?: boolean;
  focused?: boolean;
  glow?: boolean;
  hideDetails?: boolean | 'auto';
  hideSpinButtons?: boolean;
  hint?: string;
  iconColor?: string | boolean;
  id?: string;
  loading?: string | boolean;
  maxErrors?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  messages?: string | string[];
  name?: string;
  persistentClear?: boolean;
  persistentCounter?: boolean;
  persistentHint?: boolean;
  persistentPlaceholder?: boolean;
  placeholder?: string;
  prefix?: string;
  readonly?: boolean | null;
  reverse?: boolean;
  rounded?: string | number | boolean;
  rules?: unknown[];
  singleLine?: boolean;
  suffix?: string;
  type?: string;
  validateOn?: string;
  validationValue?: unknown;
  elevation?: string | number;
  landscape?: boolean;
  position?: 'fixed' | 'relative' | 'static' | 'absolute' | 'sticky';
  tag?: string;
  theme?: string;
  tile?: boolean;
  border?: string | number | boolean;
  centerAffix?: boolean;
  content?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Color Inputs',
  component: UColorInput,
  parameters: {
    docs: {
      description: {
        component: 'The u-color-input component combines a text field with a color picker.',
      },
      import: `import { UColorInput } from '@ultimate/core-ui/components'`,
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

          return `<u-color-input${attrsString}></u-color-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VColorInput',
      content:
        'At its core, the v-color-input component is a basic container that extends v-text-field.',
      link: 'https://vuetifyjs.com/en/components/color-inputs/',
    },
    Primary: {
      description: 'The u-color-input component combines a text field with a color picker.',
    },
    api: {
      data: [
        {
          element: { title: 'v-color-input', link: 'https://vuetifyjs.com/en/api/v-color-input/' },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-color-picker',
            link: 'https://vuetifyjs.com/en/api/v-color-picker/',
          },
          description: 'Color picker component',
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
      description: 'Sets the text of the v-label or v-field-label component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      control: 'color',
      description: 'Represents the committed v-model value',
      table: {
        type: { summary: 'string | Record<string, unknown>' },
        defaultValue: { summary: 'undefined' },
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
      description: 'Applies a distinct style to the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'filled' } },
    },
    colorPip: {
      control: 'boolean',
      description: 'Synchronize pip color with current value',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hidePip: {
      control: 'boolean',
      description: 'Hide pip icon',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    pipLocation: {
      control: 'select',
      options: ['append', 'prepend', 'prepend-inner', 'append-inner'],
      description: 'Move pip icon to a different slot',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'prepend' } },
    },
    pipVariant: {
      control: 'select',
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Variant of the pip control',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'text' } },
    },
    pipIcon: {
      control: 'text',
      description: 'The icon used for pip',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$color' } },
    },
    mode: {
      control: 'select',
      options: ['rgb', 'rgba', 'hsl', 'hsla', 'hex', 'hexa'],
      description: 'The current selected input type. Syncable with v-model:mode.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'rgba' } },
    },
    hideActions: {
      control: 'boolean',
      description: 'Prevent showing the default actions buttons',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
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
    showSwatches: {
      control: 'boolean',
      description: 'Displays color swatches.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
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
    width: {
      control: 'text',
      description: 'Sets the width of the color picker.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    hideEyeDropper: {
      control: 'boolean',
      description: 'Hides eyedropper icon.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    eyeDropperIcon: {
      control: 'text',
      description: 'Icon used to trigger EyeDropper API.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$eyeDropper' } },
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
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    active: {
      control: 'boolean',
      description:
        'Controls the active state of the item. This is typically used to highlight the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Allows for the component to be cleared.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'default' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the input.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    error: {
      control: 'boolean',
      description: 'Puts the input in a manual error state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideDetails: {
      control: 'select',
      options: [false, true, 'auto'],
      description:
        "Hides hint and validation errors. When set to auto messages will be rendered only if there's a message to display.",
      table: { type: { summary: 'boolean | "auto"' }, defaultValue: { summary: 'false' } },
    },
    hint: {
      control: 'text',
      description: 'Displays hint text below the input when focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    loading: {
      control: 'boolean',
      description: 'Displays linear progress bar.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts input in readonly state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UColorInput },
  setup() {
    return { args };
  },
  template: '<u-color-input v-bind="args"></u-color-input>',
});

Default.args = {
  label: 'Color input',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<template><u-color-input label="Color input"></u-color-input></template>`,
    },
  },
};

// Pip location story
const pipLocationTemplate = `
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="prepend-inner"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="append-inner"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="append"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="I need no icon"
          hide-pip
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
  `;

/**
 * You can move the pip icon within the input by utilizing the pip-location or hide
 * it entirely with hide-pip.
 */
export const PipLocation: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: pipLocationTemplate,
});

PipLocation.parameters = {
  docs: {
    source: {
      code: `<template>${pipLocationTemplate}</template>`,
    },
  },
};

// Color pip story
const colorPipTemplate = `
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip"
          model-value="#7C0799"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip (tonal)"
          model-value="#1493DB"
          pip-variant="tonal"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip (flat)"
          model-value="#74DB14"
          pip-variant="flat"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
  `;

/**
 *The color-pip is a boolean that determines whether the pip icon color matches 
 the selected color.
 */
export const ColorPip: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: colorPipTemplate,
});

ColorPip.parameters = {
  docs: {
    source: {
      code: `<template>${colorPipTemplate}</template>`,
    },
  },
};

// Pip variant story
const pipVariantTemplate = `
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-variant="tonal"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-variant="outlined"
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
  `;

/**
 * The pip-variant lets you further customize the pip icon.
 */
export const PipVariant: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: pipVariantTemplate,
});

PipVariant.parameters = {
  docs: {
    source: {
      code: `<template>${pipVariantTemplate}</template>`,
    },
  },
};
