import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UAvatar,
  UBanner,
  UBannerActions,
  UBannerText,
  UBtn,
  UCard,
  UCardText,
  UFooter,
  USheet,
  USwitch,
  UToolbar,
} from '../index';

interface ComponentArgs {
  color?: string;
  icon?: string;
  lines?: 'one' | 'two' | 'three';
  sticky?: boolean;
  text?: string;
  bgColor?: string;
  border?: string | number | boolean;
  density?: 'default' | 'comfortable' | 'compact';
  elevation?: string | number;
  height?: string | number;
  location?: string;
  mobile?: boolean;
  mobileBreakpoint?: number | string;
  position?: string;
  rounded?: string | number | boolean;
  stacked?: boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Banners',
  component: UBanner,
  parameters: {
    docs: {
      description: {
        component:
          'The u-banner component is used as a middle-interrupting message to the user with one to two actions.',
      },
      import: `import { UBanner, UBannerText, UBannerActions } from '@ultimate/core-ui/components'`,
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
            <u-banner${attrsString}>
              <template v-slot:actions>
                <u-btn>Action</u-btn>
              </template>
            </u-banner>`;
        },
      },
    },
    Vuetify: {
      component: 'VBanner',
      content:
        "This component is built on top of Vuetify's VBanner component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/banners/',
    },
    Primary: {
      description:
        'Banners come in two variations single-line and multi-line (implicit). These can have icons and actions that you can use with your message.',
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The recommended placement of elements inside of v-banner is: Place a v-banner-avatar or v-banner-icon on the far left, Place v-banner-text to the right of any visual content, Place v-banner-actions to the far right of textual content, offset bottom.',
      Image: '/images/stories/UBanner.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The Banner container holds all v-banner components',
        },
        {
          element: '2. Avatar / Icon (optional)',
          description: 'Leading media content intended to improve visual context',
        },
        {
          element: '3. Text',
          description: 'A content area for displaying text and other inline elements',
        },
        {
          element: '4. Actions (optional)',
          description: 'A content area that typically contains one or more v-btn components',
        },
      ],
    },
    api: {
      data: [
        {
          element: { title: 'v-banner', link: 'https://vuetifyjs.com/en/api/v-banner/' },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-banner-text', link: 'https://vuetifyjs.com/en/api/v-banner-text/' },
          description: 'Sub-component used to display the v-banner subtitle. Wraps the #text slot',
        },
        {
          element: {
            title: 'v-banner-actions',
            link: 'https://vuetifyjs.com/en/api/v-banner-actions/',
          },
          description:
            'Sub-component that modifies the default styling of v-btn. Wraps the #actions slot',
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
    icon: {
      control: 'text',
      description: 'Apply a specific icon to the banner.',
      table: {
        type: { summary: 'string' },
      },
    },
    lines: {
      control: { type: 'select' },
      options: ['one', 'two', 'three'],
      description: 'The amount of visible lines of text before it truncates.',
      table: {
        type: { summary: 'one | two | three' },
      },
    },
    sticky: {
      control: 'boolean',
      description: 'Applies position: sticky to the banner.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    text: {
      control: 'text',
      description: 'Specify content text for the component.',
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
    border: {
      control: 'text',
      description: 'Applies border styles to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
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
      description: 'Designates an elevation applied to the component.',
      table: {
        type: { summary: 'string | number' },
      },
    },
    mobile: {
      control: 'boolean',
      description: 'Applies the mobile banner styles.',
      table: {
        type: { summary: 'boolean' },
      },
    },
    stacked: {
      control: 'boolean',
      description: 'Forces the banner actions to stack vertically.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBanner, UBannerText, UBtn },
  setup() {
    return { args };
  },
  template: `
    <u-banner v-bind="args">
      <template v-slot:actions>
        <u-btn>Action</u-btn>
      </template>
    </u-banner>
  `,
});

Default.args = {
  color: 'primary',
  icon: 'mdi-information',
  lines: 'one',
  text: 'This is a banner message with important information.',
} as ComponentArgs;

// Lines Story
export const Lines: StoryFn<ComponentArgs> = () => ({
  components: { UBanner, UBannerText, UBtn },
  template: `
    <div>
      <u-banner
        class="my-4"
        color="deep-purple-accent-4"
        icon="mdi-lock"
        lines="one"
      >
        <u-banner-text>
          Banner with one line of text.
        </u-banner-text>

        <template v-slot:actions>
          <u-btn>Action</u-btn>
        </template>
      </u-banner>

      <u-banner
        class="my-4"
        color="error"
        icon="mdi-weather-hurricane"
        lines="two"
      >
        <u-banner-text>
          Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
        </u-banner-text>

        <template v-slot:actions>
          <u-btn>Action</u-btn>
        </template>
      </u-banner>

      <u-banner
        class="my-4"
        color="warning"
        icon="$warning"
        lines="three"
      >
        <u-banner-text>
          Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable.
        </u-banner-text>

        <template v-slot:actions>
          <u-btn>Action</u-btn>
        </template>
      </u-banner>
    </div>
  `,
});

Lines.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div>
            <u-banner
              class="my-4"
              color="deep-purple-accent-4"
              icon="mdi-lock"
              lines="one"
            >
              <u-banner-text>
                Banner with one line of text.
              </u-banner-text>

              <template v-slot:actions>
                <u-btn>Action</u-btn>
              </template>
            </u-banner>

            <u-banner
              class="my-4"
              color="error"
              icon="mdi-weather-hurricane"
              lines="two"
            >
              <u-banner-text>
                Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
              </u-banner-text>

              <template v-slot:actions>
                <u-btn>Action</u-btn>
              </template>
            </u-banner>

            <u-banner
              class="my-4"
              color="warning"
              icon="$warning"
              lines="three"
            >
              <u-banner-text>
                Banner with three lines of text. One or two lines is preferable. Three lines should be considered the absolute maximum length on desktop in order to keep messages short and actionable.
              </u-banner-text>

              <template v-slot:actions>
                <u-btn>Action</u-btn>
              </template>
            </u-banner>
          </div>
        </template>
      `,
    },
  },
};

// Sticky Story
export const Sticky: StoryFn<ComponentArgs> = () => ({
  components: {
    UBanner,
    UBtn,
    UCard,
    UCardText,
    UFooter,
    USheet,
    USwitch,
    UToolbar,
  },
  setup() {
    const sticky = ref(false);
    return { sticky };
  },
  template: `
    <u-card
      class="overflow-auto mx-auto"
      max-height="300"
      width="448"
    >
      <u-toolbar color="primary">
        <template #title>My Document</template>

        <template v-slot:append>
          <u-switch
            v-model="sticky"
            color="secondary"
            label="Sticky Banner"
            hide-details
          ></u-switch>
        </template>
      </u-toolbar>

      <u-banner
        :sticky="sticky"
        lines="one"
      >
        <template v-slot:text>
          We can't save your edits while you are in offline mode.
        </template>

        <template v-slot:actions>
          <u-btn color="deep-purple-accent-4">
            Go Online
          </u-btn>
        </template>
      </u-banner>

      <u-card-text class="bg-grey-lighten-4">
        <u-sheet
          class="mx-auto"
          height="300"
        ></u-sheet>
      </u-card-text>

      <u-footer
        class="justify-center"
        color="primary"
      >
        End of Content
      </u-footer>
    </u-card>
  `,
});

Sticky.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card
            class="overflow-auto mx-auto"
            max-height="300"
            width="448"
          >
            <u-toolbar color="primary">
              <template #title>My Document</template>

              <template v-slot:append>
                <u-switch
                  v-model="sticky"
                  color="secondary"
                  label="Sticky Banner"
                  hide-details
                ></u-switch>
              </template>
            </u-toolbar>

            <u-banner
              :sticky="sticky"
              lines="one"
            >
              <template v-slot:text>
                We can't save your edits while you are in offline mode.
              </template>

              <template v-slot:actions>
                <u-btn color="deep-purple-accent-4">
                  Go Online
                </u-btn>
              </template>
            </u-banner>

            <u-card-text class="bg-grey-lighten-4">
              <u-sheet
                class="mx-auto"
                height="300"
              ></u-sheet>
            </u-card-text>

            <u-footer
              class="justify-center"
              color="primary"
            >
              End of Content
            </u-footer>
          </u-card>
        </template>

        <script setup>
          import { ref } from 'vue'

          const sticky = ref(false)
        </script>
      `,
    },
  },
};

// Actions Story
export const Actions: StoryFn<ComponentArgs> = () => ({
  components: { UBanner, UBtn },
  template: `
    <u-banner
      color="warning"
      icon="mdi-wifi-strength-alert-outline"
      lines="one"
    >
      <template v-slot:text>
        No Internet connection
      </template>

      <template v-slot:actions>
        <u-btn>
          Dismiss
        </u-btn>

        <u-btn>
          Retry
        </u-btn>
      </template>
    </u-banner>
  `,
});

Actions.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-banner
            color="warning"
            icon="mdi-wifi-strength-alert-outline"
            lines="one"
          >
            <template v-slot:text>
              No Internet connection
            </template>

            <template v-slot:actions>
              <u-btn>
                Dismiss
              </u-btn>

              <u-btn>
                Retry
              </u-btn>
            </template>
          </u-banner>
        </template>
      `,
    },
  },
};

// Icon Story
export const Icon: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UBanner, UBannerActions, UBannerText, UBtn },
  template: `
    <u-banner
      color="pink-darken-1"
      icon="mdi-account-box"
      lines="two"
    >
      <template v-slot:prepend>
        <u-avatar></u-avatar>
      </template>

      <u-banner-text>
        Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
      </u-banner-text>

      <u-banner-actions>
        <u-btn>Action Button</u-btn>
      </u-banner-actions>
    </u-banner>
  `,
});

Icon.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-banner
            color="pink-darken-1"
            icon="mdi-account-box"
            lines="two"
          >
            <template v-slot:prepend>
              <u-avatar></u-avatar>
            </template>

            <u-banner-text>
              Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
            </u-banner-text>

            <u-banner-actions>
              <u-btn>Action Button</u-btn>
            </u-banner-actions>
          </u-banner>
        </template>
      `,
    },
  },
};

// Prepend Story
export const Prepend: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UBanner, UBannerActions, UBannerText, UBtn },
  template: `
    <u-banner
      color="deep-purple-accent-4"
      lines="two"
    >
      <template v-slot:prepend>
        <u-avatar
          color="deep-purple-accent-4"
          icon="mdi-account-filter"
        ></u-avatar>
      </template>

      <u-banner-text>
        Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
      </u-banner-text>

      <u-banner-actions>
        <u-btn>Action</u-btn>

        <u-btn>Action</u-btn>
      </u-banner-actions>
    </u-banner>
  `,
});

Prepend.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-banner
            color="deep-purple-accent-4"
            lines="two"
          >
            <template v-slot:prepend>
              <u-avatar
                color="deep-purple-accent-4"
                icon="mdi-account-filter"
              ></u-avatar>
            </template>

            <u-banner-text>
              Banner with two lines of text. If the text is too long to fit on two lines then an ellipsis will be used to hide the remaining content. So this next line will be hidden.
            </u-banner-text>

            <u-banner-actions>
              <u-btn>Action</u-btn>

              <u-btn>Action</u-btn>
            </u-banner-actions>
          </u-banner>
        </template>
      `,
    },
  },
};
