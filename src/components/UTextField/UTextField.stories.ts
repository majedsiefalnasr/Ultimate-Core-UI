import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref } from 'vue';

import {
  UBtn,
  UCard,
  UCardText,
  UCheckboxBtn,
  UCol,
  UContainer,
  UForm,
  UIcon,
  UImg,
  UProgressLinear,
  UResponsive,
  URow,
  UTextField,
} from '../index';

interface ComponentArgs {
  label?: string;
  placeholder?: string;
  hint?: string;
  modelValue?: string;
  hideDetails?: boolean | 'auto';
  clearable?: boolean;
  clearIcon?: string;
  counter?: boolean | number;
  variant?: string;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  readonly?: boolean;
  prependIcon?: string;
  appendIcon?: string;
  appendInnerIcon?: string;
  prefix?: string;
  suffix?: string;
  type?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Text Fields',
  component: UTextField,
  parameters: {
    docs: {
      description: {
        component:
          'Text field components are used for collecting user provided information. `u-text-field` is a simple text field with placeholder and/or label.',
      },
      import: `import { UTextField } from '@ultimate/core-ui/components'`,
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

          return `<u-text-field${attrsString}></u-text-field>`;
        },
      },
    },
    Primary: {
      description: 'A simple text field with placeholder and/or label.',
    },
    api: {
      data: [
        {
          element: { title: 'v-text-field', link: 'https://vuetifyjs.com/en/api/v-text-field/' },
          description: 'Primary Component',
        },
      ],
    },
    Vuetify: {
      component: 'VTextField',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/text-fields/',
    },
    anatomy: {
      description: `The recommended placement of elements inside of v-text-field is:

- Place a v-icon at the start of the input or label
- Place label after prepended content`,
      Image: '/images/stories/UTextField.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The Text field container contains the u-input and u-field components',
        },
        {
          element: '2. Prepend icon',
          description: 'A custom icon that is located before u-field',
        },
        {
          element: '3. Prepend-inner icon',
          description: 'A custom icon that is located at the start of u-field',
        },
        {
          element: '4. Label',
          description: 'A content area for displaying text to users that correlates to the input',
        },
        {
          element: '5. Append-inner icon',
          description: 'A custom icon that is located at the end of u-field component',
        },
        {
          element: '6. Append icon',
          description: 'A custom icon that is located after u-field component',
        },
      ],
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The v-model value of the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    label: {
      control: 'text',
      description: 'Sets the text of the label.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    placeholder: {
      control: 'text',
      description: 'Sets the input placeholder text.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    hint: {
      control: 'text',
      description: 'Displays a hint below the input when focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Shows a clear icon that resets the input.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearIcon: {
      control: 'text',
      description: 'Icon used for clear action.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'hugeicons:close-circle-24'" },
      },
    },
    counter: {
      control: 'boolean',
      description: 'Display a character counter for the input.',
      table: { type: { summary: 'string | number | boolean' }, defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      options: [
        'outlined',
        'plain',
        'underlined',
        'filled',
        'solo',
        'solo-inverted',
        'solo-filled',
      ],
      description: 'Visual variant for the input.',
      table: {
        type: {
          summary:
            "'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'",
        },
        defaultValue: { summary: "'filled'" },
      },
    },
    color: {
      control: 'text',
      description: 'Changes the input color when focused.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts vertical density for the component.',
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Sets the input to readonly.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'null' } },
    },
    prependIcon: {
      control: 'text',
      description: 'Prepends an icon outside the input.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendIcon: {
      control: 'text',
      description: 'Appends an icon after the input.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendInnerIcon: {
      control: 'text',
      description: 'Adds an inner append icon.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    prefix: {
      control: 'text',
      description: 'Prefix text shown before the input value.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    suffix: {
      control: 'text',
      description: 'Suffix text shown after the input value.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    type: {
      control: 'text',
      description: 'Input type attribute.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'text'" } },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField },
  setup() {
    return { args };
  },
  template: `<u-text-field v-bind="args"></u-text-field>`,
});

Default.args = {
  label: 'Label',
} as ComponentArgs;

// Labeling Story
const labelingTemplate = `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hide-details="auto" label="First name"></u-text-field>
    </u-responsive>
  `;

/**
 * The label prop displays custom text for identifying an input’s purpose.
 */
export const Labeling: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UResponsive },
  template: labelingTemplate,
});

Labeling.parameters = {
  docs: {
    source: {
      code: `<template>${labelingTemplate}</template>`,
    },
  },
};

// Placeholders Story
const placeholdersTemplate = `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hide-details="auto" label="Email address" placeholder="johndoe@gmail.com" type="email"></u-text-field>
    </u-responsive>
  `;

/**
 * Sometimes a label alone doesn’t convey enough information and you need to expose more.
 * For those use-cases, use the placeholder property with or without the label or hint properties.
 * When the user focuses the input, the placeholder fades in as the label translates up.
 * The added visual element improves the user experience when using multiple field inputs.
 */
export const Placeholders: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UResponsive },
  template: placeholdersTemplate,
});

Placeholders.parameters = {
  docs: {
    source: {
      code: `<template>${placeholdersTemplate}</template>`,
    },
  },
};

// Hints Messages Story
const hintsMessagesTemplate = `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hint="Enter your password to access this website" label="Password" type="password"></u-text-field>
    </u-responsive>
  `;

/**
 * The label and placeholder props are useful for providing context to the input but are
 * typically concise. For longer textual information, all Ultimate Core UI inputs contain
 * a details section that is used to provide hints, regular messages, and error-messages.
 */
export const HintsMessages: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UResponsive },
  template: hintsMessagesTemplate,
});

HintsMessages.parameters = {
  docs: {
    source: {
      code: `<template>${hintsMessagesTemplate}</template>`,
    },
  },
};

// Clearable Story
const clearableTemplate = `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field v-model="model" hide-details="auto" label="Last name" clearable></u-text-field>
    </u-responsive>
  `;

/**
 * The clearable prop appends an inner u-icon that clears the u-text-field when clicked.
 * When an input is cleared, it resets the current u-text-field value.
 */
export const Clearable: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UResponsive },
  setup() {
    const model = ref('Leider');
    return { model };
  },
  template: clearableTemplate,
});

Clearable.parameters = {
  docs: {
    source: {
      code: `<template>${clearableTemplate}</template>

<script setup>
  import { ref } from 'vue'
  
  const model = ref('Leider')
</script>`,
    },
  },
};

// Validation Rules Story
const validationRulesTemplate = `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field :rules="[rules.required]" label="Last name" clearable></u-text-field>
    </u-responsive>
  `;

/**
 * When working with inputs you often need to validate the user’s input in some manner;
 * i.e. Email, Password. Use the rules property to invoke custom functions based upon the
 * u-text-field’s state. It accepts an array of functions that return either true or a string.
 */
export const ValidationRules: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UResponsive },
  setup() {
    const rules = { required: (v: string) => !!v || 'Field is required' };
    return { rules };
  },
  template: validationRulesTemplate,
});

ValidationRules.parameters = {
  docs: {
    source: {
      code: `<template>${validationRulesTemplate}</template>

<script setup>
  const rules = { required: value => !!value || 'Field is required' }
</script>`,
    },
  },
};

// Forms Story
const formsTemplate = `
    <u-sheet class="bg-deep-purple pa-12" rounded>
      <u-card class="mx-auto px-6 py-8" max-width="344">
        <u-form v-model="form" @submit.prevent="onSubmit">
          <u-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" label="Email" clearable></u-text-field>
          <u-text-field v-model="password" :readonly="loading" :rules="[required]" label="Password" placeholder="Enter your password" clearable></u-text-field>
          <br />
          <u-btn :disabled="!form" :loading="loading" color="success" size="large" type="submit" variant="elevated" block>Sign In</u-btn>
        </u-form>
      </u-card>
    </u-sheet>
  `;

/**
 * Group multiple u-text-field components and other functionality within a u-form component;
 * for a more detailed look at forms, please visit the u-form page. Forms are useful for
 * validating more than 1 input and make it easy to interact with the state of many fields
 * at once.
 */
export const Forms: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, USheet: UContainer, UCard, UForm, UBtn },
  setup() {
    const form = ref(false);
    const email = ref(null);
    const password = ref(null);
    const loading = ref(false);
    function onSubmit() {
      if (!form.value) return;
      loading.value = true;
      setTimeout(() => (loading.value = false), 2000);
    }
    function required(v: string) {
      return !!v || 'Field is required';
    }
    return { form, email, password, loading, onSubmit, required };
  },
  template: formsTemplate,
});

Forms.parameters = {
  docs: {
    source: {
      code: `<template>${formsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const form = ref(false)
  const email = ref(null)
  const password = ref(null)
  const loading = ref(false)

  function onSubmit() {
    if (!form.value) return
    loading.value = true
    setTimeout(() => (loading.value = false), 2000)
  }

  function required(v) {
    return !!v || 'Field is required'
  }
</script>`,
    },
  },
};

// Density Story
const densityTemplate = `
    <u-card class="mx-auto" color="surface-light" max-width="400">
      <u-text-field :loading="false" append-inner-icon="hugeicons:magnify-24" density="compact" label="Search templates" variant="solo" hide-details single-line @click:append-inner=""></u-text-field>
    </u-card>
  `;

/**
 * The density prop decreases the height of the text field based upon 1 of 3 levels of
 * density; default, comfortable, and compact.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UCard },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>${densityTemplate}</template>`,
    },
  },
};

// Disabled Readonly Story
const disabledReadonlyTemplate = `
    <u-form>
      <u-container>
        <u-row>
          <u-col cols="12" sm="6">
            <u-text-field label="Regular" model-value="John Doe" disabled></u-text-field>
          </u-col>
          <u-col cols="12" sm="6">
            <u-text-field label="Regular" model-value="John Doe" readonly></u-text-field>
          </u-col>
        </u-row>
      </u-container>
    </u-form>
  `;

/**
 * The state of a text field can be changed by providing the disabled or readonly props.
 */
export const DisabledReadonly: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  template: disabledReadonlyTemplate,
});

DisabledReadonly.parameters = {
  docs: {
    source: {
      code: `<template>${disabledReadonlyTemplate}</template>`,
    },
  },
};

// Hint Story
const hintTemplate = `
  <u-form>
    <u-container>
      <u-row>
        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="For example, flowers or used cars"
            label="Your product or service"
            model-value="Grocery delivery"
          ></u-text-field>
        </u-col>

        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="www.example.com/page"
            label="Your landing page"
            persistent-hint
          ></u-text-field>
        </u-col>

        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="For example, flowers or used cars"
            label="Your product or service"
            model-value="Grocery delivery"
            variant="solo"
          ></u-text-field>
        </u-col>

        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="www.example.com/page"
            label="Your landing page"
            variant="solo"
            persistent-hint
          ></u-text-field>
        </u-col>

        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="For example, flowers or used cars"
            label="Your product or service"
            model-value="Grocery delivery"
            variant="outlined"
          ></u-text-field>
        </u-col>

        <u-col
          cols="12"
          sm="6"
        >
          <u-text-field
            hint="www.example.com/page"
            label="Your landing page"
            variant="outlined"
            persistent-hint
          ></u-text-field>
        </u-col>
      </u-row>
    </u-container>
  </u-form>
  `;

/**
 * The hint property on text fields adds the provided string beneath the text field.
 * Using persistent-hint keeps the hint visible when the text field is not focused.
 */
export const Hint: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  template: hintTemplate,
});

Hint.parameters = {
  docs: {
    source: {
      code: `<template>${hintTemplate}</template>`,
    },
  },
};

// Icons Story
const iconsTemplate = `
    <u-form>
      <u-container>
        <u-row>
          <u-col cols="12" sm="6">
            <u-text-field label="Prepend" prepend-icon="hugeicons:map-pinpoint-02"></u-text-field>
            <u-text-field label="Prepend inner" prepend-inner-icon="hugeicons:map-pinpoint-02"></u-text-field>
            <u-text-field append-icon="hugeicons:map-pinpoint-02" label="Append"></u-text-field>
            <u-text-field append-inner-icon="hugeicons:map-pinpoint-02" label="Append inner"></u-text-field>
          </u-col>
        </u-row>
      </u-container>
    </u-form>
  `;

/**
 * You can add icons to the text field with prepend-icon, append-icon and
 * append-inner-icon props.
 */
export const Icons: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  template: iconsTemplate,
});

Icons.parameters = {
  docs: {
    source: {
      code: `<template>${iconsTemplate}</template>`,
    },
  },
};

// Prefix Suffix Story
const prefixSuffixTemplate = `
    <u-container fluid>
      <u-row>
        <u-col cols="4">
          <u-text-field label="Amount" model-value="10.00" prefix="$"></u-text-field>
        </u-col>
        <u-col cols="8">
          <u-text-field label="Weight" model-value="28.00" suffix="lbs"></u-text-field>
        </u-col>
      </u-row>
    </u-container>
  `;

/**
 * The prefix and suffix properties allows you to prepend and append inline non-modifiable
 * text next to the text field.
 */
export const PrefixSuffix: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UContainer, URow, UCol },
  template: prefixSuffixTemplate,
});

PrefixSuffix.parameters = {
  docs: {
    source: {
      code: `<template>${prefixSuffixTemplate}</template>`,
    },
  },
};

// Validation Story
const validationTemplate = `
    <u-form>
      <u-container>
        <u-row>
          <u-col
            cols="12"
            sm="6"
          >
            <u-text-field
              v-model="title"
              :rules="[rules.required, rules.counter]"
              label="Title"
              maxlength="20"
              counter
            ></u-text-field>
          </u-col>

          <u-col
            cols="12"
            sm="6"
          >
            <u-text-field
              v-model="email"
              :rules="[rules.required, rules.email]"
              label="E-mail"
            ></u-text-field>
          </u-col>
        </u-row>
      </u-container>
    </u-form>
  `;

/**
 * Ultimate Core UI includes simple validation through the rules prop. The prop accepts a
 * mixed array of types function, boolean and string. When the input value changes, each
 * element in the array will be validated. Functions pass the current v-model as an argument
 * and must return either true / false or a string containing an error message.
 */
export const Validation: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  setup() {
    const title = ref('Preliminary report');
    const email = ref('');

    type ValidationRule = (value: string) => boolean | string;

    interface ValidationRules {
      required: ValidationRule;
      counter: ValidationRule;
      email: ValidationRule;
    }

    const rules: ValidationRules = {
      required: (value: string): boolean | string => !!value || 'Required.',
      counter: (value: string): boolean | string => value.length <= 20 || 'Max 20 characters',
      email: (value: string): boolean | string => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
    };

    return { title, email, rules };
  },
  template: validationTemplate,
});

Validation.parameters = {
  docs: {
    source: {
      code: `<template>${validationTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const title = ref('Preliminary report')
  const email = ref('')

  const rules = {
    required: value => !!value || 'Required.',
    counter: value => value.length <= 20 || 'Max 20 characters',
    email: value => {
      const pattern = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      return pattern.test(value) || 'Invalid e-mail.'
    },
  }
</script>`,
    },
  },
};

// Variant Story
const variantTemplate = `
    <u-form>
      <u-container>
        <u-row>
          <u-col cols="12" md="4" sm="6">
            <u-text-field label="Regular" placeholder="Placeholder"></u-text-field>
          </u-col>
          <u-col cols="12" md="4" sm="6">
            <u-text-field label="Solo" placeholder="Placeholder" variant="solo"></u-text-field>
          </u-col>
          <u-col cols="12" md="4" sm="6">
            <u-text-field label="Filled" placeholder="Placeholder" variant="filled"></u-text-field>
          </u-col>
        </u-row>
      </u-container>
    </u-form>
  `;

/**
 * The variant prop provides an easy way to customize the style of your text field.
 * The following values are valid options: solo, filled, outlined, plain, and underlined.
 */
export const Variant: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  template: variantTemplate,
});

Variant.parameters = {
  docs: {
    source: {
      code: `<template>${variantTemplate}</template>`,
    },
  },
};

// Focused Story
const focusedTemplate = `<u-container><u-text-field v-model="msg" :focused="true" @update:focused=""></u-text-field></u-container>`;

/**
 * The focused prop that sets the initial focus state of the component. It is a model prop,
 * which handles 2 way binding with focused and @update:focused. This means its value sets
 * the initial state but will be updated internally by focus/blur events. If you want to
 * override this behavior (e.g., keep the input always focused), you can bind an empty
 * @update:focused handler.
 */
export const Focused: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UContainer },
  setup() {
    const msg = ref('Hello World!');
    return { msg };
  },
  template: focusedTemplate,
});

Focused.parameters = {
  docs: {
    source: {
      code: `<template>${focusedTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const msg = ref('Hello World!')
</script>`,
    },
  },
};

// Icon events Story
const iconEventsTemplate = `
  <u-form>
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-text-field
            v-model="message"
            :append-icon="message ? 'hugeicons:sent' : 'hugeicons:mic-02'"
            :append-inner-icon="marker ? 'hugeicons:maps-location-01' : 'hugeicons:maps-refresh'"
            :prepend-icon="icon"
            clear-icon="hugeicons:cancel-circle"
            label="Message"
            type="text"
            variant="filled"
            clearable
            @click:append="sendMessage"
            @click:append-inner="toggleMarker"
            @click:clear="clearMessage"
            @click:prepend="changeIcon"
          ></u-text-field>
        </u-col>
      </u-row>
    </u-container>
  </u-form>
`;

/**
 * click:prepend, click:append, click:append-inner, and click:clear are emitted when you
 * click on the respective icon. Note that these events will not be fired if the slot is
 * used instead.
 */
export const IconEvents: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  setup() {
    const icons = [
      'hugeicons:super-mario-toad',
      'hugeicons:star-face',
      'hugeicons:tongue-wink-right',
      'hugeicons:tired-02',
    ];

    const message = ref('Hey!');
    const marker = ref(true);
    const iconIndex = ref(0);

    const icon = computed(() => {
      return icons[iconIndex.value];
    });
    function toggleMarker() {
      marker.value = !marker.value;
    }

    function sendMessage() {
      resetIcon();
      clearMessage();
    }
    function clearMessage() {
      message.value = '';
    }
    function resetIcon() {
      iconIndex.value = 0;
    }
    function changeIcon() {
      iconIndex.value === icons.length - 1 ? (iconIndex.value = 0) : iconIndex.value++;
    }

    return { message, marker, icon, toggleMarker, sendMessage, clearMessage, changeIcon };
  },
  template: iconEventsTemplate,
});

IconEvents.parameters = {
  docs: {
    source: {
      code: `<template>${iconEventsTemplate}</template>

<script setup>
  import { computed, ref } from 'vue'

  const icons = [
    'hugeicons:super-mario-toad',
    'hugeicons:star-face',
    'hugeicons:tongue-wink-right',
    'hugeicons:tired-02',
  ]

  const message = ref('Hey!')
  const marker = ref(true)
  const iconIndex = ref(0)

  const icon = computed(() => {
    return icons[iconIndex.value]
  })
  function toggleMarker () {
    marker.value = !marker.value
  }

  function sendMessage () {
    resetIcon()
    clearMessage()
  }
  function clearMessage () {
    message.value = ''
  }
  function resetIcon () {
    iconIndex.value = 0
  }
  function changeIcon () {
    iconIndex.value === icons.length - 1
      ? iconIndex.value = 0
      : iconIndex.value++
  }
</script>`,
    },
  },
};

// Icon slots Story
const iconSlotsTemplate = `
  <u-form>
    <u-container>
      <u-row>
        <u-col cols="12">
          <u-text-field
            v-model="message"
            label="Message"
            type="text"
            variant="outlined"
            clearable
          >
            <template v-slot:prepend>
              <u-tooltip location="bottom">
                <template v-slot:activator="{ props }">
                  <u-icon v-bind="props" icon="hugeicons:help-circle"></u-icon>
                </template>

                I'm a tooltip
              </u-tooltip>
            </template>

            <template v-slot:append-inner>
              <u-fade-transition leave-absolute>
                <u-progress-circular
                  v-if="loading"
                  color="info"
                  size="24"
                  indeterminate
                ></u-progress-circular>
              </u-fade-transition>
            </template>

            <template v-slot:append>
              <u-menu>
                <template v-slot:activator="{ props }">
                  <u-btn v-bind="props" class="mt-n2">
                    <u-icon icon="hugeicons:menu-02" start></u-icon>

                    Menu
                  </u-btn>
                </template>

                <u-card>
                  <u-card-text class="pa-6">
                    <u-btn
                      color="primary"
                      size="large"
                      variant="text"
                      @click="clickMe"
                    >
                      <u-icon icon="hugeicons:target-02" start></u-icon>

                      Click me
                    </u-btn>
                  </u-card-text>
                </u-card>
              </u-menu>
            </template>
          </u-text-field>
        </u-col>
      </u-row>
    </u-container>
  </u-form>
`;

/**
 * Instead of using prepend/append/append-inner icons you can use slots to extend input’s
 * functionality.
 */
export const IconSlots: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UContainer },
  setup() {
    const message = ref('Hey!');
    const loading = ref(false);

    function clickMe() {
      loading.value = true;
      message.value = 'Wait for it...';
      setTimeout(() => {
        loading.value = false;
        message.value = `You've clicked me!`;
      }, 2000);
    }
    return { message, loading, clickMe };
  },
  template: iconSlotsTemplate,
});

IconSlots.parameters = {
  docs: {
    source: {
      code: `<template>${iconSlotsTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const message = ref('Hey!')
  const loading = ref(false)

  function clickMe () {
    loading.value = true
    message.value = 'Wait for it...'
    setTimeout(() => {
      loading.value = false
      message.value = \`You've clicked me!\`
    }, 2000)
  }
</script>`,
    },
  },
};

// Label Story
const labelTemplate = `
  <u-form>
    <u-container>
      <u-text-field variant="solo">
        <template v-slot:label>
          <span>
            What about an <strong>icon</strong> here? <u-icon icon="hugeicons:file-01"></u-icon>
          </span>
        </template>
      </u-text-field>
    </u-container>
  </u-form>
`;

/**
 * Text field label can be defined in label slot - that will allow to use HTML content
 */
export const Label: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UContainer },
  template: labelTemplate,
});

Label.parameters = {
  docs: {
    source: {
      code: `<template>${labelTemplate}</template>`,
    },
  },
};

// Progress Story
const progressTemplate = `
  <u-container fluid>
    <u-checkbox-btn
      v-model="custom"
      label="Loading"
    ></u-checkbox-btn>

    <u-text-field
      v-model="value"
      label="Type characters to change the loader color"
      placeholder="Start typing..."
      loading
    >
      <template v-slot:loader>
        <u-progress-linear
          :active="custom"
          :color="color"
          :model-value="progress"
          height="7"
          indeterminate
        ></u-progress-linear>
      </template>
    </u-text-field>
  </u-container>
`;

/**
 * You can display a progress bar instead of the bottom line. You can use the default
 * indeterminate progress having same color as the text field or designate a custom one
 * using the progress slot
 */
export const Progress: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UContainer, UCheckboxBtn, UProgressLinear },
  setup() {
    const value = ref('');
    const custom = ref(false);
    const progress = computed(() => {
      return Math.min(100, value.value.length * 10);
    });
    const color = computed(() => {
      return ['error', 'warning', 'success'][Math.floor(progress.value / 40)];
    });

    return { value, custom, progress, color };
  },
  template: progressTemplate,
});

Progress.parameters = {
  docs: {
    source: {
      code: `<template>${progressTemplate}</template>

<script setup>
  import { computed, ref } from 'vue'

  const value = ref('')
  const custom = ref(false)
  const progress = computed(() => {
    return Math.min(100, value.value.length * 10)
  })
  const color = computed(() => {
    return ['error', 'warning', 'success'][Math.floor(progress.value / 40)]
  })
</script>`,
    },
  },
};

// Login Form Story
const loginFormTemplate = `
  <div>
    <u-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>

      <u-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="hugeicons:mail-01"
        variant="outlined"
      ></u-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <u-text-field
        :append-inner-icon="visible ? 'hugeicons:view' : 'hugeicons:view-off-slash'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="hugeicons:circle-lock-02"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></u-text-field>

      <u-card
        class="mb-12"
        color="surface-variant"
        variant="tonal"
      >
        <u-card-text class="text-medium-emphasis text-caption">
          Warning: After 3 consecutive failed login attempts, you account will be temporarily locked for three hours. If you must login now, you can also click "Forgot login password?" below to reset the login password.
        </u-card-text>
      </u-card>

      <u-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
      >
        Log In
      </u-btn>

      <u-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sign up now <u-icon icon="hugeicons:arrow-right-01"></u-icon>
        </a>
      </u-card-text>
    </u-card>
  </div>
`;

/**
 * In this example we use a combination of prepend and append icon to create a custom
 * login form.
 */
export const LoginForm: StoryFn<ComponentArgs> = () => ({
  components: { UTextField, UCard, UCardText, UBtn, UImg, UIcon },
  setup() {
    const visible = ref(false);

    return { visible };
  },
  template: loginFormTemplate,
});

LoginForm.parameters = {
  docs: {
    source: {
      code: `<template>${loginFormTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>`,
    },
  },
};
