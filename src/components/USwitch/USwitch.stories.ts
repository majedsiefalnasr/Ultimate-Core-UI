import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

// Import U-components from the components index
import { UCard, UCardText, UCol, UContainer, UProgressCircular, URow, USwitch } from '../index';

interface ComponentArgs {
  modelValue?: any;
  label?: string;
  color?: string;
  inset?: boolean;
  value?: any;
  falseValue?: any;
  trueValue?: any;
  loading?: string | boolean;
  disabled?: boolean;
  hideDetails?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Switches',
  component: USwitch,
  parameters: {
    docs: {
      description: {
        component:
          'The u-switch component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a checkbox.',
      },
      import: `import { USwitch } from '@ultimate/core-ui/components'`,
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

          return `<u-switch${attrsString} />`;
        },
      },
    },
    Vuetify: {
      component: 'VSwitch',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/switches/',
    },
    api: {
      data: [
        {
          element: { title: 'v-switch', link: 'https://vuetifyjs.com/en/api/v-switch/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    appendIcon: {
      name: 'append-icon',
      description: 'Creates a v-icon component after default content in the append slot.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string | (string | [string, number])[] | Component' },
        defaultValue: { summary: 'undefined' },
      },
    },
    baseColor: {
      name: 'base-color',
      description: 'Sets the color of the input when it is not focused.',
      control: { type: 'color' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    centerAffix: {
      name: 'center-affix',
      description: 'Vertically align appendInner, prependInner, clearIcon and label in the center.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    color: {
      name: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    'defaults-target': {
      name: 'defaults-target',
      description: 'The target component to provide defaults values for.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    density: {
      name: 'density',
      description: 'Adjusts the vertical height used by the component.',
      control: { type: 'select', options: ['default', 'comfortable', 'compact'] },
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    direction: {
      name: 'direction',
      description: 'Changes the direction of the input.',
      control: { type: 'select', options: ['horizontal', 'vertical'] },
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    disabled: {
      name: 'disabled',
      description: 'Removes the ability to click or target the component.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    error: {
      name: 'error',
      description: 'Puts the input in a manual error state.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    errorMessages: {
      name: 'error-messages',
      description: 'Puts the input in an error state and passes through custom error messages.',
      control: { type: 'object' },
      table: { type: { summary: 'string | string[]' }, defaultValue: { summary: '[]' } },
    },
    falseIcon: {
      name: 'false-icon',
      description: 'The icon used when inactive.',
      control: { type: 'text' },
      table: { type: { summary: 'string | Component' }, defaultValue: { summary: 'undefined' } },
    },
    falseValue: {
      name: 'false-value',
      description: 'Sets value for falsy state.',
      control: { type: 'text' },
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    flat: {
      name: 'flat',
      description: 'Display component without elevation.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    focused: {
      name: 'focused',
      description: 'Forces a focused state styling on the component.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    glow: {
      name: 'glow',
      description:
        'Makes prepend/append icons full opacity when the input is focused and apply color.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideDetails: {
      name: 'hide-details',
      description: 'Hides hint and validation errors.',
      control: { type: 'boolean' },
      table: { type: { summary: "boolean | 'auto'" }, defaultValue: { summary: 'false' } },
    },
    hideSpinButtons: {
      name: 'hide-spin-buttons',
      description: 'Hides spin buttons on the input when type is set to number.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hint: {
      name: 'hint',
      description: 'Displays hint text below the input when focused.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    iconColor: {
      name: 'icon-color',
      description: 'Sets the color of the prepend/append icons.',
      control: { type: 'text' },
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    id: {
      name: 'id',
      description: 'Sets the DOM id on the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    indeterminate: {
      name: 'indeterminate',
      description: 'Sets an indeterminate state for the switch.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    inline: {
      name: 'inline',
      description: 'Puts children inputs into a row.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    inset: {
      name: 'inset',
      description: 'Enlarge the v-switch track to encompass the thumb.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      name: 'label',
      description: 'Sets the text of the label component.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    loading: {
      name: 'loading',
      description: 'Displays circular progress bar or apply color string.',
      control: { type: 'text' },
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    maxErrors: {
      name: 'max-errors',
      description: 'Control the maximum number of shown errors from validation.',
      control: { type: 'number' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 1 } },
    },
    maxWidth: {
      name: 'max-width',
      description: 'Sets the maximum width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    messages: {
      name: 'messages',
      description: 'Displays a list of messages or a single message if using a string.',
      control: { type: 'object' },
      table: { type: { summary: 'string | string[]' }, defaultValue: { summary: '[]' } },
    },
    minWidth: {
      name: 'min-width',
      description: 'Sets the minimum width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      name: 'model-value',
      description: 'The v-model value of the component.',
      control: { type: 'object' },
      table: { type: { summary: 'unknown' }, defaultValue: { summary: 'undefined' } },
    },
    multiple: {
      name: 'multiple',
      description: 'Changes expected model to an array.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    name: {
      name: 'name',
      description: 'Sets the component’s name attribute.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    persistentHint: {
      name: 'persistent-hint',
      description: 'Forces hint to always be visible.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    prependIcon: {
      name: 'prepend-icon',
      description: 'Prepends an icon to the component, uses the same syntax as v-icon.',
      control: { type: 'text' },
      table: { type: { summary: 'string | Component' }, defaultValue: { summary: 'undefined' } },
    },
    readonly: {
      name: 'readonly',
      description: 'Puts input in readonly state.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    ripple: {
      name: 'ripple',
      description: 'Applies the v-ripple directive.',
      control: { type: 'object' },
      table: {
        type: { summary: 'boolean | { class: string; keys: string[] }' },
        defaultValue: { summary: 'true' },
      },
    },
    rules: {
      name: 'rules',
      description:
        'Validation rules: functions, booleans or strings. Returns true/false or error message.',
      control: { type: 'object' },
      table: { type: { summary: 'Array<mixed>' }, defaultValue: { summary: '[]' } },
    },
    theme: {
      name: 'theme',
      description: 'Specify a theme for this component and its children.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    trueIcon: {
      name: 'true-icon',
      description: 'The icon used when active.',
      control: { type: 'text' },
      table: { type: { summary: 'string | Component' }, defaultValue: { summary: 'undefined' } },
    },
    trueValue: {
      name: 'true-value',
      description: 'Sets value for truthy state.',
      control: { type: 'text' },
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    type: {
      name: 'type',
      description: 'Provides the default type for children selection controls.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    validateOn: {
      name: 'validate-on',
      description: 'Change what type of event triggers validation to run.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string (see docs for options)' },
        defaultValue: { summary: 'undefined' },
      },
    },
    validationValue: {
      name: 'validation-value',
      description: 'The value used when applying validation rules.',
      control: { type: 'text' },
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    value: {
      name: 'value',
      description: 'The value used when the component is selected in a group.',
      control: { type: 'text' },
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    valueComparator: {
      name: 'value-comparator',
      description:
        'Apply a custom comparison algorithm to compare model-value and values in items prop.',
      control: { type: 'object' },
      table: { type: { summary: 'Function' }, defaultValue: { summary: 'undefined' } },
    },
    width: {
      name: 'width',
      description: 'Sets the width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  } as any,
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USwitch },
  setup() {
    return { args };
  },
  template: '<u-switch v-bind="args" />',
});

Default.args = {
  label: 'Switch',
  inset: false,
} as ComponentArgs;

// Colors story
const colorsTemplate = `
    <u-card flat>
      <u-card-text>
        <u-container fluid>
          <u-row>
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="red" label="red" value="red" hide-details />
              <u-switch v-model="ex11" color="red-darken-3" label="red-darken-3" value="red-darken-3" hide-details />
            </u-col>
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="indigo" label="indigo" value="indigo" hide-details />
              <u-switch v-model="ex11" color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3" hide-details />
            </u-col>
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="orange" label="orange" value="orange" hide-details />
              <u-switch v-model="ex11" color="orange-darken-3" label="orange-darken-3" value="orange-darken-3" hide-details />
            </u-col>
          </u-row>

          <u-row class="mt-12">
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="primary" label="primary" value="primary" hide-details />
              <u-switch v-model="ex11" color="secondary" label="secondary" value="secondary" hide-details />
            </u-col>
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="success" label="success" value="success" hide-details />
              <u-switch v-model="ex11" color="info" label="info" value="info" hide-details />
            </u-col>
            <u-col cols="12" md="4" sm="4">
              <u-switch v-model="ex11" color="warning" label="warning" value="warning" hide-details />
              <u-switch v-model="ex11" color="error" label="error" value="error" hide-details />
            </u-col>
          </u-row>
        </u-container>
      </u-card-text>
    </u-card>
  `;

/**
 * Switches can be colored by using any of the builtin colors and contextual names
 * using the color prop.
 */
export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { USwitch, UCard, UCardText, UContainer, URow, UCol },
  setup() {
    const ex11 = ref([
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

    return { ex11 };
  },
  template: colorsTemplate,
});

Colors.parameters = {
  docs: {
    source: {
      code: `<template>${colorsTemplate}</template>
      
<script setup>
  const ex11 = ['red','indigo','orange','primary','secondary','success','info','warning','error','red-darken-3','indigo-darken-3','orange-darken-3']
</script>`,
    },
  },
};

// Inset story
const insetTemplate = `<u-switch v-model="model" :label="'Switch: ' + model.toString()" hide-details inset />`;

/**
 * You can make switch render in inset mode.
 */
export const Inset: StoryFn<ComponentArgs> = () => ({
  components: { USwitch },
  setup() {
    const model = ref(true);
    return { model };
  },
  template: insetTemplate,
});

Inset.parameters = {
  docs: {
    source: {
      code: `<template>${insetTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(true)
</script>`,
    },
  },
};

// Model As Array story
const modelAsArrayTemplate = `
    <u-container fluid>
      <p>{{ people }}</p>
      <u-switch v-model="people" color="primary" label="John" value="John" hide-details />
      <u-switch v-model="people" color="primary" label="Jacob" value="Jacob" hide-details />
    </u-container>
  `;

/**
 * Multiple u-switch’s can share the same v-model by using an array.
 */
export const ModelAsArray: StoryFn<ComponentArgs> = () => ({
  components: { USwitch, UContainer },
  setup() {
    const people = ref(['John']);
    return { people };
  },
  template: modelAsArrayTemplate,
});

ModelAsArray.parameters = {
  docs: {
    source: {
      code: `<template>${modelAsArrayTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const people = ref(['John'])
</script>`,
    },
  },
};

// Custom True False story
const customTrueFalseTemplate = `<u-switch v-model="model" :label="'Switch: ' + model" false-value="no" true-value="yes" hide-details />`;

/**
 * The switch can use custom values for its v-model, using the props true-value and
 * false-value.
 */
export const CustomTrueFalse: StoryFn<ComponentArgs> = () => ({
  components: { USwitch },
  setup() {
    const model = ref('no');
    return { model };
  },
  template: customTrueFalseTemplate,
});

CustomTrueFalse.parameters = {
  docs: {
    source: {
      code: `<template>${customTrueFalseTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref('no')
</script>`,
    },
  },
};

// States story
const statesTemplate = `
    <u-container fluid>
      <u-row>
        <u-col cols="6">
          <u-switch :model-value="true" color="primary" label="on" />
        </u-col>
        <u-col cols="6">
          <u-switch :model-value="false" color="primary" label="off" />
        </u-col>
      </u-row>

      <u-row>
        <u-col cols="6">
          <u-switch :model-value="true" color="primary" label="on disabled" disabled />
        </u-col>
        <u-col cols="6">
          <u-switch :model-value="false" color="primary" label="off disabled" disabled />
        </u-col>
      </u-row>

      <u-row>
        <u-col cols="6">
          <u-switch :model-value="true" label="on loading" loading="warning" />
        </u-col>
        <u-col cols="6">
          <u-switch :model-value="false" label="off loading" loading="warning" />
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * u-switch can have different states such as default, disabled, and loading.
 */
export const States: StoryFn<ComponentArgs> = () => ({
  components: { USwitch, UContainer, URow, UCol },
  template: statesTemplate,
});

States.parameters = {
  docs: {
    source: {
      code: `<template>${statesTemplate}</template>`,
    },
  },
};

// Label Slot story
const labelSlotTemplate = `
    <u-switch v-model="switchMe">
      <template #label>
        Turn on the progress:
        <u-progress-circular :indeterminate="switchMe" class="ms-2" size="24" />
      </template>
    </u-switch>
  `;

/**
 * If you need to render a switch label with more complex markup than plain text,
 * you can use the label slot.
 */
export const LabelSlot: StoryFn<ComponentArgs> = () => ({
  components: { USwitch, UProgressCircular },
  setup() {
    const switchMe = ref(false);
    return { switchMe };
  },
  template: labelSlotTemplate,
});

LabelSlot.parameters = {
  docs: {
    source: {
      code: `<template>${labelSlotTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const switchMe = ref(false)
</script>`,
    },
  },
};
