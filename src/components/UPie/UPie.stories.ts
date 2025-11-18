import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref, shallowRef, toRef, watch } from 'vue';

import {
  UAvatar,
  UCard,
  UCardTitle,
  UCode,
  UContainer,
  UDivider,
  UIcon,
  UList,
  UListItem,
  UPie,
  USelect,
  USheet,
} from '../index';

interface ComponentArgs {
  animation?: boolean | object;
  bgColor?: string;
  density?: 'default' | 'comfortable' | 'compact';
  gap?: string | number;
  gaugeCut?: string | number;
  hideSlice?: boolean;
  hoverScale?: string | number;
  innerCut?: string | number;
  itemKey?: string;
  items?: Record<string, any>[];
  itemTitle?: string;
  itemValue?: string;
  legend?: boolean | object;
  palette?: (string | { color: string; pattern: string })[];
  reveal?: boolean | { duration: number };
  rotate?: string | number;
  rounded?: string | number;
  size?: string | number;
  title?: string;
  tooltip?: boolean | object;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & display/Pie Chart',
  component: UPie,
  parameters: {
    docs: {
      description: {
        component:
          'The u-pie component is design to display either pie or a donut chart with integrated tooltips and legend.',
      },
      import: `import { UPie } from '@ultimate/core-ui/components'`,
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
  <u-pie${attrsString}></u-pie>
</template>`;
        },
      },
    },
    Vuetify: {
      component: 'VPie',
      content:
        "This component is built on top of Vuetify's VPie component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/labs/pie-charts/',
    },
    Primary: {
      description:
        'The u-pie component displays pie or donut charts with integrated tooltips and legend.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-pie',
            link: 'https://vuetifyjs.com/en/api/v-pie/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-pie-segment',
            link: 'https://vuetifyjs.com/en/api/v-pie-segment/',
          },
          description: 'Sub-component used to display a single segment',
        },
        {
          element: {
            title: 'v-pie-tooltip',
            link: 'https://vuetifyjs.com/en/api/v-pie-tooltip/',
          },
          description: 'Chart tooltip component based on v-list-item',
        },
      ],
    },
  },
  argTypes: {
    animation: {
      control: { type: 'boolean' },
      description:
        'Controls duration and easing of the expand/collapse and hover effect. Defaults to easeInOutCubic over 400ms.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    bgColor: {
      control: { type: 'text' },
      description:
        "Applies specified color to the control's background. Supports utility colors or css color values.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'default'" },
        category: 'Props',
      },
    },
    gap: {
      control: { type: 'number' },
      description: 'Reduces segment size by a specified angle. Recommended to in range (0-10).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    gaugeCut: {
      control: { type: 'number' },
      description:
        'Allows removing bottom part of the chart to make it into a gauge. Expects angle (0-180).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    hideSlice: {
      control: { type: 'boolean' },
      description: 'Makes inner slice invisible instead of semi-transparent.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    hoverScale: {
      control: { type: 'number' },
      description:
        'Enables interactive behavior by reducing segment size until it gets hovered. Expects fraction value (0-0.25).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0.05' },
        category: 'Props',
      },
    },
    innerCut: {
      control: { type: 'number' },
      description: 'Specifies inner radius for a donut-style chart as a percent (0-100).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    itemKey: {
      control: { type: 'text' },
      description: 'Property name for item key.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'key'" },
        category: 'Props',
      },
    },
    items: {
      control: { type: 'object' },
      description: 'Data items expected to contain key, title and value.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'Props',
      },
    },
    itemTitle: {
      control: { type: 'text' },
      description: 'Property name for item title.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'title'" },
        category: 'Props',
      },
    },
    itemValue: {
      control: { type: 'text' },
      description: 'Property name for item value.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'value'" },
        category: 'Props',
      },
    },
    legend: {
      control: { type: 'boolean' },
      description: 'Controls legend visibility, position and text format.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    palette: {
      control: { type: 'object' },
      description: 'Defines colors and patterns to be applied based on the data items order.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
        category: 'Props',
      },
    },
    reveal: {
      control: { type: 'boolean' },
      description: 'Enables and controls duration for initial reveal animation.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    rotate: {
      control: { type: 'number' },
      description: 'Rotates the chart segments clockwise.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    rounded: {
      control: { type: 'number' },
      description: 'Number passed as corner radius relative to 100x100 SVG viewport.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    size: {
      control: { type: 'number' },
      description: 'Sets the height and width of the chart (excluding title and legend).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '250' },
        category: 'Props',
      },
    },
    title: {
      control: { type: 'text' },
      description: 'Specify a title text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    tooltip: {
      control: { type: 'boolean' },
      description:
        'Controls tooltip visibility, transition, offset from the cursor and formats of title and subtitle.',
      table: {
        type: { summary: 'boolean | object' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UPie },
  setup() {
    return { args };
  },
  template: `<u-pie v-bind="args"/>`,
});

Default.args = {
  title: 'Basic pie',
  palette: ['#048BA8', '#99C24D', '#F18F01'],
  items: [
    { key: 1, title: 'Yes', value: 45 },
    { key: 2, title: 'No', value: 40 },
    { key: 3, title: 'Maybe', value: 15 },
  ],
} as ComponentArgs;

/**
 * Charts are more like drawings then regular HTML elements and their size needs to be controlled externally.
 * hover-scale will reserve some space to enlarge segments on hover.
 */
export const Size: StoryFn<ComponentArgs> = () => ({
  components: { UCode, UContainer, UDivider, UPie, USheet },
  setup() {
    const items = [
      { key: 1, title: 'Series A', value: 45, color: '#2b6d40' },
      { key: 2, title: 'Series B', value: 30, color: '#4e9963' },
      { key: 3, title: 'Series C', value: 15, color: '#72c789' },
      { key: 4, title: 'Series D', value: 10, color: '#97f7b0' },
    ];

    return { items };
  },
  template: `
    <u-container class="d-flex flex-wrap justify-center align-start ga-6" fluid>
      <div>
        <u-sheet class="pa-3" rounded="xl" variant="outlined">
          <u-pie :items="items" hover-scale=".2" size="150"></u-pie>
        </u-sheet>
        <ul class="mt-3 pl-6">
          <li><u-code>size: 150px</u-code></li>
          <li><u-code>20% reserved</u-code></li>
        </ul>
      </div>

      <u-divider class="hidden-sm-and-down" vertical></u-divider>

      <div>
        <u-sheet class="pa-3" rounded="xl" variant="outlined">
          <u-pie :items="items" hover-scale=".1" size="200"></u-pie>
        </u-sheet>
        <ul class="mt-3 pl-6">
          <li><u-code>size: 200px</u-code></li>
          <li><u-code>10% reserved</u-code></li>
        </ul>
      </div>

      <u-divider class="hidden-sm-and-down" vertical></u-divider>

      <div>
        <u-sheet class="pa-3" rounded="xl" variant="outlined">
          <u-pie :items="items" hover-scale="0" size="250"></u-pie>
        </u-sheet>
        <ul class="mt-3 pl-6">
          <li><u-code>size: 250px</u-code></li>
          <li><u-code>no zoom on hover</u-code></li>
        </ul>
      </div>
    </u-container>
  `,
});

Size.args = {} as ComponentArgs;

Size.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container class="d-flex flex-wrap justify-center align-start ga-6" fluid>

    <div>
      <u-sheet class="pa-3" rounded="xl" variant="outlined">
        <u-pie :items="items" hover-scale=".2" size="150"></u-pie>
      </u-sheet>
      <ul class="mt-3 pl-6">
        <li><u-code>size: 150px</u-code></li>
        <li><u-code>20% reserved</u-code></li>
      </ul>
    </div>

    <u-divider class="hidden-sm-and-down" vertical></u-divider>

    <div>
      <u-sheet class="pa-3" rounded="xl" variant="outlined">
        <u-pie :items="items" hover-scale=".1" size="200"></u-pie>
      </u-sheet>
      <ul class="mt-3 pl-6">
        <li><u-code>size: 200px</u-code></li>
        <li><u-code>10% reserved</u-code></li>
      </ul>
    </div>

    <u-divider class="hidden-sm-and-down" vertical></u-divider>

    <div>
      <u-sheet class="pa-3" rounded="xl" variant="outlined">
        <u-pie :items="items" hover-scale="0" size="250"></u-pie>
      </u-sheet>
      <ul class="mt-3 pl-6">
        <li><u-code>size: 250px</u-code></li>
        <li><u-code>no zoom on hover</u-code></li>
      </ul>
    </div>

  </u-container>
</template>
<script setup>
  const items = [
    { key: 1, title: 'Series A', value: 45, color: '#2b6d40' },
    { key: 2, title: 'Series B', value: 30, color: '#4e9963' },
    { key: 3, title: 'Series C', value: 15, color: '#72c789' },
    { key: 4, title: 'Series D', value: 10, color: '#97f7b0' },
  ]
</script>`,
    },
  },
};

/**
 * Colors can be conveniently passed to a dedicated palette prop.
 */
export const Palette: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UList, UListItem, UPie },
  setup() {
    const currentPalette = ref([0]);
    const palettes = [
      ['#00876c', '#88af77', '#e3d49c', '#df915c', '#d43d51'],
      ['#004c6d', '#056890', '#0885b4', '#08a4d9', '#00c4ff'],
      ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
      [
        { color: '#1dc690', pattern: 'url(#pattern-0)' },
        '#278ab0',
        '#1c4670',
        '#7a7aff',
        '#daba50',
      ],
    ];

    const items = [
      { key: 1, title: 'TypeScript', value: 52.3 },
      { key: 2, title: 'Elm', value: 11.6 },
      { key: 3, title: 'CoffeeScript', value: 6.2 },
      { key: 4, title: 'Civet', value: 3.0 },
      { key: 5, title: 'N/A', value: 26.9 },
    ];

    return { currentPalette, palettes, items };
  },
  template: `
    <div class="d-flex justify-center py-6">
      <div class="h-0">
        <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="pattern-0"
              height="20"
              patternTransform="rotate(145) scale(.2)"
              patternUnits="userSpaceOnUse"
              width="20"
            >
              <path d="M0 10h20zm0 20h20zm0 20h20zm0 20h20z" fill="none" stroke="rgb(var(--v-theme-surface))" stroke-width="3" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div class="d-flex flex-wrap justify-center align-center ga-12">
        <u-pie
          :items="items"
          :palette="palettes[currentPalette[0]]"
          hover-scale="0"
          inner-cut="75"
          hide-slice
          tooltip
        ></u-pie>

        <u-list v-model:selected="currentPalette" class="flex-shrink-0 py-0 bg-transparent" mandatory selectable>
          <u-list-item v-for="(palette, pi) in palettes" :key="pi" :value="pi" border="t b">
            <u-avatar
              v-for="(c, ci) in palette"
              :key="ci"
              :color="c.color || c"
              class="ma-2 elevation-2"
              rounded="lg"
              size="24"
            >
              <svg v-if="c.pattern" height="24" width="24">
                <rect :fill="c.pattern" height="24" width="24" />
              </svg>
            </u-avatar>
          </u-list-item>
        </u-list>
      </div>
    </div>
  `,
});

Palette.args = {} as ComponentArgs;

Palette.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-center py-6">
    <div class="h-0">
      <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern-0"
            height="20"
            patternTransform="rotate(145) scale(.2)"
            patternUnits="userSpaceOnUse"
            width="20"
          >
            <path d="M0 10h20zm0 20h20zm0 20h20zm0 20h20z" fill="none" stroke="rgb(var(--v-theme-surface))" stroke-width="3" />
          </pattern>
        </defs>
      </svg>
    </div>

    <div class="d-flex flex-wrap justify-center align-center ga-12">
      <u-pie
        :items="items"
        :palette="palettes[currentPalette]"
        hover-scale="0"
        inner-cut="75"
        hide-slice
        tooltip
      ></u-pie>

      <u-list v-model:selected="currentPalette" class="flex-shrink-0 py-0 bg-transparent" mandatory selectable>
        <u-list-item v-for="(palette, pi) in palettes" :key="pi" :value="pi" border="t b">
          <u-avatar
            v-for="(c, ci) in palette"
            :key="ci"
            :color="c.color || c"
            class="ma-2 elevation-2"
            rounded="lg"
            size="24"
          >
            <svg v-if="c.pattern" height="24" width="24">
              <rect :fill="c.pattern" height="24" width="24" />
            </svg>
          </u-avatar>
        </u-list-item>
      </u-list>
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const currentPalette = ref(0)
  const palettes = [
    ['#00876c', '#88af77', '#e3d49c', '#df915c', '#d43d51'],
    ['#004c6d', '#056890', '#0885b4', '#08a4d9', '#00c4ff'],
    ['#003f5c', '#58508d', '#bc5090', '#ff6361', '#ffa600'],
    [{ color: '#1dc690', pattern: 'url(#pattern-0)' }, '#278ab0', '#1c4670', '#7a7aff', '#daba50'],
  ]

  const items = [
    { key: 1, title: 'TypeScript', value: 52.3 },
    { key: 2, title: 'Elm', value: 11.6 },
    { key: 3, title: 'CoffeeScript', value: 6.2 },
    { key: 4, title: 'Civet', value: 3.0 },
    { key: 5, title: 'N/A', value: 26.9 },
  ]
</script>`,
    },
  },
};

/**
 * The legend can be moved to any side or hidden entirely.
 * With little effort you can also control legend's and tooltip's text.
 */
export const LegendPosition: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, UPie, USelect, USheet },
  setup() {
    const legendMode = ref('right');
    const legendConfig = ref<boolean | { position: string }>({ position: 'right' });
    const items = [
      { key: 2, title: 'Google', value: 75, color: '#0080bb' },
      { key: 1, title: 'Bing', value: 20, color: '#58508d' },
      { key: 3, title: 'DuckDuckGo', value: 17, color: '#bc5090' },
      { key: 4, title: 'Brave', value: 15, color: '#ff6361' },
      { key: 5, title: 'Kagi', value: 5, color: '#ffa600' },
    ];
    const total = computed(() => items.reduce((sum, n) => sum + n.value, 0));

    const numberFormatter = new Intl.NumberFormat('en', { useGrouping: true });
    function formatNumber(v: number) {
      return numberFormatter.format(v);
    }

    watch(legendMode, (mode) => {
      legendConfig.value = mode === 'hidden' ? false : { position: mode };
    });

    return { legendMode, legendConfig, items, total, formatNumber };
  },
  template: `
    <u-container class="d-flex flex-column align-center justify-center">
      <u-select
        v-model="legendMode"
        :items="[
          { prependIcon: 'hugeicons:arrow-up-01', value: 'top', title :'top' },
          { prependIcon: 'hugeicons:arrow-right-01', value: 'right', title :'right' },
          { prependIcon: 'hugeicons:arrow-down-01', value: 'bottom', title :'bottom' },
          { prependIcon: 'hugeicons:arrow-left-01', value: 'left', title :'left' },
          { prependIcon: 'hugeicons:view-off', value: 'hidden', title :'hidden' },
        ]"
        prefix="Legend mode: "
        rounded="xl"
        variant="solo"
        width="350"
        item-props
        single-line
      ></u-select>

      <u-sheet class="pa-6" elevation="6" rounded="xl">
        <u-pie
          :items="items"
          :legend="legendConfig"
          :tooltip="{ subtitleFormat: (s) => \`\${formatNumber(s.value)} respondents (\${(100 * s.value / total).toFixed(1)}%)\` }"
          inner-cut="85"
          size="300"
          animation
          hide-slice
        >
          <template v-slot:legend-text="{ item }">
            <div class="d-flex ga-6">
              <div>{{ item.title }}</div>

              <div class="ml-auto font-weight-bold">
                {{ formatNumber(item.value) }}
              </div>
            </div>
          </template>
        </u-pie>
      </u-sheet>
    </u-container>
  `,
});

LegendPosition.args = {} as ComponentArgs;

LegendPosition.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container class="d-flex flex-column align-center justify-center">
    <u-select
      v-model="legendMode"
      :items="[
        { prependIcon: 'hugeicons:arrow-up-01', value: 'top', title :'top' },
        { prependIcon: 'hugeicons:arrow-right-01', value: 'right', title :'right' },
        { prependIcon: 'hugeicons:arrow-down-01', value: 'bottom', title :'bottom' },
        { prependIcon: 'hugeicons:arrow-left-01', value: 'left', title :'left' },
        { prependIcon: 'hugeicons:view-off', value: 'hidden', title :'hidden' },
      ]"
      prefix="Legend mode: "
      rounded="xl"
      variant="solo"
      width="350"
      item-props
      single-line
    ></u-select>

    <u-sheet class="pa-6" elevation="6" rounded="xl">
      <u-pie
        :items="items"
        :legend="legendConfig"
        :tooltip="{ subtitleFormat: (s) => \`\${formatNumber(s.value)} respondents (\${(100 * s.value / total).toFixed(1)}%)\` }"
        inner-cut="85"
        size="300"
        animation
        hide-slice
      >
        <template v-slot:legend-text="{ item }">
          <div class="d-flex ga-6">
            <div>{{ item.title }}</div>

            <div class="ml-auto font-weight-bold">
              {{ formatNumber(item.value) }}
            </div>
          </div>
        </template>
      </u-pie>
    </u-sheet>
  </u-container>
</template>
<script setup>
  import { computed, ref, watch } from 'vue'

  const numberFormatter = new Intl.NumberFormat('en', { useGrouping: true })
  function formatNumber (v) {
    return numberFormatter.format(v)
  }

  const legendMode = ref('right')
  const legendConfig = ref({ position: 'right' })
  const items = [
    { key: 2, title: 'Google', value: 75, color: '#0080bb' },
    { key: 1, title: 'Bing', value: 20, color: '#58508d' },
    { key: 3, title: 'DuckDuckGo', value: 17, color: '#bc5090' },
    { key: 4, title: 'Brave', value: 15, color: '#ff6361' },
    { key: 5, title: 'Kagi', value: 5, color: '#ffa600' },
  ]
  const total = computed(() => items.reduce((sum, n) => sum + n.value, 0))

  watch(legendMode, mode => {
    legendConfig.value = mode === 'hidden'
      ? { visible: false }
      : { position: mode }
  })
</script>`,
    },
  },
};

/**
 * Single item representation can be easily customized with string templates.
 */
export const ItemTextOverrides: StoryFn<ComponentArgs> = () => ({
  components: { UPie },
  setup() {
    const items = [
      { key: 1, title: 'TypeScript', value: 52.3, color: '#13475c' },
      { key: 2, title: 'Elm', value: 11.6, color: '#006c71' },
      { key: 3, title: 'CoffeeScript', value: 6.2, color: '#008e59' },
      { key: 4, title: 'Civet', value: 3.0, color: '#ffa600' },
      { key: 5, title: 'N/A', value: 26.9, color: '#6662' },
    ];

    return { items };
  },
  template: `
    <div class="d-flex justify-center py-3">
      <u-pie
        :items="items"
        :legend="{ textFormat: '[title] ([value]%)' }"
        :tooltip="{ subtitleFormat: '[value]%' }"
        gap="4"
        hover-scale="0"
        inner-cut="85"
        size="300"
        animation
        hide-slice
      ></u-pie>
    </div>
  `,
});

ItemTextOverrides.args = {} as ComponentArgs;

ItemTextOverrides.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex justify-center py-3">
    <u-pie
      :items="items"
      :legend="{ textFormat: '[title] ([value]%)' }"
      :tooltip="{ subtitleFormat: '[value]%' }"
      gap="4"
      hover-scale="0"
      inner-cut="85"
      size="300"
      animation
      hide-slice
    ></u-pie>
  </div>
</template>
<script setup>
  const items = [
    { key: 1, title: 'TypeScript', value: 52.3, color: '#13475c' },
    { key: 2, title: 'Elm', value: 11.6, color: '#006c71' },
    { key: 3, title: 'CoffeeScript', value: 6.2, color: '#008e59' },
    { key: 4, title: 'Civet', value: 3.0, color: '#ffa600' },
    { key: 5, title: 'N/A', value: 26.9, color: '#6662' },
  ]
</script>`,
    },
  },
};

/**
 * Legend does not need to be a list of chips. You can fully override it to match the expected design.
 */
export const CustomLegend: StoryFn<ComponentArgs> = () => ({
  components: { UAvatar, UCard, UCardTitle, UList, UListItem, UPie, USelect },
  setup() {
    const selectedGroup = shallowRef('Transactions');
    const currentItems = toRef(() =>
      selectedGroup.value === 'Transactions'
        ? [
            {
              id: 1,
              title: 'House & Bills',
              value: 40,
              color: 'rgba(var(--v-theme-on-surface), .2)',
              pattern: 'url(#pattern-0)',
            },
            { id: 2, title: 'Transportation', value: 25, color: 'rgba(255, 151, 215, .4)' },
            { id: 3, title: 'Entertainment', value: 20, color: 'rgba(255, 151, 215, .6)' },
            { id: 4, title: 'Food', value: 10, color: 'rgba(255, 151, 215, .8)' },
            { id: 5, title: 'Other', value: 5, color: 'rgba(255, 151, 215, 1)' },
          ]
        : [
            { id: 1, title: 'OSS Donations', value: 37, color: '#767119' },
            { id: 2, title: 'Travel', value: 22, color: '#9e850d' },
            { id: 3, title: 'Investment', value: 20, color: '#cb9700' },
            { id: 4, title: 'Books', value: 11, color: '#ffa600' },
          ]
    );

    return { selectedGroup, currentItems };
  },
  template: `
    <div class="d-flex my-6 justify-center">
      <u-card class="pa-6" elevation="6" rounded="xl">
        <u-card-title class="d-flex align-center justify-space-between">
          <div class="text-truncate mr-6">Expenses</div>
          <u-select
            v-model="selectedGroup"
            :items="['Transactions', 'Other']"
            density="compact"
            max-width="200"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></u-select>
        </u-card-title>

        <u-pie
          :key="selectedGroup"
          :items="currentItems"
          :legend="{ position: 'right' }"
          :tooltip="{ subtitleFormat: '[value]%' }"
          class="pa-3 mt-3 justify-center"
          gap="2"
          inner-cut="70"
          item-key="id"
          rounded="2"
          size="300"
          animation
          hide-slice
          reveal
        >
          <template v-slot:center>
            <div class="text-center">
              <div class="text-h3">130</div>
              <div class="opacity-70 mt-1 mb-n1">Total</div>
            </div>
          </template>

          <template v-slot:legend="{ items, toggle, isActive }">
            <u-list class="py-0 mb-n5 mb-md-0 bg-transparent" density="compact" width="300">
              <u-list-item
                v-for="item in items"
                :key="item.key"
                :class="['my-1', { 'opacity-40': !isActive(item) }]"
                :title="item.title"
                rounded="lg"
                link
                @click="toggle(item)"
              >
                <template v-slot:prepend>
                  <u-avatar :color="item.color" :size="16"></u-avatar>
                </template>
                <template v-slot:append>
                  <div class="font-weight-bold">{{ item.value }}%</div>
                </template>
              </u-list-item>
            </u-list>
          </template>
        </u-pie>
      </u-card>
    </div>

    <div class="h-0">
      <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="pattern-0"
            height="20"
            patternTransform="rotate(145) scale(.2)"
            patternUnits="userSpaceOnUse"
            width="20"
          >
            <path d="M0 10h20zm0 20h20zm0 20h20zm0 20h20z" fill="none" stroke="rgb(var(--v-theme-surface))" stroke-width="3" />
          </pattern>
        </defs>
      </svg>
    </div>
  `,
});

CustomLegend.args = {} as ComponentArgs;

CustomLegend.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="d-flex my-6 justify-center">
    <u-card class="pa-6" elevation="6" rounded="xl">
      <u-card-title class="d-flex align-center justify-space-between">
        <div class="text-truncate mr-6">Expenses</div>
        <u-select
          v-model="selectedGroup"
          :items="['Transactions', 'Other']"
          density="compact"
          max-width="200"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></u-select>
      </u-card-title>

      <u-pie
        :key="selectedGroup"
        :items="currentItems"
        :legend="{ position: 'right' }"
        :tooltip="{ subtitleFormat: '[value]%' }"
        class="pa-3 mt-3 justify-center"
        gap="2"
        inner-cut="70"
        item-key="id"
        rounded="2"
        size="300"
        animation
        hide-slice
        reveal
      >
        <template v-slot:center>
          <div class="text-center">
            <div class="text-h3">130</div>
            <div class="opacity-70 mt-1 mb-n1">Total</div>
          </div>
        </template>

        <template v-slot:legend="{ items, toggle, isActive }">
          <u-list class="py-0 mb-n5 mb-md-0 bg-transparent" density="compact" width="300">
            <u-list-item
              v-for="item in items"
              :key="item.key"
              :class="['my-1', { 'opacity-40': !isActive(item) }]"
              :title="item.title"
              rounded="lg"
              link
              @click="toggle(item)"
            >
              <template v-slot:prepend>
                <u-avatar :color="item.color" :size="16"></u-avatar>
              </template>
              <template v-slot:append>
                <div class="font-weight-bold">{{ item.value }}%</div>
              </template>
            </u-list-item>
          </u-list>
        </template>
      </u-pie>
    </u-card>
  </div>

  <div class="h-0">
    <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="pattern-0"
          height="20"
          patternTransform="rotate(145) scale(.2)"
          patternUnits="userSpaceOnUse"
          width="20"
        >
          <path d="M0 10h20zm0 20h20zm0 20h20zm0 20h20z" fill="none" stroke="rgb(var(--v-theme-surface))" stroke-width="3" />
        </pattern>
      </defs>
    </svg>
  </div>
</template>
<script setup>
  import { shallowRef, toRef } from 'vue'

  const selectedGroup = shallowRef('Transactions')
  const currentItems = toRef(() => selectedGroup.value === 'Transactions'
    ? [
      { id: 1, title: 'House & Bills', value: 40, color: 'rgba(var(--v-theme-on-surface), .2)', pattern: 'url(#pattern-0)' },
      { id: 2, title: 'Transportation', value: 25, color: 'rgba(255, 151, 215, .4)' },
      { id: 3, title: 'Entertainment', value: 20, color: 'rgba(255, 151, 215, .6)' },
      { id: 4, title: 'Food', value: 10, color: 'rgba(255, 151, 215, .8)' },
      { id: 5, title: 'Other', value: 5, color: 'rgba(255, 151, 215, 1)' },
    ]
    : [
      { id: 1, title: 'OSS Donations', value: 37, color: '#767119' },
      { id: 2, title: 'Travel', value: 22, color: '#9e850d' },
      { id: 3, title: 'Investment', value: 20, color: '#cb9700' },
      { id: 4, title: 'Books', value: 11, color: '#ffa600' },
    ])
</script>`,
    },
  },
};

/**
 * The following example demonstrates how to provide overlay patterns to support users with vision impairments.
 */
export const OverlayPatterns: StoryFn<ComponentArgs> = () => ({
  components: { UContainer, UIcon, UPie },
  setup() {
    const items = [
      { key: 1, title: 'Walnut', value: 57, color: '#607322', pattern: 'url(#pattern-1)' },
      { key: 2, title: 'Oak', value: 31, color: '#c19a00', pattern: 'url(#pattern-2)' },
      { key: 3, title: 'Pine', value: 12, color: '#ffa600', pattern: 'url(#pattern-3)' },
    ];

    return { items };
  },
  template: `
    <u-container class="d-flex justify-center">
      <div class="h-0">
        <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
          <!-- source: https://pattern.monster -->
          <defs>
            <pattern
              id="pattern-1"
              height="20"
              patternTransform="scale(.5)"
              patternUnits="userSpaceOnUse"
              width="40"
            >
              <path
                d="M40 0 20-10V0l20 10zm0 10L20 0v10l20 10zm0 10L20 10v10l20 10zM0 20l20-10v10L0 30zm0-10L20 0v10L0 20zM0 0l20-10V0L0 10z"
                fill="none"
                stroke="rgb(var(--v-theme-surface))"
              />
            </pattern>
            <pattern
              id="pattern-2"
              height="8"
              patternTransform="scale(.5)"
              patternUnits="userSpaceOnUse"
              width="70"
            >
              <path
                d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2s14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6S49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14S20.785-8.742 16.3-3.661C11.918 1.306 8.353 6-.02 6.002"
                fill="none"
                stroke="rgb(var(--v-theme-surface))"
              />
            </pattern>
            <pattern
              id="pattern-3"
              height="10"
              patternTransform="scale(.5)"
              patternUnits="userSpaceOnUse"
              width="10"
            >
              <path
                d="M5 0v10ZM0 5h10Z"
                fill="none"
                stroke="rgb(var(--v-theme-surface))"
              />
            </pattern>
          </defs>
        </svg>
      </div>

      <div class="d-flex mt-6 justify-center">
        <u-pie
          :items="items"
          :legend="{ position: 'left' }"
          :tooltip="{ subtitleFormat: '[value]%' }"
          hover-scale=".1"
          inner-cut="60"
          animation
          hide-slice
        >
          <template v-slot:center>
            <div class="text-center">
              <u-icon class="opacity-60" icon="hugeicons:leaf-01" size="44"></u-icon>
            </div>
          </template>
        </u-pie>
      </div>
    </u-container>
  `,
});

OverlayPatterns.args = {} as ComponentArgs;

OverlayPatterns.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container class="d-flex justify-center">
    <div class="h-0">
      <svg height="0" version="1.1" width="0" xmlns="http://www.w3.org/2000/svg">
        <!-- source: https://pattern.monster -->
        <defs>
          <pattern
            id="pattern-1"
            height="20"
            patternTransform="scale(.5)"
            patternUnits="userSpaceOnUse"
            width="40"
          >
            <path
              d="M40 0 20-10V0l20 10zm0 10L20 0v10l20 10zm0 10L20 10v10l20 10zM0 20l20-10v10L0 30zm0-10L20 0v10L0 20zM0 0l20-10V0L0 10z"
              fill="none"
              stroke="rgb(var(--v-theme-surface))"
            />
          </pattern>
          <pattern
            id="pattern-2"
            height="8"
            patternTransform="scale(.5)"
            patternUnits="userSpaceOnUse"
            width="70"
          >
            <path
              d="M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2s14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6S49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14S20.785-8.742 16.3-3.661C11.918 1.306 8.353 6-.02 6.002"
              fill="none"
              stroke="rgb(var(--v-theme-surface))"
            />
          </pattern>
          <pattern
            id="pattern-3"
            height="10"
            patternTransform="scale(.5)"
            patternUnits="userSpaceOnUse"
            width="10"
          >
            <path
              d="M5 0v10ZM0 5h10Z"
              fill="none"
              stroke="rgb(var(--v-theme-surface))"
            />
          </pattern>
        </defs>
      </svg>
    </div>

    <div class="d-flex mt-6 justify-center">
      <u-pie
        :items="items"
        :legend="{ position: 'left' }"
        :tooltip="{ subtitleFormat: '[value]%' }"
        hover-scale=".1"
        inner-cut="60"
        animation
        hide-slice
      >
        <template v-slot:center>
          <div class="text-center">
            <u-icon class="opacity-60" icon="hugeicons:leaf-01" size="44"></u-icon>
          </div>
        </template>
      </u-pie>
    </div>
  </u-container>
</template>
<script setup>
  const items = [
    { key: 1, title: 'Walnut', value: 57, color: '#607322', pattern: 'url(#pattern-1)' },
    { key: 2, title: 'Oak', value: 31, color: '#c19a00', pattern: 'url(#pattern-2)' },
    { key: 3, title: 'Pine', value: 12, color: '#ffa600', pattern: 'url(#pattern-3)' },
  ]
</script>`,
    },
  },
};
