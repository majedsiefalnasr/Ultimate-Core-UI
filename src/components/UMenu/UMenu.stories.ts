import type { Meta, StoryFn } from '@storybook/vue3';
import { mergeProps, ref } from 'vue';

import {
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCardTitle,
  UCol,
  UContainer,
  UDivider,
  UIcon,
  UIconBtn,
  UList,
  UListItem,
  UMenu,
  URow,
  USelect,
  USpacer,
  USwitch,
  UTooltip,
} from '../index';

/**
 * Component arguments interface for UMenu stories
 */
interface ComponentArgs {
  activator?: string | 'parent';
  activatorProps?: Record<string, unknown>;
  attach?: string | boolean;
  closeDelay?: string | number;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  contained?: boolean;
  contentClass?: string;
  contentProps?: Record<string, unknown>;
  disabled?: boolean;
  disableInitialFocus?: boolean;
  eager?: boolean;
  height?: string | number;
  id?: string;
  location?: string;
  locationStrategy?: 'static' | 'connected';
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: boolean;
  noClickAnimation?: boolean;
  offset?: string | number | number[];
  opacity?: string | number;
  openDelay?: string | number;
  openOnClick?: boolean;
  openOnFocus?: boolean;
  openOnHover?: boolean;
  origin?: string;
  persistent?: boolean;
  scrim?: string | boolean;
  scrollStrategy?: 'close' | 'none' | 'block' | 'reposition';
  stickToTarget?: boolean;
  submenu?: boolean;
  target?: string | 'parent' | 'cursor';
  theme?: string;
  transition?: string | boolean;
  width?: string | number;
  zIndex?: string | number;
}

/**
 * Storybook meta configuration for UMenu
 */
const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/UMenu',
  component: UMenu,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-menu` component shows a menu at the position of the element used to activate it. There are three main ways to define menus: using the activator slot, the activator="parent" prop, or a CSS selector string.',
      },
      import: `import { UMenu } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false && value !== 'default')
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<template>
  <div class="d-flex justify-space-around">
    <u-menu${attrsString}>
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Show Menu
        </u-btn>
      </template>
      <u-list>
        <u-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    }),
  }
</script>`;
        },
      },
      primary: {
        description: 'The primary usage of the UMenu component.',
      },
    },
    Vuetify: {
      component: 'VMenu',
      content:
        "This component is built on top of Vuetify's VMenu component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/menus/',
    },
  },
  argTypes: {
    activator: {
      control: 'text',
      description:
        'Explicitly sets the overlay\'s activator. Can be a CSS selector, "parent", or element reference.',
      table: {
        type: { summary: 'Element | string | "parent"' },
        defaultValue: { summary: 'undefined' },
      },
    },
    activatorProps: {
      control: 'object',
      description: 'Apply custom properties to the activator.',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: '{}' },
      },
    },
    attach: {
      control: 'text',
      description:
        'Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or true to disable teleporting.',
      table: {
        type: { summary: 'string | boolean | Element' },
        defaultValue: { summary: 'false' },
      },
    },
    closeDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before closing component. Only works with open-on-hover prop.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '250' },
      },
    },
    closeOnBack: {
      control: 'boolean',
      description: "Closes the overlay content when the browser's back button is pressed.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    closeOnContentClick: {
      control: 'boolean',
      description: 'Designates if menu should close when its content is clicked.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    contained: {
      control: 'boolean',
      description:
        'Limits the size of the component and scrim to its offset parent. Implies absolute and attach.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    contentClass: {
      control: 'text',
      description: 'Applies a custom class to the detached element.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
    },
    contentProps: {
      control: 'object',
      description: 'Apply custom properties to the content.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disableInitialFocus: {
      control: 'boolean',
      description:
        'Prevents automatic redirect of first focusin event. Intended to use on permanently open menus.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    eager: {
      control: 'boolean',
      description:
        "Forces the component's content to render when it mounts. Useful for content that will not be rendered in the DOM that you want crawled for SEO.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    id: {
      control: 'text',
      description: 'The unique identifier of the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    location: {
      control: 'select',
      options: [
        'top',
        'bottom',
        'start',
        'end',
        'center',
        'top start',
        'top end',
        'bottom start',
        'bottom end',
      ],
      description: 'Specifies the anchor point for positioning the component.',
      table: {
        type: { summary: 'Anchor' },
        defaultValue: { summary: 'undefined' },
      },
    },
    locationStrategy: {
      control: 'select',
      options: ['static', 'connected'],
      description: 'Specifies how the component should position relative to its activator.',
      table: {
        type: { summary: '"static" | "connected" | LocationStrategyFunction' },
        defaultValue: { summary: '"connected"' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component. Use auto to use the activator width.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'boolean',
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noClickAnimation: {
      control: 'boolean',
      description:
        'Disables the bounce effect when clicking outside of the content element when using the persistent prop.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    offset: {
      control: 'text',
      description:
        'Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side.',
      table: {
        type: { summary: 'string | number | number[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    opacity: {
      control: 'text',
      description: 'Sets the opacity of the scrim element. Only applies if scrim is enabled.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    openDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before opening component. Only works with open-on-hover prop.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '300' },
      },
    },
    openOnClick: {
      control: 'boolean',
      description: 'Designates whether menu should open on activator click.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    openOnFocus: {
      control: 'boolean',
      description: 'Activate the component when the activator is focused.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    openOnHover: {
      control: 'boolean',
      description: 'Designates whether menu should open on activator hover.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    origin: {
      control: 'select',
      options: ['auto', 'overlap', 'top', 'bottom', 'start', 'end', 'center'],
      description: 'Sets the transition origin on the element.',
      table: {
        type: { summary: 'Anchor | "auto" | "overlap"' },
        defaultValue: { summary: '"auto"' },
      },
    },
    persistent: {
      control: 'boolean',
      description: 'Clicking outside of the element or pressing esc key will not deactivate it.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrim: {
      control: 'text',
      description: 'Accepts true/false to enable background, and string to define color.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollStrategy: {
      control: 'select',
      options: ['close', 'none', 'block', 'reposition'],
      description: 'Strategy used when the component is activate and user scrolls.',
      table: {
        type: { summary: '"close" | "none" | "block" | "reposition" | ScrollStrategyFunction' },
        defaultValue: { summary: '"reposition"' },
      },
    },
    stickToTarget: {
      control: 'boolean',
      description: 'Enables the overlay content to go off-screen when scrolling.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    submenu: {
      control: 'boolean',
      description:
        'Opens with right arrow and closes on left instead of up/down. Implies location="end". Directions are reversed for RTL.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    target: {
      control: 'text',
      description:
        'For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to.',
      table: {
        type: { summary: 'Element | string | "parent" | "cursor" | [number, number]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    transition: {
      control: 'text',
      description:
        'Sets the component transition. Can be one of the built in or custom transition.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: '{component: {name: "VDialogTransition"}}' },
      },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    zIndex: {
      control: 'text',
      description: 'The z-index used for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '2000' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn, UList, UListItem, UMenu },
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
    ];

    return { args, items };
  },
  template: `
    <div class="d-flex justify-space-around">
      <u-menu v-bind="args">
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Show Menu
          </u-btn>
        </template>
        <u-list>
          <u-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

Default.args = {} as ComponentArgs;

/**
 * Menu can be offset relative to the activator by using the location prop
 */
export const Location: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UList, UListItem, UMenu, USelect },
  setup() {
    const location = ref('end');

    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ];
    const locations = ['top', 'bottom', 'start', 'end', 'center'];

    return { location, items, locations };
  },
  template: `
    <div class="text-center">
      <u-select
        v-model="location"
        :items="locations"
        label="Location"
      ></u-select>
      <u-menu :location="location">
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Dropdown
          </u-btn>
        </template>

        <u-list>
          <u-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

Location.args = {} as ComponentArgs;

Location.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-select
      v-model="location"
      :items="locations"
      label="Location"
    ></u-select>
    <u-menu :location="location">
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </u-btn>
      </template>

      <u-list>
        <u-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const location = ref('end')

  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
  const locations = [
    'top',
    'bottom',
    'start',
    'end',
    'center',
  ]
</script>`,
    },
  },
};

/**
 * Menus can be accessed using hover instead of clicking with the open-on-hover prop
 */
export const OpenOnHover: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UList, UListItem, UMenu },
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ];

    return { items };
  },
  template: `
    <div class="text-center">
      <u-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Dropdown
          </u-btn>
        </template>

        <u-list>
          <u-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

OpenOnHover.args = {} as ComponentArgs;

OpenOnHover.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Dropdown
        </u-btn>
      </template>

      <u-list>
        <u-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>
<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>`,
    },
  },
};

/**
 * Menus with other menus inside them will not close until their children are closed.
 * The submenu prop changes keyboard behaviour to open and close with left/right arrow keys.
 */
export const NestedMenus: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UIcon, UList, UListItem, UMenu },
  template: `
    <div class="text-center">
      <u-btn color="primary">
        Open menu

        <u-menu activator="parent">
          <u-list>
            <u-list-item v-for="i in 5" :key="i" link>
              <v-list-item-title>Item {{ i }}</v-list-item-title>
              <template v-slot:append>
                <u-icon icon="hugeicons:arrow-right-01" size="x-small"></u-icon>
              </template>

              <u-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                <u-list>
                  <u-list-item v-for="j in 5" :key="j" link>
                    <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                    <template v-slot:append>
                      <u-icon icon="hugeicons:arrow-right-01" size="x-small"></u-icon>
                    </template>

                    <u-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                      <u-list>
                        <u-list-item v-for="k in 5" :key="k" link>
                          <v-list-item-title>Item {{ i }} - {{ j }} - {{ k }}</v-list-item-title>
                        </u-list-item>
                      </u-list>
                    </u-menu>
                  </u-list-item>
                </u-list>
              </u-menu>
            </u-list-item>
          </u-list>
        </u-menu>
      </u-btn>
    </div>
  `,
});

NestedMenus.args = {} as ComponentArgs;

NestedMenus.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-btn color="primary">
      Open menu

      <u-menu activator="parent">
        <u-list>
          <u-list-item v-for="i in 5" :key="i" link>
            <v-list-item-title>Item {{ i }}</v-list-item-title>
            <template v-slot:append>
              <u-icon icon="hugeicons:arrow-right-01" size="x-small"></u-icon>
            </template>

            <u-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
              <u-list>
                <u-list-item v-for="j in 5" :key="j" link>
                  <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                  <template v-slot:append>
                    <u-icon icon="hugeicons:arrow-right-01" size="x-small"></u-icon>
                  </template>

                  <u-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                    <u-list>
                      <u-list-item v-for="k in 5" :key="k" link>
                        <v-list-item-title>Item {{ i }} - {{ j }} - {{ k }}</v-list-item-title>
                      </u-list-item>
                    </u-list>
                  </u-menu>
                </u-list-item>
              </u-list>
            </u-menu>
          </u-list-item>
        </u-list>
      </u-menu>
    </u-btn>
  </div>
</template>`,
    },
  },
};

/**
 * v-menu can be positioned relative to a DOM element or explicit [x, y] coordinates.
 */
export const PositioningWithCoordinates: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, UIconBtn, UList, UListItem, UMenu, USpacer },
  setup() {
    const showMenu = ref(false);
    const menuTarget = ref<HTMLElement | null>(null);

    const menuItems = [
      { title: 'Create', prependIcon: 'hugeicons:add-circle', code: 'add' },
      { type: 'divider' },
      { title: 'Modify', prependIcon: 'hugeicons:pencil-edit-01', code: 'edit' },
      { type: 'divider' },
      { title: 'Remove', prependIcon: 'hugeicons:delete-02', code: 'delete' },
    ];

    async function show(evt: MouseEvent) {
      if (showMenu.value) {
        showMenu.value = false;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      menuTarget.value = (evt.target as HTMLElement).closest('.v-icon-btn') as HTMLElement;
      showMenu.value = true;
    }

    return { showMenu, menuTarget, menuItems, show };
  },
  template: `
    <u-container max-width="300">
      <div
        v-for="n in 10"
        :key="n"
        class="py-2 border-b d-flex align-center ga-2"
      >
        Some Text Here
        <u-spacer></u-spacer>
        <u-icon-btn
          icon="hugeicons:more-vertical"
          size="small"
          variant="outlined"
          @click="show"
        ></u-icon-btn>
      </div>

      <u-menu
        v-model="showMenu"
        :offset="[-8,-12]"
        :target="menuTarget"
        location="bottom end"
        scroll-strategy="close"
      >
        <u-list
          :items="menuItems"
          class="py-0"
          density="compact"
          item-value="code"
          item-props
          slim
        >
          <template v-slot:prepend>
            <u-icon class="mr-n2" size="small"></u-icon>
          </template>
        </u-list>
      </u-menu>
    </u-container>
  `,
});

PositioningWithCoordinates.args = {} as ComponentArgs;

PositioningWithCoordinates.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container max-width="300">
    <div
      v-for="n in 10"
      :key="n"
      class="py-2 border-b d-flex align-center ga-2"
    >
      Some Text Here
      <u-spacer></u-spacer>
      <u-icon-btn
        icon="hugeicons:more-vertical"
        size="small"
        variant="outlined"
        @click="show"
      ></u-icon-btn>
    </div>

    <u-menu
      v-model="showMenu"
      :offset="[-8,-12]"
      :target="menuTarget"
      location="bottom end"
      scroll-strategy="close"
    >
      <u-list
        :items="menuItems"
        class="py-0"
        density="compact"
        item-value="code"
        item-props
        slim
      >
        <template v-slot:prepend>
          <u-icon class="mr-n2" size="small"></u-icon>
        </template>
      </u-list>
    </u-menu>
  </u-container>
</template>
<script setup>
  import { ref } from 'vue'

  const showMenu = ref(false)
  const menuTarget = ref(null)

  const menuItems = [
    { title: 'Create', prependIcon: 'hugeicons:add-circle', code: 'add' },
    { type: 'divider' },
    { title: 'Modify', prependIcon: 'hugeicons:pencil-edit-01', code: 'edit' },
    { type: 'divider' },
    { title: 'Remove', prependIcon: 'hugeicons:delete-02', code: 'delete' },
  ]

  async function show (evt) {
    if (showMenu.value) {
      showMenu.value = false
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    menuTarget.value = evt.target.closest('.v-icon-btn')
    showMenu.value = true
  }
</script>`,
    },
  },
};

/**
 * With the new v-slot syntax, nested activators such as those seen with a v-menu and v-tooltip
 * attached to the same activator button, need a particular setup in order to function correctly.
 */
export const ActivatorAndTooltip: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UList, UListItem, UMenu, UTooltip },
  setup() {
    const items = [
      { title: 'Click Me 1' },
      { title: 'Click Me 2' },
      { title: 'Click Me 3' },
      { title: 'Click Me 4' },
    ];

    return { items, mergeProps };
  },
  template: `
    <div class="text-center">
      <u-menu>
        <template v-slot:activator="{ props: menu }">
          <u-tooltip location="top">
            <template v-slot:activator="{ props: tooltip }">
              <u-btn
                color="primary"
                v-bind="mergeProps(menu, tooltip)"
              >
                Dropdown w/ Tooltip
              </u-btn>
            </template>
            <span>I'm A Tooltip</span>
          </u-tooltip>
        </template>
        <u-list>
          <u-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

ActivatorAndTooltip.args = {} as ComponentArgs;

ActivatorAndTooltip.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-menu>
      <template v-slot:activator="{ props: menu }">
        <u-tooltip location="top">
          <template v-slot:activator="{ props: tooltip }">
            <u-btn
              color="primary"
              v-bind="mergeProps(menu, tooltip)"
            >
              Dropdown w/ Tooltip
            </u-btn>
          </template>
          <span>I'm A Tooltip</span>
        </u-tooltip>
      </template>
      <u-list>
        <u-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>
<script setup>
  import { mergeProps } from 'vue'

  const items = [
    { title: 'Click Me 1' },
    { title: 'Click Me 2' },
    { title: 'Click Me 3' },
    { title: 'Click Me 4' },
  ]
</script>`,
    },
  },
};

/**
 * Vuetify comes with several standard transitions that you can use.
 */
export const Transitions: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UList, UListItem, UMenu },
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ];

    return { items };
  },
  template: `
    <div class="d-flex justify-space-around">
      <u-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Scale Transition
          </u-btn>
        </template>

        <u-list>
          <u-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>

      <u-menu transition="slide-x-transition">
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Slide X Transition
          </u-btn>
        </template>

        <u-list>
          <u-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>

      <u-menu transition="slide-y-transition">
        <template v-slot:activator="{ props }">
          <u-btn
            color="primary"
            v-bind="props"
          >
            Slide Y Transition
          </u-btn>
        </template>
        <u-list>
          <u-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="i"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

Transitions.args = {} as ComponentArgs;

Transitions.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-space-around">
    <u-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Scale Transition
        </u-btn>
      </template>

      <u-list>
        <u-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>

    <u-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Slide X Transition
        </u-btn>
      </template>

      <u-list>
        <u-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>

    <u-menu transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <u-btn
          color="primary"
          v-bind="props"
        >
          Slide Y Transition
        </u-btn>
      </template>
      <u-list>
        <u-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>
<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>`,
    },
  },
};

/**
 * A menu can be configured to be static when opened, allowing it to function as a popover.
 * This can be useful when there are multiple interactive items within the menu contents.
 */
export const PopoverMenu: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UCardActions, UDivider, UList, UListItem, UMenu, USpacer, USwitch },
  setup() {
    const fav = ref(true);
    const menu = ref(false);
    const message = ref(false);
    const hints = ref(true);

    return { fav, menu, message, hints };
  },
  template: `
    <div class="text-center">
      <u-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
      >
        <template v-slot:activator="{ props }">
          <u-btn
            color="indigo"
            v-bind="props"
          >
            Menu as Popover
          </u-btn>
        </template>

        <u-card min-width="300">
          <u-list>
            <u-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              subtitle="Founder of Vuetify"
              title="John Leider"
            >
              <template v-slot:append>
                <u-btn
                  :class="fav ? 'text-red' : ''"
                  icon="hugeicons:favourite"
                  variant="text"
                  @click="fav = !fav"
                ></u-btn>
              </template>
            </u-list-item>
          </u-list>

          <u-divider></u-divider>

          <u-list>
            <u-list-item>
              <u-switch
                v-model="message"
                color="purple"
                label="Enable messages"
                hide-details
              ></u-switch>
            </u-list-item>

            <u-list-item>
              <u-switch
                v-model="hints"
                color="purple"
                label="Enable hints"
                hide-details
              ></u-switch>
            </u-list-item>
          </u-list>

          <u-card-actions>
            <u-spacer></u-spacer>

            <u-btn
              variant="text"
              @click="menu = false"
            >
              Cancel
            </u-btn>
            <u-btn
              color="primary"
              variant="text"
              @click="menu = false"
            >
              Save
            </u-btn>
          </u-card-actions>
        </u-card>
      </u-menu>
    </div>
  `,
});

PopoverMenu.args = {} as ComponentArgs;

PopoverMenu.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-menu
      v-model="menu"
      :close-on-content-click="false"
      location="end"
    >
      <template v-slot:activator="{ props }">
        <u-btn
          color="indigo"
          v-bind="props"
        >
          Menu as Popover
        </u-btn>
      </template>

      <u-card min-width="300">
        <u-list>
          <u-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            subtitle="Founder of Vuetify"
            title="John Leider"
          >
            <template v-slot:append>
              <u-btn
                :class="fav ? 'text-red' : ''"
                icon="hugeicons:favourite"
                variant="text"
                @click="fav = !fav"
              ></u-btn>
            </template>
          </u-list-item>
        </u-list>

        <u-divider></u-divider>

        <u-list>
          <u-list-item>
            <u-switch
              v-model="message"
              color="purple"
              label="Enable messages"
              hide-details
            ></u-switch>
          </u-list-item>

          <u-list-item>
            <u-switch
              v-model="hints"
              color="purple"
              label="Enable hints"
              hide-details
            ></u-switch>
          </u-list-item>
        </u-list>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            variant="text"
            @click="menu = false"
          >
            Cancel
          </u-btn>
          <u-btn
            color="primary"
            variant="text"
            @click="menu = false"
          >
            Save
          </u-btn>
        </u-card-actions>
      </u-card>
    </u-menu>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const fav = ref(true)
  const menu = ref(false)
  const message = ref(false)
  const hints = ref(true)
</script>`,
    },
  },
};

/**
 * Menus can be placed within almost any component.
 */
export const UseInComponents: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UCardText, UCardTitle, UCol, UList, UListItem, UMenu, URow, USpacer },
  setup() {
    const items = [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ];

    return { items };
  },
  template: `
    <u-row>
      <u-col
        cols="12"
        offset-sm="3"
        sm="6"
      >
        <u-card height="200px">
          <u-card-title class="bg-blue d-flex align-center">
            <span class="text-h5">Menu</span>

            <u-spacer></u-spacer>

            <u-menu>
              <template v-slot:activator="{ props }">
                <u-btn icon="hugeicons:more-vertical" variant="text" v-bind="props"></u-btn>
              </template>

              <u-list>
                <u-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :value="i"
                >
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </u-list-item>
              </u-list>
            </u-menu>
          </u-card-title>

          <u-card-text>Lorem Ipsum</u-card-text>
        </u-card>
      </u-col>
    </u-row>
  `,
});

UseInComponents.args = {} as ComponentArgs;

UseInComponents.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row>
    <u-col
      cols="12"
      offset-sm="3"
      sm="6"
    >
      <u-card height="200px">
        <u-card-title class="bg-blue d-flex align-center">
          <span class="text-h5">Menu</span>

          <u-spacer></u-spacer>

          <u-menu>
            <template v-slot:activator="{ props }">
              <u-btn icon="hugeicons:more-vertical" variant="text" v-bind="props"></u-btn>
            </template>

            <u-list>
              <u-list-item
                v-for="(item, i) in items"
                :key="i"
                :value="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </u-list-item>
            </u-list>
          </u-menu>
        </u-card-title>

        <u-card-text>Lorem Ipsum</u-card-text>
      </u-card>
    </u-col>
  </u-row>
</template>
<script setup>
  const items = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ]
</script>`,
    },
  },
};
