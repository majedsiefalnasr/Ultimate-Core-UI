import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UAvatar, UBtn, UChip, UCombobox, UIcon, ULabel } from '../index';

interface ComponentArgs {
  // Theme color or CSS color
  color?: string;
  // Default slot text (used by the Default story)
  text?: string;
  // Visual variant
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  // When true, chip shows a close icon and can be controlled via v-model / modelValue
  closable?: boolean;
  // v-model binding (visibility) for closable chips
  modelValue?: boolean;
  // Adjust vertical spacing without changing font size
  density?: 'default' | 'comfortable' | 'compact';
  // Size of the chip
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  // Allows dragging the chip with mouse
  draggable?: boolean;
  // Render as a label chip (uses v-card border-radius)
  label?: boolean;
  // Disable ripple when false
  ripple?: boolean | Record<string, unknown>;
  // Prepend icon name (Material Design Icons)
  prependIcon?: string;
  // Append icon name (Material Design Icons)
  appendIcon?: string;
  // Appends a v-avatar component after default content
  appendAvatar?: string;
  // Prepends a v-avatar component before default content
  prependAvatar?: string;
  // Change the default icon used for close chips
  closeIcon?: string;
  // Change the default icon used for filter chips
  filterIcon?: string;
  // Displays a selection icon when selected
  filter?: boolean;
  // Remove v-avatar padding
  pill?: boolean;
  // Sets the border-radius
  rounded?: string | number | boolean;
  // Sets the component's height, padding and font size
  tile?: boolean;
  // The value used when a child of a v-chip-group
  value?: unknown;
  // The class applied to the component when it matches the current route
  activeClass?: string;
  // Sets the color of component when not focused
  baseColor?: string;
  // Applies utility border classes to the component
  border?: string | number | boolean;
  // Text used for aria-label on the close button
  closeLabel?: string;
  // Designates an elevation applied to the component between 0 and 24
  elevation?: string | number;
  // Exactly match the link
  exact?: boolean;
  // Designates the component as anchor and applies the href attribute
  href?: string;
  // Designates that the component is a link
  link?: boolean;
  // Setting replace prop will call router.replace() instead of router.push()
  replace?: boolean;
  // Configure the active CSS class applied when an item is selected
  selectedClass?: string;
  // Specify a custom tag used on the root element
  tag?: string;
  // Specify a theme for this component and all of its children
  theme?: string;
  // Denotes the target route of the link
  to?: string | Record<string, unknown>;
  disabled?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Chips',
  component: UChip,
  parameters: {
    docs: {
      description: {
        component:
          'The u-chip component is used to convey small pieces of information. Using the close property, the chip becomes interactive, allowing user interaction. This component is used by the u-chip-group for advanced selection options.',
      },
      import: `import { UChip } from '@ultimate/core-ui/components'`,
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

          return `<u-chip${attrsString}></u-chip>`;
        },
      },
    },
    Primary: {
      description:
        'Chips come in the following variations: closeable, filter, outlined, pill. The default slot of u-chip will also accept avatars and icons alongside text.',
    },
    Vuetify: {
      component: 'VChip',
      content:
        "This component is built on top of Vuetify's VChip component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/chips/',
    },
  },
  argTypes: {
    activeClass: {
      control: 'text',
      description:
        'The class applied to the component when it matches the current route. Find more information about the active-class prop on the vue-router documentation.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendAvatar: {
      control: 'text',
      description: 'Appends a v-avatar component after default content in the append slot.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendIcon: {
      control: 'text',
      description:
        'Creates a v-icon component after default content in the append slot. Icon name (Material Design Icons) to append, e.g. append-icon="mdi-close"',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    baseColor: {
      control: 'color',
      description: 'Sets the color of component when not focused.',
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
    closable: {
      control: 'boolean',
      description:
        'Adds remove button and then a chip can be closed. Closable chips can be controlled with a v-model (modelValue). You can also listen to the click:close event to know when a chip has been closed.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    closeIcon: {
      control: 'text',
      description: 'Change the default icon used for close chips.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$delete'" } },
    },
    closeLabel: {
      control: 'text',
      description:
        'Text used for aria-label on the close button in close chips. Can also be customized globally in Internationalization.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$vuetify.close'" } },
    },
    color: {
      control: 'color',
      description:
        "Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Any color from the Material Design palette or CSS color can be used to change a chip's color.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
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
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    draggable: {
      control: 'boolean',
      description: 'Makes the chip draggable.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    exact: {
      control: 'boolean',
      description:
        "Exactly match the link. Without this, '/' will match every route. You can find more information about the exact prop on the vue-router documentation.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    filter: {
      control: 'boolean',
      description: 'Displays a selection icon when selected.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    filterIcon: {
      control: 'text',
      description: 'Change the default icon used for filter chips.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$complete'" } },
    },
    href: {
      control: 'text',
      description: 'Designates the component as anchor and applies the href attribute.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    label: {
      control: 'boolean',
      description: 'Applies a medium size border radius. Label chips use the v-card border-radius.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    link: {
      control: 'boolean',
      description:
        'Designates that the component is a link. This is automatic when using the href or to prop.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    pill: {
      control: 'boolean',
      description: 'Remove v-avatar padding.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    prependAvatar: {
      control: 'text',
      description: 'Prepends a v-avatar component in the prepend slot before default content.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    prependIcon: {
      control: 'text',
      description:
        'Creates a v-icon component in the prepend slot before default content. Icon name (Material Design Icons) to prepend, e.g. prepend-icon="mdi-account-circle"',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    replace: {
      control: 'boolean',
      description:
        'Setting replace prop will call router.replace() instead of router.push() when clicked, so the navigation will not leave a history record. You can find more information about the replace prop on the vue-router documentation.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive. Disable ripple when set to false.',
      table: {
        type: { summary: 'boolean | { class: string }' },
        defaultValue: { summary: 'true' },
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
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description:
        'Sets the height, padding and the font size of the component. Accepts only predefined options: x-small, small, default, large, and x-large.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'default' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'span' } },
    },
    text: {
      control: 'text',
      description:
        'Specify content text for the component. Default slot text (used by the Default story)',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
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
      table: { type: { summary: 'string | object' }, defaultValue: { summary: 'undefined' } },
    },
    value: {
      control: 'text',
      description: 'The value used when a child of a v-chip-group.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description:
        'Applies a distinct style to the component. The variant prop gives you easy access to several different button styles. Available variants are: elevated, flat, tonal (default), outlined, text, and plain. Outlined chips inherit their border color from the current text color.',
      table: {
        type: { summary: 'text | flat | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'tonal' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UChip },
  setup() {
    return { args };
  },
  template: '<u-chip v-bind="args"></u-chip>',
});

Default.args = {
  text: 'Chip',
  color: 'primary',
} as ComponentArgs;

export const Closable: StoryFn<ComponentArgs> = () => ({
  components: { UChip, UBtn },
  setup() {
    const chip = ref(true);
    return { chip };
  },
  template: `
    <div class="text-center">
      <u-chip
        v-if="chip"
        class="ma-2"
        closable
        @click:close="chip = false"
      >
        Closable
      </u-chip>

      <u-btn
        v-if="!chip"
        color="primary"
        @click="chip = true"
      >
        Reset Chip
      </u-btn>
    </div>
  `,
});

Closable.parameters = {
  docs: {
    description: {
      story:
        'Closable chips can be controlled with a v-model. You can also listen to the click:close event if you want to know when a chip has been closed.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip
      v-if="chip"
      class="ma-2"
      closable
      @click:close="chip = false"
    >
      Closable
    </u-chip>

    <u-btn
      v-if="!chip"
      color="primary"
      @click="chip = true"
    >
      Reset Chip
    </u-btn>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const chip = ref(true)
</script>`,
    },
  },
};

export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { UChip },
  template: `
    <div>
      <div class="d-flex justify-center ga-2">
        <u-chip>
          Default
        </u-chip>

        <u-chip color="primary">
          Primary
        </u-chip>

        <u-chip color="secondary">
          Secondary
        </u-chip>

        <u-chip color="red">
          Red
        </u-chip>

        <u-chip color="green">
          Green
        </u-chip>
      </div>
      <div class="d-flex justify-center ga-2 mt-2">
        <u-chip variant="flat">
          Default flat
        </u-chip>

        <u-chip color="primary" variant="flat">
          Primary flat
        </u-chip>

        <u-chip color="secondary" variant="flat">
          Secondary flat
        </u-chip>

        <u-chip color="red" variant="flat">
          Red flat
        </u-chip>

        <u-chip color="green" variant="flat">
          Green flat
        </u-chip>
      </div>
    </div>
  `,
});

Colors.parameters = {
  docs: {
    description: {
      story: 'Any color from the Material Design palette can be used to change a chips color.',
    },
    source: {
      code: `<template>
  <div class="d-flex justify-center ga-2">
    <u-chip>
      Default
    </u-chip>

    <u-chip color="primary">
      Primary
    </u-chip>

    <u-chip color="secondary">
      Secondary
    </u-chip>

    <u-chip color="red">
      Red
    </u-chip>

    <u-chip color="green">
      Green
    </u-chip>
  </div>
  <div class="d-flex justify-center ga-2 mt-2">
    <u-chip variant="flat">
      Default flat
    </u-chip>

    <u-chip color="primary" variant="flat">
      Primary flat
    </u-chip>

    <u-chip color="secondary" variant="flat">
      Secondary flat
    </u-chip>

    <u-chip color="red" variant="flat">
      Red flat
    </u-chip>

    <u-chip color="green" variant="flat">
      Green flat
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UChip },
  template: `
    <div class="d-flex justify-center ga-2 flex-wrap">
      <u-chip variant="elevated">Elevated</u-chip>
      <u-chip variant="flat">Flat</u-chip>
      <u-chip variant="tonal">Tonal</u-chip>
      <u-chip variant="outlined">Outlined</u-chip>
      <u-chip variant="text">Text</u-chip>
      <u-chip variant="plain">Plain</u-chip>
    </div>
  `,
});

Variants.parameters = {
  docs: {
    description: {
      story:
        'The variant prop gives you easy access to several different button styles. Available variants are: elevated, flat, tonal (default), outlined, text, and plain.',
    },
    source: {
      code: `<template>
  <div class="d-flex justify-center ga-2 flex-wrap">
    <u-chip variant="elevated">Elevated</u-chip>
    <u-chip variant="flat">Flat</u-chip>
    <u-chip variant="tonal">Tonal</u-chip>
    <u-chip variant="outlined">Outlined</u-chip>
    <u-chip variant="text">Text</u-chip>
    <u-chip variant="plain">Plain</u-chip>
  </div>
</template>`,
    },
  },
};

export const SizeAndDensity: StoryFn<ComponentArgs> = () => ({
  components: { UChip, ULabel },
  template: `
    <div>
      <div class="d-flex justify-center align-center ga-2">
        <u-label style="width: 100px">default</u-label>

        <u-chip size="x-small">
          x-small
        </u-chip>

        <u-chip size="small">
          small
        </u-chip>

        <u-chip>
          default
        </u-chip>

        <u-chip size="large">
          large
        </u-chip>

        <u-chip size="x-large">
          x-large
        </u-chip>
      </div>
      <div class="d-flex justify-center align-center ga-2 mt-2">
        <u-label style="width: 100px">comfortable</u-label>

        <u-chip density="comfortable" size="x-small">
          x-small
        </u-chip>

        <u-chip density="comfortable" size="small">
          small
        </u-chip>

        <u-chip density="comfortable">
          default
        </u-chip>

        <u-chip density="comfortable" size="large">
          large
        </u-chip>

        <u-chip density="comfortable" size="x-large">
          x-large
        </u-chip>
      </div>
      <div class="d-flex justify-center align-center ga-2 mt-2">
        <u-label style="width: 100px">compact</u-label>

        <u-chip density="compact" size="x-small">
          x-small
        </u-chip>

        <u-chip density="compact" size="small">
          small
        </u-chip>

        <u-chip density="compact">
          default
        </u-chip>

        <u-chip density="compact" size="large">
          large
        </u-chip>

        <u-chip density="compact" size="x-large">
          x-large
        </u-chip>
      </div>
    </div>
  `,
});

SizeAndDensity.parameters = {
  docs: {
    description: {
      story:
        'Chips can have various sizes from x-small to x-large. density is used to adjust the vertical spacing without affecting width or font size.',
    },
    source: {
      code: `<template>
  <div class="d-flex justify-center align-center ga-2">
    <u-label style="width: 100px">default</u-label>

    <u-chip size="x-small">
      x-small
    </u-chip>

    <u-chip size="small">
      small
    </u-chip>

    <u-chip>
      default
    </u-chip>

    <u-chip size="large">
      large
    </u-chip>

    <u-chip size="x-large">
      x-large
    </u-chip>
  </div>
  <div class="d-flex justify-center align-center ga-2 mt-2">
    <u-label style="width: 100px">comfortable</u-label>

    <u-chip density="comfortable" size="x-small">
      x-small
    </u-chip>

    <u-chip density="comfortable" size="small">
      small
    </u-chip>

    <u-chip density="comfortable">
      default
    </u-chip>

    <u-chip density="comfortable" size="large">
      large
    </u-chip>

    <u-chip density="comfortable" size="x-large">
      x-large
    </u-chip>
  </div>
  <div class="d-flex justify-center align-center ga-2 mt-2">
    <u-label style="width: 100px">compact</u-label>

    <u-chip density="compact" size="x-small">
      x-small
    </u-chip>

    <u-chip density="compact" size="small">
      small
    </u-chip>

    <u-chip density="compact">
      default
    </u-chip>

    <u-chip density="compact" size="large">
      large
    </u-chip>

    <u-chip density="compact" size="x-large">
      x-large
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const Draggable: StoryFn<ComponentArgs> = () => ({
  components: { UChip },
  template: `
    <div class="text-center">
      <u-chip draggable>
        Default
      </u-chip>
    </div>
  `,
});

Draggable.parameters = {
  docs: {
    description: {
      story: 'draggable u-chip component can be dragged by mouse.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip draggable>
      Default
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const Label: StoryFn<ComponentArgs> = () => ({
  components: { UChip, UIcon },
  template: `
    <div class="text-center">
      <u-chip
        class="ma-2"
        label
      >
        Label
      </u-chip>

      <u-chip
        class="ma-2"
        color="pink"
        label
      >
        <u-icon icon="mdi-label" start></u-icon>
        Tags
      </u-chip>

      <u-chip
        class="ma-2"
        color="primary"
        label
      >
        <u-icon icon="mdi-account-circle-outline" start></u-icon>
        John Leider
      </u-chip>

      <u-chip
        class="ma-2"
        color="cyan"
        closable
        label
      >
        <u-icon icon="mdi-twitter" start></u-icon>
        New Tweets
      </u-chip>
    </div>
  `,
});

Label.parameters = {
  docs: {
    description: {
      story: 'Label chips use the v-card border-radius.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip
      class="ma-2"
      label
    >
      Label
    </u-chip>

    <u-chip
      class="ma-2"
      color="pink"
      label
    >
      <u-icon icon="mdi-label" start></u-icon>
      Tags
    </u-chip>

    <u-chip
      class="ma-2"
      color="primary"
      label
    >
      <u-icon icon="mdi-account-circle-outline" start></u-icon>
      John Leider
    </u-chip>

    <u-chip
      class="ma-2"
      color="cyan"
      closable
      label
    >
      <u-icon icon="mdi-twitter" start></u-icon>
      New Tweets
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const NoRipple: StoryFn<ComponentArgs> = () => ({
  components: { UChip },
  template: `
    <div class="text-center">
      <u-chip :ripple="false" link>
        Default
      </u-chip>
    </div>
  `,
});

NoRipple.parameters = {
  docs: {
    description: {
      story: 'u-chip can be rendered without ripple if ripple prop is set to false.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip :ripple="false" link>
      Default
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const Outlined: StoryFn<ComponentArgs> = () => ({
  components: { UChip, UIcon },
  template: `
    <div class="text-center">
      <u-chip
        class="ma-2"
        color="success"
        variant="outlined"
      >
        <u-icon icon="mdi-server-plus" start></u-icon>
        Server Status
      </u-chip>

      <u-chip
        class="ma-2"
        color="primary"
        variant="outlined"
      >
        User Account
        <u-icon icon="mdi-account-outline" end></u-icon>
      </u-chip>
    </div>
  `,
});

Outlined.parameters = {
  docs: {
    description: {
      story: 'Outlined chips inherit their border color from the current text color.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip
      class="ma-2"
      color="success"
      variant="outlined"
    >
      <u-icon icon="mdi-server-plus" start></u-icon>
      Server Status
    </u-chip>

    <u-chip
      class="ma-2"
      color="primary"
      variant="outlined"
    >
      User Account
      <u-icon icon="mdi-account-outline" end></u-icon>
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const Icon: StoryFn<ComponentArgs> = () => ({
  components: { UChip, UAvatar },
  template: `
    <div class="text-center">
      <u-chip
        class="ma-2"
        color="indigo"
        prepend-icon="mdi-account-circle"
      >
        Mike
      </u-chip>

      <u-chip
        append-icon="mdi-star"
        class="ma-2"
        color="orange"
      >
        Premium
      </u-chip>

      <u-chip
        append-icon="mdi-cake-variant"
        class="ma-2"
        color="primary"
      >
        1 Year
      </u-chip>

      <u-chip
        class="ma-2"
        color="green"
      >
        <template v-slot:prepend>
          <u-avatar
            class="green-darken-4"
          >
            1
          </u-avatar>
        </template>
        Years
      </u-chip>

      <u-chip
        :model-value="true"
        class="ma-2"
        color="teal"
        prepend-icon="mdi-checkbox-marked-circle"
        closable
      >
        Confirmed
      </u-chip>

      <u-chip
        :model-value="true"
        class="ma-2"
        close-icon="mdi-delete"
        color="teal"
        prepend-icon="mdi-checkbox-marked-circle"
        closable
      >
        Confirmed
      </u-chip>
    </div>
  `,
});

Icon.parameters = {
  docs: {
    description: {
      story: 'Chips can use text or any icon available in the Material Icons font library.',
    },
    source: {
      code: `<template>
  <div class="text-center">
    <u-chip
      class="ma-2"
      color="indigo"
      prepend-icon="mdi-account-circle"
    >
      Mike
    </u-chip>

    <u-chip
      append-icon="mdi-star"
      class="ma-2"
      color="orange"
    >
      Premium
    </u-chip>

    <u-chip
      append-icon="mdi-cake-variant"
      class="ma-2"
      color="primary"
    >
      1 Year
    </u-chip>

    <u-chip
      class="ma-2"
      color="green"
    >
      <template v-slot:prepend>
        <u-avatar
          class="green-darken-4"
        >
          1
        </u-avatar>
      </template>
      Years
    </u-chip>

    <u-chip
      :model-value="true"
      class="ma-2"
      color="teal"
      prepend-icon="mdi-checkbox-marked-circle"
      closable
    >
      Confirmed
    </u-chip>

    <u-chip
      :model-value="true"
      class="ma-2"
      close-icon="mdi-delete"
      color="teal"
      prepend-icon="mdi-checkbox-marked-circle"
      closable
    >
      Confirmed
    </u-chip>
  </div>
</template>`,
    },
  },
};

export const InSelects: StoryFn<ComponentArgs> = () => ({
  components: { UCombobox, UChip },
  setup() {
    const items = ['Streaming', 'Eating'];
    const chips = ref(['Programming', 'Playing video games', 'Watching movies', 'Sleeping']);
    return { items, chips };
  },
  template: `
    <u-combobox
      v-model="chips"
      :items="items"
      label="Your favorite hobbies"
      prepend-icon="mdi-filter-variant"
      variant="solo"
      chips
      clearable
      closable-chips
      multiple
    >
      <template v-slot:chip="{ props, item }">
        <u-chip v-bind="props">
          <strong>{{ item.raw }}</strong>&nbsp;
          <span>(interest)</span>
        </u-chip>
      </template>
    </u-combobox>
  `,
});

InSelects.parameters = {
  docs: {
    description: {
      story: 'Selects can use chips to display the selected data. Try adding your own tags below.',
    },
    source: {
      code: `<template>
  <u-combobox
    v-model="chips"
    :items="items"
    label="Your favorite hobbies"
    prepend-icon="mdi-filter-variant"
    variant="solo"
    chips
    clearable
    closable-chips
    multiple
  >
    <template v-slot:chip="{ props, item }">
      <u-chip v-bind="props">
        <strong>{{ item.raw }}</strong>&nbsp;
        <span>(interest)</span>
      </u-chip>
    </template>
  </u-combobox>
</template>
<script setup>
  import { ref } from 'vue'

  const items = ['Streaming', 'Eating']

  const chips = ref(['Programming', 'Playing video games', 'Watching movies', 'Sleeping'])
</script>`,
    },
  },
};
