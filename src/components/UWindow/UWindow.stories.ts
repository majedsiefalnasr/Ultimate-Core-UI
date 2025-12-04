import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import {
  UAvatar,
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCardTitle,
  UDivider,
  UImg,
  USpacer,
  UTextField,
  UWindow,
  UWindowItem,
} from '../index';

interface ComponentArgs {
  continuous?: boolean;
  crossfade?: boolean;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  mandatory?: boolean | 'force';
  modelValue?: unknown;
  nextIcon?: unknown;
  prevIcon?: unknown;
  reverse?: boolean;
  selectedClass?: string;
  showArrows?: boolean | 'hover';
  tag?: unknown;
  theme?: string;
  touch?: boolean | Record<string, unknown>;
  transitionDuration?: number;
  verticalArrows?: boolean | 'left' | 'right';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Selection/Windows',
  component: UWindow,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-window` component provides the baseline functionality for transitioning content from one pane to another. Other components such as `u-tabs`, `u-carousel` and `u-stepper` utilize this component at their core.',
      },
      import: `import { UWindow } from '@ultimate/core-ui/components'`,
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
  <u-window${attrsString} v-model="window">
    <u-window-item
      v-for="n in length"
      :key="n"
    >
      <u-card class="d-flex justify-center align-center" height="200px">
        <span class="text-h2">Card {{ n }}</span>
      </u-card>
    </u-window-item>
  </u-window>
</template>
<script>
  export default {
    data: () => ({
      length: 3,
      window: 0,
    }),
  }
</script>`;
        },
      },
    },
    Vuetify: {
      component: 'VWindow',
      content:
        'This is a Vuetify component that the library component wraps. See the base implementation for prop parity and behavior.',
      link: 'https://vuetifyjs.com/en/components/windows/',
    },
    Primary: {
      description:
        'Designed to easily cycle through content, `u-window` provides a simple API to create custom implementations.',
    },
    api: {
      data: [
        {
          element: { title: 'v-window', link: 'https://vuetifyjs.com/en/api/v-window/' },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-window-item', link: 'https://vuetifyjs.com/en/api/v-window-item/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    continuous: {
      name: 'continuous',
      description: 'Wrap around from last to first when true.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    crossfade: {
      name: 'crossfade',
      description: 'Enable crossfade transition.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    direction: {
      name: 'direction',
      description: "Transition direction ('horizontal' | 'vertical').",
      control: { type: 'select' },
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
    reverse: {
      name: 'reverse',
      description: 'Reverse the normal transition direction.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showArrows: {
      name: 'show-arrows',
      description: 'Display the next and prev buttons. Can be `hover` to show on hover.',
      control: { type: 'text' },
      table: { type: { summary: "boolean | 'hover'" }, defaultValue: { summary: 'false' } },
    },
    mandatory: {
      name: 'mandatory',
      description: "Force at least one item to be selected (boolean | 'force').",
      control: { type: 'text' },
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: "'force'" } },
    },
    transitionDuration: {
      name: 'transition-duration',
      description: 'Override transition duration (ms).',
      control: { type: 'number' },
      table: { type: { summary: 'number' }, defaultValue: { summary: undefined } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UWindow, UWindowItem, UCard },
  setup() {
    const length = ref(3);
    const window = ref(0);
    return { args, length, window };
  },
  template: `
  <u-window
    v-bind="args"
    v-model="window"
  >
    <u-window-item
      v-for="n in length"
      :key="n"
    >
      <u-card class="d-flex justify-center align-center" height="200px">
        <span class="text-h2">Card {{ n }}</span>
      </u-card>
    </u-window-item>
  </u-window>
  `,
});

Default.args = {
  showArrows: true,
} as ComponentArgs;

// ShowArrows story
const showArrowsTemplate = `
  <u-window
    v-model="onboarding"
    show-arrows="hover"
  >
    <u-window-item
      v-for="n in length"
      :key="\`card-\${n}\`"
    >
      <u-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
      >
        <h1
          class="text-h2"
        >
          Slide {{ n }}
        </h1>
      </u-card>
    </u-window-item>
  </u-window>
  `;

/**
 * By default no arrows are displayed. You can change this by adding the show-arrows prop.
 * If you set the prop value to "hover", they will only show when you mouse over the window.
 */
export const ShowArrows: StoryFn<ComponentArgs> = () => ({
  components: { UWindow, UWindowItem, UCard },
  setup() {
    const length = ref(3);
    const onboarding = ref(0);
    return { length, onboarding };
  },
  template: showArrowsTemplate,
});

ShowArrows.parameters = {
  docs: {
    source: {
      code: `<template>${showArrowsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const length = ref(3)
  const onboarding = ref(0)
</script>`,
    },
  },
};

// Reverse story
const reverseTemplate = `
  <u-window
    v-model="onboarding"
    reverse
    show-arrows
  >
    <u-window-item
      v-for="n in length"
      :key="\`card-\${n}\`"
    >
      <u-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
      >
        <h1
          class="text-h2"
        >
          Slide {{ n }}
        </h1>
      </u-card>
    </u-window-item>
  </u-window>
  `;

/**
 * The reverse prop will reverse the transitions
 */
export const Reverse: StoryFn<ComponentArgs> = () => ({
  components: { UWindow, UWindowItem, UCard },
  setup() {
    const length = ref(3);
    const onboarding = ref(0);
    return { length, onboarding };
  },
  template: reverseTemplate,
});

Reverse.parameters = {
  docs: {
    source: {
      code: `<template>${reverseTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const length = ref(3)
  const onboarding = ref(0)
</script>`,
    },
  },
};

// Direction story
const directionTemplate = `
  <u-window
    v-model="onboarding"
    direction="vertical"
    show-arrows
  >
    <u-window-item
      v-for="n in length"
      :key="\`card-\${n}\`"
    >
      <u-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
      >
        <h1
          class="text-h2"
        >
          Slide {{ n }}
        </h1>
      </u-card>
    </u-window-item>
  </u-window>
  `;

/**
 * You can change the transition to vertical using the direction prop
 */
export const Direction: StoryFn<ComponentArgs> = () => ({
  components: { UWindow, UWindowItem, UCard },
  setup() {
    const length = ref(3);
    const onboarding = ref(0);
    return { length, onboarding };
  },
  template: directionTemplate,
});

Direction.parameters = {
  docs: {
    source: {
      code: `<template>${directionTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const length = ref(3)
  const onboarding = ref(0)
</script>`,
    },
  },
};

// CustomizedArrows story
const customizedArrowsTemplate = `
  <u-window show-arrows>
    <template v-slot:prev="{ props }">
      <u-btn
        color="success"
        @click="props.onClick"
      >
        Previous slide
      </u-btn>
    </template>
    <template v-slot:next="{ props }">
      <u-btn
        color="info"
        @click="props.onClick"
      >
        Next slide
      </u-btn>
    </template>
    <u-window-item
      v-for="n in 3"
      :key="\`card-\${n}\`"
    >
      <u-card
        class="d-flex align-center justify-center ma-2"
        elevation="2"
        height="200"
      >
        <h1
          class="text-h2"
        >
          Slide {{ n }}
        </h1>
      </u-card>
    </u-window-item>
  </u-window>
  `;

/**
 * Arrows can be customized by using prev and next slots.
 */
export const CustomizedArrows: StoryFn<ComponentArgs> = () => ({
  components: { UWindow, UWindowItem, UCard, UBtn },
  template: customizedArrowsTemplate,
});

CustomizedArrows.parameters = {
  docs: {
    source: {
      code: `<template>${customizedArrowsTemplate}</template>`,
    },
  },
};

// AccountCreation story
const accountCreationTemplate = `
  <u-card
    class="mx-auto"
    max-width="500"
  >
    <u-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <u-avatar
        color="primary"
        size="24"
        v-text="step"
      ></u-avatar>
    </u-card-title>

    <u-window v-model="step">
      <u-window-item :value="1">
        <u-card-text>
          <u-text-field
            label="Email"
            placeholder="john@google.com"
          ></u-text-field>
          <span class="text-caption text-grey-darken-1">
            This is the email you will use to login to your Vuetify account
          </span>
        </u-card-text>
      </u-window-item>

      <u-window-item :value="2">
        <u-card-text>
          <u-text-field
            label="Password"
            type="password"
          ></u-text-field>
          <u-text-field
            label="Confirm Password"
            type="password"
          ></u-text-field>
          <span class="text-caption text-grey-darken-1">
            Please enter a password for your account
          </span>
        </u-card-text>
      </u-window-item>

      <u-window-item :value="3">
        <div class="pa-4 text-center">
          <u-img
            class="mb-4"
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></u-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </u-window-item>
    </u-window>

    <u-divider></u-divider>

    <u-card-actions>
      <u-btn
        v-if="step > 1"
        variant="text"
        @click="step--"
      >
        Back
      </u-btn>
      <u-spacer></u-spacer>
      <u-btn
        v-if="step < 3"
        color="primary"
        variant="flat"
        @click="step++"
      >
        Next
      </u-btn>
    </u-card-actions>
  </u-card>
  `;

/**
 * Create rich forms with smooth animations. v-window automatically tracks the current
 * selection index to change the transition direction.
 */
export const AccountCreation: StoryFn<ComponentArgs> = () => ({
  components: {
    UCard,
    UCardActions,
    UCardTitle,
    UCardText,
    UAvatar,
    UBtn,
    UDivider,
    UImg,
    UTextField,
    USpacer,
    UWindow,
    UWindowItem,
  },
  setup() {
    const step = ref(1);
    const currentTitle = computed(() => {
      switch (step.value) {
        case 1:
          return 'Sign-up';
        case 2:
          return 'Create a password';
        default:
          return 'Account created';
      }
    });

    return { step, currentTitle };
  },
  template: accountCreationTemplate,
});

AccountCreation.parameters = {
  docs: {
    source: {
      code: `<template>${accountCreationTemplate}</template>
      
<script setup>
  import { computed, ref } from 'vue'

  const step = ref(1)

  const currentTitle = computed(() => {
    switch (step.value) {
      case 1: return 'Sign-up'
      case 2: return 'Create a password'
      default: return 'Account created'
    }
  })
</script>`,
    },
  },
};
