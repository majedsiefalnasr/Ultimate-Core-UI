import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UCol, UContainer, UPagination, URow } from '../index';

interface ComponentArgs {
  activeColor?: string;
  ariaLabel?: string;
  border?: string | number | boolean;
  color?: string;
  currentPageAriaLabel?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  elevation?: string | number;
  ellipsis?: string;
  firstAriaLabel?: string;
  firstIcon?: string;
  lastAriaLabel?: string;
  lastIcon?: string;
  length?: string | number;
  modelValue?: number;
  nextAriaLabel?: string;
  nextIcon?: string;
  pageAriaLabel?: string;
  prevIcon?: string;
  previousAriaLabel?: string;
  rounded?: string | number | boolean;
  showFirstLastPage?: boolean;
  size?: string | number;
  start?: string | number;
  tag?: string;
  theme?: string;
  tile?: boolean;
  totalVisible?: string | number;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Pagination',
  component: UPagination,
  parameters: {
    docs: {
      description: {
        component:
          'The u-pagination component is used to separate long sets of data so that it is easier for a user to consume information.',
      },
      import: `import { UPagination } from '@ultimate/core-ui/components'`,
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

          return `<u-pagination${attrsString}></u-pagination>`;
        },
      },
    },
    Vuetify: {
      component: 'VPagination',
      content:
        "This component is built on top of Vuetify's VPagination component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/paginations/',
    },
    Primary: {
      description:
        'Pagination by default displays the number of pages based on the set length prop, with prev and next buttons surrounding to help you navigate. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a v-model attribute.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-pagination',
            link: 'https://vuetifyjs.com/en/api/v-pagination/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    activeColor: {
      control: { type: 'text' },
      description: 'The applied color when the component is in an active state.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Label for the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.root'" },
        category: 'Props',
      },
    },
    border: {
      control: { type: 'text' },
      description:
        'Applies utility border classes to the component. Omit the border- prefix (e.g., use border-sm as border="sm").',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    color: {
      control: { type: 'text' },
      description:
        'Applies specified color to the selected page button - supports utility colors or css color values.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    currentPageAriaLabel: {
      control: { type: 'text' },
      description: 'Label for the currently selected page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.currentPage'" },
        category: 'Props',
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'default'" },
        category: 'Props',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    elevation: {
      control: { type: 'number' },
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    ellipsis: {
      control: { type: 'text' },
      description: 'Text to show between page buttons when truncating the list.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'...'" },
        category: 'Props',
      },
    },
    firstAriaLabel: {
      control: { type: 'text' },
      description: 'Label for the go to first button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.first'" },
        category: 'Props',
      },
    },
    firstIcon: {
      control: { type: 'text' },
      description: 'The icon to use for the first button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$first'" },
        category: 'Props',
      },
    },
    lastAriaLabel: {
      control: { type: 'text' },
      description: 'Label for the go to last button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.last'" },
        category: 'Props',
      },
    },
    lastIcon: {
      control: { type: 'text' },
      description: 'The icon to use for the last button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$last'" },
        category: 'Props',
      },
    },
    length: {
      control: { type: 'number' },
      description: 'The number of pages.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '1' },
        category: 'Props',
      },
    },
    modelValue: {
      control: { type: 'number' },
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    nextAriaLabel: {
      control: { type: 'text' },
      description: 'Label for the next button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.next'" },
        category: 'Props',
      },
    },
    nextIcon: {
      control: { type: 'text' },
      description: 'The icon to use for the next button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$next'" },
        category: 'Props',
      },
    },
    pageAriaLabel: {
      control: { type: 'text' },
      description: 'Label for each page button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.page'" },
        category: 'Props',
      },
    },
    prevIcon: {
      control: { type: 'text' },
      description: 'The icon to use for the prev button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$prev'" },
        category: 'Props',
      },
    },
    previousAriaLabel: {
      control: { type: 'text' },
      description: 'Label for the previous button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.pagination.ariaLabel.previous'" },
        category: 'Props',
      },
    },
    rounded: {
      control: { type: 'text' },
      description:
        'Designates the border-radius applied to the component. Can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    showFirstLastPage: {
      control: { type: 'boolean' },
      description: 'Show buttons for going to first and last page.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    size: {
      control: { type: 'text' },
      description:
        'Sets the height and width of the component. Can use predefined sizes: x-small, small, default, large, x-large.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'default'" },
        category: 'Props',
      },
    },
    start: {
      control: { type: 'number' },
      description: 'Specify the starting page.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '1' },
        category: 'Props',
      },
    },
    tag: {
      control: { type: 'text' },
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'nav'" },
        category: 'Props',
      },
    },
    theme: {
      control: { type: 'text' },
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    tile: {
      control: { type: 'boolean' },
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    totalVisible: {
      control: { type: 'number' },
      description: 'Specify the total visible pagination numbers.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'text'" },
        category: 'Props',
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UPagination },
  setup() {
    return { args };
  },
  template: `<u-pagination v-bind="args"></u-pagination>`,
});

Default.args = {
  length: 5,
} as ComponentArgs;

// Rounded Story
const roundedTemplate = `
    <div class="text-center">
      <u-pagination
        v-model="page"
        :length="4"
        rounded="circle"
      ></u-pagination>

      <u-pagination
        v-model="page"
        :length="4"
        rounded="0"
      ></u-pagination>
    </div>
  `;

/**
 * The rounded prop allows you to render pagination buttons with alternative styles.
 */
export const Rounded: StoryFn<ComponentArgs> = () => ({
  components: { UPagination },
  setup() {
    const page = ref(1);

    return { page };
  },
  template: roundedTemplate,
});

Rounded.parameters = {
  docs: {
    source: {
      code: `<template>${roundedTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const page = ref(1)
</script>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `
    <div class="text-center">
      <u-pagination
        :length="3"
        disabled
      ></u-pagination>
    </div>
  `;

/**
 * Pagination items can be manually deactivated using the disabled prop.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { UPagination },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>${disabledTemplate}</template>`,
    },
  },
};

// Icons Story
const iconsTemplate = `
    <div class="text-center">
      <u-pagination
        v-model="page"
        :length="4"
        next-icon="hugeicons:circle-arrow-right-01"
        prev-icon="hugeicons:circle-arrow-left-01"
      ></u-pagination>
    </div>
  `;

/**
 * Previous and next page icons can be customized with the prev-icon and next-icon props.
 */
export const Icons: StoryFn<ComponentArgs> = () => ({
  components: { UPagination },
  setup() {
    const page = ref(1);

    return { page };
  },
  template: iconsTemplate,
});

Icons.parameters = {
  docs: {
    source: {
      code: `<template>${iconsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const page = ref(1)
</script>`,
    },
  },
};

// Length Story
const lengthTemplate = `
    <div class="text-center">
      <u-container>
        <u-row justify="center">
          <u-col cols="8">
            <u-container class="max-width">
              <u-pagination
                v-model="page"
                :length="15"
                class="my-4"
              ></u-pagination>
            </u-container>
          </u-col>
        </u-row>
      </u-container>
    </div>
  `;

/**
 * Using the length prop you can set the length of v-pagination, if the number of page buttons
 * exceeds the parent container, it will truncate the list.
 */
export const Length: StoryFn<ComponentArgs> = () => ({
  components: { UCol, UContainer, UPagination, URow },
  setup() {
    const page = ref(1);

    return { page };
  },
  template: lengthTemplate,
});

Length.parameters = {
  docs: {
    source: {
      code: `<template>${lengthTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const page = ref(1)
</script>`,
    },
  },
};

// Total Visible Story
const totalVisibleTemplate = `
    <div class="text-center">
      <u-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></u-pagination>
    </div>
  `;

/**
 * You can also manually set the maximum number of visible page buttons with the total-visible prop.
 */
export const TotalVisible: StoryFn<ComponentArgs> = () => ({
  components: { UPagination },
  setup() {
    const page = ref(1);

    return { page };
  },
  template: totalVisibleTemplate,
});

TotalVisible.parameters = {
  docs: {
    source: {
      code: `<template>${totalVisibleTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const page = ref(1)
</script>`,
    },
  },
};
