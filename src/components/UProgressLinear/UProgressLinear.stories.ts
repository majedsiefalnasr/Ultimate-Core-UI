import type { Meta, StoryFn } from '@storybook/vue3';
import { onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue';

import { UBtn, UCard, UCol, UContainer, UIcon, UProgressLinear, URow, UToolbar } from '../index';

interface ComponentArgs {
  absolute?: boolean;
  active?: boolean;
  bgColor?: string;
  bgOpacity?: string | number;
  bufferColor?: string;
  bufferOpacity?: string | number;
  bufferValue?: string | number;
  chunkCount?: string | number | null;
  chunkGap?: string | number;
  chunkWidth?: string | number | null;
  clickable?: boolean;
  color?: string;
  height?: string | number;
  indeterminate?: boolean;
  location?: string | null;
  max?: string | number;
  modelValue?: string | number;
  opacity?: string | number;
  reverse?: boolean;
  rounded?: string | number | boolean;
  roundedBar?: boolean;
  stream?: boolean;
  striped?: boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Progress Linear',
  component: UProgressLinear,
  parameters: {
    docs: {
      description: {
        component:
          'The u-progress-linear component is used to convey data visually to users. It supports both indeterminate amounts and finite amounts (including buffer values).',
      },
      import: `import { UProgressLinear } from '@ultimate/core-ui/components'`,
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

          return `<u-progress-linear${attrsString}></u-progress-linear>`;
        },
      },
    },
    Vuetify: {
      component: 'VProgressLinear',
      content:
        "This component is built on top of Vuetify's VProgressLinear component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/progress-linear/',
    },
    Primary: {
      description:
        'In its simplest form, u-progress-linear displays a horizontal progress bar. Use the value prop to control the progress.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-progress-linear',
            link: 'https://vuetifyjs.com/en/api/v-progress-linear/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    absolute: {
      control: 'boolean',
      description: 'Applies position: absolute to the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    active: {
      control: 'boolean',
      description: 'Reduce the height to 0, hiding component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    bgColor: {
      control: 'text',
      description:
        'Background color; supports utility names (e.g. success) or CSS colors (#033, rgba(255,0,0,.5)).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    bgOpacity: {
      control: 'text',
      description:
        'Background opacity. If null defaults to 0.3 when no bg-color is specified, otherwise 1.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    bufferColor: {
      control: 'text',
      description: 'Sets the color of the buffer bar.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    bufferOpacity: {
      control: 'text',
      description: 'Sets the opacity of the buffer bar.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    bufferValue: {
      control: 'number',
      description: 'The percentage value for the buffer.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    chunkCount: {
      control: 'text',
      description: 'Amount of chunks to divide the bar into.',
      table: { type: { summary: 'string | number | null' }, defaultValue: { summary: 'null' } },
    },
    chunkGap: {
      control: 'text',
      description: 'Size of the gap between chunks.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '4' } },
    },
    chunkWidth: {
      control: 'text',
      description: 'Chunk absolute size. Useful when chunk is narrow.',
      table: { type: { summary: 'string | number | null' }, defaultValue: { summary: 'null' } },
    },
    clickable: {
      control: 'boolean',
      description: 'Clicking on the track will set the value.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'text',
      description: 'Control color; supports utility names or CSS colors.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '4' } },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Constantly animates when true.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    location: {
      control: 'text',
      description:
        'Component location. Can be a space separated string. Use null to remove location styling.',
      table: { type: { summary: 'Anchor | string | null' }, defaultValue: { summary: "'top'" } },
    },
    max: {
      control: 'text',
      description: 'Maximum value the progress can reach.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '100' } },
    },
    modelValue: {
      control: 'number',
      description: 'The v-model value of the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    opacity: {
      control: 'text',
      description: 'Sets the opacity of the progress bar.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    reverse: {
      control: 'boolean',
      description: 'Displays reversed progress (RTL mirrored).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'text',
      description:
        'Border-radius applied to the component. e.g. 0, xs, sm, true, lg, xl, pill, circle, shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    roundedBar: {
      control: 'boolean',
      description: 'Applies a border radius to the progress bar.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    stream: {
      control: 'boolean',
      description: 'Alternative style for loading that works with buffer-value.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    striped: {
      control: 'boolean',
      description: 'Adds a stripe background to the filled portion.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    tag: {
      control: 'text',
      description: 'Custom tag for the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'div'" } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes border-radius from the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `<u-progress-linear v-bind="args"></u-progress-linear>`,
});

Default.args = {
  modelValue: 20,
} as ComponentArgs;

/**
 * The primary value is controlled by v-model, whereas the buffer is controlled by the buffer-value prop.
 */
export const Buffering: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  setup() {
    const value = ref(10);
    const bufferValue = ref(20);
    let interval: NodeJS.Timeout | undefined;

    const startBuffer = () => {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        value.value += Math.random() * (15 - 5) + 5;
        bufferValue.value += Math.random() * (15 - 5) + 6;
        if (value.value >= 100) {
          value.value = 0;
          bufferValue.value = 10;
        }
      }, 2000);
    };

    watch(value, (val) => {
      if (val < 100) return;
      value.value = 0;
      bufferValue.value = 10;
      startBuffer();
    });

    onMounted(() => startBuffer());
    onBeforeUnmount(() => {
      if (interval) clearInterval(interval);
    });

    return { value, bufferValue };
  },
  template: `
    <div>
      <u-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
        color="purple"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
        color="red-lighten-2"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="value"
        :buffer-value="bufferValue"
        color="black"
      ></u-progress-linear>
    </div>
  `,
});

Buffering.args = {} as ComponentArgs;

Buffering.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="purple"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="red-lighten-2"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="value"
      :buffer-value="bufferValue"
      color="black"
    ></u-progress-linear>
  </div>
</template>
<script setup>
  import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

  const value = ref(10)
  const bufferValue = ref(20)
  let interval

  function startBuffer () {
    clearInterval(interval)
    interval = setInterval(() => {
      value.value += Math.random() * (15 - 5) + 5
      bufferValue.value += Math.random() * (15 - 5) + 6
      if (value.value >= 100) {
        value.value = 0
        bufferValue.value = 10
      }
    }, 2000)
  }

  watch(value, val => {
    if (val < 100) return
    value.value = 0
    bufferValue.value = 10
    startBuffer()
  })

  onMounted(() => startBuffer())
  onBeforeUnmount(() => { clearInterval(interval) })
</script>`,
    },
  },
};

/**
 * The component can be split into chunks using chunk-count or chunk-width. Visible progress is snapped to the last filled chunk.
 */
export const Chunks: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UIcon, UProgressLinear },
  setup() {
    const value = shallowRef(63);
    const setZero = () => {
      value.value = 0;
    };
    const setFull = () => {
      value.value = 100;
    };
    return { value, setZero, setFull };
  },
  template: `
    <div>
      <u-progress-linear
        v-model="value"
        chunk-width="4"
        color="purple"
        height="15"
        rounded="lg"
        clickable
      ></u-progress-linear>

      <br>

      <u-progress-linear
        v-model="value"
        chunk-gap="2"
        chunk-width="50"
        color="primary"
        height="10"
        clickable
        rounded
      ></u-progress-linear>

      <br>

      <u-progress-linear
        v-model="value"
        bg-color="#888"
        chunk-count="50"
        chunk-gap="3"
        color="green"
        height="25"
        rounded="sm"
        clickable
      ></u-progress-linear>

      <br>

      <u-progress-linear
        v-model="value"
        bg-color="#888"
        chunk-count="15"
        chunk-gap="6"
        color="pink"
        height="25"
        rounded="sm"
        clickable
      ></u-progress-linear>

      <br>

      <div class="d-flex ga-2 align-center">
        <u-progress-linear
          v-model="value"
          chunk-count="5"
          chunk-gap="9"
          color="indigo"
          height="25"
          rounded="sm"
          clickable
        >
          <small class="text-white">{{ value.toFixed() }}%</small>
        </u-progress-linear>
        <u-btn variant="text" size="x-small" @click="setZero">
          <u-icon icon="hugeicons:arrow-left-01" size="18" />
        </u-btn>
        <u-btn variant="text" size="x-small" @click="setFull">
          <u-icon icon="hugeicons:checkmark-circle-02" size="18" />
        </u-btn>
      </div>
    </div>
  `,
});

Chunks.args = {} as ComponentArgs;

Chunks.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      v-model="value"
      chunk-width="4"
      color="purple"
      height="15"
      rounded="lg"
      clickable
    ></u-progress-linear>

    <br>

    <u-progress-linear
      v-model="value"
      chunk-gap="2"
      chunk-width="50"
      color="primary"
      height="10"
      clickable
      rounded
    ></u-progress-linear>

    <br>

    <u-progress-linear
      v-model="value"
      bg-color="#888"
      chunk-count="50"
      chunk-gap="3"
      color="green"
      height="25"
      rounded="sm"
      clickable
    ></u-progress-linear>

    <br>

    <u-progress-linear
      v-model="value"
      bg-color="#888"
      chunk-count="15"
      chunk-gap="6"
      color="pink"
      height="25"
      rounded="sm"
      clickable
    ></u-progress-linear>

    <br>

    <div class="d-flex ga-2 align-center">
      <u-progress-linear
        v-model="value"
        chunk-count="5"
        chunk-gap="9"
        color="indigo"
        height="25"
        rounded="sm"
        clickable
      >
        <small class="text-white">{{ value.toFixed() }}%</small>
      </u-progress-linear>
      <u-btn variant="text" size="x-small" @click="value = 0">
        <u-icon icon="hugeicons:arrow-left-01" size="18" />
      </u-btn>
      <u-btn variant="text" size="x-small" @click="value = 100">
        <u-icon icon="hugeicons:checkmark-circle-02" size="18" />
      </u-btn>
    </div>
  </div>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const value = shallowRef(63)
</script>`,
    },
  },
};

/**
 * You can set the colors of the progress bar using the props color and bg-color.
 */
export const Colors: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        bg-color="pink-lighten-3"
        color="pink-lighten-1"
        model-value="15"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        bg-color="blue-grey"
        color="lime"
        model-value="30"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        bg-color="success"
        color="error"
        model-value="45"
      ></u-progress-linear>
    </div>
  `,
});

Colors.args = {} as ComponentArgs;

Colors.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      bg-color="pink-lighten-3"
      color="pink-lighten-1"
      model-value="15"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      bg-color="blue-grey"
      color="lime"
      model-value="30"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      bg-color="success"
      color="error"
      model-value="45"
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * Using the indeterminate prop, u-progress-linear continuously animates.
 */
export const Indeterminate: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        color="yellow-darken-2"
        indeterminate
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="green"
        indeterminate
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="teal"
        indeterminate
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="cyan"
        indeterminate
      ></u-progress-linear>
    </div>
  `,
});

Indeterminate.args = {} as ComponentArgs;

Indeterminate.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      color="yellow-darken-2"
      indeterminate
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="green"
      indeterminate
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="teal"
      indeterminate
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="cyan"
      indeterminate
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse prop enabled will display left-to-right.
 */
export const Reversed: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        color="pink"
        model-value="15"
        reverse
      ></u-progress-linear>

      <br>

      <u-progress-linear
        color="lime"
        indeterminate
        reverse
      ></u-progress-linear>

      <br>

      <u-progress-linear
        buffer-value="55"
        color="success"
        model-value="30"
        reverse
        stream
      ></u-progress-linear>
    </div>
  `,
});

Reversed.args = {} as ComponentArgs;

Reversed.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      color="pink"
      model-value="15"
      reverse
    ></u-progress-linear>

    <br>

    <u-progress-linear
      color="lime"
      indeterminate
      reverse
    ></u-progress-linear>

    <br>

    <u-progress-linear
      buffer-value="55"
      color="success"
      model-value="30"
      reverse
      stream
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * The rounded prop is used to apply a border radius to the u-progress-linear component.
 */
export const Rounded: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        color="red-darken-2"
        model-value="100"
        rounded
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="indigo"
        model-value="100"
        rounded
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="teal"
        model-value="100"
        rounded
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="cyan-darken-2"
        model-value="100"
        rounded
      ></u-progress-linear>
    </div>
  `,
});

Rounded.args = {} as ComponentArgs;

Rounded.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      color="red-darken-2"
      model-value="100"
      rounded
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="indigo"
      model-value="100"
      rounded
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="teal"
      model-value="100"
      rounded
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="cyan-darken-2"
      model-value="100"
      rounded
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * The stream property works with buffer-value to convey to the user that there is some action taking place.
 */
export const Stream: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        buffer-value="0"
        color="red-lighten-2"
        stream
      ></u-progress-linear>
      <br>
      <u-progress-linear
        buffer-value="0"
        color="teal"
        model-value="20"
        stream
      ></u-progress-linear>
      <br>
      <u-progress-linear
        buffer-value="50"
        color="cyan"
        stream
      ></u-progress-linear>
      <br>
      <u-progress-linear
        buffer-value="60"
        color="orange"
        model-value="40"
        stream
      ></u-progress-linear>
    </div>
  `,
});

Stream.args = {} as ComponentArgs;

Stream.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      buffer-value="0"
      color="red-lighten-2"
      stream
    ></u-progress-linear>
    <br>
    <u-progress-linear
      buffer-value="0"
      color="teal"
      model-value="20"
      stream
    ></u-progress-linear>
    <br>
    <u-progress-linear
      buffer-value="50"
      color="cyan"
      stream
    ></u-progress-linear>
    <br>
    <u-progress-linear
      buffer-value="60"
      color="orange"
      model-value="40"
      stream
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * This applies a striped background over the value portion of the v-progress-linear. This prop has no effect when using indeterminate.
 */
export const Striped: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  template: `
    <div>
      <u-progress-linear
        color="light-blue"
        height="10"
        model-value="10"
        striped
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="light-green-darken-4"
        height="10"
        model-value="20"
        striped
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="lime"
        height="10"
        model-value="45"
        striped
      ></u-progress-linear>
      <br>
      <u-progress-linear
        color="deep-orange"
        height="10"
        model-value="60"
        striped
      ></u-progress-linear>
    </div>
  `,
});

Striped.args = {} as ComponentArgs;

Striped.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      color="light-blue"
      height="10"
      model-value="10"
      striped
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="light-green-darken-4"
      height="10"
      model-value="20"
      striped
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="lime"
      height="10"
      model-value="45"
      striped
    ></u-progress-linear>
    <br>
    <u-progress-linear
      color="deep-orange"
      height="10"
      model-value="60"
      striped
    ></u-progress-linear>
  </div>
</template>`,
    },
  },
};

/**
 * The v-progress-linear component will be responsive to user input when using v-model. You can use the default slot or bind a local model to display inside of the progress. If you are looking for advanced features on a linear type component, check out u-slider.
.
 */
export const ModelsAndSlots: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  setup() {
    const skill = ref(20);
    const knowledge = ref(33);
    const power = ref(78);
    return { skill, knowledge, power, Math };
  },
  template: `
    <div>
      <u-progress-linear
        v-model="power"
        color="amber"
        height="25"
      ></u-progress-linear>

      <br>

      <u-progress-linear
        v-model="skill"
        color="blue-grey"
        height="25"
      >
        <template v-slot:default="{ value }">
          <strong>{{ Math.ceil(value) }}%</strong>
        </template>
      </u-progress-linear>

      <br>

      <u-progress-linear
        v-model="knowledge"
        height="25"
      >
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </u-progress-linear>
    </div>
  `,
});

ModelsAndSlots.args = {} as ComponentArgs;

ModelsAndSlots.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      v-model="power"
      color="amber"
      height="25"
    ></u-progress-linear>

    <br>

    <u-progress-linear
      v-model="skill"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </u-progress-linear>

    <br>

    <u-progress-linear
      v-model="knowledge"
      height="25"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </u-progress-linear>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const skill = ref(20)
  const knowledge = ref(33)
  const power = ref(78)
</script>`,
    },
  },
};

/**
 * The progress linear component can have a determinate state modified by v-model.
 */
export const Determinate: StoryFn<ComponentArgs> = () => ({
  components: { UProgressLinear },
  setup() {
    const valueDeterminate = ref(50);
    return { valueDeterminate };
  },
  template: `
    <div>
      <u-progress-linear
        v-model="valueDeterminate"
        color="deep-purple-accent-4"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="valueDeterminate"
        color="pink"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="valueDeterminate"
        color="indigo-darken-2"
      ></u-progress-linear>
      <br>
      <u-progress-linear
        v-model="valueDeterminate"
        color="amber"
      ></u-progress-linear>
    </div>
  `,
});

Determinate.args = {} as ComponentArgs;

Determinate.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-progress-linear
      v-model="valueDeterminate"
      color="deep-purple-accent-4"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="valueDeterminate"
      color="pink"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="valueDeterminate"
      color="indigo-darken-2"
    ></u-progress-linear>
    <br>
    <u-progress-linear
      v-model="valueDeterminate"
      color="amber"
    ></u-progress-linear>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const valueDeterminate = ref(50)
</script>`,
    },
  },
};

/**
 * The u-progress-linear component is good for communicating to the user that they are waiting for a response.
 */
export const FileLoader: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UIcon, UContainer, URow, UCol, UProgressLinear },
  template: `
    <u-card class="mx-auto" max-width="344">
      <u-toolbar color="deep-purple-accent-4" class="px-2">
        <u-btn variant="text" size="small">
          <u-icon icon="hugeicons:plus-sign-01" />
        </u-btn>
        <div class="text-subtitle-1 ml-2">My Files</div>
        <div class="ml-auto d-flex ga-1">
          <u-btn variant="text" size="small"><u-icon icon="hugeicons:share-07" /></u-btn>
          <u-btn variant="text" size="small"><u-icon icon="hugeicons:search-01" /></u-btn>
          <u-btn variant="text" size="small"><u-icon icon="hugeicons:menu-01" /></u-btn>
        </div>
      </u-toolbar>

      <u-container style="height: 400px;">
        <u-row class="fill-height" align-content="center" justify="center">
          <u-col cols="12" class="text-subtitle-1 text-center">Getting your files</u-col>
          <u-col cols="6">
            <u-progress-linear
              color="deep-purple-accent-4"
              height="6"
              indeterminate
              rounded
            />
          </u-col>
        </u-row>
      </u-container>
    </u-card>
  `,
});

FileLoader.args = {} as ComponentArgs;

FileLoader.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" max-width="344">
    <u-toolbar color="deep-purple-accent-4" class="px-2">
      <u-btn variant="text" size="small">
        <u-icon icon="hugeicons:plus-sign-01" />
      </u-btn>
      <div class="text-subtitle-1 ml-2">My Files</div>
      <div class="ml-auto d-flex ga-1">
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:share-07" /></u-btn>
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:search-01" /></u-btn>
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:menu-01" /></u-btn>
      </div>
    </u-toolbar>

    <u-container style="height: 400px;">
      <u-row class="fill-height" align-content="center" justify="center">
        <u-col cols="12" class="text-subtitle-1 text-center">Getting your files</u-col>
        <u-col cols="6">
          <u-progress-linear
            color="deep-purple-accent-4"
            height="6"
            indeterminate
            rounded
          />
        </u-col>
      </u-row>
    </u-container>
  </u-card>
</template>`,
    },
  },
};

/**
 * Using the absolute prop we are able to position the v-progress-linear component at the bottom of the u-toolbar. We also use the active prop which allows us to control the visibility of the progress.
 */
export const ToolbarLoader: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UToolbar, UBtn, UIcon, UContainer, URow, UCol, UProgressLinear },
  setup() {
    const loading = ref(false);
    watch(loading, (val) => {
      if (!val) return;
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    });
    return { loading };
  },
  template: `
    <u-card class="mx-auto mt-6" width="344">
      <u-toolbar class="px-2">
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:arrow-left-01" /></u-btn>
        <div class="text-subtitle-1 ml-2">My Recipes</div>

        <u-progress-linear
          :active="loading"
          :indeterminate="loading"
          color="deep-purple-accent-4"
          location="bottom"
          absolute
        ></u-progress-linear>

        <div class="ml-auto d-flex ga-1">
          <u-btn variant="text" size="small"><u-icon icon="hugeicons:search-01" /></u-btn>
          <u-btn variant="text" size="small"><u-icon icon="hugeicons:menu-01" /></u-btn>
        </div>
      </u-toolbar>

      <u-container style="height: 282px;">
        <u-row class="fill-height" align="center" justify="center">
          <div v-if="!loading" class="text-center">
            <u-btn color="primary" @click="loading = true">Start loading</u-btn>
          </div>
        </u-row>
      </u-container>
    </u-card>
  `,
});

ToolbarLoader.args = {} as ComponentArgs;

ToolbarLoader.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto mt-6" width="344">
    <u-toolbar class="px-2">
      <u-btn variant="text" size="small"><u-icon icon="hugeicons:arrow-left-01" /></u-btn>
      <div class="text-subtitle-1 ml-2">My Recipes</div>

      <u-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="deep-purple-accent-4"
        location="bottom"
        absolute
      ></u-progress-linear>

      <div class="ml-auto d-flex ga-1">
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:search-01" /></u-btn>
        <u-btn variant="text" size="small"><u-icon icon="hugeicons:menu-01" /></u-btn>
      </div>
    </u-toolbar>

    <u-container style="height: 282px;">
      <u-row class="fill-height" align="center" justify="center">
        <div v-if="!loading" class="text-center">
          <u-btn color="primary" @click="loading = true">Start loading</u-btn>
        </div>
      </u-row>
    </u-container>
  </u-card>
</template>
<script setup>
  import { ref, watch } from 'vue'

  const loading = ref(false)

  watch(loading, val => {
    if (!val) return
    setTimeout(() => (loading.value = false), 3000)
  })
</script>`,
    },
  },
};
