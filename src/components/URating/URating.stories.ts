import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { URating } from '../index';

interface ComponentArgs {
  activeColor?: string;
  clearable?: boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  emptyIcon?: any;
  fullIcon?: any;
  halfIncrements?: boolean;
  hover?: boolean;
  itemAriaLabel?: string;
  itemLabelPosition?: string;
  itemLabels?: string[];
  length?: number | string;
  modelValue?: number | string;
  name?: string;
  readonly?: boolean;
  ripple?: boolean;
  size?: number | string;
  tag?: any;
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Ratings',
  component: URating,
  parameters: {
    docs: {
      description: {
        component:
          "The u-rating component collects user feedback via a simple, accessible rating control. It wraps Vuetify's `VRating` and forwards props and slots.",
      },
      import: `import { URating } from '@ultimate/core-ui/components'`,
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

          return `<u-rating${attrsString}></u-rating>`;
        },
      },
    },
    Vuetify: {
      component: 'VRating',
      content: "This story demonstrates a wrapper around Vuetify's `VRating` component.",
      link: 'https://vuetifyjs.com/en/components/ratings/',
    },
  },
  argTypes: {
    activeColor: { control: 'text', description: 'Applied color when active' },
    clearable: { control: 'boolean', description: 'Allows clearing the current value' },
    color: { control: 'text', description: 'Color for unselected icons' },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjust vertical height of the component',
    },
    disabled: { control: 'boolean', description: 'Disables user interaction' },
    emptyIcon: { control: 'text', description: 'Icon used when item is empty (Hugeicons format)' },
    fullIcon: { control: 'text', description: 'Icon used when item is full (Hugeicons format)' },
    halfIncrements: { control: 'boolean', description: 'Allow half-step values' },
    hover: { control: 'boolean', description: 'Apply hover feedback' },
    itemAriaLabel: { control: 'text', description: 'ARIA label template for items' },
    itemLabelPosition: { control: 'text', description: 'Position of item labels (top/bottom)' },
    itemLabels: { control: 'object', description: 'Labels for each item' },
    length: { control: 'number', description: 'Number of rating items' },
    modelValue: { control: 'number', description: 'v-model value' },
    name: { control: 'text', description: 'Name attribute' },
    readonly: { control: 'boolean', description: 'Make control read-only' },
    ripple: { control: 'boolean', description: 'Enable ripple effect' },
    size: { control: 'text', description: 'Size of icons (px or preset)' },
    tag: { control: 'text', description: 'Custom tag for the root element' },
    theme: { control: 'text', description: 'Theme applied to the component' },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { URating },
  setup() {
    const model = ref(3);
    return { args, model };
  },
  template: `<div class="text-center"><u-rating v-bind="args" /></div>`,
});

Default.args = {
  hover: true,
  length: 5,
  size: '32',
  modelValue: 3,
  activeColor: 'primary',
} as ComponentArgs;

// Color Story
const colorTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" active-color="blue" color="orange-lighten-1"></u-rating>
  </div>
  `;

/**
 * The u-rating component can be colored as you want, you can set both selected and not
 * selected colors.
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: colorTemplate,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>${colorTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3)
</script>`,
    },
  },
};

// Density Story
const densityTemplate = `
  <div class="d-flex flex-column align-center justify-center">
    <u-rating v-model="rating" class="ma-2" density="default"></u-rating>

    <u-rating v-model="rating" class="ma-2" density="comfortable"></u-rating>

    <u-rating v-model="rating" class="ma-2" density="compact"></u-rating>
  </div>
  `;

/**
 * Control the space occupied by u-rating items using the density prop.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>${densityTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3)
</script>`,
    },
  },
};

// Clearable Story
const clearableTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" clearable></u-rating>
  </div>
  `;

/**
 * Clicking on a current rating value can reset the rating by using clearable prop.
 */
export const Clearable: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: clearableTemplate,
});

Clearable.parameters = {
  docs: {
    source: {
      code: `<template>${clearableTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3)
</script>`,
    },
  },
};

// Readonly Story
const readonlyTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" readonly></u-rating>
  </div>
  `;

/**
 * For ratings that are not meant to be changed you can use readonly prop.
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: readonlyTemplate,
});

Readonly.parameters = {
  docs: {
    source: {
      code: `<template>${readonlyTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3)
</script>`,
    },
  },
};

// Hover Story
const hoverTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" hover></u-rating>
  </div>
  `;

/**
 * When using the hover prop, the rating icons will become a solid color and slightly
 * increase its scale when the mouse is hovered over them.
 */
export const Hover: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: hoverTemplate,
});

Hover.parameters = {
  docs: {
    source: {
      code: `<template>${hoverTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3)
</script>`,
    },
  },
};

// Labels Story
const labelsTemplate = `
  <div class="d-flex align-center justify-center flex-column">
    <u-rating v-model="rating" :item-labels="['sad', '', '', '', 'happy']" class="ma-2" item-label-position="top"></u-rating>

    <u-rating v-model="rating" :item-labels="['sad', '', '', '', 'happy']" class="ma-2" item-label-position="bottom"></u-rating>
  </div>
  `;

/**
 * The u-rating component can display labels above or below each item.
 */
export const Labels: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(4);
    return { rating };
  },
  template: labelsTemplate,
});

Labels.parameters = {
  docs: {
    source: {
      code: `<template>${labelsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(4)
</script>`,
    },
  },
};

// Length Story
const lengthTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" :length="10"></u-rating>
  </div>
  `;

/**
 * Change the number of items by modifying the the length prop.
 */
export const Length: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(2);
    return { rating };
  },
  template: lengthTemplate,
});

Length.parameters = {
  docs: {
    source: {
      code: `<template>${lengthTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(2)
</script>`,
    },
  },
};

// HalfIncrements Story
const halfIncrementsTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" half-increments hover></u-rating>
    <pre>{{ rating }}</pre>
  </div>
  `;

/**
 * The half-increments prop increases the granularity of the ratings, allow for .5
 * values as well.
 */
export const HalfIncrements: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3.5);
    return { rating };
  },
  template: halfIncrementsTemplate,
});

HalfIncrements.parameters = {
  docs: {
    source: {
      code: `<template>${halfIncrementsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rating = ref(3.5)
</script>`,
    },
  },
};

// Size Story
const sizeTemplate = `
  <div class="d-flex flex-column align-center">
    <u-rating model-value="3" size="x-small"></u-rating>
    <u-rating model-value="3" size="small"></u-rating>
    <u-rating model-value="3"></u-rating>
    <u-rating model-value="3" size="large"></u-rating>
    <u-rating model-value="3" size="x-large"></u-rating>
    <u-rating model-value="3" size="72"></u-rating>
  </div>
  `;

/**
 * Utilize the same sizing classes available in v-icon or provide your own with the size prop.
 */
export const Size: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    return {};
  },
  template: sizeTemplate,
});

Size.parameters = {
  docs: {
    source: {
      code: `<template>${sizeTemplate}</template>`,
    },
  },
};

// AriaLabel Story
const ariaLabelTemplate = `
  <div class="text-center">
    <u-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></u-rating>
  </div>
  `;

/**
 * Provide a label to assistive technologies for each item.
 */
export const AriaLabel: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(4);
    return { rating };
  },
  template: ariaLabelTemplate,
});

AriaLabel.parameters = {
  docs: {
    source: {
      code: `<template>${ariaLabelTemplate}</template>
      
<script setup>
  import { ref } from 'vue'

  const rating = ref(4)
</script>`,
    },
  },
};
