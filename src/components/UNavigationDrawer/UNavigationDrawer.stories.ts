import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';

import {
  UAppBar,
  UAppBarNavIcon,
  UBtn,
  UCard,
  UCardText,
  UDivider,
  ULayout,
  UList,
  UListItem,
  UMain,
  UNavigationDrawer,
  UToolbarTitle,
} from '../index';

interface ComponentArgs {
  absolute?: boolean;
  border?: string | number | boolean;
  closeDelay?: string | number;
  color?: string;
  disableResizeWatcher?: boolean;
  disableRouteWatcher?: boolean;
  elevation?: string | number;
  expandOnHover?: boolean;
  floating?: boolean;
  image?: string;
  location?: 'top' | 'left' | 'right' | 'bottom' | 'start' | 'end';
  mobile?: boolean | null;
  mobileBreakpoint?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  modelValue?: boolean | null;
  name?: string;
  openDelay?: string | number;
  order?: string | number;
  permanent?: boolean;
  persistent?: boolean;
  rail?: boolean | null;
  railWidth?: string | number;
  rounded?: string | number | boolean;
  scrim?: string | boolean;
  sticky?: boolean;
  tag?: string;
  temporary?: boolean;
  theme?: string;
  tile?: boolean;
  touchless?: boolean;
  width?: string | number;
}

/**
 * Storybook meta configuration for UNavigationDrawer
 */
const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Navigation Drawer',
  component: UNavigationDrawer,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-navigation-drawer` component is what your users will utilize to navigate through the application. The navigation drawer is primarily used to house links to the pages in your application and is pre-configured to work with or without vue-router right out the box.',
      },
      import: `import { UNavigationDrawer } from '@ultimate/core-ui/components'`,
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

          return `<template>
  <u-navigation-drawer${attrsString}>
    <u-list-item title="My Application" subtitle="Vuetify"></u-list-item>
    <u-divider></u-divider>
    <u-list-item link title="List Item 1"></u-list-item>
    <u-list-item link title="List Item 2"></u-list-item>
    <u-list-item link title="List Item 3"></u-list-item>
  </u-navigation-drawer>
</template>`;
        },
      },
    },
    Vuetify: {
      component: 'VNavigationDrawer',
      content:
        "This component is built on top of Vuetify's VNavigationDrawer component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/navigation-drawers/',
    },
    Primary: {
      description:
        'The navigation drawer is primarily used to house links to the pages in your application and is pre-configured to work with or without vue-router right out the box. Using null as the starting value for its v-model will initialize the drawer as closed on mobile and as open on desktop. It is common to pair drawers with the u-list component using the nav property. You can learn more by exploring application layout examples.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-navigation-drawer',
            link: 'https://vuetifyjs.com/en/api/v-navigation-drawer/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-list-item',
            link: 'https://vuetifyjs.com/en/api/v-list-item/',
          },
          description: 'Component used to create navigation links',
        },
      ],
    },
  },
  argTypes: {
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
      description:
        'Applies utility border classes to the component. To use it, you need to omit the border- prefix (for example use border-sm as border="sm").',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    closeDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before closing component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: 'text',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disableResizeWatcher: {
      control: 'boolean',
      description:
        'Prevents the automatic opening or closing of the drawer when resized, based on whether the device is mobile or desktop.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disableRouteWatcher: {
      control: 'boolean',
      description: 'Disables opening of navigation drawer when route changes.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    elevation: {
      control: 'text',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    expandOnHover: {
      control: 'boolean',
      description: 'Collapses the drawer to a rail-variant until hovering with the mouse.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    floating: {
      control: 'boolean',
      description: 'A floating drawer has no visible container (no border-right).',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    image: {
      control: 'text',
      description: 'Apply a specific background image to the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    location: {
      control: 'select',
      options: ['top', 'left', 'right', 'bottom', 'start', 'end'],
      description: 'Controls the edge of the screen the drawer is attached to.',
      table: {
        type: { summary: '"top" | "left" | "right" | "bottom" | "start" | "end"' },
        defaultValue: { summary: '"start"' },
      },
    },
    mobile: {
      control: 'boolean',
      description:
        'Determines the display mode of the component. If true, the component will be displayed in mobile mode. If false, the component will be displayed in desktop mode. If null, will be based on the current mobile-breakpoint.',
      table: {
        type: { summary: 'boolean | null' },
        defaultValue: { summary: 'null' },
      },
    },
    mobileBreakpoint: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      description:
        'Sets the designated mobile breakpoint for the component. This will apply alternate styles for mobile devices such as the temporary prop, or activate the bottom prop when the breakpoint value is met. Setting the value to 0 will disable this functionality.',
      table: {
        type: { summary: 'number | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'boolean | null' },
        defaultValue: { summary: 'null' },
      },
    },
    name: {
      control: 'text',
      description: 'Assign a specific name for layout registration.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    openDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before opening component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    order: {
      control: 'number',
      description: 'Adjust the order of the component in relation to its registration order.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    permanent: {
      control: 'boolean',
      description: 'The drawer remains visible regardless of screen size.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    persistent: {
      control: 'boolean',
      description: 'Clicking outside or pressing esc key will not dismiss the dialog.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rail: {
      control: 'boolean',
      description: 'Sets the component width to the rail-width value.',
      table: {
        type: { summary: 'boolean | null' },
        defaultValue: { summary: 'null' },
      },
    },
    railWidth: {
      control: 'number',
      description: 'Sets the width for the component when rail is enabled.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '56' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    scrim: {
      control: 'text',
      description:
        'Determines whether an overlay is used when a temporary drawer is open. Accepts true/false to enable background, and string to define color.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    sticky: {
      control: 'boolean',
      description:
        'When true, the drawer will remain visible when scrolling past the top of the page.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"nav"' },
      },
    },
    temporary: {
      control: 'boolean',
      description:
        'A temporary drawer sits above its application and uses a scrim (overlay) to darken the background.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    touchless: {
      control: 'boolean',
      description: 'Disable mobile touch functionality.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'number',
      description: 'Sets the width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '256' },
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDivider, UListItem, UNavigationDrawer },
  setup() {
    return { args };
  },
  template: `
    <u-navigation-drawer v-bind="args" permanent>
      <u-list-item title="My Application" subtitle="Vuetify"></u-list-item>
      <u-divider></u-divider>
      <u-list-item link title="List Item 1"></u-list-item>
      <u-list-item link title="List Item 2"></u-list-item>
      <u-list-item link title="List Item 3"></u-list-item>
    </u-navigation-drawer>
  `,
});

Default.args = {} as ComponentArgs;

// Bottom Drawer story
const bottomDrawerTemplate = `
    <u-card>
      <u-layout>
        <u-app-bar color="primary">
          <u-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></u-app-bar-nav-icon>

          <u-toolbar-title>My files</u-toolbar-title>

          <u-btn icon="hugeicons:search-01" variant="text"></u-btn>

          <u-btn icon="hugeicons:filter" variant="text"></u-btn>

          <u-btn icon="hugeicons:more-vertical" variant="text"></u-btn>
        </u-app-bar>

        <u-navigation-drawer
          v-model="drawer"
          location="bottom"
          temporary
        >
          <u-list
            :items="items"
          ></u-list>
        </u-navigation-drawer>

        <u-main style="height: 500px;">
          <u-card-text>
            The navigation drawer will appear from the bottom on smaller size screens.
          </u-card-text>
        </u-main>
      </u-layout>
    </u-card>
  `;

/**
 * Using the bottom prop, we are able to relocate our drawer on mobile devices to come
 * from the bottom of the screen. This is an alternative style and only activates once
 * the mobile-breakpoint is met.
 */
export const BottomDrawer: StoryFn<ComponentArgs> = () => ({
  components: {
    UAppBar,
    UAppBarNavIcon,
    UBtn,
    UCard,
    UCardText,
    ULayout,
    UList,
    UMain,
    UNavigationDrawer,
    UToolbarTitle,
  },
  setup() {
    const items = [
      {
        title: 'Foo',
        value: 'foo',
      },
      {
        title: 'Bar',
        value: 'bar',
      },
      {
        title: 'Fizz',
        value: 'fizz',
      },
      {
        title: 'Buzz',
        value: 'buzz',
      },
    ];

    const drawer = ref(false);
    const group = ref(null);

    watch(group, () => {
      drawer.value = false;
    });

    return { items, drawer, group };
  },
  template: bottomDrawerTemplate,
});

BottomDrawer.parameters = {
  docs: {
    source: {
      code: `<template>${bottomDrawerTemplate}</template>

<script setup>
  import { ref, watch } from 'vue'

  const items = [
    {
      title: 'Foo',
      value: 'foo',
    },
    {
      title: 'Bar',
      value: 'bar',
    },
    {
      title: 'Fizz',
      value: 'fizz',
    },
    {
      title: 'Buzz',
      value: 'buzz',
    },
  ]

  const drawer = ref(false)
  const group = ref(null)

  watch(group, () => {
    drawer.value = false
  })
</script>`,
    },
  },
};

// Expand On Hover story
const expandOnHoverTemplate = `
    <u-card>
      <u-layout>
        <u-navigation-drawer
          expand-on-hover
          permanent
          rail
        >
          <u-list>
            <u-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              subtitle="sandra_a88@gmailcom"
              title="Sandra Adams"
            ></u-list-item>
          </u-list>

          <u-divider></u-divider>

          <u-list density="compact" nav>
            <u-list-item prepend-icon="hugeicons:folder-01" title="My Files" value="myfiles"></u-list-item>
            <u-list-item prepend-icon="hugeicons:user-multiple-02" title="Shared with me" value="shared"></u-list-item>
            <u-list-item prepend-icon="hugeicons:star" title="Starred" value="starred"></u-list-item>
          </u-list>
        </u-navigation-drawer>

        <u-main style="height: 250px"></u-main>
      </u-layout>
    </u-card>
  `;

/**
 * Places the component in rail mode and expands once hovered. This does not alter the
 * content area of v-main. The width can be controlled with the rail-width property.
 */
export const ExpandOnHover: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UDivider, ULayout, UList, UListItem, UMain, UNavigationDrawer },
  template: expandOnHoverTemplate,
});

ExpandOnHover.parameters = {
  docs: {
    source: {
      code: `<template>${expandOnHoverTemplate}</template>`,
    },
  },
};

// Temporary story
const temporaryTemplate = `
    <u-card>
      <u-layout>
        <u-navigation-drawer
          v-model="drawer"
          temporary
        >
          <u-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider"
          ></u-list-item>

          <u-divider></u-divider>

          <u-list density="compact" nav>
            <u-list-item prepend-icon="hugeicons:home-01" title="Home" value="home"></u-list-item>
            <u-list-item prepend-icon="hugeicons:message-02" title="About" value="about"></u-list-item>
          </u-list>
        </u-navigation-drawer>
        <u-main style="height: 250px">
          <div class="d-flex justify-center align-center h-100">
            <u-btn
              color="primary"
              @click.stop="drawer = !drawer"
            >
              Toggle
            </u-btn>
          </div>
        </u-main>
      </u-layout>
    </u-card>
  `;

/**
 * A temporary drawer sits above its application and uses a scrim (overlay) to darken the
 * background. This drawer behavior is mimicked by default when on mobile. Clicking outside
 * of the drawer will cause it to close.
 */
export const Temporary: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UDivider, ULayout, UList, UListItem, UMain, UNavigationDrawer },
  setup() {
    const drawer = ref(null);

    return { drawer };
  },
  template: temporaryTemplate,
});

Temporary.parameters = {
  docs: {
    source: {
      code: `<template>${temporaryTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const drawer = ref(null)
</script>`,
    },
  },
};
