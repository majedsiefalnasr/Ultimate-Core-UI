import type { Meta, StoryFn } from '@storybook/vue3';

import {
  UApp,
  UAppBar,
  UAppBarNavIcon,
  UAppBarTitle,
  UBtn,
  UCard,
  UCol,
  UContainer,
  UIcon,
  UImg,
  ULayout,
  UMain,
  UResponsive,
  URow,
  USheet,
} from '../index';

interface ComponentArgs {
  absolute?: boolean;
  border?: string | number | boolean;
  collapse?: boolean;
  color?: string;
  density?: 'default' | 'prominent' | 'comfortable' | 'compact';
  elevation?: string | number;
  extended?: boolean;
  'extension-height'?: string | number;
  flat?: boolean;
  floating?: boolean;
  height?: string | number;
  image?: string;
  location?: 'top' | 'bottom';
  'model-value'?: boolean;
  name?: string;
  order?: string | number;
  rounded?: string | number | boolean;
  'scroll-behavior'?:
    | string
    | 'hide'
    | 'fully-hide'
    | 'inverted'
    | 'collapse'
    | 'elevate'
    | 'fade-image';
  'scroll-target'?: string;
  'scroll-threshold'?: string | number;
  tag?: string;
  theme?: string;
  tile?: boolean;
  title?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/App Bars',
  component: UAppBar,
  parameters: {
    docs: {
      description: {
        component:
          'The u-app-bar component is pivotal to any graphical user interface (GUI), as it generally is the primary source of site navigation.',
      },
      import: `import { UAppBar } from '@ultimate/core-ui/components'`,
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
            <u-app>
              <u-app-bar ${attrsString}>
                <template v-slot:prepend>
                  <u-app-bar-nav-icon></u-app-bar-nav-icon>
                </template>

                <u-app-bar-title>Application Bar</u-app-bar-title>
              </u-app-bar>
            </u-app>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VAppBar',
      content:
        "This component is built on top of Vuetify's VAppBar component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/app-bars/',
    },
    Primary: {
      description: 'The u-app-bar component is used for application-wide actions and information.',
    },
    anatomy: {
      title: 'Anatomy',
      description: `The recommended placement of elements inside of v-app-bar is:
- Place v-app-bar-nav-icon or other navigation items on the far left
- Place v-app-bar-title to the right of navigation
- Place contextual actions to the right of navigation
- Place overflow actions to the far right`,
      Image: '/images/stories/UAppBar.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The App Bar container holds all v-app-bar components',
        },
        {
          element: '2. App Bar Icon (optional)',
          description:
            'A styled icon button component created that is often used to control the state of a v-navigation drawer',
        },
        {
          element: '3. Title (optional)',
          description: 'A heading with increased font-size',
        },
        {
          element: '4. Action items (optional)',
          description: 'Used to highlight certain actions not in the overflow menu',
        },
        {
          element: '5. Overflow menu (optional)',
          description: 'Place less often used action items into a hidden menu',
        },
      ],
    },
    api: {
      data: [
        {
          element: { title: 'v-app-bar', link: 'https://vuetifyjs.com/en/api/v-app-bar/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-app-bar-nav-icon',
            link: 'https://vuetifyjs.com/en/api/v-app-bar-nav-icon/',
          },
          description: 'A customized v-btn component that uses a default icon value of $menu',
        },
        {
          element: {
            title: 'v-app-bar-title',
            link: 'https://vuetifyjs.com/en/api/v-app-bar-title/',
          },
          description: 'An extension of v-toolbar-title that is used for scrolling techniques',
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
        'Applies utility border classes to the component. To use it, you need to omit the border- prefix, (for example use border-sm as border="sm"). Find a list of the built-in border classes on the borders page.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    collapse: {
      control: 'boolean',
      description: 'Morphs the component into a collapsed state, reducing its maximum width.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'color',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'prominent', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'default | prominent | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    elevation: {
      control: 'text',
      description:
        'Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    extended: {
      control: 'boolean',
      description:
        'Use this prop to increase the height of the toolbar without using the extension slot for adding content. May be used in conjunction with the extension-height prop. When false, will not show extension slot even if content is present.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    'extension-height': {
      control: 'text',
      description: 'Designate an explicit height for the extension slot.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '48' },
      },
    },
    flat: {
      control: 'boolean',
      description: "Removes the component's box-shadow.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    floating: {
      control: 'boolean',
      description: 'Applies display: inline-flex to the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    height: {
      control: 'text',
      description:
        'Designates a specific height for the toolbar. Overrides the heights imposed by other props, e.g. prominent, dense, extended, etc.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '64' },
      },
    },
    image: {
      control: 'text',
      description: "Specifies a v-img as the component's background.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    location: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
      description: 'Aligns the component towards the top or bottom.',
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'top' },
      },
    },
    'model-value': {
      control: 'boolean',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    order: {
      control: 'text',
      description: 'Adjust the order of the component in relation to its registration order.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'scroll-behavior': {
      control: 'text',
      description:
        'Specify an action to take when the scroll position of scroll-target reaches scroll-threshold. Accepts any combination of hide, inverted, collapse, elevate, and fade-image. Multiple values can be used, separated by a space.',
      table: {
        type: {
          summary:
            "string | 'hide' | 'fully-hide' | 'inverted' | 'collapse' | 'elevate' | 'fade-image'",
        },
        defaultValue: { summary: 'undefined' },
      },
    },
    'scroll-target': {
      control: 'text',
      description: 'The element to target for scrolling events. Uses window by default.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'scroll-threshold': {
      control: 'text',
      description: 'The amount of scroll distance down before scroll-behavior activates.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '300' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'header' },
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
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UApp, UAppBar, UAppBarNavIcon, UAppBarTitle, UResponsive },
  setup() {
    return { args };
  },
  template: `
    <u-responsive class="border rounded" max-height="300">
      <u-app>
        <u-app-bar v-bind="args">
          <template v-slot:prepend>
            <u-app-bar-nav-icon></u-app-bar-nav-icon>
          </template>

          <u-app-bar-title>Application Bar</u-app-bar-title>
        </u-app-bar>
      </u-app>
    </u-responsive>
  `,
});

Default.args = {
  // Default args go here
} as ComponentArgs;

// Scroll behavior Story
const scrollBehaviorStoryTemplate = `
  <u-layout class="overflow-visible" style="height: 300px;">
    <u-app-bar>
      <template v-slot:prepend>
        <u-app-bar-nav-icon></u-app-bar-nav-icon>
      </template>

      <u-app-bar-title>Application Bar</u-app-bar-title>

      <template v-slot:append>
        <u-btn icon="hugeicons:favourite"></u-btn>

        <u-btn icon="hugeicons:search-01"></u-btn>

        <u-btn icon="hugeicons:more-vertical"></u-btn>
      </template>
    </u-app-bar>

    <u-main style="height: 750px;"></u-main>
  </u-layout>
`;

/**
 * Available values:
 *
 * - hide: The default slot area will shift up and hide as the user scrolls down. The extension slot remains visible.
 * - fully-hide: The entire app bar will hide as the user scrolls down.
 * - collapse: Shrink horizontally to a small bar in one corner.
 * - elevate: Add a drop shadow to the app bar when scrolling. Ignores scroll-threshold, will always be applied with any amount of scrolling.
 * - fade-image: Fade out the image as the user scrolls down.
 * - inverted: Has no effect on its own, but will reverse the behavior when combined with any other option.
 * The scroll-threshold prop is used to determine how far the user must scroll down (in pixels) before the behavior is applied.
 *
 * A scroll listener is added to window by default, but can be changed to a custom element using the scroll-target prop.
 */
export const ScrollBehavior: StoryFn<ComponentArgs> = () => ({
  components: {
    UAppBar,
    UAppBarNavIcon,
    UAppBarTitle,
    UBtn,
    ULayout,
    UMain,
    UContainer,
    URow,
    UCol,
    USheet,
  },
  setup() {},
  template: scrollBehaviorStoryTemplate,
});

ScrollBehavior.parameters = {
  docs: {
    source: {
      code: `<template>${scrollBehaviorStoryTemplate}</template>`,
    },
  },
};

// Density Story
const densityStoryTemplate = `
  <u-card
    class="mx-auto"
    max-width="448"
  >
    <u-layout>
      <u-app-bar
        color="primary"
        density="compact"
      >
        <template v-slot:prepend>
          <u-app-bar-nav-icon></u-app-bar-nav-icon>
        </template>

        <u-app-bar-title>Photos</u-app-bar-title>

        <template v-slot:append>
          <u-btn icon="hugeicons:more-vertical"></u-btn>
        </template>
      </u-app-bar>

      <u-main>
        <u-container fluid>
          <u-row dense>
            <u-col
              v-for="n in 8"
              :key="n"
              cols="3"
            >
              <u-sheet
                color="surface-variant-alt"
                height="96"
              ></u-sheet>
            </u-col>
          </u-row>
        </u-container>
      </u-main>
    </u-layout>
  </u-card>
`;

/**
 * You can make app-bar dense. A dense app bar has lower height than regular one.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: {
    UAppBar,
    UCard,
    ULayout,
    UAppBarNavIcon,
    UAppBarTitle,
    UBtn,
    UMain,
    UContainer,
    URow,
    UCol,
    USheet,
  },
  setup() {},
  template: densityStoryTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>${densityStoryTemplate}</template>`,
    },
  },
};

// Image Story
const imageStoryTemplate = `
  <u-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <u-layout>
      <u-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:image>
          <u-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></u-img>
        </template>

        <template v-slot:prepend>
          <u-app-bar-nav-icon></u-app-bar-nav-icon>
        </template>

        <u-app-bar-title>Title</u-app-bar-title>

        <u-btn icon>
          <u-icon>hugeicons:search-01</u-icon>
        </u-btn>

        <u-btn icon>
          <u-icon>hugeicons:favourite</u-icon>
        </u-btn>

        <u-btn icon>
          <u-icon>hugeicons:more-vertical</u-icon>
        </u-btn>
      </u-app-bar>

      <u-main>
        <u-container fluid>
          <u-row dense>
            <u-col
              v-for="n in 4"
              :key="n"
              cols="12"
            >
              <u-card
                :subtitle="\`Subtitle for Content \${n}\`"
                :title="\`Content \${n}\`"
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
              ></u-card>
            </u-col>
          </u-row>
        </u-container>
      </u-main>
    </u-layout>
  </u-card>
`;

/**
 * v-app-bar can contain background images. You can set source via the image prop.
 * If you need to customize the v-img properties, the app-bar provides you with an image slot.
 */
export const Image: StoryFn<ComponentArgs> = () => ({
  components: {
    UAppBar,
    UCard,
    ULayout,
    UAppBarNavIcon,
    UAppBarTitle,
    UBtn,
    UIcon,
    UImg,
    UMain,
    UContainer,
    URow,
    UCol,
  },
  setup() {},
  template: imageStoryTemplate,
});

Image.parameters = {
  docs: {
    source: {
      code: `<template>${imageStoryTemplate}</template>`,
    },
  },
};
