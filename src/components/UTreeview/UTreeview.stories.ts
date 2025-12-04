import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref, shallowRef, watch } from 'vue';

import {
  UAvatar,
  UCard,
  UCol,
  UContainer,
  UDivider,
  UIcon,
  URow,
  USelect,
  USheet,
  UTextField,
  UTreeview,
} from '../index';

interface ComponentArgs {
  activatable?: boolean;
  items?: unknown[];
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  itemProps?: boolean;
  itemValue?: string;
  openAll?: boolean;
  fluid?: boolean;
  selectable?: boolean;
  selectedColor?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Treeview',
  component: UTreeview,
  parameters: {
    docs: {
      description: { component: 'The `u-treeview` component displays nested hierarchical data.' },
      import: `import { UTreeview } from '@ultimate/core-ui/components'`,
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

          return `<u-treeview${attrsString}></u-treeview>`;
        },
      },
    },
    Primary: {
      description: 'A basic example of the treeview component.',
    },
    api: {
      data: [
        {
          element: { title: 'v-treeview', link: 'https://vuetifyjs.com/en/api/v-treeview/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-treeview-item',
            link: 'https://vuetifyjs.com/en/api/v-treeview-item/',
          },
          description: 'Sub-component used to display a single treeview node',
        },
        {
          element: {
            title: 'v-treeview-group',
            link: 'https://vuetifyjs.com/en/api/v-treeview-group/',
          },
          description: 'Sub-component used to display a single treeview node’s children',
        },
      ],
    },
    Vuetify: {
      component: 'VTreeview',
      content: 'This is based on Vuetify VTreeview',
      link: 'https://vuetifyjs.com/en/components/treeview/',
    },
  },
  argTypes: {
    activatable: {
      name: 'activatable',
      description: 'Allows user to mark a node as active by clicking on it.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    items: {
      name: 'items',
      description: 'The items to display in the treeview.',
      control: { type: 'object' },
      table: { type: { summary: 'unknown[]' }, defaultValue: { summary: 'undefined' } },
    },
    color: {
      name: 'color',
      description: 'Applies a color to the active node.',
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
    itemProps: {
      name: 'item-props',
      description:
        'Spread item properties onto each item component (useful for per-item props like disabled).',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    itemValue: {
      name: 'item-value',
      description:
        "item-value SelectItemKey 'value' Property on supplied items that contains its value.",
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'value' } },
    },
    openAll: {
      name: 'open-all',
      description: 'When true will cause all branch nodes to be opened when component is mounted.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fluid: {
      name: 'fluid',
      description: 'Removes indentation from nested items.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectable: {
      name: 'selectable',
      description: 'Render a checkbox next to each node to allow selection.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectedColor: {
      name: 'selected-color',
      description: 'Color of the selected node checkbox.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
  } as any,
};

export default meta;

function sampleItems() {
  return [
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ];
}

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    return { args };
  },
  template: `<u-treeview v-bind="args" ></u-treeview>`,
});

Default.args = {
  items: sampleItems(),
  itemValue: 'id',
} as ComponentArgs;

// Activatable Story
const activatableTemplate = `<u-treeview :items="items" item-value="id" activatable></u-treeview>`;

/**
 * Treeview nodes can be activated by clicking on them.
 */
export const Activatable: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: activatableTemplate,
});

Activatable.parameters = {
  docs: {
    source: {
      code: `<template>${activatableTemplate}</template>
      
<script setup>
  import { ref } from 'vue'

  const items = ref([
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ])
</script>`,
    },
  },
};

// Color Story
const colorTemplate = `<u-treeview :items="items" color="warning" item-value="id" activatable></u-treeview>`;

/**
 * You can control the text and background color of the active treeview node.
 */
export const Color: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: colorTemplate,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>${colorTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const items = ref([
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ])
</script>`,
    },
  },
};

// Density Story
const densityTemplate = `<u-treeview :items="items" density="compact" item-value="id"></u-treeview>`;

/**
 * Dense mode provides more compact layout with decreased heights of the items.
 */
export const DenseMode: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: densityTemplate,
});

DenseMode.parameters = {
  docs: {
    source: {
      code: `<template>${densityTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const items = ref([
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ])
</script>`,
    },
  },
};

// Item Props Story
const itemPropsTemplate = `<u-treeview :items="items" item-value="id" item-props selectable></u-treeview>`;

/**
 * If item-props is set to true then the whole item will be spread. In the following example, the disabled prop defined in each item will disable the item accordingly.
 */
export const ItemProps: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    // add disabled flags to demonstrate item-props
    (items.value as any)[0].disabled = true;
    (items.value as any)[2].children[0].disabled = true;
    return { args, items };
  },
  template: itemPropsTemplate,
});

ItemProps.parameters = {
  docs: {
    source: {
      code: `<template>${itemPropsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const items = ref([
    {
      id: 1,
      title: 'Applications :',
      disabled: true,
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              disabled: true,
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf', disabled: true },
        { id: 17, title: 'November : pdf', disabled: true },
        { id: 18, title: 'Tutorial : html', disabled: true },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ])
</script>`,
    },
  },
};

// Open All Story
const openAllTemplate = `<u-treeview :items="items" item-value="id" open-all></u-treeview>`;

/**
 * Treeview nodes can be pre-opened on page load.
 */
export const OpenAll: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: openAllTemplate,
});

OpenAll.parameters = {
  docs: {
    source: {
      code: `<template>${openAllTemplate}</template>

<script setup>
  const items = [
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ]
</script>`,
    },
  },
};

// Fluid Story
const fluidTemplate = `<u-treeview :items="items" item-value="id" fluid></u-treeview>`;

/**
 * The fluid prop removes the extra indentation used to line up children. This is useful when you want to reduce the horizontal space used by the treeview.
 */
export const Fluid: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: fluidTemplate,
});

Fluid.parameters = {
  docs: {
    source: {
      code: `<template>${fluidTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const items = ref([
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ])
</script>`,
    },
  },
};

// Selected Color Story
const selectedColorTemplate = `<u-treeview :items="items" item-value="id" selected-color="red" selectable></u-treeview>`;

/**
 * You can control the color of the selected node checkbox.
 */
export const SelectedColor: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview },
  setup() {
    const items = ref(sampleItems());
    return { args, items };
  },
  template: selectedColorTemplate,
});

SelectedColor.parameters = {
  docs: {
    source: {
      code: `<template>${selectedColorTemplate}</template>

<script setup>
  const items = [
    {
      id: 1,
      title: 'Applications :',
      children: [
        { id: 2, title: 'Calendar : app' },
        { id: 3, title: 'Chrome : app' },
        { id: 4, title: 'Webstorm : app' },
      ],
    },
    {
      id: 5,
      title: 'Documents :',
      children: [
        {
          id: 6,
          title: 'vuetify :',
          children: [
            {
              id: 7,
              title: 'src :',
              children: [
                { id: 8, title: 'index : ts' },
                { id: 9, title: 'bootstrap : ts' },
              ],
            },
          ],
        },
        {
          id: 10,
          title: 'material2 :',
          children: [
            {
              id: 11,
              title: 'src :',
              children: [
                { id: 12, title: 'v-btn : ts' },
                { id: 13, title: 'v-card : ts' },
                { id: 14, title: 'v-window : ts' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      title: 'Downloads :',
      children: [
        { id: 16, title: 'October : pdf' },
        { id: 17, title: 'November : pdf' },
        { id: 18, title: 'Tutorial : html' },
      ],
    },
    {
      id: 19,
      title: 'Videos :',
      children: [
        {
          id: 20,
          title: 'Tutorials :',
          children: [
            { id: 21, title: 'Basic layouts : mp4' },
            { id: 22, title: 'Advanced techniques : mp4' },
            { id: 23, title: 'All about app : dir' },
          ],
        },
        { id: 24, title: 'Intro : mov' },
        { id: 25, title: 'Conference introduction : avi' },
      ],
    },
  ]
</script>`,
    },
  },
};

// Selection Type Story
const selectionTypeTemplate = `
  <u-sheet border rounded>
    <u-container fluid>
      <u-select
        v-model="strategy"
        :items="['leaf', 'single-leaf', 'independent', 'single-independent', 'classic']"
        label="Selection type"
      ></u-select>
      
      <u-row>
        <u-col cols="12" md="6">
          <u-treeview
            v-model:selected="selected"
            :items="items"
            :select-strategy="strategy"
            item-value="id"
            return-object
            selectable
          ></u-treeview>
        </u-col>

        <u-divider vertical></u-divider>

        <u-col class="pa-6" cols="12" md="6">
          <template v-if="!selected.length">No nodes selected.</template>

          <template v-else>
            <div v-for="node in selected" :key="node.id">
              {{ node.title }}
            </div>
          </template>
        </u-col>
      </u-row>
    </u-container>
  </u-sheet>
  `;

/**
 * Treeview now supports two different selection types. The default type is ‘leaf’, which will only include leaf nodes in the v-model array, but will render parent nodes as either partially or fully selected. The alternative mode is ‘independent’, which allows one to select parent nodes, but each node is independent of its parent and children.
 */
export const SelectionType: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview, USelect, URow, UCol, UDivider, UContainer, USheet },
  setup() {
    const strategy = shallowRef('leaf');
    const selected = shallowRef([]);
    const items = ref([
      {
        id: 1,
        title: 'Root',
        children: [
          { id: 2, title: 'Child #1' },
          { id: 3, title: 'Child #2' },
          {
            id: 4,
            title: 'Child #3',
            children: [
              { id: 5, title: 'Grandchild #1' },
              { id: 6, title: 'Grandchild #2' },
            ],
          },
        ],
      },
    ]);
    return { args, strategy, selected, items };
  },
  template: selectionTypeTemplate,
});

SelectionType.parameters = {
  docs: {
    source: {
      code: `<template>${selectionTypeTemplate}</template>

<script setup>
  import { ref, shallowRef } from 'vue'

  const strategy = shallowRef('leaf')
  const selected = shallowRef([])
  const items = ref([
    {
      id: 1,
      title: 'Root',
      children: [
        { id: 2, title: 'Child #1' },
        { id: 3, title: 'Child #2' },
        {
          id: 4,
          title: 'Child #3',
          children: [
            { id: 5, title: 'Grandchild #1' },
            { id: 6, title: 'Grandchild #2' },
          ],
        },
      ],
    },
  ])
</script>`,
    },
  },
};

// Load Children Story
const loadChildrenTemplate = `<u-container fluid>
    <u-row justify="space-between" dense>
      <u-col cols="12" md="5">
        <u-treeview
          v-model:activated="active"
          v-model:opened="open"
          :items="items"
          :load-children="fetchUsers"
          density="compact"
          item-title="name"
          item-value="id"
          activatable
          border
          fluid
          open-on-click
          rounded
        >
          <template v-slot:prepend="{ item }">
            <u-icon v-if="!item.children" icon="hugeicons:user-03"></u-icon>
          </template>
        </u-treeview>
      </u-col>

      <u-col class="d-flex text-center" cols="12" md="7">
        <u-card
          class="text-h6 justify-center align-center flex-1-1 d-flex"
          color="surface-light"
          height="100%"
          flat
          rounded
        >
          <template v-slot:text>
            <div v-if="!selected" class="text-subtitle-1">Select a User</div>

            <template v-else>
              <u-avatar :image="\`https://avataaars.io/\${avatar}\`" class="mb-2" size="88"></u-avatar>

              <h3 class="text-h5">{{ selected.name }}</h3>

              <div class="text-medium-emphasis">{{ selected.email }}</div>

              <div class="text-medium-emphasis font-weight-bold">{{ selected.username }}</div>

              <u-divider class="my-4"></u-divider>

              <u-text-field
                :model-value="selected.company.name"
                class="mx-auto mb-2"
                density="compact"
                max-width="250"
                prefix="Company:"
                variant="solo"
                flat
                hide-details
                readonly
              ></u-text-field>

              <u-text-field
                :model-value="selected.website"
                class="mx-auto mb-2"
                density="compact"
                max-width="250"
                prefix="Website:"
                variant="solo"
                flat
                hide-details
                readonly
              ></u-text-field>

              <u-text-field
                :model-value="selected.phone"
                class="mx-auto"
                density="compact"
                max-width="250"
                prefix="Phone:"
                variant="solo"
                flat
                hide-details
                readonly
              ></u-text-field>
            </template>
          </template>
        </u-card>
      </u-col>
    </u-row>
  </u-container>
  `;

/**
 * You can dynamically load child data by supplying a Promise callback to the load-children prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.
 */
export const LoadChildren: StoryFn<ComponentArgs> = (args) => ({
  components: { UTreeview, UContainer, URow, UCol, UCard, UAvatar, UDivider, UTextField, UIcon },
  setup() {
    interface User {
      id: number;
      name: string;
      email: string;
      username: string;
      company: {
        name: string;
      };
      website: string;
      phone: string;
    }

    const avatars = [
      '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
      '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
      '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
      '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
      '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
    ];

    const pause = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

    const active = ref([]);
    const avatar = ref<string | null>(null);
    const open = ref([]);
    const users = ref<User[]>([]);

    const items = computed(() => [
      {
        name: 'Users',
        children: users.value,
        id: 'users',
      },
    ]);

    const selected = computed(() => {
      if (!active.value.length) return undefined;

      const id = active.value[0];

      return users.value.find((user) => user.id === id);
    });

    watch(selected, () => {
      randomAvatar();
    });

    interface Company {
      name: string;
    }

    interface UserResponse {
      id: number;
      name: string;
      email: string;
      username: string;
      company: Company;
      website: string;
      phone: string;
    }

    interface TreeItem {
      name: string;
      children: UserResponse[];
      id: string;
    }

    async function fetchUsers(item: TreeItem): Promise<void> {
      await pause(1500);

      await fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json: UserResponse[]) => {
          item.children.push(...json);
        })
        .catch((err: unknown) => {
          console.warn(err);
        });
    }

    function randomAvatar() {
      avatar.value = avatars[Math.floor(Math.random() * avatars.length)];
    }

    return { args, active, avatar, open, items, fetchUsers, selected };
  },
  template: loadChildrenTemplate,
});

LoadChildren.parameters = {
  docs: {
    source: {
      code: `<template>${loadChildrenTemplate}</template>
      
<script setup>
  import { computed, ref, watch } from 'vue'

  const avatars = [
    '?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban',
    '?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun',
    '?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong',
    '?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair',
    '?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly',
  ]

  const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

  const active = ref([])
  const avatar = ref(null)
  const open = ref([])
  const users = ref([])

  const items = computed(() => [
    {
      name: 'Users',
      children: users.value,
      id: 'users',
    },
  ])

  const selected = computed(() => {
    if (!active.value.length) return undefined

    const id = active.value[0]

    return users.value.find(user => user.id === id)
  })

  watch(selected, () => {
    randomAvatar()
  })

  async function fetchUsers (item) {
    await pause(1500)

    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => (item.children.push(...json)))
      .catch(err => console.warn(err))
  }

  function randomAvatar () {
    avatar.value = avatars[Math.floor(Math.random() * avatars.length)]
  }
</script>`,
    },
  },
};
