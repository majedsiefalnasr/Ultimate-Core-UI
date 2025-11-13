import type { Meta, StoryFn } from '@storybook/vue3';
import { computed, ref, shallowRef, watch } from 'vue';

import {
  UApp,
  UAppBar,
  UAppBarNavIcon,
  UAppBarTitle,
  UAvatar,
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCol,
  UDialog,
  UDivider,
  UFab,
  UIcon,
  ULayout,
  UList,
  UListItem,
  UListItemAction,
  UListItemSubtitle,
  UListItemTitle,
  UListSubheader,
  UMain,
  URadio,
  URadioGroup,
  URow,
  USheet,
  USpacer,
  USpeedDial,
  UTab,
  UTabs,
  UTextField,
  UToolbar,
  UToolbarTitle,
} from '../index';

interface ComponentArgs {
  absolute?: boolean;
  active?: boolean;
  activeColor?: string;
  app?: boolean;
  appear?: boolean;
  appendIcon?: string | Record<string, unknown> | Array<unknown>;
  baseColor?: string;
  block?: boolean;
  border?: string | number | boolean;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  elevation?: string | number;
  exact?: boolean;
  extended?: boolean;
  flat?: boolean;
  height?: string | number;
  href?: string;
  icon?: boolean | string | Array<unknown> | Record<string, unknown>;
  layout?: boolean;
  loading?: string | boolean;
  location?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: boolean | unknown;
  name?: string;
  offset?: boolean;
  order?: string | number;
  position?: 'fixed' | 'relative' | 'static' | 'absolute' | 'sticky';
  prependIcon?: string | Array<unknown> | Record<string, unknown>;
  readonly?: boolean;
  replace?: boolean;
  ripple?: boolean | Record<string, unknown>;
  rounded?: string | number | boolean;
  selectedClass?: string;
  size?: string | number;
  slim?: boolean;
  stacked?: boolean;
  symbol?: unknown;
  tag?: string | Record<string, unknown>;
  text?: string | number | boolean;
  theme?: string;
  tile?: boolean;
  to?: string | Record<string, unknown>;
  transition?: string | boolean | Record<string, unknown>;
  value?: unknown;
  variant?: 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Navigation/Floating Action Buttons',
  component: UFab,
  parameters: {
    docs: {
      description: {
        component:
          'The u-fab component can be used as a floating action button. This provides an application with a main point of action.',
      },
      import: `import { UFab } from '@ultimate/core-ui/components'`,
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

          return `<u-fab${attrsString}></u-fab>`;
        },
      },
    },
    Vuetify: {
      component: 'VFab',
      content:
        'Floating action buttons can be attached to material to signify a promoted action in your application. Use the default size for most cases, and the small variant when needed.',
      link: 'https://vuetifyjs.com/en/components/floating-action-buttons/',
    },
    Primary: {
      description:
        'Floating action buttons can be attached to material to signify a promoted action in your application. The default size will be used in most cases, whereas the small variant can be used to maintain continuity with similar sized elements.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-fab',
            link: 'https://vuetifyjs.com/en/api/v-fab/',
          },
          description: 'Primary component',
        },
      ],
    },
  },
  argTypes: {
    color: {
      control: 'text',
      description: 'Applies specified color to the control.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    absolute: {
      control: 'boolean',
      description: 'Applies position: absolute to the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'text',
      description:
        'Sets the height and width of the component. Predefined sizes: x-small, small, default, large, x-large.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'default' } },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the Icon component (makes the button round).',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    extended: {
      control: 'boolean',
      description: 'An alternate style for the FAB that expects text.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'text',
      description: 'Displays a linear progress bar. Can be a color string or boolean.',
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'false' } },
    },
    location: {
      control: 'text',
      description: 'The location of the fab relative to the layout. Only works when using app.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    transition: {
      control: 'text',
      description: "Sets the component transition. Default is 'fab-transition'.",
      table: { type: { summary: 'string | boolean' }, defaultValue: { summary: 'fab-transition' } },
    },
    variant: {
      control: 'select',
      options: ['flat', 'text', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: "'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'" },
        defaultValue: { summary: 'elevated' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UFab },
  setup() {
    return { args };
  },
  template: '<u-fab v-bind="args" icon="$vuetify"></u-fab>',
});

Default.args = {
  icon: 'hugeicons:add-01',
  variant: 'elevated',
} as ComponentArgs;

export const DisplayAnimation: StoryFn<ComponentArgs> = (args) => ({
  components: { UFab, UCard, UAppBar, UMain, USheet, UBtn },
  setup() {
    const hidden = ref(false);
    return { args, hidden };
  },
  template: `
    <u-card class="mx-auto" style="max-width:360px">
      <u-app-bar absolute extended>
        <template #extension>
          <u-fab :active="!hidden" class="ms-4" icon="hugeicons:add-01" location="bottom start" size="small" absolute offset></u-fab>
        </template>
      </u-app-bar>

      <u-main>
        <u-sheet class="pa-4 text-center" color="surface-light" style="height:300px">
          <u-btn :text="hidden ? 'Show' : 'Hide'" color="surface-variant" style="width:80px" @click="hidden = !hidden"></u-btn>
        </u-sheet>

        <u-sheet style="height:125px">
          <u-fab :active="!hidden" class="me-4" icon="hugeicons:add-01" location="top end" absolute offset></u-fab>
        </u-sheet>
      </u-main>
    </u-card>
  `,
});

DisplayAnimation.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-card
    class="mx-auto"
    max-width="360"
  >
    <u-layout>
      <u-app-bar absolute extended>
        <u-app-bar-nav-icon></u-app-bar-nav-icon>

        <template v-slot:extension>
          <u-fab
            :active="!hidden"
            class="ms-4"
            icon="hugeicons:add-01"
            location="bottom start"
            size="small"
            absolute
            offset
          ></u-fab>
        </template>
      </u-app-bar>

      <u-main>
        <u-sheet class="pa-4 text-center" color="surface-light" height="300">
          <u-btn
            :text="hidden ? 'Show' : 'Hide'"
            color="surface-variant"
            width="80"
            @click="hidden = !hidden"
          >
          </u-btn>
        </u-sheet>

        <u-sheet height="125">
          <u-fab
            :active="!hidden"
            class="me-4"
            icon="hugeicons:add-01"
            location="top end"
            absolute
            offset
          ></u-fab>
        </u-sheet>
      </u-main>
    </u-layout>
  </u-card>
</template>
<script setup>
  import { ref } from 'vue'

  const hidden = ref(false)
</script>
      `,
    },
  },
};

export const LateralScreens: StoryFn<ComponentArgs> = () => ({
  components: {
    UFab,
    UCard,
    UAppBar,
    ULayout,
    UAppBarNavIcon,
    UAppBarTitle,
    UBtn,
    UIcon,
    UTabs,
    UTab,
    UMain,
    USheet,
  },
  setup() {
    const tabs = ref<string | null>(null);
    const activeFab = computed(() => {
      switch (tabs.value) {
        case 'one':
          return { color: 'success', icon: 'hugeicons:share-01' };
        case 'two':
          return { color: 'red', icon: 'hugeicons:edit-02' };
        case 'three':
          return { color: 'green', icon: 'hugeicons:arrow-up-01' };
        default:
          return {};
      }
    });
    return { tabs, activeFab };
  },
  template: `
  <u-card>
    <u-layout>
      <u-app-bar
        color="indigo"
        absolute
        flat
      >
        <u-app-bar-nav-icon></u-app-bar-nav-icon>

        <u-app-bar-title>Page title</u-app-bar-title>

        <u-btn icon="hugeicons:search-01"></u-btn>

        <u-btn icon="hugeicons:menu-01">
          <u-icon></u-icon>
        </u-btn>

        <template v-slot:extension>
          <u-tabs
            v-model="tabs"
            align-tabs="title"
            slider-color="pink"
          >
            <u-tab text="Item One" value="one"></u-tab>

            <u-tab text="Item Two" value="two"></u-tab>

            <u-tab text="Item Three" value="three"></u-tab>
          </u-tabs>
        </template>
      </u-app-bar>

      <u-main>
        <u-sheet height="150"></u-sheet>
      </u-main>

      <u-fab
        :key="activeFab.icon"
        :color="activeFab.color"
        :icon="activeFab.icon"
        class="ms-4 mb-4"
        location="bottom start"
        size="64"
        absolute
        app
        appear
      ></u-fab>
    </u-layout>
  </u-card>
  `,
});

LateralScreens.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-card>
    <u-layout>
      <u-app-bar
        color="indigo"
        absolute
        flat
      >
        <u-app-bar-nav-icon></u-app-bar-nav-icon>

        <u-app-bar-title>Page title</u-app-bar-title>

        <u-btn icon="hugeicons:search-01"></u-btn>
        <u-btn icon="hugeicons:menu-01">
          <u-icon></u-icon>
        </u-btn>

        <template v-slot:extension>
          <u-tabs
            v-model="tabs"
            align-tabs="title"
            slider-color="pink"
          >
            <u-tab text="Item One" value="one"></u-tab>

            <u-tab text="Item Two" value="two"></u-tab>

            <u-tab text="Item Three" value="three"></u-tab>
          </u-tabs>
        </template>
      </u-app-bar>

      <u-main>
        <u-sheet height="150"></u-sheet>
      </u-main>

      <u-fab
        :key="activeFab.icon"
        :color="activeFab.color"
        :icon="activeFab.icon"
        class="ms-4 mb-4"
        location="bottom start"
        size="64"
        absolute
        app
        appear
      ></u-fab>
    </u-layout>
  </u-card>
</template>
<script setup>
  import { computed, ref } from 'vue'

  const tabs = ref(null)
  const activeFab = computed(() => {
    switch (tabs.value) {
      case 'one': return { color: 'success', icon: 'hugeicons:share-01' }
      case 'two': return { color: 'red', icon: 'hugeicons:edit-02' }
      case 'three': return { color: 'green', icon: 'hugeicons:arrow-up-01' }
      default: return {}
    }
  })
</script>
      `,
    },
  },
};

export const SmallVariant: StoryFn<ComponentArgs> = () => ({
  components: {
    UFab,
    UCard,
    UToolbar,
    UToolbarTitle,
    UAppBarNavIcon,
    UBtn,
    UList,
    UListSubheader,
    UListItem,
    UAvatar,
    UListItemTitle,
    UListItemSubtitle,
    UListItemAction,
    UDivider,
    UDialog,
    UCardText,
    UCardActions,
    USpacer,
    UTextField,
  },
  setup() {
    const dialog = ref(false);
    const items = ref([
      {
        icon: 'hugeicons:folder-01',
        iconClass: 'bg-grey text-white',
        title: 'Photos',
        subtitle: 'Jan 9, 2014',
      },
      {
        icon: 'hugeicons:folder-01',
        iconClass: 'bg-grey text-white',
        title: 'Recipes',
        subtitle: 'Jan 17, 2014',
      },
      {
        icon: 'hugeicons:folder-01',
        iconClass: 'bg-grey text-white',
        title: 'Work',
        subtitle: 'Jan 28, 2014',
      },
    ]);
    const items2 = ref([
      {
        icon: 'hugeicons:clipboard',
        iconClass: 'bg-blue text-white',
        title: 'Vacation itinerary',
        subtitle: 'Jan 20, 2014',
      },
      {
        icon: 'hugeicons:tap-01',
        iconClass: 'bg-amber text-white',
        title: 'Kitchen remodel',
        subtitle: 'Jan 10, 2014',
      },
    ]);
    return { dialog, items, items2 };
  },
  template: `
  <u-card class="mx-auto" max-width="365">
    <u-toolbar
      color="light-blue"
      extended
      light
    >
      <u-app-bar-nav-icon color="grey-darken-4"></u-app-bar-nav-icon>

      <u-toolbar-title>My files</u-toolbar-title>

      <u-btn color="grey-darken-4" icon="hugeicons:search-01"></u-btn>

    <u-btn color="grey-darken-4" icon="hugeicons:grid-view"></u-btn>

      <template v-slot:extension>
          <u-fab
          class="ms-4"
          color="cyan-accent-2"
          icon="hugeicons:add-01"
          location="bottom left"
          size="40"
          absolute
          offset
          @click="dialog = !dialog"
        ></u-fab>
      </template>
    </u-toolbar>

    <u-list lines="two">
      <u-list-subheader title="Folders" inset></u-list-subheader>

      <u-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <template v-slot:prepend>
          <u-avatar :class="[item.iconClass]" :icon="item.icon"></u-avatar>
        </template>

        <u-list-item-title>{{ item.title }}</u-list-item-title>

        <u-list-item-subtitle>{{ item.subtitle }}</u-list-item-subtitle>

        <template v-slot:append>
          <u-list-item-action>
            <u-btn color="grey-lighten-1" icon="hugeicons:information-circle" variant="text"></u-btn>
          </u-list-item-action>
        </template>
      </u-list-item>

      <u-divider inset></u-divider>

      <u-list-subheader title="Files" inset></u-list-subheader>

      <u-list-item
        v-for="item in items2"
        :key="item.title"
        link
      >
        <template v-slot:prepend>
          <u-avatar :class="[item.iconClass]" :icon="item.icon"></u-avatar>
        </template>

        <u-list-item-title>{{ item.title }}</u-list-item-title>

        <u-list-item-subtitle>{{ item.subtitle }}</u-list-item-subtitle>

        <template v-slot:append>
          <u-list-item-action>
            <u-btn color="grey-lighten-1" icon="hugeicons:information-circle" variant="text"></u-btn>
          </u-list-item-action>
        </template>
      </u-list-item>
    </u-list>

    <u-dialog
      v-model="dialog"
      max-width="500"
    >
      <u-card>
        <u-card-text>
          <u-text-field label="File name"></u-text-field>

          <small class="text-grey">* This doesn't actually save.</small>
        </u-card-text>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Submit
          </u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>
  </u-card>
  `,
});

SmallVariant.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-card class="mx-auto" max-width="365">
    <u-toolbar
      color="light-blue"
      extended
      light
    >
      <u-app-bar-nav-icon color="grey-darken-4"></u-app-bar-nav-icon>

      <u-toolbar-title>My files</u-toolbar-title>

      <u-btn color="grey-darken-4" icon="hugeicons:search-01"></u-btn>
      <u-btn color="grey-darken-4" icon="hugeicons:grid-view"></u-btn>

      <template v-slot:extension>
        <u-fab
          class="ms-4"
          color="cyan-accent-2"
          icon="hugeicons:add-01"
          location="bottom left"
          size="40"
          absolute
          offset
          @click="dialog = !dialog"
        ></u-fab>
      </template>
    </u-toolbar>

    <u-list lines="two">
      <u-list-subheader title="Folders" inset></u-list-subheader>

      <u-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <template v-slot:prepend>
          <u-avatar :class="[item.iconClass]" :icon="item.icon"></u-avatar>
        </template>

        <u-list-item-title>{{ item.title }}</u-list-item-title>

        <u-list-item-subtitle>{{ item.subtitle }}</u-list-item-subtitle>

        <template v-slot:append>
          <u-list-item-action>
            <u-btn color="grey-lighten-1" icon="hugeicons:information-circle" variant="text"></u-btn>
          </u-list-item-action>
        </template>
      </u-list-item>

      <u-divider inset></u-divider>

      <u-list-subheader title="Files" inset></u-list-subheader>

      <u-list-item
        v-for="item in items2"
        :key="item.title"
        link
      >
        <template v-slot:prepend>
          <u-avatar :class="[item.iconClass]" :icon="item.icon"></u-avatar>
        </template>

        <u-list-item-title>{{ item.title }}</u-list-item-title>

        <u-list-item-subtitle>{{ item.subtitle }}</u-list-item-subtitle>

        <template v-slot:append>
          <u-list-item-action>
            <u-btn color="grey-lighten-1" icon="hugeicons:information-circle" variant="text"></u-btn>
          </u-list-item-action>
        </template>
      </u-list-item>
    </u-list>

    <u-dialog
      v-model="dialog"
      max-width="500"
    >
      <u-card>
        <u-card-text>
          <u-text-field label="File name"></u-text-field>

          <small class="text-grey">* This doesn't actually save.</small>
        </u-card-text>

        <u-card-actions>
          <u-spacer></u-spacer>

          <u-btn
            color="primary"
            variant="text"
            @click="dialog = false"
          >
            Submit
          </u-btn>
        </u-card-actions>
      </u-card>
    </u-dialog>
  </u-card>
</template>
<script setup>
  import { ref } from 'vue'

  const dialog = ref(false)
  const items = ref([
    { icon: 'hugeicons:folder-01', iconClass: 'bg-grey text-white', title: 'Photos', subtitle: 'Jan 9, 2014' },
    { icon: 'hugeicons:folder-01', iconClass: 'bg-grey text-white', title: 'Recipes', subtitle: 'Jan 17, 2014' },
    { icon: 'hugeicons:folder-01', iconClass: 'bg-grey text-white', title: 'Work', subtitle: 'Jan 28, 2014' },
  ])
  const items2 = ref([
    { icon: 'hugeicons:clipboard', iconClass: 'bg-blue text-white', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
    { icon: 'hugeicons:tap-01', iconClass: 'bg-amber text-white', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' },
  ])
</script>
      `,
    },
  },
};

/* This is for documentation purposes and will not be needed in your application */
import './SpeedDial.story.scss';

export const SpeedDial: StoryFn<ComponentArgs> = () => ({
  components: {
    UApp,
    UCard,
    URow,
    UCol,
    URadioGroup,
    URadio,
    UFab,
    UIcon,
    USpeedDial,
    UBtn,
  },
  setup() {
    const open = shallowRef(false);
    const fabPosition = shallowRef('absolute');
    const menuLocation = shallowRef('left center');
    const fabLocation = shallowRef('right bottom');
    const transition = shallowRef('slide-y-reverse-transition');

    watch(menuLocation, reopen);
    watch(transition, reopen);
    watch(fabLocation, () => (open.value = false));
    watch(fabPosition, () => (open.value = false));

    function reopen() {
      open.value = false;
      setTimeout(() => (open.value = true), 400);
    }
    return { open, fabPosition, menuLocation, fabLocation, transition };
  },
  template: `
  <u-app id="appSpeedDial">
    <u-card class="pa-6 mb-6" variant="flat">
      <u-row dense>
        <u-col cols="12" sm="3">
          <h5>FAB position</h5>

          <u-radio-group v-model="fabPosition" density="compact" hide-details>
            <u-radio label="App (fixed)" value="fixed"></u-radio>
            <u-radio label="Absolute" value="absolute"></u-radio>
            <u-radio label="None" value=""></u-radio>
          </u-radio-group>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>FAB location</h5>

          <u-radio-group v-model="fabLocation" :disabled="!fabPosition" density="compact" hide-details>
            <div class="d-flex">
              <u-radio value="top left"></u-radio>
              <u-radio value="top center"></u-radio>
              <u-radio value="top right"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left center"></u-radio>
              <u-radio :disabled="fabPosition !== 'absolute'" value="center center"></u-radio>
              <u-radio value="right center"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left bottom"></u-radio>
              <u-radio value="bottom center"></u-radio>
              <u-radio value="right bottom"></u-radio>
            </div>
          </u-radio-group>

          <code>({{ fabLocation }})</code>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>Menu location</h5>

          <u-radio-group v-model="menuLocation" density="compact" hide-details>
            <div class="d-flex">
              <u-radio disabled></u-radio>
              <u-radio value="top left"></u-radio>
              <u-radio value="top center"></u-radio>
              <u-radio value="top right"></u-radio>
              <u-radio disabled></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left top"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right top"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left center"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="center"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right center"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left bottom"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right bottom"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio disabled></u-radio>
              <u-radio value="bottom left"></u-radio>
              <u-radio value="bottom center"></u-radio>
              <u-radio value="bottom right"></u-radio>
              <u-radio disabled></u-radio>
            </div>
          </u-radio-group>

          <code>({{ menuLocation }})</code>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>Transition</h5>

          <u-radio-group v-model="transition" density="compact" hide-details>
            <u-radio label="Fade" value="fade-transition"></u-radio>
            <u-radio label="Slide y" value="slide-y-transition"></u-radio>
            <u-radio label="Slide y reverse" value="slide-y-reverse-transition"></u-radio>
            <u-radio label="Slide x" value="slide-x-transition"></u-radio>
            <u-radio label="Slide x reverse" value="slide-x-reverse-transition"></u-radio>
            <u-radio label="Scale" value="scale-transition"></u-radio>
          </u-radio-group>
        </u-col>
      </u-row>
    </u-card>

    <u-card :class="fabPosition === 'absolute' ? 'demo-panel-relative' : 'demo-panel-static'" border flat>
      <u-fab
        :key="fabPosition"
        :absolute="fabPosition === 'absolute'"
        :app="fabPosition === 'fixed'"
        :color="open ? '' : 'primary'"
        :location="fabLocation"
        size="large"
        icon
      >
        <u-icon>{{ open ? 'hugeicons:cancel-01' : 'hugeicons:crown' }}</u-icon>
        <u-speed-dial v-model="open" :location="menuLocation" :transition="transition" activator="parent">
          <u-btn key="1" color="success" icon>
            <u-icon size="24">$success</u-icon>
          </u-btn>

          <u-btn key="2" color="info" icon>
            <u-icon size="24">$info</u-icon>
          </u-btn>

          <u-btn key="3" color="warning" icon>
            <u-icon size="24">$warning</u-icon>
          </u-btn>

          <u-btn key="4" color="error" icon>
            <u-icon size="24">$error</u-icon>
          </u-btn>
        </u-speed-dial>
      </u-fab>
    </u-card>
  </u-app>
  `,
});

SpeedDial.parameters = {
  docs: {
    source: {
      code: `
<template>
  <u-app>
    <u-card class="pa-6 mb-6" variant="flat">
      <u-row dense>
        <u-col cols="12" sm="3">
          <h5>FAB position</h5>

          <u-radio-group v-model="fabPosition" density="compact" hide-details>
            <u-radio label="App (fixed)" value="fixed"></u-radio>
            <u-radio label="Absolute" value="absolute"></u-radio>
            <u-radio label="None" value=""></u-radio>
          </u-radio-group>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>FAB location</h5>

          <u-radio-group v-model="fabLocation" :disabled="!fabPosition" density="compact" hide-details>
            <div class="d-flex">
              <u-radio value="top left"></u-radio>
              <u-radio value="top center"></u-radio>
              <u-radio value="top right"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left center"></u-radio>
              <u-radio :disabled="fabPosition !== 'absolute'" value="center center"></u-radio>
              <u-radio value="right center"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left bottom"></u-radio>
              <u-radio value="bottom center"></u-radio>
              <u-radio value="right bottom"></u-radio>
            </div>
          </u-radio-group>

          <code>({{ fabLocation }})</code>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>Menu location</h5>

          <u-radio-group v-model="menuLocation" density="compact" hide-details>
            <div class="d-flex">
              <u-radio disabled></u-radio>
              <u-radio value="top left"></u-radio>
              <u-radio value="top center"></u-radio>
              <u-radio value="top right"></u-radio>
              <u-radio disabled></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left top"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right top"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left center"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="center"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right center"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio value="left bottom"></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio disabled></u-radio>
              <u-radio value="right bottom"></u-radio>
            </div>

            <div class="d-flex">
              <u-radio disabled></u-radio>
              <u-radio value="bottom left"></u-radio>
              <u-radio value="bottom center"></u-radio>
              <u-radio value="bottom right"></u-radio>
              <u-radio disabled></u-radio>
            </div>
          </u-radio-group>

          <code>({{ menuLocation }})</code>
        </u-col>

        <u-col cols="12" sm="3">
          <h5>Transition</h5>

          <u-radio-group v-model="transition" density="compact" hide-details>
            <u-radio label="Fade" value="fade-transition"></u-radio>
            <u-radio label="Slide y" value="slide-y-transition"></u-radio>
            <u-radio label="Slide y reverse" value="slide-y-reverse-transition"></u-radio>
            <u-radio label="Slide x" value="slide-x-transition"></u-radio>
            <u-radio label="Slide x reverse" value="slide-x-reverse-transition"></u-radio>
            <u-radio label="Scale" value="scale-transition"></u-radio>
          </u-radio-group>
        </u-col>
      </u-row>
    </u-card>

    <u-card :class="fabPosition === 'absolute' ? 'demo-panel-relative' : 'demo-panel-static'" border flat>
      <u-fab
        :key="fabPosition"
        :absolute="fabPosition === 'absolute'"
        :app="fabPosition === 'fixed'"
        :color="open ? '' : 'primary'"
        :location="fabLocation"
        size="large"
        icon
      >
        <u-icon>{{ open ? 'hugeicons:cancel-01' : 'hugeicons:crown' }}</u-icon>
        <u-speed-dial v-model="open" :location="menuLocation" :transition="transition" activator="parent">
          <u-btn key="1" color="success" icon>
            <u-icon size="24">$success</u-icon>
          </u-btn>

          <u-btn key="2" color="info" icon>
            <u-icon size="24">$info</u-icon>
          </u-btn>
          <u-btn key="3" color="warning" icon>
            <u-icon size="24">$warning</u-icon>
          </u-btn>

          <u-btn key="4" color="error" icon>
            <u-icon size="24">$error</u-icon>
          </u-btn>
        </u-speed-dial>
      </u-fab>
    </u-card>
  </u-app>
</template>
<script setup>
  import { shallowRef, watch } from 'vue'

  const open = shallowRef(false)
  const fabPosition = shallowRef('absolute')
  const menuLocation = shallowRef('left center')
  const fabLocation = shallowRef('right bottom')
  const transition = shallowRef('slide-y-reverse-transition')

  watch(menuLocation, reopen)
  watch(transition, reopen)
  watch(fabLocation, () => open.value = false)
  watch(fabPosition, () => open.value = false)

  function reopen () {
    open.value = false
    setTimeout(() => open.value = true, 400)
  }
</script>
<style scoped>
/* This is for documentation purposes and will not be needed in your application */
::v-deep(.v-application__wrap) {
  min-height: 0 !important;
}

.demo-panel-static,
.demo-panel-relative {
  margin: 0 80px 50px;
  padding: 24px;
  min-height: 300px;
}
.demo-panel-static {
  position: static;
}
.demo-panel-relative {
  position: relative;
}

.v-selection-control--disabled,
.v-input--disabled .v-selection-control {
  opacity: .1;
}

.v-radio {
  flex-grow: 0 !important;
}

h5 {
  margin-bottom: 12px;
}

code {
  display: block;
  font-size: .8rem;
  margin-top: 12px;
}

::v-deep(.v-label) {
  margin-left: 8px;
}
</style>
      `,
    },
  },
};
