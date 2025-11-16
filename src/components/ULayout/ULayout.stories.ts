import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import {
  UAppBar,
  UContainer,
  ULayout,
  UMain,
  UNavigationDrawer,
  USheet,
  USwitch,
  USystemBar,
} from '../index';

interface ComponentArgs {
  // Layout doesn't have interactive args in these examples, keep open for controls
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Features/Application layout',
  component: ULayout,
  parameters: {
    docs: {
      description: {
        component:
          'Ultimate Core UI features an application layout system that allows you to easily create complex website designs.',
      },
      import: `import { ULayout } from '@ultimate/core-ui/components'`,
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

          return `
    <u-layout${attrsString} class="rounded rounded-md border">
      <u-app-bar title="Application bar"></u-app-bar>

      <u-navigation-drawer>
        <u-list nav>
          <u-list-item title="Navigation drawer" link></u-list-item>
        </u-list>
      </u-navigation-drawer>

      <u-main class="d-flex align-center justify-center" height="300">
        <u-container>
          <u-sheet
            border="dashed md"
            color="surface-light"
            height="200"
            rounded="lg"
            width="100%"
          ></u-sheet>
        </u-container>
      </u-main>
    </u-layout>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VLayout',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/application/',
    },
    Primary: {
      description:
        'By default, the order in which layout components will attempt to reserve space is simply the order that they appear in your markup.',
    },
  },
  argTypes: {},
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { ULayout, UAppBar, UNavigationDrawer, UMain, UContainer, USheet },
  setup() {
    return { args };
  },
  template: `
    <u-layout class="rounded rounded-md">
      <u-system-bar color="grey-darken-3"></u-system-bar>

      <u-navigation-drawer
        color="grey-darken-2"
        width="72"
        permanent
      ></u-navigation-drawer>
      
      <u-navigation-drawer
        color="grey-darken-1"
        width="150"
        permanent
      ></u-navigation-drawer>

      <u-app-bar
        color="grey"
        height="48"
        flat
      ></u-app-bar>
      
      <u-navigation-drawer
        color="grey-lighten-1"
        location="right"
        width="150"
        permanent
      ></u-navigation-drawer>

      <u-app-bar
        color="grey-lighten-2"
        height="48"
        location="bottom"
        flat
      ></u-app-bar>

      <u-main class="d-flex align-center justify-center" height="300">
        <u-container>
          <u-sheet
            border="dashed md"
            color="surface-light"
            height="150"
            rounded="lg"
            width="100%"
          ></u-sheet>
        </u-container>
      </u-main>
    </u-layout>
  `,
});

Default.args = {} as ComponentArgs;

export const ComplexLayouts: StoryFn<ComponentArgs> = (args) => ({
  components: {
    ULayout,
    USystemBar,
    UNavigationDrawer,
    UAppBar,
    UMain,
    UContainer,
    USheet,
  },
  setup() {
    return { args };
  },
  template: `
    <u-layout class="rounded rounded-md">
      <u-system-bar color="grey-darken-3"></u-system-bar>

      <u-navigation-drawer
        color="grey-darken-2"
        width="72"
        permanent
      ></u-navigation-drawer>
      
      <u-navigation-drawer
        color="grey-darken-1"
        width="150"
        permanent
      ></u-navigation-drawer>

      <u-app-bar
        color="grey"
        height="48"
        flat
      ></u-app-bar>
      
      <u-navigation-drawer
        color="grey-lighten-1"
        location="right"
        width="150"
        permanent
      ></u-navigation-drawer>

      <u-app-bar
        color="grey-lighten-2"
        height="48"
        location="bottom"
        flat
      ></u-app-bar>

      <u-main class="d-flex align-center justify-center" height="300">
        <u-container>
          <u-sheet
            border="dashed md"
            color="surface-light"
            height="150"
            rounded="lg"
            width="100%"
          ></u-sheet>
        </u-container>
      </u-main>
    </u-layout>
  `,
});

ComplexLayouts.args = {} as ComponentArgs;

ComplexLayouts.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-layout class="rounded rounded-md">
    <u-system-bar color="grey-darken-3"></u-system-bar>

    <u-navigation-drawer color="grey-darken-2" width="72" permanent></u-navigation-drawer>

    <u-navigation-drawer color="grey-darken-1" width="150" permanent></u-navigation-drawer>

    <u-app-bar color="grey" height="48" flat></u-app-bar>

    <u-navigation-drawer color="grey-lighten-1" location="right" width="150" permanent></u-navigation-drawer>

    <u-app-bar color="grey-lighten-2" height="48" location="bottom" flat></u-app-bar>

    <u-main class="d-flex align-center justify-center" height="300">
      <u-container>
        <u-sheet
          border="dashed md"
          color="surface-light"
          height="150"
          rounded="lg"
          width="100%"
        ></u-sheet>
      </u-container>
    </u-main>
  </u-layout>
</template>
<script setup lang="ts"></script>`,
    },
  },
};

export const DynamicOrder: StoryFn<ComponentArgs> = (args) => ({
  components: { ULayout, UNavigationDrawer, UAppBar, UMain, UContainer, USheet, USwitch },
  setup() {
    const order = shallowRef(0);
    return { args, order };
  },
  template: `
    <u-layout class="rounded rounded-md border" v-bind="args">
      <u-navigation-drawer color="surface-variant" permanent></u-navigation-drawer>

      <u-app-bar :order="order" color="grey-lighten-2" title="Application bar" flat>
        <template #append>
          <u-switch v-model="order" class="me-2" :false-value="0" :true-value="-1" label="Toggle order" inset hide-details></u-switch>
        </template>
      </u-app-bar>

      <u-main class="d-flex align-center justify-center" height="300">
        <u-container>
          <u-sheet border="dashed md" color="surface-light" height="200" rounded="lg" width="100%"></u-sheet>
        </u-container>
      </u-main>
    </u-layout>
  `,
});

DynamicOrder.args = {} as ComponentArgs;

DynamicOrder.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-layout class="rounded rounded-md border">
    <u-navigation-drawer color="surface-variant" permanent></u-navigation-drawer>

    <u-app-bar :order="order" color="grey-lighten-2" title="Application bar" flat>
      <template #append>
        <u-switch v-model="order" class="me-2" :false-value="0" :true-value="-1" label="Toggle order" inset hide-details></u-switch>
      </template>
    </u-app-bar>

    <u-main class="d-flex align-center justify-center" height="300">
      <u-container>
        <u-sheet
          border="dashed md"
          color="surface-light"
          height="200"
          rounded="lg"
          width="100%"
        ></u-sheet>
      </u-container>
    </u-main>
  </u-layout>
</template>
<script setup>
import { shallowRef } from 'vue'

const order = shallowRef(0)
</script>`,
    },
  },
};
