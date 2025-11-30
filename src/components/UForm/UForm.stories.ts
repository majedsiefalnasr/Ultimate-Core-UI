import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UCheckbox, UCol, UContainer, URow, USelect, USheet, UTextField } from '../index';

import { UForm } from './index';

interface ComponentArgs {
  disabled?: boolean;
  fastFail?: boolean;
  modelValue?: boolean;
  readonly?: boolean;
  validateOn?:
    | 'eager'
    | 'lazy'
    | 'blur'
    | 'input'
    | 'submit'
    | 'invalid-input'
    | 'blur lazy'
    | 'input lazy'
    | 'submit lazy'
    | 'invalid-input lazy'
    | 'blur eager'
    | 'input eager'
    | 'submit eager'
    | 'invalid-input eager'
    | 'lazy blur'
    | 'lazy input'
    | 'lazy submit'
    | 'lazy invalid-input'
    | 'eager blur'
    | 'eager input'
    | 'eager submit'
    | 'eager invalid-input';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Forms',
  component: UForm,
  parameters: {
    docs: {
      description: {
        component:
          'Ultimate Core UI offers a simple built-in form validation system based on functions as rules, making it easy for developers to get set up quickly. The u-form component makes it easy to add validation to form inputs.',
      },
      import: `import { UForm } from '@ultimate/core-ui/components'`,
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

          return `<template>
    <u-form${attrsString} v-model="valid">
      <u-container>
        <u-row>
          <u-col cols="12" md="4">
            <u-text-field
              v-model="firstname"
              :counter="10"
              :rules="nameRules"
              label="First name"
              required
            ></u-text-field>
          </u-col>

          <u-col cols="12" md="4">
            <u-text-field
              v-model="lastname"
              :counter="10"
              :rules="nameRules"
              label="Last name"
              required
            ></u-text-field>
          </u-col>

          <u-col cols="12" md="4">
            <u-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></u-text-field>
          </u-col>
        </u-row>
      </u-container>
    </u-form>
  </template>
  <script setup>
    import { ref } from 'vue'

    const valid = ref(false)
    const firstname = ref('')
    const lastname = ref('')
    const nameRules = [
      value => {
        if (value) return true
        return 'Name is required.'
      },
      value => {
        if (value?.length <= 10) return true
        return 'Name must be less than 10 characters.'
      },
    ]
    const email = ref('')
    const emailRules = [
      value => {
        if (value) return true
        return 'E-mail is required.'
      },
      value => {
        if (/.+@.+\\..+/.test(value)) return true
        return 'E-mail must be valid.'
      },
    ]
  </script>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VForm',
      content:
        'The u-form component makes it easy to add validation to form inputs. All input components have a rules prop that can be used to specify conditions in which the input is either valid or invalid.',
      link: 'https://vuetifyjs.com/en/components/forms/',
    },
    Primary: {
      description:
        'The u-form component makes it easy to add validation to form inputs. All input components have a rules prop that can be used to specify conditions in which the input is either valid or invalid.',
    },
    api: {
      data: [
        {
          element: { title: 'v-form', link: 'https://vuetifyjs.com/en/api/v-form/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Puts all children inputs into a disabled state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fastFail: {
      control: 'boolean',
      description: 'Stop validation as soon as any rules fail.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The value representing the validity of the form. If null, no validation has taken place yet.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts all children inputs into a readonly state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    validateOn: {
      control: 'select',
      options: [
        'eager',
        'lazy',
        'blur',
        'input',
        'submit',
        'invalid-input',
        'blur lazy',
        'input lazy',
        'submit lazy',
        'invalid-input lazy',
      ],
      description: 'Changes the events in which validation occurs.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'input'" },
      },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UForm, UContainer, URow, UCol, UTextField },
  setup() {
    const valid = ref(false);
    const firstname = ref('');
    const lastname = ref('');
    const email = ref('');

    const nameRules = [
      (value: string) => {
        if (value) return true;
        return 'Name is required.';
      },
      (value: string) => {
        if (value?.length <= 10) return true;
        return 'Name must be less than 10 characters.';
      },
    ];

    const emailRules = [
      (value: string) => {
        if (value) return true;
        return 'E-mail is required.';
      },
      (value: string) => {
        if (/.+@.+\..+/.test(value)) return true;
        return 'E-mail must be valid.';
      },
    ];

    return { args, valid, firstname, lastname, email, nameRules, emailRules };
  },
  template: `
  <u-form v-model="valid" v-bind="args">
    <u-container>
      <u-row>
        <u-col cols="12" md="4">
          <u-text-field
            v-model="firstname"
            :counter="10"
            :rules="nameRules"
            label="First name"
            required
          ></u-text-field>
        </u-col>

        <u-col cols="12" md="4">
          <u-text-field
            v-model="lastname"
            :counter="10"
            :rules="nameRules"
            label="Last name"
            required
          ></u-text-field>
        </u-col>

        <u-col cols="12" md="4">
          <u-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></u-text-field>
        </u-col>
      </u-row>
    </u-container>
  </u-form>
`,
});

Default.args = {} as ComponentArgs;

// Rules Story
const rulesTemplate = `
  <u-sheet class="mx-auto" width="300">
    <u-form @submit.prevent>
      <u-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></u-text-field>
      <u-btn class="mt-2" type="submit" block>Submit</u-btn>
    </u-form>
  </u-sheet>
`;

/**
 * Rules allow you to apply custom validation on all form components. These are validated
 * sequentially, and components display a maximum of 1 error at a time.
 */
export const Rules: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UForm, UTextField, UBtn },
  setup() {
    const firstName = ref('');
    const rules = [
      (value: string) => {
        if (value) return true;
        return 'You must enter a first name.';
      },
    ];

    return { firstName, rules };
  },
  template: rulesTemplate,
});

Rules.parameters = {
  docs: {
    source: {
      code: `<template>${rulesTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')

  const rules = [
    value => {
      if (value) return true
      return 'You must enter a first name.'
    },
  ]
</script>`,
    },
  },
};

// Async Validation Story
const asyncValidationTemplate = `
  <u-sheet class="mx-auto" max-width="300">
    <u-form validate-on="submit lazy" @submit.prevent="submit">
      <u-text-field
        v-model="userName"
        :rules="rules"
        label="User name"
      ></u-text-field>

      <u-btn
        :loading="loading"
        class="mt-2"
        text="Submit"
        type="submit"
        block
      ></u-btn>
    </u-form>
  </u-sheet>
`;

/**
 * You can make rules as complicated as needed, even allowing for asynchronous input validation.
 * This demonstrates the validate-on prop set to "submit lazy".
 */
export const AsyncValidation: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UForm, UTextField, UBtn },
  setup() {
    const userName = ref('');
    const loading = ref(false);

    let timeout: ReturnType<typeof setTimeout> | undefined;
    async function checkApi(userName: string) {
      return new Promise((resolve) => {
        if (timeout) clearTimeout(timeout);

        timeout = setTimeout(() => {
          if (!userName) return resolve('Please enter a user name.');
          if (userName === 'johnleider')
            return resolve('User name already taken. Please try another one.');
          return resolve(true);
        }, 1000);
      });
    }

    const rules = [(value: string) => checkApi(value)];

    async function submit(event: any) {
      loading.value = true;
      const results = await event;
      loading.value = false;
      alert(JSON.stringify(results, null, 2));
    }

    return { userName, loading, rules, submit };
  },
  template: asyncValidationTemplate,
});

AsyncValidation.parameters = {
  docs: {
    source: {
      code: `<template>${asyncValidationTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const rules = [value => checkApi(value)]

  const loading = ref(false)
  const userName = ref('')

  async function submit (event) {
    loading.value = true
    const results = await event
    loading.value = false
    alert(JSON.stringify(results, null, 2))
  }

  let timeout = -1
  async function checkApi (userName) {
    return new Promise(resolve => {
      clearTimeout(timeout)

      timeout = setTimeout(() => {
        if (!userName) return resolve('Please enter a user name.')
        if (userName === 'johnleider') return resolve('User name already taken. Please try another one.')
        return resolve(true)
      }, 1000)
    })
  }
</script>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `
  <u-sheet class="mx-auto" width="300">
    <u-checkbox v-model="isEnabled" label="Form is enabled"></u-checkbox>
    <u-form :disabled="!isEnabled">
      <u-text-field v-model="firstName" label="First name"></u-text-field>
      <u-text-field v-model="lastName" label="Last name"></u-text-field>
      <u-checkbox v-model="isAdmin" label="User is admin"></u-checkbox>
      <u-select
        v-model="role"
        :disabled="isAdmin || undefined"
        :items="['VIEWER', 'EDITOR']"
        hint="I'm enabled only if the user is not an admin"
        persistent-hint
      ></u-select>
    </u-form>
  </u-sheet>
`;

/**
 * You can easily disable all input components in a u-form by setting the disabled prop.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UForm, UCheckbox, UTextField, USelect },
  setup() {
    const isEnabled = ref(true);
    const firstName = ref('');
    const lastName = ref('');
    const isAdmin = ref(false);
    const role = ref();

    return { isEnabled, firstName, lastName, isAdmin, role };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>${disabledTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const isEnabled = ref(true)
  const firstName = ref('')
  const lastName = ref('')
  const isAdmin = ref(false)
  const role = ref()
</script>`,
    },
  },
};

// Fast Fail Story
const fastFailTemplate = `
  <u-sheet class="mx-auto" width="300">
    <u-form fast-fail @submit.prevent>
      <u-text-field
        v-model="firstName"
        :rules="firstNameRules"
        label="First name"
      ></u-text-field>

      <u-text-field
        v-model="lastName"
        :rules="lastNameRules"
        label="Last name"
      ></u-text-field>

      <u-btn class="mt-2" type="submit" block>Submit</u-btn>
    </u-form>
  </u-sheet>
`;

/**
 * When the fast-fail prop is set, validation will short-circuit after the first invalid input
 * is found. Notice how the second input does not show validation errors even though it does
 * not satisfy the rules.
 */
export const FastFail: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UForm, UTextField, UBtn },
  setup() {
    const firstName = ref('');
    const firstNameRules = [
      (value: string) => {
        if (value?.length >= 3) return true;
        return 'First name must be at least 3 characters.';
      },
    ];

    const lastName = ref('123');
    const lastNameRules = [
      (value: string) => {
        if (/[^0-9]/.test(value)) return true;
        return 'Last name can not contain digits.';
      },
    ];

    return { firstName, firstNameRules, lastName, lastNameRules };
  },
  template: fastFailTemplate,
});

FastFail.parameters = {
  docs: {
    source: {
      code: `<template>${fastFailTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const firstName = ref('')
  const firstNameRules = [
    value => {
      if (value?.length >= 3) return true
      return 'First name must be at least 3 characters.'
    },
  ]

  const lastName = ref('123')
  const lastNameRules = [
    value => {
      if (/[^0-9]/.test(value)) return true
      return 'Last name can not contain digits.'
    },
  ]
</script>`,
    },
  },
};

// Exposed Properties Story
const exposedPropertiesTemplate = `
  <u-sheet class="mx-auto" width="300">
    <u-form ref="form">
      <u-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></u-text-field>

      <u-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></u-select>

      <u-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'You must agree to continue!']"
        label="Do you agree?"
        required
      ></u-checkbox>

      <div class="d-flex flex-column">
        <u-btn
          class="mt-4"
          color="success"
          block
          @click="validate"
        >
          Validate
        </u-btn>

        <u-btn
          class="mt-4"
          color="error"
          block
          @click="reset"
        >
          Reset Form
        </u-btn>

        <u-btn
          class="mt-4"
          color="warning"
          block
          @click="resetValidation"
        >
          Reset Validation
        </u-btn>
      </div>
    </u-form>
  </u-sheet>
`;

/**
 * The u-form component has exposed properties that can be accessed by setting a ref. This
 * includes validate(), reset(), and resetValidation() methods.
 */
export const ExposedProperties: StoryFn<ComponentArgs> = () => ({
  components: { USheet, UForm, UTextField, USelect, UCheckbox, UBtn },
  setup() {
    const form = ref();
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

    const name = ref('');
    const nameRules = [
      (v: string) => !!v || 'Name is required',
      (v: string) => (v && v.length <= 10) || 'Name must be 10 characters or less',
    ];
    const select = ref(null);
    const checkbox = ref(false);

    async function validate() {
      const { valid } = await form.value.validate();
      if (valid) alert('Form is valid');
    }
    function reset() {
      form.value.reset();
    }
    function resetValidation() {
      form.value.resetValidation();
    }

    return {
      form,
      items,
      name,
      nameRules,
      select,
      checkbox,
      validate,
      reset,
      resetValidation,
    };
  },
  template: exposedPropertiesTemplate,
});

ExposedProperties.parameters = {
  docs: {
    source: {
      code: `<template>${exposedPropertiesTemplate}</template>

<script setup>
  import { ref } from 'vue'

  const form = ref()
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
  const name = ref('')
  const nameRules = [
    v => !!v || 'Name is required',
    v => (v && v.length <= 10) || 'Name must be 10 characters or less',
  ]
  const select = ref(null)
  const checkbox = ref(false)

  async function validate () {
    const { valid } = await form.value.validate()
    if (valid) alert('Form is valid')
  }
  function reset () {
    form.value.reset()
  }
  function resetValidation () {
    form.value.resetValidation()
  }
</script>`,
    },
  },
};
