import type { Meta, StoryFn } from '@storybook/vue3';

import {
  UCard,
  UCardTitle,
  UCol,
  UContainer,
  UFadeTransition,
  UImg,
  UProgressCircular,
  URow,
} from '../index';

interface ComponentArgs {
  src?: string | Record<string, unknown>;
  lazySrc?: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string | number;
  cover?: boolean;
  gradient?: string;
  maxWidth?: string | number;
  maxHeight?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Images & icons /Images',
  component: UImg,
  parameters: {
    docs: {
      description: {
        component:
          "The u-img component is a wrapper around Vuetify's v-img that provides lazy loading, placeholders, gradients, and progressive images for a better media experience.",
      },
      import: "import { UImg } from '@ultimate/core-ui/components'",
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

          return `<u-img${attrsString}></u-img>`;
        },
      },
    },
    Vuetify: {
      component: 'VImg',
      content: "The u-img component is implemented on top of Vuetify's v-img component.",
      link: 'https://vuetifyjs.com/en/api/v-img/',
    },
    Primary: {
      description: 'This is the usage description placeholder.',
    },
    api: {
      data: [
        {
          element: { title: 'v-img', link: 'https://vuetifyjs.com/en/api/v-img/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    src: { control: 'text', description: 'Image source URL or object.' },
    lazySrc: { control: 'text', description: 'Low-res placeholder image.' },
    width: { control: 'text', description: 'Explicit width.' },
    height: { control: 'text', description: 'Explicit height.' },
    aspectRatio: { control: 'text', description: 'Aspect ratio (width/height).' },
    cover: { control: 'boolean', description: 'Cover the container.' },
    gradient: { control: 'text', description: 'Linear gradient overlay.' },
    maxWidth: { control: 'text', description: 'Maximum width.' },
    maxHeight: { control: 'text', description: 'Maximum height.' },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg },
  setup() {
    return { args };
  },
  template: `
  <div class="text-center">
    <u-img v-bind="args"></u-img>
  </div>
`,
});

Default.args = {
  src: 'https://cdn.vuetifyjs.com/images/parallax/material.jpg',
  width: '300',
  aspectRatio: '16/9',
  cover: false,
} as ComponentArgs;

// Cover Story
const coverTemplate = `
  <div class="d-flex justify-space-around align-center">
    <div class="ma-4">
      <div class="text-subtitle-2">Default</div>
      <u-img
        :aspect-ratio="1"
        class="bg-surface elevation-10"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        width="300"
      ></u-img>
    </div>

    <div class="ma-4">
      <div class="text-subtitle-2">Cover</div>
      <u-img
        :aspect-ratio="1"
        class="bg-surface elevation-10"
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
        width="300"
        cover
      ></u-img>
    </div>
  </div>
`;

/**
 * Use the `cover` prop to fill the container and crop the image as needed.
 */
export const Cover: StoryFn<ComponentArgs> = () => ({
  components: { UImg, UContainer, URow, UCol },
  template: coverTemplate,
});

Cover.parameters = {
  docs: {
    source: {
      code: `<template>${coverTemplate}</template>`,
    },
  },
};

// Height Story
const heightTemplate = `
  <u-container
    class="fill-height"
    style="min-height: 434px"
    fluid
  >
    <u-fade-transition mode="out-in">
      <u-row>
        <u-col cols="6">
          <u-card>
            <u-img
              class="bg-grey-lighten-2"
              height="125"
              src="https://picsum.photos/350/165?random"
            ></u-img>
            <u-card-title class="text-h6">
              height
            </u-card-title>
          </u-card>
        </u-col>

        <u-col cols="6">
          <u-card>
            <u-img
              class="bg-grey-lighten-2"
              height="125"
              src="https://picsum.photos/350/165?random"
              cover
            ></u-img>
            <u-card-title class="text-h6">
              height with cover
            </u-card-title>
          </u-card>
        </u-col>

        <u-col cols="6">
          <u-card>
            <u-img
              class="bg-grey-lighten-2"
              max-height="125"
              src="https://picsum.photos/350/165?random"
            ></u-img>
            <u-card-title class="text-h6">
              max-height
            </u-card-title>
          </u-card>
        </u-col>

        <u-col cols="6">
          <u-card>
            <u-img
              class="bg-grey-lighten-2"
              max-height="125"
              src="https://picsum.photos/350/165?random"
              cover
            ></u-img>
            <u-card-title class="text-h6">
              max-height with cover
            </u-card-title>
          </u-card>
        </u-col>
      </u-row>
    </u-fade-transition>
  </u-container>
`;

/**
 * Limit image height or max-height and combine with `cover`.
 */
export const Height: StoryFn<ComponentArgs> = () => ({
  components: { UImg, UContainer, URow, UCol, UCard, UCardTitle, UFadeTransition },
  template: heightTemplate,
});

Height.args = {} as ComponentArgs;

Height.parameters = {
  docs: {
    source: {
      code: `<template>${heightTemplate}</template>`,
    },
  },
};

// Gradient Story
const gradientTemplate = `
  <u-row>
    <u-col cols="4" sm="4">
      <u-img gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></u-img>
    </u-col>

    <u-col cols="4" sm="4">
      <u-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="fill-height bottom-gradient"></div>
      </u-img>
    </u-col>

    <u-col cols="4" sm="4">
      <u-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
        <div class="fill-height repeating-gradient"></div>
      </u-img>
    </u-col>
  </u-row>
`;

/**
 * Apply simple linear gradients via the `gradient` prop or via content slot.
 */
export const Gradient: StoryFn<ComponentArgs> = () => ({
  components: { UImg, URow, UCol },
  template: gradientTemplate,
});

Gradient.parameters = {
  docs: {
    source: {
      code: `<template>${gradientTemplate}</template>`,
    },
  },
};

// Placeholder Story
const placeholderTemplate = `
  <u-img class="mx-auto" height="300" lazy-src="https://picsum.photos/id/11/100/60" max-width="500" src="https://bad.src/not/valid">
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <u-progress-circular color="grey-lighten-4" indeterminate></u-progress-circular>
      </div>
    </template>
  </u-img>
`;

/**
 * Provide a `placeholder` slot for progressive loading states.
 */
export const Placeholder: StoryFn<ComponentArgs> = () => ({
  components: { UImg, UProgressCircular },
  template: placeholderTemplate,
});

Placeholder.parameters = {
  docs: {
    source: {
      code: `<template>${placeholderTemplate}</template>`,
    },
  },
};

// Error Story
const errorTemplate = `
  <u-img class="mx-auto" height="300" max-width="500" src="https://bad.src/not/valid">
    <template #error>
      <u-img class="mx-auto" height="300" max-width="500" src="https://picsum.photos/500/300?image=232"></u-img>
    </template>
  </u-img>
`;

/**
 * Use the `error` slot to show a fallback image or content when loading fails.
 */
export const Error: StoryFn<ComponentArgs> = () => ({
  components: { UImg },
  template: errorTemplate,
});

Error.parameters = {
  docs: {
    source: {
      code: `<template>${errorTemplate}</template>`,
    },
  },
};

// Grid Story
const gridTemplate = `
  <u-row>
    <u-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
      <u-img :lazy-src="'https://picsum.photos/10/6?image=' + (n * 5 + 10)" :src="'https://picsum.photos/500/300?image=' + (n * 5 + 10)" aspect-ratio="1" class="bg-grey-lighten-2" cover>
        <template #placeholder>
          <u-row align="center" class="fill-height ma-0" justify="center">
            <u-progress-circular color="grey-lighten-5" indeterminate></u-progress-circular>
          </u-row>
        </template>
      </u-img>
    </u-col>
  </u-row>
`;

/**
 * Use `u-img` in grids for galleries; provide `lazy-src` placeholders for progressive loading.
 */
export const Grid: StoryFn<ComponentArgs> = () => ({
  components: { UImg, URow, UCol, UProgressCircular },
  template: gridTemplate,
});

Grid.parameters = {
  docs: {
    source: {
      code: `<template>${gridTemplate}</template>`,
    },
  },
};
