import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';

import UButton from './UButton.vue';

// Strongly-typed args for the UButton stories to avoid `any` eslint errors.
interface UButtonArgs {
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

// Clean CSF stories for UButton. Keep minimal and easy to parse to avoid
// Storybook indexing issues.
const meta: Meta<UButtonArgs> = {
  title: 'Core/Button/UButton',
  component: UButton,
  parameters: {
    docs: {
      description: {
        component:
          'UButton — thin wrapper around Vuetify `VBtn`. Forwards attributes to VBtn; use standard VBtn props.',
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

export const Default: StoryFn<UButtonArgs> = (args) => ({
  components: { UButton },
  setup() {
    return { args };
  },
  template: '<UButton v-bind="args">{{ args.label || "Button" }}</UButton>',
});

Default.args = {
  color: 'primary',
  label: 'Primary',
} as UButtonArgs;

export const Variants = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UButton color="primary" variant="elevated">Elevated Button (Default)</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton color="primary" variant="flat">Flat Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton color="primary" variant="tonal">Tonal Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton color="primary" variant="outlined">Outlined Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton color="primary" variant="text">Text Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton color="primary" variant="plain">Plain Button</UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const density = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UButton density="compact">Compact Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton density="comfortable">Comfortable Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton density="default">Default Button</UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Sizes = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UButton size="x-small">Extra small Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton size="small">Small Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton>Regular Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton size="large">Large Button</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton size="x-large">X-Large Button</UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Block = () => ({
  components: { UButton },
  template: `<UButton block>Block Button</UButton>`,
});

export const Rounded = () => ({
  components: { UButton },
  template: `
    <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center">
      <UButton rounded="0">0</UButton>
      <UButton rounded="xs">xs</UButton>
      <UButton rounded="sm">sm</UButton>
      <UButton>default</UButton>
      <UButton rounded="lg">lg</UButton>
      <UButton rounded="xl">xl</UButton>
      <UButton rounded="pill">pill</UButton>
      <UButton rounded="circle" icon="mdi-heart"></UButton>
    </div>
  `,
});

export const Elevation = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <UButton size="x-large">Default Elevation (2)</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="4" size="x-large">Elevation 4</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="8" size="x-large">Elevation 8</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="12" size="x-large">Elevation 12</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="16" size="x-large">Elevation 16</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="20" size="x-large">Elevation 20</UButton>
        </v-col>

        <v-col cols="auto">
          <UButton elevation="24" size="x-large">Elevation 24</UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Ripple = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <UButton
            height="72"
            min-width="164"
          >
            With Ripple
          </UButton>
        </v-col>

        <v-col cols="auto">
          <UButton
            :ripple="false"
            height="72"
            min-width="164"
          >
            Without Ripple
          </UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Icon = () => ({
  components: { UButton },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UButton density="compact" icon="mdi-plus"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton density="comfortable" icon="mdi-tag"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton density="default" icon="mdi-open-in-new"></UButton>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <UButton icon="mdi-account" size="x-small"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton icon="mdi-plus" size="small"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton icon="mdi-tag"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton icon="mdi-open-in-new" size="large"></UButton>
        </v-col>

        <v-col cols="auto">
          <UButton icon="mdi-calendar" size="x-large"></UButton>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Loaders = () => ({
  components: { UButton },
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
        <v-btn height="48">
          No Thanks
        </v-btn>

        <v-btn
          :loading="loading"
          class="flex-grow-1"
          height="48"
          variant="tonal"
          @click="load"
        >
          Take Checkup
        </v-btn>
      </template>
    </v-card>
  `,
});

export const IconColor = () => ({
  components: { UButton },
  template: `
    <div class="text-center">
      <UButton
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
      </UButton>
    </div>
  `,
});

export const Spaced = () => ({
  components: { UButton },
  template: `
    <v-container class="d-flex flex-wrap align-center justify-center ga-3">
      <UButton height="70" prepend-icon="$prev" spaced="start" width="220">
        <span class="text-right">
          <div class="mb-1">Previous</div>
          <small class="text-medium-emphasis">spaced: start</small>
        </span>
      </UButton>

      <UButton append-icon="$next" height="70" prepend-icon="$prev" spaced="both" width="220">
        <span>
          <div class="mb-1">Navigate</div>
          <small class="text-medium-emphasis">spaced: both</small>
        </span>
      </UButton>

      <UButton append-icon="$next" height="70" spaced="end" width="220">
        <span class="text-left">
          <div class="mb-1">Next</div>
          <small class="text-medium-emphasis">spaced: end</small>
        </span>
      </UButton>
    </v-container>
  `,
});

export const CustomLoader = () => ({
  components: { UButton },
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
      <v-btn
        :loading="loading"
        @click="loading = !loading"
      >
        Custom loader

        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
    </div>
  `,
});
