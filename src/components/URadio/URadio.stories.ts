import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UCard, UCardText, UCol, UContainer, URadio, URadioGroup, URow } from '../index';

interface ComponentArgs {
  appendIcon?: string | unknown;
  baseColor?: string;
  centerAffix?: boolean;
  color?: string;
  defaultsTarget?: string;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  error?: boolean;
  errorMessages?: string | string[];
  falseIcon?: string | unknown;
  focused?: boolean;
  glow?: boolean;
  height?: string | number;
  hideDetails?: boolean | 'auto';
  hideSpinButtons?: boolean;
  hint?: string;
  iconColor?: string | boolean;
  id?: string;
  inline?: boolean;
  label?: string;
  maxErrors?: string | number;
  maxWidth?: string | number;
  messages?: string | string[];
  minWidth?: string | number;
  modelValue?: unknown;
  name?: string;
  persistentHint?: boolean;
  prependIcon?: string | unknown;
  readonly?: boolean;
  ripple?: boolean | { class: string };
  rules?: unknown[];
  theme?: string;
  trueIcon?: string | unknown;
  type?: string;
  validateOn?: string;
  validationValue?: unknown;
  valueComparator?: unknown;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Radio buttons',
  component: URadio,
  parameters: {
    docs: {
      description: {
        component:
          'The u-radio component is a simple radio button. When combined with the u-radio-group component you can provide grouping functionality to allow users to select from a predefined set of options.',
      },
      import: `import { URadio } from '@ultimate/core-ui/components'`,
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

          return `<u-radio${attrsString}></u-radio>`;
        },
      },
    },
    Vuetify: {
      component: 'VRadio',
      content:
        "This component is built on top of Vuetify's VRadio components. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/radio-buttons/',
    },
    Primary: {
      description:
        'Although u-radio can be used on its own, it is best used in conjunction with u-radio-group.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-radio',
            link: 'https://vuetifyjs.com/en/api/v-radio/',
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
    falseIcon: {
      control: 'text',
      description: 'The icon used when inactive.',
      table: {
        type: { summary: 'string | Component' },
        defaultValue: { summary: "'$radioOff'" },
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
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'auto'" },
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
    hint: {
      control: 'text',
      description: 'Displays hint text below the input when focused.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    inline: {
      control: 'boolean',
      description: 'Displays radio buttons in row.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    modelValue: {
      control: 'text',
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'unknown' },
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
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'true' },
      },
    },
    trueIcon: {
      control: 'text',
      description: 'The icon used when active.',
      table: {
        type: { summary: 'string | Component' },
        defaultValue: { summary: "'$radioOn'" },
      },
    },
    type: {
      control: 'text',
      description: 'Provides the default type for children selection controls.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'radio'" },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { URadio },
  setup() {
    return { args };
  },
  template: `<u-radio v-bind="args"></u-radio>`,
});

Default.args = {
  label: 'Radio One',
  value: 'one',
} as ComponentArgs;

/**
 * Radios can be colored by using any of the builtin colors and contextual names using the color prop.
 */
export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardText, UCol, UContainer, URadio, URadioGroup, URow },
  setup() {
    const ex7 = ref('red');
    const ex8 = ref('primary');
    return { ex7, ex8 };
  },
  template: `
    <u-card flat>
      <u-card-text>
        <u-container fluid>
          <u-row>
            <u-col cols="12" md="6" sm="6">
              <u-radio-group v-model="ex7">
                <u-radio color="red" label="red" value="red"></u-radio>
                <u-radio color="red-darken-3" label="red-darken-3" value="red-darken-3"></u-radio>
                <u-radio color="indigo" label="indigo" value="indigo"></u-radio>
                <u-radio color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3"></u-radio>
                <u-radio color="orange" label="orange" value="orange"></u-radio>
                <u-radio color="orange-darken-3" label="orange-darken-3" value="orange-darken-3"></u-radio>
              </u-radio-group>
            </u-col>
            <u-col cols="12" md="6" sm="6">
              <u-radio-group v-model="ex8">
                <u-radio color="primary" label="primary" value="primary"></u-radio>
                <u-radio color="secondary" label="secondary" value="secondary"></u-radio>
                <u-radio color="success" label="success" value="success"></u-radio>
                <u-radio color="info" label="info" value="info"></u-radio>
                <u-radio color="warning" label="warning" value="warning"></u-radio>
                <u-radio color="error" label="error" value="error"></u-radio>
              </u-radio-group>
            </u-col>
          </u-row>
        </u-container>
      </u-card-text>
    </u-card>
  `,
});

Colors.args = {} as ComponentArgs;

Colors.parameters = {
  docs: {
    description: {
      story:
        'Radios can be colored by using any of the builtin colors and contextual names using the color prop.',
    },
    source: {
      code: `
<template>
  <u-card flat>
    <u-card-text>
      <u-container fluid>
        <u-row>
          <u-col cols="12" md="6" sm="6">
            <u-radio-group v-model="ex7">
              <u-radio color="red" label="red" value="red"></u-radio>
              <u-radio color="red-darken-3" label="red-darken-3" value="red-darken-3"></u-radio>
              <u-radio color="indigo" label="indigo" value="indigo"></u-radio>
              <u-radio color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3"></u-radio>
              <u-radio color="orange" label="orange" value="orange"></u-radio>
              <u-radio color="orange-darken-3" label="orange-darken-3" value="orange-darken-3"></u-radio>
            </u-radio-group>
          </u-col>
          <u-col cols="12" md="6" sm="6">
            <u-radio-group v-model="ex8">
              <u-radio color="primary" label="primary" value="primary"></u-radio>
              <u-radio color="secondary" label="secondary" value="secondary"></u-radio>
              <u-radio color="success" label="success" value="success"></u-radio>
              <u-radio color="info" label="info" value="info"></u-radio>
              <u-radio color="warning" label="warning" value="warning"></u-radio>
              <u-radio color="error" label="error" value="error"></u-radio>
            </u-radio-group>
          </u-col>
        </u-row>
      </u-container>
    </u-card-text>
  </u-card>
</template>

<script setup>
  import { ref } from 'vue'

  const ex7 = ref('red')
  const ex8 = ref('primary')
</script>
      `,
    },
  },
};
