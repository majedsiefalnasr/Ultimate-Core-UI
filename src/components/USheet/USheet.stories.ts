import type { Meta, StoryFn } from '@storybook/vue3';

import { UBtn, UDivider, UIcon, USheet } from '../index';

interface ComponentArgs {
  border?: string | number | boolean;
  color?: string;
  elevation?: number | string;
  height?: number | string;
  width?: number | string;
  rounded?: string | number | boolean;
  tile?: boolean;
  tag?: string;
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Sheets',
  component: USheet,
  parameters: {
    docs: {
      description: {
        component:
          'The u-sheet component is a transformable piece of paper used as a container. It supports elevation, rounded corners, colors and more.',
      },
      import: `import { USheet } from '@ultimate/core-ui/components'`,
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

          return `<u-sheet${attrsString}></u-sheet>`;
        },
      },
    },
    Vuetify: {
      component: 'VSheet',
      content: "Wrapper around Vuetify's `VSheet` component.",
      link: 'https://vuetifyjs.com/en/components/sheets/',
    },
    Primary: {
      description:
        'The sheet component has support for elevation, rounded corners, color, and more. It can be used as a container for other components or as a standalone.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-sheet',
            link: 'https://vuetifyjs.com/en/api/v-sheet/',
          },
          description: 'Primary Component',
        },
      ],
    },
    anatomy: {
      description: 'The u-sheet component contains only a default slot.',
      Image: '/images/stories/USheet.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The main content area',
        },
      ],
    },
  },
  argTypes: {
    border: { control: 'text', description: 'Utility border classes (omit prefix)' },
    color: { control: 'text', description: 'Background color or utility color' },
    elevation: { control: 'number', description: 'Elevation (0-24)' },
    height: { control: 'text' },
    width: { control: 'text' },
    rounded: { control: 'text', description: 'Rounded corner utility or boolean' },
    tile: { control: 'boolean', description: 'Remove border-radius' },
    tag: { control: 'text' },
    theme: { control: 'text' },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USheet },
  setup() {
    return { args };
  },
  template: `<div class="py-8 bg-grey-lighten-3">
    <u-sheet v-bind="args" class="mx-auto"></u-sheet>
  </div>`,
});

Default.args = {
  height: '200',
  width: '200',
} as ComponentArgs;

// Elevation Story
const elevationTemplate = `
    <div class="v-container">
      <div class="v-row" style="display:flex;gap:16px;flex-wrap:wrap;">
        <div v-for="e in elevations" :key="e" style="flex:0 0 120px;">
          <u-sheet class="pa-6" color="grey-lighten-3">
            <u-sheet :elevation="e" class="mx-auto" :height="100" :width="100"></u-sheet>
          </u-sheet>
        </div>
      </div>
    </div>
  `;

/**
 * The v-sheet component accepts a custom elevation between 0 and 24 (0 is default).
 * The elevation property modifies the box-shadow property.
 */
export const Elevation: StoryFn<ComponentArgs> = () => ({
  components: { USheet },
  setup() {
    const elevations = [0, 4, 8, 12, 16, 20];
    return { elevations };
  },
  template: elevationTemplate,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<template>${elevationTemplate}</template>

<script setup>
  const elevations = [0, 4, 8, 12, 16, 20]
</script>`,
    },
  },
};

// Rounded Story
const roundedTemplate = `
    <div style="display:flex;gap:16px;flex-wrap:wrap;">
      <div v-for="r in values" :key="String(r)" style="flex:0 0 160px;">
        <u-sheet class="pa-6" color="grey-lighten-3">
          <u-sheet :rounded="r" class="mx-auto" :height="100" :width="100"></u-sheet>
        </u-sheet>
      </div>
    </div>
  `;

/**
 * The rounded prop adds a default border-radius of 4px. By default, the v-sheet component
 * has no border-radius. Customize the radius’s size and location by providing a custom rounded
 * value; e.g. a rounded value of tr-xl l-pill equates to rounded-tr-xl rounded-l-pill.
 */
export const Rounded: StoryFn<ComponentArgs> = () => ({
  components: { USheet },
  setup() {
    const values = [false, true, 'xl'];
    return { values };
  },
  template: roundedTemplate,
});

Rounded.parameters = {
  docs: {
    source: {
      code: `<template>${roundedTemplate}</template>

<script setup>
  const values = [false, true, 'xl']
</script>`,
    },
  },
};

// Color Story
const colorTemplate = `
    <div style="display:flex;gap:12px;flex-wrap:wrap;">
      <u-sheet class="d-flex" color="grey-lighten-3" :height="120" :width="160">
        <div class="ma-auto">#1</div>
      </u-sheet>

      <u-sheet class="d-flex" color="green-lighten-3" :height="120" :width="160">
        <div class="ma-auto">#2</div>
      </u-sheet>

      <u-sheet class="d-flex" color="yellow-lighten-3" :height="120" :width="160">
        <div class="ma-auto">#3</div>
      </u-sheet>
    </div>
  `;

/**
 * Sheets and components based on them can have different sizes and colors.
 *
 * The v-sheet component accepts custom Material Design Color values such as warning, amber
 * darken-3, and deep-purple accent — as well as rgb, rgba, and hexadecimal values.
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { USheet },
  template: colorTemplate,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>${colorTemplate}</template>`,
    },
  },
};

// Congratulations Story
const congratulationsTemplate = `
    <u-sheet class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4" elevation="4" :height="250" :max-width="800" width="100%" rounded>
      <div>
        <h2 class="text-h4 font-weight-black text-orange">Congratulations!</h2>
        <div class="text-h5 font-weight-medium mb-2">You are officially a part of the community!</div>
        <p class="text-body-2 mb-4">Please check your inbox for a verification email.</p>
        <u-btn color="orange" variant="text">Go to Login</u-btn>
      </div>
    </u-sheet>
  `;

/**
 * This example uses a sheet component to create a banner congratulating users for signing
 * up for the Vuetify community.
 */
export const Congratulations: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UBtn },
  template: congratulationsTemplate,
});

Congratulations.parameters = {
  docs: {
    source: {
      code: `<template>${congratulationsTemplate}</template>`,
    },
  },
};

// ReconcileNotification Story
const reconcileNotificationTemplate = `
    <u-sheet class="pa-4 text-center mx-auto" :elevation="12" :max-width="600" rounded="lg" width="100%">
      <u-icon class="mb-5" color="success" size="112" icon="hugeicons:checkmark-circle-02"></u-icon>

      <h2 class="text-h5 mb-6">You reconciled this account</h2>

      <p class="mb-4 text-medium-emphasis text-body-2">To see a report on this reconciliation, click <a class="text-decoration-none text-info" href="#">View reconciliation report.</a></p>

      <u-divider class="mb-4" />

      <div class="text-end">
        <u-btn class="text-none" color="success" variant="flat" :width="90" rounded>Done</u-btn>
      </div>
    </u-sheet>
  `;

/**
 * The following example uses a sheet component to create a banner that notifies users that
 * the account balance has been reconciled.
 */
export const ReconcileNotification: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UIcon, UBtn, UDivider },
  template: reconcileNotificationTemplate,
});

ReconcileNotification.parameters = {
  docs: {
    source: {
      code: `<template>${reconcileNotificationTemplate}</template>`,
    },
  },
};
