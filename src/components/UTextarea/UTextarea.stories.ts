import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UBtn,
  UCard,
  UCheckbox,
  UCol,
  UContainer,
  UDivider,
  UForm,
  URow,
  UTextarea,
  UTextField,
  UToolbar,
} from '../index';

interface ComponentArgs {
  label?: string;
  modelValue?: any;
  autoGrow?: boolean;
  bgColor?: string;
  color?: string;
  autocomplete?: string;
  clearable?: boolean;
  clearIcon?: any;
  counter?: boolean | number;
  prependIcon?: any;
  appendIcon?: any;
  noResize?: boolean;
  rows?: number | string;
  name?: string;
  placeholder?: string;
  variant?: string;
  disabled?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Textareas',
  component: UTextarea,
  parameters: {
    docs: {
      description: {
        component:
          'Textarea components are used for collecting large amounts of textual data. `u-textarea` is a multi-line text-field useful for larger amounts of text.',
      },
      import: `import { UTextarea } from '@ultimate/core-ui/components'`,
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

          return `<u-textarea${attrsString}></u-textarea>`;
        },
      },
    },
    Vuetify: {
      component: 'VTextarea',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/textareas/',
    },
    Primary: {
      description: 'This is the usage description placeholder.',
    },
    anatomy: {
      title: 'Anatomy',
      description: 'This is the anatomy description placeholder.',
      Image: '/images/stories/UTextarea.anatomy.png',
      data: [
        {
          element: '1. Point One',
          description: 'Point one description placeholder.',
        },
      ],
    },
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The v-model value of the component.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    label: {
      control: 'text',
      description: 'Sets the text of the label component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    autoGrow: {
      control: 'boolean',
      description: 'Automatically grow the textarea depending on amount of text.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    bgColor: {
      control: 'text',
      description: 'Applies specified color to the control’s background.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    color: {
      control: 'text',
      description: 'Applies specified color to the control.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    autocomplete: {
      control: 'text',
      description: 'Influences the browser autocomplete behaviour.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    clearable: {
      control: 'boolean',
      description: 'Allows for the component to be cleared.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    clearIcon: {
      control: 'text',
      description: 'Icon used when the clearable prop is set to true.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'hugeicons:close-circle-24'" },
      },
    },
    counter: {
      control: 'boolean',
      description: 'Displays a character counter for the input.',
      table: { type: { summary: 'string | number | true' }, defaultValue: { summary: 'false' } },
    },
    prependIcon: {
      control: 'text',
      description: 'Prepends an icon to the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    appendIcon: {
      control: 'text',
      description: 'Appends an icon to the component.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    noResize: {
      control: 'boolean',
      description: 'Removes the resize handle.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    rows: {
      control: 'number',
      description: 'Default row count for the textarea.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '5' } },
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
      description: 'Visual variant for the textarea.',
      table: {
        type: {
          summary:
            "'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled'",
        },
        defaultValue: { summary: "'filled'" },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea },
  setup() {
    return { args };
  },
  template: '<u-textarea v-bind="args"></u-textarea>',
});

Default.args = {} as ComponentArgs;

export const AutoGrow: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args };
  },
  template: `
    <u-container fluid>
      <u-textarea
        label="Label"
        v-model="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        name="input-7-1"
        variant="filled"
        auto-grow
      ></u-textarea>
    </u-container>
  `,
});

AutoGrow.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-textarea
      label="Label"
      model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      name="input-7-1"
      variant="filled"
      auto-grow
    ></u-textarea>
  </u-container>
</template>`,
    },
  },
};

export const BackgroundColor: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-textarea bg-color="light-blue" color="black" label="Label"></u-textarea>
      <u-textarea bg-color="grey-lighten-2" color="cyan" label="Label"></u-textarea>
      <u-textarea bg-color="amber-lighten-4" color="orange orange-darken-4" label="Label"></u-textarea>
    </u-container>
  `,
});

BackgroundColor.args = {} as ComponentArgs;

BackgroundColor.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-textarea bg-color="light-blue" color="black" label="Label"></u-textarea>
    <u-textarea bg-color="grey-lighten-2" color="cyan" label="Label"></u-textarea>
    <u-textarea bg-color="amber-lighten-4" color="orange orange-darken-4" label="Label"></u-textarea>
  </u-container>
</template>`,
    },
  },
};

export const BrowserAutocomplete: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args };
  },
  template: `
    <u-container fluid>
      <u-textarea autocomplete="email" label="Email"></u-textarea>
    </u-container>
  `,
});

BrowserAutocomplete.args = {} as ComponentArgs;

BrowserAutocomplete.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-textarea autocomplete="email" label="Email"></u-textarea>
  </u-container>
</template>`,
    },
  },
};

export const Clearable: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args };
  },
  template: `
    <u-container fluid>
      <u-textarea label="Text" model-value="This is clearable text." clearable></u-textarea>
    </u-container>
  `,
});

Clearable.args = {} as ComponentArgs;

Clearable.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-textarea label="Text" model-value="This is clearable text." clearable></u-textarea>
  </u-container>
</template>`,
    },
  },
};

export const Counter: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args, rules: [(v: string) => (v || '').length <= 25 || 'Max 25 characters'] };
  },
  template: `
    <u-container fluid>
      <u-textarea :model-value="args.modelValue" :rules="rules" label="Text" counter></u-textarea>
    </u-container>
  `,
});

Counter.args = { modelValue: 'Hello!' } as ComponentArgs;

Counter.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-textarea :model-value="value" :rules="rules" label="Text" counter></u-textarea>
  </u-container>
</template>
<script setup>
import { ref } from 'vue'

const rules = [v => (v || '').length <= 25 || 'Max 25 characters']

const value = ref('Hello!')
</script>`,
    },
  },
};

export const Icons: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
    <u-container>
      <u-row>
        <u-col cols="12" sm="6">
          <u-textarea class="mx-2" label="prepend-icon" prepend-icon="hugeicons:comment-01" rows="1"></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea append-icon="hugeicons:comment-01" class="mx-2" label="append-icon" rows="1"></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea class="mx-2" label="prepend-inner-icon" prepend-inner-icon="hugeicons:comment-01" rows="1"></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea append-inner-icon="hugeicons:comment-01" class="mx-2" label="append-inner-icon" rows="1"></u-textarea>
        </u-col>
      </u-row>
    </u-container>
  `,
});

Icons.args = {} as ComponentArgs;

Icons.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-row>
      <u-col cols="12" sm="6">
        <u-textarea class="mx-2" label="prepend-icon" prepend-icon="hugeicons:comment-01" rows="1"></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea append-icon="hugeicons:comment-01" class="mx-2" label="append-icon" rows="1"></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea class="mx-2" label="prepend-inner-icon" prepend-inner-icon="hugeicons:comment-01" rows="1"></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea append-inner-icon="hugeicons:comment-01" class="mx-2" label="append-inner-icon" rows="1"></u-textarea>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const NoResize: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer },
  setup() {
    return { args, value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' };
  },
  template: `
    <u-container fluid>
      <u-textarea :model-value="value" label="Text" rows="1" no-resize></u-textarea>
    </u-container>
  `,
});

NoResize.args = {} as ComponentArgs;

NoResize.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-textarea :model-value="value" label="Text" rows="1" no-resize></u-textarea>
  </u-container>
</template>
<script setup>
import { ref } from 'vue'

const value = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit...')
</script>`,
    },
  },
};

export const Rows: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextarea, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
    <u-container fluid>
      <u-row>
        <u-col cols="12" sm="6">
          <u-textarea label="One row" row-height="15" rows="1" variant="outlined" auto-grow></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea label="Two rows" row-height="20" rows="2" variant="filled" auto-grow></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea label="Three rows" row-height="25" rows="3" variant="outlined" auto-grow></u-textarea>
        </u-col>
        <u-col cols="12" sm="6">
          <u-textarea label="Four rows" row-height="30" rows="4" variant="filled" auto-grow></u-textarea>
        </u-col>
      </u-row>
    </u-container>
  `,
});

Rows.args = {} as ComponentArgs;
Rows.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container fluid>
    <u-row>
      <u-col cols="12" sm="6">
        <u-textarea label="One row" row-height="15" rows="1" variant="outlined" auto-grow></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea label="Two rows" row-height="20" rows="2" variant="filled" auto-grow></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea label="Three rows" row-height="25" rows="3" variant="outlined" auto-grow></u-textarea>
      </u-col>
      <u-col cols="12" sm="6">
        <u-textarea label="Four rows" row-height="30" rows="4" variant="filled" auto-grow></u-textarea>
      </u-col>
    </u-row>
  </u-container>
</template>`,
    },
  },
};

export const SignupForm: StoryFn<ComponentArgs> = (args) => ({
  components: { UCard, UToolbar, UBtn, UForm, UTextField, UTextarea, UCheckbox, UDivider },
  setup() {
    const isValid = ref(false);
    const agreement = ref(false);
    const bio = ref('Far far away, behind the word mountains...');
    const dialog = ref(false);
    const email = ref(undefined);
    const isLoading = ref(false);
    const password = ref(undefined);
    const phone = ref(undefined);
    const rules = {
      email: (v: string) => !!(v || '').match(/@/) || 'Please enter a valid email',
      length: (len: number) => (v: string) =>
        (v || '').length >= len || `Invalid character length, required ${len}`,
      password: (v: string) =>
        !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: (v: any) => !!v || 'This field is required',
    };

    const form = ref();

    return {
      args,
      isValid,
      agreement,
      bio,
      dialog,
      email,
      isLoading,
      password,
      phone,
      rules,
      form,
    };
  },
  template: `
    <u-card class="mx-auto" style="max-width: 500px;">
      <u-toolbar color="deep-purple-accent-4" cards dark flat>
        <u-btn icon>
          <u-icon>hugeicons:arrow-left-24</u-icon>
        </u-btn>
        <u-card-title class="text-h6 font-weight-regular">Sign up</u-card-title>
        <u-spacer />
        <u-btn icon>
          <u-icon>hugeicons:magnify-24</u-icon>
        </u-btn>
        <u-btn icon>
          <u-icon>hugeicons:dots-vertical-24</u-icon>
        </u-btn>
      </u-toolbar>
      <u-form ref="form" v-model="isValid" class="pa-4 pt-6">
        <u-text-field v-model="password" :rules="[rules.password, rules.length(6)]" color="deep-purple" counter="6" label="Password" style="min-height: 96px" type="password" variant="filled"></u-text-field>
        <u-text-field v-model="phone" color="deep-purple" label="Phone number" variant="filled"></u-text-field>
        <u-text-field v-model="email" :rules="[rules.email]" color="deep-purple" label="Email address" type="email" variant="filled"></u-text-field>
        <u-textarea v-model="bio" color="deep-purple" label="Bio" rows="1" variant="filled" auto-grow></u-textarea>
        <u-checkbox v-model="agreement" :rules="[rules.required]">
          <template v-slot:label>
            I agree to the&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Terms of Service</a>
            &nbsp;and&nbsp;
            <a href="#" @click.stop.prevent="dialog = true">Privacy Policy</a>*
          </template>
        </u-checkbox>
      </u-form>
      <u-divider />
      <u-card-actions>
        <u-btn variant="text" @click="form.reset()">Clear</u-btn>
        <u-spacer />
        <u-btn :disabled="!isValid" :loading="isLoading" color="deep-purple-accent-4">Submit</u-btn>
      </u-card-actions>
      <u-dialog v-model="dialog" max-width="400" persistent>
        <u-card>
          <u-card-title class="text-h5 text-center mt-5">Legal</u-card-title>
          <u-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </u-card-text>
          <u-divider />
          <u-card-actions>
            <u-btn variant="text" @click="agreement = false, dialog = false">No</u-btn>
            <u-spacer />
            <u-btn color="deep-purple" variant="tonal" @click="agreement = true, dialog = false">Yes</u-btn>
          </u-card-actions>
        </u-card>
      </u-dialog>
    </u-card>
  `,
});

SignupForm.args = {} as ComponentArgs;
SignupForm.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" style="max-width: 500px;">
    <!-- toolbar and form markup here (trimmed for brevity) -->
  </u-card>
</template>`,
    },
  },
};
