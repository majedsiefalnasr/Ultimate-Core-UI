import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import {
  UBtn,
  UBtnToggle,
  UCard,
  UConfirmEdit,
  UDatePicker,
  UDivider,
  USheet,
  USpacer,
  UTextField,
} from '../index';

interface ComponentArgs {
  // Core props
  modelValue?: unknown;

  // Text customization
  cancelText?: string;
  okText?: string;

  // Styling
  color?: string;

  // State
  disabled?: boolean | ('cancel' | 'save')[];
  hideActions?: boolean;

  // Story-specific
  content?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Confirm Edit',
  component: UConfirmEdit,
  parameters: {
    docs: {
      description: {
        component:
          'The u-confirm-edit component is used to allow the user to verify their changes before they are committed.',
      },
      import: `import { UConfirmEdit } from '@ultimate/core-ui/components'`,
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

          return `<u-confirm-edit${attrsString}></u-confirm-edit>`;
        },
      },
    },
    Vuetify: {
      component: 'VConfirmEdit',
      content:
        'The u-confirm-edit component is used to allow the user to verify their changes before they are committed.',
      link: 'https://vuetifyjs.com/en/components/confirm-edit/',
    },
    Primary: {
      description:
        'The u-confirm-edit component is used to allow the user to verify their changes before they are committed.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-confirm-edit',
            link: 'https://vuetifyjs.com/en/api/v-confirm-edit/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    // Core props
    modelValue: {
      control: 'text',
      description: 'Represents the committed v-model value',
      table: { type: { summary: 'unknown' }, defaultValue: { summary: 'undefined' } },
    },

    // Text customization
    cancelText: {
      control: 'text',
      description: 'Text for the cancel button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '$vuetify.confirmEdit.cancel' },
      },
    },
    okText: {
      control: 'text',
      description: 'Text for the ok button',
      table: { type: { summary: 'string' }, defaultValue: { summary: '$vuetify.confirmEdit.ok' } },
    },

    // Styling
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },

    // State
    disabled: {
      control: 'object',
      description:
        'Control the disabled state of action buttons. If not provided, internal logic will be used to determine the disabled state.',
      table: {
        type: { summary: 'boolean | ("cancel" | "save")[]' },
        defaultValue: { summary: 'undefined' },
      },
    },
    hideActions: {
      control: 'boolean',
      description:
        'Prevent showing the default actions buttons. Does not affect <component :is="actions" />',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UConfirmEdit, USpacer, UTextField },
  setup() {
    const model = shallowRef('Egg plant');
    return { model };
  },
  template: `
    <u-confirm-edit v-model="model">
      <template v-slot:default="{ model: proxyModel, actions }">
        <u-card
          class="mx-auto"
          max-width="320"
          title="Update Field"
        >
          <template v-slot:text>
            <u-text-field
              v-model="proxyModel.value"
              messages="Modify my value"
            ></u-text-field>
          </template>

          <template v-slot:actions>
            <u-spacer></u-spacer>

            <component :is="actions"></component>
          </template>
        </u-card>
      </template>
    </u-confirm-edit>
  `,
});

Default.args = {} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-confirm-edit v-model="model">
    <template v-slot:default="{ model: proxyModel, actions }">
      <u-card
        class="mx-auto"
        max-width="320"
        title="Update Field"
      >
        <template v-slot:text>
          <u-text-field
            v-model="proxyModel.value"
            messages="Modify my value"
          ></u-text-field>
        </template>

        <template v-slot:actions>
          <u-spacer></u-spacer>

          <component :is="actions"></component>
        </template>
      </u-card>
    </template>
  </u-confirm-edit>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const model = shallowRef('Egg plant');
</script>`,
    },
  },
};

export const Pickers: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UConfirmEdit, UDatePicker },
  setup() {
    const date = shallowRef();
    return { date };
  },
  template: `
    <u-card
      class="mx-auto"
      max-width="328"
      rounded="lg"
      border
    >
      <u-confirm-edit v-model="date">
        <template v-slot:default="{ model: proxyModel, actions }">
          <u-date-picker v-model="proxyModel.value">
            <template v-slot:actions>
              <component :is="actions"></component>
            </template>
          </u-date-picker>
        </template>
      </u-confirm-edit>
    </u-card>
  `,
});

Pickers.parameters = {
  docs: {
    description: {
      story:
        "It's easy to integrate pickers into the v-confirm-edit component. This allows you to provide a more user-friendly experience when selecting dates, times, or colors.",
    },
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    max-width="328"
    rounded="lg"
    border
  >
    <u-confirm-edit v-model="date">
      <template v-slot:default="{ model: proxyModel, actions }">
        <u-date-picker v-model="proxyModel.value">
          <template v-slot:actions>
            <component :is="actions"></component>
          </template>
        </u-date-picker>
      </template>
    </u-confirm-edit>
  </u-card>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';

const date = shallowRef();
</script>`,
    },
  },
};

export const DisableActions: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UBtnToggle, UCard, UConfirmEdit, UDivider, USheet, USpacer, UTextField },
  setup() {
    const disabled = ref<boolean | ('cancel' | 'save')[] | undefined>([]);
    const value = shallowRef('My Beach Vacation');

    function onClick(action: 'cancel' | 'save') {
      if (!Array.isArray(disabled.value)) {
        disabled.value = [];
      }

      if (disabled.value.includes(action)) {
        disabled.value = disabled.value.filter((item) => item !== action);
      } else {
        disabled.value.push(action);
      }
    }

    return { disabled, value, onClick };
  },
  template: `
    <div>
      <div class="d-flex justify-center">
        <u-btn-toggle
          density="comfortable"
          rounded="lg"
          border
          divided
        >
          <u-btn
            :active="Array.isArray(disabled) && disabled?.includes('cancel')"
            text="Toggle cancel"
            @click="onClick('cancel')"
          ></u-btn>

          <u-btn
            :active="Array.isArray(disabled) && disabled?.includes('save')"
            text="Toggle save"
            @click="onClick('save')"
          ></u-btn>

          <u-btn
            :active="typeof disabled === 'boolean'"
            text="Toggle Boolean"
            @click="disabled = !disabled"
          ></u-btn>

          <u-btn
            :active="disabled === undefined"
            text="Default"
            @click="disabled = undefined"
          ></u-btn>
        </u-btn-toggle>
      </div>

      <div class="d-flex justify-center align-center py-4 ga-2">
        <strong>Disabled:</strong>
        <span
          class="bg-surface-light rounded rounded-md pa-1"
          size="small"
          v-text="disabled === undefined ? 'undefined' : disabled"
        ></span>
      </div>

      <u-sheet
        class="pa-4"
        color="surface-light"
        rounded="lg"
      >
        <u-confirm-edit
          v-slot="{ model: proxyModel, actions }"
          v-model="value"
          :disabled="disabled"
        >
          <u-card class="mx-auto" max-width="400" rounded="lg" title="Update Field">
            <template v-slot:text>
              <u-text-field
                v-model="proxyModel.value"
                label="Name"
                variant="outlined"
              ></u-text-field>
            </template>

            <u-divider></u-divider>

            <template v-slot:actions>
              <u-spacer></u-spacer>

              <component :is="actions"></component>
            </template>
          </u-card>
        </u-confirm-edit>
      </u-sheet>
    </div>
  `,
});

DisableActions.parameters = {
  docs: {
    description: {
      story:
        'You can control the disabled state of action buttons using disabled prop by either passing an array to disable targeted actions or a boolean value to disable all actions. If the disabled prop is not provided, the component will use internal logic to determine the disabled state.',
    },
    source: {
      code: `<template>
  <div>
    <div class="d-flex justify-center">
      <u-btn-toggle
        density="comfortable"
        rounded="lg"
        border
        divided
      >
        <u-btn
          :active="Array.isArray(disabled) && disabled?.includes('cancel')"
          text="Toggle cancel"
          @click="onClick('cancel')"
        ></u-btn>

        <u-btn
          :active="Array.isArray(disabled) && disabled?.includes('save')"
          text="Toggle save"
          @click="onClick('save')"
        ></u-btn>

        <u-btn
          :active="typeof disabled === 'boolean'"
          text="Toggle Boolean"
          @click="disabled = !disabled"
        ></u-btn>

        <u-btn
          :active="disabled === undefined"
          text="Default"
          @click="disabled = undefined"
        ></u-btn>
      </u-btn-toggle>
    </div>

    <div class="d-flex justify-center align-center py-4 ga-2">
      <strong>Disabled:</strong>
      <span
        class="bg-surface-light rounded rounded-md pa-1"
        size="small"
        v-text="disabled === undefined ? 'undefined' : disabled"
      ></span>
    </div>

    <u-sheet
      class="pa-4"
      color="surface-light"
      rounded="lg"
    >
      <u-confirm-edit
        v-slot="{ model: proxyModel, actions }"
        v-model="value"
        :disabled="disabled"
      >
        <u-card class="mx-auto" max-width="400" rounded="lg" title="Update Field">
          <template v-slot:text>
            <u-text-field
              v-model="proxyModel.value"
              label="Name"
              variant="outlined"
            ></u-text-field>
          </template>

          <u-divider></u-divider>

          <template v-slot:actions>
            <u-spacer></u-spacer>

            <component :is="actions"></component>
          </template>
        </u-card>
      </u-confirm-edit>
    </u-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref, shallowRef } from 'vue';

const disabled = ref<boolean | ('cancel' | 'save')[] | undefined>([]);
const value = shallowRef('My Beach Vacation');

function onClick(action: 'cancel' | 'save') {
  if (!Array.isArray(disabled.value)) {
    disabled.value = [];
  }

  if (disabled.value.includes(action)) {
    disabled.value = disabled.value.filter((item) => item !== action);
  } else {
    disabled.value.push(action);
  }
}
</script>`,
    },
  },
};
