import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef, toRef } from 'vue';

import {
  UBtn,
  UCard,
  UChip,
  UChipGroup,
  UDivider,
  UFooter,
  UIcon,
  USelect,
  USpeedDial,
  UTab,
  UTabs,
  UTextField,
  UToolbar,
  UToolbarTitle,
} from '../index';

interface ComponentArgs {
  absolute?: boolean;
  border?: string | number | boolean;
  collapse?: boolean;
  color?: string;
  density?: 'default' | 'prominent' | 'comfortable' | 'compact';
  elevation?: string | number;
  extended?: boolean;
  extensionHeight?: string | number;
  flat?: boolean;
  floating?: boolean;
  height?: string | number;
  image?: string;
  rounded?: string | number | boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
  title?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Toolbars',
  component: UToolbar,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-toolbar` component is commonly used as the primary navigation or action bar in an app.',
      },
      import: `import { UToolbar } from '@ultimate/core-ui/components'`,
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
          return `<u-toolbar${attrsString}>
  <template #append>
    <div class="d-flex ga-1">
      <u-btn icon="hugeicons:search-01"></u-btn>
      <u-btn icon="hugeicons:more-vertical"></u-btn>
    </div>
  </template>
</u-toolbar>`;
        },
      },
    },
    api: {
      data: [
        {
          element: { title: 'v-toolbar', link: 'https://vuetifyjs.com/en/api/v-toolbar/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-toolbar-items',
            link: 'https://vuetifyjs.com/en/api/v-toolbar-items/',
          },
          description: 'Sub-component used to modify the styling of v-btn',
        },
        {
          element: {
            title: 'v-toolbar-title',
            link: 'https://vuetifyjs.com/en/api/v-toolbar-title/',
          },
          description: 'Sub-component used to display the title of the toolbar',
        },
      ],
    },
    Vuetify: {
      component: 'VToolbar',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/toolbars/',
    },
  },
  argTypes: {
    collapse: {
      control: 'boolean',
      description: 'Puts the toolbar into a collapsed state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    density: {
      control: 'select',
      options: ['default', 'prominent', 'comfortable', 'compact'],
      description: 'Adjusts vertical height.',
      table: { type: { summary: "'default' | 'prominent' | 'comfortable' | 'compact'" } },
    },
    extended: {
      control: 'boolean',
      description: 'Increase the height of the toolbar.',
      table: { type: { summary: 'boolean' } },
    },
    extensionHeight: {
      control: 'text',
      description: 'Explicit height for the extension slot.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '48' } },
    },
    floating: {
      control: 'boolean',
      description: 'Applies inline-flex display to the component.',
      table: { type: { summary: 'boolean' } },
    },
    title: {
      control: 'text',
      description: 'Title text for the toolbar.',
      table: { type: { summary: 'string' } },
    },
  } as any,
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UToolbar, UBtn },
  setup() {
    return { args };
  },
  template: `<u-toolbar v-bind="args">
  <template #append>
    <div class="d-flex ga-1">
      <u-btn icon="hugeicons:search-01"></u-btn>
      <u-btn icon="hugeicons:more-vertical"></u-btn>
    </div>
  </template>
</u-toolbar>`,
});

Default.args = {
  title: 'Toolbar',
} as ComponentArgs;

// Dense Toolbars Story
const denseToolbarsTemplate = `
    <u-card height="200">
      <u-toolbar density="compact" title="Toolbar"></u-toolbar>
    </u-card>
  `;

/**
 * Dense toolbars reduce their height to 48px.
 */
export const DenseToolbars: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar },
  template: denseToolbarsTemplate,
});

DenseToolbars.parameters = {
  docs: {
    source: {
      code: `<template>${denseToolbarsTemplate}</template>`,
    },
  },
};

// Collapse Story
const collapseTemplate = `
  <u-card>
    <u-toolbar
      :collapse="collapse"
      :collapse-position="collapsePosition"
      title="Toolbar"
    >
      <template v-slot:append>
        <div class="d-flex ga-1">
          <u-btn icon="hugeicons:search-01"></u-btn>
          <u-btn icon="hugeicons:more-vertical"></u-btn>
        </div>
      </template>
    </u-toolbar>
    <u-card-text class="d-flex flex-column align-center">
      <u-btn
        color="surface-variant"
        text="Toggle"
        @click="collapse = !collapse"
      ></u-btn>
      <span class="mt-4">Collapse position:</span>
      <u-chip-group v-model="collapsePosition" variant="outlined" border mandatory>
        <u-chip
          class="px-6"
          prepend-icon="hugeicons:arrow-left-03"
          selected-class="v-chip--variant-flat"
          text="start"
          value="start"
          label
        ></u-chip>
        <u-chip
          append-icon="hugeicons:arrow-right-03"
          class="px-6 mr-0"
          selected-class="v-chip--variant-flat"
          text="end"
          value="end"
          label
        ></u-chip>
      </u-chip-group>
    </u-card-text>
  </u-card>
  `;

/**
 * Toolbars can be collapsed to save screen space.
 */
export const Collapse: StoryFn<ComponentArgs> = () => ({
  components: {
    UCard,
    UToolbar,
    UBtn,
    UChipGroup,
    UChip,
  },
  setup() {
    const collapse = shallowRef(true);
    const collapsePosition = shallowRef('start');

    return { collapse, collapsePosition };
  },
  template: collapseTemplate,
});

Collapse.parameters = {
  docs: {
    source: {
      code: `<template>${collapseTemplate}</template>
      
<script setup>
  import { shallowRef } from 'vue'

  const collapse = shallowRef(true)
  const collapsePosition = shallowRef('start')
</script>`,
    },
  },
};

// Background Story Template
const backgroundTemplate = `
    <u-card height="200">
      <u-toolbar class="text-white" image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
        <u-btn icon="hugeicons:menu-02"></u-btn>
        <u-toolbar-title text="Toolbar"></u-toolbar-title>
        <u-btn icon="hugeicons:share-03"></u-btn>
      </u-toolbar>
    </u-card>
  `;

/**
 * Toolbars can display a background as opposed to a solid color using the src prop.
 * This can be modified further by using the img slot and providing your own u-img component.
 * Backgrounds can be faded using a u-app-bar
 */
export const Background: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UToolbarTitle },
  template: backgroundTemplate,
});

Background.parameters = {
  docs: {
    source: {
      code: `<template>${backgroundTemplate}</template>`,
    },
  },
};

// Extended Story
const extendedTemplate = `
    <u-card height="200">
      <u-toolbar extended>
        <u-toolbar-title text="Toolbar"></u-toolbar-title>
        <template v-slot:append>
          <u-btn icon="hugeicons:search-01"></u-btn>
          <u-btn icon="hugeicons:favourite"></u-btn>
          <u-btn icon="hugeicons:more-vertical"></u-btn>
        </template>
      </u-toolbar>
    </u-card>
  `;

/**
 * Toolbars can be extended without using the extension slot.
 */
export const Extended: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UToolbarTitle },
  template: extendedTemplate,
});

Extended.parameters = {
  docs: {
    source: {
      code: `<template>${extendedTemplate}</template>`,
    },
  },
};

// Extension Story
const extensionTemplate = `
    <u-card height="200">
      <u-toolbar extended>
        <u-toolbar-title text="Toolbar"></u-toolbar-title>

        <template v-slot:extension>
          <u-tabs>
            <u-tab text="Tab 1"></u-tab>
            <u-tab text="Tab 2"></u-tab>
            <u-tab text="Tab 3"></u-tab>
          </u-tabs>
        </template>
      </u-toolbar>
    </u-card>
  `;

/**
 * The extension slot can be used to add additional content to the toolbar.
 */
export const Extension: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UToolbarTitle, UTabs, UTab },
  template: extensionTemplate,
});

Extension.parameters = {
  docs: {
    source: {
      code: `<template>${extensionTemplate}</template>`,
    },
  },
};

// Concerned Action Bar Story
const contextualActionBarTemplate = `
    <u-card class="mx-auto" max-width="500">
      <u-toolbar :color="selection.length ? 'surface-variant' : 'deep-purple accent-4'">
        <template v-slot:prepend>
          <u-fade-transition hide-on-leave>
            <u-btn
              :key="selection.length > 0"
              :icon="selection.length ? 'hugeicons:cancel-01' : 'hugeicons:menu-02'"
              @click="onClick"
            ></u-btn>
          </u-fade-transition>
        </template>

        <u-toolbar-title :text="selection.length ? \`\${selection.length} selected\` : 'Photos'"></u-toolbar-title>

        <template v-slot:append>
          <u-fade-transition hide-on-leave>
            <u-btn
              v-if="selection.length"
              key="export"
              icon="hugeicons:share-03"
            ></u-btn>
          </u-fade-transition>

          <u-fade-transition hide-on-leave>
            <u-btn
              v-if="selection.length"
              key="delete"
              icon="hugeicons:delete-03"
            ></u-btn>
          </u-fade-transition>

          <u-btn icon="hugeicons:more-vertical"></u-btn>
        </template>
      </u-toolbar>
      <u-card-text>
        <u-select
          v-model="selection"
          :items="items"
          hint="Make a selection"
          label="Select an option"
          clearable
          multiple
          open-on-clear
          persistent-hint
        ></u-select>
      </u-card-text>
    </u-card>
  `;

/**
 * It is possible to update the appearance of a toolbar in response to changes in app state.
 * In this example, the color and content of the toolbar changes in response to user
 * selections in the u-select.
 */
export const ContextualActionBar: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, USelect, UToolbarTitle },
  setup() {
    const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];

    const selection = shallowRef([]);

    function onClick() {
      if (!selection.value.length) return;

      selection.value = [];
    }

    return { items, selection, onClick };
  },
  template: contextualActionBarTemplate,
});

ContextualActionBar.parameters = {
  docs: {
    source: {
      code: `<template>${contextualActionBarTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const items = ['Foo', 'Bar', 'Fizz', 'Buzz']

  const selection = shallowRef([])

  function onClick () {
    if (!selection.value.length) return

    selection.value = []
  }
</script>`,
    },
  },
};

// Flexible Card Toolbar Story
const flexibleCardToolbarTemplate = `
    <u-card rounded="lg" border flat>
      <u-toolbar
        color="primary"
        extended
        flat
      >
        <template v-slot:prepend>
          <u-btn icon="hugeicons:menu-02"></u-btn>
        </template>
      </u-toolbar>

      <u-card
        class="mx-auto mt-n16 mb-4"
        elevation="4"
        height="200"
        max-width="600"
      >
        <u-toolbar>
          <u-toolbar-title text="Title"></u-toolbar-title>

          <template v-slot:append>
            <div class="d-flex ga-1">
              <u-btn icon="hugeicons:search-01">
              </u-btn>

              <u-btn icon="hugeicons:more-03">
              </u-btn>

              <u-btn icon="hugeicons:more-vertical">
              </u-btn>
            </div>
          </template>
        </u-toolbar>

        <u-divider></u-divider>
      </u-card>

      <u-footer class="justify-center text-caption" color="surface-variant">
        {{ new Date().getFullYear() }} — <strong>Vuetify, LLC</strong>
      </u-footer>
    </u-card>
  `;

/**
 * In this example we offset our card onto the extended content area of a toolbar using
 * the extended prop.
 */
export const FlexibleCardToolbar: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UToolbarTitle, UDivider, UFooter },
  template: flexibleCardToolbarTemplate,
});

FlexibleCardToolbar.parameters = {
  docs: {
    source: {
      code: `<template>${flexibleCardToolbarTemplate}</template>`,
    },
  },
};

// Floating With Search Story
const floatingWithSearchTemplate = `
    <u-card
      height="300"
      image="https://cdn.vuetifyjs.com/images/toolbar/map.jpg"
      border
      flat
    >
      <template v-slot:text>
        <u-toolbar rounded="lg" border floating>
          <div class="px-4">
            <u-text-field
              density="compact"
              placeholder="Search"
              prepend-inner-icon="hugeicons:search-01"
              variant="solo"
              width="200"
              flat
              hide-details
              single-line
            ></u-text-field>
          </div>

          <template v-slot:append>
            <u-btn
              color="medium-emphasis"
              density="comfortable"
              icon="hugeicons:location-01"
            ></u-btn>

            <u-btn
              class="ms-1"
              color="medium-emphasis"
              density="comfortable"
              icon="hugeicons:more-vertical"
            ></u-btn>
          </template>
        </u-toolbar>
      </template>
    </u-card>
  `;

/**
 * A floating toolbar is turned into an inline element that only takes up as much space as
 * needed. This is particularly useful when placing toolbars over content.
 */
export const FloatingWithSearch: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UTextField, UBtn },
  template: floatingWithSearchTemplate,
});

FloatingWithSearch.parameters = {
  docs: {
    source: {
      code: `<template>${floatingWithSearchTemplate}</template>`,
    },
  },
};

// Tooltips And Speed Dial Story
const tooltipsAndSpeedDialTemplate = `
    <u-card>
      <u-toolbar :collapse="collapse" title="Toolbar">
        <u-btn
          class="ml-3"
          icon="hugeicons:search-01"
          v-tooltip:bottom="'Search all products'"
        ></u-btn>
        
        <u-btn
          class="mr-3"
          icon="hugeicons:more-vertical"
          size="small"
          variant="elevated"
        >
          <u-icon></u-icon>
          <u-speed-dial :location="dialLocation" activator="parent" open-on-hover>
            <u-btn
              v-for="(item, i) in dialActions"
              :key="i"
              :color="item.color"
              :icon="item.icon"
              v-tooltip="{ location: tooltipLocation, text: item.tooltip }"
            ></u-btn>
          </u-speed-dial>
        </u-btn>
      </u-toolbar>

      <u-card-text class="text-center pa-8">
        <u-btn
          :text="collapse ? 'Expand' : 'Collapse'"
          color="surface-variant"
          @click="collapse = !collapse"
        ></u-btn>
      </u-card-text>
    </u-card>
  `;

/**
 * Toolbar elements can include menus (like Speed Dial) and tooltips to help users understand
 * the action intent when buttons show only icons to keep interface minimalistic.
 */
export const TooltipsAndSpeedDial: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, USpeedDial, UIcon },
  setup() {
    const collapse = shallowRef(false);
    const dialLocation = toRef(() => (collapse.value ? 'right center' : 'bottom center'));
    const tooltipLocation = toRef(() => (collapse.value ? 'bottom' : 'left'));

    const dialActions = [
      { color: 'success', icon: '$success', tooltip: 'Share feedback' },
      { color: 'warning', icon: 'hugeicons:alert-02', tooltip: 'Report problem' },
      { color: 'purple', icon: 'hugeicons:notification-01', tooltip: 'Open notifications' },
    ];

    return { collapse, dialActions, dialLocation, tooltipLocation };
  },
  template: tooltipsAndSpeedDialTemplate,
});

TooltipsAndSpeedDial.parameters = {
  docs: {
    source: {
      code: `<template>${tooltipsAndSpeedDialTemplate}</template>

<script setup>
  import { shallowRef, toRef } from 'vue'

  const collapse = shallowRef(false)
  const dialLocation = toRef(() => collapse.value ? 'right center' : 'bottom center')
  const tooltipLocation = toRef(() => collapse.value ? 'bottom' : 'left')

  const dialActions = [
    { color: 'success', icon: '$success', tooltip: 'Share feedback' },
    { color: 'warning', icon: 'hugeicons:alert-02', tooltip: 'Report problem' },
    { color: 'purple', icon: 'hugeicons:notification-01', tooltip: 'Open notifications' },
  ]
</script>`,
    },
  },
};
