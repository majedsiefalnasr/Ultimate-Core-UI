import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import { UBtn, UCard, UContainer, ULazy, UResponsive, USheet } from '../index';

interface ComponentArgs {
  height?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: boolean;
  options?: Record<string, unknown>;
  tag?: string;
  transition?: string | boolean;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Miscellaneous/Lazy',
  component: ULazy,
  parameters: {
    docs: {
      description: {
        component:
          'The u-lazy component is used to dynamically load components based upon an elements visibility. The content is not rendered until intersected.',
      },
      import: `import { ULazy } from '@ultimate/core-ui/components'`,
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

          return `
            <template>
              <u-sheet ref="sheetRef" class="overflow-y-auto ma-4" :max-height="300" elevation="5">
                <div class="pa-6 text-center position-sticky">Scroll down</div>
                <u-responsive :min-height="'100vh'"></u-responsive>

                <div class="text-center text-body-2 mb-12">The card will appear below:</div>

                <u-lazy v-model="isActive"${attrsString}>
                  <u-card class="mx-auto" color="primary" :max-width="336" text="This card was rendered later" title="Lazy card">
                    <div class="pa-4"></div>
                    <div class="d-flex justify-center pa-4">
                      <u-btn @click="reset">Reset Demo</u-btn>
                    </div>
                  </u-card>
                </u-lazy>
              </u-sheet>
            </template>
            <script setup>
            import { ref, shallowRef } from 'vue'

            const isActive = shallowRef(false)
            const sheetRef = ref()

            async function reset () {
              window.scrollTo({ top: 0, behavior: 'smooth' })
              isActive.value = false
            }
            </script>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VLazy',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/lazy/',
    },
    Primary: {
      description:
        'The u-lazy component by default will not render its contents until it has been intersected.',
    },
  },
  argTypes: {
    height: {
      control: { type: 'text' },
      description: 'Sets the height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxHeight: {
      name: 'max-height',
      control: { type: 'text' },
      description: 'Sets the maximum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxWidth: {
      name: 'max-width',
      control: { type: 'text' },
      description: 'Sets the maximum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minHeight: {
      name: 'min-height',
      control: { type: 'text' },
      description: 'Sets the minimum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minWidth: {
      name: 'min-width',
      control: { type: 'text' },
      description: 'Sets the minimum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      name: 'model-value',
      control: { type: 'boolean' },
      description: 'The v-model value of the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    options: {
      control: { type: 'object' },
      description: 'Options passed to the IntersectionObserver.',
      table: {
        type: { summary: 'IntersectionObserverInit' },
        defaultValue: {
          summary: '{ root: undefined, rootMargin: undefined, threshold: undefined }',
        },
      },
    },
    tag: {
      control: { type: 'text' },
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string | (new () => any) | FunctionalComponent' },
        defaultValue: { summary: "'div'" },
      },
    },
    transition: {
      control: { type: 'text' },
      description: 'Sets the component transition.',
      table: {
        type: { summary: 'string | boolean | (TransitionProps & { component: Component })' },
        defaultValue: { summary: "'fade-transition'" },
      },
    },
    width: {
      control: { type: 'text' },
      description: 'Sets the width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { ULazy, USheet, UResponsive, UCard, UBtn, UContainer },
  setup() {
    const isActive = shallowRef(!!args.modelValue);
    const sheetRef = ref<any>(null);

    async function reset() {
      // scroll to top of the container if possible, then reset
      try {
        const el = sheetRef.value?.$el ?? sheetRef.value;
        if (el && typeof el.scrollTo === 'function') {
          el.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (e) {
        /* ignore */
      }

      isActive.value = false;
    }

    return { args, isActive, sheetRef, reset };
  },
  template: `
    <u-sheet ref="sheetRef" class="overflow-y-auto ma-4" :max-height="300" elevation="5">
      <div class="pa-6 text-center position-sticky">Scroll down</div>
      <u-responsive :min-height="'100vh'"></u-responsive>

      <div class="text-center text-body-2 mb-12">The card will appear below:</div>

      <u-lazy v-model="isActive">
        <u-card class="mx-auto" color="primary" :max-width="336" text="This card was rendered later" title="Lazy card">
          <div class="pa-4"></div>
          <div class="d-flex justify-center pa-4">
            <u-btn @click="reset">Reset Demo</u-btn>
          </div>
        </u-card>
      </u-lazy>
    </u-sheet>
  `,
});

Default.args = {
  minHeight: '200',
  options: { threshold: 0.5 },
  transition: 'fade-transition',
} as ComponentArgs;
