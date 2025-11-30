import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UBtn,
  UCardActions,
  UCheckbox,
  UCol,
  UDivider,
  UExpansionPanel,
  UExpansionPanels,
  UExpansionPanelText,
  UExpansionPanelTitle,
  UFadeTransition,
  UIcon,
  URow,
  USelect,
  USpacer,
  UTextField,
} from '../index';

interface ComponentArgs {
  bgColor?: string;
  collapseIcon?: string;
  color?: string;
  disabled?: boolean;
  eager?: boolean;
  elevation?: string | number;
  expandIcon?: string;
  flat?: boolean;
  focusable?: boolean;
  hideActions?: boolean;
  mandatory?: boolean | 'force';
  max?: number;
  modelValue?: unknown;
  multiple?: boolean;
  readonly?: boolean;
  ripple?: boolean | { class: string };
  rounded?: string | number | boolean;
  selectedClass?: string;
  static?: boolean;
  tag?: string;
  theme?: string;
  tile?: boolean;
  variant?: 'default' | 'accordion' | 'inset' | 'popout';
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Containment/Expansion Panels',
  component: UExpansionPanels,
  parameters: {
    docs: {
      description: {
        component:
          'The u-expansion-panel component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the multiple property, the expansion-panel can remain open until explicitly closed.',
      },
      import: `import { UExpansionPanels } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;

          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false && value !== 'default')
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}="${JSON.stringify(value)}"`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';

          return `<template>
  <u-expansion-panels${attrsString}>
    <u-expansion-panel
      title="Title"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
    >
    </u-expansion-panel>
  </u-expansion-panels>
</template>`;
        },
      },
    },
    Primary: {
      description:
        'Expansion panels in their simplest form display a list of expandable items. You can either declare the markup explicitly, or use the title and text props.',
    },
    Vuetify: {
      component: 'VExpansionPanels',
      content:
        "This component is built on top of Vuetify's VExpansionPanels component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/expansion-panels/',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-expansion-panels',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panels/',
          },
          description: 'Primary component',
        },
        {
          element: {
            title: 'v-expansion-panel',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel/',
          },
          description:
            'Sub-component that wraps v-expansion-panel-text and v-expansion-panel-title',
        },
        {
          element: {
            title: 'v-expansion-panel-text',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel-text/',
          },
          description:
            'Sub-component used to display the Expanion Panel’s text. Wraps the #text slot',
        },
        {
          element: {
            title: 'v-expansion-panel-title',
            link: 'https://vuetifyjs.com/en/api/v-expansion-panel-title/',
          },
          description:
            '	Sub-component used to display the Expansion Panel’s title. Wraps the #title slot',
        },
      ],
    },
  },
  argTypes: {
    bgColor: {
      control: 'color',
      description: "Applies specified color to the control's background.",
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    collapseIcon: {
      control: 'text',
      description: 'Icon used when the expansion panel is in a collapsable state.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$collapse'" } },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Puts all children components into a disabled state.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    eager: {
      control: 'boolean',
      description:
        "Forces the component's content to render when it mounts. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    elevation: {
      control: 'text',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    expandIcon: {
      control: 'text',
      description: 'Icon used when the expansion panel is in a expandable state.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'$expand'" } },
    },
    flat: {
      control: 'boolean',
      description: "Removes the expansion-panel's elevation and borders.",
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    focusable: {
      control: 'boolean',
      description: 'Makes the expansion-panel headers focusable.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    hideActions: {
      control: 'boolean',
      description: 'Hide the expand icon in the content title.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    mandatory: {
      control: { type: 'select' },
      options: [false, true, 'force'],
      description: 'Forces at least one item to always be selected (if available).',
      table: { type: { summary: "boolean | 'force'" }, defaultValue: { summary: 'false' } },
    },
    max: {
      control: 'number',
      description: 'Sets a maximum number of selections that can be made.',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'undefined' } },
    },
    modelValue: {
      control: 'text',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: { type: { summary: 'any' }, defaultValue: { summary: 'undefined' } },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows one to select multiple items.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    readonly: {
      control: 'boolean',
      description: 'Makes the entire expansion panel read only.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    ripple: {
      control: 'boolean',
      description: 'Applies the v-ripple directive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius applied to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    selectedClass: {
      control: 'text',
      description: 'Configure the active CSS class applied when an item is selected.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    static: {
      control: 'boolean',
      description: 'Remove title size expansion when selected.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'div'" } },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    tile: {
      control: 'boolean',
      description: 'Removes the border-radius.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'accordion', 'inset', 'popout'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: "'default' | 'accordion' | 'inset' | 'popout'" },
        defaultValue: { summary: "'default'" },
      },
    },
  },
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UExpansionPanels, UExpansionPanel },
  setup() {
    return { args };
  },
  template: `
    <u-expansion-panels v-bind="args">
      <u-expansion-panel
        title="Title"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
      >
      </u-expansion-panel>
    </u-expansion-panels>
  `,
});

Default.args = {} as ComponentArgs;

// Variant Story
const variantTemplate = `
    <div>
      <div class="text-subtitle-2 mb-2">Default</div>
      <u-expansion-panels>
        <u-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></u-expansion-panel>
      </u-expansion-panels>

      <div class="text-subtitle-2 mt-4 mb-2">Accordion</div>

      <u-expansion-panels variant="accordion">
        <u-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></u-expansion-panel>
      </u-expansion-panels>

      <div class="text-subtitle-2 mt-4 mb-2">Inset</div>

      <u-expansion-panels class="my-4" variant="inset">
        <u-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></u-expansion-panel>
      </u-expansion-panels>

      <div class="text-subtitle-2 mt-4 mb-2">Popout</div>

      <u-expansion-panels class="my-4" variant="popout">
        <u-expansion-panel
          v-for="i in 3"
          :key="i"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          title="Item"
        ></u-expansion-panel>
      </u-expansion-panels>
    </div>
  `;

/**
 * There are four different variants of the expansion-panel. Accordion expansion-panels have no margins around the currently active panel. Inset expansion-panels become smaller when activated, while popout expansion-panels become larger.
 */
export const Variant: StoryFn<ComponentArgs> = () => ({
  components: { UExpansionPanel, UExpansionPanels },
  template: variantTemplate,
});

Variant.parameters = {
  docs: {
    source: {
      code: `<template>${variantTemplate}</template>`,
    },
  },
};

// Disabled Story
const disabledTemplate = `
    <div>
      <div class="d-flex">
        <u-checkbox
          v-model="disabled"
          label="Disabled"
          id="disabled-checkbox"
        ></u-checkbox>
      </div>

      <u-expansion-panels
        v-model="panel"
        :disabled="disabled"
        multiple
      >
        <u-expansion-panel>
          <u-expansion-panel-title>Panel 1</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title>Panel 2</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title>Panel 3</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>
      </u-expansion-panels>
    </div>
  `;

/**
 * Both the expansion-panel and its content can be disabled using the disabled prop.
 */
export const Disabled: StoryFn<ComponentArgs> = () => ({
  components: {
    UExpansionPanels,
    UExpansionPanel,
    UExpansionPanelTitle,
    UExpansionPanelText,
    UCheckbox,
  },
  setup() {
    const panel = ref([0, 1]);
    const disabled = ref(false);
    return { panel, disabled };
  },
  template: disabledTemplate,
});

Disabled.parameters = {
  docs: {
    source: {
      code: `
<template>${disabledTemplate}</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const panel = ref([0, 1]);
  const disabled = ref(false);
</script>`,
    },
  },
};

// Readonly Story
const readonlyTemplate = `
    <div>
      <div class="d-flex">
        <u-checkbox
          v-model="readonly"
          label="Readonly"
          id="readonly-checkbox"
        ></u-checkbox>
      </div>

      <u-expansion-panels
        v-model="panel"
        :readonly="readonly"
        multiple
      >
        <u-expansion-panel>
          <u-expansion-panel-title>Panel 1</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title>Panel 2</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title>Panel 3</u-expansion-panel-title>
          <u-expansion-panel-text>
            Some content
          </u-expansion-panel-text>
        </u-expansion-panel>
      </u-expansion-panels>
    </div>
  `;

/**
 * readonly prop does the same thing as disabled, but it doesn't touch styles.
 */
export const Readonly: StoryFn<ComponentArgs> = () => ({
  components: {
    UExpansionPanels,
    UExpansionPanel,
    UExpansionPanelTitle,
    UExpansionPanelText,
    UCheckbox,
  },
  setup() {
    const panel = ref([0, 1]);
    const readonly = ref(false);
    return { panel, readonly };
  },
  template: readonlyTemplate,
});

Readonly.parameters = {
  docs: {
    source: {
      code: `
<template>${readonlyTemplate}</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const panel = ref([0, 1]);
  const readonly = ref(false);
</script>`,
    },
  },
};

// Advanced Story
const advancedTemplate = `
    <u-expansion-panels>
      <u-expansion-panel>
        <u-expansion-panel-title>
          <template #default="{ expanded }">
            <u-row no-gutters>
              <u-col class="d-flex justify-start" cols="4">
                Trip name
              </u-col>
              <u-col
                class="text-grey"
                cols="8"
              >
                <u-fade-transition leave-absolute>
                  <span
                    v-if="expanded"
                    key="0"
                  >
                    Enter a name for the trip
                  </span>
                  <span
                    v-else
                    key="1"
                  >
                    {{ trip.name }}
                  </span>
                </u-fade-transition>
              </u-col>
            </u-row>
          </template>
        </u-expansion-panel-title>
        <u-expansion-panel-text>
          <u-text-field
            v-model="trip.name"
            placeholder="Caribbean Cruise"
            hide-details
          ></u-text-field>
        </u-expansion-panel-text>
      </u-expansion-panel>

      <u-expansion-panel>
        <u-expansion-panel-title>
          <template #default="{ expanded }">
            <u-row no-gutters>
              <u-col class="d-flex justify-start" cols="4">
                Location
              </u-col>
              <u-col
                class="text--secondary"
                cols="8"
              >
                <u-fade-transition leave-absolute>
                  <span
                    v-if="expanded"
                    key="0"
                  >
                    Select trip destination
                  </span>
                  <span
                    v-else
                    key="1"
                  >
                    {{ trip.location }}
                  </span>
                </u-fade-transition>
              </u-col>
            </u-row>
          </template>
        </u-expansion-panel-title>
        <u-expansion-panel-text>
          <u-row no-gutters>
            <u-spacer></u-spacer>
            <u-col cols="5">
              <u-select
                v-model="trip.location"
                :items="locations"
                variant="solo"
                chips
                flat
              ></u-select>
            </u-col>

            <u-divider
              class="mx-4"
              vertical
            ></u-divider>

            <u-col cols="3">
              Select your destination of choice
              <br>
              <a href="#">Learn more</a>
            </u-col>
          </u-row>

          <u-card-actions>
            <u-spacer></u-spacer>
            <u-btn
              color="secondary"
              variant="text"
            >
              Cancel
            </u-btn>
            <u-btn
              color="primary"
              variant="text"
            >
              Save
            </u-btn>
          </u-card-actions>
        </u-expansion-panel-text>
      </u-expansion-panel>

      <u-expansion-panel>
        <u-expansion-panel-title>
          <template #default="{ expanded }">
            <u-row no-gutters>
              <u-col class="d-flex justify-start" cols="4">
                Start and end dates
              </u-col>
              <u-col
                class="text--secondary"
                cols="8"
              >
                <u-fade-transition leave-absolute>
                  <span v-if="expanded">When do you want to travel?</span>
                  <u-row
                    v-else
                    style="width: 100%"
                    no-gutters
                  >
                    <u-col class="d-flex justify-start" cols="6">
                      Start date: {{ trip.start || 'Not set' }}
                    </u-col>
                    <u-col class="d-flex justify-start" cols="6">
                      End date: {{ trip.end || 'Not set' }}
                    </u-col>
                  </u-row>
                </u-fade-transition>
              </u-col>
            </u-row>
          </template>
        </u-expansion-panel-title>
        <u-expansion-panel-text>
          <u-row
            justify="space-around"
            no-gutters
          >
            <u-col cols="3">
              <u-text-field
                v-model="trip.start"
                label="Start date"
                type="date"
              ></u-text-field>
            </u-col>

            <u-col cols="3">
              <u-text-field
                v-model="trip.end"
                label="End date"
                type="date"
              ></u-text-field>
            </u-col>
          </u-row>
        </u-expansion-panel-text>
      </u-expansion-panel>
    </u-expansion-panels>
  `;

/**
 * The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the u-expansion-panel-title component to react to the state of being open or closed by fading content in and out.
 */
export const Advanced: StoryFn<ComponentArgs> = () => ({
  components: {
    UExpansionPanels,
    UExpansionPanel,
    UExpansionPanelTitle,
    UExpansionPanelText,
    UFadeTransition,
    URow,
    UCol,
    UTextField,
    USelect,
    USpacer,
    UDivider,
    UCardActions,
    UBtn,
  },
  setup() {
    const locations = ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'];

    const trip = ref({
      name: '',
      location: null as string | null,
      start: null as string | null,
      end: null as string | null,
    });

    return { locations, trip };
  },
  template: advancedTemplate,
});

Advanced.parameters = {
  docs: {
    source: {
      code: `
<template>${advancedTemplate}</template>

<script setup lang="ts">
  import { ref } from 'vue';

  const locations = ['Australia', 'Barbados', 'Chile', 'Denmark', 'Ecuador', 'France'];

  const trip = ref({
    name: '',
    location: null,
    start: null,
    end: null,
  });
</script>`,
    },
  },
};

// Custom Icon Story
const customIconTemplate = `
    <div>
      <u-expansion-panels class="mb-6">
        <u-expansion-panel
          v-for="i in 3"
          :key="i"
        >
          <u-expansion-panel-title expand-icon="hugeicons:arrow-down-01">
            Item
          </u-expansion-panel-title>
          <u-expansion-panel-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</u-expansion-panel-text>
        </u-expansion-panel>
      </u-expansion-panels>

      <u-expansion-panels>
        <u-expansion-panel>
          <u-expansion-panel-title collapse-icon="hugeicons:minus-sign" expand-icon="hugeicons:add-01">
            Item
          </u-expansion-panel-title>
          <u-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title>
            Item
            <template #actions="{ expanded }">
              <u-icon :color="!expanded ? 'teal' : ''" :icon="expanded ? 'hugeicons:pencil-edit-02' : 'hugeicons:tick-01'"></u-icon>
            </template>
          </u-expansion-panel-title>
          <u-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </u-expansion-panel-text>
        </u-expansion-panel>

        <u-expansion-panel>
          <u-expansion-panel-title disable-icon-rotate>
            Item
            <template #actions>
              <u-icon color="error" icon="hugeicons:alert-02">
              </u-icon>
            </template>
          </u-expansion-panel-title>
          <u-expansion-panel-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </u-expansion-panel-text>
        </u-expansion-panel>
      </u-expansion-panels>
    </div>
  `;

/**
 * Expand action icon can be customized with expand-icon prop or the actions slot.
 */
export const CustomIcon: StoryFn<ComponentArgs> = () => ({
  components: {
    UExpansionPanels,
    UExpansionPanel,
    UExpansionPanelTitle,
    UExpansionPanelText,
    UIcon,
  },
  template: customIconTemplate,
});

CustomIcon.parameters = {
  docs: {
    source: {
      code: `<template>${customIconTemplate}</template>`,
    },
  },
};
