import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import { UBtn, UCard, UCol, UContainer, UMaskInput, URow } from '../index';

interface ComponentArgs {
  modelValue?: string | null;
  mask?: string | Record<string, unknown>;
  label?: string;
  placeholder?: string;
  returnMaskedValue?: boolean;
  persistentHint?: boolean;
  rules?: ((value: unknown) => boolean | string)[];
  disabled?: boolean;
  clearable?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Mask Input',
  component: UMaskInput,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-mask-input` component enforces an input format via masks. Useful for phone numbers, credit cards, IPs, and other formatted inputs. It is a wrapper around the base text field and the `useMask` composable.',
      },
      import: `import { UMaskInput } from '@ultimate/core-ui/components'`,
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

          return `<u-mask-input${attrsString}></u-mask-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VMaskInput',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/inputs/',
    },
    Primary: {
      description: 'This is the usage description placeholder.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-mask-input',
            link: 'https://vuetifyjs.com/en/api/v-mask-input/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'useMask',
            link: 'https://vuetifyjs.com/en/api/use-mask/',
          },
          description: 'Masking composable',
        },
      ],
    },
  },
  argTypes: {
    modelValue: { control: 'text', description: 'v-model value' },
    mask: { control: 'object', description: 'Mask string or mask object' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    returnMaskedValue: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    persistentHint: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    disabled: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
    clearable: { control: 'boolean', table: { defaultValue: { summary: 'false' } } },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UMaskInput, UCard },
  setup() {
    const model = shallowRef(null);
    return { args, model };
  },
  template: '<u-mask-input v-bind="args"></u-mask-input>',
});

Default.args = {
  label: 'Mask input',
  mask: 'credit-card',
} as ComponentArgs;

// BuiltInMasks Story
const builtInMasksTemplate = `
  <div>
    <u-mask-input v-model="model" mask="phone" placeholder="(###) ### - ####"></u-mask-input>
  </div>
`;

/**
 * You can use the built-in masks by simply referencing their name. This is an example of
 * a phone mask.
 */
export const BuiltInMasks: StoryFn<ComponentArgs> = () => ({
  components: { UMaskInput },
  setup() {
    const model = shallowRef(null);
    return { model };
  },
  template: builtInMasksTemplate,
});

BuiltInMasks.parameters = {
  docs: {
    source: {
      code: `<template>${builtInMasksTemplate}</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'

  const model = shallowRef(null)
</script>`,
    },
  },
};

// CustomMask Story
const customMaskTemplate = `
  <div>
    <u-mask-input v-model="model" label="Product Code" mask="AAA-###" placeholder="ABC-123"></u-mask-input>
  </div>
`;

/**
 * You can create custom masks using the available tokens. This will create a mask that
 * accepts 3 letters followed by 3 numbers (e.g., “ABC-123”).
 */
export const CustomMask: StoryFn<ComponentArgs> = () => ({
  components: { UMaskInput },
  setup() {
    const model = shallowRef(null);
    return { model };
  },
  template: customMaskTemplate,
});

CustomMask.parameters = {
  docs: {
    source: {
      code: `<template>${customMaskTemplate}</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'

  const model = shallowRef(null)
</script>`,
    },
  },
};

// CustomTokens story
const customTokensTemplate = `
    <div>
      <u-mask-input v-model="model" :mask="mask" label="License Plate" persistent-hint></u-mask-input>
    </div>
  `;

/**
 * You can also define custom tokens for more specific input requirements:
 */
export const CustomTokens: StoryFn<ComponentArgs> = () => ({
  components: { UMaskInput },
  setup() {
    const model = shallowRef(null);
    const mask = {
      mask: 'LLL-NNN',
      tokens: {
        L: {
          pattern: /[A-Z]/,
          convert: (v: string) => v.toUpperCase(),
        },
        N: {
          pattern: /[0-9]/,
          convert: (v: string) => v,
        },
      },
    } as Record<string, unknown>;

    return { model, mask };
  },
  template: customTokensTemplate,
});

CustomTokens.parameters = {
  docs: {
    source: {
      code: `<template>${customTokensTemplate}</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'

  const model = shallowRef(null)

  const mask = {
    mask: 'LLL-NNN',
    tokens: {
      L: { pattern: /[A-Z]/, convert: v => v.toUpperCase() },
      N: { pattern: /[0-9]/, convert: v => v },
    }
  }
</script>`,
    },
  },
};

// IPAddress story
const ipAddressTemplate = `
    <div>
      <u-mask-input v-model="model" :rules="rules" hint="Enter a valid IP address" label="IP Address" mask="###.###.###.###" placeholder="192.168.001.001" persistent-hint return-masked-value></u-mask-input>
    </div>
  `;

/**
 * This example shows how to create a mask for IP addresses with validation:
 */
export const IPAddress: StoryFn<ComponentArgs> = () => ({
  components: { UMaskInput },
  setup() {
    const model = shallowRef(null);

    const validateIP = (ip: string) => {
      if (!ip) return false;
      const parts = ip.split('.');
      return (
        parts.length === 4 &&
        parts.every((part) => {
          const num = parseInt(part, 10);
          return !Number.isNaN(num) && num >= 0 && num <= 255;
        })
      );
    };

    const rules = [
      (v: unknown) => !!v || 'IP address is required',
      (v: unknown) => (typeof v === 'string' && validateIP(v)) || 'Invalid IP address',
    ];

    return { model, rules };
  },
  template: ipAddressTemplate,
});

IPAddress.parameters = {
  docs: {
    source: {
      code: `<template>${ipAddressTemplate}</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'

  const model = shallowRef(null)

  const validateIP = ip => {
    if (!ip) return false
    const parts = ip.split('.')
    return parts.length === 4 && parts.every(part => {
      const num = parseInt(part)
      return num >= 0 && num <= 255
    })
  }
</script>`,
    },
  },
};

// CreditCardForm story
const creditCardFormTemplate = `
  <div>
    <u-row>
      <u-col cols="12">
          <u-mask-input
            v-model="cardNumber"
            :rules="[
              v => !!v || 'Card number is required',
              v => v.replace(/ /g, '').length === 16 || 'Card number must be 16 digits'
            ]"
          hint="Enter 16-digit card number"
          mask="#### #### #### ####"
          placeholder="XXXX XXXX XXXX XXXX"
          prepend-inner-icon="hugeicons:credit-card"
          persistent-hint
        ></u-mask-input>
      </u-col>

      <u-col cols="6">
        <u-mask-input
          v-model="expiryDate"
          :rules="[
            v => !!v || 'Expiry date is required',
            v => validateExpiryDate(v) || 'Invalid expiry date'
          ]"
          hint="Enter expiry date"
          mask="##/##"
          placeholder="MM/YY"
          prepend-inner-icon="hugeicons:calendar-01"
          persistent-hint
          return-masked-value
        ></u-mask-input>
      </u-col>

      <u-col cols="6">
        <u-mask-input
          v-model="cvv"
          :rules="[
            v => !!v || 'CVV is required',
            v => v.length === 3 || 'CVV must be 3 digits'
          ]"
          hint="3-digit security code"
          mask="###"
          placeholder="CVC"
          prepend-inner-icon="hugeicons:security-password"
          persistent-hint
        ></u-mask-input>
      </u-col>
    </u-row>
  </div>
  `;

/**
 * A complete credit card form example with validation:
 */
export const CreditCardForm: StoryFn<ComponentArgs> = () => ({
  components: { UMaskInput, UContainer, URow, UCol, UBtn, UCard },
  setup() {
    const cardNumber = shallowRef(null);
    const expiryDate = shallowRef(null);
    const cvv = shallowRef(null);

    const validateExpiryDate = (date: string) => {
      if (!date || date.length !== 5) return false;
      const [month, year] = date.split('/');
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear() % 100;
      const currentMonth = currentDate.getMonth() + 1;
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);
      if (Number.isNaN(monthNum) || Number.isNaN(yearNum)) return false;
      return (
        monthNum >= 1 &&
        monthNum <= 12 &&
        (yearNum > currentYear || (yearNum === currentYear && monthNum >= currentMonth))
      );
    };

    const submit = () => {
      // example stub
    };

    return { cardNumber, expiryDate, cvv, validateExpiryDate, submit };
  },
  template: creditCardFormTemplate,
});

CreditCardForm.parameters = {
  docs: {
    source: {
      code: `<template>${creditCardFormTemplate}</template>

<script setup lang="ts">
  import { shallowRef } from 'vue'

  const cardNumber = shallowRef(null)
  const expiryDate = shallowRef(null)
  const cvv = shallowRef(null)

  const validateExpiryDate = date => {
    if (!date || date.length !== 5) return false
    const [month, year] = date.split('/')
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear() % 100
    const currentMonth = currentDate.getMonth() + 1
    const monthNum = parseInt(month)
    const yearNum = parseInt(year)
    return monthNum >= 1 && monthNum <= 12 && (yearNum > currentYear || (yearNum === currentYear && monthNum >= currentMonth))
  }
</script>`,
    },
  },
};
