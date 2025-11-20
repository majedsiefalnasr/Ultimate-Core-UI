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
  title: 'Components/Forms/Selects',
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

Default.parameters = {
  docs: {
    source: {
      code: `
        <u-select
          label="Select"
          :items="['California','Colorado','Florida','Georgia','Texas','Wyoming']"
        />`,
    },
  },
};

/**
 * Density: demonstrate compact, comfortable and default densities
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: `
  <div>
    <u-select :items="items" density="compact" label="Compact" class="ma-2" />
    <u-select :items="items" density="comfortable" label="Comfortable" class="ma-2" />
    <u-select :items="items" label="Default" class="ma-2" />
  </div>
  `,
});

Density.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select :items="items" density="compact" label="Compact" />
  <u-select :items="items" density="comfortable" label="Comfortable" />
  <u-select :items="items" label="Default" />
</template>
<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>
      `,
    },
  },
};

/**
 * Multiple: allow selecting multiple values
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
  template: `
  <u-select v-model="favorites" :items="states" hint="Pick your favorite states" label="Select" multiple persistent-hint />
  `,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    v-model="favorites"
    :items="states"
    hint="Pick your favorite states"
    label="Select"
    multiple
    persistent-hint
  ></u-select>
</template>
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
    'Federated States of Micronesia',
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
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
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
</script>
      `,
    },
  },
};

/**
 * Chips: show selected items as chips (works with multiple)
 */
export const Chips: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = shallowRef(['foo', 'bar', 'fizz', 'buzz']);
    const value = shallowRef(['foo', 'bar']);
    return { items, value };
  },
  template: `
  <u-select v-model="value" :items="items" label="Chips" chips multiple />
  `,
});

Chips.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    v-model="value"
    :items="items"
    label="Chips"
    chips
    multiple
  ></u-select>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const items = shallowRef(['foo', 'bar', 'fizz', 'buzz'])
  const value = shallowRef(['foo', 'bar', 'fizz', 'buzz'])
</script>
      `,
    },
  },
};

/**
 * Readonly: display a non-editable value
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const model = shallowRef('Foo');
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { model, items };
  },
  template: `
  <u-select v-model="model" :items="items" label="Read-only" readonly />
  `,
});

Readonly.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    v-model="model"
    :items="items"
    label="Read-only"
    readonly
  ></u-select>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const model = shallowRef('Foo')
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>
      `,
    },
  },
};

/**
 * Disabled: disable the select so it cannot be interacted with
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: `
  <u-select :items="items" label="Disabled" disabled />
  `,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    :items="items"
    label="Disabled"
    disabled
  ></u-select>
</template>
<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>
      `,
    },
  },
};

/**
 * Custom title/value: return the full object and configure item-title/item-value
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
  template: `
  <u-select v-model="select" :items="items" item-title="state" item-value="abbr" label="Select" persistent-hint return-object single-line />
  `,
});

CustomTitleValue.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    v-model="select"
    :hint="\`\${select.state}, \${select.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  ></u-select>
</template>
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
</script>
      `,
    },
  },
};

/**
 * Menu props: pass custom props to the underlying menu (scrim + scroll strategy)
 */
export const MenuProps: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];
    return { items };
  },
  template: `
  <u-select :items="items" :menu-props="{ scrim: true, scrollStrategy: 'close' }" label="Label" />
  `,
});

MenuProps.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    :items="items"
    :menu-props="{ scrim: true, scrollStrategy: 'close' }"
    label="Label"
  ></u-select>
</template>
<script setup>
  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
</script>
      `,
    },
  },
};

/**
 * List props: pass props to the underlying list (e.g. background color)
 */
export const ListProps: StoryFn<ComponentArgs> = () => ({
  components: { USelect },
  setup() {
    const selected = ref(['Apple']);
    return { selected };
  },
  template: `
  <u-select v-model="selected" :items="['Apple','Orange','Banana','Pear']" :list-props="{ bgColor: 'purple' }" item-color="yellow" label="Label" multiple />
  `,
});

ListProps.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-select
    v-model="selected"
    :items="['Apple', 'Orange', 'Banana', 'Pear']"
    :list-props="{ bgColor: 'purple' }"
    item-color="yellow"
    label="Label"
    multiple
  ></u-select>
</template>
<script setup>
  import { ref } from 'vue'

  const selected = ref(['Apple'])
</script>
      `,
    },
  },
};
