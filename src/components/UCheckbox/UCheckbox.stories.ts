import type { Meta, StoryFn } from '@storybook/vue3';
import type { FunctionalComponent } from 'vue';
import { ref } from 'vue';

import {
  UCard,
  UCardText,
  UCheckbox,
  UCheckboxBtn,
  UCol,
  UContainer,
  URow,
  UTextField,
  UTooltip,
} from '../index';

interface ComponentArgs {
  appendIcon?: string | (string | [string, number])[] | FunctionalComponent;
  baseColor?: string;
  centerAffix?: boolean;
  color?: string;
  defaultsTarget?: string;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  error?: boolean;
  errorMessages?: string | string[];
  falseIcon?: string | (string | [string, number])[] | FunctionalComponent;
  falseValue?: unknown;
  focused?: boolean;
  glow?: boolean;
  hideDetails?: boolean | 'auto';
  hideSpinButtons?: boolean;
  hint?: string;
  iconColor?: string | boolean;
  id?: string;
  indeterminate?: boolean;
  indeterminateIcon?: string | (string | [string, number])[] | FunctionalComponent;
  label?: string;
  maxErrors?: string | number;
  maxWidth?: string | number;
  messages?: string | string[];
  minWidth?: string | number;
  modelValue?: unknown;
  multiple?: boolean;
  name?: string;
  persistentHint?: boolean;
  prependIcon?: string | (string | [string, number])[] | FunctionalComponent;
  readonly?: boolean;
  ripple?: boolean | { class: string };
  rules?: ((value: unknown) => string | boolean)[];
  theme?: string;
  trueIcon?: string | (string | [string, number])[] | FunctionalComponent;
  trueValue?: unknown;
  type?: string;
  validateOn?:
    | 'eager'
    | 'lazy'
    | 'blur'
    | 'input'
    | 'submit'
    | 'invalid-input'
    | 'blur lazy'
    | 'input lazy'
    | 'submit lazy'
    | 'invalid-input lazy'
    | 'blur eager'
    | 'input eager'
    | 'submit eager'
    | 'invalid-input eager'
    | 'lazy blur'
    | 'lazy input'
    | 'lazy submit'
    | 'lazy invalid-input'
    | 'eager blur'
    | 'eager input'
    | 'eager submit'
    | 'eager invalid-input';
  validationValue?: unknown;
  value?: unknown;
  valueComparator?: (a: unknown, b: unknown) => boolean;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Checkboxes',
  component: UCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          'The u-checkbox component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists.',
      },
      import: `import { UCheckbox } from '@ultimate/core-ui/components'`,
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

          return `<u-checkbox${attrsString}></u-checkbox>`;
        },
      },
    },
    Vuetify: {
      component: 'VCheckbox',
      content:
        "This component is built on top of Vuetify's VCheckbox component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/checkboxes/',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-checkbox',
            link: 'https://vuetifyjs.com/en/api/v-checkbox/',
          },
          description: 'Primary component',
        },
      ],
    },
  },
  argTypes: {
    appendIcon: {
      control: 'text',
      description: 'Creates a v-icon component after default content in the append slot.',
      table: {
        type: { summary: 'string | Icon' },
        defaultValue: { summary: 'undefined' },
      },
    },
    baseColor: {
      control: 'color',
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
      control: 'color',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    defaultsTarget: {
      control: 'text',
      description: 'The target component to provide defaults values for.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Changes the direction of the input.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
      description:
        'Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop.',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    falseIcon: {
      control: 'text',
      description: 'The icon used when inactive.',
      table: {
        type: { summary: 'string | Icon' },
        defaultValue: { summary: '$checkboxOff' },
      },
    },
    falseValue: {
      control: 'text',
      description: 'Sets value for falsy state.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
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
      control: { type: 'select' },
      options: [false, true, 'auto'],
      description:
        "Hides hint and validation errors. When set to auto messages will be rendered only if there's a message to display.",
      table: {
        type: { summary: 'boolean | auto' },
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
      description:
        'Displays hint text below the input when focused. Force this always open with the persistent-hint property.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconColor: {
      control: 'color',
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
    indeterminate: {
      control: 'boolean',
      description: 'Sets an indeterminate state for the checkbox.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    indeterminateIcon: {
      control: 'text',
      description: 'The icon used when in an indeterminate state.',
      table: {
        type: { summary: 'string | Icon' },
        defaultValue: { summary: '$checkboxIndeterminate' },
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
    maxErrors: {
      control: 'number',
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
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'text',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: 'undefined' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Changes expected model to an array.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
        type: { summary: 'string | Icon' },
        defaultValue: { summary: 'undefined' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts input in readonly state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'true' },
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
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    trueIcon: {
      control: 'text',
      description: 'The icon used when active.',
      table: {
        type: { summary: 'string | Icon' },
        defaultValue: { summary: '$checkboxOn' },
      },
    },
    trueValue: {
      control: 'text',
      description: 'Sets value for truthy state.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
    },
    type: {
      control: 'text',
      description: 'Provides the default type for children selection controls.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    validateOn: {
      control: 'text',
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
    value: {
      control: 'text',
      description:
        'The value used when the component is selected in a group. If not provided, a unique ID will be used.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
    },
    valueComparator: {
      control: 'object',
      description: 'Apply a custom comparison algorithm to compare model-value and values.',
      table: {
        type: { summary: 'function' },
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
  components: { UCheckbox },
  setup() {
    return { args };
  },
  template: '<u-checkbox v-bind="args"></u-checkbox>',
});

Default.args = {
  label: 'Checkbox',
} as ComponentArgs;

// Color Story
const colorsTemplate = `
  <div>
    <u-container fluid>
      <u-row>
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="red" label="red" value="red" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="red-darken-3" label="red-darken-3" value="red-darken-3" hide-details></u-checkbox>
        </u-col>
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="indigo" label="indigo" value="indigo" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3" hide-details></u-checkbox>
        </u-col>
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="orange" label="orange" value="orange" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="orange-darken-3" label="orange-darken-3" value="orange-darken-3" hide-details></u-checkbox>
        </u-col>
      </u-row>
      <u-row class="mt-12">
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="primary" label="primary" value="primary" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="secondary" label="secondary" value="secondary" hide-details></u-checkbox>
        </u-col>
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="success" label="success" value="success" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="info" label="info" value="info" hide-details></u-checkbox>
        </u-col>
        <u-col cols="12" md="4" sm="4">
          <u-checkbox v-model="ex4" color="warning" label="warning" value="warning" hide-details></u-checkbox>
          <u-checkbox v-model="ex4" color="error" label="error" value="error" hide-details></u-checkbox>
        </u-col>
      </u-row>
    </u-container>
  </div>
`;

/**
 *
 */
export const Colors: StoryFn<ComponentArgs> = (args) => ({
  components: { UCheckbox, UContainer, URow, UCol },
  setup() {
    const ex4 = ref([
      'red',
      'indigo',
      'orange',
      'primary',
      'secondary',
      'success',
      'info',
      'warning',
      'error',
      'red-darken-3',
      'indigo-darken-3',
      'orange-darken-3',
    ]);
    return { args, ex4 };
  },
  template: colorsTemplate,
});

Colors.parameters = {
  docs: {
    source: {
      code: `
<template>${colorsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const ex4 = ref(['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red-darken-3', 'indigo-darken-3', 'orange-darken-3'])
</script>`,
    },
  },
};

// States Story
const statesTemplate = `
  <u-container fluid>
    <u-row>
      <u-col cols="4">on</u-col>
      <u-col cols="4">off</u-col>
      <u-col cols="4">indeterminate</u-col>
    </u-row>
    <u-row>
      <u-col cols="4">
        <u-checkbox :model-value="true"></u-checkbox>
      </u-col>
      <u-col cols="4">
        <u-checkbox :model-value="false"></u-checkbox>
      </u-col>
      <u-col cols="4">
        <u-checkbox indeterminate></u-checkbox>
      </u-col>
    </u-row>
    <u-row>
      <u-col cols="4">on disabled</u-col>
      <u-col cols="4">off disabled</u-col>
      <u-col cols="4">indeterminate disabled</u-col>
    </u-row>
    <u-row>
      <u-col cols="4">
        <u-checkbox :model-value="true" disabled></u-checkbox>
      </u-col>
      <u-col cols="4">
        <u-checkbox :model-value="false" disabled></u-checkbox>
      </u-col>
      <u-col cols="4">
        <u-checkbox disabled indeterminate></u-checkbox>
      </u-col>
    </u-row>
  </u-container>
`;

/**
 *
 */
export const States: StoryFn<ComponentArgs> = (args) => ({
  components: { UCheckbox, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: statesTemplate,
});

States.parameters = {
  docs: {
    source: {
      code: `
<template>${statesTemplate}</template>`,
    },
  },
};

// Label Slot Story
const labelSlotTemplate = `
  <u-container fluid>
    <u-checkbox v-model="checkbox">
      <template #label>
        <div>
          I agree that
          <u-tooltip location="bottom">
            <template #activator="{ props }">
              <a
                href="https://vuetifyjs.com"
                target="_blank"
                v-bind="props"
                @click.stop
              >
                Vuetify
              </a>
            </template>
            Opens in new window
          </u-tooltip>
          is awesome
        </div>
      </template>
    </u-checkbox>
  </u-container>
`;

/**
 *
 */
export const LabelSlot: StoryFn<ComponentArgs> = (args) => ({
  components: { UCheckbox, UContainer, UTooltip },
  setup() {
    const checkbox = ref(false);
    return { args, checkbox };
  },
  template: labelSlotTemplate,
});

LabelSlot.parameters = {
  docs: {
    source: {
      code: `
<template>${labelSlotTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const checkbox = ref(false)
</script>`,
    },
  },
};

// Inline TextField Story
const inlineTextFieldTemplate = `
  <u-card>
    <u-card-text>
      <div class="d-flex pa-4">
        <u-checkbox-btn v-model="includeFiles" class="pe-2"></u-checkbox-btn>
        <u-text-field label="Include files" hide-details></u-text-field>
      </div>
      <div class="d-flex pa-4">
        <u-checkbox-btn v-model="enabled" class="pe-2"></u-checkbox-btn>
        <u-text-field :disabled="!enabled" label="I only work if you check the box" hide-details></u-text-field>
      </div>
    </u-card-text>
  </u-card>
`;

/**
 *
 */
export const InlineTextField: StoryFn<ComponentArgs> = (args) => ({
  components: { UCard, UCardText, UCheckboxBtn, UTextField },
  setup() {
    const includeFiles = ref(true);
    const enabled = ref(false);
    return { args, includeFiles, enabled };
  },
  template: inlineTextFieldTemplate,
});

InlineTextField.parameters = {
  docs: {
    source: {
      code: `
<template>${inlineTextFieldTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const includeFiles = ref(true)
  const enabled = ref(false)
</script>`,
    },
  },
};

// Model As Array Story
const modelAsArrayTemplate = `
  <u-container fluid>
    <p>{{ selected }}</p>
    <u-checkbox v-model="selected" label="John" value="John"></u-checkbox>
    <u-checkbox v-model="selected" label="Jacob" value="Jacob"></u-checkbox>
  </u-container>
`;

/**
 *
 */
export const ModelAsArray: StoryFn<ComponentArgs> = (args) => ({
  components: { UCheckbox, UContainer },
  setup() {
    const selected = ref(['John']);
    return { args, selected };
  },
  template: modelAsArrayTemplate,
});

ModelAsArray.parameters = {
  docs: {
    source: {
      code: `
<template>${modelAsArrayTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const selected = ref(['John'])
</script>`,
    },
  },
};

// Model As Boolean Story
const modelAsBooleanTemplate = `
  <u-container fluid>
    <u-checkbox v-model="checkbox1" :label="'Checkbox 1: ' + checkbox1.toString()"></u-checkbox>
    <u-checkbox v-model="checkbox2" :label="'Checkbox 2: ' + checkbox2.toString()"></u-checkbox>
  </u-container>
`;

/**
 *
 */
export const ModelAsBoolean: StoryFn<ComponentArgs> = (args) => ({
  components: { UCheckbox, UContainer },
  setup() {
    const checkbox1 = ref(true);
    const checkbox2 = ref(false);
    return { args, checkbox1, checkbox2 };
  },
  template: modelAsBooleanTemplate,
});

ModelAsBoolean.parameters = {
  docs: {
    source: {
      code: `
<template>${modelAsBooleanTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const checkbox1 = ref(true)
  const checkbox2 = ref(false)
</script>`,
    },
  },
};
