import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import {
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCol,
  UContainer,
  UDivider,
  UIcon,
  UItem,
  UItemGroup,
  URow,
  USheet,
  USlider,
  USparkline,
  USwitch,
} from '../index';

interface ComponentArgs {
  autoDraw?: boolean;
  autoDrawDuration?: string | number;
  autoDrawEasing?: string;
  autoLineWidth?: boolean;
  color?: string;
  fill?: boolean;
  gradient?: string[];
  gradientDirection?: 'top' | 'bottom' | 'left' | 'right';
  height?: string | number;
  id?: string;
  itemValue?: string;
  labels?: Array<string | number | { value: number }>;
  labelSize?: string | number;
  lineWidth?: string | number;
  max?: string | number;
  min?: string | number;
  modelValue?: Array<string | number | { value: number }>;
  padding?: string | number;
  showLabels?: boolean;
  smooth?: string | number | boolean;
  type?: 'trend' | 'bar';
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Sparklines',
  component: USparkline,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-sparkline` component renders tiny inline charts. Use `type` to switch between `trend` and `bar` variants.',
      },
      import: `import { USparkline } from '@ultimate/core-ui/components'`,
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

          return `<u-sparkline${attrsString}></u-sparkline>`;
        },
      },
    },
    Vuetify: {
      component: 'VSparkline',
      content: "Wrapper around Vuetify's `VSparkline` component.",
      link: 'https://vuetifyjs.com/en/components/sparklines/',
    },
  },
  argTypes: {
    autoDraw: {
      control: 'boolean',
      description: 'Trace the line on first render.',
      table: { defaultValue: { summary: 'false' } },
    },
    autoDrawDuration: { control: 'number', description: 'Animation duration (ms).' },
    autoDrawEasing: {
      control: 'text',
      description: 'Easing function for auto-draw.',
      table: { defaultValue: { summary: 'ease' } },
    },
    autoLineWidth: {
      control: 'boolean',
      description: 'Automatically expand bars to fit.',
      table: { defaultValue: { summary: 'false' } },
    },
    color: { control: 'text', description: 'Color for the sparkline.' },
    fill: {
      control: 'boolean',
      description: 'Enable fill under the line.',
      table: { defaultValue: { summary: 'false' } },
    },
    gradient: { control: 'object', description: 'Array of color stops for gradient.' },
    gradientDirection: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
      table: { defaultValue: { summary: 'top' } },
    },
    height: {
      control: 'text',
      description: 'Height of the SVG.',
      table: { defaultValue: { summary: '75' } },
    },
    id: { control: 'text', description: 'Id attribute for the component.' },
    itemValue: {
      control: 'text',
      description: 'Item value key when using objects.',
      table: { defaultValue: { summary: 'value' } },
    },
    labels: { control: 'object', description: 'Array of labels matching data indices.' },
    labelSize: {
      control: 'number',
      description: 'Font size for labels.',
      table: { defaultValue: { summary: '7' } },
    },
    lineWidth: {
      control: 'number',
      description: 'Thickness of the line (px).',
      table: { defaultValue: { summary: '4' } },
    },
    max: { control: 'number' },
    min: { control: 'number' },
    modelValue: { control: 'object', description: 'Array of numbers or value objects.' },
    padding: {
      control: 'number',
      description: 'Padding around the chart.',
      table: { defaultValue: { summary: '8' } },
    },
    showLabels: {
      control: 'boolean',
      description: 'Render labels below points.',
      table: { defaultValue: { summary: 'false' } },
    },
    smooth: { control: 'text', description: 'Corner radius or boolean for smoothing.' },
    type: {
      control: { type: 'select' },
      options: ['trend', 'bar'],
      table: { defaultValue: { summary: 'trend' } },
    },
    width: {
      control: 'text',
      description: 'Width of the SVG.',
      table: { defaultValue: { summary: '300' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { USparkline },
  setup() {
    return {
      args,
    };
  },
  template: `<u-sparkline v-bind="args"></u-sparkline>`,
});

Default.args = {
  autoLineWidth: false,
  fill: false,
  gradient: ['#f72047', '#ffd200', '#1feaea'],
  gradientDirection: 'top',
  lineWidth: 2,
  padding: 8,
  smooth: '10',
  strokeLinecap: 'round',
  type: 'trend',
  autoDraw: true,
  modelValue: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
} as ComponentArgs;

export const Fill: StoryFn<ComponentArgs> = () => ({
  components: {
    USparkline,
    UContainer,
    UDivider,
    URow,
    UCol,
    UItemGroup,
    UItem,
    UCard,
    USwitch,
    USlider,
  },
  setup() {
    const gradients = [
      ['#222'],
      ['#42b3f4'],
      ['red', 'orange', 'yellow'],
      ['purple', 'violet'],
      ['#00c6ff', '#F0F', '#FF0'],
      ['#f72047', '#ffd200', '#1feaea'],
    ];
    const fill = ref(true);
    const selectedGradient = ref(gradients[4]);
    const padding = ref(8);
    const smooth = ref(true);
    const value = ref([0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]);
    const lineWidth = ref(2);

    return { gradients, fill, selectedGradient, padding, smooth, value, lineWidth };
  },
  template: `
  <u-container fluid>
    <u-sparkline
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="lineWidth"
      :model-value="value"
      :padding="padding"
      :smooth="smooth"
      auto-draw
    ></u-sparkline>

    <u-divider></u-divider>

    <u-row>
      <u-col cols="12" md="6">
        <u-row align="center" class="fill-height">
          <u-item-group v-model="selectedGradient" mandatory>
            <u-row class="pt-6 pl-6">
              <u-item v-for="(gradient, i) in gradients" :key="i" v-slot="{ active, toggle }" :value="gradient">
                <u-card
                  :style="{
                    background: gradient.length > 1 ? 'linear-gradient(0deg, ' + gradient + ')' : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  class="me-2"
                  height="30"
                  width="30"
                  @click="toggle"
                ></u-card>
              </u-item>
            </u-row>
          </u-item-group>
        </u-row>
      </u-col>
    </u-row>

    <u-row class="mt-5">
      <u-col cols="2">Filled</u-col>
      <u-col cols="3">
        <u-switch v-model="fill" class="switch"></u-switch>
      </u-col>
      <u-col cols="3">Line width</u-col>
      <u-col cols="3">
        <u-slider v-model="lineWidth" max="10" min="0.1" step="0.1" thumb-label></u-slider>
      </u-col>
    </u-row>

    <u-row>
      <u-col cols="2">Smooth</u-col>
      <u-col cols="3">
        <u-switch v-model="smooth" class="switch"></u-switch>
      </u-col>
      <u-col cols="3">Padding</u-col>
      <u-col cols="3">
        <u-slider v-model="padding" cols="3" max="25" min="0" thumb-label></u-slider>
      </u-col>
    </u-row>
  </u-container>
  `,
});

Fill.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-sparkline
    :fill="fill"
    :gradient="selectedGradient"
    :line-width="lineWidth"
    :model-value="value"
    :padding="padding"
    :smooth="smooth"
    auto-draw
  ></u-sparkline>
</template>
<script setup>
import { ref } from 'vue'

const gradients = [ ['#222'], ['#42b3f4'], ['red','orange','yellow'], ['purple','violet'], ['#00c6ff','#F0F','#FF0'], ['#f72047','#ffd200','#1feaea'] ]
const fill = ref(true)
const selectedGradient = ref(gradients[4])
const padding = ref(8)
const smooth = ref(true)
const value = ref([0,2,5,9,5,10,3,5,0,0,1,8,2,9,0])
const lineWidth = ref(2)
</script>`,
    },
  },
};

export const CustomLabels: StoryFn<ComponentArgs> = () => ({
  components: { USparkline, UCard, USheet, UBtn, UDivider, UCardText, UCardActions },
  setup() {
    const value = ref([423, 446, 675, 510, 590, 610, 760]);
    return { value };
  },
  template: `
  <u-card class="mx-auto text-center" color="green" max-width="600" dark>
    <u-card-text>
      <u-sheet color="rgba(0, 0, 0, .12)">
        <u-sparkline :model-value="value" color="rgba(255,255,255,.7)" height="100" padding="24" stroke-linecap="round" smooth>
          <template #label="item">
            {{ item.value }}
          </template>
        </u-sparkline>
      </u-sheet>
    </u-card-text>

    <u-card-text>
      <div class="text-h4 font-weight-thin">Sales Last 24h</div>
    </u-card-text>

    <u-divider></u-divider>

    <u-card-actions class="justify-center">
      <u-btn variant="text" block>Go to Report</u-btn>
    </u-card-actions>
  </u-card>
  `,
});

CustomLabels.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-sparkline :model-value="value" color="rgba(255,255,255,.7)" height="100" padding="24" stroke-linecap="round" smooth>
    <template #label="item">
      {{ item.value }}
    </template>
  </u-sparkline>
</template>
<script setup>
import { ref } from 'vue'
const value = ref([423,446,675,510,590,610,760])
</script>`,
    },
  },
};

export const HeartRate: StoryFn<ComponentArgs> = () => ({
  components: { USparkline, UCard, UBtn, USheet, UIcon },
  setup() {
    const exhale = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
    const checking = ref<boolean>(false);
    const heartbeats = ref<number[]>([]);
    const avg = computed(() => {
      const sum = heartbeats.value.reduce((acc, cur) => acc + cur, 0);
      const length = heartbeats.value.length;
      if (!sum && !length) return 0;
      return Math.ceil(sum / length);
    });
    function heartbeat() {
      return Math.ceil(Math.random() * (120 - 80) + 80);
    }
    async function takePulse(inhale = true) {
      checking.value = true;
      inhale && (await exhale(1000));
      heartbeats.value = Array.from({ length: 20 }, heartbeat);
      checking.value = false;
    }
    takePulse(false);

    return { checking, heartbeats, avg, takePulse };
  },
  template: `
  <u-card
    class="mx-auto"
    color="surface-light"
    max-width="600"
  >
    <template v-slot:prepend>
      <u-icon
        :color="checking ? 'red lighten-2' : 'indigo-lighten-2'"
        class="me-8"
        icon="hugeicons:heartbreak"
        size="64"
        @click="takePulse"
      ></u-icon>
    </template>

    <template v-slot:title>
      <div class="text-caption text-grey text-uppercase">
        Heart rate
      </div>

      <span
        class="text-h3 font-weight-black"
        v-text="avg || '—'"
      ></span>
      <strong v-if="avg">BPM</strong>
    </template>

    <template v-slot:append>
      <u-btn
        class="align-self-start"
        icon="hugeicons:arrow-right-02"
        size="34"
        variant="text"
      ></u-btn>
    </template>

    <u-sheet color="transparent">
      <u-sparkline
        :key="String(avg)"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :model-value="heartbeats"
        :smooth="16"
        stroke-linecap="round"
        auto-draw
      ></u-sparkline>
    </u-sheet>
  </u-card>
  `,
});

HeartRate.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    color="surface-light"
    max-width="600"
  >
    <template v-slot:prepend>
      <u-icon
        :color="checking ? 'red lighten-2' : 'indigo-lighten-2'"
        class="me-8"
        icon="hugeicons:heartbreak"
        size="64"
        @click="takePulse"
      ></u-icon>
    </template>

    <template v-slot:title>
      <div class="text-caption text-grey text-uppercase">
        Heart rate
      </div>

      <span
        class="text-h3 font-weight-black"
        v-text="avg || '—'"
      ></span>
      <strong v-if="avg">BPM</strong>
    </template>

    <template v-slot:append>
      <u-btn
        class="align-self-start"
        icon="hugeicons:arrow-right-02"
        size="34"
        variant="text"
      ></u-btn>
    </template>

    <u-sheet color="transparent">
      <u-sparkline
        :key="String(avg)"
        :gradient="['#f72047', '#ffd200', '#1feaea']"
        :line-width="3"
        :model-value="heartbeats"
        :smooth="16"
        stroke-linecap="round"
        auto-draw
      ></u-sparkline>
    </u-sheet>
  </u-card>
</template>
<script setup>
  import { computed, ref } from 'vue'

  const exhale = ms => new Promise(resolve => setTimeout(resolve, ms))
  const checking = ref(false)
  const heartbeats = ref([])
  const avg = computed(() => {
    const sum = heartbeats.value.reduce((acc, cur) => acc + cur, 0)
    const length = heartbeats.value.length
    if (!sum && !length) return 0
    return Math.ceil(sum / length)
  })
  function heartbeat () {
    return Math.ceil(Math.random() * (120 - 80) + 80)
  }
  async function takePulse (inhale = true) {
    checking.value = true
    inhale && await exhale(1000)
    heartbeats.value = Array.from({ length: 20 }, heartbeat)
    checking.value = false
  }
  takePulse(false)
</script>`,
    },
  },
};
