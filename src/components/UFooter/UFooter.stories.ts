import type { Meta, StoryFn } from '@storybook/vue3';

import { UBtn, UDivider } from '../index';

import { UFooter } from './index';

interface ComponentArgs {
  absolute?: boolean;
  app?: boolean;
  border?: string | number | boolean;
  color?: string;
  elevation?: string | number;
  height?: string | number;
  name?: string;
  order?: string | number;
  rounded?: string | number | boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Footers',
  component: UFooter,
  parameters: {
    docs: {
      description: {
        component:
          'The u-footer component is used for displaying general information that a user might want to access from any page within your site.',
      },
      import: `import { UFooter } from '@ultimate/core-ui/components'`,
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
            <u-footer${attrsString} class="text-center py-4">
              {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
            </u-footer>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VFooter',
      content: 'The v-footer component in its simplest form is a container.',
      link: 'https://vuetifyjs.com/en/components/footers/',
    },
    Primary: {
      description: 'The u-footer component in its simplest form is a container.',
    },
    api: {
      data: [
        {
          element: { title: 'v-footer', link: 'https://vuetifyjs.com/en/api/v-footer/' },
          description: 'The footer component.',
        },
      ],
    },
  },
  argTypes: {
    absolute: {
      control: 'boolean',
      description: 'Applies position: absolute to the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    app: {
      control: 'boolean',
      description:
        'Determines the position of the footer. If true, fixed at bottom of viewport; if false, at the bottom of the page.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    border: {
      control: 'text',
      description: 'Applies utility border classes (omit the border- prefix, e.g. border="sm").',
      table: { type: { summary: 'string | number | boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'text',
      description:
        'Applies specified color to the control - supports utility colors or CSS colors.',
      table: { type: { summary: 'string' } },
    },
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: { type: { summary: 'string | number' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: "'auto'" } },
    },
    name: {
      control: 'text',
      description: 'Assign a specific name for layout registration.',
      table: { type: { summary: 'string' } },
    },
    order: {
      control: 'number',
      description: 'Adjust the order of the component in relation to its registration order.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius (0, xs, sm, true, lg, xl, pill, circle, shaped).',
      table: { type: { summary: 'string | number | boolean' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'footer'" } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Default
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UFooter },
  setup() {
    return { args };
  },
  template: `
    <u-footer v-bind="args" class="text-center py-4">
      {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
    </u-footer>
  `,
});

Default.args = {} as ComponentArgs;

// Company Footer
export const CompanyFooter: StoryFn<ComponentArgs> = (args) => ({
  components: { UFooter, UBtn },
  setup() {
    const links = ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'];
    return { args, links };
  },
  template: `
    <u-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light" v-bind="args">
      <u-btn
        v-for="link in links"
        :key="link"
        variant="text"
        rounded
      >{{ link }}</u-btn>

      <div class="flex-1-0-100 text-center mt-2">
        {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
      </div>
    </u-footer>
  `,
});

CompanyFooter.args = {} as ComponentArgs;

CompanyFooter.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-footer class="d-flex align-center justify-center ga-2 flex-wrap flex-grow-1 py-3" color="surface-light">
    <u-btn
      v-for="link in links"
      :key="link"
      variant="text"
      rounded
    >{{ link }}</u-btn>

    <div class="flex-1-0-100 text-center mt-2">
      {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
    </div>
  </u-footer>
</template>
<script setup>
  const links = [
    'Home',
    'About Us',
    'Team',
    'Services',
    'Blog',
    'Contact Us',
  ]
</script>`,
    },
    description: {
      story: 'The footer component as a basic company footer with links.',
    },
  },
};

// Indigo Footer
export const IndigoFooter: StoryFn<ComponentArgs> = (args) => ({
  components: { UFooter, UBtn, UDivider },
  setup() {
    const icons = [
      'hugeicons:facebook-02',
      'hugeicons:twitter',
      'hugeicons:linkedin-02',
      'hugeicons:instagram',
    ];
    return { args, icons };
  },
  template: `
    <u-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1" v-bind="args">
      <div class="d-flex ga-3">
        <u-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          density="comfortable"
          variant="text"
        ></u-btn>
      </div>

      <u-divider class="my-2" thickness="2" width="50"></u-divider>

      <div class="text-caption font-weight-regular opacity-60">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </div>

      <u-divider></u-divider>

      <div>
        {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
      </div>
    </u-footer>
  `,
});

IndigoFooter.args = {} as ComponentArgs;

IndigoFooter.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1">
    <div class="d-flex ga-3">
      <u-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></u-btn>
    </div>

    <u-divider class="my-2" thickness="2" width="50"></u-divider>

    <div class="text-caption font-weight-regular opacity-60">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </div>

    <u-divider></u-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
    </div>
  </u-footer>
</template>
<script setup>
  const icons = [
    'hugeicons:facebook-03',
    'hugeicons:twitter-03',
    'hugeicons:linkedin-03',
    'hugeicons:instagram-03',
  ]
</script>`,
    },
    description: {
      story: 'The footer component with Indigo background color and social media icons and button.',
    },
  },
};

// Teal Footer
export const TealFooter: StoryFn<ComponentArgs> = (args) => ({
  components: { UFooter, UBtn },
  setup() {
    const icons = [
      'hugeicons:facebook-03',
      'hugeicons:twitter-03',
      'hugeicons:linkedin-03',
      'hugeicons:instagram-03',
    ];
    return { args, icons };
  },
  template: `
    <u-footer class="d-flex flex-column" color="teal" rounded="lg" v-bind="args">
      <div class="d-flex w-100 align-center px-4 py-2">
        <strong>Get connected with us on social networks!</strong>

        <div class="d-flex ga-2 ms-auto">
          <u-btn
            v-for="icon in icons"
            :key="icon"
            :icon="icon"
            size="small"
            variant="plain"
          ></u-btn>
        </div>
      </div>

      <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
        {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
      </div>
    </u-footer>
  `,
});

TealFooter.args = {} as ComponentArgs;

TealFooter.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-footer class="d-flex flex-column" color="teal" rounded="lg">
    <div class="d-flex w-100 align-center px-4 py-2">
      <strong>Get connected with us on social networks!</strong>

      <div class="d-flex ga-2 ms-auto">
        <u-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          size="small"
          variant="plain"
        ></u-btn>
      </div>
    </div>

    <div class="px-4 py-2 bg-surface-variant text-center w-100 rounded-lg">
      {{ new Date().getFullYear() }} — <strong>Ultimate Solutions</strong>
    </div>
  </u-footer>
</template>
<script setup>
  const icons = [
    'hugeicons:facebook-03',
    'hugeicons:twitter-03',
    'hugeicons:linkedin-03',
    'hugeicons:instagram-03',
  ]
</script>`,
    },
    description: {
      story: 'The footer component with a Teal color header and columns and rows of links.',
    },
  },
};
