// import UBottomSheet from './UBottomSheet.vue'
import type { Meta, StoryFn } from '@storybook/vue3';

import UBottomSheet from './index';

interface ComponentArgs {
  inset?: boolean;
  modelValue?: boolean;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/BottomSheet',
  component: UBottomSheet,
  parameters: {
    docs: {
      description: {
        component:
          'The UBottomSheet component provides a material design bottom sheet with a multitude of options.',
      },
      import: `import { UBottomSheet } from '@ultimate/core-ui/components'`,
    },
    Vuetify: {
      component: 'VBottomSheet',
      content:
        "This component is built on top of Vuetify's VBottomSheet component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/bottom-sheets/',
    },
    anatomy: {
      description:
        'The recommended components to use inside of a v-bottom-sheet are: v-card, v-list, v-sheet',
      Image: '/images/stories/ubottomsheet.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The bottom sheet is a dialog that animates from the bottom of the screen',
        },
      ],
    },
  },
  argTypes: {
    inset: {
      control: 'boolean',
      description:
        'With the inset prop, reduce the maximum width of the content area on desktop to 70%. This can be further reduced manually using the width prop.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The v-model (or model-value) controls the visibility of the bottom sheet. Use this to open/close programmatically.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'text',
      description:
        'Optional width for the bottom sheet content area. Can be a CSS value (e.g., "600px", "70%") or a number for pixel width.',
      table: { type: { summary: 'string | number' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBottomSheet },
  setup() {
    return { args };
  },
  template: `
    <UBottomSheet v-bind="args">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" text="Click Me"></v-btn>
      </template>

      <v-card
        title="Bottom Sheet"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
      ></v-card>
    </UBottomSheet>
  `,
});

Default.args = {
  inset: true,
} as ComponentArgs;
