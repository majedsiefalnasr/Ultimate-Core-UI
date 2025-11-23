import type { Meta, StoryFn } from '@storybook/vue3';

import { UTable } from '../index';

interface ComponentArgs {
  density?: 'default' | 'comfortable' | 'compact';
  fixedFooter?: boolean;
  fixedHeader?: boolean;
  height?: string | number;
  hover?: boolean;
  striped?: 'odd' | 'even' | null;
  tag?: string;
  theme?: string;
}

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Tables',
  component: UTable,
  parameters: {
    docs: {
      description: {
        component:
          'The simpler of the table components is `u-table`, a basic wrapper around the native HTML `<table>` element. Regular table elements such as `<thead>`, `<tbody>`, `<tr>`, and `<td>` work by default.',
      },
      import: `import { UTable } from '@ultimate/core-ui/components'`,
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

          return `<template>
  <u-table${attrsString}>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </u-table>
</template>
<script>
  export default {
    data () {
      return {
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
      }
    },
  }
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VTable',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/tables/',
    },
    Primary: {
      description: 'Primary usage example for `u-table`.',
    },
    api: {
      data: [
        {
          element: { title: 'v-table', link: 'https://vuetifyjs.com/en/api/v-table/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    density: {
      description: 'Adjusts the vertical height used by the component.',
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      defaultValue: 'default',
    },
    fixedFooter: {
      name: 'fixed-footer',
      description: 'Use with `height` to fix the footer to the bottom.',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    fixedHeader: {
      name: 'fixed-header',
      description: 'Use with `height` to fix the header to the top.',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    height: {
      description: 'Sets the height of the table (string or number).',
      control: { type: 'text' },
    },
    hover: {
      description: "Adds a hover effect to a table's row.",
      control: { type: 'boolean' },
      defaultValue: false,
    },
    striped: {
      description: 'Applies a background to either even or odd rows.',
      control: { type: 'select' },
      options: ['odd', 'even', null],
      defaultValue: null,
    },
    tag: {
      description: 'Specify a custom tag used on the root element.',
      control: { type: 'text' },
      defaultValue: 'div',
    },
    theme: {
      description: 'Specify a theme for this component and its children.',
      control: { type: 'text' },
    },
  } as any,
};

export default meta;

const desserts = [
  { name: 'Frozen Yogurt', calories: 159 },
  { name: 'Ice cream sandwich', calories: 237 },
  { name: 'Eclair', calories: 262 },
  { name: 'Cupcake', calories: 305 },
  { name: 'Gingerbread', calories: 356 },
  { name: 'Jelly bean', calories: 375 },
  { name: 'Lollipop', calories: 392 },
  { name: 'Honeycomb', calories: 408 },
  { name: 'Donut', calories: 452 },
  { name: 'KitKat', calories: 518 },
];

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

Default.args = {} as ComponentArgs;

export const Theme: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args" theme="dark">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

Theme.args = {} as ComponentArgs;
Theme.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-table theme="dark">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </u-table>
</template>
<script setup>
  import { ref } from 'vue'

  const desserts = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ])
</script>`,
    },
  },
};

export const Density: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args" density="compact">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

Density.args = {} as ComponentArgs;
Density.parameters = {
  docs: {
    source: {
      code: `<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
  import { ref } from 'vue'

  const desserts = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ])
</script>`,
    },
  },
};

export const Height: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args" height="300px">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

Height.args = {} as ComponentArgs;
Height.parameters = {
  docs: {
    source: {
      code: `<template>
  <v-table height="300px">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
  import { ref } from 'vue'

  const desserts = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ])
</script>`,
    },
  },
};

export const FixedHeader: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args" height="300px" fixed-header>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

FixedHeader.args = {} as ComponentArgs;
FixedHeader.parameters = {
  docs: {
    source: {
      code: `<template>
  <v-table
    height="300px"
    fixed-header
  >
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
  const desserts = [
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ]
</script>`,
    },
  },
};

export const Striped: StoryFn<ComponentArgs> = (args) => ({
  components: { UTable },
  setup() {
    return { args, desserts };
  },
  template: `
    <u-table v-bind="args" striped="even">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </u-table>
  `,
});

Striped.args = {} as ComponentArgs;
Striped.parameters = {
  docs: {
    source: {
      code: `<template>
  <v-table striped="even">
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          Calories
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.calories }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
<script setup>
  import { ref } from 'vue'

  const desserts = ref([
    {
      name: 'Frozen Yogurt',
      calories: 159,
    },
    {
      name: 'Ice cream sandwich',
      calories: 237,
    },
    {
      name: 'Eclair',
      calories: 262,
    },
    {
      name: 'Cupcake',
      calories: 305,
    },
    {
      name: 'Gingerbread',
      calories: 356,
    },
    {
      name: 'Jelly bean',
      calories: 375,
    },
    {
      name: 'Lollipop',
      calories: 392,
    },
    {
      name: 'Honeycomb',
      calories: 408,
    },
    {
      name: 'Donut',
      calories: 452,
    },
    {
      name: 'KitKat',
      calories: 518,
    },
  ])
</script>`,
    },
  },
};
