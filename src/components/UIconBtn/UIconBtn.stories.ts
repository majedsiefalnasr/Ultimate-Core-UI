import type { Meta, StoryFn } from '@storybook/vue3';
import type { FunctionalComponent } from 'vue';
import { shallowRef } from 'vue';

import {
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UDialog,
  UDivider,
  UIconBtn,
  UList,
  UListItem,
  UMenu,
  USheet,
  USpacer,
  UTextField,
  UToolbar,
} from '../index';

interface ComponentArgs {
  active?: boolean;
  activeColor?: string;
  activeIcon?: string | (string | [string, number])[] | FunctionalComponent;
  activeVariant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  baseVariant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  border?: string | number | boolean;
  color?: string;
  disabled?: boolean;
  elevation?: string | number;
  height?: string | number;
  hideOverlay?: boolean;
  icon?: string | (string | [string, number])[] | FunctionalComponent;
  iconColor?: string;
  iconSize?: string | number;
  iconSizes?: Array<[string, number]>;
  loading?: boolean;
  opacity?: string | number;
  readonly?: boolean;
  rotate?: string | number;
  rounded?: string | number | boolean;
  size?: string | number;
  sizes?: Array<[string, number]>;
  tag?: string | (new () => any) | FunctionalComponent;
  text?: string | number | boolean;
  theme?: string;
  tile?: boolean;
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  width?: string | number;
  // Events
  'onUpdate:active'?: (val: boolean) => void;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Icon Buttons',
  component: UIconBtn,
  parameters: {
    docs: {
      description: {
        component:
          "The u-icon-btn component is a lightweight button for iconography. It supports active states, rotation, loading indicators, sizing presets, and variants while inheriting all functionality from Vuetify's v-icon-btn.",
      },
      import: `import { UIconBtn } from '@ultimate/core-ui/components'`,
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
          return `<u-icon-btn${attrsString}></u-icon-btn>`;
        },
      },
    },
    Vuetify: {
      component: 'VIconBtn',
      content: "The u-icon-btn component is built on top of Vuetify's v-icon-btn component.",
      link: 'https://vuetifyjs.com/en/components/buttons/',
    },
    Primary: {
      description:
        'Use u-icon-btn for compact icon actions. Supports active state styling & variant swapping via active prop family.',
    },
    api: {
      data: [
        {
          element: { title: 'v-icon-btn', link: 'https://vuetifyjs.com/en/api/v-icon-btn/' },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    active: { control: 'boolean', description: 'Controls active state.' },
    activeColor: {
      control: 'color',
      description: 'Color applied when component is active.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    activeIcon: {
      control: 'text',
      description: 'Icon used when active is true. Hugeicons syntax required.',
      table: {
        type: { summary: 'string | FunctionalComponent | array' },
        defaultValue: { summary: 'undefined' },
      },
    },
    activeVariant: {
      control: 'select',
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Variant applied when active is true.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    baseVariant: {
      control: 'select',
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Variant applied when active is false.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'tonal' } },
    },
    border: {
      control: 'text',
      description:
        'Utility border classes without the border- prefix (e.g. sm, lg). See borders documentation.',
      table: { type: { summary: 'string | number | boolean' }, defaultValue: { summary: 'false' } },
    },
    color: {
      control: 'color',
      description: 'Applies theme or CSS color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes ability to click or focus.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    elevation: {
      control: 'number',
      description: 'Applies elevation (0-24).',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    height: {
      control: 'text',
      description: 'Explicit height.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    hideOverlay: {
      control: 'boolean',
      description: 'Hides active/focus overlay.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    icon: {
      control: 'text',
      description: 'Icon for button. Use Hugeicons syntax.',
      table: {
        type: { summary: 'string | FunctionalComponent | array' },
        defaultValue: { summary: 'undefined' },
      },
    },
    iconColor: {
      control: 'color',
      description: 'Explicit icon color override.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    iconSize: {
      control: 'text',
      description: 'Icon size or named size.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    iconSizes: {
      control: 'object',
      description: 'Tuples mapping named icon sizes.',
      table: {
        type: { summary: 'array' },
        defaultValue: {
          summary: "[['x-small',10],['small',16],['default',24],['large',28],['x-large',32]]",
        },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Shows circular progress instead of icon.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    opacity: {
      control: 'text',
      description: 'Sets opacity value.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Readonly state (no interaction).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    rotate: {
      control: 'number',
      description: 'Rotation degrees for internal icon.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    rounded: {
      control: 'text',
      description: 'Border-radius preset or value.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    size: {
      control: 'text',
      description: 'Button width/height (named or number).',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'default' } },
    },
    sizes: {
      control: 'object',
      description: 'Tuples mapping named button sizes.',
      table: {
        type: { summary: 'array' },
        defaultValue: {
          summary: "[['x-small',16],['small',24],['default',40],['large',48],['x-large',56]]",
        },
      },
    },
    tag: {
      control: 'text',
      description: 'Custom root tag.',
      table: { type: { summary: 'string | component' }, defaultValue: { summary: 'button' } },
    },
    text: {
      control: 'text',
      description: 'Text content for the button.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    theme: {
      control: 'text',
      description: 'Explicit theme name.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes border-radius.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    variant: {
      control: 'select',
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Visual style variant.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'flat' } },
    },
    width: {
      control: 'text',
      description: 'Explicit width.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

// Default Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UIconBtn },
  setup() {
    return { args };
  },
  template: `
    <div class="text-center">
      <u-icon-btn v-bind="args"></u-icon-btn>
    </div>
  `,
});

Default.args = {
  icon: 'hugeicons:app-store',
  variant: 'flat',
  size: 'default',
} as ComponentArgs;

// Active Story
export const Active: StoryFn<ComponentArgs> = (args) => ({
  components: { UIconBtn, UToolbar, UMenu, UList, UListItem },
  setup() {
    const menu = shallowRef(false);
    return { args, menu };
  },
  template: `
    <u-toolbar class="px-3 mx-auto" rounded="pill" title="Toolbar">
      <template v-slot:append>
        <u-icon-btn :active="menu" icon="hugeicons:more-vertical">
          <u-menu v-model="menu" activator="parent" location="bottom end" offset="4">
            <u-list
              bg-color="surface-light"
              class="d-flex flex-column ga-1 pa-1"
              density="compact"
              rounded="lg"
              variant="text"
              slim
            >
              <u-list-item
                prepend-icon="hugeicons:user-circle"
                rounded="lg"
                title="Account"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:settings-01"
                rounded="lg"
                title="Settings"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:logout-02"
                rounded="lg"
                title="Logout"
                link
              ></u-list-item>
            </u-list>
          </u-menu>
        </u-icon-btn>
      </template>
    </u-toolbar>
  `,
});

Active.args = {} as ComponentArgs;

Active.parameters = {
  docs: {
    source: {
      code: `<template>
    <u-toolbar class="px-3 mx-auto" rounded="pill" title="Toolbar">
      <template v-slot:append>
        <u-icon-btn :active="menu" icon="hugeicons:more-vertical">
          <u-menu v-model="menu" activator="parent" location="bottom end" offset="4">
            <u-list
              bg-color="surface-light"
              class="d-flex flex-column ga-1 pa-1"
              density="compact"
              rounded="lg"
              variant="text"
              slim
            >
              <u-list-item
                prepend-icon="hugeicons:user-circle"
                rounded="lg"
                title="Account"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:settings-01"
                rounded="lg"
                title="Settings"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:logout-02"
                rounded="lg"
                title="Logout"
                link
              ></u-list-item>
            </u-list>
          </u-menu>
        </u-icon-btn>
      </template>
    </u-toolbar>
</template>
<script setup>
  import { shallowRef } from 'vue'
  const menu = shallowRef(false)
</script>`,
    },
    description: { story: 'Use the active prop with active-color to style stateful icon buttons.' },
  },
};

// Opacity Story
export const Opacity: StoryFn<ComponentArgs> = (args) => ({
  components: { UIconBtn, UTextField, UDialog, UCard, UCardText, UCardActions, UBtn, USpacer },
  setup() {
    const dialog = shallowRef(false);
    const search = shallowRef('');
    return { dialog, search, args };
  },
  template: `
    <u-text-field
      class="mx-auto"
      hide-details="auto"
      label="Search"
      max-width="260"
      variant="outlined"
    >
      <template #append-inner>
        <u-icon-btn
          :opacity="dialog ? 1 : 0.35"
          icon="hugeicons:search-01"
          @click.stop="dialog = true"
          hide-overlay
          variant="text"
        ></u-icon-btn>
        <u-dialog v-model="dialog" activator="parent" width="420">
          <u-card title="Find in page" density="comfortable">
            <u-card-text>
              <u-text-field v-model="search" hide-details="auto" label="Search" variant="outlined"></u-text-field>
            </u-card-text>
            <template #actions>
              <u-card-actions class="justify-end">
                <u-btn variant="plain" text="Cancel" @click="dialog = false"></u-btn>
                <u-btn text="Search" @click="dialog = false"></u-btn>
              </u-card-actions>
            </template>
          </u-card>
        </u-dialog>
      </template>
    </u-text-field>
  `,
});

Opacity.args = {} as ComponentArgs;

Opacity.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-text-field class="mx-auto" hide-details="auto" label="Search" max-width="260" variant="outlined">
    <template #append-inner>
      <u-icon-btn :opacity="dialog ? 1 : 0.35" icon="hugeicons:search-01" @click.stop="dialog = true" hide-overlay variant="text"></u-icon-btn>
      <u-dialog v-model="dialog" activator="parent" width="420">
        <u-card title="Find in page" density="comfortable">
          <u-card-text>
            <u-text-field v-model="search" hide-details="auto" label="Search" variant="outlined"></u-text-field>
          </u-card-text>
          <template #actions>
            <u-card-actions class="justify-end">
              <u-btn variant="plain" text="Cancel" @click="dialog = false"></u-btn>
              <u-btn text="Search" @click="dialog = false"></u-btn>
            </u-card-actions>
          </template>
        </u-card>
      </u-dialog>
    </template>
  </u-text-field>
</template>
<script setup>
  import { shallowRef } from 'vue'
  const dialog = shallowRef(false)
  const search = shallowRef('')
</script>`,
    },
    description: { story: 'Control internal icon opacity for contextual emphasis.' },
  },
};

// Rotate Story
export const Rotate: StoryFn<ComponentArgs> = (args) => ({
  components: { UIconBtn, UBtn, UMenu, UList, UListItem },
  setup() {
    const open = shallowRef(false);
    return { open, args };
  },
  template: `
    <div class="text-center">
      <u-menu v-model="open">
        <template #activator="{ props, isActive }">
          <u-btn v-bind="props" text="Toggle">
            <template #append>
              <u-icon-btn
                :rotate="isActive ? 180 : 0"
                icon="hugeicons:arrow-down-01"
                size="20"
                variant="plain"
                hide-overlay
              ></u-icon-btn>
            </template>
          </u-btn>
        </template>
        <u-list density="comfortable">
          <u-list-item title="Item 1" link></u-list-item>
          <u-list-item title="Item 2" link></u-list-item>
          <u-list-item title="Item 3" link></u-list-item>
        </u-list>
      </u-menu>
    </div>
  `,
});

Rotate.args = {} as ComponentArgs;

Rotate.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center">
    <u-menu>
      <template #activator="{ props, isActive }">
        <u-btn v-bind="props" text="Toggle">
          <template #append>
            <u-icon-btn :rotate="isActive ? 180 : 0" icon="hugeicons:arrow-down-01" size="20" variant="plain" hide-overlay></u-icon-btn>
          </template>
        </u-btn>
      </template>
      <u-list density="comfortable">
        <u-list-item title="Item 1" link></u-list-item>
        <u-list-item title="Item 2" link></u-list-item>
        <u-list-item title="Item 3" link></u-list-item>
      </u-list>
    </u-menu>
  </div>
</template>`,
    },
    description: { story: 'Rotate internal icon to reflect expanded or collapsed states.' },
  },
};

// Video Controls Story
export const VideoControls: StoryFn<ComponentArgs> = (args) => ({
  components: { UIconBtn, USheet, UMenu, UList, UListItem, UDivider },
  setup() {
    const caption = shallowRef(false);
    const emoji = shallowRef(false);
    const hangup = shallowRef(false);
    const mic = shallowRef(true);
    const micOptions = shallowRef(false);
    const raised = shallowRef(false);
    const share = shallowRef(false);
    const video = shallowRef(true);
    const videoOptions = shallowRef(false);
    function onClick() {
      console.log('Sharing your screen');
    }
    return {
      caption,
      emoji,
      hangup,
      mic,
      micOptions,
      raised,
      share,
      video,
      videoOptions,
      onClick,
      args,
    };
  },
  template: `
    <u-container class="pa-md-12 text-center">
      <u-sheet
        class="d-inline-flex ga-1 pa-4 align-center justify-center mx-auto"
        color="surface-light"
        rounded="pill"
      >
        <u-sheet
          :rounded="!mic ? 'lg' : 'xl'"
          class="overflow-visible d-flex align-center"
          color="surface"
          height="48"
          width="88"
          flat
        >
          <u-icon-btn
            v-model:active="micOptions"
            :active-variant="!mic ? 'flat' : 'text'"
            :base-variant="!mic ? 'flat' : 'text'"
            :color="!mic ? 'error' : ''"
            :rotate="micOptions ? 180 : 0"
            :rounded="!mic ? 'lg' : 'circle'"
            icon="hugeicons:arrow-up-01" 
            size="48"
            hide-overlay
          ></u-icon-btn>

          <u-icon-btn
            v-model:active="mic"
            :rounded="!mic ? 'lg' : 'circle'"
            active-color=""
            active-icon="hugeicons:mic-01"
            active-variant="tonal"
            base-variant="flat"
            class="ms-n2"
            color="#f9dedc"
            icon="hugeicons:mic-off-01"
            size="48"
            v-ripple
          ></u-icon-btn>
        </u-sheet>

        <u-sheet
          :rounded="!video ? 'lg' : 'xl'"
          class="overflow-visible d-flex align-center"
          color="surface"
          height="48"
          width="88"
          flat
        >
          <u-icon-btn
            v-model:active="videoOptions"
            :active-variant="!video ? 'flat' : 'text'"
            :base-variant="!video ? 'flat' : 'text'"
            :color="!video ? 'error' : ''"
            :rotate="videoOptions ? 180 : 0"
            :rounded="!video ? 'lg' : 'circle'"
            icon="hugeicons:arrow-up-01"
            size="48"
            hide-overlay
          ></u-icon-btn>

          <u-icon-btn
            v-model:active="video"
            :rounded="!video ? 'lg' : 'circle'"
            active-color=""
            active-icon="hugeicons:video-02"
            active-variant="tonal"
            base-variant="flat"
            class="ms-n2"
            color="#f9dedc"
            icon="hugeicons:video-off"
            size="48"
          ></u-icon-btn>
        </u-sheet>

        <u-icon-btn
          v-model:active="caption"
          :class="!caption ? 'mx-1' : undefined"
          :rounded="!caption ? 'circle' : 'lg'"
          :width="caption ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:closed-caption"
          active-variant="flat"
          height="48"
          icon="hugeicons:closed-caption"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="emoji"
          :class="!emoji ? 'mx-1' : undefined"
          :rounded="!emoji ? 'circle' : 'lg'"
          :width="emoji ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:happy"
          height="48"
          icon="hugeicons:happy"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="share"
          :class="!share ? 'mx-1' : undefined"
          :rounded="!share ? 'circle' : 'lg'"
          :width="share ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:square-arrow-up-02"
          height="48"
          icon="hugeicons:square-arrow-up-02"
          @click="onClick"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="raised"
          :class="!raised ? 'mx-1' : undefined"
          :rounded="!raised ? 'circle' : 'lg'"
          :width="raised ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:waving-hand-02"
          height="48"
          icon="hugeicons:waving-hand-02"
        ></u-icon-btn>

        <u-icon-btn
          height="48"
          icon="mdi-dots-vertical"
          rounded="xl"
          variant="tonal"
        >
          <u-icon></u-icon>

          <u-menu activator="parent" location="top end" offset="4">
            <u-list rounded="lg" slim>
              <u-list-item
                prepend-icon="hugeicons:radio-button"
                title="Manage recording"
                link
              ></u-list-item>

              <u-divider class="my-2"></u-divider>

              <u-list-item
                prepend-icon="hugeicons:grid-view"
                title="Change layout"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:full-screen"
                title="Full screen"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:computer-screen-share"
                title="Share screen"
                link
              ></u-list-item>

              <u-divider class="my-2"></u-divider>

              <u-list-item
                prepend-icon="hugeicons:settings-01"
                title="Settings"
                link
              ></u-list-item>
            </u-list>
          </u-menu>
        </u-icon-btn>

        <u-icon-btn
          v-model:active="hangup"
          active-variant="outlined"
          base-variant="flat"
          color="error"
          height="48"
          icon="hugeicons:call-end-04"
          rounded="xl"
          width="72"
        ></u-icon-btn>
      </u-sheet>
    </u-container>
  `,
});

VideoControls.args = {} as ComponentArgs;

VideoControls.parameters = {
  docs: {
    source: {
      code: `<template>
    <u-container class="pa-md-12 text-center">
      <u-sheet
        class="d-inline-flex ga-1 pa-4 align-center justify-center mx-auto"
        color="surface-light"
        rounded="pill"
      >
        <u-sheet
          :rounded="!mic ? 'lg' : 'xl'"
          class="overflow-visible d-flex align-center"
          color="surface"
          height="48"
          width="88"
          flat
        >
          <u-icon-btn
            v-model:active="micOptions"
            :active-variant="!mic ? 'flat' : 'text'"
            :base-variant="!mic ? 'flat' : 'text'"
            :color="!mic ? 'error' : ''"
            :rotate="micOptions ? 180 : 0"
            :rounded="!mic ? 'lg' : 'circle'"
            icon="hugeicons:arrow-up-01" 
            size="48"
            hide-overlay
          ></u-icon-btn>

          <u-icon-btn
            v-model:active="mic"
            :rounded="!mic ? 'lg' : 'circle'"
            active-color=""
            active-icon="hugeicons:mic-01"
            active-variant="tonal"
            base-variant="flat"
            class="ms-n2"
            color="#f9dedc"
            icon="hugeicons:mic-off-01"
            size="48"
            v-ripple
          ></u-icon-btn>
        </u-sheet>

        <u-sheet
          :rounded="!video ? 'lg' : 'xl'"
          class="overflow-visible d-flex align-center"
          color="surface"
          height="48"
          width="88"
          flat
        >
          <u-icon-btn
            v-model:active="videoOptions"
            :active-variant="!video ? 'flat' : 'text'"
            :base-variant="!video ? 'flat' : 'text'"
            :color="!video ? 'error' : ''"
            :rotate="videoOptions ? 180 : 0"
            :rounded="!video ? 'lg' : 'circle'"
            icon="hugeicons:arrow-up-01"
            size="48"
            hide-overlay
          ></u-icon-btn>

          <u-icon-btn
            v-model:active="video"
            :rounded="!video ? 'lg' : 'circle'"
            active-color=""
            active-icon="hugeicons:video-02"
            active-variant="tonal"
            base-variant="flat"
            class="ms-n2"
            color="#f9dedc"
            icon="hugeicons:video-off"
            size="48"
          ></u-icon-btn>
        </u-sheet>

        <u-icon-btn
          v-model:active="caption"
          :class="!caption ? 'mx-1' : undefined"
          :rounded="!caption ? 'circle' : 'lg'"
          :width="caption ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:closed-caption"
          active-variant="flat"
          height="48"
          icon="hugeicons:closed-caption"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="emoji"
          :class="!emoji ? 'mx-1' : undefined"
          :rounded="!emoji ? 'circle' : 'lg'"
          :width="emoji ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:happy"
          height="48"
          icon="hugeicons:happy"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="share"
          :class="!share ? 'mx-1' : undefined"
          :rounded="!share ? 'circle' : 'lg'"
          :width="share ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:square-arrow-up-02"
          height="48"
          icon="hugeicons:square-arrow-up-02"
          @click="onClick"
        ></u-icon-btn>

        <u-icon-btn
          v-model:active="raised"
          :class="!raised ? 'mx-1' : undefined"
          :rounded="!raised ? 'circle' : 'lg'"
          :width="raised ? 56 : 48"
          active-color="#9bbbef"
          active-icon="hugeicons:waving-hand-02"
          height="48"
          icon="hugeicons:waving-hand-02"
        ></u-icon-btn>

        <u-icon-btn
          height="48"
          icon="mdi-dots-vertical"
          rounded="xl"
          variant="tonal"
        >
          <u-icon></u-icon>

          <u-menu activator="parent" location="top end" offset="4">
            <u-list rounded="lg" slim>
              <u-list-item
                prepend-icon="hugeicons:radio-button"
                title="Manage recording"
                link
              ></u-list-item>

              <u-divider class="my-2"></u-divider>

              <u-list-item
                prepend-icon="hugeicons:grid-view"
                title="Change layout"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:full-screen"
                title="Full screen"
                link
              ></u-list-item>

              <u-list-item
                prepend-icon="hugeicons:computer-screen-share"
                title="Share screen"
                link
              ></u-list-item>

              <u-divider class="my-2"></u-divider>

              <u-list-item
                prepend-icon="hugeicons:settings-01"
                title="Settings"
                link
              ></u-list-item>
            </u-list>
          </u-menu>
        </u-icon-btn>

        <u-icon-btn
          v-model:active="hangup"
          active-variant="outlined"
          base-variant="flat"
          color="error"
          height="48"
          icon="hugeicons:call-end-04"
          rounded="xl"
          width="72"
        ></u-icon-btn>
      </u-sheet>
    </u-container>
</template>`,
    },
    description: { story: 'Flexible arrangement replicating common video conferencing controls.' },
  },
};
