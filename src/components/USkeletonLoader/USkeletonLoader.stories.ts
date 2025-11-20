import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UBtn,
  UCard,
  UChip,
  UCol,
  UContainer,
  UImg,
  UListItem,
  URow,
  USkeletonLoader,
} from '../index';

interface ComponentArgs {
  boilerplate?: boolean;
  color?: string;
  elevation?: number | string;
  height?: number | string;
  loading?: boolean;
  loadingText?: string;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  minWidth?: number | string;
  theme?: string;
  type?: string | string[];
  width?: number | string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Skeleton loaders',
  component: USkeletonLoader,
  parameters: {
    docs: {
      description: {
        component:
          'Skeleton loaders provide a simple way to display loading placeholders. `u-skeleton-loader` shows a visual placeholder while content is loading.',
      },
      import: `import { USkeletonLoader } from '@ultimate/core-ui/components'`,
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

          return `<u-skeleton-loader${attrsString}></u-skeleton-loader>`;
        },
      },
    },
    Vuetify: {
      component: 'VSkeletonLoader',
      content: "Wrapper around Vuetify's `VSkeletonLoader` component.",
      link: 'https://vuetifyjs.com/en/components/skeleton-loaders/',
    },
    Primary: {
      description:
        'The u-skeleton-loader component provides a visual indicator while content is loading. Prefer using slots where possible for graceful fallback.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-skeleton-loader',
            link: 'https://vuetifyjs.com/en/api/v-skeleton-loader/',
          },
          description: 'Primary Component',
        },
      ],
    },
    anatomy: {
      description: 'The v-skeleton-loader has a default slot that is rendered when not loading.',
      Image: '/images/stories/USkeletonLoader.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The container is the root element of the component.',
        },
      ],
    },
  },
  argTypes: {
    boilerplate: { control: 'boolean', description: 'Remove the loading animation' },
    color: { control: 'text', description: 'Color of the skeleton' },
    elevation: { control: 'number', description: 'Elevation to match content' },
    height: { control: 'text' },
    loading: { control: 'boolean', description: 'Toggle loading state' },
    loadingText: { control: 'text', description: 'ARIA label for loading state' },
    maxHeight: { control: 'text' },
    maxWidth: { control: 'text' },
    minHeight: { control: 'text' },
    minWidth: { control: 'text' },
    theme: { control: 'text' },
    type: {
      control: 'text',
      description: `Skeleton type(s) - can be combined with comma (e.g. "actions", "article", "avatar", "button", "card", "card-avatar", "chip", "date-picker", "date-picker-options", "date-picker-days", "divider", "heading", "image", "list-item", "list-item-avatar", "list-item-two-line", "list-item-avatar-two-line", "list-item-three-line", "list-item-avatar-three-line", "ossein", "paragraph", "sentences", "subtitle", "table", "table-heading", "table-thead", "table-tbody", "table-row-divider", "table-row", "table-tfoot", "text"):`,
    },
    width: { control: 'text' },
  },
};

export default meta;

/**
 * Default: simple card skeleton
 */
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USkeletonLoader },
  setup() {
    return { args };
  },
  template: `<u-skeleton-loader v-bind="args" class="mx-auto" />`,
});

Default.args = {
  type: 'card',
  maxWidth: '300',
} as ComponentArgs;

/**
 * Type: show different skeleton types side-by-side
 */
export const Type: StoryFn<ComponentArgs> = () => ({
  components: { USkeletonLoader, UContainer, URow, UCol },
  template: `
  <u-container>
    <u-row>
      <u-col cols="12" md="6">
        <u-skeleton-loader class="mx-auto border" max-width="300" type="card-avatar, actions"></u-skeleton-loader>
      </u-col>

      <u-col cols="12" md="6">
        <u-skeleton-loader class="mx-auto border" max-width="300" type="image, article"></u-skeleton-loader>
      </u-col>
    </u-row>
  </u-container>
  `,
});

Type.parameters = {
  docs: {
    description: {
      story: `The type property is used to define the type of skeleton loader. Types can be combined to create more complex skeletons. For example, the card type is a combination of the image and heading types.

The following built-in types are available:

| Type | Composition |
|---|---|
| actions | button@2 |
| article | heading, paragraph |
| avatar | avatar |
| button | button |
| card | image, heading |
| card-avatar | image, list-item-avatar |
| chip | chip |
| date-picker | list-item, heading, divider, date-picker-options, date-picker-days, actions |
| date-picker-options | text, avatar@2 |
| date-picker-days | avatar@28 |
| divider | divider |
| heading | heading |
| image | image |
| list-item | text |
| list-item-avatar | avatar, text |
| list-item-two-line | sentences |
| list-item-avatar-two-line | avatar, sentences |
| list-item-three-line | paragraph |
| list-item-avatar-three-line | avatar, paragraph |
| ossein | ossein |
| paragraph | text@3 |
| sentences | text@2 |
| subtitle | text |
| table | table-heading, table-thead, table-tbody, table-tfoot |
| table-heading | heading, text |
| table-thead | heading@6 |
| table-tbody | table-row-divider@6 |
| table-row-divider | table-row, divider |
| table-row | text@6 |
| table-tfoot | text@2, avatar@2 |
| text | text |
`,
    },
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" md="6">
        <u-skeleton-loader class="mx-auto border" max-width="300" type="card-avatar, actions" />
      </u-col>

      <u-col cols="12" md="6">
        <u-skeleton-loader class="mx-auto border" max-width="300" type="image, article" />
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

/**
 * Loading: toggle loading state to show slot vs skeleton
 */
export const Loading: StoryFn<ComponentArgs> = () => ({
  components: { USkeletonLoader, UBtn, UListItem },
  setup() {
    const loading = ref(true);
    return { loading };
  },
  template: `
  <div>
    <div class="text-center mb-6">
      <u-btn size="x-large" @click="loading = !loading">Toggle Loading</u-btn>
    </div>

    <u-row justify="center">
      <u-col cols="12" md="6">
        <div class="text-h5 text-center">Using slot</div>
        <u-skeleton-loader :loading="loading" type="list-item-two-line">
          <u-list-item lines="two" subtitle="Subtitle" title="Title" rounded></u-list-item>
        </u-skeleton-loader>
      </u-col>

      <u-col cols="12" md="6">
        <div class="text-h5 text-center">Using if</div>
        <u-skeleton-loader v-if="loading" type="list-item-two-line"></u-skeleton-loader>
        <u-list-item v-else lines="two" subtitle="Subtitle" title="Title" rounded></u-list-item>
      </u-col>
    </u-row>
  </div>
  `,
});

Loading.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-btn @click="loading = !loading">Toggle Loading</u-btn>

    <u-skeleton-loader :loading="loading" type="list-item-two-line">
      <u-list-item lines="two" subtitle="Subtitle" title="Title" rounded />
    </u-skeleton-loader>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(true)
</script>`,
    },
  },
};

/**
 * Elevation: match skeleton elevation to content
 */
export const Elevation: StoryFn<ComponentArgs> = () => ({
  components: { USkeletonLoader },
  template: `
  <u-skeleton-loader class="mx-auto" elevation="12" max-width="400" type="table-heading, list-item-two-line, image, table-tfoot"></u-skeleton-loader>
  `,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<u-skeleton-loader class="mx-auto" elevation="12" max-width="400" type="table-heading, list-item-two-line, image, table-tfoot" />`,
    },
  },
};

/**
 * Boilerplate: use boilerplate mode for mockups
 */
export const Boilerplate: StoryFn<ComponentArgs> = () => ({
  components: { USkeletonLoader },
  template: `
  <u-skeleton-loader class="mx-auto" elevation="2" max-width="360" type="card-avatar, article, actions" boilerplate></u-skeleton-loader>
  `,
});

Boilerplate.parameters = {
  docs: {
    source: {
      code: `<u-skeleton-loader class="mx-auto" elevation="2" max-width="360" type="card-avatar, article, actions" boilerplate />`,
    },
  },
};

/**
 * IceCreamSuggestions: a larger example using cards and loading toggles
 */
export const IceCreamSuggestions: StoryFn<ComponentArgs> = () => ({
  components: { USkeletonLoader, UCard, UImg, UChip, UBtn },
  setup() {
    const loading = ref(true);
    const cards = [
      {
        title: 'Homemade Dulce de Leche Ice Cream with Chocolate Chips',
        subtitle: 'Happy Foods',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/dulce-ice-cream.png',
      },
      {
        title: 'Salted Caramel Swirl Ice Cream',
        subtitle: 'Stone Kitchen',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/salted-caramel-ice-cream.png',
      },
      {
        title: 'Peanut Butter No-Churn Ice Cream',
        subtitle: 'The Sweeter Side',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/peanut-butter-ice-cream.png',
      },
    ];
    return { loading, cards };
  },
  template: `
  <div>
    <div class="text-center">
      <u-btn class="mb-6" size="x-large" @click="loading = !loading">Toggle Loading</u-btn>
    </div>

    <u-card max-width="800" rounded="lg" theme="dark">
      <u-container>
        <u-row>
          <u-col v-for="card in cards" :key="card.title" cols="12" lg="4" md="6">
            <u-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
              <u-img :src="card.src" class="rounded-lg mb-2" height="184" cover></u-img>
              <u-list-item :subtitle="card.subtitle" :title="card.title" class="px-0"></u-list-item>
            </u-skeleton-loader>
          </u-col>
        </u-row>

        <br />

        <u-chip prepend-icon="hugeicons:check-circle-24" size="large" variant="text" border>
          <span class="text-subtitle-1">Homemade Dulce de Leche Ice Cream with Chocolate Chips</span>
        </u-chip>
      </u-container>
    </u-card>
  </div>
  `,
});

IceCreamSuggestions.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-btn @click="loading = !loading">Toggle Loading</u-btn>

    <u-card max-width="800" rounded="lg" theme="dark">
      <u-container>
        <u-row>
          <u-col v-for="card in cards" :key="card.title" cols="12" lg="4" md="6">
            <u-skeleton-loader :loading="loading" height="240" type="image, list-item-two-line">
              <u-img :src="card.src" class="rounded-lg mb-2" height="184" cover />
              <u-list-item :subtitle="card.subtitle" :title="card.title" class="px-0" />
            </u-skeleton-loader>
          </u-col>
        </u-row>
      </u-container>
    </u-card>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const loading = ref(true)
const cards = [ /* ... */ ]
</script>`,
    },
  },
};
