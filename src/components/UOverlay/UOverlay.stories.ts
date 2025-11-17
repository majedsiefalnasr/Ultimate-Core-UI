import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';

import {
  UBtn,
  UCard,
  UCardText,
  UCardTitle,
  UHover,
  UImg,
  UOverlay,
  UProgressCircular,
  URating,
  URow,
} from '../index';

interface ComponentArgs {
  absolute?: boolean;
  activator?: Element | string | 'parent';
  activatorProps?: unknown;
  attach?: string | boolean | Element;
  closeDelay?: string | number;
  closeOnBack?: boolean;
  closeOnContentClick?: boolean;
  contained?: boolean;
  contentClass?: any;
  contentProps?: any;
  disabled?: boolean;
  eager?: boolean;
  height?: string | number;
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
  scrollStrategy?: 'close' | 'block' | 'none' | 'reposition';
  stickToTarget?: boolean;
  target?: Element | string | 'parent' | 'cursor' | [number, number];
  theme?: string;
  transition?: string | boolean;
  width?: string | number;
  zIndex?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Overlays',
  component: UOverlay,
  parameters: {
    docs: {
      description: {
        component:
          'u-overlay is the base for components that float over the rest of the page, such as u-menu and u-dialog. It can also be used on its own and comes with everything you need to create a custom popover component.',
      },
      import: `import { UOverlay } from '@ultimate/core-ui/components'`,
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

          return `<u-overlay${attrsString}></u-overlay>`;
        },
      },
    },
    Vuetify: {
      component: 'VOverlay',
      content:
        "This component is built on top of Vuetify's VOverlay component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/overlays/',
    },
    Primary: {
      description:
        'In its simplest form, the u-overlay component will add a dimmed layer over your application.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-overlay',
            link: 'https://vuetifyjs.com/en/api/v-overlay/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    absolute: {
      control: { type: 'boolean' },
      description: 'Applies position: absolute to the content element.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    activator: {
      control: { type: 'text' },
      description: "Explicitly sets the overlay's activator.",
      table: {
        type: { summary: "Element | string | 'parent'" },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    activatorProps: {
      control: { type: 'object' },
      description: 'Apply custom properties to the activator.',
      table: {
        type: { summary: 'unknown' },
        defaultValue: { summary: '{}' },
        category: 'Props',
      },
    },
    attach: {
      control: { type: 'text' },
      description:
        'Specifies which DOM element the overlay content should teleport to. Can be a direct element reference, querySelector string, or true to disable teleporting.',
      table: {
        type: { summary: 'string | boolean | Element' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    closeDelay: {
      control: { type: 'number' },
      description:
        'Milliseconds to wait before closing component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    closeOnBack: {
      control: { type: 'boolean' },
      description:
        "Closes the overlay content when the browser's back button is pressed or $router.back() is called.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Props',
      },
    },
    closeOnContentClick: {
      control: { type: 'boolean' },
      description: 'Closes component when you click on its content.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    contained: {
      control: { type: 'boolean' },
      description:
        'Limits the size of the component and scrim to its offset parent. Implies absolute and attach.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    contentClass: {
      control: { type: 'text' },
      description:
        'Applies a custom class to the detached element. Useful because the content is moved to the beginning of the v-app component.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    contentProps: {
      control: { type: 'object' },
      description: 'Apply custom properties to the content.',
      table: {
        type: { summary: 'any' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    eager: {
      control: { type: 'boolean' },
      description: "Forces the component's content to render when it mounts. Useful for SEO.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    height: {
      control: { type: 'text' },
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    location: {
      control: { type: 'text' },
      description:
        'Specifies the anchor point for positioning the component, using directional cues to align it.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'bottom'" },
        category: 'Props',
      },
    },
    locationStrategy: {
      control: { type: 'select' },
      options: ['static', 'connected'],
      description:
        'A function used to specifies how the component should position relative to its activator.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'static'" },
        category: 'Props',
      },
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Sets the maximum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    minHeight: {
      control: { type: 'text' },
      description: 'Sets the minimum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    modelValue: {
      control: { type: 'boolean' },
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    noClickAnimation: {
      control: { type: 'boolean' },
      description:
        'Disables the bounce effect when clicking outside of the content element when using the persistent prop.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    offset: {
      control: { type: 'text' },
      description:
        'Increases distance from the target. When passed as a pair of numbers, the second value shifts anchor along the side.',
      table: {
        type: { summary: 'string | number | number[]' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    opacity: {
      control: { type: 'number' },
      description: 'Sets the opacity of the scrim element. Only applies if scrim is enabled.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    openDelay: {
      control: { type: 'number' },
      description:
        'Milliseconds to wait before opening component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    openOnClick: {
      control: { type: 'boolean' },
      description: 'Activate the component when the activator is clicked.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    openOnFocus: {
      control: { type: 'boolean' },
      description: 'Activate the component when the activator is focused.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    openOnHover: {
      control: { type: 'boolean' },
      description: 'Activate the component when the activator is hovered.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    origin: {
      control: { type: 'text' },
      description: 'Sets the transition origin on the element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'auto'" },
        category: 'Props',
      },
    },
    persistent: {
      control: { type: 'boolean' },
      description: 'Clicking outside of the element or pressing esc key will not deactivate it.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    scrim: {
      control: { type: 'text' },
      description: 'Accepts true/false to enable background, and string to define color.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'true' },
        category: 'Props',
      },
    },
    scrollStrategy: {
      control: { type: 'select' },
      options: ['close', 'block', 'none', 'reposition'],
      description: 'Strategy used when the component is activate and user scrolls.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'block'" },
        category: 'Props',
      },
    },
    stickToTarget: {
      control: { type: 'boolean' },
      description: 'Enables the overlay content to go off-screen when scrolling.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    target: {
      control: { type: 'text' },
      description:
        'For locationStrategy="connected", specify an element or array of x,y coordinates that the overlay should position itself relative to.',
      table: {
        type: { summary: "Element | string | 'parent' | 'cursor' | [number, number]" },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    theme: {
      control: { type: 'text' },
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    transition: {
      control: { type: 'text' },
      description:
        'Sets the component transition. Can be one of the built in or custom transition.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: "'fade-transition'" },
        category: 'Props',
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Sets the width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    zIndex: {
      control: { type: 'number' },
      description: 'The z-index used for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '2000' },
        category: 'Props',
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UOverlay },
  setup() {
    const overlay = ref(false);

    watch(overlay, (val) => {
      val &&
        setTimeout(() => {
          overlay.value = false;
        }, 2000);
    });

    return { overlay };
  },
  template: `
    <div class="text-center">
      <u-btn
        color="error"
        @click="overlay = !overlay"
      >
        Show Overlay
      </u-btn>

      <u-overlay v-model="overlay"></u-overlay>
    </div>
  `,
});

Default.args = {} as ComponentArgs;

export const Contained: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UOverlay, URow },
  setup() {
    const overlay = ref(false);

    return { overlay };
  },
  template: `
    <u-row
      align="center"
      class="ma-4"
      justify="center"
    >
      <u-card
        height="300"
        width="250"
      >
        <u-row justify="center">
          <u-btn
            class="mt-12"
            color="success"
            @click="overlay = !overlay"
          >
            Show Overlay
          </u-btn>

          <u-overlay
            v-model="overlay"
            class="align-center justify-center"
            contained
          >
            <u-btn
              color="success"
              @click="overlay = false"
            >
              Hide Overlay
            </u-btn>
          </u-overlay>
        </u-row>
      </u-card>
    </u-row>
  `,
});

Contained.args = {} as ComponentArgs;

Contained.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row
    align="center"
    class="ma-4"
    justify="center"
  >
    <u-card
      height="300"
      width="250"
    >
      <u-row justify="center">
        <u-btn
          class="mt-12"
          color="success"
          @click="overlay = !overlay"
        >
          Show Overlay
        </u-btn>

        <u-overlay
          v-model="overlay"
          class="align-center justify-center"
          contained
        >
          <u-btn
            color="success"
            @click="overlay = false"
          >
            Hide Overlay
          </u-btn>
        </u-overlay>
      </u-row>
    </u-card>
  </u-row>
</template>
<script setup>
  import { ref } from 'vue'

  const overlay = ref(false)
</script>`,
    },
  },
};

export const Advanced: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UCardText, UCardTitle, UHover, UImg, UOverlay, URating },
  template: `
    <div>
      <u-hover v-slot="{ isHovering, props }">
        <u-card
          class="mx-auto"
          max-width="344"
          v-bind="props"
        >
          <u-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></u-img>

          <u-card-text>
            <h2 class="text-h6 text-primary">
              Magento Forests
            </h2>
            Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
          </u-card-text>

          <u-card-title>
            <u-rating
              :model-value="4"
              class="me-2"
              color="orange"
              density="compact"
              hover
            ></u-rating>
            <span class="text-primary text-subtitle-2">64 Reviews</span>
          </u-card-title>

          <u-overlay
            :model-value="!!isHovering"
            class="align-center justify-center"
            scrim="#036358"
            contained
          >
            <u-btn variant="flat">See more info</u-btn>
          </u-overlay>
        </u-card>
      </u-hover>
    </div>
  `,
});

Advanced.args = {} as ComponentArgs;

Advanced.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-hover v-slot="{ isHovering, props }">
      <u-card
        class="mx-auto"
        max-width="344"
        v-bind="props"
      >
        <u-img src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></u-img>

        <u-card-text>
          <h2 class="text-h6 text-primary">
            Magento Forests
          </h2>
          Travel to the best outdoor experience on planet Earth. A vacation you will never forget!
        </u-card-text>

        <u-card-title>
          <u-rating
            :model-value="4"
            class="me-2"
            color="orange"
            density="compact"
            hover
          ></u-rating>
          <span class="text-primary text-subtitle-2">64 Reviews</span>
        </u-card-title>

        <u-overlay
          :model-value="!!isHovering"
          class="align-center justify-center"
          scrim="#036358"
          contained
        >
          <u-btn variant="flat">See more info</u-btn>
        </u-overlay>
      </u-card>
    </u-hover>
  </div>
</template>`,
    },
  },
};

export const Loader: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UOverlay, UProgressCircular },
  setup() {
    const overlay = ref(false);

    watch(overlay, (val) => {
      val &&
        setTimeout(() => {
          overlay.value = false;
        }, 3000);
    });

    return { overlay };
  },
  template: `
    <div class="text-center">
      <u-btn
        append-icon="hugeicons:arrow-expand-02"
        color="deep-purple-accent-4"
        @click="overlay = !overlay"
      >
        Launch Application
      </u-btn>

      <u-overlay
        :model-value="overlay"
        class="align-center justify-center"
      >
        <u-progress-circular
          color="primary"
          size="64"
          indeterminate
        ></u-progress-circular>
      </u-overlay>
    </div>
  `,
});

Loader.args = {} as ComponentArgs;

Loader.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-btn
      append-icon="hugeicons:arrow-expand-02"
      color="deep-purple-accent-4"
      @click="overlay = !overlay"
    >
      Launch Application
    </u-btn>

    <u-overlay
      :model-value="overlay"
      class="align-center justify-center"
    >
      <u-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></u-progress-circular>
    </u-overlay>
  </div>
</template>
<script setup>
  import { ref, watch } from 'vue'

  const overlay = ref(false)
  watch(overlay, val => {
    val && setTimeout(() => {
      overlay.value = false
    }, 3000)
  })
</script>`,
    },
  },
};
