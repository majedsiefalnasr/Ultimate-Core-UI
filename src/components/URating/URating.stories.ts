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

/**
 * Default: basic usage — hover, length 5, size 32, value 3
 */
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { URating },
  setup() {
    const model = ref(3);
    return { args, model };
  },
  template: `<u-rating v-bind="args" />`,
});

Default.args = {
  hover: true,
  length: 5,
  size: '32',
  modelValue: 3,
  activeColor: 'primary',
} as ComponentArgs;

/**
 * Color: demonstrate different active and base colors
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" active-color="blue" color="orange-lighten-1"></u-rating>
  </div>
  `,
});

Color.parameters = {
  docs: {
    source: { code: `<u-rating v-model="rating" active-color="blue" color="orange-lighten-1" />` },
  },
};

/**
 * Density: compare default, comfortable and compact densities
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: `
  <div class="d-flex flex-column align-center justify-center">
    <u-rating v-model="rating" class="ma-2" density="default"></u-rating>

    <u-rating v-model="rating" class="ma-2" density="comfortable"></u-rating>

    <u-rating v-model="rating" class="ma-2" density="compact"></u-rating>
  </div>
  `,
});

Density.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" density="default|comfortable|compact" />` } },
};

/**
 * Clearable: allow clearing the current rating by clicking it
 */
export const Clearable: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" clearable></u-rating>
  </div>
  `,
});

Clearable.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" clearable />` } },
};

/**
 * Readonly: display a rating that cannot be changed
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" readonly></u-rating>
  </div>
  `,
});

Readonly.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" readonly />` } },
};

/**
 * Hover: show hover feedback when hovering over items
 */
export const Hover: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" hover></u-rating>
  </div>
  `,
});

Hover.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" hover />` } },
};

/**
 * Labels: item labels shown above or below icons
 */
export const Labels: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(4);
    return { rating };
  },
  template: `
  <div class="d-flex align-center justify-center flex-column">
    <u-rating v-model="rating" :item-labels="['sad', '', '', '', 'happy']" class="ma-2" item-label-position="top"></u-rating>

    <u-rating v-model="rating" :item-labels="['sad', '', '', '', 'happy']" class="ma-2" item-label-position="bottom"></u-rating>
  </div>
  `,
});

Labels.parameters = {
  docs: {
    source: {
      code: `<u-rating v-model="rating" :item-labels="['sad', '', '', '', 'happy']" item-label-position="top|bottom" />`,
    },
  },
};

/**
 * Length: change the number of rating items
 */
export const Length: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(2);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" :length="10"></u-rating>
  </div>
  `,
});

Length.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" :length="10" />` } },
};

/**
 * HalfIncrements: allow .5 steps for finer ratings
 */
export const HalfIncrements: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(3.5);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" half-increments hover></u-rating>
    <pre>{{ rating }}</pre>
  </div>
  `,
});

HalfIncrements.parameters = {
  docs: { source: { code: `<u-rating v-model="rating" half-increments hover />` } },
};

/**
 * Size: demonstrate preset and numeric sizes
 */
export const Size: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    return {};
  },
  template: `
  <div class="d-flex flex-column align-center">
    <u-rating model-value="3" size="x-small"></u-rating>
    <u-rating model-value="3" size="small"></u-rating>
    <u-rating model-value="3"></u-rating>
    <u-rating model-value="3" size="large"></u-rating>
    <u-rating model-value="3" size="x-large"></u-rating>
    <u-rating model-value="3" size="72"></u-rating>
  </div>
  `,
});

Size.parameters = {
  docs: {
    source: { code: `<u-rating model-value="3" size="x-small|small|default|large|x-large|72" />` },
  },
};

/**
 * AriaLabel: provide an accessible label template for each item
 */
export const AriaLabel: StoryFn<ComponentArgs> = () => ({
  components: { URating },
  setup() {
    const rating = ref(4);
    return { rating };
  },
  template: `
  <div class="text-center">
    <u-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}"></u-rating>
  </div>
  `,
});

AriaLabel.parameters = {
  docs: {
    source: {
      code: `<u-rating v-model="rating" item-aria-label="custom icon label text {0} of {1}" />`,
    },
  },
};
