import type { Meta, StoryFn } from '@storybook/vue3';
import { nextTick, ref, toRef, watch } from 'vue';

import {
  UAvatar,
  UBtn,
  UCard,
  UChip,
  UCol,
  UCombobox,
  UContainer,
  UIcon,
  UListItem,
  UListItemTitle,
  UListSubheader,
  URow,
  UTextField,
} from '../index';

interface ComponentArgs {
  label?: string;
  items?: unknown[];
  modelValue?: unknown;
  multiple?: boolean;
  itemTitle?: string;
  itemValue?: string;
  itemProps?: string | boolean;
  itemColor?: string;
  itemChildren?: string | boolean;
  itemType?: string;
  chips?: boolean;
  closableChips?: boolean;
  hideSelected?: boolean;
  returnObject?: boolean;
  autoSelectFirst?: boolean | 'exact';
  alwaysFilter?: boolean;
  customFilter?: (value: unknown, query: string, item: unknown) => boolean;
  customKeyFilter?: unknown;
  filterKeys?: string | string[];
  filterMode?: 'every' | 'some' | 'union' | 'intersection';
  noFilter?: boolean;
  menu?: boolean;
  menuIcon?: string;
  menuProps?: unknown;
  hideNoData?: boolean;
  noDataText?: string;
  openOnClear?: boolean;
  delimiters?: string[];
  clearOnSelect?: boolean;
  active?: boolean;
  appendIcon?: string;
  autocomplete?: string;
  autofocus?: boolean;
  baseColor?: string;
  bgColor?: string;
  centerAffix?: boolean;
  clearable?: boolean;
  clearIcon?: string;
  closeText?: string;
  color?: string;
  counter?: string | number | boolean;
  counterValue?: number | ((value: unknown) => number);
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean | null;
  eager?: boolean;
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
  messages?: string | string[];
  minWidth?: string | number;
  name?: string;
  noAutoScroll?: boolean;
  openText?: string;
  persistentClear?: boolean;
  persistentCounter?: boolean;
  persistentHint?: boolean;
  persistentPlaceholder?: boolean;
  placeholder?: string;
  prefix?: string;
  prependIcon?: string;
  prependInnerIcon?: string;
  readonly?: boolean | null;
  reverse?: boolean;
  role?: string;
  rounded?: string | number | boolean;
  rules?: unknown[];
  singleLine?: boolean;
  suffix?: string;
  theme?: string;
  tile?: boolean;
  type?: string;
  validateOn?: string;
  valueComparator?: (a: unknown, b: unknown) => boolean;
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  width?: string | number;
  listProps?: unknown;
  content?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Combobox',
  component: UCombobox,
  parameters: {
    docs: {
      description: {
        component:
          'The u-combobox component is a u-text-field that allows the user to select values from a provided items array, or to enter their own value. Created items will be returned as strings.',
      },
      import: `import { UCombobox } from '@ultimate/core-ui/components'`,
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

          return `<u-combobox${attrsString}></u-combobox>`;
        },
      },
    },
    Vuetify: {
      component: 'VCombobox',
      content:
        'With Combobox, you can allow a user to create new values that may not be present in a provided items list.',
      link: 'https://vuetifyjs.com/en/components/combobox/',
    },
    Primary: {
      description:
        'With Combobox, you can allow a user to create new values that may not be present in a provided items list.',
    },
    api: {
      data: [
        {
          element: { title: 'v-combobox', link: 'https://vuetifyjs.com/en/api/v-combobox/' },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-autocomplete',
            link: 'https://vuetifyjs.com/en/api/v-autocomplete/',
          },
          description: 'A select component that allows for advanced filtering',
        },
        {
          element: { title: 'v-select', link: 'https://vuetifyjs.com/en/api/v-select/' },
          description: 'A replacement for the HTML select element',
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
    items: {
      control: 'object',
      description:
        'Can be an array of objects or strings. By default objects should have title and value properties.',
      table: { type: { summary: 'array' }, defaultValue: { summary: '[]' } },
    },
    modelValue: {
      control: 'text',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'null' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Changes select to multiple. Accepts array for value.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    chips: {
      control: 'boolean',
      description: 'Changes display of selections to chips.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closableChips: {
      control: 'boolean',
      description: 'Enables the closable prop on all v-chip components.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideSelected: {
      control: 'boolean',
      description: 'Do not display in the select menu items that are already selected.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    returnObject: {
      control: 'boolean',
      description:
        'Changes the selection behavior to return the object directly rather than the value specified with item-value.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    autoSelectFirst: {
      control: 'select',
      options: [false, true, 'exact'],
      description:
        'When searching, will always highlight the first option and select it on blur. exact will only highlight and select exact matches.',
      table: { type: { summary: 'boolean | "exact"' }, defaultValue: { summary: 'false' } },
    },
    alwaysFilter: {
      control: 'boolean',
      description:
        'When enabled, dropdown list will always show items matching non-empty value within the field.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    noFilter: {
      control: 'boolean',
      description: 'Disables all item filtering.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    filterKeys: {
      control: 'text',
      description: 'Array of specific keys to filter on the item.',
      table: { type: { summary: 'string | string[]' }, defaultValue: { summary: "['title']" } },
    },
    menu: {
      control: 'boolean',
      description: 'Renders with the menu open by default.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    menuIcon: {
      control: 'text',
      description: 'Sets the the spin icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$dropdown' } },
    },
    hideNoData: {
      control: 'boolean',
      description: 'Hides the menu when there are no options to show.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    noDataText: {
      control: 'text',
      description: 'Text shown when no items are provided to the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$vuetify.noDataText' } },
    },
    openOnClear: {
      control: 'boolean',
      description: "Open's the menu whenever the clear icon is clicked.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    delimiters: {
      control: 'object',
      description: 'Accepts an array of strings that will trigger a new tag when typing.',
      table: { type: { summary: 'string[]' }, defaultValue: { summary: 'undefined' } },
    },
    clearOnSelect: {
      control: 'boolean',
      description: 'Reset the search text when a selection is made while using the multiple prop.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
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
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'default' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Allows for the component to be cleared.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the input.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts input in readonly state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    placeholder: {
      control: 'text',
      description: "Sets the input's placeholder text.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    persistentPlaceholder: {
      control: 'boolean',
      description: 'Forces placeholder to always be visible.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideDetails: {
      control: 'select',
      options: [false, true, 'auto'],
      description: 'Hides hint and validation errors.',
      table: { type: { summary: 'boolean | "auto"' }, defaultValue: { summary: 'false' } },
    },
    hint: {
      control: 'text',
      description: 'Displays hint text below the input when focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    persistentHint: {
      control: 'boolean',
      description: 'Forces hint to always be visible.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UCombobox },
  setup() {
    return { args };
  },
  template: '<u-combobox v-bind="args"></u-combobox>',
});

Default.args = {
  label: 'Combobox',
  items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
} as ComponentArgs;

// Density story
const densityTemplate = `
    <u-card>
      <u-container fluid>
        <u-row>
          <u-col cols="12">
            <u-combobox
              v-model="value"
              :items="items"
              label="Default"
            ></u-combobox>
          </u-col>
          <u-col cols="12">
            <u-combobox
              v-model="value"
              :items="items"
              density="comfortable"
              label="Comfortable"
            ></u-combobox>
          </u-col>
          <u-col cols="12">
            <u-combobox
              v-model="value"
              :items="items"
              density="compact"
              label="Compact"
            ></u-combobox>
          </u-col>
        </u-row>
      </u-container>
    </u-card>
  `;

/**
 * You can use density prop to adjust vertical spacing within the component.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCol, UCombobox, UContainer, URow },
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz'];
    const value = ref('foo');
    return { items, value };
  },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `
<template>${densityTemplate}</template>
<script setup lang="ts">
import { ref } from 'vue';

const items = ['foo', 'bar', 'fizz', 'buzz'];
const value = ref('foo');
</script>`,
    },
  },
};

// Placeholder story
const placeholderTemplate = `
    <u-container>
      <u-combobox
        :items="fruits"
        label="Fruits"
        placeholder="Ex: Apple, Grape"
        multiple
        persistent-placeholder
      ></u-combobox>
    </u-container>
  `;

/**
 * Use the placeholder prop to give users additional context about the expected values in the combobox. The placeholder will only appear when no items are selected.
 */
export const Placeholder: StoryFn<ComponentArgs> = () => ({
  components: { UCombobox, UContainer },
  setup() {
    const fruits = ['Apple', 'Grape', 'Banana'];
    return { fruits };
  },
  template: placeholderTemplate,
});

Placeholder.parameters = {
  docs: {
    source: {
      code: `
<template>${placeholderTemplate}</template>
<script setup lang="ts">
const fruits = ['Apple', 'Grape', 'Banana'];
</script>`,
    },
  },
};

// Multiple Combobox story
const multipleComboboxTemplate = `
    <u-container fluid>
      <u-row>
        <u-col cols="12">
          <u-combobox
            v-model="select"
            :items="items"
            label="Select a favorite activity or create a new one"
            multiple
          ></u-combobox>
        </u-col>
        <u-col cols="12">
          <u-combobox
            v-model="select"
            :items="items"
            label="I use chips"
            chips
            multiple
          ></u-combobox>
        </u-col>
        <u-col cols="12">
          <u-combobox
            v-model="select"
            :items="items"
            label="I use a scoped slot"
            multiple
          >
            <template v-slot:selection="data">
              <u-chip
                :key="JSON.stringify(data.item)"
                v-bind="data.attrs"
                :disabled="data.disabled"
                :model-value="data.selected"
                size="small"
                @click:close="data.parent.selectItem(data.item)"
              >
                <template v-slot:prepend>
                  <u-avatar
                    class="bg-accent text-uppercase"
                    start
                  >{{ data.item.title.slice(0, 1) }}</u-avatar>
                </template>
                {{ data.item.title }}
              </u-chip>
            </template>
          </u-combobox>
        </u-col>
        <u-col cols="12">
          <u-combobox
            v-model="select"
            label="I'm readonly"
            chips
            multiple
            readonly
          ></u-combobox>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * Previously known as tags - user is allowed to enter more than one value.
 */
export const MultipleCombobox: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UChip, UCol, UCombobox, UContainer, URow },
  setup() {
    const select = ref(['Vuetify', 'Programming']);
    const items = ['Programming', 'Design', 'Vue', 'Vuetify'];
    return { select, items };
  },
  template: multipleComboboxTemplate,
});

MultipleCombobox.parameters = {
  docs: {
    source: {
      code: `
<template>${multipleComboboxTemplate}</template>
<script setup lang="ts">
import { ref } from 'vue';

const select = ref(['Vuetify', 'Programming']);
const items = ['Programming', 'Design', 'Vue', 'Vuetify'];
</script>`,
    },
  },
};

// No Data story
const noDataTemplate = `
    <u-container fluid>
      <u-combobox
        v-model="model"
        v-model:search="search"
        :hide-no-data="false"
        :items="items"
        hint="Maximum of 5 tags"
        label="Add some tags"
        chips
        hide-selected
        multiple
        persistent-hint
      >
        <template v-slot:no-data>
          <u-list-item>
            <u-list-item-title>
              No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
            </u-list-item-title>
          </u-list-item>
        </template>
      </u-combobox>
    </u-container>
  `;

/**
 * In this example we utilize a custom no-data slot to provide context to the user when searching / creating items.
 */
export const NoData: StoryFn<ComponentArgs> = () => ({
  components: { UCombobox, UContainer, UListItem, UListItemTitle },
  setup() {
    const items = ['Gaming', 'Programming', 'Vue', 'Vuetify'];
    const model = ref(['Vuetify']);
    const search = ref(null);

    watch(model, (val) => {
      if (val.length > 5) {
        nextTick(() => model.value.pop());
      }
    });

    return { items, model, search };
  },
  template: noDataTemplate,
});

NoData.parameters = {
  docs: {
    source: {
      code: `
<template>${noDataTemplate}</template>
<script setup lang="ts">
import { nextTick, ref, watch } from 'vue';

const items = ['Gaming', 'Programming', 'Vue', 'Vuetify'];
const model = ref(['Vuetify']);
const search = ref(null);

watch(model, (val) => {
  if (val.length > 5) {
    nextTick(() => model.value.pop());
  }
});
</script>`,
    },
  },
};

// Custom Chips story
const customChipsTemplate = `
    <u-combobox
      v-model="selected"
      :items="items"
      item-title="name"
      item-value="name"
      chips
      closable-chips
      multiple
    >
      <template v-slot:chip="{ props, item }">
        <u-chip v-bind="props" label>
          <template v-slot:prepend>
            <div class="me-1">{{ item.raw.symbol }}</div>
          </template>
          <template v-slot:close>
            <u-icon icon="$close" size="14"></u-icon>
          </template>
        </u-chip>
      </template>
    </u-combobox>
  `;

/**
 * When working with custom chip slots, it's recommended to use v-bind="props" to pass event handler @mousedown.stop. This helps prevent unintentionally opening the dropdown.
 */
export const CustomChips: StoryFn<ComponentArgs> = () => ({
  components: { UChip, UCombobox, UIcon },
  setup() {
    const items = [
      { symbol: '🍎', name: 'Apple' },
      { symbol: '🍌', name: 'Banana' },
      { symbol: '🍇', name: 'Grapes' },
      { symbol: '🍉', name: 'Watermelon' },
      { symbol: '🍓', name: 'Strawberry' },
      { symbol: '🥝', name: 'Kiwi' },
    ];
    const selected = ref(
      ['Apple', 'Kiwi', 'Grapes'].map((v) => items.find((item) => item.name === v))
    );
    return { items, selected };
  },
  template: customChipsTemplate,
});

CustomChips.parameters = {
  docs: {
    source: {
      code: `
<template>${customChipsTemplate}</template>
<script setup lang="ts">
import { ref } from 'vue';

const items = [
  { symbol: '🍎', name: 'Apple' },
  { symbol: '🍌', name: 'Banana' },
  { symbol: '🍇', name: 'Grapes' },
  { symbol: '🍉', name: 'Watermelon' },
  { symbol: '🍓', name: 'Strawberry' },
  { symbol: '🥝', name: 'Kiwi' },
];
const selected = ref(
  ['Apple', 'Kiwi', 'Grapes'].map((v) => items.find((item) => item.name === v))
);
</script>`,
    },
  },
};

// Advanced Custom Options story
const advancedCustomOptionsTemplate = `
    <u-container fluid>
      <u-combobox
        v-model="model"
        v-model:search="search"
        :custom-filter="filter"
        :items="items"
        label="Search for an option"
        variant="solo"
        hide-selected
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <u-chip
            v-if="item === Object(item)"
            :color="item.raw.color + '-lighten-3'"
            :text="item.title"
            size="small"
            variant="flat"
            closable
            label
            @click:close="removeSelection(index)"
          ></u-chip>
        </template>
        <template v-slot:item="{ props, item }">
          <template v-if="item.raw.header">
            <u-list-item
              v-if="alreadySelected"
              title="Item is already selected"
            ></u-list-item>
            <u-list-item v-else-if="search">
              <span class="mr-3">Create</span>
              <u-chip
                :color="colors[nonce] + '-lighten-3'"
                size="small"
                variant="flat"
                label
              >
                {{ search }}
              </u-chip>
            </u-list-item>
            <u-list-subheader v-else :title="item.title"></u-list-subheader>
          </template>
          <u-list-item v-else @click="props.onClick">
            <u-text-field
              v-if="editingItem === item.raw"
              v-model="editingItem.title"
              bg-color="transparent"
              class="mr-3"
              density="compact"
              variant="plain"
              autofocus
              hide-details
              @click.stop
              @keydown.stop
              @keyup.enter="edit(item.raw)"
              @mousedown.stop
            ></u-text-field>
            <u-chip
              v-else
              :color="item.raw.color + '-lighten-3'"
              :text="item.raw.title"
              variant="flat"
              label
            ></u-chip>
            <template v-slot:append>
              <u-btn
                :color="editingItem !== item.raw ? 'primary' : 'success'"
                :icon="editingItem !== item.raw ? 'hugeicons:edit-03' : 'hugeicons:tick-02'"
                size="small"
                variant="text"
                @click.stop.prevent="edit(item.raw)"
              ></u-btn>
              <u-btn
                v-if="editingItem !== item.raw"
                color="error"
                icon="hugeicons:delete-02"
                size="small"
                variant="text"
                @click.stop.prevent="removeItem(item.raw)"
              ></u-btn>
            </template>
          </u-list-item>
        </template>
      </u-combobox>
    </u-container>
  `;

/**
 * The u-combobox improves upon the added functionality from u-select and u-autocomplete. This provides you with an expansive interface to create truly customized implementations. This example takes advantage of some more advanced features such as a custom filter algorithm, inline list editing and dynamic input items.
 */
export const AdvancedCustomOptions: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UChip, UCombobox, UContainer, UListItem, UListSubheader, UTextField },
  setup() {
    type ComboboxItem = { title: string; color: string; header?: boolean };

    const colors = ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'];
    const editingItem = ref<ComboboxItem | null>(null);
    const items = ref<ComboboxItem[]>([
      { header: true, title: 'Select an option or create one', color: '' },
      { title: 'Foo', color: 'blue' },
      { title: 'Bar', color: 'red' },
    ]);
    const model = ref<ComboboxItem[]>([{ title: 'Foo', color: 'blue' }]);
    const search = ref<string | null>(null);

    const alreadySelected = toRef(() => model.value.some((x) => x.title === search.value));

    let nonce = 1;
    watch(model, (val) => {
      const newValue: ComboboxItem[] = [];
      let changed = false;
      for (const v of val) {
        if (typeof v === 'string') {
          changed = true;
          const existingItem = items.value.find((x) => x.title === v);
          if (existingItem) {
            newValue.push(existingItem);
          } else {
            const newItem: ComboboxItem = {
              title: v,
              color: colors[nonce],
            };
            newValue.push(newItem);
            items.value.push(newItem);
            nonce = (nonce + 1) % colors.length;
          }
        } else {
          newValue.push(v);
        }
      }
      if (changed) {
        model.value = newValue;
      }
    });

    function edit(item: ComboboxItem) {
      if (!editingItem.value) {
        editingItem.value = item;
      } else {
        editingItem.value = null;
      }
    }

    function filter(
      value: unknown,
      queryText: string,
      item: { raw: { header?: boolean; title: string } }
    ) {
      const toLowerCaseString = (val: unknown) => String(val !== null ? val : '').toLowerCase();

      const query = toLowerCaseString(queryText);

      const isSelected = (text: string) => model.value.some((x) => x.title === text);
      const availableOptions = items.value.filter((x) => !isSelected(x.title));
      const hasAnyMatch = availableOptions.some(
        (x) => !x.header && toLowerCaseString(x.title).includes(query)
      );
      if (item.raw.header) return !hasAnyMatch;

      const text = toLowerCaseString(item.raw.title);

      return text.includes(query);
    }

    function removeSelection(index: number) {
      model.value.splice(index, 1);
    }

    function removeItem(item: { title: string }) {
      const index = items.value.findIndex((x) => x.title === item.title);
      items.value.splice(index, 1);
    }

    return {
      colors,
      editingItem,
      items,
      model,
      search,
      alreadySelected,
      nonce,
      edit,
      filter,
      removeSelection,
      removeItem,
    };
  },
  template: advancedCustomOptionsTemplate,
});

AdvancedCustomOptions.parameters = {
  docs: {
    source: {
      code: `
<template>${advancedCustomOptionsTemplate}</template>
<script setup lang="ts">
import { ref, toRef, watch } from 'vue';

type ComboboxItem = { title: string; color: string; header?: boolean };

const colors = ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'];
const editingItem = ref<ComboboxItem | null>(null);
const items = ref<ComboboxItem[]>([
  { header: true, title: 'Select an option or create one', color: '' },
  { title: 'Foo', color: 'blue' },
  { title: 'Bar', color: 'red' },
]);
const model = ref<ComboboxItem[]>([{ title: 'Foo', color: 'blue' }]);
const search = ref<string | null>(null);

const alreadySelected = toRef(() => model.value.some((x) => x.title === search.value));

let nonce = 1;
watch(model, (val) => {
  const newValue: ComboboxItem[] = [];
  let changed = false;
  for (const v of val) {
    if (typeof v === 'string') {
      changed = true;
      const existingItem = items.value.find((x) => x.title === v);
      if (existingItem) {
        newValue.push(existingItem);
      } else {
        const newItem: ComboboxItem = {
          title: v,
          color: colors[nonce],
        };
        newValue.push(newItem);
        items.value.push(newItem);
        nonce = (nonce + 1) % colors.length;
      }
    } else {
      newValue.push(v);
    }
  }
  if (changed) {
    model.value = newValue;
  }
});

function edit(item: ComboboxItem) {
  if (!editingItem.value) {
    editingItem.value = item;
  } else {
    editingItem.value = null;
  }
}

function filter(
  value: unknown,
  queryText: string,
  item: { raw: { header?: boolean; title: string } }
) {
  const toLowerCaseString = (val: unknown) => String(val !== null ? val : '').toLowerCase();

  const query = toLowerCaseString(queryText);

  const isSelected = (text: string) => model.value.some((x) => x.title === text);
  const availableOptions = items.value.filter((x) => !isSelected(x.title));
  const hasAnyMatch = availableOptions.some(
    (x) => !x.header && toLowerCaseString(x.title).includes(query)
  );
  if (item.raw.header) return !hasAnyMatch;

  const text = toLowerCaseString(item.raw.title);

  return text.includes(query);
}

function removeSelection(index: number) {
  model.value.splice(index, 1);
}

function removeItem(item: { title: string }) {
  const index = items.value.findIndex((x) => x.title === item.title);
  items.value.splice(index, 1);
}
</script>`,
    },
  },
};
