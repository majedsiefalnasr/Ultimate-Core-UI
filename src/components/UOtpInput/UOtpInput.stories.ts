import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import { UBtn, UCard, UDivider, UOtpInput, USheet } from '../index';

interface ComponentArgs {
  autofocus?: boolean;
  baseColor?: string;
  bgColor?: string;
  color?: string;
  disabled?: boolean;
  divider?: string;
  error?: boolean;
  focusAll?: boolean;
  focused?: boolean;
  height?: string | number;
  label?: string;
  length?: string | number;
  loading?: string | boolean;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: string | number;
  placeholder?: string;
  rounded?: string | number | boolean;
  theme?: string;
  type?: 'number' | 'text' | 'password';
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Otp Input',
  component: UOtpInput,
  parameters: {
    docs: {
      description: {
        component:
          'The OTP input is used for MFA procedure of authenticating users by a one-time password.',
      },
      import: `import { UOtpInput } from '@ultimate/core-ui/components'`,
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

          return `<u-otp-input${attrsString}></u-otp-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VOtpInput',
      content:
        "This component is built on top of Vuetify's VOtpInput component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/otp-input/',
    },
    Primary: {
      description:
        'Here we display a list of settings that could be applied within an application.',
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The u-otp-input component is a collection of u-field components that combine to create a single input.',
      Image: '/images/stories/UOtpInput.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The OTP input container holds a number of v-field components',
        },
        {
          element: '2. Field',
          description: 'The v-field component is used to create a single input field',
        },
      ],
    },
    api: {
      data: [
        {
          element: {
            title: 'v-otp-input',
            link: 'https://vuetifyjs.com/en/api/v-otp-input/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    autofocus: {
      control: { type: 'boolean' },
      description: 'Automatically focuses the first input on page load.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    baseColor: {
      control: { type: 'text' },
      description: 'Sets the color of the input when it is not focused.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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
    color: {
      control: { type: 'text' },
      description:
        'Applies specified color to the control - supports utility colors or css color values.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Removes the ability to click or target the input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    divider: {
      control: { type: 'text' },
      description: 'Specifies the dividing character between items.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    error: {
      control: { type: 'boolean' },
      description: 'Puts the input in a manual error state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    focusAll: {
      control: { type: 'boolean' },
      description: 'Puts all inputs into a focus state when any are focused.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    focused: {
      control: { type: 'boolean' },
      description: 'Forces a focused state styling on the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    height: {
      control: { type: 'text' },
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Sets the text of the v-label or v-field-label component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.input.otp'" },
        category: 'Props',
      },
    },
    length: {
      control: { type: 'number' },
      description: "The OTP field's length.",
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '6' },
        category: 'Props',
      },
    },
    loading: {
      control: { type: 'boolean' },
      description:
        'Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar or a Boolean.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
        category: 'Props',
      },
    },
    maxHeight: {
      control: { type: 'text' },
      description: 'Sets the maximum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    maxWidth: {
      control: { type: 'text' },
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    minHeight: {
      control: { type: 'text' },
      description: 'Sets the minimum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    minWidth: {
      control: { type: 'text' },
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    modelValue: {
      control: { type: 'text' },
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    placeholder: {
      control: { type: 'text' },
      description: "Sets the input's placeholder text.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    rounded: {
      control: { type: 'text' },
      description:
        'Designates the border-radius applied to the component. Can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    theme: {
      control: { type: 'text' },
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
    type: {
      control: { type: 'select' },
      options: ['number', 'text', 'password'],
      description: 'Supported types: text, password, number.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'number'" },
        category: 'Props',
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'outlined',
        'plain',
        'underlined',
        'filled',
        'solo',
        'solo-inverted',
        'solo-filled',
      ],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'outlined'" },
        category: 'Props',
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Sets the width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
        category: 'Props',
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UOtpInput },
  setup() {
    return { args };
  },
  template: `<u-otp-input v-bind="args"></u-otp-input>`,
});

Default.args = {
  autofocus: true,
} as ComponentArgs;

// Length Story
const lengthTemplate = `
    <u-otp-input
      length="7"
      model-value="3214214"
    ></u-otp-input>
  `;

/**
 * The length prop determines the number of u-field components that are rendered.
 * The default value is 6.
 */
export const Length: StoryFn<ComponentArgs> = () => ({
  components: { UOtpInput },
  template: lengthTemplate,
});

Length.parameters = {
  docs: {
    source: {
      code: `<template>${lengthTemplate}</template>`,
    },
  },
};

// Focus All Story
const focusAllTemplate = `
    <u-otp-input
      model-value="425"
      focus-all
      focused
    ></u-otp-input>
  `;

/**
 * The autofocus prop automatically focuses the first element in the u-otp-input component.
 */
export const FocusAll: StoryFn<ComponentArgs> = () => ({
  components: { UOtpInput },
  template: focusAllTemplate,
});

FocusAll.parameters = {
  docs: {
    source: {
      code: `<template>${focusAllTemplate}</template>`,
    },
  },
};

// Error Story
const errorTemplate = `
    <u-otp-input
      model-value="221"
      error
    ></u-otp-input>
  `;

/**
 * The error prop puts the u-otp-input into an error state. This is useful for displaying
 * validation errors.
 */
export const Error: StoryFn<ComponentArgs> = () => ({
  components: { UOtpInput },
  template: errorTemplate,
});

Error.parameters = {
  docs: {
    source: {
      code: `<template>${errorTemplate}</template>`,
    },
  },
};

// Variants Story
const variantsTemplate = `
    <u-otp-input
      model-value="8011"
      variant="filled"
    ></u-otp-input>
  `;

/**
 * The u-otp-input component supports the same variants as u-field, u-text-field and
 * other inputs.
 */
export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UOtpInput },
  template: variantsTemplate,
});

Variants.parameters = {
  docs: {
    source: {
      code: `<template>${variantsTemplate}</template>`,
    },
  },
};

// Loader Story
const loaderTemplate = `
    <div class="text-center">
      <u-otp-input
        v-model="otp"
        :loading="loading"
        length="5"
        variant="underlined"
      ></u-otp-input>

      <u-btn
        :disabled="otp.length < 5 || loading"
        class="my-5"
        color="surface-variant"
        text="Submit"
        variant="tonal"
        @click="onClick"
      ></u-btn>
    </div>
  `;

/**
 * The loader prop displays a loader when the u-otp-input component is in a loading state.
 * When complete, emits a finish event.
 */
export const Loader: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UOtpInput },
  setup() {
    const loading = shallowRef(false);
    const otp = shallowRef('31');

    function onClick() {
      loading.value = true;

      setTimeout(() => {
        loading.value = false;
      }, 2000);
    }

    return { loading, otp, onClick };
  },
  template: loaderTemplate,
});

Loader.parameters = {
  docs: {
    source: {
      code: `<template>${loaderTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const loading = shallowRef(false)
  const otp = shallowRef('31')

  function onClick () {
    loading.value = true

    setTimeout(() => {
      loading.value = false
    }, 2000)
  }
</script>`,
    },
  },
};

// Card Variants Story
const cardVariantsTemplate = `
    <u-card
      class="py-8 px-6 text-center mx-auto ma-4"
      elevation="12"
      max-width="400"
      width="100%"
    >
      <h3 class="text-h6 mb-4">Verify Your Account</h3>

      <div class="text-body-2">
        We sent a verification code to john..@gmail.com <br>

        Please check your email and paste the code below.
      </div>

      <u-sheet color="surface">
        <u-otp-input
          v-model="otp"
          type="password"
          variant="solo"
        ></u-otp-input>
      </u-sheet>

      <u-btn
        class="my-4"
        color="purple"
        height="40"
        text="Verify"
        variant="flat"
        width="70%"
      ></u-btn>

      <div class="text-caption">
        Didn't receive the code? <a href="#" @click.prevent="otp = ''">Resend</a>
      </div>
    </u-card>
  `;

/**
 * The following example is a detailed example of a u-otp-input component used within a card.
 */
export const CardVariants: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UOtpInput, USheet },
  setup() {
    const otp = shallowRef('');

    return { otp };
  },
  template: cardVariantsTemplate,
});

CardVariants.parameters = {
  docs: {
    source: {
      code: `<template>${cardVariantsTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const otp = shallowRef('')
</script>`,
    },
  },
};

// Mobile Text Story
const mobileTextTemplate = `
    <u-sheet
      class="pt-8 pb-12 px-6 ma-4 mx-auto"
      max-width="350"
      width="100%"
      border
    >
      <h3 class="text-h6 mb-1">Mobile phone verification</h3>

      <div class="text-body-2 font-weight-light">
        Enter the code we just sent to your mobile phone <span class="font-weight-black text-primary">+1 408 555 1212</span>
      </div>

      <u-otp-input
        v-model="otp"
        class="mt-3 ms-n2"
        length="4"
        placeholder="0"
        variant="underlined"
      ></u-otp-input>

      <u-divider class="mt-3 mb-6"></u-divider>

      <div class="mb-3 text-body-2">
        Need another <strong>code</strong>?
      </div>

      <u-btn
        color="primary"
        size="small"
        text="Re-send Email"
        variant="tonal"
        @click="otp = ''"
      ></u-btn>
    </u-sheet>
  `;

/**
 * The following example is a detailed example of a u-otp-input component used with mobile text.
 */
export const MobileText: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UDivider, UOtpInput, USheet },
  setup() {
    const otp = shallowRef('');

    return { otp };
  },
  template: mobileTextTemplate,
});

MobileText.parameters = {
  docs: {
    source: {
      code: `<template>${mobileTextTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const otp = shallowRef('')
</script>`,
    },
  },
};

// Verify Account Story
const verifyAccountTemplate = `
    <u-card
      class="py-12 px-8 text-center mx-auto ma-4"
      max-width="420"
      width="100%"
    >
      <h3 class="text-h6 mb-2">
        Please enter the one time password to verify your account
      </h3>

      <div>A code has been sent to *****2489</div>

      <u-otp-input
        v-model="otp"
        :disabled="validating"
        color="primary"
        variant="plain"
      ></u-otp-input>

      <u-btn
        :loading="validating"
        class="mt-6 text-none bg-surface-variant"
        height="40"
        text="Validate"
        variant="plain"
        width="135"
        border
        rounded
        @click="onClick"
      ></u-btn>
    </u-card>
  `;

/**
 * The following example is a detailed example of a u-otp-input component used to verify
 * a user’s account.
 */
export const VerifyAccount: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UCard, UOtpInput },
  setup() {
    const otp = shallowRef('2401');
    const validating = shallowRef(false);

    function onClick() {
      validating.value = true;

      setTimeout(() => {
        validating.value = false;
      }, 2000);
    }

    return { otp, validating, onClick };
  },
  template: verifyAccountTemplate,
});

VerifyAccount.parameters = {
  docs: {
    source: {
      code: `<template>${verifyAccountTemplate}</template>

<script setup>
  import { shallowRef } from 'vue'

  const otp = shallowRef('2401')
  const validating = shallowRef(false)

  function onClick () {
    validating.value = true

    setTimeout(() => {
      validating.value = false
    }, 2000)
  }
</script>`,
    },
  },
};

// Divider Story
const dividerTemplate = `
    <u-sheet
      class="py-8 px-6 mx-auto ma-4 text-center"
      elevation="4"
      max-width="500"
      rounded="lg"
      width="100%"
    >
      <h3 class="text-h5">Verification Code</h3>

      <div class="text-subtitle-2 font-weight-light mb-3">Please enter the verification code sent to your mobile</div>

      <u-otp-input
        v-model="otp"
        class="mb-8"
        divider="•"
        length="4"
        variant="outlined"
      ></u-otp-input>

      <div class="text-caption">
        <u-btn
          color="primary"
          size="x-small"
          text="Send New Code"
          variant="text"
          @click="otp = ''"
        ></u-btn>
      </div>
    </u-sheet>
  `;

/**
 * The following example is a detailed example of a u-otp-input component used with a divider.
 */
export const Divider: StoryFn<ComponentArgs> = () => ({
  components: { UBtn, UOtpInput, USheet },
  setup() {
    const otp = shallowRef('');

    return { otp };
  },
  template: dividerTemplate,
});

Divider.parameters = {
  docs: {
    source: {
      code: `<template>${dividerTemplate}</template>
      
<script setup>
  import { shallowRef } from 'vue'

  const otp = shallowRef('')
</script>`,
    },
  },
};
