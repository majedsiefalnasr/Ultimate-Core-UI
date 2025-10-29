import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';

import {
  UAvatar,
  UBanner,
  UBtn,
  UBtnGroup,
  UCard,
  UCardActions,
  UCardItem,
  UCardText,
  UCardTitle,
  UChip,
  UCol,
  UContainer,
  UDialog,
  UDivider,
  UFadeTransition,
  UIcon,
  UItem,
  UItemGroup,
  UListItem,
  UListItemSubtitle,
  UListItemTitle,
  UListSubheader,
  UProgressLinear,
  URow,
  USheet,
  USpacer,
  USwitch,
  UTextField,
  UToolbar,
  UToolbarItems,
} from '../index';

interface ComponentArgs {
  // extended API
  active?: boolean;
  activeColor?: string;
  appendIcon?: string;
  baseColor?: string;
  density?: 'default' | 'comfortable' | 'compact';
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large' | string | number;
  block?: boolean;
  border?: string | number | boolean;
  rounded?: string | number | boolean;
  elevation?: string | number;
  exact?: boolean;
  flat?: boolean;
  height?: string | number;
  href?: string;
  ripple?: boolean;
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  icon?: boolean | string;
  loading?: string | boolean;
  location?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  position?: 'fixed' | 'static' | 'relative' | 'absolute' | 'sticky';
  prependIcon?: string;
  readonly?: boolean;
  replace?: boolean;
  spaced?: 'start' | 'end' | 'both';
  color?: string;
  base?: string;
  selectedClass?: string;
  slim?: boolean;
  stacked?: boolean;
  symbol?: unknown;
  tag?: string;
  text?: string | number | boolean;
  theme?: string;
  tile?: boolean;
  to?: string;
  value?: unknown;
  disabled?: boolean;
  label?: string;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Buttons',
  component: UBtn,
  parameters: {
    docs: {
      description: {
        component:
          'The u-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.',
      },
      import: `import { UBtn } from '@ultimate/core-ui/components'`,
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

          return `<u-btn${attrsString}>${args.label || 'Button'}</u-btn>`;
        },
      },
    },
    Primary: {
      description:
        'Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.',
    },
    Vuetify: {
      component: 'VBtn',
      content:
        "This component is built on top of Vuetify's VBtn component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/buttons/',
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The recommended placement of elements inside of v-btn is: Place text in the center. Place visual content around container text',
      Image: '/images/stories/ubtn.anatomy.png',
      data: [
        {
          element: '1. Container',
          description:
            'In addition to text, the Button container typically holds a v-icon component',
        },
        {
          element: '2. Icon (optional)',
          description: 'Leading media content intended to improve visual context',
        },
        {
          element: '3. Text',
          description: 'A content area for displaying text and other inline elements',
        },
      ],
    },
    api: {
      data: [
        {
          element: { title: 'v-btn', link: 'https://vuetifyjs.com/en/api/v-btn/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    active: {
      control: 'boolean',
      description:
        'Controls the active state of the item. This is typically used to highlight the component.',
      table: { type: { summary: 'boolean' } },
    },
    activeColor: {
      control: 'color',
      description: 'The applied color when the component is in an active state.',
    },
    appendIcon: {
      control: 'text',
      description: 'Creates a v-icon component after default content in the append slot.',
      table: { type: { summary: 'string' } },
    },
    baseColor: { control: 'color', description: 'Sets the color of component when not focused.' },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description:
        'The density prop is used to control the vertical space that the button takes up.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description:
        'The size property is used to control the size of the button and scales with density. The default size is undefined which essentially translates to medium.',
      table: {
        type: { summary: 'x-small | small | default | large | x-large | string | number' },
        defaultValue: { summary: 'default' },
      },
    },
    block: {
      control: 'boolean',
      description:
        'Block buttons extend the full available width of their container. This is useful for creating buttons that span the full width of a card or dialog.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    border: {
      control: 'text',
      description:
        'Applies utility border classes to the component. Omit the border- prefix (e.g., border="sm").',
      table: { type: { summary: 'string | number | boolean' }, defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'text',
      description:
        'Use the rounded prop to control the border radius of a button. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'rounded' } },
    },
    elevation: {
      control: 'text',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: { type: { summary: 'string | number' } },
    },
    exact: { control: 'boolean', description: 'Exactly match the link when using router props.' },
    flat: {
      control: 'boolean',
      description: 'Removes the button box shadow. Different than using the “flat” variant.',
    },
    height: { control: 'text', description: 'Sets the height for the component.' },
    href: {
      control: 'text',
      description: 'Designates the component as anchor and applies the href attribute.',
    },
    ripple: {
      control: 'boolean',
      description: 'The ripple property determines whether the v-ripple\n directive is used.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description: 'The variant prop gives you easy access to several different button styles.',
      table: {
        type: { summary: 'elevated | flat | tonal | outlined | text | plain' },
        defaultValue: { summary: 'elevated' },
      },
    },
    icon: {
      control: 'text',
      description:
        'Icons can be used for the primary content of a button. They are commonly used in the v-toolbar and v-app-bar components.',
      table: { type: { summary: 'boolean | string' } },
    },
    loading: {
      control: 'text',
      description: 'Displays linear progress bar. Can be a boolean or string color.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    location: { control: 'text', description: 'Specifies the component’s location.' },
    maxHeight: { control: 'text', description: 'Sets the maximum height for the component.' },
    maxWidth: { control: 'text', description: 'Sets the maximum width for the component.' },
    minHeight: { control: 'text', description: 'Sets the minimum height for the component.' },
    minWidth: { control: 'text', description: 'Sets the minimum width for the component.' },
    position: {
      control: { type: 'select' },
      options: ['fixed', 'static', 'relative', 'absolute', 'sticky'],
      description: 'Sets the position for the component.',
    },
    prependIcon: {
      control: 'text',
      description: 'Creates a v-icon in the prepend slot before default content.',
    },
    readonly: { control: 'boolean', description: 'Puts the button in a readonly state.' },
    replace: {
      control: 'boolean',
      description: 'Call router.replace() instead of push() when clicked.',
    },
    spaced: {
      control: { type: 'select' },
      options: ['start', 'end', 'both'],
      description: 'Adds space when using icon with label',
      table: { type: { summary: 'start | end | both' } },
    },
    color: {
      control: 'color',
      description: 'Theme color or CSS color',
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
    },
    slim: { control: 'boolean', description: 'Reduces padding to 0 8px.' },
    stacked: { control: 'boolean', description: 'Displays the button as a flex-column.' },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { defaultValue: { summary: 'button' } },
    },
    text: { control: 'text', description: 'Specify content text for the component.' },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
    },
    to: { control: 'text', description: 'Denotes the target route of the link.' },
    value: {
      control: 'text',
      description: 'The value used when the component is selected in a group.',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    label: { control: 'text', description: 'Default slot text (used by the Default story)' },
    width: { control: 'text', description: 'Sets the width for the component.' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<u-btn v-bind="args">{{ args.label }}</u-btn>',
});

Default.args = {
  color: 'primary',
  label: 'Primary',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<u-btn color="primary"></u-btn>`,
    },
  },
};

export const Variants = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row align="center" justify="center">
        <u-col cols="auto">
          <u-btn color="primary" variant="elevated">Elevated Button (Default)</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn color="primary" variant="flat">Flat Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn color="primary" variant="tonal">Tonal Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn color="primary" variant="outlined">Outlined Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn color="primary" variant="text">Text Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn color="primary" variant="plain">Plain Button</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Variants.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container>
            <u-row align="center" justify="center">
              <u-col cols="auto"><u-btn color="primary" variant="elevated">Elevated Button (Default)</u-btn></u-col>
              <u-col cols="auto"><u-btn color="primary" variant="flat">Flat Button</u-btn></u-col>
              <u-col cols="auto"><u-btn color="primary" variant="tonal">Tonal Button</u-btn></u-col>
              <u-col cols="auto"><u-btn color="primary" variant="outlined">Outlined Button</u-btn></u-col>
              <u-col cols="auto"><u-btn color="primary" variant="text">Text Button</u-btn></u-col>
              <u-col cols="auto"><u-btn color="primary" variant="plain">Plain Button</u-btn></u-col>
            </u-row>
          </u-container>
        </template>
      `,
    },
  },
};

export const Density = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row align="center" justify="center">
        <u-col cols="auto">
          <u-btn density="compact">Compact Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn density="comfortable">Comfortable Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn density="default">Default Button</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Density.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-container>
    <u-row align="center" justify="center">
      <u-col cols="auto"><u-btn density="compact">Compact Button</u-btn></u-col>
      <u-col cols="auto"><u-btn density="comfortable">Comfortable Button</u-btn></u-col>
      <u-col cols="auto"><u-btn density="default">Default Button</u-btn></u-col>
    </u-row>
  </u-container>
</template>
      `,
    },
  },
};

export const Sizes = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row align="center" justify="center">
        <u-col cols="auto">
          <u-btn size="x-small">Extra small Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn size="small">Small Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn>Regular Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn size="large">Large Button</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn size="x-large">X-Large Button</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Sizes.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-container>
    <u-row align="center" justify="center">
      <u-col cols="auto"><u-btn size="x-small">Extra small Button</u-btn></u-col>
      <u-col cols="auto"><u-btn size="small">Small Button</u-btn></u-col>
      <u-col cols="auto"><u-btn>Regular Button</u-btn></u-col>
      <u-col cols="auto"><u-btn size="large">Large Button</u-btn></u-col>
      <u-col cols="auto"><u-btn size="x-large">X-Large Button</u-btn></u-col>
    </u-row>
  </u-container>
</template>
      `,
    },
  },
};

export const Block = () => ({
  components: { UBtn },
  template: `<u-btn block>Block Button</u-btn>`,
});
Block.parameters = {
  docs: {
    source: { code: `<template>\n  <u-btn block>Block Button</u-btn>\n</template>` },
  },
};

export const Rounded = () => ({
  components: { UBtn },
  template: `
    <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center">
      <u-btn rounded="0">0</u-btn>
      <u-btn rounded="xs">xs</u-btn>
      <u-btn rounded="sm">sm</u-btn>
      <u-btn>default</u-btn>
      <u-btn rounded="lg">lg</u-btn>
      <u-btn rounded="xl">xl</u-btn>
      <u-btn rounded="pill">pill</u-btn>
      <u-btn rounded="circle" icon="mdi-heart"></u-btn>
    </div>
  `,
});
Rounded.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center">
            <u-btn rounded="0">0</u-btn>
            <u-btn rounded="xs">xs</u-btn>
            <u-btn rounded="sm">sm</u-btn>
            <u-btn>default</u-btn>
            <u-btn rounded="lg">lg</u-btn>
            <u-btn rounded="xl">xl</u-btn>
            <u-btn rounded="pill">pill</u-btn>
            <u-btn rounded="circle" icon="mdi-heart"></u-btn>
          </div>
        </template>
      `,
    },
  },
};

export const Elevation = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row align="center" justify="center">
        <u-col class="text-center" cols="12">
          <u-btn size="x-large">Default Elevation (2)</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="4" size="x-large">Elevation 4</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="8" size="x-large">Elevation 8</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="12" size="x-large">Elevation 12</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="16" size="x-large">Elevation 16</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="20" size="x-large">Elevation 20</u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn elevation="24" size="x-large">Elevation 24</u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Elevation.parameters = {
  docs: {
    source: {
      code: `
      <template>
        <u-container>
          <u-row align="center" justify="center">
            <u-col class="text-center" cols="12"><u-btn size="x-large">Default Elevation (2)</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="4" size="x-large">Elevation 4</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="8" size="x-large">Elevation 8</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="12" size="x-large">Elevation 12</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="16" size="x-large">Elevation 16</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="20" size="x-large">Elevation 20</u-btn></u-col>
            <u-col cols="auto"><u-btn elevation="24" size="x-large">Elevation 24</u-btn></u-col>
          </u-row>
        </u-container>
      </template>
      `,
    },
  },
};

export const Ripple = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row justify="center">
        <u-col cols="auto">
          <u-btn
            height="72"
            min-width="164"
          >
            With Ripple
          </u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn
            :ripple="false"
            height="72"
            min-width="164"
          >
            Without Ripple
          </u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Ripple.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container>
            <u-row justify="center">
              <u-col cols="auto">
                <u-btn height="72" min-width="164">With Ripple</u-btn>
              </u-col>
              <u-col cols="auto">
                <u-btn :ripple="false" height="72" min-width="164">Without Ripple</u-btn>
              </u-col>
            </u-row>
          </u-container>
        </template>
      `,
    },
  },
};

export const Icon = () => ({
  components: { UBtn, UContainer, URow, UCol },
  template: `
    <u-container>
      <u-row align="center" justify="center">
        <u-col cols="auto">
          <u-btn density="compact" icon="mdi-plus"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn density="comfortable" icon="mdi-tag"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn density="default" icon="mdi-open-in-new"></u-btn>
        </u-col>
      </u-row>

      <u-row align="center" justify="center">
        <u-col cols="auto">
          <u-btn icon="mdi-account" size="x-small"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn icon="mdi-plus" size="small"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn icon="mdi-tag"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn icon="mdi-open-in-new" size="large"></u-btn>
        </u-col>

        <u-col cols="auto">
          <u-btn icon="mdi-calendar" size="x-large"></u-btn>
        </u-col>
      </u-row>
    </u-container>
  `,
});
Icon.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container>
            <u-row align="center" justify="center">
              <u-col cols="auto"><u-btn density="compact" icon="mdi-plus" /></u-col>
              <u-col cols="auto"><u-btn density="comfortable" icon="mdi-tag" /></u-col>
              <u-col cols="auto"><u-btn density="default" icon="mdi-open-in-new" /></u-col>
            </u-row>
            <u-row align="center" justify="center">
              <u-col cols="auto"><u-btn icon="mdi-account" size="x-small" /></u-col>
              <u-col cols="auto"><u-btn icon="mdi-plus" size="small" /></u-col>
              <u-col cols="auto"><u-btn icon="mdi-tag" /></u-col>
              <u-col cols="auto"><u-btn icon="mdi-open-in-new" size="large" /></u-col>
              <u-col cols="auto"><u-btn icon="mdi-calendar" size="x-large" /></u-col>
            </u-row>
          </u-container>
        </template>
      `,
    },
  },
};

export const Loaders = () => ({
  components: { UBtn, UCard },
  setup() {
    const loading = ref(false);
    const load = () => {
      loading.value = true;
      setTimeout(() => (loading.value = false), 3000);
    };
    return { loading, load };
  },
  template: `
    <u-card
      class="mx-auto"
      max-width="450"
      text="Update your weak or re-used passwords with Password Checkup. It's free and only takes a few minutes. Click the Take Checkup button to get started."
      title="Strengthen your passwords"
    >
      <template v-slot:actions>
        <u-btn height="48">
          No Thanks
        </u-btn>

        <u-btn
          :loading="loading"
          class="flex-grow-1"
          height="48"
          variant="tonal"
          @click="load"
        >
          Take Checkup
        </u-btn>
      </template>
    </u-card>
  `,
});
Loaders.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card class="mx-auto" max-width="450" title="Strengthen your passwords" text="Update your weak or re-used passwords with Password Checkup. It's free and only takes a few minutes. Click the Take Checkup button to get started.">
            <template v-slot:actions>
              <u-btn height="48">No Thanks</u-btn>
              <u-btn :loading="loading" class="flex-grow-1" height="48" variant="tonal" @click="load">Take Checkup</u-btn>
            </template>
          </u-card>
        </template>
        <script setup>
          import { ref } from 'vue'
          const loading = ref(false)
          function load(){ loading.value = true; setTimeout(()=>loading.value=false, 3000) }
        </script>
      `,
    },
  },
};

export const IconColor = () => ({
  components: { UBtn, UIcon },
  template: `
    <div class="text-center">
      <u-btn
        append-icon="mdi-account-circle"
        prepend-icon="mdi-check-circle"
      >
        <template v-slot:prepend>
          <u-icon color="success"></u-icon>
        </template>

        Button

        <template v-slot:append>
          <u-icon color="warning"></u-icon>
        </template>
      </u-btn>
    </div>
  `,
});
IconColor.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="text-center">
            <u-btn append-icon="mdi-account-circle" prepend-icon="mdi-check-circle">
              <template #prepend><u-icon color="success" /></template>
              Button
              <template #append><u-icon color="warning" /></template>
            </u-btn>
          </div>
        </template>
      `,
    },
  },
};

export const Spaced = () => ({
  components: { UBtn, UContainer },
  template: `
    <u-container class="d-flex flex-wrap align-center justify-center ga-3">
      <u-btn height="70" prepend-icon="$prev" spaced="start" width="220">
        <span class="text-right">
          <div class="mb-1">Previous</div>
          <small class="text-medium-emphasis">spaced: start</small>
        </span>
      </u-btn>

      <u-btn append-icon="$next" height="70" prepend-icon="$prev" spaced="both" width="220">
        <span>
          <div class="mb-1">Navigate</div>
          <small class="text-medium-emphasis">spaced: both</small>
        </span>
      </u-btn>

      <u-btn append-icon="$next" height="70" spaced="end" width="220">
        <span class="text-left">
          <div class="mb-1">Next</div>
          <small class="text-medium-emphasis">spaced: end</small>
        </span>
      </u-btn>
    </u-container>
  `,
});
Spaced.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container class="d-flex flex-wrap align-center justify-center ga-3">
            <u-btn height="70" prepend-icon="$prev" spaced="start" width="220">
              <span class="text-right">
                <div class="mb-1">Previous</div>
                <small class="text-medium-emphasis">spaced: start</small>
              </span>
            </u-btn>
            <u-btn append-icon="$next" height="70" prepend-icon="$prev" spaced="both" width="220">
              <span>
                <div class="mb-1">Navigate</div>
                <small class="text-medium-emphasis">spaced: both</small>
              </span>
            </u-btn>
            <u-btn append-icon="$next" height="70" spaced="end" width="220">
              <span class="text-left">
                <div class="mb-1">Next</div>
                <small class="text-medium-emphasis">spaced: end</small>
              </span>
            </u-btn>
          </u-container>
        </template>
      `,
    },
  },
};

export const CustomLoader = () => ({
  components: { UBtn, UProgressLinear },
  setup() {
    const loading = ref(false);

    watch(loading, (val) => {
      if (!val) return;
      setTimeout(() => (loading.value = false), 2000);
    });

    return { loading };
  },
  template: `
    <div class="text-center">
      <u-btn
        :loading="loading"
        @click="loading = !loading"
      >
        Custom loader

        <template v-slot:loader>
          <u-progress-linear indeterminate></u-progress-linear>
        </template>
      </u-btn>
    </div>
  `,
});
CustomLoader.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="text-center">
            <u-btn :loading="loading" @click="loading = !loading">
              Custom loader
              <template #loader><u-progress-linear indeterminate /></template>
            </u-btn>
          </div>
        </template>
        <script setup>
          import { ref, watch } from 'vue'
          const loading = ref(false)
          watch(loading, val => { if (!val) return; setTimeout(()=>loading.value=false, 2000) })
        </script>
      `,
    },
  },
};

// Inside of bars
export const InsideOfBars = () => ({
  components: { UBtn, UToolbar, UDivider },
  template: `
    <u-toolbar>
      <template v-slot:prepend>
        <u-btn icon="mdi-arrow-left"></u-btn>
      </template>

      <u-btn class="ms-5" icon="mdi-archive-plus-outline"></u-btn>
      <u-btn icon="mdi-alert-circle-outline"></u-btn>
      <u-btn icon="mdi-delete-outline"></u-btn>

      <template v-if="$vuetify.display.smAndUp">
        <u-divider
          class="mx-3 align-self-center"
          length="24"
          thickness="2"
          vertical
        ></u-divider>

        <u-btn icon="mdi-folder-outline"></u-btn>
        <u-btn icon="mdi-tag-outline"></u-btn>
        <u-btn icon="mdi-dots-vertical"></u-btn>
      </template>
    </u-toolbar>
  `,
});
InsideOfBars.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-toolbar>
            <template #prepend><u-btn icon="mdi-arrow-left" /></template>
            <u-btn class="ms-5" icon="mdi-archive-plus-outline" />
            <u-btn icon="mdi-alert-circle-outline" />
            <u-btn icon="mdi-delete-outline" />
            <template v-if="$vuetify.display.smAndUp">
              <u-divider class="mx-3 align-self-center" length="24" thickness="2" vertical />
              <u-btn icon="mdi-folder-outline" />
              <u-btn icon="mdi-tag-outline" />
              <u-btn icon="mdi-dots-vertical" />
            </template>
          </u-toolbar>
        </template>
      `,
    },
  },
};

// Discord event
export const DiscordEvent = () => ({
  components: {
    UBtn,
    UCard,
    USheet,
    UCardItem,
    UCardTitle,
    UIcon,
    UDivider,
    USpacer,
    UAvatar,
    UChip,
  },
  template: `
    <u-card
      class="mx-auto"
      color="#36393f"
      max-width="650"
      min-height="350"
      theme="dark"
      variant="flat"
    >
      <u-sheet color="#202225">
        <u-card-item>
          <template v-slot:prepend>
            <u-card-title>
              <u-icon
                icon="mdi-calendar"
                start
              ></u-icon>

              1 Event
            </u-card-title>
          </template>

          <u-divider class="mx-2" vertical></u-divider>

          <u-btn
            class="text-none text-subtitle-1"
            color="#5865f2"
            size="small"
            variant="flat"
          >
            Create Event
          </u-btn>

          <template v-slot:append>
            <u-btn
              icon="$close"
              size="large"
              variant="text"
            ></u-btn>
          </template>
        </u-card-item>
      </u-sheet>

      <u-card
        class="ma-4"
        color="#2f3136"
        rounded="lg"
        variant="flat"
      >
        <u-card-item>
          <u-card-title class="text-body-2 d-flex align-center">
            <u-icon
              color="#949cf7"
              icon="mdi-calendar"
              start
            ></u-icon>

            <span class="text-medium-emphasis font-weight-bold">1 Fri Dec 16th - 9:00 PM</span>

            <u-spacer></u-spacer>

            <u-avatar
              image="https://cdn.vuetifyjs.com/images/john-smirk.png"
              size="x-small"
            ></u-avatar>

            <u-chip
              class="ms-2 text-medium-emphasis"
              color="grey-darken-4"
              prepend-icon="mdi-account-multiple"
              size="small"
              text="81"
              variant="flat"
            ></u-chip>
          </u-card-title>

          <div class="py-2">
            <div class="text-h6">Live Q&A</div>

            <div class="font-weight-light text-medium-emphasis">
              Join the Vuetify team for a live Question and Answer session.
            </div>
          </div>
        </u-card-item>

        <u-divider></u-divider>

        <div class="pa-4 d-flex align-center">
          <u-icon
            color="disabled"
            icon="mdi-broadcast"
            start
          ></u-icon>

          <u-icon
            color="#949cf7"
            icon="mdi-video-vintage"
            size="x-small"
          ></u-icon>

          <span class="text-caption text-medium-emphasis ms-1 font-weight-light">
            streaming
          </span>

          <u-spacer></u-spacer>

          <u-btn
            icon="mdi-dots-horizontal"
            variant="text"
          ></u-btn>

          <u-btn
            class="me-2 text-none"
            color="#4f545c"
            prepend-icon="mdi-export-variant"
            variant="flat"
          >
            Share
          </u-btn>

          <u-btn
            class="text-none"
            prepend-icon="mdi-check"
            variant="text"
            border
          >
            Interested
          </u-btn>
        </div>
      </u-card>
    </u-card>
  `,
});
DiscordEvent.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card class="mx-auto" color="#36393f" max-width="650" min-height="350" theme="dark" variant="flat">
            <u-sheet color="#202225">
              <u-card-item>
                <template #prepend>
                  <u-card-title>
                    <u-icon icon="mdi-calendar" start />
                    1 Event
                  </u-card-title>
                </template>
                <u-divider class="mx-2" vertical />
                <u-btn class="text-none text-subtitle-1" color="#5865f2" size="small" variant="flat">Create Event</u-btn>
                <template #append>
                  <u-btn icon="$close" size="large" variant="text" />
                </template>
              </u-card-item>
            </u-sheet>
            <u-card class="ma-4" color="#2f3136" rounded="lg" variant="flat">
              <u-card-item>
                <u-card-title class="text-body-2 d-flex align-center">
                  <u-icon color="#949cf7" icon="mdi-calendar" start />
                  <span class="text-medium-emphasis font-weight-bold">1 Fri Dec 16th - 9:00 PM</span>
                  <u-spacer />
                  <u-avatar image="https://cdn.vuetifyjs.com/images/john-smirk.png" size="x-small" />
                  <u-chip class="ms-2 text-medium-emphasis" color="grey-darken-4" prepend-icon="mdi-account-multiple" size="small" text="81" variant="flat" />
                </u-card-title>
                <div class="py-2">
                  <div class="text-h6">Live Q&A</div>
                  <div class="font-weight-light text-medium-emphasis">Join the Vuetify team for a live Question and Answer session.</div>
                </div>
              </u-card-item>
              <u-divider />
              <div class="pa-4 d-flex align-center">
                <u-icon color="disabled" icon="mdi-broadcast" start />
                <u-icon color="#949cf7" icon="mdi-video-vintage" size="x-small" />
                <span class="text-caption text-medium-emphasis ms-1 font-weight-light">streaming</span>
                <u-spacer />
                <u-btn icon="mdi-dots-horizontal" variant="text" />
                <u-btn class="me-2 text-none" color="#4f545c" prepend-icon="mdi-export-variant" variant="flat">Share</u-btn>
                <u-btn class="text-none" prepend-icon="mdi-check" variant="text" border>Interested</u-btn>
              </div>
            </u-card>
          </u-card>
        </template>
      `,
    },
  },
};

// Survey group
export const SurveyGroup = () => ({
  components: { UBtn, UCard, UItemGroup, UItem },
  setup() {
    const model = ref<number | null>(null);
    return { model };
  },
  template: `
    <u-card
      class="px-2 mx-auto"
      max-width="300"
      rounded="lg"
      text="How satisfied are you with developing using Vuetify?"
      theme="dark"
      title="SURVEY"
      variant="flat"
    >
      <template v-slot:append>
        <div class="me-n2">
          <u-btn
            density="comfortable"
            icon="$close"
            variant="plain"
          ></u-btn>
        </div>
      </template>

      <u-item-group
        v-model="model"
        class="d-flex justify-sm-space-between px-6 pt-2 pb-6"
      >
        <u-item
          v-for="n in 5"
          :key="n"
        >
          <template v-slot:default="{ toggle }">
            <u-btn
              :active="model != null && model + 1 >= n"
              :icon="'mdi-numeric-' + n"
              height="40"
              variant="text"
              width="40"
              border
              @click="toggle"
            ></u-btn>
          </template>
        </u-item>
      </u-item-group>
    </u-card>
  `,
});
SurveyGroup.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card class="px-2 mx-auto" max-width="300" rounded="lg" text="How satisfied are you with developing using Vuetify?" theme="dark" title="SURVEY" variant="flat">
            <template #append>
              <div class="me-n2">
                <u-btn density="comfortable" icon="$close" variant="plain" />
              </div>
            </template>
            <u-item-group v-model="model" class="d-flex justify-sm-space-between px-6 pt-2 pb-6">
              <u-item v-for="n in 5" :key="n">
                <template #default="{ toggle }">
                  <u-btn :active="model != null && model + 1 >= n" :icon="'mdi-numeric-' + n" height="40" variant="text" width="40" border @click="toggle" />
                </template>
              </u-item>
            </u-item-group>
          </u-card>
        </template>
        <script setup>
          import { ref } from 'vue'
          const model = ref(null)
        </script>
      `,
    },
  },
};

// Tax form confirmation
export const TaxFormConfirmation = () => ({
  components: { UBtn, UCard, UCardTitle, UCardText, UTextField },
  setup() {
    const loading = ref(false);
    const toggle = () => {
      loading.value = true;
      setTimeout(() => (loading.value = false), 2000);
    };
    return { loading, toggle };
  },
  template: `
    <u-card
      class="mx-auto"
      elevation="1"
      max-width="500"
    >
      <u-card-title class="py-5 font-weight-black">Securely access your tax form</u-card-title>

      <u-card-text>
        To download your tax form from GitHub Sponsors on Stripe Express, you must also verify the Tax ID number used on your tax forms, as they contain sensitive personal information.
      </u-card-text>

      <u-card-text>
        <div class="text-subtitle-2 font-weight-black mb-1">Last 4 digits of your SSN</div>

        <u-text-field
          label="Enter value here"
          variant="outlined"
          single-line
        ></u-text-field>

        <u-btn
          :disabled="loading"
          :loading="loading"
          class="text-none mb-4"
          color="indigo-darken-3"
          size="x-large"
          variant="flat"
          block
          @click="toggle"
        >
          Verify and continue
        </u-btn>

        <u-btn
          class="text-none"
          color="grey-lighten-3"
          size="x-large"
          variant="flat"
          block
        >
          Cancel
        </u-btn>
      </u-card-text>
    </u-card>
  `,
});
TaxFormConfirmation.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card class="mx-auto" elevation="1" max-width="500">
            <u-card-title class="py-5 font-weight-black">Securely access your tax form</u-card-title>
            <u-card-text>
              To download your tax form from GitHub Sponsors on Stripe Express, you must also verify the Tax ID number used on your tax forms, as they contain sensitive personal information.
            </u-card-text>
            <u-card-text>
              <div class="text-subtitle-2 font-weight-black mb-1">Last 4 digits of your SSN</div>
              <u-text-field label="Enter value here" variant="outlined" single-line />
              <u-btn :disabled="loading" :loading="loading" class="text-none mb-4" color="indigo-darken-3" size="x-large" variant="flat" block @click="toggle">Verify and continue</u-btn>
              <u-btn class="text-none" color="grey-lighten-3" size="x-large" variant="flat" block>Cancel</u-btn>
            </u-card-text>
          </u-card>
        </template>
        <script setup>
          import { ref } from 'vue'
          const loading = ref(false)
          function toggle(){ loading.value = true; setTimeout(()=>loading.value=false, 2000) }
        </script>
      `,
    },
  },
};

// Dialog action
export const DialogAction = () => ({
  components: { UBtn, UCard, UIcon, UDivider, UFadeTransition, USheet },
  setup() {
    const dialog = ref(true);
    return { dialog };
  },
  template: `
    <u-sheet
      class="position-relative"
      min-height="450"
    >
      <div class="position-absolute d-flex align-center justify-center w-100 h-100">
        <u-btn
          color="deep-purple-darken-2"
          size="x-large"
          @click="dialog = !dialog"
        >
          Open Dialog
        </u-btn>
      </div>

      <u-fade-transition hide-on-leave>
        <u-card
          v-if="dialog"
          append-icon="$close"
          class="mx-auto"
          elevation="16"
          max-width="500"
          title="Send a receipt"
        >
          <template v-slot:append>
            <u-btn icon="$close" variant="text" @click="dialog = false"></u-btn>
          </template>

          <u-divider></u-divider>

          <div class="py-12 text-center">
            <u-icon
              class="mb-6"
              color="success"
              icon="mdi-check-circle-outline"
              size="128"
            ></u-icon>

            <div class="text-h4 font-weight-bold">This receipt was sent</div>
          </div>

          <u-divider></u-divider>

          <div class="pa-4 text-end">
            <u-btn
              class="text-none"
              color="medium-emphasis"
              min-width="92"
              variant="outlined"
              rounded
              @click="dialog = false"
            >
              Close
            </u-btn>
          </div>
        </u-card>
      </u-fade-transition>
    </u-sheet>
  `,
});
DialogAction.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-sheet class="position-relative" min-height="450">
            <div class="position-absolute d-flex align-center justify-center w-100 h-100">
              <u-btn color="deep-purple-darken-2" size="x-large" @click="dialog = !dialog">Open Dialog</u-btn>
            </div>
            <u-fade-transition hide-on-leave>
              <u-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="500" title="Send a receipt">
                <template #append><u-btn icon="$close" variant="text" @click="dialog = false" /></template>
                <u-divider />
                <div class="py-12 text-center">
                  <u-icon class="mb-6" color="success" icon="mdi-check-circle-outline" size="128" />
                  <div class="text-h4 font-weight-bold">This receipt was sent</div>
                </div>
                <u-divider />
                <div class="pa-4 text-end">
                  <u-btn class="text-none" color="medium-emphasis" min-width="92" variant="outlined" rounded @click="dialog = false">Close</u-btn>
                </div>
              </u-card>
            </u-fade-transition>
          </u-sheet>
        </template>
        <script setup>
          import { ref } from 'vue'
          const dialog = ref(true)
        </script>
      `,
    },
  },
};

// Cookie settings
export const CookieSettings = () => ({
  components: {
    UBtn,
    UBanner,
    UDialog,
    UCard,
    UCardText,
    UCardActions,
    UDivider,
    UListSubheader,
    USwitch,
  },
  setup() {
    const dialog = ref(false);
    const advertising = ref(true);
    const performance = ref(true);
    return { dialog, advertising, performance };
  },
  template: `
    <u-banner
      avatar="https://cdn.vuetifyjs.com/docs/images/logos/v.svg"
      stacked
    >
      <template v-slot:text>
        Vuetify uses cookies to enable and import the use of the website. Please see our <a href="https://www.iubenda.com/privacy-policy/76325752/cookie-policy" target="_blank">Privacy Policy</a> for more information. By clicking "Accept Cookies" or continuing to use the site, you agree to the use of cookies.
      </template>

      <template v-slot:actions>
        <u-dialog v-model="dialog" max-width="500">
          <template v-slot:activator="{ props }">
            <u-btn
              class="text-none"
              color="blue-darken-4"
              rounded="0"
              variant="outlined"
              v-bind="props"
            >
              Manage Cookies
            </u-btn>
          </template>

          <u-card title="Cookie Settings">
            <u-card-text>
              <p class="pb-4">
                Vuetify websites use cookies to deliver and improve the visitor experience. Learn more about the cookies we use on our Cookie Policy page.
              </p>

              <u-list-subheader class="font-weight-black text-high-emphasis">Required Cookies</u-list-subheader>

              <p class="mb-4">These cookies are required for the site to function and cannot be turned off.</p>

              <u-list-subheader class="font-weight-black text-high-emphasis">Performance Cookies</u-list-subheader>

              <u-switch
                v-model="performance"
                :label="performance ? 'On' : 'Off'"
                color="blue-darken-4"
                density="compact"
                hide-details
                inline
                inset
              ></u-switch>

              <p class="mb-4">Counts website visits and clicks to understand where people most engage with links to make the experience better.</p>

              <u-list-subheader class="font-weight-black text-high-emphasis">Advertising Cookies</u-list-subheader>

              <u-switch
                v-model="advertising"
                :label="advertising ? 'On' : 'Off'"
                color="blue-darken-4"
                density="compact"
                hide-details
                inline
                inset
              ></u-switch>

              <p class="mb-16">Set by our advertising partners, these cookies are used to build a profile of your interests and show you relevant ads on other sites. They do not store personal information, but are based on uniquely identifying your browser and internet device.</p>
            </u-card-text>

            <u-divider></u-divider>

            <u-card-actions class="justify-center px-6 py-3">
              <u-btn
                class="flex-grow-1 text-none"
                color="blue-darken-4"
                rounded="0"
                variant="plain"
                @click="dialog=false"
              >
                Decline All
              </u-btn>

              <u-btn
                class="text-white flex-grow-1 text-none"
                color="blue-darken-4"
                rounded="0"
                variant="flat"
                @click="dialog=false"
              >
                Save and Accept
              </u-btn>
            </u-card-actions>
          </u-card>
        </u-dialog>

        <u-btn
          class="text-none ms-4 text-white"
          color="blue-darken-4"
          rounded="0"
          variant="flat"
        >
          Accept Cookies
        </u-btn>
      </template>
    </u-banner>
  `,
});
CookieSettings.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-banner avatar="https://cdn.vuetifyjs.com/docs/images/logos/v.svg" stacked>
            <template #text>
              Vuetify uses cookies to enable and import the use of the website. Please see our <a href="https://www.iubenda.com/privacy-policy/76325752/cookie-policy" target="_blank">Privacy Policy</a> for more information. By clicking "Accept Cookies" or continuing to use the site, you agree to the use of cookies.
            </template>
            <template #actions>
              <u-dialog v-model="dialog" max-width="500">
                <template #activator="{ props }">
                  <u-btn class="text-none" color="blue-darken-4" rounded="0" variant="outlined" v-bind="props">Manage Cookies</u-btn>
                </template>
                <u-card title="Cookie Settings">
                  <u-card-text>
                    <p class="pb-4">Vuetify websites use cookies to deliver and improve the visitor experience. Learn more about the cookies we use on our Cookie Policy page.</p>
                    <u-list-subheader class="font-weight-black text-high-emphasis">Required Cookies</u-list-subheader>
                    <p class="mb-4">These cookies are required for the site to function and cannot be turned off.</p>
                    <u-list-subheader class="font-weight-black text-high-emphasis">Performance Cookies</u-list-subheader>
                    <u-switch v-model="performance" :label="performance ? 'On' : 'Off'" color="blue-darken-4" density="compact" hide-details inline inset />
                    <p class="mb-4">Counts website visits and clicks to understand where people most engage with links to make the experience better.</p>
                    <u-list-subheader class="font-weight-black text-high-emphasis">Advertising Cookies</u-list-subheader>
                    <u-switch v-model="advertising" :label="advertising ? 'On' : 'Off'" color="blue-darken-4" density="compact" hide-details inline inset />
                    <p class="mb-16">Set by our advertising partners, these cookies are used to build a profile of your interests and show you relevant ads on other sites. They do not store personal information, but are based on uniquely identifying your browser and internet device.</p>
                  </u-card-text>
                  <u-divider />
                  <u-card-actions class="justify-center px-6 py-3">
                    <u-btn class="flex-grow-1 text-none" color="blue-darken-4" rounded="0" variant="plain" @click="dialog=false">Decline All</u-btn>
                    <u-btn class="text-white flex-grow-1 text-none" color="blue-darken-4" rounded="0" variant="flat" @click="dialog=false">Save and Accept</u-btn>
                  </u-card-actions>
                </u-card>
              </u-dialog>
              <u-btn class="text-none ms-4 text-white" color="blue-darken-4" rounded="0" variant="flat">Accept Cookies</u-btn>
            </template>
          </u-banner>
        </template>
        <script setup>
          import { ref } from 'vue'
          const dialog = ref(false)
          const advertising = ref(true)
          const performance = ref(true)
        </script>
      `,
    },
  },
};

// Readonly buttons
export const ReadonlyButtons = () => ({
  components: { UBtn, UListItem, UListItemTitle, UListItemSubtitle, UIcon, UFadeTransition },
  setup() {
    const isSubscriber = ref(false);
    return { isSubscriber };
  },
  template: `
    <u-list-item
      base-color="surface-light"
      border="opacity-50 md"
      lines="two"
      max-width="796"
      prepend-avatar="https://cdn.vuetifyjs.com/docs/images/one/logos/one.png"
      rounded="lg"
      variant="flat"
    >
      <u-list-item-title>
        <span class="text-h6">Vuetify One Subscriber</span>
      </u-list-item-title>

      <u-list-item-subtitle :opacity="isSubscriber ? .8 : undefined">
        <u-fade-transition mode="out-in">
          <div
            v-if="isSubscriber"
            key="subscribed"
            class="text-success text-caption"
          >
            <u-icon icon="mdi-medal" size="1em"></u-icon>
            $2.99 /month
          </div>

          <div
            v-else
            key="not-subscribed"
            class="text-caption"
          >
            Support Vuetify by becoming a Subscriber
          </div>
        </u-fade-transition>
      </u-list-item-subtitle>

      <template v-slot:append>
        <u-fade-transition mode="out-in">
          <u-btn
            :key="'subscribe-' + isSubscriber"
            :border="'thin ' + (isSubscriber ? 'error' : 'success')"
            :color="isSubscriber ? 'error' : 'success'"
            :prepend-icon="isSubscriber ? 'mdi-close' : 'mdi-email'"
            :slim="isSubscriber"
            :text="isSubscriber ? 'Cancel' : 'Subscribe'"
            :variant="isSubscriber ? 'plain' : 'tonal'"
            class="me-2 text-none"
            size="small"
            @click="isSubscriber = !isSubscriber"
          ></u-btn>
        </u-fade-transition>

        <u-fade-transition mode="out-in">
          <u-btn
            :key="'info-' + isSubscriber"
            :color="isSubscriber ? 'success' : 'primary'"
            :prepend-icon="isSubscriber ? 'mdi-check' : 'mdi-open-in-new'"
            :readonly="isSubscriber"
            :text="isSubscriber ? 'Subscribed' : 'More Info'"
            class="text-none"
            size="small"
            variant="flat"
          ></u-btn>
        </u-fade-transition>
      </template>
    </u-list-item>
  `,
});
ReadonlyButtons.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-list-item base-color="surface-light" border="opacity-50 md" lines="two" max-width="796" prepend-avatar="https://cdn.vuetifyjs.com/docs/images/one/logos/one.png" rounded="lg" variant="flat">
            <u-list-item-title><span class="text-h6">Vuetify One Subscriber</span></u-list-item-title>
            <u-list-item-subtitle :opacity="isSubscriber ? .8 : undefined">
              <u-fade-transition mode="out-in">
                <div v-if="isSubscriber" key="subscribed" class="text-success text-caption">
                  <u-icon icon="mdi-medal" size="1em" /> $2.99 /month
                </div>
                <div v-else key="not-subscribed" class="text-caption">Support Vuetify by becoming a Subscriber</div>
              </u-fade-transition>
            </u-list-item-subtitle>
            <template #append>
              <u-fade-transition mode="out-in">
                <u-btn :key="'subscribe-' + isSubscriber" :border="'thin ' + (isSubscriber ? 'error' : 'success')" :color="isSubscriber ? 'error' : 'success'" :prepend-icon="isSubscriber ? 'mdi-close' : 'mdi-email'" :slim="isSubscriber" :text="isSubscriber ? 'Cancel' : 'Subscribe'" :variant="isSubscriber ? 'plain' : 'tonal'" class="me-2 text-none" size="small" @click="isSubscriber = !isSubscriber" />
              </u-fade-transition>
              <u-fade-transition mode="out-in">
                <u-btn :key="'info-' + isSubscriber" :color="isSubscriber ? 'success' : 'primary'" :prepend-icon="isSubscriber ? 'mdi-check' : 'mdi-open-in-new'" :readonly="isSubscriber" :text="isSubscriber ? 'Subscribed' : 'More Info'" class="text-none" size="small" variant="flat" />
              </u-fade-transition>
            </template>
          </u-list-item>
        </template>
        <script setup>
          import { shallowRef } from 'vue'
          const isSubscriber = shallowRef(false)
        </script>
      `,
    },
  },
};

// Button groups
export const ButtonGroups = () => ({
  components: { UBtn, UBtnGroup },
  template: `
    <div class="d-flex align-center flex-column pa-6">
      <u-btn-group
        variant="outlined"
        divided
      >
        <u-btn icon="mdi-format-align-left"></u-btn>
        <u-btn icon="mdi-format-align-center"></u-btn>
        <u-btn icon="mdi-format-align-right"></u-btn>
        <u-btn icon="mdi-format-align-justify"></u-btn>
      </u-btn-group>
    </div>
  `,
});
ButtonGroups.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <div class="d-flex align-center flex-column pa-6">
            <u-btn-group variant="outlined" divided>
              <u-btn icon="mdi-format-align-left" />
              <u-btn icon="mdi-format-align-center" />
              <u-btn icon="mdi-format-align-right" />
              <u-btn icon="mdi-format-align-justify" />
            </u-btn-group>
          </div>
        </template>
      `,
    },
  },
};

// Toolbars and AppBars
export const ToolbarsAndAppBars = () => ({
  components: { UBtn, UToolbar, UToolbarItems, UDivider },
  template: `
    <u-toolbar title="Toolbar">
      <u-toolbar-items>
        <u-btn>Dashboard</u-btn>

        <u-btn>Resources</u-btn>
      </u-toolbar-items>

      <u-divider class="mx-2" vertical></u-divider>

      <u-btn icon="mdi-dots-vertical"></u-btn>
    </u-toolbar>
  `,
});
ToolbarsAndAppBars.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-toolbar title="Toolbar">
            <u-toolbar-items>
              <u-btn>Dashboard</u-btn>
              <u-btn>Resources</u-btn>
            </u-toolbar-items>
            <u-divider class="mx-2" vertical />
            <u-btn icon="mdi-dots-vertical" />
          </u-toolbar>
        </template>
      `,
    },
  },
};
