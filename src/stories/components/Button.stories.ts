import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, watch } from 'vue';
import { VBtn } from 'vuetify/components';

// Strongly-typed args for the VBtn stories to avoid `any` eslint errors.
interface ButtonArgs {
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

// Clean CSF stories for VBtn. Keep minimal and easy to parse to avoid
// Storybook indexing issues.
const meta: Meta<ButtonArgs> = {
  title: 'Core/Button',
  component: VBtn,
  parameters: {
    docs: {
      description: {
        component:
          'The v-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.',
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

export const Default: StoryFn<ButtonArgs> = (args) => ({
  components: { VBtn },
  setup() {
    return { args };
  },
  template: '<v-btn v-bind="args">{{ args.label || "Button" }}</v-btn>',
});

Default.args = {
  color: 'primary',
  label: 'Primary',
} as ButtonArgs;

export const Variants = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn color="primary" variant="elevated">Elevated Button (Default)</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" variant="flat">Flat Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" variant="tonal">Tonal Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" variant="outlined">Outlined Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" variant="text">Text Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn color="primary" variant="plain">Plain Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Density = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn density="compact">Compact Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="comfortable">Comfortable Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default">Default Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Sizes = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn size="x-small">Extra small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="small">Small Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn>Regular Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="large">Large Button</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn size="x-large">X-Large Button</v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Block = () => ({
  components: { VBtn },
  template: `<v-btn block>Block Button</v-btn>`,
});

export const Rounded = () => ({
  components: { VBtn },
  template: `
    <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;align-items:center">
      <v-btn rounded="0">0</v-btn>
      <v-btn rounded="xs">xs</v-btn>
      <v-btn rounded="sm">sm</v-btn>
      <v-btn>default</v-btn>
      <v-btn rounded="lg">lg</v-btn>
      <v-btn rounded="xl">xl</v-btn>
      <v-btn rounded="pill">pill</v-btn>
      <v-btn rounded="circle" icon="mdi-heart"></v-btn>
    </div>
  `,
});

export const Elevation = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-btn size="x-large">Default Elevation (2)</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="4" size="x-large">Elevation 4</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="8" size="x-large">Elevation 8</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="12" size="x-large">Elevation 12</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="16" size="x-large">Elevation 16</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="20" size="x-large">Elevation 20</v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn elevation="24" size="x-large">Elevation 24</v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Ripple = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
            height="72"
            min-width="164"
          >
            With Ripple
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            :ripple="false"
            height="72"
            min-width="164"
          >
            Without Ripple
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Icon = () => ({
  components: { VBtn },
  template: `
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn density="compact" icon="mdi-plus"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="comfortable" icon="mdi-tag"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn density="default" icon="mdi-open-in-new"></v-btn>
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col cols="auto">
          <v-btn icon="mdi-account" size="x-small"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn icon="mdi-plus" size="small"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn icon="mdi-tag"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn icon="mdi-open-in-new" size="large"></v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn icon="mdi-calendar" size="x-large"></v-btn>
        </v-col>
      </v-row>
    </v-container>
  `,
});

export const Loaders = () => ({
  components: { VBtn },
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
  components: { VBtn },
  template: `
    <div class="text-center">
      <v-btn
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
      </v-btn>
    </div>
  `,
});

export const Spaced = () => ({
  components: { VBtn },
  template: `
    <v-container class="d-flex flex-wrap align-center justify-center ga-3">
      <v-btn height="70" prepend-icon="$prev" spaced="start" width="220">
        <span class="text-right">
          <div class="mb-1">Previous</div>
          <small class="text-medium-emphasis">spaced: start</small>
        </span>
      </v-btn>

      <v-btn append-icon="$next" height="70" prepend-icon="$prev" spaced="both" width="220">
        <span>
          <div class="mb-1">Navigate</div>
          <small class="text-medium-emphasis">spaced: both</small>
        </span>
      </v-btn>

      <v-btn append-icon="$next" height="70" spaced="end" width="220">
        <span class="text-left">
          <div class="mb-1">Next</div>
          <small class="text-medium-emphasis">spaced: end</small>
        </span>
      </v-btn>
    </v-container>
  `,
});

export const CustomLoader = () => ({
  components: { VBtn },
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
