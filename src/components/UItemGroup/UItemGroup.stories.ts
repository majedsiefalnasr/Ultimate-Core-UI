import type { Meta, StoryFn } from '@storybook/vue3';

import { UCard, UCol, UContainer, UItem, UItemGroup, URow, USlideYTransition } from '../index';

interface ComponentArgs {
  disabled?: boolean;
  mandatory?: boolean | 'force';
  max?: number;
  modelValue?: unknown;
  multiple?: boolean;
  selectedClass?: string;
  tag?: string;
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Selection/Item Groups',
  component: UItemGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The u-item-group provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as u-tabs and u-carousel.',
      },
      import: `import { UItemGroup } from '@ultimate/core-ui/components'`,
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
    <u-item-group${attrsString}>
      <u-container>
        <u-row>
          <u-col v-for="n in 3" :key="n" cols="12" md="4">
            <u-item>
              <u-card class="d-flex align-center" height="200" dark @click="toggle">
                <div class="text-h3 flex-grow-1 text-center">Group Item</div>
              </u-card>
            </u-item>
          </u-col>
        </u-row>
      </u-container>
    </u-item-group>`;
        },
      },
    },
    Vuetify: {
      component: 'VItemGroup',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/item-groups/',
    },
    Primary: {
      description:
        'The core usage of the u-item-group is to create groups of anything that should be controlled by a model.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-item-group',
            link: 'https://vuetifyjs.com/en/api/v-item-group/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      description: 'Puts all children components into a disabled state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    mandatory: {
      control: { type: 'select' },
      options: [false, true, 'force'],
      description:
        "Forces at least one item to always be selected (if available). Accepts boolean or 'force'.",
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: 'false' } },
    },
    max: {
      control: { type: 'number' },
      description: 'Sets a maximum number of selections that can be made.',
      table: { type: { summary: 'number' }, defaultValue: { summary: undefined } },
    },
    modelValue: {
      name: 'model-value',
      control: { type: 'object' },
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'unknown' }, defaultValue: { summary: undefined } },
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Allows one to select multiple items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectedClass: {
      name: 'selected-class',
      control: { type: 'text' },
      description:
        'Configure the selected CSS class. This class will be available in v-item default scoped slot.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'v-item--selected'" } },
    },
    tag: {
      control: { type: 'text' },
      description: 'Specify a custom tag used on the root element (string or component).',
      table: {
        type: { summary: 'string | (new () => any) | FunctionalComponent' },
        defaultValue: { summary: "'div'" },
      },
    },
    theme: {
      control: { type: 'text' },
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: undefined } },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UItemGroup, UItem, UContainer, URow, UCol, UCard },
  setup() {
    return { args };
  },
  template: `
  <u-item-group v-bind="args">
    <u-container>
      <u-row>
        <u-col v-for="n in 3" :key="n" cols="12" md="4">
          <u-item>
            <u-card class="d-flex align-center" height="200" dark @click="toggle">
              <div class="text-h3 flex-grow-1 text-center">Group Item</div>
            </u-card>
          </u-item>
        </u-col>
      </u-row>
    </u-container>
  </u-item-group>
`,
});

Default.args = {} as ComponentArgs;

// SelectedClass Story
const selectedClassTemplate = `
  <u-item-group selected-class="bg-primary">
    <u-container>
      <u-row>
        <u-col v-for="n in 3" :key="n" cols="12" md="4">
          <u-item v-slot="{ isSelected, selectedClass, toggle }">
            <u-card :class="['d-flex align-center', selectedClass]" height="200" dark @click="toggle">
              <div class="text-h3 flex-grow-1 text-center">{{ isSelected ? 'Selected' : 'Click Me!' }}</div>
            </u-card>
          </u-item>
        </u-col>
      </u-row>
    </u-container>
  </u-item-group>
`;

/**
 * Customize the selected CSS class applied to items.
 */
export const SelectedClass: StoryFn<ComponentArgs> = () => ({
  components: { UItemGroup, UItem, UContainer, URow, UCol, UCard },
  template: selectedClassTemplate,
});

SelectedClass.parameters = {
  docs: {
    source: {
      code: `<template>${selectedClassTemplate}</template>`,
    },
  },
};

// Mandatory Story
const mandatoryTemplate = `
  <u-item-group mandatory>
    <u-container>
      <u-row>
        <u-col v-for="n in 3" :key="n" cols="12" md="4">
          <u-item v-slot="{ isSelected, toggle }">
            <u-card :color="isSelected ? 'primary' : ''" class="d-flex align-center" height="200" dark @click="toggle">
              <u-slide-y-transition>
                <div class="text-h3 flex-grow-1 text-center">{{ isSelected ? 'Selected' : 'Click Me!' }}</div>
              </u-slide-y-transition>
            </u-card>
          </u-item>
        </u-col>
      </u-row>
    </u-container>
  </u-item-group>
`;

/**
 * Force at least one item to always be selected.
 */
export const Mandatory: StoryFn<ComponentArgs> = () => ({
  components: { UItemGroup, UItem, UContainer, URow, UCol, UCard, USlideYTransition },
  template: mandatoryTemplate,
});

Mandatory.parameters = {
  docs: {
    source: {
      code: `<template>${mandatoryTemplate}</template>`,
    },
  },
};

// Multiple Story
const multipleTemplate = `
  <u-item-group multiple>
    <u-container>
      <u-row>
        <u-col v-for="n in 3" :key="n" cols="12" md="4">
          <u-item v-slot="{ isSelected, toggle }">
            <u-card :color="isSelected ? 'primary' : ''" class="d-flex align-center" height="200" dark @click="toggle">
              <u-slide-y-transition>
                <div class="text-h3 flex-grow-1 text-center">{{ isSelected ? 'Selected' : 'Click Me!' }}</div>
              </u-slide-y-transition>
            </u-card>
          </u-item>
        </u-col>
      </u-row>
    </u-container>
  </u-item-group>
`;

/**
 * Allow multiple items to be selected simultaneously.
 */
export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { UItemGroup, UItem, UContainer, URow, UCol, UCard, USlideYTransition },
  template: multipleTemplate,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>${multipleTemplate}</template>`,
    },
  },
};
