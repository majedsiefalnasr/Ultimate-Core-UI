import type { Meta, StoryFn } from '@storybook/vue3';

import { UAvatar, UIcon } from '../index';

interface ComponentArgs {
  size?: string | number;
  color?: string;
  rounded?: string | number | boolean;
  icon?: string;
  image?: string;
  text?: string;
  density?: 'default' | 'comfortable' | 'compact';
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  border?: string | number | boolean;
  tile?: boolean;
  start?: boolean;
  end?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Images & icons/Avatars',
  component: UAvatar,
  parameters: {
    docs: {
      description: {
        component:
          'The u-avatar component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. When rounded prop set to 0 will display an avatar without border radius.',
      },
      import: `import { UAvatar } from '@ultimate/core-ui/components'`,
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

          return `<UAvatar${attrsString}></UAvatar>`;
        },
      },
    },
    Vuetify: {
      component: 'VAvatar',
      content:
        "This component is built on top of Vuetify's VAvatar component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/avatars/',
    },
    Primary: {
      description: 'Avatars in their simplest form display content within a circular container.',
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The recommended placement of elements inside of v-avatar is: Place a v-img or v-icon component within the default slot, or place textual content within the default slot.',
      Image: '/images/stories/UAvatar.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The Avatar container that typically holds a v-icon or v-img component',
        },
      ],
    },
    api: {
      data: [
        {
          element: { title: 'v-avatar', link: 'https://vuetifyjs.com/en/api/v-avatar/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    size: {
      control: 'text',
      description:
        'Sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: x-small, small, default, large, and x-large.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
      },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: {
        type: { summary: 'string' },
      },
    },
    image: {
      control: 'text',
      description: 'Apply a specific image using v-img.',
      table: {
        type: { summary: 'string' },
      },
    },
    text: {
      control: 'text',
      description: 'Specify content text for the component.',
      table: {
        type: { summary: 'string' },
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'text | flat | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'flat' },
      },
    },
    border: {
      control: 'text',
      description:
        'Applies utility border classes to the component. To use it, you need to omit the border- prefix.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    start: {
      control: 'boolean',
      description: 'Applies margin at the end of the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    end: {
      control: 'boolean',
      description: 'Applies margin at the start of the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UAvatar },
  setup() {
    return { args };
  },
  template: '<UAvatar v-bind="args"></UAvatar>',
});

Default.args = {
  color: 'primary',
  text: 'MS',
} as ComponentArgs;

// Size Story
export const Size: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar },
  template: `
    <div class="d-flex align-center justify-space-around">
      <u-avatar color="primary" size="x-small">
        32
      </u-avatar>

      <u-avatar color="secondary">
        48
      </u-avatar>

      <u-avatar color="info" size="x-large">
        64
      </u-avatar>
    </div>
  `,
});

Size.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="d-flex align-center justify-space-around">
            <u-avatar color="primary" size="x-small">
              32
            </u-avatar>

            <u-avatar color="secondary">
              48
            </u-avatar>

            <u-avatar color="info" size="x-large">
              64
            </u-avatar>
          </div>
        </template>
      `,
    },
  },
};

// Tile Story
export const Tile: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UIcon },
  template: `
    <div class="text-center">
      <u-avatar
        color="blue-darken-2"
        rounded="0"
      >
        <u-icon icon="hugeicons:alarm-clock"></u-icon>
      </u-avatar>
    </div>
  `,
});

Tile.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="text-center">
            <u-avatar
              color="blue-darken-2"
              rounded="0"
            >
              <u-icon icon="hugeicons:alarm-clock"></u-icon>
            </u-avatar>
          </div>
        </template>
      `,
    },
  },
};
