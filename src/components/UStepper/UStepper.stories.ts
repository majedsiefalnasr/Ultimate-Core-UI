import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import {
  UCard,
  UDivider,
  URadio,
  URadioGroup,
  USelect,
  USheet,
  UStepper,
  UStepperActions,
  UStepperWindow,
  UStepperWindowItem,
  UTable,
} from '../index';

import UStepperHeader from './UStepperHeader.vue';
import UStepperItem from './UStepperItem.vue';

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
          return `<template>
  <u-stepper${attrs}>
    <template v-slot:item.1>
      <u-card title="Step One" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>

    <template v-slot:item.2>
      <u-card title="Step Two" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>

    <template v-slot:item.3>
      <u-card title="Step Three" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!" flat></u-card>
    </template>
  </u-stepper>
</template>`;
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
      description: `The recommended placement of elements inside of v-stepper is:

- Place v-stepper-header on top
- Place v-stepper-window or other forms of content below the stepper header
- Place v-stepper-actions after the stepper window`,
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

// Default story
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

// Non Editable story
const nonEditableTemplate = `
  <u-stepper v-bind="args">
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2"></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3"></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
  `;

/**
 * A basic stepper has non-editable steps that force a user to move linearly through
 * your process.
 */
export const NonEditable: StoryFn<ComponentArgs> = (args) => ({
  components: { UStepper, UDivider },
  setup() {
    return { args };
  },
  template: nonEditableTemplate,
});

NonEditable.args = {
  modelValue: '2',
} as ComponentArgs;

NonEditable.parameters = {
  docs: {
    source: {
      code: `<template>${nonEditableTemplate}</template>`,
    },
  },
};

// Editable story
const editableTemplate = `
  <u-stepper v-bind="args">
    <u-stepper-header>
      <u-stepper-item title="Select campaign settings" value="1" complete editable></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad group" value="2" complete></u-stepper-item>
      <u-divider></u-divider>
      <u-stepper-item title="Create an ad" value="3" editable></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
  `;

/**
 * An editable step can be selected by a user at any point and will navigate them to that step.
 */
export const Editable: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  template: editableTemplate,
});

Editable.parameters = {
  docs: {
    source: {
      code: `<template>${editableTemplate}</template>`,
    },
  },
};

// Alternate label story
const alternateLabelTemplate = `  
  <u-stepper alt-labels>
    <u-stepper-header>
      <u-stepper-item title="Ad unit details" value="1"></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item title="Ad sizes" value="2"></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item title="Ad templates" value="3"></u-stepper-item>
    </u-stepper-header>
  </u-stepper>`;

/**
 * Steppers also have an alternative label style which places the title under the step itself.
 */
export const AlternateLabel: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  template: alternateLabelTemplate,
});

AlternateLabel.parameters = {
  docs: {
    source: {
      code: `<template>${alternateLabelTemplate}</template>`,
    },
  },
};

// Linear steppers story
const linearSteppersTemplate = `
  <u-stepper>
    <u-stepper-header>
      <u-stepper-item
        title="Select campaign settings"
        value="1"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad group"
        value="2"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad"
        value="3"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>

  <br>

  <u-stepper model-value="2">
    <u-stepper-header>
      <u-stepper-item
        title="Select campaign settings"
        value="1"
        complete
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad group"
        value="2"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad"
        value="3"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>

  <br>

  <u-stepper model-value="3">
    <u-stepper-header>
      <u-stepper-item
        title="Select campaign settings"
        value="1"
        complete
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad group"
        value="2"
        complete
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad"
        value="3"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
`;

/**
 * Linear steppers will always move a user through your defined path.
 */
export const LinearSteppers: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  template: linearSteppersTemplate,
});

LinearSteppers.parameters = {
  docs: {
    source: {
      code: `<template>${linearSteppersTemplate}</template>`,
    },
  },
};

// Optional steps story
const optionalStepsTemplate = `
  <u-stepper model-value="1">
    <u-stepper-header>
      <u-stepper-item
        title="Select campaign settings"
        value="1"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        subtitle="Optional"
        title="Create an ad group"
        value="2"
      ></u-stepper-item>
      
      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad"
        value="3"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>

  <br>

  <u-stepper model-value="2">
    <u-stepper-header>
      <u-stepper-item
        title="Select campaign settings"
        value="1"
        complete
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        subtitle="Optional"
        title="Create an ad group"
        value="2"
      ></u-stepper-item>
      
      <u-divider></u-divider>

      <u-stepper-item
        title="Create an ad"
        value="3"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
`;

/**
 * An optional step can be called out with sub-text.
 */
export const OptionalSteps: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  template: optionalStepsTemplate,
});

OptionalSteps.parameters = {
  docs: {
    source: {
      code: `<template>${optionalStepsTemplate}</template>`,
    },
  },
};

// Items story
const itemsTemplate = `
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
  `;

/**
 * The stepper component accepts an array of items similar to other components such
 * as u-list and u-select.
 */
export const Items: StoryFn<ComponentArgs> = () => ({
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
  template: itemsTemplate,
});

Items.parameters = {
  docs: {
    source: {
      code: `<template>${itemsTemplate}</template>

<script setup>
  import { computed, ref } from 'vue'

  const shipping = ref(0)
  const step = ref(1)
  const products = ref([
    { name: 'Product 1', price: 10, quantity: 2 },
    { name: 'Product 2', price: 15, quantity: 1 },
  ])
  const subtotal = computed(() =>
    products.value.reduce((acc, p) => acc + p.quantity * p.price, 0)
  )
  const total = computed(() => subtotal.value + Number(shipping.value ?? 0))
  const items = ['Review Order', 'Select Shipping', 'Submit']
</script>`,
    },
  },
};

// Mobile story
const mobileTemplate = `
  <u-stepper mobile>
    <u-stepper-header>
      <template v-for="(item, i) in items" :key="i">
        <u-divider v-if="i"></u-divider>

        <u-stepper-item v-bind="item"></u-stepper-item>
      </template>
    </u-stepper-header>
  </u-stepper>
`;

/**
 * Use the mobile prop to hide the title and subtitle of the u-stepper-item component.
 */
export const Mobile: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  setup() {
    const items = Array.from({ length: 10 }).map((_, i) => ({
      title: `Step ${i + 1}`,
      subtitle: `Step ${i + 1} subtitle`,
      value: i + 1,
    }));

    return { items };
  },
  template: mobileTemplate,
});

Mobile.parameters = {
  docs: {
    source: {
      code: `<template>${mobileTemplate}</template>

<script setup>
  const items = Array.from({ length: 10 }).map((_, i) => ({
    title: \`Step \${i + 1}\`,
    subtitle: \`Step \${i + 1} subtitle\`,
    value: i + 1,
  }))
</script>`,
    },
  },
};

// Errors story
const errorsTemplate = `
  <u-stepper model-value="3">
    <u-stepper-header>
      <u-stepper-item
        title="Job Search"
        value="1"
        complete
      ></u-stepper-item>
      
      <u-divider></u-divider>

      <u-stepper-item
        :rules="[() => false]"
        subtitle="Missing Details"
        title="Submit Application"
        value="2"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Interview Process"
        value="3"
      ></u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        title="Hiring Decision"
        value="4"
      ></u-stepper-item>
    </u-stepper-header>
  </u-stepper>
`;

/**
 * An error state can be displayed to notify the user of some action that must be taken.
 */
export const Errors: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UTable, URadioGroup, URadio, USheet },
  template: errorsTemplate,
});

Errors.parameters = {
  docs: {
    source: {
      code: `<template>${errorsTemplate}</template>`,
    },
  },
};

// Dynamic steps story
const dynamicStepsTemplate = `
  <div>
    <u-card class="mb-4">
      <u-card-text>
        <u-select
          v-model="steps"
          :items="[2, 3, 4, 5, 6]"
          label="# of steps"
        ></u-select>
      </u-card-text>
    </u-card>

    <u-stepper v-model="e1">
      <template v-slot:default="{ prev, next }">
        <u-stepper-header>
          <template v-for="n in steps" :key="\`\${n}-step\`">
            <u-stepper-item
              :complete="e1 > n"
              :step="\`Step {{ n }}\`"
              :value="n"
              editable
            ></u-stepper-item>

            <u-divider
              v-if="n !== steps"
              :key="n"
            ></u-divider>
          </template>
        </u-stepper-header>

        <u-stepper-window>
          <u-stepper-window-item
            v-for="n in steps"
            :key="\`\${n}-content\`"
            :value="n"
          >
            <u-card
              color="grey-lighten-1"
              height="200"
            ></u-card>
          </u-stepper-window-item>
        </u-stepper-window>

        <u-stepper-actions
          :disabled="disabled"
          @click:next="next"
          @click:prev="prev"
        ></u-stepper-actions>
      </template>
    </u-stepper>
  </div>
`;

/**
 * Steppers can have their steps dynamically added or removed. If a currently active
 * step is removed, be sure to account for this by changing the applied model.
 */
export const DynamicSteps: StoryFn<ComponentArgs> = () => ({
  components: {
    UStepper,
    UStepperHeader,
    UStepperItem,
    UDivider,
    UStepperWindow,
    UStepperWindowItem,
    UStepperActions,
    UCard,
    USelect,
  },
  setup() {
    const e1 = ref(1);
    const steps = ref(2);

    const disabled = computed(() => {
      return e1.value === 1 ? 'prev' : e1.value === steps.value ? 'next' : undefined;
    });

    return { e1, steps, disabled };
  },
  template: dynamicStepsTemplate,
});

DynamicSteps.parameters = {
  docs: {
    source: {
      code: `<template>${dynamicStepsTemplate}</template>

<script setup>
  import { computed, ref } from 'vue'

  const e1 = ref(1)
  const steps = ref(2)

  const disabled = computed(() => {
    return e1.value === 1 ? 'prev' : e1.value === steps.value ? 'next' : undefined
  })
</script>`,
    },
  },
};

// Alternative label with errors story
const alternateLabelWithErrorsTemplate = `
  <u-stepper alt-labels>
    <u-stepper-header>
      <u-stepper-item
        value="1"
        complete
      >
        <template v-slot:title>
          Ad type
        </template>
      </u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        value="2"
        complete
      >
        <template v-slot:title>
          Ad style
        </template>
      </u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item
        :rules="[() => false]"
        value="3"
      >
        <template v-slot:title>
          Custom channels
        </template>

        <template v-slot:subtitle>
          Alert message
        </template>
      </u-stepper-item>

      <u-divider></u-divider>

      <u-stepper-item value="46">
        <template v-slot:title>
          Get code
        </template>
      </u-stepper-item>
    </u-stepper-header>
  </u-stepper>
`;

/**
 * The error state can also be applied to the alternative label style.
 */
export const AlternateLabelWithErrors: StoryFn<ComponentArgs> = () => ({
  components: { UStepper, UStepperHeader, UStepperItem, UDivider },
  template: alternateLabelWithErrorsTemplate,
});

AlternateLabelWithErrors.parameters = {
  docs: {
    source: {
      code: `<template>${alternateLabelWithErrorsTemplate}</template>`,
    },
  },
};
