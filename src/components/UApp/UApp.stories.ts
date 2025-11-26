import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UApp,
  UAppBar,
  UBtn,
  UContainer,
  UList,
  UListItem,
  UMain,
  UNavigationDrawer,
  UResponsive,
  USpacer,
} from '../index';

interface ComponentArgs {
  theme?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Application',
  component: UApp,
  parameters: {
    docs: {
      description: {
        component:
          'The u-app component is an optional feature that serves as the root layout component as well as providing an easy way to control the theme used at the root level.',
      },
      import: `import { UApp } from '@ultimate/core-ui/components'`,
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
            <u-responsive class="border rounded" max-height="300">
              <u-app ${attrsString}>
                <u-app-bar title="App bar"></u-app-bar>

                <u-navigation-drawer>
                  <u-list>
                    <u-list-item title="Navigation drawer"></u-list-item>
                  </u-list>
                </u-navigation-drawer>

                <u-main>
                  <u-container>
                    <h1>Main Content</h1>
                  </u-container>
                </u-main>
              </u-app>
            </u-responsive>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VApp',
      content:
        "This component is built on top of Vuetify's VApp component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/application/',
    },
    Primary: {
      description:
        'The UApp component is the root layout component that wraps your entire application. It provides a structured container for other layout components like UAppBar, UNavigationDrawer, and UMain.',
    },
    api: {
      data: [
        {
          element: { title: 'v-app', link: 'https://vuetifyjs.com/en/api/v-app/' },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-main', link: 'https://vuetifyjs.com/en/api/v-main/' },
          description: 'Content area',
        },
      ],
    },
  },
  argTypes: {
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UApp,
    UResponsive,
    UAppBar,
    UNavigationDrawer,
    UList,
    UListItem,
    UMain,
    UContainer,
  },
  setup() {
    return { args };
  },
  template: `
    <u-responsive class="border rounded" max-height="300">
      <u-app v-bind="args">
        <u-app-bar title="App bar"></u-app-bar>

        <u-navigation-drawer>
          <u-list>
            <u-list-item title="Navigation drawer"></u-list-item>
          </u-list>
        </u-navigation-drawer>

        <u-main>
          <u-container>
            <h1>Main Content</h1>
          </u-container>
        </u-main>
      </u-app>
    </u-responsive>
  `,
});

Default.args = {
  // Default args go here
} as ComponentArgs;

// Theme Story
/**
 * The u-app component makes it easy to enable one of your application defined themes. By default,
 * Vuetify comes with 2 themes, light and dark. Each one is a collection of various colors used to
 * style each individual component. Because u-app acts as an interface for theme functionality, you
 * have the ability to change it dynamically within your template.
 */
const themeStoryTemplate = `
  <u-responsive class="border rounded" max-height="300">
    <u-app :theme="theme">
      <u-app-bar class="px-3">
        <u-spacer></u-spacer>

        <u-btn
          :prepend-icon="theme === 'light' ? 'hugeicons:sun-03' : 'hugeicons:moon-02'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></u-btn>
      </u-app-bar>

      <u-main>
        <u-container>
          <h1>Main Content</h1>
        </u-container>
      </u-main>
    </u-app>
  </u-responsive>
`;

export const Theme: StoryFn<ComponentArgs> = () => ({
  components: { UApp, UResponsive, UAppBar, UBtn, USpacer, UMain, UContainer },
  setup() {
    const theme = ref('light');

    function onClick() {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
    }

    return { theme, onClick };
  },
  template: themeStoryTemplate,
});

Theme.parameters = {
  docs: {
    source: {
      code: `
        <template>${themeStoryTemplate}</template>

        <script setup>
          import { ref } from 'vue'

          const theme = ref('light')

          function onClick () {
            theme.value = theme.value === 'light' ? 'dark' : 'light'
          }
        </script>
      `,
    },
  },
};
