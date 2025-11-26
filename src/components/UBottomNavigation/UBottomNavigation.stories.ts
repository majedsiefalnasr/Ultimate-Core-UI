import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import { UBottomNavigation, UBtn, UIcon, ULayout } from '../index';

interface ComponentArgs {
  color?: string;
  bgColor?: string;
  baseColor?: string;
  active?: boolean;
  grow?: boolean;
  horizontal?: boolean;
  mode?: string;
  density?: 'default' | 'comfortable' | 'compact';
  elevation?: string | number;
  height?: string | number;
  mandatory?: boolean | 'force';
  multiple?: boolean;
  disabled?: boolean;
  absolute?: boolean;
  border?: string | number | boolean;
  rounded?: string | number | boolean;
  tile?: boolean;
  max?: number;
  name?: string;
  order?: string | number;
  selectedClass?: string;
  tag?: string;
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Bottom Navigation',
  component: UBottomNavigation,
  parameters: {
    docs: {
      description: {
        component:
          'The u-bottom-navigation component is an alternative to the sidebar. It is primarily used for mobile applications and comes in three variants, icons and text, and shift.',
      },
      import: `import { UBottomNavigation } from '@ultimate/core-ui/components'`,
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
            <u-bottom-navigation${attrsString}>
              <u-btn value="recent">
                <u-icon>hugeicons:time-schedule</u-icon>
                <span>Recent</span>
              </u-btn>
              <u-btn value="favorites">
                <u-icon>hugeicons:favourite</u-icon>
                <span>Favorites</span>
              </u-btn>
              <u-btn value="nearby">
                <u-icon>hugeicons:map-pinpoint-01</u-icon>
                <span>Nearby</span>
              </u-btn>
            </u-bottom-navigation>`;
        },
      },
    },
    Vuetify: {
      component: 'VBottomNavigation',
      content:
        "This component is built on top of Vuetify's VBottomNavigation component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/bottom-navigation/',
    },
    Primary: {
      description:
        'While v-bottom-navigation is meant to be used with vue-router, you can also programmatically control the active state of the buttons by using the value property. A button is given a default value of its index with v-bottom-navigation.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-bottom-navigation',
            link: 'https://vuetifyjs.com/en/api/v-bottom-navigation/',
          },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-btn', link: 'https://vuetifyjs.com/en/api/v-btn/' },
          description: 'Sub-component used for modifying the v-bottom-navigation state',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
      },
    },
    bgColor: {
      control: 'color',
      description: "Applies specified color to the control's background.",
      table: {
        type: { summary: 'string' },
      },
    },
    baseColor: {
      control: 'color',
      description: 'Sets the color of component when not focused.',
      table: {
        type: { summary: 'string' },
      },
    },
    active: {
      control: 'boolean',
      description:
        'Controls the active state of the item. This is typically used to highlight the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    grow: {
      control: 'boolean',
      description: 'Force all v-btn children to take up all available horizontal space.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    horizontal: {
      control: 'boolean',
      description: 'Uses an alternative horizontal styling for v-btn.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    mode: {
      control: 'text',
      description: 'Changes the orientation and active state styling of the component.',
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
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '56' },
      },
    },
    mandatory: {
      control: { type: 'select' },
      options: [false, true, 'force'],
      description: 'Forces at least one item to always be selected (if available).',
      table: {
        type: { summary: 'boolean | "force"' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows one to select multiple items.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    absolute: {
      control: 'boolean',
      description: 'Applies position: absolute to the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    border: {
      control: 'text',
      description: 'Applies utility border classes to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
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
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made.',
      table: {
        type: { summary: 'number' },
      },
    },
    name: {
      control: 'text',
      description: 'Assign a specific name for layout registration.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-navigation' },
      },
    },
    order: {
      control: 'text',
      description: 'Adjust the order of the component in relation to its registration order.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'v-btn--selected' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    return { args };
  },
  template: `
    <u-layout style="overflow: hidden; height: 56px;">
      <u-bottom-navigation v-bind="args">
        <u-btn value="recent">
          <u-icon>hugeicons:time-schedule</u-icon>
          <span>Recent</span>
        </u-btn>

        <u-btn value="favorites">
          <u-icon>hugeicons:favourite</u-icon>
          <span>Favorites</span>
        </u-btn>

        <u-btn value="nearby">
          <u-icon>hugeicons:map-pinpoint-01</u-icon>
          <span>Nearby</span>
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Default.args = {
  color: 'primary',
} as ComponentArgs;

// Color Story
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    const value = ref(0);
    return { value };
  },
  template: `
    <u-layout style="overflow: hidden; height: 56px;">
      <u-bottom-navigation
        v-model="value"
        color="primary"
        active
      >
        <u-btn>
          <u-icon>hugeicons:time-schedule</u-icon>
          Recents
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:favourite</u-icon>
          Favorites
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:map-pinpoint-01</u-icon>
          <span>Nearby</span>
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Color.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-layout style="overflow: hidden; height: 56px;">
            <u-bottom-navigation
              v-model="value"
              color="primary"
              active
            >
              <u-btn>
                <u-icon>hugeicons:time-schedule</u-icon>
                Recents
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:favourite</u-icon>
                Favorites
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:map-pinpoint-01</u-icon>
                <span>Nearby</span>
              </u-btn>
            </u-bottom-navigation>
          </u-layout>
        </template>

        <script setup>
          import { ref } from 'vue'

          const value = ref(0)
        </script>
      `,
    },
  },
};

// Grow Story
export const Grow: StoryFn<ComponentArgs> = () => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    const value = ref(1);
    return { value };
  },
  template: `
    <u-layout style="overflow: hidden; height: 56px;">
      <u-bottom-navigation
        v-model="value"
        color="teal"
        grow
      >
        <u-btn>
          <u-icon>hugeicons:time-schedule</u-icon>
          Recents
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:favourite</u-icon>
          Favorites
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:map-pinpoint-01</u-icon>
          Nearby
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Grow.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-layout style="overflow: hidden; height: 56px;">
            <u-bottom-navigation
              v-model="value"
              color="teal"
              grow
            >
              <u-btn>
                <u-icon>hugeicons:time-schedule</u-icon>
                Recents
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:favourite</u-icon>
                Favorites
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:map-pinpoint-01</u-icon>
                Nearby
              </u-btn>
            </u-bottom-navigation>
          </u-layout>
        </template>

        <script setup>
          import { ref } from 'vue'

          const value = ref(1)
        </script>
      `,
    },
  },
};

// Horizontal Story
export const Horizontal: StoryFn<ComponentArgs> = () => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    const value = ref(1);
    return { value };
  },
  template: `
    <u-layout style="overflow: hidden; height: 56px;">
      <u-bottom-navigation
        v-model="value"
        color="primary"
        horizontal
      >
        <u-btn>
          <u-icon>hugeicons:time-schedule</u-icon>
          Recents
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:favourite</u-icon>
          Favorites
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:map-pinpoint-01</u-icon>
          Nearby
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Horizontal.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-layout style="overflow: hidden; height: 56px;">
            <u-bottom-navigation
              v-model="value"
              color="primary"
              horizontal
            >
              <u-btn>
                <u-icon>hugeicons:time-schedule</u-icon>
                Recents
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:favourite</u-icon>
                Favorites
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:map-pinpoint-01</u-icon>
                Nearby
              </u-btn>
            </u-bottom-navigation>
          </u-layout>
        </template>

        <script setup>
          import { ref } from 'vue'

          const value = ref(1)
        </script>
      `,
    },
  },
};

// Shift Story
export const Shift: StoryFn<ComponentArgs> = () => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    const value = ref(1);
    const color = computed(() => {
      switch (value.value) {
        case 0:
          return 'blue-grey';
        case 1:
          return 'teal';
        case 2:
          return 'brown';
        case 3:
          return 'indigo';
        default:
          return 'blue-grey';
      }
    });
    return { value, color };
  },
  template: `
    <u-layout style="overflow: hidden; height: 56px;">
      <u-bottom-navigation
        v-model="value"
        :bg-color="color"
        mode="shift"
      >
        <u-btn>
          <u-icon>hugeicons:video-02</u-icon>
          <span>Video</span>
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:music-note-03</u-icon>
          <span>Music</span>
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:bookmark-03</u-icon>
          <span>Book</span>
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:image-01</u-icon>
          <span>Image</span>
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Shift.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-layout style="overflow: hidden; height: 56px;">
            <u-bottom-navigation
              v-model="value"
              :bg-color="color"
              mode="shift"
            >
              <u-btn>
                <u-icon>hugeicons:video-02</u-icon>
                <span>Video</span>
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:music-note-03</u-icon>
                <span>Music</span>
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:bookmark-03</u-icon>
                <span>Book</span>
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:image-01</u-icon>
                <span>Image</span>
              </u-btn>
            </u-bottom-navigation>
          </u-layout>
        </template>

        <script setup>
          import { computed, ref } from 'vue'

          const value = ref(1)
          const color = computed(() => {
            switch (value.value) {
              case 0: return 'blue-grey'
              case 1: return 'teal'
              case 2: return 'brown'
              case 3: return 'indigo'
              default: return 'blue-grey'
            }
          })
        </script>
      `,
    },
  },
};

// Toggle Story
export const Toggle: StoryFn<ComponentArgs> = () => ({
  components: { UBottomNavigation, UBtn, UIcon, ULayout },
  setup() {
    const active = ref(true);
    return { active };
  },
  template: `
    <u-layout class="border rounded" style="overflow: hidden; height: 128px;">
      <div class="mx-auto my-4">
        <u-btn
          color="deep-purple"
          variant="outlined"
          @click="active = !active"
        >
          Toggle Navigation
        </u-btn>
      </div>

      <u-bottom-navigation
        :active="active"
        color="indigo"
      >
        <u-btn>
          <u-icon>hugeicons:time-schedule</u-icon>
          Recents
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:favourite</u-icon>
          Favorites
        </u-btn>

        <u-btn>
          <u-icon>hugeicons:map-pinpoint-01</u-icon>
          Nearby
        </u-btn>
      </u-bottom-navigation>
    </u-layout>
  `,
});

Toggle.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-layout class="border rounded" style="height: 128px;">
            <div class="mx-auto my-4">
              <u-btn
                color="deep-purple"
                variant="outlined"
                @click="active = !active"
              >
                Toggle Navigation
              </u-btn>
            </div>

            <u-bottom-navigation
              :active="active"
              color="indigo"
            >
              <u-btn>
                <u-icon>hugeicons:time-schedule</u-icon>
                Recents
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:favourite</u-icon>
                Favorites
              </u-btn>

              <u-btn>
                <u-icon>hugeicons:map-pinpoint-01</u-icon>
                Nearby
              </u-btn>
            </u-bottom-navigation>
          </u-layout>
        </template>

        <script setup>
          import { ref } from 'vue'

          const active = ref(true)
        </script>
      `,
    },
  },
};
