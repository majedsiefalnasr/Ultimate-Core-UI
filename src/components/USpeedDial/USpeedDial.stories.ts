import type { Meta, StoryFn } from '@storybook/vue3';

import { UBtn, UFab, USpeedDial } from '../index';

interface ComponentArgs {
  location?: string;
  transition?: string | boolean;
  modelValue?: boolean;
  openOnHover?: boolean;
  closeDelay?: number | string;
  offset?: string | number | number[];
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Speed Dials',
  component: USpeedDial,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-speed-dial` component is a floating action button that reveals additional actions when activated.',
      },
      import: `import { USpeedDial } from '@ultimate/core-ui/components'`,
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
<u-speed-dial${attrsString}>
  <template v-slot:activator="{ props: activatorProps }">
    <u-fab v-bind="activatorProps" size="large" icon="hugeicons:stars"></u-fab>
  </template>
  
  <u-btn key="1" icon="hugeicons:checkmark-circle-01"></u-btn>
  <u-btn key="2" icon="hugeicons:information-circle"></u-btn>
  <u-btn key="3" icon="hugeicons:alert-circle"></u-btn>
  <u-btn key="4" icon="hugeicons:alert-01"></u-btn>
</u-speed-dial>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VSpeedDial',
      content: "Wrapper around Vuetify's `VSpeedDial` component.",
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/',
    },
  },
  argTypes: {
    location: {
      control: 'text',
      description: 'Anchor point for the speed dial.',
      table: { defaultValue: { summary: 'bottom center' } },
    },
    transition: {
      control: 'text',
      description: 'Transition used for opening/closing.',
      table: { defaultValue: { summary: 'fade-transition' } },
    },
    modelValue: {
      control: 'boolean',
      description: 'Open state (v-model).',
      table: { defaultValue: { summary: 'false' } },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Open on hover.',
      table: { defaultValue: { summary: 'false' } },
    },
    closeDelay: {
      control: 'number',
      description: 'Delay before closing on hover (ms).',
      table: { defaultValue: { summary: '0' } },
    },
    offset: {
      control: 'text',
      description: 'Offset from activator.',
      table: { defaultValue: { summary: '' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USpeedDial, UFab, UBtn },
  setup() {
    return { args };
  },
  template: `
  <div class="text-center pa-12">
    <u-speed-dial v-bind="args">
      <template v-slot:activator="{ props: activatorProps }">
        <u-fab v-bind="activatorProps" size="large" icon="hugeicons:stars"></u-fab>
      </template>

      <u-btn key="1" icon="hugeicons:checkmark-circle-01"></u-btn>
      <u-btn key="2" icon="hugeicons:information-circle"></u-btn>
      <u-btn key="3" icon="hugeicons:alert-circle"></u-btn>
      <u-btn key="4" icon="hugeicons:alert-01"></u-btn>
    </u-speed-dial>
  </div>
  `,
});

Default.args = {
  location: 'bottom center',
  transition: 'fade-transition',
  modelValue: false,
  openOnHover: true,
  closeDelay: 200,
} as ComponentArgs;
