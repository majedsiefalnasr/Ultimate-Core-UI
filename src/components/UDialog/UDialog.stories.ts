import type { Meta, StoryFn } from '@storybook/vue3';
import { UBtn, UCard } from '@ultimate/core-ui/components';

import UDialog from './index';

interface ComponentArgs {
  modelValue?: boolean;
  width?: string | number;
  persistent?: boolean;
  transition?: 'dialog-top-transition' | 'dialog-bottom-transition' | undefined;
  nesting?: boolean;
  overflowed?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Dialog',
  component: UDialog,
  parameters: {
    docs: {
      description: {
        component:
          "The UDialog component is built on top of Vuetify's VDialog component and provides a standard dialog container.",
      },
      import: `import { UDialog } from '@ultimate/core-ui/components'`,
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

          return `<UDialog${attrsString}>
  <template v-slot:activator="{ props: activatorProps }">
    <UBtn
      v-bind="activatorProps"
      text="Open Dialog"
    />
  </template>
  <template v-slot:default="{ isActive }">
    <UCard>
      <v-card-text class="text-h2 pa-12">
        Hello world!
      </v-card-text>
      <v-card-actions class="justify-end">
        <UBtn
          text="Close"
          @click="isActive.value = false"
        />
      </v-card-actions>
    </UCard>
  </template>
</UDialog>`;
        },
      },
    },
    Vuetify: {
      component: 'VDialog',
      content:
        "This component is built on top of Vuetify's VDialog component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/dialogs/',
    },
    anatomy: {
      description:
        'The recommended components to use inside of a UDialog are: v-card, v-list, and v-sheet',
      Image: '/images/stories/udialog.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The dialog’s content that animates from the activator',
        },
        {
          element: '2. Activator',
          description: 'The element that activates the dialog',
        },
      ],
    },
  },
  argTypes: {
    modelValue: {
      control: 'boolean',
      description:
        'Controls visibility via v-model (model-value). You can open/close the dialog by updating the bound value programmatically (no activator required).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'text',
      description: 'Optional width for dialog content area.',
      table: { type: { summary: 'string | number' } },
    },
    persistent: {
      control: 'boolean',
      description:
        'Persistent: Persistent dialogs are not dismissed when touching outside or pressing the esc key.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    transition: {
      control: { type: 'select' },
      options: ['dialog-top-transition', 'dialog-bottom-transition', undefined],
      description: 'Transitions: You can make the dialog appear from the top or the bottom.',
      table: {
        type: { summary: "'dialog-top-transition' | 'dialog-bottom-transition' | undefined" },
      },
    },
    nesting: {
      control: 'boolean',
      description: 'Nesting: Dialogs can be nested; you can open one dialog from another.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    overflowed: {
      control: 'boolean',
      description:
        'Overflowed: Modals that do not fit within the available window space will scroll the container.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDialog, UBtn, UCard },
  setup() {
    return { args };
  },
  template: `
  <UDialog
    v-bind="args"
  >
    <template v-slot:activator="{ props: activatorProps }">
      <VBtn
        v-bind="activatorProps"
        text="Open Dialog"
      ></VBtn>
    </template>
    <template v-slot:default="{ isActive }">
      <UCard>
        <v-card-text class="text-h2 pa-12">
          Hello world!
        </v-card-text>
        <v-card-actions class="justify-end">
          <VBtn
            text="Close"
            @click="isActive.value = false"
          ></VBtn>
        </v-card-actions>
      </UCard>
    </template>
  </UDialog>
  `,
});

Default.args = { width: 'auto' } as ComponentArgs;
