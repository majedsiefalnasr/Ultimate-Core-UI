import type { Meta, StoryFn } from '@storybook/vue3';
import { onBeforeUnmount, onMounted, ref } from 'vue';

import { UProgressCircular } from '../index';

interface ComponentArgs {
  bgColor?: string;
  color?: string;
  indeterminate?: boolean | 'disable-shrink';
  modelValue?: string | number;
  rotate?: string | number;
  size?: string | number;
  tag?: string;
  theme?: string;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Progress Circular',
  component: UProgressCircular,
  parameters: {
    docs: {
      description: {
        component:
          'The u-progress-circular component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.',
      },
      import: `import { UProgressCircular } from '@ultimate/core-ui/components'`,
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

          return `<u-progress-circular${attrsString}></u-progress-circular>`;
        },
      },
    },
    Vuetify: {
      component: 'VProgressCircular',
      content:
        "This component is built on top of Vuetify's VProgressCircular component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/progress-circular/',
    },
    Primary: {
      description:
        'In its simplest form, u-progress-circular displays a circular progress bar. Use the value prop to control the progress.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-progress-circular',
            link: 'https://vuetifyjs.com/en/api/v-progress-circular/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    bgColor: {
      control: 'text',
      description:
        "Applies specified color to the control's background. Used on components that also support the color prop. - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: 'text',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)).',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    indeterminate: {
      control: 'select',
      options: [false, true, 'disable-shrink'],
      description:
        "Constantly animates, use when loading progress is unknown. If set to the string 'disable-shrink' it will use a simpler animation that does not run on the main thread.",
      table: {
        type: { summary: "boolean | 'disable-shrink'" },
        defaultValue: { summary: 'false' },
      },
    },
    modelValue: {
      control: 'number',
      description: 'The percentage value for current progress.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    rotate: {
      control: 'number',
      description: 'Rotates the circle start point in degrees.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '0' },
      },
    },
    size: {
      control: 'text',
      description: 'Sets the diameter of the circle in pixels.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: "'default'" },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'div'" },
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
    width: {
      control: 'number',
      description: 'Sets the stroke of the circle in pixels.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '4' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UProgressCircular },
  setup() {
    return { args };
  },
  template: `
    <div class="text-center">
      <u-progress-circular v-bind="args"></u-progress-circular>
    </div>
  `,
});

Default.args = {
  modelValue: 20,
} as ComponentArgs;

/**
 * Alternate colors can be applied to u-progress-circular using the color prop.
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { UProgressCircular },
  template: `
    <div class="text-center">
      <u-progress-circular
        color="blue-grey"
        model-value="100"
      ></u-progress-circular>

      <u-progress-circular
        color="deep-orange-lighten-2"
        model-value="80"
      ></u-progress-circular>

      <u-progress-circular
        color="brown"
        model-value="60"
      ></u-progress-circular>

      <u-progress-circular
        color="lime"
        model-value="40"
      ></u-progress-circular>

      <u-progress-circular
        color="indigo-darken-2"
        model-value="20"
      ></u-progress-circular>
    </div>
  `,
});

Color.args = {} as ComponentArgs;

Color.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-progress-circular
      color="blue-grey"
      model-value="100"
    ></u-progress-circular>

    <u-progress-circular
      color="deep-orange-lighten-2"
      model-value="80"
    ></u-progress-circular>

    <u-progress-circular
      color="brown"
      model-value="60"
    ></u-progress-circular>

    <u-progress-circular
      color="lime"
      model-value="40"
    ></u-progress-circular>

    <u-progress-circular
      color="indigo-darken-2"
      model-value="20"
    ></u-progress-circular>
  </div>
</template>
<style scoped>
.u-progress-circular {
  margin: 1rem;
}
</style>`,
    },
  },
};

/**
 * Using the indeterminate prop, a u-progress-circular continues to animate indefinitely.
 */
export const Indeterminate: StoryFn<ComponentArgs> = () => ({
  components: { UProgressCircular },
  template: `
    <div class="text-center">
      <u-progress-circular
        color="primary"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        color="red"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        color="purple"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        color="green"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        color="amber"
        indeterminate
      ></u-progress-circular>
    </div>
  `,
});

Indeterminate.args = {} as ComponentArgs;

Indeterminate.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-progress-circular
      color="primary"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      color="red"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      color="purple"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      color="green"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      color="amber"
      indeterminate
    ></u-progress-circular>
  </div>
</template>
<style scoped>
.u-progress-circular {
  margin: 1rem;
}
</style>`,
    },
  },
};

/**
 * The rotate prop gives you the ability to customize the u-progress-circular's origin.
 */
export const Rotate: StoryFn<ComponentArgs> = () => ({
  components: { UProgressCircular },
  setup() {
    const value = ref(0);

    let interval: NodeJS.Timeout | undefined;
    onMounted(() => {
      interval = setInterval(() => {
        if (value.value === 100) {
          value.value = 0;
          return;
        }
        value.value += 10;
      }, 1000);
    });
    onBeforeUnmount(() => {
      if (interval) clearInterval(interval);
    });

    return { value };
  },
  template: `
    <div class="text-center">
      <u-progress-circular
        :model-value="value"
        :rotate="360"
        :size="100"
        :width="15"
        color="teal"
      >
        {{ value }}
      </u-progress-circular>

      <u-progress-circular
        :model-value="value"
        :rotate="-90"
        :size="100"
        :width="15"
        color="primary"
      >
        {{ value }}
      </u-progress-circular>

      <u-progress-circular
        :model-value="value"
        :rotate="90"
        :size="100"
        :width="15"
        color="red"
      >
        {{ value }}
      </u-progress-circular>

      <u-progress-circular
        :model-value="value"
        :rotate="180"
        :size="100"
        :width="15"
        color="pink"
      >
        {{ value }}
      </u-progress-circular>
    </div>
  `,
});

Rotate.args = {} as ComponentArgs;

Rotate.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-progress-circular
      :model-value="value"
      :rotate="360"
      :size="100"
      :width="15"
      color="teal"
    >
      {{ value }}
    </u-progress-circular>

    <u-progress-circular
      :model-value="value"
      :rotate="-90"
      :size="100"
      :width="15"
      color="primary"
    >
      {{ value }}
    </u-progress-circular>

    <u-progress-circular
      :model-value="value"
      :rotate="90"
      :size="100"
      :width="15"
      color="red"
    >
      {{ value }}
    </u-progress-circular>

    <u-progress-circular
      :model-value="value"
      :rotate="180"
      :size="100"
      :width="15"
      color="pink"
    >
      {{ value }}
    </u-progress-circular>
  </div>
</template>
<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const value = ref(0)

  let interval: NodeJS.Timeout | undefined
  onMounted(() => {
    interval = setInterval(() => {
      if (value.value === 100) {
        return (value.value = 0)
      }
      value.value += 10
    }, 1000)
  })
  onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
  })
</script>
<style scoped>
.u-progress-circular {
  margin: 1rem;
}
</style>`,
    },
  },
};

/**
 * The size and width props allow you to easily alter the size and width of the u-progress-circular component.
 */
export const SizeAndWidth: StoryFn<ComponentArgs> = () => ({
  components: { UProgressCircular },
  template: `
    <div class="text-center">
      <u-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        :width="3"
        color="red"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        :width="3"
        color="green"
        indeterminate
      ></u-progress-circular>

      <u-progress-circular
        :size="50"
        color="amber"
        indeterminate
      ></u-progress-circular>
    </div>
  `,
});

SizeAndWidth.args = {} as ComponentArgs;

SizeAndWidth.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-progress-circular
      :size="50"
      color="primary"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      :width="3"
      color="red"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      :width="3"
      color="green"
      indeterminate
    ></u-progress-circular>

    <u-progress-circular
      :size="50"
      color="amber"
      indeterminate
    ></u-progress-circular>
  </div>
</template>
<style scoped>
.u-progress-circular {
  margin: 1rem;
}
</style>`,
    },
  },
};

/**
 * Default slot can be used to replace the text inside the loader.
 */
export const DefaultSlot: StoryFn<ComponentArgs> = () => ({
  components: { UProgressCircular },
  setup() {
    const value = ref(0);

    let interval: NodeJS.Timeout | undefined;
    onMounted(() => {
      interval = setInterval(() => {
        if (value.value === 100) {
          value.value = 0;
          return;
        }
        value.value += 10;
      }, 1000);
    });
    onBeforeUnmount(() => {
      if (interval) clearInterval(interval);
    });

    return { value };
  },
  template: `
    <div class="text-center">
      <u-progress-circular :model-value="value" :rotate="360" :size="100" :width="15" color="teal">
        <template v-slot:default> {{ value }} % </template>
      </u-progress-circular>
    </div>
  `,
});

DefaultSlot.args = {} as ComponentArgs;

DefaultSlot.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-progress-circular :model-value="value" :rotate="360" :size="100" :width="15" color="teal">
      <template v-slot:default> {{ value }} % </template>
    </u-progress-circular>
  </div>
</template>
<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const value = ref(0)

  let interval: NodeJS.Timeout | undefined
  onMounted(() => {
    interval = setInterval(() => {
      if (value.value === 100) {
        return (value.value = 0)
      }
      value.value += 10
    }, 1000)
  })
  onBeforeUnmount(() => {
    if (interval) clearInterval(interval)
  })
</script>
<style scoped>
.u-progress-circular {
  margin: 1rem;
}
</style>`,
    },
  },
};
