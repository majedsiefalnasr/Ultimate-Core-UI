import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UAppBar,
  UBtn,
  UCol,
  UContainer,
  UDivider,
  URow,
  USheet,
  UTab,
  UTabs,
  UTabsWindow,
  UTabsWindowItem,
  UToolbar,
} from '../index';

interface ComponentArgs {
  alignTabs?: 'title' | 'start' | 'end' | 'center';
  bgColor?: string;
  centerActive?: boolean;
  color?: string;
  contentClass?: unknown;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  fixedTabs?: boolean;
  grow?: boolean;
  height?: string | number;
  hideSlider?: boolean;
  items?: unknown[];
  mandatory?: boolean | 'force';
  max?: number;
  mobile?: boolean | null;
  mobileBreakpoint?: number | string;
  modelValue?: unknown;
  multiple?: boolean;
  nextIcon?: any;
  prevIcon?: any;
  scrollToActive?: boolean;
  selectedClass?: string;
  showArrows?: boolean | string;
  sliderColor?: string;
  spaced?: 'start' | 'end' | 'both';
  stacked?: boolean;
  symbol?: unknown;
  tag?: string;
}

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Tabs',
  component: UTabs,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-tabs` component hides content behind selectable items. It is a styled extension of `u-slide-group` and can be used as a pseudo-navigation with `v-tab` items and `v-tabs-window` for content.',
      },
      import: `import { UTabs } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              const kebabKey = toKebab(key);
              if (value === true) return kebabKey;
              if (typeof value === 'string') return `${kebabKey}="${value}"`;
              if (typeof value === 'number') return `:${kebabKey}="${value}"`;
              return `:${kebabKey}='${JSON.stringify(value)}'`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<template>
  <u-sheet elevation="4">
    <u-tabs${attrsString} v-model="tab">
      <u-tab value="one">Item One</u-tab>
      <u-tab value="two">Item Two</u-tab>
      <u-tab value="three">Item Three</u-tab>
    </u-tabs>
    <u-divider></u-divider>
    <u-tabs-window v-model="tab">
      <u-tabs-window-item value="one">
        <u-sheet class="pa-5" color="purple">One</u-sheet>
      </u-tabs-window-item>
      <u-tabs-window-item value="two">
        <u-sheet class="pa-5" color="orange">Two</u-sheet>
      </u-tabs-window-item>
      <u-tabs-window-item value="three">
        <u-sheet class="pa-5" color="cyan">Three</u-sheet>
      </u-tabs-window-item>
    </u-tabs-window>
  </u-sheet>
</template>
<script>
  import { shallowRef } from 'vue';

  const tab = shallowRef(0);
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VTabs',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/tabs/',
    },
    Primary: {
      description:
        'The u-tabs component is a styled extension of u-slide-group. It provides an easy to use interface for organizing content into separate sections.',
    },
    api: {
      data: [
        {
          element: { title: 'v-tabs', link: 'https://vuetifyjs.com/en/api/v-tabs/' },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-tab', link: 'https://vuetifyjs.com/en/api/v-tabs/' },
          description: 'Sub-component used for modifying the v-tabs state',
        },
      ],
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The v-model value of the component.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    alignTabs: {
      control: 'select',
      description: 'Aligns the tabs to the start, center, end or title.',
      options: ['title', 'start', 'end', 'center'],
      table: {
        type: { summary: "'title' | 'start' | 'end' | 'center'" },
        defaultValue: { summary: 'start' },
      },
    },
    bgColor: {
      control: 'text',
      description: 'Applies specified color to the control’s background.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    centerActive: {
      control: 'boolean',
      description: 'Forces the selected tab to be centered.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'text',
      description: 'Applies specified color to the selected tab.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    contentClass: {
      control: 'object',
      description: 'Adds classes to the slide group item.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    density: {
      control: 'select',
      description: 'Adjusts the vertical height used by the component.',
      options: ['default', 'comfortable', 'compact'],
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: 'default' },
      },
    },
    direction: {
      control: 'select',
      description: 'Changes the direction of the tabs (horizontal or vertical).',
      options: ['horizontal', 'vertical'],
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fixedTabs: {
      control: 'boolean',
      name: 'fixed-tabs',
      description: 'v-tabs-item min-width 160px, max-width 360px.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    grow: {
      control: 'boolean',
      description: 'Force v-tab’s to take up all available space.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    height: {
      control: 'text',
      description: 'Use the height prop to set the height of the tabs bar.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    hideSlider: {
      control: 'boolean',
      name: 'hide-slider',
      description: 'Hide’s the generated v-tabs-slider.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    items: {
      control: 'object',
      description: 'The items to display in the component.',
      table: { type: { summary: 'unknown[]' }, defaultValue: { summary: '[]' } },
    },
    mandatory: {
      control: 'select',
      description: 'Forces at least one item to always be selected (if available).',
      options: [true, false, 'force'],
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: "'force'" } },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made.',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
    },
    mobile: {
      control: 'boolean',
      description: 'Determines the display mode of the component.',
      table: { type: { summary: 'boolean | null' }, defaultValue: { summary: 'null' } },
    },
    mobileBreakpoint: {
      control: 'text',
      name: 'mobile-breakpoint',
      description: 'Sets the designated mobile breakpoint for the component.',
      table: {
        type: { summary: "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows one to select multiple items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    nextIcon: {
      control: 'text',
      name: 'next-icon',
      description: 'Right pagination icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$next'" } },
    },
    prevIcon: {
      control: 'text',
      name: 'prev-icon',
      description: 'Left pagination icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$prev'" } },
    },
    scrollToActive: {
      control: 'boolean',
      name: 'scroll-to-active',
      description: 'Keeps the last active element visible when resizing the scrollable container.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    selectedClass: {
      control: 'text',
      name: 'selected-class',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'v-tab-item--selected'" } },
    },
    showArrows: {
      control: 'boolean',
      name: 'show-arrows',
      description: 'Show pagination arrows if the tab items overflow their container.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    sliderColor: {
      control: 'text',
      name: 'slider-color',
      description: 'Changes the background color of an auto-generated v-tabs-slider.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    spaced: {
      control: 'select',
      description:
        'Extends content to the edges to move main content from prepend and append slots.',
      options: ['start', 'end', 'both'],
      table: {
        type: { summary: "'start' | 'end' | 'both'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    stacked: {
      control: 'boolean',
      description: 'Apply the stacked prop to all children v-tab components.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    symbol: {
      control: 'object',
      description:
        'The Symbol used to hook into group functionality for components like v-btn-toggle and v-bottom-navigation.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string | (new () => any) | FunctionalComponent' },
        defaultValue: { summary: "'div'" },
      },
    },
  } as any,
};

export default meta;

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTabs, UTab, USheet, UDivider, UTabsWindow, UTabsWindowItem },
  setup() {
    const tab = ref(0);

    return { args, tab };
  },
  template: `
    <u-sheet elevation="4">
      <u-tabs
        v-model="tab"
        v-bind="args"
      >
        <u-tab value="one">Item One</u-tab>
        <u-tab value="two">Item Two</u-tab>
        <u-tab value="three">Item Three</u-tab>
      </u-tabs>

      <u-divider></u-divider>

      <u-tabs-window v-model="tab">
        <u-tabs-window-item value="one">
          <u-sheet class="pa-5" color="purple">One</u-sheet>
        </u-tabs-window-item>
        <u-tabs-window-item value="two">
          <u-sheet class="pa-5" color="orange">Two</u-sheet>
        </u-tabs-window-item>
        <u-tabs-window-item value="three">
          <u-sheet class="pa-5" color="cyan">Three</u-sheet>
        </u-tabs-window-item>
      </u-tabs-window>
    </u-sheet>
  `,
});

Default.args = {} as ComponentArgs;

// Align Tabs Story
const alignTabsTemplate = `
    <u-card>
      <u-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4" v-bind="args">
        <u-tab :value="1">Landscape</u-tab>
        <u-tab :value="2">City</u-tab>
        <u-tab :value="3">Abstract</u-tab>
      </u-tabs>

      <u-tabs-window v-model="tab">
        <u-tabs-window-item v-for="n in 3" :key="n" :value="n">
          <u-container fluid>
            <u-row>
              <u-col v-for="i in 6" :key="i" cols="12" md="4">
                <u-img
                  :lazy-src="'https://picsum.photos/10/6?image=' + (i * n * 5 + 10)"
                  :src="'https://picsum.photos/500/300?image=' + (i * n * 5 + 10)"
                  height="205"
                  cover
                />
              </u-col>
            </u-row>
          </u-container>
        </u-tabs-window-item>
      </u-tabs-window>
    </u-card>
  `;

/**
 * The align-tabs prop will align tabs to the start, center, or end of its container.
 */
export const AlignTabs: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, USheet, UDivider, UTabsWindow, UTabsWindowItem },
  setup() {
    const tab = ref(1);

    return { tab };
  },
  template: alignTabsTemplate,
});

AlignTabs.parameters = {
  docs: {
    source: {
      code: `<template>${alignTabsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref(null)
</script>`,
    },
  },
};

// Align With Title Story
const alignWithTitleTemplate = `
    <u-card>
      <u-toolbar color="primary">
        <u-app-bar-nav-icon></u-app-bar-nav-icon>

        <u-toolbar-title>Your Dashboard</u-toolbar-title>

        <u-btn icon="hugeicons:search-01"></u-btn>

        <u-btn icon="hugeicons:more-vertical"></u-btn>

        <template v-slot:extension>
          <u-tabs
            v-model="tab"
            align-tabs="title"
          >
            <u-tab
              v-for="item in items"
              :key="item"
              :text="item"
              :value="item"
            ></u-tab>
          </u-tabs>
        </template>
      </u-toolbar>

      <u-tabs-window v-model="tab">
        <u-tabs-window-item
          v-for="item in items"
          :key="item"
          :value="item"
        >
          <u-card flat>
            <u-card-text v-text="text"></u-card-text>
          </u-card>
        </u-tabs-window-item>
      </u-tabs-window>
    </u-card>
  `;

/**
 * Make u-tabs line up with the v-toolbar-title component by setting the align-tabs
 * prop to title (u-app-bar-nav-icon or u-btn must be used in u-toolbar).
 */
export const AlignWithTitle: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, UToolbar, UAppBar, UBtn },
  setup() {
    const tab = ref(null);
    const items = ['web', 'shopping', 'videos', 'images', 'news'];
    const text = lorem;

    return { tab, items, text };
  },
  template: alignWithTitleTemplate,
});

AlignWithTitle.parameters = {
  docs: {
    source: {
      code: `<template>${alignWithTitleTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref(null)

  const items = [
    'web',
    'shopping',
    'videos',
    'images',
    'news',
  ]
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
</script>`,
    },
  },
};

// Center Active Story
const centerActiveTemplate = `
    <u-card>
      <u-tabs bg-color="deep-purple-darken-4" center-active v-bind="args">
        <u-tab>One</u-tab>
        <u-tab>Two</u-tab>
        <u-tab>Three</u-tab>
        <u-tab>Four</u-tab>
        <u-tab>Five</u-tab>
        <u-tab>Six</u-tab>
        <u-tab>Seven</u-tab>
        <u-tab>Eight</u-tab>
        <u-tab>Nine</u-tab>
        <u-tab>Ten</u-tab>
        <u-tab>Eleven</u-tab>
        <u-tab>Twelve</u-tab>
        <u-tab>Thirteen</u-tab>
        <u-tab>Fourteen</u-tab>
        <u-tab>Fifteen</u-tab>
        <u-tab>Sixteen</u-tab>
        <u-tab>Seventeen</u-tab>
        <u-tab>Eighteen</u-tab>
        <u-tab>Nineteen</u-tab>
        <u-tab>Twenty</u-tab>
      </u-tabs>
    </u-card>
  `;

/**
 * The center-active prop will make the active tab always centered.
 */
export const CenterActive: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, USheet },
  setup() {
    const tab = ref(null);
    return { tab };
  },
  template: centerActiveTemplate,
});

CenterActive.parameters = {
  docs: {
    source: {
      code: `<template>${centerActiveTemplate}</template>`,
    },
  },
};

// Custom Icons Story
const customIconsTemplate = `
    <u-sheet elevation="6">
        <u-tabs bg-color="indigo" next-icon="hugeicons:circle-arrow-right-01" prev-icon="hugeicons:circle-arrow-left-01" show-arrows v-bind="args">
        <u-tab v-for="i in 30" :key="i" :text="'Item ' + i"></u-tab>
      </u-tabs>
    </u-sheet>
  `;

/**
 * prev-icon and next-icon can be used for applying custom pagination icons.
 */
export const CustomIcons: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, USheet },
  template: customIconsTemplate,
});

CustomIcons.parameters = {
  docs: {
    source: {
      code: `<template>${customIconsTemplate}</template>`,
    },
  },
};

// Fixed Tabs Story
const fixedTabsTemplate = `
    <u-tabs bg-color="indigo-darken-2" fixed-tabs v-bind="args">
      <u-tab text="Option"></u-tab>
      <u-tab text="Another Option"></u-tab>
    </u-tabs>
  `;

/**
 * The fixed-tabs prop forces u-tab items to take up all available space up to 300px width,
 * and centers them.
 */
export const FixedTabs: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab },
  template: fixedTabsTemplate,
});

FixedTabs.parameters = {
  docs: {
    source: {
      code: `<template>${fixedTabsTemplate}</template>`,
    },
  },
};

// Grow Story
const growTemplate = `
    <u-card color="primary">
      <u-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold text-h2">BASiL</h1>
      </u-card-title>

      <u-tabs v-model="tab" color="basil" grow v-bind="args">
        <u-tab v-for="item in items" :key="item" :text="item" :value="item"></u-tab>
      </u-tabs>

      <u-tabs-window v-model="tab">
        <u-tabs-window-item v-for="item in items" :key="item" :value="item">
          <u-card color="primary" flat>
            <u-card-text>{{ text }}</u-card-text>
          </u-card>
        </u-tabs-window-item>
      </u-tabs-window>
    </u-card>
  `;

/**
 * The grow prop will make the tab items take up all available space with no limit.
 */
export const Grow: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, UCard: USheet },
  setup() {
    const tab = ref('Appetizers');
    const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails'];
    const text = lorem;
    return { tab, items, text };
  },
  template: growTemplate,
});

Grow.parameters = {
  docs: {
    source: {
      code: `<template>${growTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref('Appetizers')

  const items = [
    'Appetizers',
    'Entrees',
    'Deserts',
    'Cocktails',
  ]
  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
</script>`,
    },
  },
};

// Stacked Story
const stackedTemplate = `
    <u-card>
      <u-tabs v-model="tab" align-tabs="center" bg-color="deep-purple-accent-4" stacked v-bind="args">
        <u-tab value="tab-1">
          <u-icon icon="hugeicons:smart-phone-01" />
          Recents
        </u-tab>

        <u-tab value="tab-2">
          <u-icon icon="hugeicons:heartbreak" />
          Favorites
        </u-tab>

        <u-tab value="tab-3">
          <u-icon icon="hugeicons:user-account" />
          Nearby
        </u-tab>
      </u-tabs>

      <u-tabs-window v-model="tab">
        <u-tabs-window-item v-for="i in 3" :key="i" :value="'tab-' + i">
          <u-card>
            <u-card-text>{{ text }}</u-card-text>
          </u-card>
        </u-tabs-window-item>
      </u-tabs-window>
    </u-card>
  `;

/**
 * Using stacked increases the u-tabs height to 72px to allow for both icons and text
 * to be displayed.
 */
export const Stacked: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, UIcon: UDivider },
  setup() {
    const tab = ref(null);
    const text = lorem;
    return { tab, text };
  },
  template: stackedTemplate,
});

Stacked.parameters = {
  docs: {
    source: {
      code: `<template>${stackedTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref(null)

  const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
</script>`,
    },
  },
};

// Pagination Story
const paginationTemplate = `
    <u-card>
      <u-tabs bg-color="teal-darken-3" slider-color="teal-lighten-3" show-arrows v-bind="args">
        <u-tab v-for="i in 30" :key="i" :text="'Item ' + i" :value="'tab-' + i"></u-tab>
      </u-tabs>
    </u-card>
  `;

/**
 * If the tab items overflow their container, pagination controls will appear on desktop.
 * For mobile devices, arrows will only display with the show-arrows prop.
 */
export const Pagination: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab },
  template: paginationTemplate,
});

Pagination.parameters = {
  docs: {
    source: {
      code: `<template>${paginationTemplate}</template>`,
    },
  },
};

// Vertical Story
const verticalTemplate = `
    <u-card>
      <u-toolbar color="primary" title="User Profile"></u-toolbar>

      <div class="d-flex flex-row">
        <u-tabs v-model="tab" color="primary" direction="vertical" v-bind="args">
          <u-tab prepend-icon="hugeicons:user-03" text="Option 1" value="option-1"></u-tab>
          <u-tab prepend-icon="hugeicons:circle-lock-02" text="Option 2" value="option-2"></u-tab>
          <u-tab prepend-icon="hugeicons:cellular-network" text="Option 3" value="option-3"></u-tab>
        </u-tabs>

        <u-tabs-window v-model="tab">
          <u-tabs-window-item value="option-1">
            <u-card flat>
              <u-card-text>
                <p>
                  Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
                </p>

                <p>
                  Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
                </p>

                <p class="mb-0">
                  Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
                </p>
              </u-card-text>
            </u-card>
          </u-tabs-window-item>

          <u-tabs-window-item value="option-2">
            <u-card flat>
              <u-card-text>
                <p>
                  Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
                </p>

                <p>
                  Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In hac habitasse platea dictumst. Fusce ac felis sit amet ligula pharetra condimentum.
                </p>

                <p>
                  Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Nam commodo suscipit quam. In consectetuer turpis ut velit. Sed cursus turpis vitae tortor. Aliquam eu nunc.
                </p>

                <p>
                  Etiam ut purus mattis mauris sodales aliquam. Ut varius tincidunt libero. Aenean viverra rhoncus pede. Duis leo. Fusce fermentum odio nec arcu.
                </p>

                <p class="mb-0">
                  Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                </p>
              </u-card-text>
            </u-card>
          </u-tabs-window-item>

          <u-tabs-window-item value="option-3">
            <u-card flat>
              <u-card-text>
                <p>
                  Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>

                <p class="mb-0">
                  Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
                </p>
              </u-card-text>
            </u-card>
          </u-tabs-window-item>
        </u-tabs-window>
      </div>
    </u-card>
  `;

/**
 * The direction prop allows for u-tab components to stack vertically.
 */
export const Vertical: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, UCard: USheet },
  setup() {
    const tab = ref('option-1');
    return { tab };
  },
  template: verticalTemplate,
});

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>${verticalTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const tab = ref('option-1')
</script>`,
    },
  },
};

// Spaced Story
const spacedTemplate = `
    <u-container max-width="800">
      <u-row justify="space-around">
        <u-col cols="12" sm="auto">
          <u-tabs :items="example1" direction="vertical" slider-color="purple" spaced="end" v-bind="args"></u-tabs>
        </u-col>

        <u-col cols="12" sm="auto">
          <u-tabs direction="vertical" slider-color="primary" spaced="start" v-bind="args">
            <u-tab v-for="(tab, i) in example2" :key="tab" :prepend-icon="numbers[i]" :text="tab" spaced="start" width="200"></u-tab>
          </u-tabs>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * Vertical tabs can be customized with spaced prop to move the text away from the icon.
 */
export const Spaced: StoryFn<ComponentArgs> = () => ({
  components: { UTabs, UTab, UContainer, URow, UCol },
  setup() {
    const example1 = [
      { text: 'My Files', appendIcon: 'hugeicons:folder-01', width: 250 },
      { text: 'Shared with me', appendIcon: 'hugeicons:user-group', width: 250 },
      { text: 'Starred', appendIcon: 'hugeicons:star', width: 250 },
      { text: 'Recent', appendIcon: 'hugeicons:clock-05', width: 250 },
      { text: 'Backups', appendIcon: 'hugeicons:cloud-upload', width: 250 },
    ];

    const example2 = ['Profile', 'Settings', 'Security', 'Compliance', 'Statistics'];

    const numbers = [
      'hugeicons:one-square',
      'hugeicons:two-square',
      'hugeicons:three-square',
      'hugeicons:four-square',
      'hugeicons:five-square',
    ];

    return { example1, example2, numbers };
  },
  template: spacedTemplate,
});

Spaced.parameters = {
  docs: {
    source: {
      code: `<template>${spacedTemplate}</template>

<script setup>
  const example1 = [
    { text: 'My Files', appendIcon: 'hugeicons:folder-01', width: 250 },
    { text: 'Shared with me', appendIcon: 'hugeicons:user-group', width: 250 },
    { text: 'Starred', appendIcon: 'hugeicons:star', width: 250 },
    { text: 'Recent', appendIcon: 'hugeicons:clock-05', width: 250 },
    { text: 'Backups', appendIcon: 'hugeicons:cloud-upload', width: 250 },
  ]

  const numbers = ['hugeicons:one-square', 'hugeicons:two-square', 'hugeicons:three-square', 'hugeicons:four-square', 'hugeicons:five-square'];

  const example2 = [
    'Profile',
    'Settings',
    'Security',
    'Compliance',
    'Statistics',
  ]
</script>`,
    },
  },
};
