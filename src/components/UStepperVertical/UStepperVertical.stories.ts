import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import { UBtn, UStepperVertical, UStepperVerticalItem } from '../index';

interface ComponentArgs {
  items?: Array<string | Record<string, unknown>>;
  modelValue?: any;
  altLabels?: boolean;
  hideActions?: boolean;
  multiple?: boolean;
  nonLinear?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Vertical Steppers',
  component: UStepperVertical,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-stepper-vertical` component can be used as a navigation element that guides users through a sequence of steps.',
      },
      import: `import { UStepperVertical } from '@ultimate/core-ui/components'`,
      api: {
        data: [
          {
            element: {
              title: 'v-stepper-vertical',
              link: 'https://vuetifyjs.com/en/api/v-stepper-vertical/',
            },
            description: 'Primary Component',
          },
        ],
      },
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

          return `<UStepperVertical${attrsString}></UStepperVertical>`;
        },
      },
    },
    Vuetify: {
      component: 'VStepperVertical',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/steppers/',
    },
    Primary: {
      description: 'This is the usage description placeholder.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-stepper-vertical',
            link: 'https://vuetifyjs.com/en/api/v-stepper-vertical/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of step titles or item objects.',
      table: { defaultValue: { summary: '[]' } },
    },
    modelValue: {
      control: 'text',
      description: 'v-model value (active step).',
      table: { defaultValue: { summary: 'undefined' } },
    },
    altLabels: {
      control: 'boolean',
      description: 'Place labels beneath steps.',
      table: { defaultValue: { summary: 'false' } },
    },
    hideActions: {
      control: 'boolean',
      description: 'Hide prev/next actions.',
      table: { defaultValue: { summary: 'false' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple selection.',
      table: { defaultValue: { summary: 'false' } },
    },
    nonLinear: {
      control: 'boolean',
      description: 'Allow jumping to any step.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UStepperVertical },
  setup() {
    return { args };
  },
  template: `<u-stepper-vertical v-bind="args"></u-stepper-vertical>`,
});

Default.args = {
  items: ['Step 1', 'Step 2', 'Step 3'],
} as ComponentArgs;

export const NonLinear: StoryFn<ComponentArgs> = (_args) => ({
  components: { UStepperVertical, UStepperVerticalItem },
  setup() {
    const step = shallowRef([1]);
    return { step };
  },
  template: `
  <div>
    <u-stepper-vertical
      v-model="step"
      :mandatory="false"
      hide-actions
      multiple
      non-linear
    >
      <u-stepper-vertical-item title="Select campaign settings" value="1" editable>
        Step content
      </u-stepper-vertical-item>

      <u-stepper-vertical-item title="Create an ad group" value="2" editable>
        Step content
      </u-stepper-vertical-item>

      <u-stepper-vertical-item title="Create an ad" value="3" editable>
        Step content
      </u-stepper-vertical-item>
    </u-stepper-vertical>
  </div>
  `,
});

NonLinear.args = {} as ComponentArgs;

NonLinear.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-stepper-vertical
      v-model="step"
      :mandatory="false"
      hide-actions
      multiple
      non-linear
    >
      <u-stepper-vertical-item title="Select campaign settings" value="1" editable>
        Step content
      </u-stepper-vertical-item>

      <u-stepper-vertical-item title="Create an ad group" value="2" editable>
        Step content
      </u-stepper-vertical-item>

      <u-stepper-vertical-item title="Create an ad" value="3" editable>
        Step content
      </u-stepper-vertical-item>
    </u-stepper-vertical>
  </div>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const step = shallowRef([1])
</script>`,
    },
  },
};

export const Actions: StoryFn<ComponentArgs> = (_args) => ({
  components: { UStepperVertical, UStepperVerticalItem, UBtn },
  setup() {
    const finished = ref(false);
    function onClickFinish() {
      finished.value = true;
      // small UX demo
      // eslint-disable-next-line no-alert
      alert('Finished');
    }

    return { finished, onClickFinish };
  },
  template: `
  <u-stepper-vertical>
    <template v-slot:default="{ step }">
      <u-stepper-vertical-item
        :complete="step > 1"
        subtitle="Personal details"
        title="Step one"
        value="1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" @click="next"></u-btn>
        </template>

        <template v-slot:prev></template>
      </u-stepper-vertical-item>
      
      <u-stepper-vertical-item
        :complete="step > 2"
        subtitle="Contact Details"
        title="Step two"
        value="2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" @click="next"></u-btn>
        </template>

        <template v-slot:prev="{ prev }">
          <u-btn variant="plain" @click="prev"></u-btn>
        </template>
      </u-stepper-vertical-item>

      <u-stepper-vertical-item
        subtitle="Confirmation"
        title="Step three"
        value="3"
        @click:next="onClickFinish"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" text="Finish" @click="next"></u-btn>
        </template>

        <template v-slot:prev="{ prev }">
          <u-btn v-if="!finished" variant="plain" @click="prev"></u-btn>
          
          <u-btn v-else text="Reset" variant="plain" @click="finished = false"></u-btn>
        </template>
      </u-stepper-vertical-item>
    </template>
  </u-stepper-vertical>
  `,
});

Actions.args = {} as ComponentArgs;

Actions.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-stepper-vertical>
    <template v-slot:default="{ step }">
      <u-stepper-vertical-item
        :complete="step > 1"
        subtitle="Personal details"
        title="Step one"
        value="1"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" @click="next"></u-btn>
        </template>

        <template v-slot:prev></template>
      </u-stepper-vertical-item>
      
      <u-stepper-vertical-item
        :complete="step > 2"
        subtitle="Contact Details"
        title="Step two"
        value="2"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" @click="next"></u-btn>
        </template>

        <template v-slot:prev="{ prev }">
          <u-btn variant="plain" @click="prev"></u-btn>
        </template>
      </u-stepper-vertical-item>

      <u-stepper-vertical-item
        subtitle="Confirmation"
        title="Step three"
        value="3"
        @click:next="onClickFinish"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!

        <template v-slot:next="{ next }">
          <u-btn color="primary" text="Finish" @click="next"></u-btn>
        </template>

        <template v-slot:prev="{ prev }">
          <u-btn v-if="!finished" variant="plain" @click="prev"></u-btn>
          
          <u-btn v-else text="Reset" variant="plain" @click="finished = false"></u-btn>
        </template>
      </u-stepper-vertical-item>
    </template>
  </u-stepper-vertical>
</template>
<script setup>
  import { shallowRef } from 'vue'

  const finished = shallowRef(false)

  function onClickFinish () {
    finished.value = true

    alert('Finished')
  }
</script>`,
    },
  },
};
