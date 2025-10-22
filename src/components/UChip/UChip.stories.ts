import type { Meta, StoryFn } from '@storybook/vue3';

import UChip from './index';

interface ComponentArgs {
  // Theme color or CSS color
  color?: string;
  // Default slot text (used by the Default story)
  text?: string;
  // Visual variant
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  // When true, chip shows a close icon and can be controlled via v-model / modelValue
  closable?: boolean;
  // v-model binding (visibility) for closable chips
  modelValue?: boolean;
  // Adjust vertical spacing without changing font size
  density?: 'default' | 'comfortable' | 'compact';
  // Size of the chip
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  // Allows dragging the chip with mouse
  draggable?: boolean;
  // Render as a label chip (uses v-card border-radius)
  label?: boolean;
  // Disable ripple when false
  ripple?: boolean;
  // Prepend icon name (Material Design Icons)
  prependIcon?: string;
  // Append icon name (Material Design Icons)
  appendIcon?: string;
  disabled?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Component/Containment/Chip',
  component: UChip,
  parameters: {
    docs: {
      description: {
        component:
          'The UChip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the UChipGroup for advanced selection options.',
      },
      import: `import { UChip } from '@ultimate/core-ui/components'`,
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

          return `<UChip${attrsString}>${args.text || 'Chip'}</UChip>`;
        },
      },
    },
    Primary: {
      description:
        'Chips come in the following variations: closeable, filter, outlined, pill. The default slot of UChip will also accept avatars and icons alongside text.',
    },
    Vuetify: {
      component: 'VChip',
      content:
        "UChip is a thin wrapper around Vuetify's VChip component. For more details, please refer to the Vuetify documentation.",
      link: 'https://vuetifyjs.com/en/components/chips/',
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description:
        "Any color from the Material Design palette or CSS color can be used to change a chip's color.",
      table: { type: { summary: 'string' } },
    },
    text: {
      control: 'text',
      description: 'Default slot text (used by the Default story)',
      table: { type: { summary: 'string' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description:
        'Visual variant. Available variants are: elevated, flat, tonal (default), outlined, text, and plain. Outlined chips inherit their border color from the current text color.',
      table: {
        type: { summary: 'elevated | flat | tonal | outlined | text | plain' },
        defaultValue: { summary: 'tonal' },
      },
    },
    closable: {
      control: 'boolean',
      description:
        'Closable chips can be controlled with a v-model (modelValue). You can also listen to the click:close event to know when a chip has been closed.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    modelValue: {
      control: 'boolean',
      description: 'v-model (modelValue) binding to control visibility for closable chips.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description:
        'Density adjusts vertical spacing without affecting width or font size (default | comfortable | compact).',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'Chip sizes from x-small to x-large.',
      table: {
        type: { summary: 'x-small | small | default | large | x-large' },
        defaultValue: { summary: 'default' },
      },
    },
    draggable: {
      control: 'boolean',
      description: 'If true, the chip can be dragged with the mouse.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: {
      control: 'boolean',
      description: 'Label chips use the v-card border-radius.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Disable ripple when set to false.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    prependIcon: {
      control: 'text',
      description:
        'Icon name (Material Design Icons) to prepend, e.g. prepend-icon="mdi-account-circle"',
      table: { type: { summary: 'string' } },
    },
    appendIcon: {
      control: 'text',
      description: 'Icon name (Material Design Icons) to append, e.g. append-icon="mdi-close"',
      table: { type: { summary: 'string' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UChip },
  setup() {
    return { args };
  },
  template: '<UChip v-bind="args">{{ args.text || "Chip" }}</UChip>',
});

Default.args = {
  text: 'Chip',
  color: 'primary',
} as ComponentArgs;
