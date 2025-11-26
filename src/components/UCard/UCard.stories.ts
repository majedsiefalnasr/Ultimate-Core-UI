import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UBtn,
  UCard,
  UCardActions,
  UCardItem,
  UCardSubtitle,
  UCardText,
  UCardTitle,
  UCol,
  URadio,
  URadioGroup,
  URow,
} from '../index';

interface ComponentArgs {
  title?: string | number | boolean;
  subtitle?: string | number | boolean;
  text?: string | number | boolean;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  color?: string;
  elevation?: string | number;
  hover?: boolean;
  href?: string;
  link?: boolean;
  disabled?: boolean;
  image?: string;
  appendAvatar?: string;
  appendIcon?: string;
  border?: string | number | boolean;
  density?: 'default' | 'comfortable' | 'compact';
  exact?: boolean;
  flat?: boolean;
  height?: string | number;
  loading?: string | boolean;
  location?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  position?: 'fixed' | 'static' | 'relative' | 'absolute' | 'sticky';
  prependAvatar?: string;
  prependIcon?: string;
  replace?: boolean;
  ripple?: boolean;
  rounded?: string | number | boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
  to?: string;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Cards',
  component: UCard,
  parameters: {
    docs: {
      description: {
        component:
          'The u-card component is a versatile and enhanced version of u-sheet that provides a simple interface for headings, text, images, icons, and more.',
      },
      import: `import { UCard } from '@ultimate/core-ui/components'`,
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

          return `<u-card${attrsString}></u-card>`;
        },
      },
    },
    Primary: {
      description:
        'The u-card component is a stylish way to wrap different types of content; such as tables, images, or user actions.',
    },
    Vuetify: {
      component: 'VCard',
      content:
        "This component is built on top of Vuetify's VCard component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/cards/',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-card',
            link: 'https://vuetifyjs.com/en/api/v-card/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-card-item',
            link: 'https://vuetifyjs.com/en/api/v-card-item/',
          },
          description:
            "Sub-component used to wrap the Card's v-card-title and v-card-subtitle components.",
        },
        {
          element: {
            title: 'v-card-title',
            link: 'https://vuetifyjs.com/en/api/v-card-title/',
          },
          description: "Sub-component used to display the Card's title. Wraps the #title slot",
        },
        {
          element: {
            title: 'v-card-subtitle',
            link: 'https://vuetifyjs.com/en/api/v-card-subtitle/',
          },
          description:
            "Sub-component used to display the Card's subtitle. Wraps the #subtitle slot.",
        },
        {
          element: {
            title: 'v-card-text',
            link: 'https://vuetifyjs.com/en/api/v-card-text/',
          },
          description: "Sub-component used to display the Card's text. Wraps the #text slot.",
        },
        {
          element: {
            title: 'v-card-actions',
            link: 'https://vuetifyjs.com/en/api/v-card-actions/',
          },
          description:
            'Sub-component that modifies the default styling of v-btn. Wraps the #actions slot',
        },
      ],
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The recommended placement of elements inside of v-card is: Place v-card-title, v-card-subtitle or other title text on top; Place v-card-text and other forms of media below the card header; Place v-card-actions after card content',
      Image: '/images/stories/ucard.anatomy.png',
      data: [
        {
          element: '1. Container',
          description:
            'The Card container holds all v-card components. Composed of 3 major parts: v-card-item, v-card-text, and v-card-actions',
        },
        {
          element: '2. Title (optional)',
          description: 'A heading with increased font-size',
        },
        {
          element: '3. Subtitle (optional)',
          description: 'A subheading with a lower emphasis text color',
        },
        {
          element: '4. Text (optional)',
          description: 'A content area with a lower emphasis text color',
        },
        {
          element: '5. Actions (optional)',
          description: 'A content area that typically contains one or more v-btn components',
        },
      ],
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Specify a subtitle text for the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    text: {
      control: 'text',
      description: 'Specify content text for the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description:
        'The variant prop gives you easy access to several different card styles. Available variants are: elevated (default), flat, tonal, outlined, text, and plain.',
      table: {
        type: { summary: 'text | flat | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'elevated' },
      },
    },
    color: {
      control: 'color',
      description:
        'Cards can be colored by using any of the builtin colors and contextual names using the color prop.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    elevation: {
      control: 'number',
      description:
        'The elevation property provides up to 24 levels of shadow depth. By default, cards rest at 2dp.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    hover: {
      control: 'boolean',
      description:
        'When using the hover prop, the cards will increase its elevation when the mouse is hovered over them.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    href: {
      control: 'text',
      description:
        'The card becomes an anchor with the href prop. Provide a URL to make the card an <a> element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    link: {
      control: 'boolean',
      description:
        'Add the link prop for the same style without adding an anchor (useful for router-link or programmatic navigation).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description:
        'The disabled prop can be added in order to prevent a user from interacting with the card.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    image: {
      control: 'text',
      description: 'Apply a specific background image to the Card (provide a URL).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendAvatar: {
      control: 'text',
      description: 'Appends a v-avatar component after default content in the append slot.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendIcon: {
      control: 'text',
      description: 'Creates a v-icon component after default content in the append slot.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    border: {
      control: 'text',
      description:
        'Applies utility border classes to the component. To use it, you need to omit the border- prefix, (for example use border-sm as border="sm").',
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
    exact: {
      control: 'boolean',
      description:
        "Exactly match the link. Without this, '/' will match every route. You can find more information about the exact prop on the vue-router documentation.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    flat: {
      control: 'boolean',
      description: "Removes the card's elevation.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    loading: {
      control: 'text',
      description:
        'Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar or a Boolean which uses the component color.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    location: {
      control: 'text',
      description:
        "Specifies the component's location. Can combine by using a space separated string.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    maxHeight: {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minHeight: {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    position: {
      control: { type: 'select' },
      options: ['fixed', 'static', 'relative', 'absolute', 'sticky'],
      description: 'Sets the position for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    prependAvatar: {
      control: 'text',
      description: 'Prepends a v-avatar component in the prepend slot before default content.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    prependIcon: {
      control: 'text',
      description: 'Prepends a v-icon component to the header.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    replace: {
      control: 'boolean',
      description:
        'Setting replace prop will call router.replace() instead of router.push() when clicked.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
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
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'div' } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    to: {
      control: 'text',
      description:
        'Denotes the target route of the link. You can find more information about the to prop on the vue-router documentation.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UCard },
  setup() {
    return { args };
  },
  template: '<u-card v-bind="args"></u-card>',
});

Default.args = {
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
};

export const Basics: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardItem, UCardTitle, UCardSubtitle, UCardText, URow, UCol },
  template: `
    <u-row>
      <u-col cols="12" md="4">
        <u-card
          subtitle="This is a card subtitle"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
          title="This is a title"
        ></u-card>
        <div class="text-center text-caption">Using Props Only</div>
      </u-col>

      <u-col cols="12" md="4">
        <u-card>
          <template v-slot:title>
            This is a title
          </template>
          <template v-slot:subtitle>
            This is a card subtitle
          </template>
          <template v-slot:text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
          </template>
        </u-card>
        <div class="text-center text-caption">Using Slots Only</div>
      </u-col>

      <u-col cols="12" md="4">
        <u-card>
          <u-card-item>
            <u-card-title>This is a title</u-card-title>
            <u-card-subtitle>This is a card subtitle</u-card-subtitle>
          </u-card-item>
          <u-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
          </u-card-text>
        </u-card>
        <div class="text-center text-caption">Using Markup Only</div>
      </u-col>
    </u-row>
  `,
});

Basics.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row>
    <u-col cols="12" md="4">
      <u-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></u-card>
      <div class="text-center text-caption">Using Props Only</div>
    </u-col>

    <u-col cols="12" md="4">
      <u-card>
        <template v-slot:title>
          This is a title
        </template>
        <template v-slot:subtitle>
          This is a card subtitle
        </template>
        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </u-card>
      <div class="text-center text-caption">Using Slots Only</div>
    </u-col>

    <u-col cols="12" md="4">
      <u-card>
        <u-card-item>
          <u-card-title>This is a title</u-card-title>
          <u-card-subtitle>This is a card subtitle</u-card-subtitle>
        </u-card-item>
        <u-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </u-card-text>
      </u-card>
      <div class="text-center text-caption">Using Markup Only</div>
    </u-col>
  </u-row>
</template>`,
    },
  },
};

export const Combined: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardText },
  template: `
    <u-card
      class="mx-auto"
      prepend-icon="$vuetify"
      subtitle="The #1 Vue UI Library"
      width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">Welcome to Vuetify</span>
      </template>
      <u-card-text class="bg-surface-light pt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
      </u-card-text>
    </u-card>
  `,
});

Combined.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>
    <u-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </u-card-text>
  </u-card>
</template>`,
    },
  },
};

export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UBtn, URow, UCol },
  setup() {
    const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'];
    return { variants };
  },
  template: `
    <u-row dense>
      <u-col
        v-for="(variant, i) in variants"
        :key="i"
        cols="12"
        md="4"
      >
        <u-card
          :variant="variant"
          class="mx-auto"
          color="surface-variant"
          max-width="344"
          subtitle="Greyhound divisely hello coldly fonwderfully"
          title="Headline"
        >
          <template v-slot:actions>
            <u-btn text="Button"></u-btn>
          </template>
        </u-card>
        <div class="text-center text-caption">{{ variant }}</div>
      </u-col>
    </u-row>
  `,
});

Variants.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row dense>
    <u-col
      v-for="(variant, i) in variants"
      :key="i"
      cols="12"
      md="4"
    >
      <u-card
        :variant="variant"
        class="mx-auto"
        color="surface-variant"
        max-width="344"
        subtitle="Greyhound divisely hello coldly fonwderfully"
        title="Headline"
      >
        <template v-slot:actions>
          <u-btn text="Button"></u-btn>
        </template>
      </u-card>
      <div class="text-center text-caption">{{ variant }}</div>
    </u-col>
  </u-row>
</template>

<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain']
</script>`,
    },
  },
};

export const Color: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardItem, UCardActions, UBtn, URow, UCol, URadioGroup, URadio },
  setup() {
    const variants = ['elevated', 'flat', 'tonal', 'outlined'];
    const color = ref('indigo');
    return { variants, color };
  },
  template: `
    <u-row justify="center">
      <u-col cols="auto">
        <u-radio-group v-model="color" hide-details inline>
          <u-radio color="indigo" label="indigo" value="indigo"></u-radio>
          <u-radio color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3"></u-radio>
          <u-radio color="primary" label="primary" value="primary"></u-radio>
          <u-radio color="secondary" label="secondary" value="secondary"></u-radio>
        </u-radio-group>
      </u-col>

      <u-col v-for="(variant, i) in variants" :key="i" cols="12" md="6">
        <u-card :color="color" :variant="variant" class="mx-auto">
          <u-card-item>
            <div>
              <div class="text-overline mb-1">{{ variant }}</div>
              <div class="text-h6 mb-1">Headline</div>
              <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
            </div>
          </u-card-item>
          <u-card-actions>
            <u-btn>Button</u-btn>
          </u-card-actions>
        </u-card>
      </u-col>
    </u-row>
  `,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row justify="center">
    <u-col cols="auto">
      <u-radio-group v-model="color" hide-details inline>
        <u-radio color="indigo" label="indigo" value="indigo"></u-radio>
        <u-radio color="indigo-darken-3" label="indigo-darken-3" value="indigo-darken-3"></u-radio>
        <u-radio color="primary" label="primary" value="primary"></u-radio>
        <u-radio color="secondary" label="secondary" value="secondary"></u-radio>
      </u-radio-group>
    </u-col>

    <u-col v-for="(variant, i) in variants" :key="i" cols="12" md="6">
      <u-card :color="color" :variant="variant" class="mx-auto">
        <u-card-item>
          <div>
            <div class="text-overline mb-1">{{ variant }}</div>
            <div class="text-h6 mb-1">Headline</div>
            <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
          </div>
        </u-card-item>
        <u-card-actions>
          <u-btn>Button</u-btn>
        </u-card-actions>
      </u-card>
    </u-col>
  </u-row>
</template>

<script setup>
import { ref } from 'vue'

const variants = ['elevated', 'flat', 'tonal', 'outlined']
const color = ref('indigo')
</script>`,
    },
  },
};

export const Elevation: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardItem, UCardTitle, UCardSubtitle, UCardText },
  template: `
    <u-card class="mx-auto my-8" elevation="16" max-width="344">
      <u-card-item>
        <u-card-title>Card title</u-card-title>
        <u-card-subtitle>Card subtitle secondary text</u-card-subtitle>
      </u-card-item>
      <u-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </u-card-text>
    </u-card>
  `,
});

Elevation.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto my-8" elevation="16" max-width="344">
    <u-card-item>
      <u-card-title>Card title</u-card-title>
      <u-card-subtitle>Card subtitle secondary text</u-card-subtitle>
    </u-card-item>
    <u-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </u-card-text>
  </u-card>
</template>`,
    },
  },
};

export const Hover: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCardItem, UCardTitle, UCardSubtitle, UCardText },
  template: `
    <u-card class="mx-auto" max-width="344" hover>
      <u-card-item>
        <u-card-title>Card title</u-card-title>
        <u-card-subtitle>Card subtitle secondary text</u-card-subtitle>
      </u-card-item>
      <u-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </u-card-text>
    </u-card>
  `,
});

Hover.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" max-width="344" hover>
    <u-card-item>
      <u-card-title>Card title</u-card-title>
      <u-card-subtitle>Card subtitle secondary text</u-card-subtitle>
    </u-card-item>
    <u-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </u-card-text>
  </u-card>
</template>`,
    },
  },
};

export const Href: StoryFn<ComponentArgs> = () => ({
  components: { UCard },
  template: `
    <u-card
      append-icon="hugeicons:link-circle"
      class="mx-auto"
      href="https://github.com/vuetifyjs/vuetify/"
      max-width="344"
      prepend-icon="hugeicons:github"
      rel="noopener"
      subtitle="Check out the official repository"
      target="_blank"
      title="Vuetify on GitHub"
    ></u-card>
  `,
});

Href.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    append-icon="hugeicons:link-circle"
    class="mx-auto"
    href="https://github.com/vuetifyjs/vuetify/"
    max-width="344"
    prepend-icon="hugeicons:github"
    rel="noopener"
    subtitle="Check out the official repository"
    target="_blank"
    title="Vuetify on GitHub"
  ></u-card>
</template>`,
    },
  },
};

export const Link: StoryFn<ComponentArgs> = () => ({
  components: { UCard },
  template: `
    <u-card
      class="mx-auto"
      max-width="344"
      subtitle="Same looks, no anchor"
      title="Hover and click me"
      link
    ></u-card>
  `,
});

Link.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    max-width="344"
    subtitle="Same looks, no anchor"
    title="Hover and click me"
    link
  ></u-card>
</template>`,
    },
  },
};

export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { UCard },
  template: `
    <u-card
      class="mx-auto"
      max-width="344"
      subtitle="The card stays disabled"
      title="Disabled card"
      disabled
      link
    ></u-card>
  `,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    max-width="344"
    subtitle="The card stays disabled"
    title="Disabled card"
    disabled
    link
  ></u-card>
</template>`,
    },
  },
};

export const Image: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UBtn },
  template: `
    <u-card
      class="mx-auto"
      color="surface-variant"
      image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
      max-width="340"
      subtitle="Take a walk down the beach"
      title="Evening sunset"
    >
      <template v-slot:actions>
        <u-btn
          append-icon="hugeicons:arrow-right-01"
          color="red-lighten-2"
          text="Book Activity"
          variant="outlined"
          block
        ></u-btn>
      </template>
    </u-card>
  `,
});

Image.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    color="surface-variant"
    image="https://cdn.vuetifyjs.com/docs/images/cards/dark-beach.jpg"
    max-width="340"
    subtitle="Take a walk down the beach"
    title="Evening sunset"
  >
    <template v-slot:actions>
      <u-btn
        append-icon="hugeicons:arrow-right-01"
        color="red-lighten-2"
        text="Book Activity"
        variant="outlined"
        block
      ></u-btn>
    </template>
  </u-card>
</template>`,
    },
  },
};
