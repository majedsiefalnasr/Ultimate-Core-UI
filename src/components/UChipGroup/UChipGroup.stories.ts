import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import {
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCardTitle,
  UChip,
  UChipGroup,
  UDivider,
  UResponsive,
  USheet,
  USpacer,
  UToolbar,
  UToolbarTitle,
} from '../index';

interface ComponentArgs {
  // base color
  baseColor?: string;
  // center active chip
  centerActive?: boolean;
  // theme color
  color?: string;
  // column mode
  column?: boolean;
  // content class
  contentClass?: string;
  // direction
  direction?: 'horizontal' | 'vertical';
  // disabled state
  disabled?: boolean;
  // filter mode
  filter?: boolean;
  // mandatory selection
  mandatory?: boolean | 'force';
  // max selections
  max?: number;
  // mobile mode
  mobile?: boolean | null;
  // mobile breakpoint
  mobileBreakpoint?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  // model value
  modelValue?: unknown;
  // multiple selection
  multiple?: boolean;
  // next icon
  nextIcon?: string;
  // prev icon
  prevIcon?: string;
  // scroll to active
  scrollToActive?: boolean;
  // selected class
  selectedClass?: string;
  // show arrows
  showArrows?: string | boolean;
  // symbol
  symbol?: unknown;
  // tag
  tag?: string;
  // theme
  theme?: string;
  // variant
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Selection/Chip Groups',
  component: UChipGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The u-chip-group supercharges the u-chip component by providing groupable functionality. It is used for creating groups of selections using chips.',
      },
      import: `import { UChipGroup } from '@ultimate/core-ui/components'`,
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

          return `
            <u-chip-group${attrsString}>
              <u-chip>Chip 1</u-chip>
              <u-chip>Chip 2</u-chip>
              <u-chip>Chip 3</u-chip>
            </u-chip-group>`;
        },
      },
    },
    Vuetify: {
      component: 'VChipGroup',
      content:
        "This component is built on top of Vuetify's VChipGroup component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/chip-groups/',
    },
    Primary: {
      description:
        'Chip groups make it easy for users to select filtering options for more complex implementations. By default u-chip-group will overflow to the right but can be changed to a column only mode.',
    },
  },
  argTypes: {
    baseColor: {
      control: 'color',
      description:
        'Sets the color of component when not focused. Recommended with color or filter to properly highlight selected items.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    centerActive: {
      control: 'boolean',
      description: 'Forces the selected chip to be centered.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'color',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    column: {
      control: 'boolean',
      description: 'Remove horizontal pagination and wrap items as needed.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    contentClass: {
      control: 'text',
      description: 'Adds classes to the slide group item.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Switch between horizontal and vertical modes.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    filter: {
      control: 'boolean',
      description: 'Applies an checkmark icon in front of every chip for using it like a filter.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    mandatory: {
      control: 'boolean',
      description: 'Forces at least one item to always be selected (if available).',
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: 'false' } },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made.',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
    },
    mobile: {
      control: 'boolean',
      description:
        'Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    mobileBreakpoint: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description: 'Sets the designated mobile breakpoint for the component.',
      table: {
        type: { summary: "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'text',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'unknown' }, defaultValue: { summary: 'undefined' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows one to select multiple items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    nextIcon: {
      control: 'text',
      description: 'Specify the icon to use for the next icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$next'" } },
    },
    prevIcon: {
      control: 'text',
      description: 'Specify the icon to use for the prev icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$prev'" } },
    },
    scrollToActive: {
      control: 'boolean',
      description: 'Keeps the last active element visible when resizing the scrollable container.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'v-chip--selected'" } },
    },
    showArrows: {
      control: 'boolean',
      description: 'Force the display of the pagination arrows.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    symbol: {
      control: 'text',
      description:
        'The Symbol used to hook into group functionality for components like v-btn-toggle and v-bottom-navigation.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'div' } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'flat | text | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'tonal' },
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UChipGroup, UChip },
  setup() {
    return { args };
  },
  template: `
    <u-chip-group v-bind="args">
      <u-chip>Chip 1</u-chip>
      <u-chip>Chip 2</u-chip>
      <u-chip>Chip 3</u-chip>
    </u-chip-group>
  `,
});

Default.args = {
  color: 'primary',
};

// Column Story
const columnTemplate = `
  <u-sheet
    class="mx-auto"
    elevation="10"
    max-width="300"
    rounded="xl"
  >
    <div class="pa-4">
      <u-chip-group
        selected-class="text-primary"
        column
      >
        <u-chip
          v-for="tag in tags"
          :key="tag"
        >
          {{ tag }}
        </u-chip>
      </u-chip-group>
    </div>
  </u-sheet>
`;

/**
 * The column prop allows chip groups to wrap their chips when they exceed
 * the container width.
 */
export const Column: StoryFn<ComponentArgs> = () => ({
  components: { UChipGroup, UChip, USheet, UBtn },
  setup() {
    const tags = [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ];
    return { tags };
  },
  template: columnTemplate,
});

Column.parameters = {
  docs: {
    source: {
      code: `<template>${columnTemplate}</template>

<script setup lang="ts">
const tags = [
  'Work',
  'Home Improvement',
  'Vacation',
  'Food',
  'Drawers',
  'Shopping',
  'Art',
  'Tech',
  'Creative Writing',
]
</script>`,
    },
  },
};

// Filter Results Story
const filterResultsTemplate = `
  <u-card>
    <u-card-text>
      <h2 class="text-h6 mb-2">Amenities</h2>
      <u-chip-group
        v-model="amenities"
        column
        multiple
      >
        <u-chip filter variant="outlined">Elevator</u-chip>
        <u-chip filter variant="outlined">Washer / Dryer</u-chip>
        <u-chip filter variant="outlined">Fireplace</u-chip>
        <u-chip filter variant="outlined">Wheelchair access</u-chip>
        <u-chip filter variant="outlined">Dogs ok</u-chip>
        <u-chip filter variant="outlined">Cats ok</u-chip>
      </u-chip-group>

      <h2 class="text-h6 mb-2">Neighborhoods</h2>
      <u-chip-group
        v-model="neighborhoods"
        column
        multiple
      >
        <u-chip filter variant="outlined">Snowy Rock Place</u-chip>
        <u-chip filter variant="outlined">Honeylane Circle</u-chip>
        <u-chip filter variant="outlined">Donna Drive</u-chip>
        <u-chip filter variant="outlined">Elaine Street</u-chip>
        <u-chip filter variant="outlined">Court Street</u-chip>
        <u-chip filter variant="outlined">Kennedy Park</u-chip>
      </u-chip-group>
    </u-card-text>
  </u-card>
`;

/**
 * Easily create chip groups that provide additional feedback with the filter prop.
 * This creates an alternative visual style that communicates to the user that the
 * chip is selected.
 */
export const FilterResults: StoryFn<ComponentArgs> = () => ({
  components: { UChipGroup, UChip, UCard, UCardText },
  setup() {
    const amenities = shallowRef([1, 4]);
    const neighborhoods = shallowRef([2]);

    return { amenities, neighborhoods };
  },
  template: filterResultsTemplate,
});

FilterResults.parameters = {
  docs: {
    source: {
      code: `<template>${filterResultsTemplate}</template>

<script setup lang="ts">
import { shallowRef } from 'vue'

const amenities = shallowRef([1, 4])
const neighborhoods = shallowRef([2])
</script>`,
    },
  },
};

// Mandatory Story
const mandatoryTemplate = `
  <u-sheet class="py-4 px-1">
    <u-chip-group
      selected-class="text-primary"
      mandatory
    >
      <u-chip
        v-for="tag in tags"
        :key="tag"
        :text="tag"
      ></u-chip>
    </u-chip-group>
  </u-sheet>
`;

/**
 * The mandatory prop forces at least 1 item to always be selected.
 */
export const Mandatory: StoryFn<ComponentArgs> = () => ({
  components: { UChipGroup, UChip },
  setup() {
    const tags = [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ];
    return { tags };
  },
  template: mandatoryTemplate,
});

Mandatory.parameters = {
  docs: {
    source: {
      code: `<template>${mandatoryTemplate}</template>

<script setup>
const tags = [
  'Work',
  'Home Improvement',
  'Vacation',
  'Food',
  'Drawers',
  'Shopping',
  'Art',
  'Tech',
  'Creative Writing',
]
</script>`,
    },
  },
};

// Multiple Story
const multipleTemplate = `
  <v-sheet class="py-4 px-1">
    <v-chip-group
      selected-class="text-primary"
      multiple
    >
      <v-chip
        v-for="tag in tags"
        :key="tag"
        :text="tag"
      ></v-chip>
    </v-chip-group>
  </v-sheet>
`;

/**
 * The multiple prop allows users to select multiple chips within the chip group.
 */
export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { UChipGroup, UChip },
  setup() {
    const tags = [
      'Work',
      'Home Improvement',
      'Vacation',
      'Food',
      'Drawers',
      'Shopping',
      'Art',
      'Tech',
      'Creative Writing',
    ];
    return { tags };
  },
  template: multipleTemplate,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>${multipleTemplate}</template>

<script setup lang="ts">
const tags = [
  'Work',
  'Home Improvement',
  'Vacation',
  'Food',
  'Drawers',
  'Shopping',
  'Art',
  'Tech',
  'Creative Writing',
]
</script>`,
    },
  },
};

// Product Card Story
const productCardTemplate = `
  <u-card class="mx-auto" max-width="500">
    <u-toolbar color="cyan-darken-1">
      <u-toolbar-title class="text-h6">Select Size</u-toolbar-title>
    </u-toolbar>

    <u-card-text>
      <h2 class="text-h4 mb-2">$12.00</h2>
      <p class="text-subtitle-1">Inline text</p>

      <u-divider class="my-4" />

      <u-chip-group
        v-model="sizes"
        selected-class="text-primary"
        mandatory
      >
        <u-chip>X-Small</u-chip>
        <u-chip>Small</u-chip>
        <u-chip>Medium</u-chip>
        <u-chip>Large</u-chip>
        <u-chip>X-Large</u-chip>
        <u-chip>XX-Large</u-chip>
      </u-chip-group>
    </u-card-text>

    <u-card-actions>
      <u-btn color="primary" variant="text">Continue</u-btn>
      <u-spacer />
      <u-btn color="grey" variant="text">Cancel</u-btn>
    </u-card-actions>
  </u-card>
`;

/**
 * Chip groups can be used to display a collection of interactive chips with
 * additional context like a product selection interface.
 */
export const ProductCard: StoryFn<ComponentArgs> = () => ({
  components: {
    UChipGroup,
    UChip,
    UCard,
    UCardTitle,
    UCardText,
    UCardActions,
    UBtn,
    UToolbar,
    UToolbarTitle,
    UDivider,
    USpacer,
  },
  setup() {
    const sizes = ref(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']);
    return { sizes };
  },
  template: productCardTemplate,
});

ProductCard.parameters = {
  docs: {
    source: {
      code: `<template>${productCardTemplate}</template>

<script setup lang="ts">
import { ref } from 'vue';

const sizes = ref(['X-Small', 'Small', 'Medium', 'Large', 'X-Large', 'XX-Large']);
</script>`,
    },
  },
};

// Reddit Style Categories Story
const redditStyleCategoriesTemplate = `
  <u-responsive class="mx-auto" max-width="1200">
    <u-sheet class="pa-4">
      <u-chip-group
        multiple
        column
        color="primary"
      >
        <u-chip
          v-for="card in cards"
          :key="card.title"
          :color="card.color"
          filter
          variant="outlined"
        >
          {{ card.title }}
        </u-chip>
      </u-chip-group>
    </u-sheet>
  </u-responsive>
`;

/**
 * This example showcases a chip group styled similarly to Reddit's topic selection
 * interface, complete with emojis and responsive design.
 */
export const RedditStyleCategories: StoryFn<ComponentArgs> = () => ({
  components: { UChipGroup, UChip, UResponsive },
  setup() {
    const cards = shallowRef([
      { title: '🎬 Entertainment', color: 'purple' },
      { title: '🏀 Sports', color: 'orange' },
      { title: '🎮 Gaming', color: 'blue' },
      { title: '🤣 Funny', color: 'red' },
      { title: '❓ Ask Reddit', color: 'cyan' },
      { title: '💼 Professional', color: 'teal' },
      { title: '🌍 World News', color: 'indigo' },
      { title: '🔬 Science', color: 'green' },
    ]);
    return { cards };
  },
  template: redditStyleCategoriesTemplate,
});

RedditStyleCategories.parameters = {
  docs: {
    source: {
      code: `<template>${redditStyleCategoriesTemplate}</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const cards = shallowRef([
  { title: '🎬 Entertainment', color: 'purple' },
  { title: '🏀 Sports', color: 'orange' },
  { title: '🎮 Gaming', color: 'blue' },
  { title: '🤣 Funny', color: 'red' },
  { title: '❓ Ask Reddit', color: 'cyan' },
  { title: '💼 Professional', color: 'teal' },
  { title: '🌍 World News', color: 'indigo' },
  { title: '🔬 Science', color: 'green' },
]);
</script>`,
    },
  },
};
