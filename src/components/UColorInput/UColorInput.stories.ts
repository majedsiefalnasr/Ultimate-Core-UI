import type { Meta, StoryFn } from '@storybook/vue3';

import { UCol, UColorInput, UContainer, URow } from '../index';

interface ComponentArgs {
  label?: string;
  colorPip?: boolean;
  hideDetails?: boolean | 'auto';
  pipLocation?: 'append' | 'prepend' | 'prepend-inner' | 'append-inner';
  hidePip?: boolean;
  pipVariant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  modelValue?: string;
  hideActions?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Color Inputs',
  component: UColorInput,
  parameters: {
    docs: {
      description: {
        component: 'The u-color-input component combines a text field with a color picker.',
      },
      import: `import { UColorInput } from '@ultimate/core-ui/components'`,
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

          return `<UColorInput${attrsString}></UColorInput>`;
        },
      },
    },
    Vuetify: {
      component: 'VColorInput',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/color-inputs/',
    },
    Primary: {
      description:
        'At its core, the u-color-input component is a basic container that extends u-text-field.',
    },
    api: {
      data: [
        {
          element: { title: 'v-color-input', link: 'https://vuetifyjs.com/en/api/v-color-input/' },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-color-picker',
            link: 'https://vuetifyjs.com/en/api/v-color-picker/',
          },
          description: 'Color picker component',
        },
        {
          element: { title: 'v-text-field', link: 'https://vuetifyjs.com/en/api/v-text-field/' },
          description: 'Text field component',
        },
      ],
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Sets the text of the label',
    },
    colorPip: {
      control: 'boolean',
      description: 'Synchronize pip color with current value',
    },
    hideDetails: {
      control: 'select',
      options: [false, true, 'auto'],
      description: 'Hides hint and validation errors',
    },
    pipLocation: {
      control: 'select',
      options: ['append', 'prepend', 'prepend-inner', 'append-inner'],
      description: 'Move pip icon to a different slot',
    },
    hidePip: {
      control: 'boolean',
      description: 'Hide pip icon',
    },
    pipVariant: {
      control: 'select',
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Variant of the pip control',
    },
    modelValue: {
      control: 'color',
      description: 'Represents the committed v-model value',
    },
    hideActions: {
      control: 'boolean',
      description: 'Prevent showing the default actions buttons',
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UColorInput },
  setup() {
    return { args };
  },
  template: '<u-color-input color-pip label="Color input"></u-color-input>',
});

Default.args = {
  colorPip: true,
  label: 'Color input',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<u-color-input color-pip label="Color input"></u-color-input>`,
    },
  },
};

export const PipLocation: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            pip-location="prepend-inner"
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            pip-location="append-inner"
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            pip-location="append"
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            label="I need no icon"
            hide-pip
          ></u-color-input>
        </u-col>
      </u-row>
    </u-container>
  `,
});

PipLocation.parameters = {
  docs: {
    description: {
      story:
        'You can move the pip icon within the input by utilizing the pip-location or hide it entirely with hide-pip.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="prepend-inner"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="append-inner"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-location="append"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="I need no icon"
          hide-pip
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const ColorPip: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            label="Colored Pip"
            model-value="#7C0799"
            color-pip
            hide-actions
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            label="Colored Pip (tonal)"
            model-value="#1493DB"
            pip-variant="tonal"
            color-pip
            hide-actions
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            label="Colored Pip (flat)"
            model-value="#74DB14"
            pip-variant="flat"
            color-pip
            hide-actions
          ></u-color-input>
        </u-col>
      </u-row>
    </u-container>
  `,
});

ColorPip.parameters = {
  docs: {
    description: {
      story:
        'The color-pip is a boolean that determines whether the pip icon color matches the selected color.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip"
          model-value="#7C0799"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip (tonal)"
          model-value="#1493DB"
          pip-variant="tonal"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          label="Colored Pip (flat)"
          model-value="#74DB14"
          pip-variant="flat"
          color-pip
          hide-actions
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const PipVariant: StoryFn<ComponentArgs> = () => ({
  components: { UColorInput, UContainer, URow, UCol },
  setup() {
    return {};
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            pip-variant="tonal"
          ></u-color-input>
        </u-col>
        <u-col cols="12" sm="6">
          <u-color-input
            hide-details="auto"
            pip-variant="outlined"
          ></u-color-input>
        </u-col>
      </u-row>
    </u-container>
  `,
});

PipVariant.parameters = {
  docs: {
    description: {
      story: 'The pip-variant lets you further customize the pip icon.',
    },
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-variant="tonal"
        ></u-color-input>
      </u-col>
      <u-col cols="12" sm="6">
        <u-color-input
          hide-details="auto"
          pip-variant="outlined"
        ></u-color-input>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};
