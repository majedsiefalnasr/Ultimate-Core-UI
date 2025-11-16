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

// Default
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

Default.parameters = {
  docs: {
    description: { story: 'Basic responsive image with aspect ratio and width.' },
  },
};

// Cover
export const Cover: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Cover.args = {} as ComponentArgs;

Cover.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>`,
    },
    description: {
      story: 'Use the `cover` prop to fill the container and crop the image as needed.',
    },
  },
};

// Height
export const Height: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg, UContainer, URow, UCol, UCard, UCardTitle, UFadeTransition },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Height.args = {} as ComponentArgs;

Height.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-img class="bg-grey-lighten-2" height="125" src="https://picsum.photos/350/165?random"></u-img>
  <u-img class="bg-grey-lighten-2" height="125" src="https://picsum.photos/350/165?random" cover></u-img>
  <u-img class="bg-grey-lighten-2" max-height="125" src="https://picsum.photos/350/165?random"></u-img>
  <u-img class="bg-grey-lighten-2" max-height="125" src="https://picsum.photos/350/165?random" cover></u-img>
</template>`,
    },
    description: { story: 'Limit image height or max-height and combine with `cover`.' },
  },
};

// Gradient
export const Gradient: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Gradient.args = {} as ComponentArgs;

Gradient.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-img gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)" src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"></u-img>
</template>`,
    },
    description: {
      story: 'Apply simple linear gradients via the `gradient` prop or via content slot.',
    },
  },
};

// Placeholder
export const Placeholder: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg, UProgressCircular },
  setup() {
    return { args };
  },
  template: `
    <u-img class="mx-auto" height="300" lazy-src="https://picsum.photos/id/11/100/60" max-width="500" src="https://bad.src/not/valid">
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <u-progress-circular color="grey-lighten-4" indeterminate></u-progress-circular>
        </div>
      </template>
    </u-img>
  `,
});

Placeholder.args = {} as ComponentArgs;

Placeholder.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-img class="mx-auto" height="300" lazy-src="https://picsum.photos/id/11/100/60" max-width="500" src="https://bad.src/not/valid">
    <template #placeholder>
      <div class="d-flex align-center justify-center fill-height">
        <u-progress-circular color="grey-lighten-4" indeterminate></u-progress-circular>
      </div>
    </template>
  </u-img>
</template>`,
    },
    description: { story: 'Provide a `placeholder` slot for progressive loading states.' },
  },
};

// Error
export const Error: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg },
  setup() {
    return { args };
  },
  template: `
    <u-img class="mx-auto" height="300" max-width="500" src="https://bad.src/not/valid">
      <template #error>
        <u-img class="mx-auto" height="300" max-width="500" src="https://picsum.photos/500/300?image=232"></u-img>
      </template>
    </u-img>
  `,
});

Error.args = {} as ComponentArgs;

Error.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-img class="mx-auto" height="300" max-width="500" src="https://bad.src/not/valid">
    <template #error>
      <u-img class="mx-auto" height="300" max-width="500" src="https://picsum.photos/500/300?image=232"></u-img>
    </template>
  </u-img>
</template>`,
    },
    description: {
      story: 'Use the `error` slot to show a fallback image or content when loading fails.',
    },
  },
};

// Grid
export const Grid: StoryFn<ComponentArgs> = (args) => ({
  components: { UImg, URow, UCol, UProgressCircular },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Grid.args = {} as ComponentArgs;

Grid.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row>
      <u-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
      <u-img :lazy-src="'https://picsum.photos/10/6?image=' + (n * 5 + 10)" :src="'https://picsum.photos/500/300?image=' + (n * 5 + 10)" aspect-ratio="1" cover></u-img>
    </u-col>
  </u-row>
</template>`,
    },
    description: {
      story:
        'Use `u-img` in grids for galleries; provide `lazy-src` placeholders for progressive loading.',
    },
  },
};
