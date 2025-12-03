import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UCard, UIcon, USheet, USlideGroup } from '../index';

interface ComponentArgs {
  centerActive?: boolean;
  contentClass?: unknown;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
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
  symbol?: unknown;
  tag?: unknown;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data Display/Slide Groups',
  component: USlideGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-slide-group` component displays horizontally scrollable items and is powered by `u-item-group`. Use it for paginated or carousel-like layouts.',
      },
      import: `import { USlideGroup } from '@ultimate/core-ui/components'`,
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

          return `<u-sheet class="mx-auto" max-width="600">
    <u-slide-group${attrsString}>
      <template v-for="n in 25">
        <u-slide-group-item :key="n" v-slot="{ isSelected, toggle }">
          <u-btn :color="isSelected ? 'primary' : undefined" class="ma-2" rounded @click="toggle">Options {{ n }}</u-btn>
        </u-slide-group-item>
      </template>
    </u-slide-group>
  </u-sheet>`;
        },
      },
    },
    Vuetify: {
      component: 'VSlideGroup',
      content: "Wrapper around Vuetify's `VSlideGroup` component.",
      link: 'https://vuetifyjs.com/en/components/slide-groups/',
    },
    Primary: {
      description:
        'Slide groups let users browse horizontal lists of selectable items with optional arrows and paging.',
    },
  },
  argTypes: {
    centerActive: {
      control: 'boolean',
      description: 'Forces the selected component to be centered. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    contentClass: {
      control: 'object',
      description: 'Adds classes to the slide group item. Type: any',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: "Switch between horizontal and vertical modes. Default: 'horizontal'",
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    mandatory: {
      control: 'text',
      description:
        "Forces at least one item to always be selected (if available). Accepts `true`, `false` or `'force'`.",
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: 'false' } },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made. Type: number',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
    },
    mobile: {
      control: 'boolean',
      description:
        'Determines display mode. true = mobile, false = desktop, null = based on mobile-breakpoint. Default: null',
      table: { type: { summary: 'boolean | null' }, defaultValue: { summary: 'null' } },
    },
    mobileBreakpoint: {
      control: 'text',
      description:
        "Sets the designated mobile breakpoint. Accepts number or 'xs'|'sm'|'md'|'lg'|'xl'|'xxl'",
      table: {
        type: { summary: "number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'object',
      description:
        'The v-model value of the component. If `multiple` is true this defaults to an array.',
      table: { type: { summary: 'unknown' }, defaultValue: { summary: 'undefined' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows selecting multiple items. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    nextIcon: {
      control: 'text',
      description:
        "The appended slot when arrows are shown. Accepts string, array, component or functional component. Default: '$next'",
      table: {
        type: { summary: 'string | array | component | FunctionalComponent' },
        defaultValue: { summary: '$next' },
      },
    },
    prevIcon: {
      control: 'text',
      description:
        "The prepended slot when arrows are shown. Accepts string, array, component or functional component. Default: '$prev'",
      table: {
        type: { summary: 'string | array | component | FunctionalComponent' },
        defaultValue: { summary: '$prev' },
      },
    },
    scrollToActive: {
      control: 'boolean',
      description:
        'Keeps the last active element visible when resizing the scrollable container. Default: true',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    selectedClass: {
      control: 'text',
      description:
        "Configure the active CSS class applied when an item is selected. Default: 'v-slide-group-item--active'",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'v-slide-group-item--active' },
      },
    },
    showArrows: {
      control: 'text',
      description:
        "Change when overflow arrow indicators are shown. Accepts boolean or 'desktop'|'mobile'|'always'. Default: false",
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    symbol: {
      control: 'text',
      description:
        'Symbol used to hook into group functionality (e.g., for v-btn-toggle). Type: any',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    tag: {
      control: 'text',
      description: "Specify a custom tag used on the root element. Default: 'div'",
      table: { type: { summary: 'string | component' }, defaultValue: { summary: 'div' } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USlideGroup, USheet, UBtn },
  setup() {
    return { args };
  },
  template: `
  <u-sheet class="mx-auto" max-width="600">
    <u-slide-group v-bind="args">
      <template v-for="n in 25">
        <u-slide-group-item :key="n" v-slot="{ isSelected, toggle }">
          <u-btn :color="isSelected ? 'primary' : undefined" class="ma-2" rounded @click="toggle">Options {{ n }}</u-btn>
        </u-slide-group-item>
      </template>
    </u-slide-group>
  </u-sheet>
  `,
});

Default.args = {
  showArrows: 'true',
} as ComponentArgs;

// SelectedClass Story
const selectedClassTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <u-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle">
          <div class="d-flex fill-height align-center justify-center">
            <u-icon v-if="isSelected" icon="hugeicons:close-circle-24" size="48" color="white" />
          </div>
        </u-card>
      </u-slide-group-item>
    </u-slide-group>
  </u-sheet>
  `;

/**
 * selected-class prop allows you to pass a class to customize the active items.
 */
export const SelectedClass: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard },
  setup() {
    const model = ref(null as null | number);
    return { model };
  },
  template: selectedClassTemplate,
});

SelectedClass.parameters = {
  docs: {
    source: {
      code: `<template>${selectedClassTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
</script>`,
    },
  },
};

// CenterActive Story
const centerActiveTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" center-active show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle }">
        <u-card :color="isSelected ? 'primary' : 'grey-lighten-1'" class="ma-4" height="200" width="100" @click="toggle">
          <div class="d-flex fill-height align-center justify-center">
            <u-icon v-if="isSelected" icon="hugeicons:close-circle-24" size="48" color="white" />
          </div>
        </u-card>
      </u-slide-group-item>
    </u-slide-group>
  </u-sheet>
  `;

/**
 * Using the center-active prop will make the active item always centered.
 */
export const CenterActive: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard },
  setup() {
    const model = ref(null as null | number);
    return { model };
  },
  template: centerActiveTemplate,
});

CenterActive.parameters = {
  docs: {
    source: {
      code: `<template>${centerActiveTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
</script>`,
    },
  },
};

// CustomIcons Story
const customIconsTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" next-icon="hugeicons:plus-24" prev-icon="hugeicons:minus-24" selected-class="bg-primary" show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <u-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle" />
      </u-slide-group-item>
    </u-slide-group>
  </u-sheet>
  `;

/**
 * You can add your custom pagination icons instead of arrows using the next-icon and
 * prev-icon props.
 */
export const CustomIcons: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard, UIcon },
  setup() {
    const model = ref(null as null | number);
    return { model };
  },
  template: customIconsTemplate,
});

CustomIcons.parameters = {
  docs: {
    source: {
      code: `<template>${customIconsTemplate}</template>`,
    },
  },
};

// Mandatory Story
const mandatoryTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" selected-class="bg-primary" mandatory show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <u-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle" />
      </u-slide-group-item>
    </u-slide-group>
  </u-sheet>
  `;

/**
 * the mandatory prop will make the slide group require at least 1 item must be selected.
 */
export const Mandatory: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard },
  setup() {
    const model = ref(null as null | number);
    return { model };
  },
  template: mandatoryTemplate,
});

Mandatory.parameters = {
  docs: {
    source: {
      code: `<template>${mandatoryTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
</script>`,
    },
  },
};

// Multiple Story
const multipleTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" selected-class="bg-primary" multiple show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <u-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle" />
      </u-slide-group-item>
    </u-slide-group>
  </u-sheet>
  `;

/**
 * You can select multiple items by setting the multiple prop.
 */
export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard },
  setup() {
    const model = ref([] as number[]);
    return { model };
  },
  template: multipleTemplate,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>${multipleTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref([])
</script>`,
    },
  },
};

// PseudoCarousel Story
const pseudoCarouselTemplate = `
  <u-sheet class="mx-auto" elevation="8" max-width="800">
    <u-slide-group v-model="model" class="pa-4" selected-class="bg-primary" show-arrows>
      <u-slide-group-item v-for="n in 15" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <u-card :class="['ma-4', selectedClass]" color="grey-lighten-1" height="200" width="100" @click="toggle" />
      </u-slide-group-item>
    </u-slide-group>

    <div v-if="model != null" class="mt-4 text-center">
      <h3 class="text-h6">Selected {{ model }}</h3>
    </div>
  </u-sheet>
  `;

/**
 * Customize the slide group to creatively display information on sheets. Using the
 * selection, we can display auxiliary information easily for the user.
 */
export const PseudoCarousel: StoryFn<ComponentArgs> = () => ({
  components: { USlideGroup, USheet, UCard },
  setup() {
    const model = ref(null as null | number);
    return { model };
  },
  template: pseudoCarouselTemplate,
});

PseudoCarousel.parameters = {
  docs: {
    source: {
      code: `<template>${pseudoCarouselTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(null)
</script>`,
    },
  },
};
