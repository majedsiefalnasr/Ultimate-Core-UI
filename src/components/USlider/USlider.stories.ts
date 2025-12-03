import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import {
  UAvatar,
  UBtn,
  UCard,
  UCol,
  UFadeTransition,
  UIcon,
  URow,
  USlider,
  UTextField,
} from '../index';

interface ComponentArgs {
  appendIcon?: any;
  baseColor?: string;
  centerAffix?: boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean | null;
  elevation?: string | number;
  error?: boolean;
  errorMessages?: string | string[];
  focused?: boolean;
  glow?: boolean;
  hideDetails?: boolean | 'auto';
  hideSpinButtons?: boolean;
  hint?: string;
  iconColor?: string | boolean;
  id?: string;
  label?: string;
  max?: string | number;
  maxErrors?: string | number;
  maxWidth?: string | number;
  messages?: string | string[];
  min?: string | number;
  minWidth?: string | number;
  modelValue?: string | number;
  name?: string;
  noKeyboard?: boolean;
  persistentHint?: boolean;
  prependIcon?: any;
  readonly?: boolean | null;
  reverse?: boolean;
  ripple?: boolean;
  rounded?: string | number | boolean;
  rules?: unknown[];
  showTicks?: boolean | 'always';
  step?: string | number;
  theme?: string;
  thumbColor?: string;
  thumbLabel?: boolean | 'always';
  thumbSize?: string | number;
  ticks?: number[] | Record<number, string>;
  tickSize?: string | number;
  tile?: boolean;
  trackColor?: string;
  trackFillColor?: string;
  trackSize?: string | number;
  validateOn?: string;
  validationValue?: unknown;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Sliders',
  component: USlider,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-slider` component provides a single-value slider control for adjusting numeric values along a track.',
      },
      import: `import { USlider } from '@ultimate/core-ui/components'`,
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

          return `<u-slider${attrsString}></u-slider>`;
        },
      },
    },
    Vuetify: {
      component: 'VSlider',
      content: "Wrapper around Vuetify's `VSlider` component.",
      link: 'https://vuetifyjs.com/en/components/sliders/',
    },
    Primary: {
      description:
        'Sliders reflect a range of values along a track; ideal for volume, brightness, and filters.',
    },
  },
  argTypes: {
    appendIcon: {
      control: 'text',
      description: 'Creates an icon after default content in the append slot.',
      table: {
        type: { summary: 'string | (string|[string,number])[] | component | FunctionalComponent' },
        defaultValue: { summary: 'undefined' },
      },
    },
    baseColor: {
      control: 'text',
      description: 'Sets the color when input is not focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    centerAffix: {
      control: 'boolean',
      description: 'Vertically align affix elements (prepend/append). Default: true',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    color: {
      control: 'text',
      description: 'Applies a color to the control.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: "Adjusts vertical height. Default: 'default'",
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: 'default' },
      },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: "Input direction. Default: 'horizontal'",
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interactions. Default: null',
      table: { type: { summary: 'boolean | null' }, defaultValue: { summary: 'null' } },
    },
    elevation: {
      control: 'number',
      description: 'Elevation level applied to component. Default: 2',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '2' } },
    },
    error: {
      control: 'boolean',
      description: 'Manually force error state. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    errorMessages: {
      control: 'object',
      description: 'Custom error messages (string or string[]).',
      table: { type: { summary: 'string | string[]' }, defaultValue: { summary: '[]' } },
    },
    focused: {
      control: 'boolean',
      description: 'Force focused styling. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    glow: {
      control: 'boolean',
      description: 'Make affix icons full opacity when focused. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideDetails: {
      control: 'text',
      description: "Hide hint and validation messages. Accepts boolean or 'auto'. Default: false",
      table: { type: { summary: "boolean | 'auto'" }, defaultValue: { summary: 'false' } },
    },
    hideSpinButtons: {
      control: 'boolean',
      description: 'Hide spin buttons when type=number. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hint: {
      control: 'text',
      description: 'Hint text shown below input when focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    iconColor: {
      control: 'text',
      description: 'Color for prepend/append icons (string or boolean).',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    id: {
      control: 'text',
      description: 'DOM id for the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    label: {
      control: 'text',
      description: 'Label text for the field.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    max: {
      control: 'number',
      description: 'Maximum allowed value. Default: 100',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '100' } },
    },
    maxErrors: {
      control: 'number',
      description: 'Maximum number of shown validation errors. Default: 1',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '1' } },
    },
    maxWidth: {
      control: 'text',
      description: 'Max width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    messages: {
      control: 'object',
      description: 'Messages displayed below the input.',
      table: { type: { summary: 'string | string[]' }, defaultValue: { summary: '[]' } },
    },
    min: {
      control: 'number',
      description: 'Minimum allowed value. Default: 0',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      control: 'number',
      description: 'v-model value of the slider. Default: 0',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    name: {
      control: 'text',
      description: 'Name attribute for the input.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    noKeyboard: {
      control: 'boolean',
      description: 'Ignore keyboard events (internal). Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    persistentHint: {
      control: 'boolean',
      description: 'Force hint to always be visible. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    prependIcon: {
      control: 'text',
      description: 'Prepends an icon to the component.',
      table: {
        type: { summary: 'string | (string|[string,number])[] | component | FunctionalComponent' },
        defaultValue: { summary: 'undefined' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Put input in readonly state. Default: null',
      table: { type: { summary: 'boolean | null' }, defaultValue: { summary: 'null' } },
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse slider direction. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Apply v-ripple directive. Default: true',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    rounded: {
      control: 'text',
      description: 'Border radius variant (0, xs, sm, true, lg, xl, pill, circle).',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    rules: {
      control: 'object',
      description: 'Validation rules array (functions/strings/booleans).',
      table: { type: { summary: 'array' }, defaultValue: { summary: '[]' } },
    },
    showTicks: {
      control: 'text',
      description: "Show track ticks. Accepts boolean or 'always'. Default: false",
      table: { type: { summary: "boolean | 'always'" }, defaultValue: { summary: 'false' } },
    },
    step: {
      control: 'number',
      description: 'Step interval for ticks. Default: 0',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    theme: {
      control: 'text',
      description: 'Theme applied to this component and children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    thumbColor: {
      control: 'text',
      description: 'Thumb color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    thumbLabel: {
      control: 'text',
      description: "Show thumb label. Accepts boolean or 'always'. Default: undefined",
      table: { type: { summary: "boolean | 'always'" }, defaultValue: { summary: 'undefined' } },
    },
    thumbSize: {
      control: 'number',
      description: 'Thumb label size in px. Default: 20',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '20' } },
    },
    ticks: {
      control: 'object',
      description: 'Tick marks or labels (number[] or record).',
      table: {
        type: { summary: 'number[] | Record<number,string>' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tickSize: {
      control: 'number',
      description: 'Tick mark size. Default: 2',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '2' } },
    },
    tile: {
      control: 'boolean',
      description: 'Remove border-radius. Default: false',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    trackColor: {
      control: 'text',
      description: 'Track color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    trackFillColor: {
      control: 'text',
      description: 'Track fill color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    trackSize: {
      control: 'number',
      description: 'Track height in px. Default: 4',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '4' } },
    },
    validateOn: {
      control: 'text',
      description: 'Event(s) that trigger validation.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    validationValue: {
      control: 'object',
      description: 'Value used when applying validation rules.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    width: {
      control: 'text',
      description: 'Width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USlider },
  setup() {
    return { args };
  },
  template: `<u-slider v-bind="args"></u-slider>`,
});

// Colors Story
const colorsTemplate = `
  <div>
    <u-slider v-model="slider1" color="orange" label="color"></u-slider>
    <u-slider v-model="slider2" label="track-color" track-color="green"></u-slider>
    <u-slider v-model="slider3" label="thumb-color" thumb-color="purple"></u-slider>
  </div>
  `;

/**
 * You can set the colors of the slider using the props color, track-color and thumb-color.
 */
export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  setup() {
    const slider1 = ref(0);
    const slider2 = ref(50);
    const slider3 = ref(100);
    return { slider1, slider2, slider3 };
  },
  template: colorsTemplate,
});

Colors.parameters = {
  docs: {
    source: {
      code: `<template>${colorsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const slider1 = ref(0)
  const slider2 = ref(50)
  const slider3 = ref(100)
</script>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `<u-slider model-value="30" disabled></u-slider>`;

/**
 * You cannot interact with disabled sliders.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  template: disabledTemplate,
});

Disabled.parameters = { docs: { source: { code: `<template>${disabledTemplate}</template>` } } };

// Step Story
const stepTemplate = `
  <u-slider v-model="value" :max="1" :min="0" :step="0.2" thumb-label></u-slider>
  `;

/**
 * Using the step prop you can control the precision of the slider, and how much it
 * should move each step.
 */
export const Step: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  setup() {
    const value = ref(0);
    return { value };
  },
  template: stepTemplate,
});

Step.parameters = {
  docs: {
    source: {
      code: `<template>${stepTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref(0)
</script>`,
    },
  },
};

// Icons Story
const iconsTemplate = `
  <div>
    <div class="text-caption">Media volume</div>
    <u-slider v-model="media" prepend-icon="hugeicons:volume-24"></u-slider>

    <div class="text-caption">Alarm volume</div>
    <u-slider v-model="alarm" append-icon="hugeicons:alarm-24"></u-slider>

    <div class="text-caption">Icon click callback</div>
    <u-slider v-model="zoom" append-icon="hugeicons:magnify-plus-24" prepend-icon="hugeicons:magnify-minus-24" @click:append="zoomIn" @click:prepend="zoomOut"></u-slider>
  </div>
  `;

/**
 * You can add icons to the slider with the append-icon and prepend-icon props. With
 * @click:append and @click:prepend you can trigger a callback function when click the icon.
 */
export const Icons: StoryFn<ComponentArgs> = () => ({
  components: { USlider, UBtn },
  setup() {
    const media = ref(0);
    const alarm = ref(0);
    const zoom = ref(0);

    function zoomOut() {
      zoom.value = zoom.value - 10 || 0;
    }
    function zoomIn() {
      zoom.value = zoom.value + 10 || 100;
    }

    return { media, alarm, zoom, zoomOut, zoomIn };
  },
  template: iconsTemplate,
});

Icons.parameters = {
  docs: {
    source: {
      code: `<template>${iconsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const media = ref(0)
  const alarm = ref(0)
  const zoom = ref(0)
  function zoomOut() {
    zoom.value = zoom.value - 10 || 0
  }
  function zoomIn() {
    zoom.value = zoom.value + 10 || 100
  }
</script>`,
    },
  },
};

// MinMax Story
const minMaxTemplate = `
  <u-slider v-model="slider" :max="max" :min="min" class="align-center" hide-details>
    <template v-slot:append>
      <u-text-field v-model="slider" density="compact" style="width: 70px" type="number" hide-details single-line></u-text-field>
    </template>
  </u-slider>
  `;

/**
 * You can set min and max values of sliders.
 */
export const MinMax: StoryFn<ComponentArgs> = () => ({
  components: { USlider, UTextField },
  setup() {
    const min = ref(-50);
    const max = ref(90);
    const slider = ref(40);
    return { min, max, slider };
  },
  template: minMaxTemplate,
});

MinMax.parameters = {
  docs: {
    source: {
      code: `<template>${minMaxTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const min = ref(-50)
  const max = ref(90)
  const slider = ref(40)
</script>`,
    },
  },
};

// Readonly Story
const readonlyTemplate = `<u-slider label="Readonly" model-value="30" readonly />`;

/**
 * You cannot interact with readonly sliders, but they look as ordinary ones.
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  template: readonlyTemplate,
});

Readonly.parameters = {
  docs: { source: { code: `<template>${readonlyTemplate}</template>` } },
};

// Thumb Story
const thumbTemplate = `
  <div class="d-flex flex-column">
    <div>
      <div class="text-caption">Show thumb when using slider</div>
      <u-slider v-model="slider1" thumb-label></u-slider>
    </div>

    <div>
      <div class="text-caption">Always show thumb label</div>
      <u-slider v-model="slider2" thumb-label="always"></u-slider>
    </div>

    <div>
      <div class="text-caption">Custom thumb size</div>
      <u-slider v-model="slider3" :thumb-size="36" thumb-label="always"></u-slider>
    </div>

    <div>
      <div class="text-caption">Custom thumb label</div>
      <u-slider v-model="slider4" thumb-label="always">
        <template v-slot:thumb-label="{ modelValue }">
          {{ satisfactionEmojis[Math.min(Math.floor(modelValue / 10), 9)] }}
        </template>
      </u-slider>
    </div>
  </div>
  `;

/**
 * You can display a thumb label while sliding or always with the thumb-label prop . It can
 * have a custom color by setting thumb-color prop and a custom size with the thumb-size prop.
 */
export const Thumb: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  setup() {
    const slider1 = ref(50);
    const slider2 = ref(50);
    const slider3 = ref(50);
    const slider4 = ref(50);
    const satisfactionEmojis = [
      '\ud83d\ude2d',
      '\ud83d\ude22',
      '\u2639\ufe0f',
      '\ud83d\ude41',
      '\ud83d\ude10',
      '\ud83d\ude42',
      '\ud83d\ude0a',
      '\ud83d\ude01',
      '\ud83d\ude04',
      '\ud83d\ude0d',
    ];
    return { slider1, slider2, slider3, slider4, satisfactionEmojis };
  },
  template: thumbTemplate,
});

Thumb.parameters = {
  docs: {
    source: {
      code: `<template>${thumbTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const slider1 = ref(50)
  const slider2 = ref(50)
  const slider3 = ref(50)
  const slider4 = ref(50)

  const satisfactionEmojis = [
    '\ud83d\ude2d', '\ud83d\ude22', '\u2639\ufe0f', '\ud83d\ude41', '\ud83d\ude10', '\ud83d\ude42', '\ud83d\ude0a', '\ud83d\ude01', '\ud83d\ude04', '\ud83d\ude0d'
  ]
</script>`,
    },
  },
};

// Ticks Story
const ticksTemplate = `
  <div>
    <div class="text-caption">Show ticks when using slider</div>
    <u-slider step="10" show-ticks></u-slider>

    <div class="text-caption">Always show ticks</div>
    <u-slider show-ticks="always" step="10"></u-slider>

    <div class="text-caption">Tick size</div>
    <u-slider show-ticks="always" step="10" tick-size="4"></u-slider>
  </div>
  `;

/**
 * Tick marks represent predetermined values to which the user can move the slider.
 */
export const Ticks: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  template: ticksTemplate,
});

Ticks.parameters = {
  docs: {
    source: {
      code: `<template>${ticksTemplate}</template>`,
    },
  },
};

// Vertical Story
const verticalTemplate = `<u-slider v-model="value" direction="vertical" label="Regular"></u-slider>`;

/**
 * You can use the direction prop to switch sliders to a vertical orientation.
 * If you need to change the height of the slider, use css.
 */
export const Vertical: StoryFn<ComponentArgs> = () => ({
  components: { USlider },
  setup() {
    const value = ref(10);
    return { value };
  },
  template: verticalTemplate,
});

Vertical.parameters = {
  docs: {
    source: {
      code: `<template>${verticalTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const value = ref(10)
</script>`,
    },
  },
};

/* This is for documentation purposes and will not be needed in your application */
import './AppendPrepend.story.scss';

// AppendPrepend Story
const appendPrependTemplate = `
    <u-card
      class="mx-auto"
      max-width="600"
    >
      <u-toolbar
        dense
        flat
      >
        <u-toolbar-title>
          <span class="text-subheading">METRONOME</span>
        </u-toolbar-title>
        <u-btn icon="hugeicons:share-08" variant="text"></u-btn>
      </u-toolbar>

      <u-card-text>
        <u-row
          class="mb-4"
          justify="space-between"
        >
          <u-col class="text-left">
            <span
              class="text-h2 font-weight-light"
              v-text="bpm"
            ></span>
            <span class="subheading font-weight-light me-1">BPM</span>
            <u-fade-transition>
              <u-avatar
                v-if="isPlaying"
                :color="color"
                :style="{
                  animationDuration: animationDuration
                }"
                class="mb-1 v-avatar--metronome"
                size="12"
              ></u-avatar>
            </u-fade-transition>
          </u-col>
          <u-col class="text-right">
            <u-btn
              :color="color"
              elevation="0"
              theme="dark"
              icon
              @click="toggle"
            >
              <u-icon :icon="isPlaying ? 'hugeicons:pause' : 'hugeicons:play'" size="large"></u-icon>
            </u-btn>
          </u-col>
        </u-row>

        <u-slider
          v-model="bpm"
          :color="color"
          :step="1"
          max="218"
          min="40"
          track-color="grey"
        >
          <template v-slot:prepend>
            <u-btn
              :color="color"
              icon="hugeicons:minus-sign"
              size="small"
              variant="text"
              @click="decrement"
            ></u-btn>
          </template>

          <template v-slot:append>
            <u-btn
              :color="color"
              icon="hugeicons:plus-sign"
              size="small"
              variant="text"
              @click="increment"
            ></u-btn>
          </template>
        </u-slider>
      </u-card-text>
    </u-card>
  `;

/**
 * Use slots such as append and prepend to easily customize the u-slider to fit any situation.
 */
export const AppendPrepend: StoryFn<ComponentArgs> = () => ({
  components: { USlider, UCard, URow, UCol, UBtn, UIcon, UFadeTransition, UAvatar },
  setup() {
    const bpm = ref(40);
    const isPlaying = ref(false);

    const color = computed(() => {
      if (bpm.value < 100) return 'indigo';
      if (bpm.value < 125) return 'teal';
      if (bpm.value < 140) return 'green';
      if (bpm.value < 175) return 'orange';
      return 'red';
    });
    const animationDuration = computed(() => {
      return `${60 / bpm.value}s`;
    });

    function decrement() {
      bpm.value--;
    }
    function increment() {
      bpm.value++;
    }
    function toggle() {
      isPlaying.value = !isPlaying.value;
    }

    return { bpm, isPlaying, color, decrement, increment, toggle, animationDuration };
  },
  template: appendPrependTemplate,
});

AppendPrepend.parameters = {
  docs: {
    source: {
      code: `<template>${appendPrependTemplate}</template>

<script setup>
  import { computed, ref } from 'vue'

  const bpm = ref(40)
  const isPlaying = ref(false)

  const color = computed(() => {
    if (bpm.value < 100) return 'indigo'
    if (bpm.value < 125) return 'teal'
    if (bpm.value < 140) return 'green'
    if (bpm.value < 175) return 'orange'
    return 'red'
  })
  const animationDuration = computed(() => (60 / bpm.value) + 's')

  function decrement () {
    bpm.value--
  }
  function increment () {
    bpm.value++
  }
  function toggle () {
    isPlaying.value = !isPlaying.value
  }
</script>
<style>
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
</style>`,
    },
  },
};
