import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import { UCard, UDivider, URadio, URadioGroup, USheet, UStepper, UTable } from '../index';

interface ComponentArgs {
  items?: Array<string | Record<string, unknown>>;
  modelValue?: any;
  altLabels?: boolean;
  mobile?: boolean;
  hideActions?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Steppers',
  component: UStepper,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-stepper` component displays progress through numbered steps and guides users through multistep flows.',
      },
      import: `import { UStepper } from '@ultimate/core-ui/components'`,
      source: {
        transform: (_src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;
          const entries = Object.entries(args as Record<string, unknown>)
            .filter(([, v]) => v !== undefined && v !== false)
            .map(([k, v]) => {
              if (v === true) return k;
              if (typeof v === 'string') return `${k}="${v}"`;
              if (typeof v === 'number') return `:${k}="${v}"`;
              return `:${k}='${JSON.stringify(v)}'`;
            });

          const attrs = entries.length ? ' ' + entries.join(' ') : '';
          return `<u-stepper${attrs}>
    <template v-slot:item.1>
      <u-card title="Step One" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>

    <template v-slot:item.2>
      <u-card title="Step Two" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>

    <template v-slot:item.3>
      <u-card title="Step Three" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>
  </u-stepper>`;
        },
      },
    },
    Vuetify: {
      component: 'VPagination',
      content:
        "This component is built on top of Vuetify's VPagination component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/paginations/',
    },
    Primary: {
      description:
        'Pagination by default displays the number of pages based on the set length prop, with prev and next buttons surrounding to help you navigate. Depending on the length provided, the pagination component will automatically scale. To maintain the current page, simply supply a v-model attribute.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-stepper',
            link: 'https://vuetifyjs.com/en/api/v-stepper/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-stepper-actions',
            link: 'https://vuetifyjs.com/en/api/v-stepper-actions/',
          },
          description: 'Actions for stepper',
        },
        {
          element: {
            title: 'v-stepper-header',
            link: 'https://vuetifyjs.com/en/api/v-stepper-header/',
          },
          description: 'Container for stepper items',
        },
        {
          element: {
            title: 'v-stepper-item',
            link: 'https://vuetifyjs.com/en/api/v-stepper-item/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-stepper-window',
            link: 'https://vuetifyjs.com/en/api/v-stepper-window/',
          },
          description: 'Window container for stepper window items',
        },
        {
          element: {
            title: 'v-stepper-window-item',
            link: 'https://vuetifyjs.com/en/api/v-stepper-window-item/',
          },
          description: 'Items for stepper window',
        },
      ],
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'Place `v-stepper-header` on top, `v-stepper-window` below it, and `v-stepper-actions` after the window.',
      Image: '/images/stories/UStepper.anatomy.png',
      data: [
        { element: '1. Container', description: 'Holds header, window and actions' },
        { element: '2. Header', description: 'Container for step items' },
        { element: '3. Window', description: 'Content area for step contents' },
        { element: '4. Actions', description: 'Optional prev/next actions area' },
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
    mobile: {
      control: 'boolean',
      description: 'Mobile mode hides labels.',
      table: { defaultValue: { summary: 'false' } },
    },
    hideActions: {
      control: 'boolean',
      description: 'Hide prev/next actions.',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UStepper, UCard },
  setup() {
    return { args };
  },
  template: `
  <u-stepper v-bind="args">
    <template v-slot:item.1>
      <u-card title="Step One" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat>
      </u-card>
    </template>

    <template v-slot:item.2>
      <u-card title="Step Two" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat>
      </u-card>
    </template>

    <template v-slot:item.3>
      <u-card title="Step Three" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat>
      </u-card>
    </template>
  </u-stepper>
  `,
});

Default.args = {
  items: ['Step 1', 'Step 2', 'Step 3'],
  modelValue: '1',
} as ComponentArgs;

export const NonEditable: StoryFn<ComponentArgs> = (args) => ({
  components: { UStepper, UDivider },
  setup() {
    return { args };
  },
  template: `
  <u-stepper v-bind="args">
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2"></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3"></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
  `,
});

NonEditable.args = {
  modelValue: '2',
} as ComponentArgs;

NonEditable.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-stepper model-value="2">
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2"></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3"></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
</template>`,
    },
  },
};

export const Editable: StoryFn<ComponentArgs> = (args) => ({
  components: { UStepper, UDivider },
  setup() {
    return { args };
  },
  template: `
  <u-stepper v-bind="args">
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete editable></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3" editable></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
  `,
});

Editable.args = {} as ComponentArgs;

Editable.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-stepper>
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete editable></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3" editable></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
</template>`,
    },
  },
};

export const Items: StoryFn<ComponentArgs> = (_args) => ({
  components: { UStepper, UTable, URadioGroup, URadio, USheet },
  setup() {
    const shipping = ref(0);
    const step = ref(1);
    const products = ref([
      { name: 'Product 1', price: 10, quantity: 2 },
      { name: 'Product 2', price: 15, quantity: 1 },
    ] as Array<{ name: string; price: number; quantity: number }>);

    const subtotal = computed(() =>
      products.value.reduce((acc, p) => acc + p.quantity * p.price, 0)
    );
    const total = computed(() => subtotal.value + Number(shipping.value ?? 0));

    const items = ['Review Order', 'Select Shipping', 'Submit'];

    return { shipping, step, products, subtotal, total, items };
  },
  template: `
  <u-stepper v-model="step" :items="items" show-actions>
    <template v-slot:item.1>
      <h3 class="text-h6">Order</h3>
    </template>

    <template v-slot:item.2>
      <h3 class="text-h6">Shipping</h3>
      <u-radio-group v-model="shipping" label="Delivery Method">
        <u-radio label="Standard Shipping" :value="5"></u-radio>
        <u-radio label="Priority Shipping" :value="10"></u-radio>
        <u-radio label="Express Shipping" :value="15"></u-radio>
      </u-radio-group>
    </template>

    <template v-slot:item.3>
      <h3 class="text-h6">Confirm</h3>
      <div>Total: {{ total }}</div>
    </template>
  </u-stepper>
  `,
});

Items.args = {
  items: ['Review Order', 'Select Shipping', 'Submit'],
  modelValue: 1,
} as ComponentArgs;

Items.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-stepper v-model="step" :items="['Review Order', 'Select Shipping', 'Submit']" show-actions>
    <template v-slot:item.1>
      <h3 class="text-h6">Order</h3>
    </template>

    <template v-slot:item.2>
      <h3 class="text-h6">Shipping</h3>
      <u-radio-group v-model="shipping" label="Delivery Method">
        <u-radio label="Standard Shipping" :value="5"></u-radio>
        <u-radio label="Priority Shipping" :value="10"></u-radio>
        <u-radio label="Express Shipping" :value="15"></u-radio>
      </u-radio-group>
    </template>

    <template v-slot:item.3>
      <h3 class="text-h6">Confirm</h3>
      <div>Total: {{ total }}</div>
    </template>
  </u-stepper>
</template>`,
    },
  },
};
