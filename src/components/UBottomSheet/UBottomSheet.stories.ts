// import UBottomSheet from './UBottomSheet.vue'
import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import {
  UBottomSheet,
  UBtn,
  UCard,
  UCardText,
  UList,
  UListItem,
  UListSubheader,
  UProgressLinear,
  USheet,
} from '../index';

interface ComponentArgs {
  inset?: boolean;
  modelValue?: boolean;
  width?: string | number;
  absolute?: boolean;
  closeDelay?: string | number;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  contained?: boolean;
  disabled?: boolean;
  eager?: boolean;
  fullscreen?: boolean;
  height?: string | number;
  location?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  noClickAnimation?: boolean;
  opacity?: string | number;
  openDelay?: string | number;
  openOnClick?: boolean;
  openOnFocus?: boolean;
  openOnHover?: boolean;
  origin?: string;
  persistent?: boolean;
  retainFocus?: boolean;
  scrim?: string | boolean;
  scrollable?: boolean;
  scrollStrategy?: string;
  transition?: string | boolean;
  zIndex?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Bottom Sheets',
  component: UBottomSheet,
  parameters: {
    docs: {
      description: {
        component:
          'The bottom sheet is a modified v-dialog that slides from the bottom of the screen, similar to a v-bottom-navigation.',
      },
      import: `import { UBottomSheet } from '@ultimate/core-ui/components'`,
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
            <u-bottom-sheet${attrsString}>
              <template v-slot:activator="{ props: activatorProps }">
                <u-btn v-bind="activatorProps" text="Click Me"></u-btn>
              </template>

              <u-card
                title="Bottom Sheet"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
              ></u-card>
            </u-bottom-sheet>`;
        },
      },
    },
    Primary: {
      description:
        'Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet is meant to contain anything.',
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
    api: {
      data: [
        {
          element: {
            title: 'v-bottom-sheet',
            link: 'https://vuetifyjs.com/en/api/v-bottom-sheet/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    inset: {
      control: 'boolean',
      description: 'Reduces the sheet content maximum width to 70%.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The v-model value of the component. Controls the visibility of the bottom sheet.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
      table: { type: { summary: 'string | number' } },
    },
    absolute: {
      control: 'boolean',
      description: 'Applies position: absolute to the content element.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closeDelay: {
      control: 'text',
      description: 'Milliseconds to wait before closing component.',
      table: { type: { summary: 'string | number' } },
    },
    closeOnBack: {
      control: 'boolean',
      description: "Closes the overlay content when the browser's back button is pressed.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    closeOnContentClick: {
      control: 'boolean',
      description: 'Closes component when you click on its content.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    contained: {
      control: 'boolean',
      description: 'Limits the size of the component and scrim to its offset parent.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    eager: {
      control: 'boolean',
      description: "Forces the component's content to render when it mounts.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    fullscreen: {
      control: 'boolean',
      description: 'Changes layout for fullscreen display.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' } },
    },
    location: {
      control: 'text',
      description: 'Specifies the anchor point for positioning the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'bottom' } },
    },
    maxHeight: {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: { type: { summary: 'string | number' } },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: { type: { summary: 'string | number' } },
    },
    minHeight: {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: { type: { summary: 'string | number' } },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: { type: { summary: 'string | number' } },
    },
    noClickAnimation: {
      control: 'boolean',
      description:
        'Disables the bounce effect when clicking outside of the content element when using the persistent prop.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    opacity: {
      control: 'text',
      description: 'Sets the opacity of the scrim element.',
      table: { type: { summary: 'string | number' } },
    },
    openDelay: {
      control: 'text',
      description: 'Milliseconds to wait before opening component.',
      table: { type: { summary: 'string | number' } },
    },
    openOnClick: {
      control: 'boolean',
      description: 'Activate the component when the activator is clicked.',
      table: { type: { summary: 'boolean' } },
    },
    openOnFocus: {
      control: 'boolean',
      description: 'Activate the component when the activator is focused.',
      table: { type: { summary: 'boolean' } },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Activate the component when the activator is hovered.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    origin: {
      control: 'text',
      description: 'Sets the transition origin on the element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'center center' } },
    },
    persistent: {
      control: 'boolean',
      description: 'Clicking outside of the element or pressing esc key will not deactivate it.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    retainFocus: {
      control: 'boolean',
      description: 'Tab focus will return to the first child of the dialog by default.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    scrim: {
      control: 'text',
      description: 'Accepts true/false to enable background, and string to define color.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'true' } },
    },
    scrollable: {
      control: 'boolean',
      description:
        'When set to true, expects a v-card and a v-card-text component with a designated height.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    scrollStrategy: {
      control: 'text',
      description: 'Strategy used when the component is activate and user scrolls.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'block' } },
    },
    transition: {
      control: 'text',
      description: 'Sets the component transition.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'bottom-sheet-transition' },
      },
    },
    zIndex: {
      control: 'text',
      description: 'The z-index used for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '2400' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBottomSheet, UBtn, UCard },
  setup() {
    return { args };
  },
  template: `
    <div class="text-center pa-8">
      <u-bottom-sheet v-bind="args">
        <template v-slot:activator="{ props: activatorProps }">
          <u-btn v-bind="activatorProps" text="Click Me"></u-btn>
        </template>

        <u-card
          title="Bottom Sheet"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
        ></u-card>
      </u-bottom-sheet>
    </div>
  `,
});

Default.args = {
  inset: true,
} as ComponentArgs;

// Inset Story
export const Inset: StoryFn<ComponentArgs> = () => ({
  components: { UBottomSheet, UBtn, UCard, UCardText },
  setup() {
    const sheet = shallowRef(false);
    return { sheet };
  },
  template: `
    <div class="text-center pa-8">
      <u-btn
        class="ma-auto"
        size="x-large"
        text="Click Me"
        @click="sheet = !sheet"
      ></u-btn>

      <u-bottom-sheet v-model="sheet" inset>
        <u-card class="text-center" height="200">
          <u-card-text>
            <u-btn
              text="Close"
              variant="text"
              @click="sheet = !sheet"
            ></u-btn>

            <br>
            <br>

            <div>
              This is a bottom sheet that is using the inset prop
            </div>
          </u-card-text>
        </u-card>
      </u-bottom-sheet>
    </div>
  `,
});

Inset.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="text-center pa-8">
            <u-btn
              class="ma-auto"
              size="x-large"
              text="Click Me"
              @click="sheet = !sheet"
            ></u-btn>

            <u-bottom-sheet v-model="sheet" inset>
              <u-card class="text-center" height="200">
                <u-card-text>
                  <u-btn
                    text="Close"
                    variant="text"
                    @click="sheet = !sheet"
                  ></u-btn>

                  <br>
                  <br>

                  <div>
                    This is a bottom sheet that is using the inset prop
                  </div>
                </u-card-text>
              </u-card>
            </u-bottom-sheet>
          </div>
        </template>

        <script setup>
          import { shallowRef } from 'vue'

          const sheet = shallowRef(false)
        </script>
      `,
    },
  },
};

// Music Player Story
export const MusicPlayer: StoryFn<ComponentArgs> = () => ({
  components: { UBottomSheet, UBtn, UList, UListItem, UProgressLinear, USheet },
  template: `
    <u-bottom-sheet inset>
      <template v-slot:activator="{ props: activatorProps }">
        <div class="text-center pa-8">
          <u-btn
            v-bind="activatorProps"
            color="red"
            size="x-large"
            text="Click Me"
          ></u-btn>
        </div>
      </template>

      <u-sheet>
        <u-progress-linear model-value="50"></u-progress-linear>

        <u-list>
          <u-list-item subtitle="Fitz & The Trantrums" title="The Walker">
            <template v-slot:append>
              <div class="d-flex ga-1">
                <u-btn icon="hugeicons:backward-02" variant="text"></u-btn>

                <u-btn icon="hugeicons:pause" variant="text"></u-btn>

                <u-btn icon="hugeicons:forward-02" variant="text"></u-btn>
              </div>
            </template>
          </u-list-item>
        </u-list>
      </u-sheet>
    </u-bottom-sheet>
  `,
});

MusicPlayer.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-bottom-sheet inset>
            <template v-slot:activator="{ props: activatorProps }">
              <div class="text-center pa-8">
                <u-btn
                  v-bind="activatorProps"
                  color="red"
                  size="x-large"
                  text="Click Me"
                ></u-btn>
              </div>
            </template>

            <u-sheet>
              <u-progress-linear model-value="50"></u-progress-linear>

              <u-list>
                <u-list-item subtitle="Fitz & The Trantrums" title="The Walker">
                  <template v-slot:append>
                    <div class="d-flex ga-1">
                      <u-btn icon="hugeicons:backward-02" variant="text"></u-btn>

                      <u-btn icon="hugeicons:pause" variant="text"></u-btn>

                      <u-btn icon="hugeicons:forward-02" variant="text"></u-btn>
                    </div>
                  </template>
                </u-list-item>
              </u-list>
            </u-sheet>
          </u-bottom-sheet>
        </template>
      `,
    },
  },
};

// Open In List Story
export const OpenInList: StoryFn<ComponentArgs> = () => ({
  components: { UBottomSheet, UBtn, UList, UListItem, UListSubheader },
  setup() {
    const sheet = shallowRef(false);
    const tiles = [
      { img: 'keep.png', title: 'Keep' },
      { img: 'inbox.png', title: 'Inbox' },
      { img: 'hangouts.png', title: 'Hangouts' },
      { img: 'messenger.png', title: 'Messenger' },
      { img: 'google.png', title: 'Google+' },
    ];
    return { sheet, tiles };
  },
  template: `
    <u-bottom-sheet v-model="sheet">
      <template v-slot:activator="{ props: activatorProps }">
        <div class="text-center pa-8">
          <u-btn
            v-bind="activatorProps"
            color="purple"
            size="x-large"
            text="Click Me"
          ></u-btn>
        </div>
      </template>

      <u-list>
        <u-list-subheader title="Open in"></u-list-subheader>

        <u-list-item
          v-for="tile in tiles"
          :key="tile.title"
          :prepend-avatar="\`https://cdn.vuetifyjs.com/images/bottom-sheets/\${tile.img}\`"
          :title="tile.title"
          @click="sheet = false"
        ></u-list-item>
      </u-list>
    </u-bottom-sheet>
  `,
});

OpenInList.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-bottom-sheet v-model="sheet">
            <template v-slot:activator="{ props: activatorProps }">
              <div class="text-center pa-8">
                <u-btn
                  v-bind="activatorProps"
                  color="purple"
                  size="x-large"
                  text="Click Me"
                ></u-btn>
              </div>
            </template>

            <u-list>
              <u-list-subheader title="Open in"></u-list-subheader>

              <u-list-item
                v-for="tile in tiles"
                :key="tile.title"
                :prepend-avatar="\`https://cdn.vuetifyjs.com/images/bottom-sheets/\${tile.img}\`"
                :title="tile.title"
                @click="sheet = false"
              ></u-list-item>
            </u-list>
          </u-bottom-sheet>
        </template>

        <script setup>
          import { shallowRef } from 'vue'

          const sheet = shallowRef(false)
          const tiles = [
            { img: 'keep.png', title: 'Keep' },
            { img: 'inbox.png', title: 'Inbox' },
            { img: 'hangouts.png', title: 'Hangouts' },
            { img: 'messenger.png', title: 'Messenger' },
            { img: 'google.png', title: 'Google+' },
          ]
        </script>
      `,
    },
  },
};
