// import UBtn from './UBtn.vue'
import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';

import UBtn from './index';

interface ComponentArgs {
  density?: 'default' | 'comfortable' | 'compact';
  size?: 'x-small' | 'small' | 'default' | 'large' | 'x-large';
  block?: boolean;
  rounded?: string | number | boolean;
  elevation?: number;
  ripple?: boolean;
  variant?: 'elevated' | 'flat' | 'tonal' | 'outlined' | 'text' | 'plain';
  icon?: string;
  loading?: boolean;
  spaced?: 'start' | 'end' | 'both';
  color?: string;
  disabled?: boolean;
  label?: string;
}

const meta: Meta<ComponentArgs> = {
  title: 'Core/Button',
  component: UBtn,
  parameters: {
    docs: {
      description: {
        component:
          'The UBtn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.',
      },
    },
  },
  argTypes: {
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Density (default | comfortable | compact)',
      table: { defaultValue: { summary: 'default' } },
    },
    size: {
      control: { type: 'select' },
      options: ['x-small', 'small', 'default', 'large', 'x-large'],
      description: 'Size: x-small | small | default | large | x-large',
      table: { defaultValue: { summary: 'default' } },
    },
    block: {
      control: 'boolean',
      description: 'Full width',
      table: { defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'text',
      description: 'This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped.',
      table: { defaultValue: { summary: 'rounded' } },
    },
    elevation: {
      control: 'number',
      description: 'Elevation (box-shadow). Number from 0 to 24.',
      table: { defaultValue: { summary: '2' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Ripple effect',
      table: { defaultValue: { summary: 'true' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['elevated', 'flat', 'tonal', 'outlined', 'text', 'plain'],
      description: 'Visual variant (elevated | flat | tonal | outlined | text | plain)',
      table: { defaultValue: { summary: 'elevated' } },
    },
    icon: {
      control: 'text',
      description: 'Icon name (Material Design Icons)',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { defaultValue: { summary: 'false' } },
    },
    spaced: {
      control: { type: 'select' },
      options: ['start', 'end', 'both'],
      description: 'Adds space when using icon with label',
    },
    color: {
      control: 'color',
      description: 'Theme color or CSS color',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: { defaultValue: { summary: 'false' } },
    },
    label: { control: 'text', description: 'Default slot text (used by the Default story)' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UBtn },
  setup() {
    return { args };
  },
  template: '<UBtn v-bind="args">{{ args.label || "Button" }}</UBtn>',
});

Default.args = {
  color: 'primary',
  label: 'Primary',
} as ComponentArgs;

export const Variants = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UBtn color="primary" variant="elevated">Elevated Button (Default)</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn color="primary" variant="flat">Flat Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn color="primary" variant="tonal">Tonal Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn color="primary" variant="outlined">Outlined Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn color="primary" variant="text">Text Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn color="primary" variant="plain">Plain Button</UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Density = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UBtn density="compact">Compact Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn density="comfortable">Comfortable Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn density="default">Default Button</UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Sizes = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UBtn size="x-small">Extra small Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn size="small">Small Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn>Regular Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn size="large">Large Button</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn size="x-large">X-Large Button</UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Block = () => ({
  components: { UBtn },
  template: `<UBtn block>Block Button</UBtn>`,
});

export const Rounded = () => ({
  components: { UBtn },
  template: `
    <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center">
      <UBtn rounded="0">0</UBtn>
      <UBtn rounded="xs">xs</UBtn>
      <UBtn rounded="sm">sm</UBtn>
      <UBtn>default</UBtn>
      <UBtn rounded="lg">lg</UBtn>
      <UBtn rounded="xl">xl</UBtn>
      <UBtn rounded="pill">pill</UBtn>
      <UBtn rounded="circle" icon="mdi-heart"></UBtn>
    </div>
  `,
});

export const Elevation = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <UBtn size="x-large">Default Elevation (2)</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="4" size="x-large">Elevation 4</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="8" size="x-large">Elevation 8</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="12" size="x-large">Elevation 12</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="16" size="x-large">Elevation 16</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="20" size="x-large">Elevation 20</UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn elevation="24" size="x-large">Elevation 24</UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Ripple = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <UBtn
            height="72"
            min-width="164"
          >
            With Ripple
          </UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn
            :ripple="false"
            height="72"
            min-width="164"
          >
            Without Ripple
          </UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Icon = () => ({
  components: { UBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UBtn density="compact" icon="mdi-plus"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn density="comfortable" icon="mdi-tag"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn density="default" icon="mdi-open-in-new"></UBtn>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UBtn icon="mdi-account" size="x-small"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn icon="mdi-plus" size="small"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn icon="mdi-tag"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn icon="mdi-open-in-new" size="large"></UBtn>
        </v-col>

        <v-col cols="auto">
          <UBtn icon="mdi-calendar" size="x-large"></UBtn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Loaders = () => ({
  components: { UBtn },
  setup() {
    const loading = ref(false);
    const load = () => {
      loading.value = true;
      setTimeout(() => (loading.value = false), 3000);
    };
    return { loading, load };
  },
  template: `
    <v-card
      class="mx-auto"
      max-width="450"
      text="Update your weak or re-used passwords with Password Checkup. It's free and only takes a few minutes. Click the Take Checkup button to get started."
      title="Strengthen your passwords"
    >
      <template v-slot:actions>
        <UBtn height="48">
          No Thanks
        </UBtn>

        <UBtn
          :loading="loading"
          class="flex-grow-1"
          height="48"
          variant="tonal"
          @click="load"
        >
          Take Checkup
        </UBtn>
      </template>
    </v-card>
  `,
});

export const IconColor = () => ({
  components: { UBtn },
  template: `
    <div class="text-center">
      <UBtn
        append-icon="mdi-account-circle"
        prepend-icon="mdi-check-circle"
      >
        <template v-slot:prepend>
          <v-icon color="success"></v-icon>
        </template>

        Button

        <template v-slot:append>
          <v-icon color="warning"></v-icon>
        </template>
      </UBtn>
    </div>
  `,
});

export const Spaced = () => ({
  components: { UBtn },
  template: `
    <v-container class="d-flex flex-wrap align-center justify-center ga-3">
      <UBtn height="70" prepend-icon="$prev" spaced="start" width="220">
        <span class="text-right">
          <div class="mb-1">Previous</div>
          <small class="text-medium-emphasis">spaced: start</small>
        </span>
      </UBtn>

      <UBtn append-icon="$next" height="70" prepend-icon="$prev" spaced="both" width="220">
        <span>
          <div class="mb-1">Navigate</div>
          <small class="text-medium-emphasis">spaced: both</small>
        </span>
      </UBtn>

      <UBtn append-icon="$next" height="70" spaced="end" width="220">
        <span class="text-left">
          <div class="mb-1">Next</div>
          <small class="text-medium-emphasis">spaced: end</small>
        </span>
      </UBtn>
    </v-container>
  `,
});

export const CustomLoader = () => ({
  components: { UBtn },
  setup() {
    const loading = ref(false);

    watch(loading, (val) => {
      if (!val) return;
      setTimeout(() => (loading.value = false), 2000);
    });

    return { loading };
  },
  template: `
    <div class="text-center">
      <UBtn
        :loading="loading"
        @click="loading = !loading"
      >
        Custom loader

        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </UBtn>
    </div>
  `,
});
