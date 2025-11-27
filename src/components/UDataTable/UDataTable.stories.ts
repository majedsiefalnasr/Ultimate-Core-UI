import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UCheckboxBtn, UDataTable } from '../index';

interface ComponentArgs {
  items?: Record<string, unknown>[];
  headers?: Record<string, unknown>[];
  density?: 'default' | 'comfortable' | 'compact';
  itemsPerPage?: number;
  search?: string;
  loading?: boolean;
  showSelect?: boolean;
  hideDefaultHeader?: boolean;
  hideDefaultFooter?: boolean;
  groupBy?: Record<string, unknown>[];
  sortBy?: Record<string, unknown>[];
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Data Tables',
  component: UDataTable,
  parameters: {
    docs: {
      description: {
        component:
          'The u-data-table component is used for displaying tabular data. Features include sorting, searching, pagination, grouping, and row selection.',
      },
      import: `import { UDataTable } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          // Build attributes string from args
          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([key, value]) => {
              // Exclude items and headers from inline display
              if (key === 'items' || key === 'headers') return false;
              return value !== undefined && value !== false;
            })
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<u-data-table :items="items"${attrsString}></u-data-table>`;
        },
      },
    },
    Vuetify: {
      component: 'VDataTable',
      content:
        'The standard data table presumes that the entire data set is available locally. Sorting, pagination, and filtering is supported and done internally by the component itself.',
      link: 'https://vuetifyjs.com/en/components/data-tables/',
    },
    Primary: {
      description:
        'The standard data table supports sorting, searching, pagination, grouping, and row selection out of the box.',
    },
    api: {
      data: [
        {
          element: { title: 'v-data-table', link: 'https://vuetifyjs.com/en/api/v-data-table/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-data-table-headers',
            link: 'https://vuetifyjs.com/en/api/v-data-table-headers/',
          },
          description: 'Functional Component used to display Data-table headers',
        },
        {
          element: {
            title: 'v-data-table-footer',
            link: 'https://vuetifyjs.com/en/api/v-data-table-footer/',
          },
          description: 'Functional Component used to display Data-table footers',
        },
        {
          element: {
            title: 'v-data-table-row',
            link: 'https://vuetifyjs.com/en/api/v-data-table-row/',
          },
          description: 'Functional Component used to display a single row of a data-table',
        },
        {
          element: {
            title: 'v-data-table-rows',
            link: 'https://vuetifyjs.com/en/api/v-data-table-rows/',
          },
          description: 'Functional Component used to display all of the rows in a data-table',
        },
        {
          element: {
            title: 'v-checkbox-btn',
            link: 'https://vuetifyjs.com/en/api/v-checkbox-btn/',
          },
          description: 'Reusable lightweight v-checkbox',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'An array of objects used for table data',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    headers: {
      control: 'object',
      description: 'An array of objects that each describe a header column',
      table: {
        type: { summary: 'object[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height of the table rows',
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    itemsPerPage: {
      control: 'number',
      description: 'Changes how many items per page should be visible',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '10' },
      },
    },
    search: {
      control: 'text',
      description: 'Text input used to filter items',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Displays loading slot if set to true',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    showSelect: {
      control: 'boolean',
      description: 'Shows the select checkboxes in both the header and rows',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideDefaultHeader: {
      control: 'boolean',
      description: 'Hides the default header',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideDefaultFooter: {
      control: 'boolean',
      description: 'Hides the default footer',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    groupBy: {
      control: 'object',
      description: 'Configures attributes (and sort order) to group items together',
      table: {
        type: { summary: 'SortItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
    sortBy: {
      control: 'object',
      description: 'Changes which item property (or properties) should be used for sort order',
      table: {
        type: { summary: 'SortItem[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDataTable },
  setup() {
    return { args };
  },
  template: '<u-data-table v-bind="args"></u-data-table>',
});

Default.args = {
  items: [
    {
      name: 'African Elephant',
      species: 'Loxodonta africana',
      diet: 'Herbivore',
      habitat: 'Savanna, Forests',
    },
    {
      name: 'Giant Panda',
      species: 'Ailuropoda melanoleuca',
      diet: 'Herbivore',
      habitat: 'Temperate Forests',
    },
    {
      name: 'Bengal Tiger',
      species: 'Panthera tigris tigris',
      diet: 'Carnivore',
      habitat: 'Grasslands, Forests',
    },
    {
      name: 'Blue Whale',
      species: 'Balaenoptera musculus',
      diet: 'Carnivore',
      habitat: 'Ocean',
    },
    {
      name: 'Mountain Gorilla',
      species: 'Gorilla beringei beringei',
      diet: 'Herbivore',
      habitat: 'Mountain Forests',
    },
    {
      name: 'Komodo Dragon',
      species: 'Varanus komodoensis',
      diet: 'Carnivore',
      habitat: 'Grasslands, Forests',
    },
    {
      name: 'Green Iguana',
      species: 'Iguana iguana',
      diet: 'Herbivore',
      habitat: 'Trees',
    },
    {
      name: 'Blue Poison Dart Frog',
      species: 'Dendrobates tinctorius',
      diet: 'Carnivore',
      habitat: 'Tropical Rainforests',
    },
  ],
} as ComponentArgs;

export const Density: StoryFn<ComponentArgs> = (args) => ({
  components: { UDataTable },
  setup() {
    return { args };
  },
  template: '<u-data-table v-bind="args"></u-data-table>',
});

Density.args = {
  headers: [
    { title: 'Plant', align: 'start', sortable: false, key: 'name' },
    { title: 'Light', align: 'end', key: 'light' },
    { title: 'Height', align: 'end', key: 'height' },
    { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
    { title: 'Price ($)', align: 'end', key: 'price' },
  ],
  items: [
    { name: 'Fern', light: 'Low', height: '20cm', petFriendly: 'Yes', price: 20 },
    { name: 'Snake Plant', light: 'Low', height: '50cm', petFriendly: 'No', price: 35 },
    { name: 'Monstera', light: 'Medium', height: '60cm', petFriendly: 'No', price: 50 },
    {
      name: 'Pothos',
      light: 'Low to medium',
      height: '40cm',
      petFriendly: 'Yes',
      price: 25,
    },
    {
      name: 'ZZ Plant',
      light: 'Low to medium',
      height: '90cm',
      petFriendly: 'Yes',
      price: 30,
    },
    {
      name: 'Spider Plant',
      light: 'Bright, indirect',
      height: '30cm',
      petFriendly: 'Yes',
      price: 15,
    },
    {
      name: 'Air Plant',
      light: 'Bright, indirect',
      height: '15cm',
      petFriendly: 'Yes',
      price: 10,
    },
    {
      name: 'Peperomia',
      light: 'Bright, indirect',
      height: '25cm',
      petFriendly: 'Yes',
      price: 20,
    },
    { name: 'Aloe Vera', light: 'Bright, direct', height: '30cm', petFriendly: 'Yes', price: 15 },
    { name: 'Jade Plant', light: 'Bright, direct', height: '40cm', petFriendly: 'Yes', price: 25 },
  ],
  density: 'compact',
  itemsPerPage: 10,
} as ComponentArgs;

Density.parameters = {
  docs: {
    description: {
      story:
        'Using the density prop you can adjust the vertical height of table rows. Options include default, comfortable, and compact.',
    },
    source: {
      code: `<template>
  <u-data-table
    :headers="headers"
    :items="plants"
    density="compact"
    item-key="name"
  ></u-data-table>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Plant', align: 'start', sortable: false, key: 'name' },
  { title: 'Light', align: 'end', key: 'light' },
  { title: 'Height', align: 'end', key: 'height' },
  { title: 'Pet Friendly', align: 'end', key: 'petFriendly' },
  { title: 'Price ($)', align: 'end', key: 'price' },
];

const plants = [
  { name: 'Fern', light: 'Low', height: '20cm', petFriendly: 'Yes', price: 20 },
  { name: 'Snake Plant', light: 'Low', height: '50cm', petFriendly: 'No', price: 35 },
  // ... more items
];
</script>`,
    },
  },
};

export const HideDefaultHeaderAndFooter: StoryFn<ComponentArgs> = (args) => ({
  components: { UDataTable },
  setup() {
    return { args };
  },
  template: '<u-data-table v-bind="args"></u-data-table>',
});

HideDefaultHeaderAndFooter.args = {
  headers: [
    { title: 'Dessert(100g serving)', align: 'start', key: 'name' },
    { title: 'Calories', align: 'end', key: 'calories' },
    { title: 'Fat(g)', align: 'end', key: 'fat' },
    { title: 'Carbs(g)', align: 'end', key: 'carbs' },
    { title: 'Protein(g)', align: 'end', key: 'protein' },
    { title: 'Iron(%)', align: 'end', key: 'iron' },
  ],
  items: [
    { name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, iron: '1%' },
    { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3, iron: '1%' },
    { name: 'Eclair', calories: 262, fat: 16, carbs: 23, protein: 6, iron: '7%' },
    { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3, iron: '8%' },
    { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9, iron: '16%' },
    { name: 'Jelly bean', calories: 375, fat: 0, carbs: 94, protein: 0, iron: '0%' },
    { name: 'Lollipop', calories: 392, fat: 0.2, carbs: 98, protein: 0, iron: '2%' },
    { name: 'Honeycomb', calories: 408, fat: 3.2, carbs: 87, protein: 6.5, iron: '45%' },
    { name: 'Donut', calories: 452, fat: 25, carbs: 51, protein: 4.9, iron: '22%' },
    { name: 'KitKat', calories: 518, fat: 26, carbs: 65, protein: 7, iron: '6%' },
  ],
  hideDefaultHeader: true,
  hideDefaultFooter: true,
} as ComponentArgs;

HideDefaultHeaderAndFooter.parameters = {
  docs: {
    description: {
      story:
        'You can apply the hide-default-header and hide-default-footer props to remove the default header and footer respectively.',
    },
    source: {
      code: `<template>
  <u-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
    hide-default-header
  ></u-data-table>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Dessert(100g serving)', align: 'start', key: 'name' },
  { title: 'Calories', align: 'end', key: 'calories' },
  { title: 'Fat(g)', align: 'end', key: 'fat' },
  { title: 'Carbs(g)', align: 'end', key: 'carbs' },
  { title: 'Protein(g)', align: 'end', key: 'protein' },
  { title: 'Iron(%)', align: 'end', key: 'iron' },
];

const desserts = [
  { name: 'Frozen Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4, iron: '1%' },
  // ... more items
];
</script>`,
    },
  },
};

export const Selection: StoryFn<ComponentArgs> = () => ({
  components: { UDataTable },
  setup() {
    const selected = ref([]);
    const items = [
      { name: '🍎 Apple', location: 'Washington', height: '0.1', base: '0.07', volume: '0.0001' },
      { name: '🍌 Banana', location: 'Ecuador', height: '0.2', base: '0.05', volume: '0.0002' },
      { name: '🍇 Grapes', location: 'Italy', height: '0.02', base: '0.02', volume: '0.00001' },
      { name: '🍉 Watermelon', location: 'China', height: '0.4', base: '0.3', volume: '0.03' },
      { name: '🍍 Pineapple', location: 'Thailand', height: '0.3', base: '0.2', volume: '0.005' },
      { name: '🍒 Cherries', location: 'Turkey', height: '0.02', base: '0.02', volume: '0.00001' },
      { name: '🥭 Mango', location: 'India', height: '0.15', base: '0.1', volume: '0.0005' },
      { name: '🍓 Strawberry', location: 'USA', height: '0.03', base: '0.03', volume: '0.00002' },
      { name: '🍑 Peach', location: 'China', height: '0.09', base: '0.08', volume: '0.0004' },
      { name: '🥝 Kiwi', location: 'New Zealand', height: '0.05', base: '0.05', volume: '0.0001' },
    ];

    return { selected, items };
  },
  template: `
    <u-data-table
      v-model="selected"
      :items="items"
      item-value="name"
      show-select
    ></u-data-table>
  `,
});

Selection.parameters = {
  docs: {
    description: {
      story:
        'The show-select prop will render a checkbox in the default header to toggle all rows, and a checkbox for each row.',
    },
    source: {
      code: `<template>
  <u-data-table
    v-model="selected"
    :items="items"
    item-value="name"
    show-select
  ></u-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selected = ref([]);
const items = [
  { name: '🍎 Apple', location: 'Washington', height: '0.1', base: '0.07', volume: '0.0001' },
  { name: '🍌 Banana', location: 'Ecuador', height: '0.2', base: '0.05', volume: '0.0002' },
  { name: '🍇 Grapes', location: 'Italy', height: '0.02', base: '0.02', volume: '0.00001' },
  // ... more items
];
</script>`,
    },
  },
};

export const SimpleCheckbox: StoryFn<ComponentArgs> = () => ({
  components: { UDataTable, UCheckboxBtn },
  setup() {
    const consoles = ref([
      { name: 'PlayStation 5', manufacturer: 'Sony', year: 2020, sales: '10M', exclusive: true },
      {
        name: 'Xbox Series X',
        manufacturer: 'Microsoft',
        year: 2020,
        sales: '6.5M',
        exclusive: false,
      },
      {
        name: 'Nintendo Switch',
        manufacturer: 'Nintendo',
        year: 2017,
        sales: '89M',
        exclusive: true,
      },
      { name: 'PlayStation 4', manufacturer: 'Sony', year: 2013, sales: '116M', exclusive: true },
      { name: 'Xbox One', manufacturer: 'Microsoft', year: 2013, sales: '50M', exclusive: false },
      {
        name: 'Nintendo Wii',
        manufacturer: 'Nintendo',
        year: 2006,
        sales: '101M',
        exclusive: true,
      },
    ]);

    return { consoles };
  },
  template: `
    <u-data-table :items="consoles" hide-default-footer>
      <template v-slot:item.exclusive="{ item }">
        <u-checkbox-btn
          v-model="item.exclusive"
          :ripple="false"
        ></u-checkbox-btn>
      </template>
    </u-data-table>
  `,
});

SimpleCheckbox.parameters = {
  docs: {
    description: {
      story:
        'When wanting to use a checkbox component inside of a slot template in your data tables, use the v-checkbox-btn component rather than the v-checkbox component.',
    },
    source: {
      code: `<template>
  <u-data-table :items="consoles" hide-default-footer>
    <template v-slot:item.exclusive="{ item }">
      <u-checkbox-btn
        v-model="item.exclusive"
        :ripple="false"
      ></u-checkbox-btn>
    </template>
  </u-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const consoles = ref([
  { name: 'PlayStation 5', manufacturer: 'Sony', year: 2020, sales: '10M', exclusive: true },
  { name: 'Xbox Series X', manufacturer: 'Microsoft', year: 2020, sales: '6.5M', exclusive: false },
  { name: 'Nintendo Switch', manufacturer: 'Nintendo', year: 2017, sales: '89M', exclusive: true },
  // ... more items
]);
</script>`,
    },
  },
};

export const GroupBy: StoryFn<ComponentArgs> = () => ({
  components: { UDataTable },
  setup() {
    const sortBy = ref([{ key: 'name', order: 'asc' }]);
    const groupBy = ref([
      { key: 'category', order: 'asc' },
      { key: 'status', order: 'asc' },
    ]);

    const headers = [
      { key: 'data-table-group', title: 'Category' },
      { title: 'Dessert (100g serving)', align: 'start', key: 'name', groupable: false },
      { title: 'Dairy', key: 'dairy', align: 'end' },
    ];

    const desserts = [
      { name: 'Frozen Yogurt', category: 'Ice cream', status: 'Available', dairy: 'Yes' },
      { name: 'Ice cream sandwich', category: 'Ice cream', status: 'Available', dairy: 'Yes' },
      { name: 'Eclair', category: 'Cookie', status: 'Out of stock', dairy: 'Yes' },
      { name: 'Cupcake', category: 'Pastry', status: 'Out of stock', dairy: 'Yes' },
      { name: 'Gingerbread', category: 'Cookie', status: 'Available', dairy: 'No' },
      { name: 'Jelly bean', category: 'Candy', status: 'Available', dairy: 'No' },
      { name: 'Lollipop', category: 'Candy', status: 'Out of stock', dairy: 'No' },
      { name: 'Honeycomb', category: 'Toffee', status: 'Out of stock', dairy: 'No' },
      { name: 'Donut', category: 'Pastry', dairy: 'Yes', status: 'Available' },
      { name: 'KitKat', category: 'Candy', dairy: 'Yes', status: 'Available' },
    ];

    return { sortBy, groupBy, headers, desserts };
  },
  template: `
    <u-data-table
      :group-by="groupBy"
      :headers="headers"
      :items="desserts"
      :sort-by="sortBy"
      item-value="name"
    ></u-data-table>
  `,
});

GroupBy.parameters = {
  docs: {
    description: {
      story:
        'The group-by prop makes it possible to group rows by one or more attributes. This example groups desserts by category and status.',
    },
    source: {
      code: `<template>
  <u-data-table
    :group-by="groupBy"
    :headers="headers"
    :items="desserts"
    :sort-by="sortBy"
    item-value="name"
  ></u-data-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const sortBy = ref([{ key: 'name', order: 'asc' }]);
const groupBy = ref([
  { key: 'category', order: 'asc' },
  { key: 'status', order: 'asc' },
]);

const headers = [
  { key: 'data-table-group', title: 'Category' },
  { title: 'Dessert (100g serving)', align: 'start', key: 'name', groupable: false },
  { title: 'Dairy', key: 'dairy', align: 'end' },
];

const desserts = [
  { name: 'Frozen Yogurt', category: 'Ice cream', status: 'Available', dairy: 'Yes' },
  { name: 'Ice cream sandwich', category: 'Ice cream', status: 'Available', dairy: 'Yes' },
  // ... more items
];
</script>`,
    },
  },
};
