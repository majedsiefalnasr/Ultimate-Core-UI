import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UBtn,
  UCard,
  UDivider,
  UIcon,
  ULayout,
  UList,
  UListGroup,
  UListItem,
  UListItemTitle,
  UListSubheader,
  UMain,
  UNavigationDrawer,
} from '../index';

interface ComponentArgs {
  items?: any[];
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  variant?: string;
  nav?: boolean;
  lines?: string | false;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Lists',
  component: UList,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-list` component is used to display information. It can contain an avatar, content, actions, subheaders and much more. Lists present content in a way that makes it easy to identify a specific item in a collection.',
      },
      import: `import { UList } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false && value !== 'default')
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `
            <u-card class="mx-auto" max-width="300">
              <u-list${attrsString}></u-list>
            </u-card>
    `;
        },
      },
    },
    Vuetify: {
      component: 'VList',
      content: "Built on Vuetify's list components. See Vuetify docs for full API.",
      link: 'https://vuetifyjs.com/en/components/lists/',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-list',
            link: 'https://vuetifyjs.com/en/api/v-list/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-list-group',
            link: 'https://vuetifyjs.com/en/api/v-list-group/',
          },
          description: 'Sub-component used to display or hide groups of items',
        },
        {
          element: {
            title: 'v-list-subheader',
            link: 'https://vuetifyjs.com/en/api/v-list-subheader/',
          },
          description: 'Sub-component used to separate groups of items',
        },
        {
          element: {
            title: 'v-list-item',
            link: 'https://vuetifyjs.com/en/api/v-list-item/',
          },
          description: 'Sub-component used to display a single item or modify the `v-list` state',
        },
        {
          element: {
            title: 'v-list-item-title',
            link: 'https://vuetifyjs.com/en/api/v-list-item-title/',
          },
          description:
            'Sub-component used to display the title of a list item. Wraps the #title slot',
        },
        {
          element: {
            title: 'v-list-item-subtitle',
            link: 'https://vuetifyjs.com/en/api/v-list-item-subtitle/',
          },
          description:
            'Sub-component used to display the subtitle of a list item. Wraps the #subtitle slot',
        },
        {
          element: {
            title: 'v-list-item-action',
            link: 'https://vuetifyjs.com/en/api/v-list-item-action/',
          },
          description: 'Sub-component used to display v-checkbox or v-switch',
        },
        {
          element: {
            title: 'v-list-img',
            link: 'https://vuetifyjs.com/en/api/v-list-img/',
          },
          description: 'Sub-component that is used to wrap the v-img component',
        },
        {
          element: {
            title: 'v-list-item-media',
            link: 'https://vuetifyjs.com/en/api/v-list-item-media/',
          },
          description: 'Sub-component that is used to wrap the v-img component',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: { type: 'object' },
      description: 'Items array (objects or strings) used by the `items` prop.',
      table: { type: { summary: 'object | Array' } },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Controls vertical density of list items.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Puts all children inputs into a disabled state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Visual variant for the list.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'text' } },
    },
    nav: {
      control: { type: 'boolean' },
      description: 'Alternative nav styling for use in navigation drawers.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    lines: {
      control: { type: 'select' },
      options: [false, 'one', 'two', 'three'],
      description: 'Sets minimum lines for children list-items.',
      table: {
        type: { summary: "false | 'one' | 'two' | 'three'" },
        defaultValue: { summary: 'one' },
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UList, UListItem, UCard },
  setup() {
    return { args };
  },
  template: `
    <u-card class="mx-auto" max-width="300">
      <u-list v-bind="args"></u-list>
    </u-card>
  `,
});

Default.args = {
  lines: 'one',
  items: [
    { title: 'Item #1', value: 1 },
    { title: 'Item #2', value: 2 },
    { title: 'Item #3', value: 3 },
  ],
} as ComponentArgs;

// Items story
const itemsTemplate = `
    <u-card class="mx-auto" max-width="300">
      <u-list :items="items"></u-list>
    </u-card>
  `;

/**
 * Lists can either be created by markup using the many sub-components that are available,
 * or by using the items prop.
 */
export const Items: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList },
  setup() {
    const items = [
      { type: 'subheader', title: 'Group #1' },
      { title: 'Item #1', value: 1 },
      { title: 'Item #2', value: 2 },
      { title: 'Item #3', value: 3 },
      { type: 'divider' },
      { type: 'subheader', title: 'Group #2' },
      { title: 'Item #4', value: 4 },
      { title: 'Item #5', value: 5 },
      { title: 'Item #6', value: 6 },
    ];
    return { items };
  },
  template: itemsTemplate,
});

Items.parameters = {
  docs: {
    source: {
      code: `
<template>${itemsTemplate}</template>

<script setup>
  const items = [
    { type: 'subheader', title: 'Group #1' },
    { title: 'Item #1', value: 1 },
    { title: 'Item #2', value: 2 },
    { title: 'Item #3', value: 3 },
    { type: 'divider' },
    { type: 'subheader', title: 'Group #2' },
    { title: 'Item #4', value: 4 },
    { title: 'Item #5', value: 5 },
    { title: 'Item #6', value: 6 },
  ]
</script>`,
    },
  },
};

// Density story
const densityTemplate = `
    <u-card class="mx-auto" max-width="300">
      <u-list density="compact">
        <u-list-subheader>REPORTS</u-list-subheader>

        <u-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
          <template #prepend>
            <u-icon :icon="item.icon"></u-icon>
          </template>

          <u-list-item-title v-text="item.text"></u-list-item-title>
        </u-list-item>
      </u-list>
    </u-card>
  `;

/**
 * u-list supports the density property.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList, UListItem, UIcon, UListItemTitle, UListSubheader },
  setup() {
    const items = [
      { text: 'Real-Time', icon: 'hugeicons:clock-01' },
      { text: 'Audience', icon: 'hugeicons:user-03' },
      { text: 'Conversions', icon: 'hugeicons:flag-01' },
    ];
    return { items };
  },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `
<template>${densityTemplate}</template>

<script setup>
  const items = [
    { text: 'Real-Time', icon: 'hugeicons:clock-01' },
    { text: 'Audience', icon: 'hugeicons:user-03' },
    { text: 'Conversions', icon: 'hugeicons:flag-01' },
  ]
</script>`,
    },
  },
};

// Disabled story
const disabledTemplate = `
    <u-card class="mx-auto" max-width="300">
      <u-list disabled>
        <u-list-subheader>REPORTS</u-list-subheader>

        <u-list-item v-for="(item, i) in items" :key="i">
          <template #prepend>
            <u-icon :icon="item.icon"></u-icon>
          </template>

          <u-list-item-title v-text="item.text"></u-list-item-title>
        </u-list-item>
      </u-list>
    </u-card>
  `;

/**
 * You cannot interact with disabled u-list.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList, UListItem, UIcon, UListItemTitle, UListSubheader },
  setup() {
    const items = [
      { text: 'Real-Time', icon: 'hugeicons:clock-01' },
      { text: 'Audience', icon: 'hugeicons:user-03' },
      { text: 'Conversions', icon: 'hugeicons:flag-01' },
    ];
    return { items };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `
<template>${disabledTemplate}</template>

<script setup>
  const items = [
    { text: 'Real-Time', icon: 'hugeicons:clock-01' },
    { text: 'Audience', icon: 'hugeicons:user-03' },
    { text: 'Conversions', icon: 'hugeicons:flag-01' },
  ]
</script>`,
    },
  },
};

// Variant story
const variantTemplate = `
    <u-card class="mx-auto" max-width="300">
      <u-list>
        <u-list-subheader>Plain Variant</u-list-subheader>

        <u-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" variant="plain">
          <template #prepend>
            <u-icon :icon="item.icon"></u-icon>
          </template>

          <u-list-item-title v-text="item.text"></u-list-item-title>
        </u-list-item>
      </u-list>

      <u-list>
        <u-list-subheader>Tonal Variant</u-list-subheader>

        <u-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary" variant="tonal">
          <template #prepend>
            <u-icon :icon="item.icon"></u-icon>
          </template>

          <u-list-item-title v-text="item.text"></u-list-item-title>
        </u-list-item>
      </u-list>
    </u-card>
  `;

/**
 * u-list supports the variant prop.
 */
export const Variant: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList, UListItem, UIcon, UListItemTitle, UListSubheader },
  setup() {
    const items = [
      { text: 'Real-Time', icon: 'hugeicons:clock-01' },
      { text: 'Audience', icon: 'hugeicons:user-03' },
      { text: 'Conversions', icon: 'hugeicons:flag-01' },
    ];
    return { items };
  },
  template: variantTemplate,
});

Variant.parameters = {
  docs: {
    source: {
      code: `
<template>${variantTemplate}</template>

<script setup>
  const items = [
    { text: 'Real-Time', icon: 'hugeicons:clock-01' },
    { text: 'Audience', icon: 'hugeicons:user-03' },
    { text: 'Conversions', icon: 'hugeicons:flag-01' },
  ]
</script>`,
    },
  },
};

// Nav story
const navTemplate = `
    <u-card class="mx-auto" width="256">
      <u-layout>
        <u-navigation-drawer absolute permanent>
          <u-list>
            <u-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/john.png" subtitle="john@google.com" title="John Leider">
              <template #append>
                <u-btn icon="hugeicons:menu-down-24" size="small" variant="text"></u-btn>
              </template>
            </u-list-item>
          </u-list>

          <u-divider></u-divider>

          <u-list :lines="false" density="compact" nav>
            <u-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
              <template #prepend>
                <u-icon :icon="item.icon"></u-icon>
              </template>
              <u-list-item-title v-text="item.text"></u-list-item-title>
            </u-list-item>
          </u-list>
        </u-navigation-drawer>

        <u-main style="height: 354px;"></u-main>
      </u-layout>
    </u-card>
  `;

/**
 * Lists can receive an alternative nav styling that reduces the width u-list-item takes
 * up as well as adding a border radius.
 */
export const Nav: StoryFn<ComponentArgs> = () => ({
  components: { UCard, ULayout, UNavigationDrawer, UList, UListItem, UDivider, UMain, UBtn },
  setup() {
    const items = [
      { text: 'My Files', icon: 'hugeicons:folder-01' },
      { text: 'Shared with me', icon: 'hugeicons:folder-shared-01' },
      { text: 'Starred', icon: 'hugeicons:star' },
      { text: 'Recent', icon: 'hugeicons:work-history' },
      { text: 'Offline', icon: 'hugeicons:circle' },
      { text: 'Uploads', icon: 'hugeicons:upload-01' },
      { text: 'Backups', icon: 'hugeicons:archive-02' },
    ];
    return { items };
  },
  template: navTemplate,
});

Nav.parameters = {
  docs: {
    source: {
      code: `
<template>${navTemplate}</template>

<script setup>
  const items = [
    { text: 'My Files', icon: 'hugeicons:folder-01' },
    { text: 'Shared with me', icon: 'hugeicons:folder-shared-01' },
    { text: 'Starred', icon: 'hugeicons:star' },
    { text: 'Recent', icon: 'hugeicons:work-history' },
    { text: 'Offline', icon: 'hugeicons:circle' },
    { text: 'Uploads', icon: 'hugeicons:upload-01' },
    { text: 'Backups', icon: 'hugeicons:archive-02' },
  ];
</script>`,
    },
  },
};

// SubGroup story
const subGroupTemplate = `
    <u-card class="mx-auto" width="300">
      <u-list v-model:opened="open">
        <u-list-item prepend-icon="hugeicons:home-01" title="Home"></u-list-item>

        <u-list-group value="Users">
          <template #activator="{ props }">
            <u-list-item v-bind="props" prepend-icon="hugeicons:user-circle" title="Users"></u-list-item>
          </template>

          <u-list-group value="Admin">
            <template #activator="{ props }">
              <u-list-item v-bind="props" title="Admin"></u-list-item>
            </template>

            <u-list-item v-for="([title, icon], i) in admins" :key="i" :prepend-icon="icon" :title="title" :value="title"></u-list-item>
          </u-list-group>

          <u-list-group value="Actions">
            <template #activator="{ props }">
              <u-list-item v-bind="props" title="Actions"></u-list-item>
            </template>

            <u-list-item v-for="([title, icon], i) in cruds" :key="i" :prepend-icon="icon" :title="title" :value="title"></u-list-item>
          </u-list-group>
        </u-list-group>
      </u-list>
    </u-card>
  `;

/**
 * Using the u-list-group component you can create sub-groups of items.
 */
export const SubGroup: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UList, UListItem, UListGroup },
  setup() {
    const open = ref(['Users']);
    const admins = [
      ['Management', 'hugeicons:user-settings-01'],
      ['Settings', 'hugeicons:settings-01'],
    ];
    const cruds = [
      ['Create', 'hugeicons:add-01'],
      ['Read', 'hugeicons:file-view'],
      ['Update', 'hugeicons:edit-02'],
      ['Delete', 'hugeicons:delete-02'],
    ];
    return { open, admins, cruds };
  },
  template: subGroupTemplate,
});

SubGroup.parameters = {
  docs: {
    source: {
      code: `
<template>${subGroupTemplate}</template>

<script setup>
  import { ref } from 'vue'
  const open = ref(['Users']);
  const admins = [
    ['Management', 'hugeicons:user-settings-01'],
    ['Settings', 'hugeicons:settings-01'],
  ];
  const cruds = [
    ['Create', 'hugeicons:add-01'],
    ['Read', 'hugeicons:file-view'],
    ['Update', 'hugeicons:edit-02'],
    ['Delete', 'hugeicons:delete-02'],
  ];
</script>`,
    },
  },
};
