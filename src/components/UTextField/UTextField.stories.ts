import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UCard, UCol, UContainer, UForm, UResponsive, URow, UTextField } from '../index';

interface ComponentArgs {
  label?: string;
  placeholder?: string;
  hint?: string;
  modelValue?: any;
  hideDetails?: boolean | 'auto';
  clearable?: boolean;
  clearIcon?: any;
  counter?: boolean | number;
  variant?: string;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  readonly?: boolean;
  prependIcon?: any;
  appendIcon?: any;
  appendInnerIcon?: any;
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
  },
  argTypes: {
    modelValue: {
      control: 'text',
      description: 'The v-model value of the component.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
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
  } as any,
};

export default meta;

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

export const Labeling: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UResponsive },
  setup() {
    return { args };
  },
  template: `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hide-details="auto" label="First name"></u-text-field>
    </u-responsive>
  `,
});

Labeling.args = {} as ComponentArgs;

Labeling.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-responsive class="mx-auto" max-width="344">
    <u-text-field hide-details="auto" label="First name"></u-text-field>
  </u-responsive>
</template>`,
    },
  },
};

export const Placeholders: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UResponsive },
  setup() {
    return { args };
  },
  template: `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hide-details="auto" label="Email address" placeholder="johndoe@gmail.com" type="email"></u-text-field>
    </u-responsive>
  `,
});

Placeholders.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-responsive class="mx-auto" max-width="344">
    <u-text-field hide-details="auto" label="Email address" placeholder="johndoe@gmail.com" type="email"></u-text-field>
  </u-responsive>
</template>`,
    },
  },
};

export const HintsMessages: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UResponsive },
  setup() {
    return { args };
  },
  template: `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field hint="Enter your password to access this website" label="Password" type="password"></u-text-field>
    </u-responsive>
  `,
});

HintsMessages.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-responsive class="mx-auto" max-width="344">
    <u-text-field hint="Enter your password to access this website" label="Password" type="password"></u-text-field>
  </u-responsive>
</template>`,
    },
  },
};

export const Clearable: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UResponsive },
  setup() {
    const model = ref('Leider');
    return { args, model };
  },
  template: `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field v-model="model" hide-details="auto" label="Last name" clearable></u-text-field>
    </u-responsive>
  `,
});

Clearable.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-responsive class="mx-auto" max-width="344">
    <u-text-field v-model="model" hide-details="auto" label="Last name" clearable></u-text-field>
  </u-responsive>
</template>
<script setup>
import { ref } from 'vue'
const model = ref('Leider')
</script>`,
    },
  },
};

export const ValidationRules: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UResponsive },
  setup() {
    const rules = { required: (v: any) => !!v || 'Field is required' };
    return { args, rules };
  },
  template: `
    <u-responsive class="mx-auto" max-width="344">
      <u-text-field :rules="[rules.required]" label="Last name" clearable></u-text-field>
    </u-responsive>
  `,
});

ValidationRules.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-responsive class="mx-auto" max-width="344">
    <u-text-field :rules="[rules.required]" label="Last name" clearable></u-text-field>
  </u-responsive>
</template>
<script setup>
const rules = { required: value => !!value || 'Field is required' }
</script>`,
    },
  },
};

export const Forms: StoryFn<ComponentArgs> = (args) => ({
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
    function required(v: any) {
      return !!v || 'Field is required';
    }
    return { args, form, email, password, loading, onSubmit, required };
  },
  template: `
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
  `,
});

Forms.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>`,
    },
  },
};

export const Density: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UCard },
  setup() {
    return { args };
  },
  template: `
    <u-card class="mx-auto" color="surface-light" max-width="400">
      <u-text-field :loading="false" append-inner-icon="hugeicons:magnify-24" density="compact" label="Search templates" variant="solo" hide-details single-line @click:append-inner=""></u-text-field>
    </u-card>
  `,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card class="mx-auto" color="surface-light" max-width="400">
    <u-text-field :loading="false" append-inner-icon="hugeicons:magnify-24" density="compact" label="Search templates" variant="solo" hide-details single-line @click:append-inner=""></u-text-field>
  </u-card>
</template>`,
    },
  },
};

export const DisabledReadonly: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

DisabledReadonly.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>`,
    },
  },
};

export const Icons: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Icons.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>`,
    },
  },
};

export const PrefixSuffix: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

PrefixSuffix.parameters = {
  docs: {
    source: {
      code: `<template>
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
</template>`,
    },
  },
};

export const Variant: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UForm, UContainer, URow, UCol },
  setup() {
    return { args };
  },
  template: `
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
  `,
});

Variant.parameters = {
  docs: {
    source: {
      code: `<template>
  <!-- variant examples (trimmed) -->
</template>`,
    },
  },
};

export const Focused: StoryFn<ComponentArgs> = (args) => ({
  components: { UTextField, UContainer },
  setup() {
    const msg = ref('Hello World!');
    return { args, msg };
  },
  template: `<u-container><u-text-field v-model="msg" :focused="true" @update:focused=""></u-text-field></u-container>`,
});

Focused.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <u-text-field v-model="msg" :focused="true" @update:focused=""></u-text-field>
  </u-container>
</template>
<script setup>
import { ref } from 'vue'
const msg = ref('Hello World!')
</script>`,
    },
  },
};
