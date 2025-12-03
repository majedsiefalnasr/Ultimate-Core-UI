import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import { USelect } from '../index';

interface ComponentArgs {
  items?: any[];
  modelValue?: any;
  label?: string;
  multiple?: boolean;
  chips?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  density?: 'default' | 'comfortable' | 'compact';
  placeholder?: string;
  itemTitle?: string;
  itemValue?: string;
  returnObject?: boolean;
  persistentHint?: boolean;
  hint?: string;
  menuProps?: unknown;
  listProps?: unknown;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Selects',
  component: USelect,
  parameters: {
    docs: {
      description: {
        component:
          "Select fields collect user information from a list of options. USelect wraps Vuetify's `VSelect`/`VAutocomplete`/`VCombobox` and forwards props and slots.",
      },
      import: `import { USelect } from '@ultimate/core-ui/components'`,
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

          return `<u-select${attrsString}></u-select>`;
        },
      },
    },
    Vuetify: {
      component: 'VSelect',
      content: 'Wrapper around Vuetify select components (VSelect/VAutocomplete/VCombobox).',
      link: 'https://vuetifyjs.com/en/components/selects/',
    },
  },
  argTypes: {
    items: { control: 'object', description: 'Array of items to display' },
    modelValue: { control: 'object', description: 'v-model value' },
    label: { control: 'text', description: 'Label text' },
    multiple: { control: 'boolean', description: 'Allow multiple selection' },
    chips: { control: 'boolean', description: 'Display selected items as chips' },
    readonly: { control: 'boolean', description: 'Make the input readonly' },
    disabled: { control: 'boolean', description: 'Disable the input' },
    density: { control: { type: 'select' }, options: ['default', 'comfortable', 'compact'] },
    placeholder: { control: 'text' },
    itemTitle: { control: 'text', description: 'Property name for item title' },
    itemValue: { control: 'text', description: 'Property name for item value' },
    returnObject: { control: 'boolean', description: 'Return the full object instead of value' },
    persistentHint: { control: 'boolean' },
    hint: { control: 'text' },
    menuProps: { control: 'object' },
    listProps: { control: 'object' },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USelect },
  setup() {
    return { args };
  },
  template: '<u-select v-bind="args" />',
});

Default.args = {
  label: 'Select',
  items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
} as ComponentArgs;

// Density Story
const densityTemplate = `
  <div>
    <u-select :items="items" density="compact" label="Compact" class="ma-2" />
    <u-select :items="items" density="comfortable" label="Comfortable" class="ma-2" />
    <u-select :items="items" label="Default" class="ma-2" />
  </div>
  `;

/**
 * You can use density prop to adjust vertical spacing within the component.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>${densityTemplate}</template>

<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>`,
    },
  },
};

// Multiple Story
const multipleTemplate = `
  <u-select v-model="favorites" :items="states" hint="Pick your favorite states" label="Select" multiple persistent-hint />
  `;

/**
 * The multiple prop allows for multiple selections.
 */
export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const favorites = shallowRef([]);
    const states = [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming',
    ];

    return { favorites, states };
  },
  template: multipleTemplate,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>${multipleTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const favorites = shallowRef([])

  const states = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]
</script>`,
    },
  },
};

// Chips Story
const chipsTemplate = `
  <u-select v-model="value" :items="items" label="Chips" chips multiple />
  `;

/**
 * Display selected items as chips with the chips prop.
 */
export const Chips: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = shallowRef(['foo', 'bar', 'fizz', 'buzz']);
    const value = shallowRef(['foo', 'bar']);
    return { items, value };
  },
  template: chipsTemplate,
});

Chips.parameters = {
  docs: {
    source: {
      code: `<template>${chipsTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const items = shallowRef(['foo', 'bar', 'fizz', 'buzz'])
  const value = shallowRef(['foo', 'bar'])
</script>`,
    },
  },
};

// Readonly Story
const readonlyTemplate = `
  <u-select v-model="model" :items="items" label="Read-only" readonly />
  `;

/**
 * You can use the readonly prop on u-select which will prevent a user from changing its value.
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const model = shallowRef('Foo');
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { model, items };
  },
  template: readonlyTemplate,
});

Readonly.parameters = {
  docs: {
    source: {
      code: `<template>${readonlyTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const model = shallowRef('Foo')
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `
  <u-select :items="items" label="Disabled" disabled />
  `;

/**
 * Applying the disabled prop to a u-select will prevent a user from interacting with
 * the component.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>${disabledTemplate}</template>

<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>`,
    },
  },
};

// CustomTitleValue Story
const customTitleValueTemplate = `
  <u-select v-model="select" :items="items" item-title="state" item-value="abbr" label="Select" persistent-hint return-object single-line />
  `;

/**
 * You can specify the specific properties within your items array that correspond to the
 * title and value fields. By default, this is title and value. In this example we also use
 * the return-object prop which will return the entire object of the selected item on selection.
 */
export const CustomTitleValue: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const select = shallowRef({ state: 'Florida', abbr: 'FL' });
    const items = [
      { state: 'Florida', abbr: 'FL' },
      { state: 'Georgia', abbr: 'GA' },
      { state: 'Nebraska', abbr: 'NE' },
      { state: 'California', abbr: 'CA' },
      { state: 'New York', abbr: 'NY' },
    ];
    return { select, items };
  },
  template: customTitleValueTemplate,
});

CustomTitleValue.parameters = {
  docs: {
    source: {
      code: `<template>${customTitleValueTemplate}</template>
      
<script setup>
  import { shallowRef } from 'vue'

  const select = shallowRef({ state: 'Florida', abbr: 'FL' })

  const items = [
    { state: 'Florida', abbr: 'FL' },
    { state: 'Georgia', abbr: 'GA' },
    { state: 'Nebraska', abbr: 'NE' },
    { state: 'California', abbr: 'CA' },
    { state: 'New York', abbr: 'NY' },
  ]
</script>`,
    },
  },
};

// MenuProps Story
const menuPropsTemplate = `
  <u-select :items="items" :menu-props="{ scrim: true, scrollStrategy: 'close' }" label="Label" />
  `;

/**
 * Menu props: pass custom props to the underlying menu (scrim + scroll strategy)
 */
export const MenuProps: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: menuPropsTemplate,
});

MenuProps.parameters = {
  docs: {
    source: {
      code: `<template>${menuPropsTemplate}</template>

<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>`,
    },
  },
};

// ListProps Story
const listPropsTemplate = `
  <u-select v-model="selected" :items="['Apple','Orange','Banana','Pear']" :list-props="{ bgColor: 'purple' }" item-color="yellow" label="Label" multiple />
  `;

/**
 * List props: pass props to the underlying list (e.g. background color)
 */
export const ListProps: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const selected = ref(['Apple']);
    return { selected };
  },
  template: listPropsTemplate,
});

ListProps.parameters = {
  docs: {
    source: {
      code: `<template>${listPropsTemplate}</template>
      
<script setup>
  import { ref } from 'vue'

  const selected = ref(['Apple'])
</script>`,
    },
  },
};
