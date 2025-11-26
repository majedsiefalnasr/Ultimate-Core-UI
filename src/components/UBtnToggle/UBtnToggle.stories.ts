import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UBtnToggle, UCard, UIcon, USheet, UTextarea } from '../index';

interface ComponentArgs {
  baseColor?: string;
  border?: string | number | boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  divided?: boolean;
  elevation?: string | number;
  mandatory?: boolean | 'force';
  max?: number;
  modelValue?: unknown;
  multiple?: boolean;
  rounded?: string | number | boolean;
  selectedClass?: string;
  tag?: string;
  theme?: string;
  tile?: boolean;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Selection/Button Toggles',
  component: UBtnToggle,
  parameters: {
    docs: {
      description: {
        component:
          'The u-btn-toggle component is a simple wrapper for u-item-group built specifically to work with u-btn.',
      },
      import: `import { UBtnToggle } from '@ultimate/core-ui/components'`,
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

          return `<u-btn-toggle${attrsString}></u-btn-toggle>`;
        },
      },
    },
    Vuetify: {
      component: 'VBtnToggle',
      content:
        "This component is built on top of Vuetify's VBtnToggle component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/button-groups/',
    },
    Primary: {
      description:
        'Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single v-model.',
    },
    anatomy: {
      title: 'Anatomy',
      description: 'The u-btn-toggle component consists of three main components working together.',
      Image: '/images/stories/UBtnToggle.anatomy.png',
      data: [
        {
          element: '1. v-btn-toggle',
          description: 'Primary component that manages the toggle state',
        },
        {
          element: '2. v-btn',
          description: 'Sub-component used for modifying the v-btn-toggle state',
        },
        {
          element: '3. v-btn-group',
          description: 'A stateless version of v-btn-toggle',
        },
      ],
    },
  },
  argTypes: {
    baseColor: {
      control: 'text',
      description: 'Sets the color of component when not focused.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
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
    color: {
      control: 'color',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'Changes the direction of the button toggle.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    divided: {
      control: 'boolean',
      description: 'Add dividers between children v-btn components.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    mandatory: {
      control: { type: 'select' },
      options: [false, true, 'force'],
      description: 'Forces at least one item to always be selected (if available).',
      table: {
        type: { summary: "boolean | 'force'" },
        defaultValue: { summary: 'false' },
      },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: false,
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: 'undefined' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows one to select multiple items.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'text',
      description: 'Round edge buttons.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
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
      description: "Removes the component's border-radius.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'text | flat | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'elevated' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtnToggle, UBtn, UIcon },
  setup() {
    const toggle = ref(null);
    return { args, toggle };
  },
  template: `
    <u-btn-toggle v-model="toggle" v-bind="args">
      <u-btn>
        <u-icon>hugeicons:text-align-justify-left</u-icon>
      </u-btn>
      <u-btn>
        <u-icon>hugeicons:text-align-center</u-icon>
      </u-btn>
      <u-btn>
        <u-icon>hugeicons:text-align-justify-right</u-icon>
      </u-btn>
      <u-btn>
        <u-icon>hugeicons:text-align-justify-center</u-icon>
      </u-btn>
    </u-btn-toggle>
  `,
});

Default.args = {} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<u-btn-toggle v-model="toggle">
  <u-btn>
    <u-icon>hugeicons:text-align-justify-left</u-icon>
  </u-btn>
  <u-btn>
    <u-icon>hugeicons:text-align-center</u-icon>
  </u-btn>
  <u-btn>
    <u-icon>hugeicons:text-align-justify-right</u-icon>
  </u-btn>
  <u-btn>
    <u-icon>hugeicons:text-align-justify-center</u-icon>
  </u-btn>
</u-btn-toggle>`,
    },
  },
};

export const Divided: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn },
  setup() {
    const toggle = ref(null);
    return { toggle };
  },
  template: `
    <div class="d-flex align-center flex-column pa-6">
      <u-btn-toggle v-model="toggle" border divided>
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>
    </div>
  `,
});

Divided.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex align-center flex-column pa-6">
    <u-btn-toggle v-model="toggle" border divided>
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref(null)
</script>`,
    },
  },
};

export const Variant: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn },
  setup() {
    const toggle = ref(null);
    return { toggle };
  },
  template: `
    <div class="d-flex align-center flex-column pa-6">
      <div class="text-subtitle-2">Default</div>
      <u-btn-toggle v-model="toggle" color="primary">
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>

      <div class="mt-6 text-subtitle-2">Text</div>
      <u-btn-toggle v-model="toggle" color="primary" variant="text">
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>

      <div class="mt-6 text-subtitle-2">Plain</div>
      <u-btn-toggle v-model="toggle" color="primary" variant="plain">
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>

      <div class="mt-6 text-subtitle-2">Outlined</div>
      <u-btn-toggle v-model="toggle" color="primary" variant="outlined">
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>
    </div>
  `,
});

Variant.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex align-center flex-column pa-6">
    <div class="text-subtitle-2">Default</div>
    <u-btn-toggle v-model="toggle" color="primary">
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>

    <div class="mt-6 text-subtitle-2">Text</div>
    <u-btn-toggle v-model="toggle" color="primary" variant="text">
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>

    <div class="mt-6 text-subtitle-2">Plain</div>
    <u-btn-toggle v-model="toggle" color="primary" variant="plain">
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>

    <div class="mt-6 text-subtitle-2">Outlined</div>
    <u-btn-toggle v-model="toggle" color="primary" variant="outlined">
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref(null)
</script>`,
    },
  },
};

export const Mandatory: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn },
  setup() {
    const toggle = ref(undefined);
    return { toggle };
  },
  template: `
    <div class="d-flex flex-column align-center pa-6">
      <u-btn-toggle v-model="toggle" color="primary" border mandatory>
        <u-btn icon="hugeicons:text-align-justify-left" value="left"></u-btn>
        <u-btn icon="hugeicons:text-align-center" value="center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right" value="right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center" value="justify"></u-btn>
      </u-btn-toggle>
      <pre class="pt-2">{{ toggle }}</pre>
    </div>
  `,
});

Mandatory.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex flex-column align-center pa-6">
    <u-btn-toggle v-model="toggle" color="primary" border mandatory>
      <u-btn icon="hugeicons:text-align-justify-left" value="left"></u-btn>
      <u-btn icon="hugeicons:text-align-center" value="center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right" value="right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center" value="justify"></u-btn>
    </u-btn-toggle>
    <pre class="pt-2">{{ toggle }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref()
</script>`,
    },
  },
};

export const Multiple: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn },
  setup() {
    const toggle = ref([]);
    return { toggle };
  },
  template: `
    <div class="d-flex flex-column align-center pa-6">
      <u-btn-toggle v-model="toggle" border multiple>
        <u-btn icon="hugeicons:text-align-justify-left" value="left"></u-btn>
        <u-btn icon="hugeicons:text-align-center" value="center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right" value="right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center" value="justify"></u-btn>
      </u-btn-toggle>
      <pre class="pt-2">{{ toggle }}</pre>
    </div>
  `,
});

Multiple.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex flex-column align-center pa-6">
    <u-btn-toggle v-model="toggle" border multiple>
      <u-btn icon="hugeicons:text-align-justify-left" value="left"></u-btn>
      <u-btn icon="hugeicons:text-align-center" value="center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right" value="right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center" value="justify"></u-btn>
    </u-btn-toggle>
    <pre class="pt-2">{{ toggle }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const toggle = ref([])
</script>`,
    },
  },
};

export const Rounded: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn },
  template: `
    <div class="d-flex justify-space-around pa-6">
      <u-btn-toggle rounded="0" border>
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>

      <u-btn-toggle rounded="xl" border>
        <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
        <u-btn icon="hugeicons:text-align-center"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
        <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
      </u-btn-toggle>
    </div>
  `,
});

Rounded.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-space-around pa-6">
    <u-btn-toggle rounded="0" border>
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>

    <u-btn-toggle rounded="xl" border>
      <u-btn icon="hugeicons:text-align-justify-left"></u-btn>
      <u-btn icon="hugeicons:text-align-center"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-right"></u-btn>
      <u-btn icon="hugeicons:text-align-justify-center"></u-btn>
    </u-btn-toggle>
  </div>
</template>`,
    },
  },
};

export const WYSIWYG: StoryFn<ComponentArgs> = () => ({
  components: { UBtnToggle, UBtn, UCard, UIcon, USheet, UTextarea },
  setup() {
    const alignment = ref(1);
    const formatting = ref([]);
    const value = ref(
      'Toggle button requirements.\n\nHave at least three toggle buttons in a group\nLabel buttons with text, an icon, or'
    );
    return { alignment, formatting, value };
  },
  template: `
    <u-card class="mx-auto" max-width="600">
      <div class="d-flex justify-space-between pa-4 pb-0">
        <u-btn-toggle v-model="formatting" variant="outlined" divided multiple>
          <u-btn>
            <u-icon icon="hugeicons:text-italic"></u-icon>
          </u-btn>
          <u-btn>
            <u-icon icon="hugeicons:text-bold"></u-icon>
          </u-btn>
          <u-btn>
            <u-icon icon="hugeicons:text-underline"></u-icon>
          </u-btn>
          <u-btn>
            <div class="d-flex align-center flex-column justify-center">
              <u-icon icon="hugeicons:text-color"></u-icon>
              <u-sheet color="purple" height="4" width="26" tile></u-sheet>
            </div>
          </u-btn>
        </u-btn-toggle>

        <u-btn-toggle v-model="alignment" variant="outlined" divided>
          <u-btn>
            <u-icon icon="hugeicons:text-align-center"></u-icon>
          </u-btn>
          <u-btn>
            <u-icon icon="hugeicons:text-align-left"></u-icon>
          </u-btn>
          <u-btn>
            <u-icon icon="hugeicons:text-align-right"></u-icon>
          </u-btn>
        </u-btn-toggle>
      </div>

      <u-sheet class="pa-4 text-center">
        <u-textarea v-model="value" rows="2" variant="outlined" auto-grow hide-details></u-textarea>
      </u-sheet>
    </u-card>
  `,
});

WYSIWYG.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" max-width="600">
    <div class="d-flex justify-space-between pa-4 pb-0">
      <u-btn-toggle v-model="formatting" variant="outlined" divided multiple>
        <u-btn>
          <u-icon icon="hugeicons:text-italic"></u-icon>
        </u-btn>
        <u-btn>
          <u-icon icon="hugeicons:text-bold"></u-icon>
        </u-btn>
        <u-btn>
          <u-icon icon="hugeicons:text-underline"></u-icon>
        </u-btn>
        <u-btn>
          <div class="d-flex align-center flex-column justify-center">
            <u-icon icon="hugeicons:text-color"></u-icon>
            <u-sheet color="purple" height="4" width="26" tile></u-sheet>
          </div>
        </u-btn>
      </u-btn-toggle>

      <u-btn-toggle v-model="alignment" variant="outlined" divided>
        <u-btn>
          <u-icon icon="hugeicons:text-align-center"></u-icon>
        </u-btn>
        <u-btn>
          <u-icon icon="hugeicons:text-align-left"></u-icon>
        </u-btn>
        <u-btn>
          <u-icon icon="hugeicons:text-align-right"></u-icon>
        </u-btn>
      </u-btn-toggle>
    </div>

    <u-sheet class="pa-4 text-center">
      <u-textarea v-model="value" rows="2" variant="outlined" auto-grow hide-details></u-textarea>
    </u-sheet>
  </u-card>
</template>

<script setup>
import { ref } from 'vue'

const alignment = ref(1)
const formatting = ref([])
const value = ref('Toggle button requirements.\\n\\nHave at least three toggle buttons in a group\\nLabel buttons with text, an icon, or')
</script>`,
    },
  },
};
