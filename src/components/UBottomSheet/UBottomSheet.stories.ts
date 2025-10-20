// import UBottomSheet from './UBottomSheet.vue'
import type { Meta, StoryFn } from '@storybook/vue3';

import UBottomSheet from './index';

interface ComponentArgs {
  inset?: boolean;
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
    },
  },
  argTypes: {
    inset: {
      control: 'boolean',
      description: 'Full width',
      table: { defaultValue: { summary: 'false' } },
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
