import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef, toRef } from 'vue';

import {
  UBtn,
  UCard,
  UCarousel,
  UCarouselItem,
  UChip,
  UCode,
  UContainer,
  UDefaultsProvider,
  UListItem,
  UOverlay,
  USheet,
  USlideXTransition,
} from '../index';

interface ComponentArgs {
  color?: string;
  continuous?: boolean;
  crossfade?: boolean;
  cycle?: boolean;
  delimiterIcon?: string;
  direction?: 'horizontal' | 'vertical';
  disabled?: boolean;
  height?: string | number;
  hideDelimiterBackground?: boolean;
  hideDelimiters?: boolean;
  interval?: string | number;
  mandatory?: boolean | 'force';
  modelValue?: unknown;
  nextIcon?: string;
  prevIcon?: string;
  progress?: string | boolean;
  reverse?: boolean;
  selectedClass?: string;
  showArrows?: string | boolean;
  tag?: string;
  theme?: string;
  touch?: boolean;
  transitionDuration?: number;
  verticalArrows?: boolean | 'left' | 'right';
  verticalDelimiters?: boolean | 'left' | 'right';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Selection/Carousels',
  component: UCarousel,
  parameters: {
    docs: {
      description: {
        component:
          'The u-carousel component is used to display large numbers of visual content on a rotating timer.',
      },
      import: `import { UCarousel } from '@ultimate/core-ui/components'`,
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

          return `<UCarousel${attrsString}></UCarousel>`;
        },
      },
    },
    Vuetify: {
      component: 'VCarousel',
      content:
        "This component is built on top of Vuetify's VCarousel component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/carousels/',
    },
    Primary: {
      description:
        'The u-carousel component expands upon u-window by providing additional features targeted at displaying images.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-carousel',
            link: 'https://vuetifyjs.com/en/api/v-carousel/',
          },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-carousel-item',
            link: 'https://vuetifyjs.com/en/api/v-carousel-item/',
          },
          description: 'Sub-component used for displaying the v-carousel state',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: 'color',
      description: 'Applies a color to the navigation dots - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    continuous: {
      control: 'boolean',
      description: 'Determines whether carousel is continuous.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    crossfade: {
      control: 'boolean',
      description: 'Enables crossfade transition.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    cycle: {
      control: 'boolean',
      description: 'Determines if the carousel should cycle through images.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    delimiterIcon: {
      control: 'text',
      description: 'Sets icon for carousel delimiter.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$delimiter' } },
    },
    direction: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
      description: 'The transition direction when changing windows.',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '500' } },
    },
    hideDelimiterBackground: {
      control: 'boolean',
      description: 'Hides the bottom delimiter background.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideDelimiters: {
      control: 'boolean',
      description: "Hides the carousel's bottom delimiters.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    interval: {
      control: 'number',
      description: 'The duration between image cycles. Requires the cycle prop.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '6000' } },
    },
    mandatory: {
      control: { type: 'select' },
      options: [false, true, 'force'],
      description: 'Forces at least one item to always be selected (if available).',
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: 'force' } },
    },
    modelValue: {
      control: false,
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'unknown' }, defaultValue: { summary: 'undefined' } },
    },
    nextIcon: {
      control: 'text',
      description: 'The displayed icon for forcing pagination to the next item.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$next' } },
    },
    prevIcon: {
      control: 'text',
      description: 'The displayed icon for forcing pagination to the previous item.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$prev' } },
    },
    progress: {
      control: 'text',
      description: 'Displays a carousel progress bar. Requires the cycle prop and interval.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse the normal transition direction.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'v-window-item--active' },
      },
    },
    showArrows: {
      control: 'text',
      description: 'Displays arrows for next/previous navigation.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'true' } },
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
    touch: {
      control: 'boolean',
      description: 'Provide a custom left and right function when swiped left or right.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'undefined' } },
    },
    transitionDuration: {
      control: 'number',
      description: 'Overrides transition duration.',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
    },
    verticalArrows: {
      control: { type: 'select' },
      options: [false, true, 'left', 'right'],
      description: 'Displays carousel arrows vertically.',
      table: {
        type: { summary: "boolean | 'left' | 'right'" },
        defaultValue: { summary: 'false' },
      },
    },
    verticalDelimiters: {
      control: { type: 'select' },
      options: [false, true, 'left', 'right'],
      description: 'Displays carousel delimiters vertically.',
      table: {
        type: { summary: "boolean | 'left' | 'right'" },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UCarousel, UCarouselItem },
  setup() {
    return { args };
  },
  template: `
    <u-carousel v-bind="args">
      <u-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></u-carousel-item>
      <u-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></u-carousel-item>
      <u-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></u-carousel-item>
    </u-carousel>
  `,
});

Default.args = {} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<u-carousel>
  <u-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    cover
  ></u-carousel-item>
  <u-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
    cover
  ></u-carousel-item>
  <u-carousel-item
    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
    cover
  ></u-carousel-item>
</u-carousel>`,
    },
  },
};

export const CustomDelimiters: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UCarousel, UCarouselItem, USheet },
  setup() {
    const colors = ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1'];
    const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    return { colors, slides };
  },
  template: `
    <u-card class="mx-auto" elevation="24" max-width="444">
      <u-carousel
        :continuous="false"
        :show-arrows="false"
        delimiter-icon="hugeicons:square"
        height="300"
        hide-delimiter-background
      >
        <u-carousel-item v-for="(slide, i) in slides" :key="i">
          <u-sheet :color="colors[i]" height="100%" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </u-sheet>
        </u-carousel-item>
      </u-carousel>
    </u-card>
  `,
});

CustomDelimiters.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" elevation="24" max-width="444">
    <u-carousel
      :continuous="false"
      :show-arrows="false"
      delimiter-icon="hugeicons:square"
      height="300"
      hide-delimiter-background
    >
      <u-carousel-item v-for="(slide, i) in slides" :key="i">
        <u-sheet :color="colors[i]" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </u-sheet>
      </u-carousel-item>
    </u-carousel>
  </u-card>
</template>

<script setup>
const colors = ['green', 'secondary', 'yellow darken-4', 'red lighten-2', 'orange darken-1']
const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
</script>`,
    },
  },
};

export const CustomTransition: StoryFn<ComponentArgs> = () => ({
  components: { UCarousel, UCarouselItem, UCode, UContainer },
  setup() {
    const items = [
      'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    ];
    return { items };
  },
  template: `
    <u-container max-width="600">
      <div class="mb-1 mt-6">
        <u-code class="bg-purple-darken-2">default, slower</u-code>
      </div>
      <u-carousel height="200" transition-duration="600">
        <u-carousel-item v-for="(src, i) in items" :key="i" :src="src" cover></u-carousel-item>
      </u-carousel>

      <div class="mb-1 mt-6">
        <u-code class="bg-purple-darken-2">crossfade</u-code>
      </div>
      <u-carousel height="200" transition-duration="700" crossfade>
        <u-carousel-item v-for="(src, i) in items" :key="i" :src="src" cover></u-carousel-item>
      </u-carousel>
    </u-container>
  `,
});

CustomTransition.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container max-width="600">
    <div class="mb-1 mt-6">
      <u-code class="bg-purple-darken-2">default, slower</u-code>
    </div>
    <u-carousel height="200" transition-duration="600">
      <u-carousel-item v-for="(src, i) in items" :key="i" :src="src" cover></u-carousel-item>
    </u-carousel>

    <div class="mb-1 mt-6">
      <u-code class="bg-purple-darken-2">crossfade</u-code>
    </div>
    <u-carousel height="200" transition-duration="700" crossfade>
      <u-carousel-item v-for="(src, i) in items" :key="i" :src="src" cover></u-carousel-item>
    </u-carousel>
  </u-container>
</template>

<script setup>
const items = [
  'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
]
</script>`,
    },
  },
};

export const Cycle: StoryFn<ComponentArgs> = () => ({
  components: { UCarousel, UCarouselItem, USheet },
  setup() {
    const colors = ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'];
    const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    return { colors, slides };
  },
  template: `
    <u-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
      <u-carousel-item v-for="(slide, i) in slides" :key="i">
        <u-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </u-sheet>
      </u-carousel-item>
    </u-carousel>
  `,
});

Cycle.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-carousel height="400" show-arrows="hover" cycle hide-delimiter-background>
    <u-carousel-item v-for="(slide, i) in slides" :key="i">
      <u-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </u-sheet>
    </u-carousel-item>
  </u-carousel>
</template>

<script setup>
const colors = ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4']
const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
</script>`,
    },
  },
};

export const HideControls: StoryFn<ComponentArgs> = () => ({
  components: { UCarousel, UCarouselItem },
  setup() {
    const items = [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
    ];
    return { items };
  },
  template: `
    <u-carousel :show-arrows="false">
      <u-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></u-carousel-item>
    </u-carousel>
  `,
});

HideControls.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-carousel :show-arrows="false">
    <u-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></u-carousel-item>
  </u-carousel>
</template>

<script setup>
const items = [
  { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
]
</script>`,
    },
  },
};

export const CustomizedArrows: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCarousel, UCarouselItem, USheet },
  setup() {
    const colors = ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4'];
    const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    return { colors, slides };
  },
  template: `
    <u-carousel height="400" hide-delimiter-background show-arrows>
      <template v-slot:prev="{ props }">
        <u-btn color="success" variant="elevated" @click="props.onClick">Previous slide</u-btn>
      </template>
      <template v-slot:next="{ props }">
        <u-btn color="info" variant="elevated" @click="props.onClick">Next slide</u-btn>
      </template>
      <u-carousel-item v-for="(slide, i) in slides" :key="i">
        <u-sheet :color="colors[i]" height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </u-sheet>
      </u-carousel-item>
    </u-carousel>
  `,
});

CustomizedArrows.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-carousel height="400" hide-delimiter-background show-arrows>
    <template v-slot:prev="{ props }">
      <u-btn color="success" variant="elevated" @click="props.onClick">Previous slide</u-btn>
    </template>
    <template v-slot:next="{ props }">
      <u-btn color="info" variant="elevated" @click="props.onClick">Next slide</u-btn>
    </template>
    <u-carousel-item v-for="(slide, i) in slides" :key="i">
      <u-sheet :color="colors[i]" height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </u-sheet>
    </u-carousel-item>
  </u-carousel>
</template>

<script setup>
const colors = ['indigo', 'warning', 'pink darken-2', 'red lighten-1', 'deep-purple accent-4']
const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
</script>`,
    },
  },
};

export const HideDelimiters: StoryFn<ComponentArgs> = () => ({
  components: { UCarousel, UCarouselItem },
  setup() {
    const items = [
      { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
      { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
    ];
    return { items };
  },
  template: `
    <u-carousel hide-delimiters>
      <u-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        cover
      ></u-carousel-item>
    </u-carousel>
  `,
});

HideDelimiters.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-carousel hide-delimiters>
    <u-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      cover
    ></u-carousel-item>
  </u-carousel>
</template>

<script setup>
const items = [
  { src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg' },
  { src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg' },
]
</script>`,
    },
  },
};

export const Progress: StoryFn<ComponentArgs> = () => ({
  components: { UCarousel, UCarouselItem, USheet },
  setup() {
    const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
    return { slides };
  },
  template: `
    <u-carousel height="400" progress="primary" hide-delimiters>
      <u-carousel-item v-for="(slide, i) in slides" :key="i">
        <u-sheet height="100%">
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">{{ slide }} Slide</div>
          </div>
        </u-sheet>
      </u-carousel-item>
    </u-carousel>
  `,
});

Progress.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-carousel height="400" progress="primary" hide-delimiters>
    <u-carousel-item v-for="(slide, i) in slides" :key="i">
      <u-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">{{ slide }} Slide</div>
        </div>
      </u-sheet>
    </u-carousel-item>
  </u-carousel>
</template>

<script setup>
const slides = ['First', 'Second', 'Third', 'Fourth', 'Fifth']
</script>`,
    },
  },
};

export const Model: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCarousel, UCarouselItem, USheet },
  setup() {
    const colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'];
    const model = ref(0);
    return { colors, model };
  },
  template: `
    <div>
      <div class="d-flex justify-space-around align-center py-4">
        <u-btn
          icon="hugeicons:minus-sign"
          variant="text"
          @click="model = Math.max(model - 1, 0)"
        ></u-btn>
        {{ model }}
        <u-btn
          icon="hugeicons:plus-sign"
          variant="text"
          @click="model = Math.min(model + 1, 4)"
        ></u-btn>
      </div>
      <u-carousel v-model="model">
        <u-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
          <u-sheet :color="color" height="100%" tile>
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </div>
          </u-sheet>
        </u-carousel-item>
      </u-carousel>
    </div>
  `,
});

Model.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <div class="d-flex justify-space-around align-center py-4">
      <u-btn
        icon="hugeicons:minus-sign"
        variant="text"
        @click="model = Math.max(model - 1, 0)"
      ></u-btn>
      {{ model }}
      <u-btn
        icon="hugeicons:plus-sign"
        variant="text"
        @click="model = Math.min(model + 1, 4)"
      ></u-btn>
    </div>
    <u-carousel v-model="model">
      <u-carousel-item v-for="(color, i) in colors" :key="color" :value="i">
        <u-sheet :color="color" height="100%" tile>
          <div class="d-flex fill-height justify-center align-center">
            <div class="text-h2">Slide {{ i + 1 }}</div>
          </div>
        </u-sheet>
      </u-carousel-item>
    </u-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const colors = ['primary', 'secondary', 'yellow darken-2', 'red', 'orange']
const model = ref(0)
</script>`,
    },
  },
};

export const VerticalWithOverlay: StoryFn<ComponentArgs> = () => ({
  components: {
    UCarousel,
    UCarouselItem,
    UChip,
    UDefaultsProvider,
    UListItem,
    UOverlay,
    USlideXTransition,
    USheet,
  },
  setup() {
    const currentIndex = shallowRef(0);
    const currentItem = toRef(() => items[currentIndex.value]);
    const items = [
      {
        authorName: 'Bettany Nichols',
        avatarId: 'women/31',
        subtitle: '31k followers',
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
      },
      {
        authorName: 'Greg Kovalsky',
        avatarId: 'men/61',
        subtitle: '412 followers',
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
      },
      {
        authorName: 'Emma Kathleen',
        avatarId: 'women/34',
        subtitle: '521 followers',
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
      },
      {
        authorName: 'Anthony McKenzie',
        avatarId: 'men/78',
        subtitle: '6k followers',
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
      },
    ];
    return { currentIndex, currentItem, items };
  },
  template: `
    <u-defaults-provider :defaults="{ VBtn: { variant: 'outlined', color: '#eee' } }">
      <u-sheet class="overflow-hidden" max-width="700" rounded="xl">
        <u-carousel
          v-model="currentIndex"
          direction="vertical"
          height="400"
          progress="red"
          vertical-arrows="left"
          vertical-delimiters="right"
          hide-delimiter-background
        >
          <u-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            cover
          ></u-carousel-item>

          <u-overlay
            :scrim="false"
            content-class="w-100 h-100 d-flex flex-column align-center justify-space-between pointer-pass-through py-3"
            contained
            model-value
            no-click-animation
            persistent
          >
            <u-slide-x-transition mode="out-in" appear>
              <u-sheet :key="currentIndex" rounded="xl">
                <u-list-item
                  :prepend-avatar="'https://randomuser.me/api/portraits/' + currentItem.avatarId + '.jpg'"
                  :subtitle="currentItem.subtitle"
                  :title="currentItem.authorName"
                  class="pa-1 pr-6"
                ></u-list-item>
              </u-sheet>
            </u-slide-x-transition>
            <u-chip
              :text="currentIndex + 1 + ' / ' + items.length"
              color="#eee"
              size="small"
              variant="flat"
            ></u-chip>
          </u-overlay>
        </u-carousel>
      </u-sheet>
    </u-defaults-provider>
  `,
});

VerticalWithOverlay.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-defaults-provider :defaults="{ VBtn: { variant: 'outlined', color: '#eee' } }">
    <u-sheet class="overflow-hidden" max-width="700" rounded="xl">
      <u-carousel
        v-model="currentIndex"
        direction="vertical"
        height="400"
        progress="red"
        vertical-arrows="left"
        vertical-delimiters="right"
        hide-delimiter-background
      >
        <u-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          cover
        ></u-carousel-item>

        <u-overlay
          :scrim="false"
          content-class="w-100 h-100 d-flex flex-column align-center justify-space-between pointer-pass-through py-3"
          contained
          model-value
          no-click-animation
          persistent
        >
          <u-slide-x-transition mode="out-in" appear>
            <u-sheet :key="currentIndex" rounded="xl">
              <u-list-item
                :prepend-avatar="'https://randomuser.me/api/portraits/' + currentItem.avatarId + '.jpg'"
                :subtitle="currentItem.subtitle"
                :title="currentItem.authorName"
                class="pa-1 pr-6"
              ></u-list-item>
            </u-sheet>
          </u-slide-x-transition>
          <u-chip
            :text="currentIndex + 1 + ' / ' + items.length"
            color="#eee"
            size="small"
            variant="flat"
          ></u-chip>
        </u-overlay>
      </u-carousel>
    </u-sheet>
  </u-defaults-provider>
</template>

<script setup>
import { shallowRef, toRef } from 'vue'

const currentIndex = shallowRef(0)
const currentItem = toRef(() => items[currentIndex.value])
const items = [
  {
    authorName: 'Bettany Nichols',
    avatarId: 'women/31',
    subtitle: '31k followers',
    src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
  },
  {
    authorName: 'Greg Kovalsky',
    avatarId: 'men/61',
    subtitle: '412 followers',
    src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
  },
  {
    authorName: 'Emma Kathleen',
    avatarId: 'women/34',
    subtitle: '521 followers',
    src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
  },
  {
    authorName: 'Anthony McKenzie',
    avatarId: 'men/78',
    subtitle: '6k followers',
    src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
  },
]
</script>`,
    },
  },
};
