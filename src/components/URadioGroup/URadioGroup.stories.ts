import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UContainer, URadio, URadioGroup, USelect } from '../index';

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
  title: 'Components/Form inputs & controls/Radio buttons group',
  component: URadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The u-radio component is a simple radio button. When combined with the u-radio-group component you can provide grouping functionality to allow users to select from a predefined set of options.',
      },
      import: `import { URadioGroup } from '@ultimate/core-ui/components'`,
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
      component: 'VRadioGroup',
      content:
        "This component is built on top of Vuetify's VRadioGroup components. For detailed usage and props, refer to the Vuetify documentation linked below.",
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
            title: 'v-radio-group',
            link: 'https://vuetifyjs.com/en/api/v-radio-group/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-radio',
            link: 'https://vuetifyjs.com/en/api/v-radio/',
          },
          description: 'Sub-component used for modifying the v-radio-group state',
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
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
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
      description:
        'Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation.',
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
      description:
        "Hides hint and validation errors. When set to auto messages will be rendered only if there's a message (hint, error message, counter value etc) to display.",
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
      description:
        'Displays hint text below the input when focused. Force this always open with the persistent-hint property.',
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
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: {
        type: { summary: 'boolean | { class: string }' },
        defaultValue: { summary: 'true' },
      },
    },
    rules: {
      control: 'object',
      description:
        'Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string.',
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
    valueComparator: {
      control: 'object',
      description:
        'Apply a custom comparison algorithm to compare model-value and values contains in the items prop.',
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

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { URadio, URadioGroup },
  setup() {
    return { args };
  },
  template: `
    <u-radio-group v-bind="args">
      <u-radio label="Radio One" value="one"></u-radio>
      <u-radio label="Radio Two" value="two"></u-radio>
      <u-radio label="Radio Three" value="three"></u-radio>
    </u-radio-group>
  `,
});

Default.args = {} as ComponentArgs;

export const ModelGroup: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, URadio, URadioGroup },
  setup() {
    const radios = ref('one');
    return { radios };
  },
  template: `
    <u-container fluid>
      <p>Selected Button: {{ radios }}</p>
      <u-radio-group v-model="radios">
        <u-radio label="Option One" value="one"></u-radio>
        <u-radio label="Option 2 (string)" value="2"></u-radio>
        <u-radio :value="3" label="Option 3 (integer)"></u-radio>
      </u-radio-group>
    </u-container>
  `,
});

ModelGroup.args = {} as ComponentArgs;

ModelGroup.parameters = {
  docs: {
    description: {
      story:
        'Using the v-model (or model-value) you can access and control the selected radio button defined by the set value on the child v-radio components.',
    },
    source: {
      code: `
<template>
  <u-container fluid>
    <p>Selected Button: {{ radios }}</p>
    <u-radio-group v-model="radios">
      <u-radio label="Option One" value="one"></u-radio>
      <u-radio label="Option 2 (string)" value="2"></u-radio>
      <u-radio :value="3" label="Option 3 (integer)"></u-radio>
    </u-radio-group>
  </u-container>
</template>

<script setup>
  import { ref } from 'vue'

  const radios = ref('one')
</script>
      `,
    },
  },
};

export const ModelRadio: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, URadio, USelect },
  setup() {
    const radio = ref('Option 1');
    return { radio };
  },
  template: `
    <u-container fluid>
      <u-select
        v-model="radio"
        :items="['Option 1', 'Option 2']"
        label="Select Option"
      ></u-select>
      <u-radio
        v-model="radio"
        false-value="Option 2"
        label="Option 1"
        true-value="Option 1"
        readonly
      ></u-radio>
      <u-radio
        v-model="radio"
        false-value="Option 1"
        label="Option 2"
        true-value="Option 2"
        readonly
      ></u-radio>
    </u-container>
  `,
});

ModelRadio.args = {} as ComponentArgs;

ModelRadio.parameters = {
  docs: {
    description: {
      story:
        'The v-model (or model-value) you can access and control the value of a single radio button. The true/false values can be independently defined using the true-value and false-value props.',
    },
    source: {
      code: `
<template>
  <u-container fluid>
    <u-select
      v-model="radio"
      :items="['Option 1', 'Option 2']"
      label="Select Option"
    ></u-select>
    <u-radio
      v-model="radio"
      false-value="Option 2"
      label="Option 1"
      true-value="Option 1"
      readonly
    ></u-radio>
    <u-radio
      v-model="radio"
      false-value="Option 1"
      label="Option 2"
      true-value="Option 2"
      readonly
    ></u-radio>
  </u-container>
</template>

<script setup>
  import { ref } from 'vue'

  const radio = ref('Option 1')
</script>
      `,
    },
  },
};

export const Direction: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, URadio, URadioGroup },
  setup() {
    const column = ref(null);
    const inline = ref(null);
    return { column, inline };
  },
  template: `
    <u-container fluid>
      <u-radio-group v-model="column">
        <u-radio label="Option 1" value="radio-1"></u-radio>
        <u-radio label="Option 2" value="radio-2"></u-radio>
      </u-radio-group>
      <hr>
      <u-radio-group v-model="inline" inline>
        <u-radio label="Option 1" value="radio-1"></u-radio>
        <u-radio label="Option 2" value="radio-2"></u-radio>
      </u-radio-group>
    </u-container>
  `,
});

Direction.args = {} as ComponentArgs;

Direction.parameters = {
  docs: {
    description: {
      story:
        'Radio-groups can be presented either as a row or a column, using their respective props. The default is as a column.',
    },
    source: {
      code: `
<template>
  <u-container fluid>
    <u-radio-group v-model="column">
      <u-radio label="Option 1" value="radio-1"></u-radio>
      <u-radio label="Option 2" value="radio-2"></u-radio>
    </u-radio-group>
    <hr>
    <u-radio-group v-model="inline" inline>
      <u-radio label="Option 1" value="radio-1"></u-radio>
      <u-radio label="Option 2" value="radio-2"></u-radio>
    </u-radio-group>
  </u-container>
</template>

<script setup>
  import { ref } from 'vue'

  const column = ref(null)
  const inline = ref(null)
</script>
      `,
    },
  },
};

export const Label: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, URadio, URadioGroup },
  setup() {
    const radios = ref('Duckduckgo');
    return { radios };
  },
  template: `
    <u-container fluid>
      <u-radio-group v-model="radios">
        <template v-slot:label>
          <div>Your favourite <strong>search engine</strong></div>
        </template>
        <u-radio value="Google">
          <template v-slot:label>
            <div>Of course it's <strong class="text-success">Google</strong></div>
          </template>
        </u-radio>
        <u-radio value="Duckduckgo">
          <template v-slot:label>
            <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
          </template>
        </u-radio>
      </u-radio-group>
    </u-container>
  `,
});

Label.args = {} as ComponentArgs;

Label.parameters = {
  docs: {
    description: {
      story:
        'Radio Group labels can be defined in label slot - that will allow to use HTML content.',
    },
    source: {
      code: `
<template>
  <u-container fluid>
    <u-radio-group v-model="radios">
      <template v-slot:label>
        <div>Your favourite <strong>search engine</strong></div>
      </template>
      <u-radio value="Google">
        <template v-slot:label>
          <div>Of course it's <strong class="text-success">Google</strong></div>
        </template>
      </u-radio>
      <u-radio value="Duckduckgo">
        <template v-slot:label>
          <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
        </template>
      </u-radio>
    </u-radio-group>
  </u-container>
</template>

<script setup>
  import { ref } from 'vue'

  const radios = ref('Duckduckgo')
</script>
      `,
    },
  },
};
