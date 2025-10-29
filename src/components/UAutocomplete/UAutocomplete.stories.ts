import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UAutocomplete,
  UBtn,
  UCard,
  UCardActions,
  UCardText,
  UCol,
  UContainer,
  UDivider,
  UIcon,
  UListSubheader,
  URow,
  USnackbar,
  UTextField,
  UToolbar,
} from '../index';

interface ComponentArgs {
  items?: unknown[];
  label?: string;
  placeholder?: string;
  density?: 'default' | 'comfortable' | 'compact';
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  clearable?: boolean;
  chips?: boolean;
  multiple?: boolean;
  autoSelectFirst?: boolean | 'exact';
  hideNoData?: boolean;
  hideSelected?: boolean;
  noFilter?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  loading?: boolean;
  hint?: string;
  persistentHint?: boolean;
  color?: string;
  baseColor?: string;
  bgColor?: string;
  rules?: unknown[];
  errorMessages?: string | string[];
  counter?: string | number | boolean;
  autofocus?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/Autocompletes',
  component: UAutocomplete,
  parameters: {
    docs: {
      description: {
        component:
          'The u-autocomplete component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.',
      },
      import: `import { UAutocomplete } from '@ultimate/core-ui/components'`,
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

          return `<UAutocomplete${attrsString}></UAutocomplete>`;
        },
      },
    },
    Vuetify: {
      component: 'VAutocomplete',
      content:
        "This component is built on top of Vuetify's VAutocomplete component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/autocompletes/',
    },
    Primary: {
      description:
        'The autocomplete component extends v-select and adds the ability to filter items.',
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description:
        'Can be an array of objects or strings. By default objects should have title and value properties.',
      table: {
        type: { summary: 'any[]' },
        defaultValue: { summary: '[]' },
      },
    },
    label: {
      control: 'text',
      description: 'Sets the text of the label component.',
      table: {
        type: { summary: 'string' },
      },
    },
    placeholder: {
      control: 'text',
      description: "Sets the input's placeholder text.",
      table: {
        type: { summary: 'string' },
      },
    },
    density: {
      control: { type: 'select' },
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: 'default | comfortable | compact' },
        defaultValue: { summary: 'default' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: [
        'outlined',
        'plain',
        'underlined',
        'filled',
        'solo',
        'solo-inverted',
        'solo-filled',
      ],
      description: 'Applies a distinct style to the component.',
      table: {
        type: {
          summary: 'outlined | plain | underlined | filled | solo | solo-inverted | solo-filled',
        },
        defaultValue: { summary: 'filled' },
      },
    },
    clearable: {
      control: 'boolean',
      description: 'Allows for the component to be cleared.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    chips: {
      control: 'boolean',
      description: 'Changes display of selections to chips.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Changes select to multiple. Accepts array for value.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autoSelectFirst: {
      control: { type: 'select' },
      options: [false, true, 'exact'],
      description:
        "When searching, will always highlight the first option and select it on blur. 'exact' will only highlight and select exact matches.",
      table: {
        type: { summary: 'boolean | "exact"' },
        defaultValue: { summary: 'false' },
      },
    },
    hideNoData: {
      control: 'boolean',
      description:
        'Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hideSelected: {
      control: 'boolean',
      description: 'Do not display in the select menu items that are already selected.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    noFilter: {
      control: 'boolean',
      description:
        'Do not apply filtering when searching. Useful when data is being filtered server side.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the input.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    readonly: {
      control: 'boolean',
      description: 'Puts input in readonly state.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loading: {
      control: 'boolean',
      description:
        'Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar or a Boolean which uses the component color.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    hint: {
      control: 'text',
      description:
        'Displays hint text below the input when focused. Force this always open with the persistent-hint property.',
      table: {
        type: { summary: 'string' },
      },
    },
    persistentHint: {
      control: 'boolean',
      description: 'Forces hint to always be visible.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    color: {
      control: 'color',
      description: 'Applies specified color to the control - supports utility colors or css color.',
      table: {
        type: { summary: 'string' },
      },
    },
    baseColor: {
      control: 'color',
      description: 'Sets the color of the input when it is not focused.',
      table: {
        type: { summary: 'string' },
      },
    },
    bgColor: {
      control: 'color',
      description: "Applies specified color to the control's background.",
      table: {
        type: { summary: 'string' },
      },
    },
    rules: {
      control: 'object',
      description:
        'Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message.',
      table: {
        type: { summary: 'array' },
        defaultValue: { summary: '[]' },
      },
    },
    errorMessages: {
      control: 'text',
      description: 'Puts the input in an error state and passes through custom error messages.',
      table: {
        type: { summary: 'string | string[]' },
        defaultValue: { summary: '[]' },
      },
    },
    counter: {
      control: 'text',
      description:
        'Creates counter for input length; if no number is specified, it defaults to 25.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    autofocus: {
      control: 'boolean',
      description: 'Enables autofocus.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UAutocomplete },
  setup() {
    return { args };
  },
  template: '<UAutocomplete v-bind="args"></UAutocomplete>',
});

Default.args = {
  label: 'Autocomplete',
  placeholder: 'Start typing to search...',
  items: ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming'],
  clearable: true,
} as ComponentArgs;

// Density Story
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { UAutocomplete, UCard, UContainer, URow, UCol },
  setup() {
    const items = ['foo', 'bar', 'fizz', 'buzz'];
    const values = ref('foo');

    return { items, values };
  },
  template: `
    <u-card>
      <u-container fluid>
        <u-row>
          <u-col cols="12">
            <u-autocomplete
              v-model="values"
              :items="items"
              label="Default"
            ></u-autocomplete>
          </u-col>

          <u-col cols="12">
            <u-autocomplete
              v-model="values"
              :items="items"
              density="comfortable"
              label="Comfortable"
            ></u-autocomplete>
          </u-col>

          <u-col cols="12">
            <u-autocomplete
              v-model="values"
              :items="items"
              density="compact"
              label="Compact"
            ></u-autocomplete>
          </u-col>
        </u-row>
      </u-container>
    </u-card>
  `,
});

Density.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card>
            <u-container fluid>
              <u-row>
                <u-col cols="12">
                  <u-autocomplete
                    v-model="values"
                    :items="items"
                    label="Default"
                  ></u-autocomplete>
                </u-col>

                <u-col cols="12">
                  <u-autocomplete
                    v-model="values"
                    :items="items"
                    density="comfortable"
                    label="Comfortable"
                  ></u-autocomplete>
                </u-col>

                <u-col cols="12">
                  <u-autocomplete
                    v-model="values"
                    :items="items"
                    density="compact"
                    label="Compact"
                  ></u-autocomplete>
                </u-col>
              </u-row>
            </u-container>
          </u-card>
        </template>

        <script setup>
          import { ref } from 'vue'

          const items = ['foo', 'bar', 'fizz', 'buzz']
          const values = ref('foo')
        </script>
      `,
    },
  },
};

// Filter Story
export const Filter: StoryFn<ComponentArgs> = () => ({
  components: {
    UAutocomplete,
    UCard,
    UCardActions,
    UCardText,
    UToolbar,
    UBtn,
    UIcon,
    UTextField,
    UDivider,
    USnackbar,
  },
  setup() {
    const states = [
      { name: 'Florida', abbr: 'FL', id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2 },
      { name: 'Nebraska', abbr: 'NE', id: 3 },
      { name: 'California', abbr: 'CA', id: 4 },
      { name: 'New York', abbr: 'NY', id: 5 },
    ];

    const hasSaved = ref(false);
    const isEditing = ref(false);

    function customFilter(itemTitle: string, queryText: string, item: Record<string, unknown>) {
      const raw = item.raw as { name: string; abbr: string };
      const textOne = raw.name.toLowerCase();
      const textTwo = raw.abbr.toLowerCase();
      const searchText = queryText.toLowerCase();
      return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1;
    }

    function save() {
      isEditing.value = !isEditing.value;
      hasSaved.value = true;
    }

    return { states, hasSaved, isEditing, customFilter, save };
  },
  template: `
    <u-card
      class="mx-auto"
      color="purple-lighten-1"
      max-width="500"
    >
      <u-toolbar color="purple" flat>
        <u-btn icon="mdi-account"></u-btn>

        <template #title>
          <span class="font-weight-light">User Profile</span>
        </template>

        <u-btn
          icon
          @click="isEditing = !isEditing"
        >
          <u-icon v-if="isEditing">mdi-close</u-icon>
          <u-icon v-else>mdi-pencil</u-icon>
        </u-btn>
      </u-toolbar>

      <u-card-text>
        <u-text-field
          :disabled="!isEditing"
          base-color="white"
          label="Name"
        ></u-text-field>

        <u-autocomplete
          :custom-filter="customFilter"
          :disabled="!isEditing"
          :items="states"
          base-color="white"
          item-title="name"
          item-value="abbr"
          label="State"
        ></u-autocomplete>
      </u-card-text>

      <u-divider></u-divider>

      <u-card-actions>
        <u-spacer></u-spacer>

        <u-btn
          :disabled="!isEditing"
          @click="save"
        >
          Save
        </u-btn>
      </u-card-actions>

      <u-snackbar
        v-model="hasSaved"
        :timeout="2000"
        location="bottom left"
        position="absolute"
        attach
      >
        Your profile has been updated
      </u-snackbar>
    </u-card>
  `,
});

Filter.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-card
            class="mx-auto"
            color="purple-lighten-1"
            max-width="500"
          >
            <u-toolbar color="purple" flat>
              <u-btn icon="mdi-account"></u-btn>

              <template #title>
                <span class="font-weight-light">User Profile</span>
              </template>

              <u-btn
                icon
                @click="isEditing = !isEditing"
              >
                <u-icon v-if="isEditing">mdi-close</u-icon>
                <u-icon v-else>mdi-pencil</u-icon>
              </u-btn>
            </u-toolbar>

            <u-card-text>
              <u-text-field
                :disabled="!isEditing"
                base-color="white"
                label="Name"
              ></u-text-field>

              <u-autocomplete
                :custom-filter="customFilter"
                :disabled="!isEditing"
                :items="states"
                base-color="white"
                item-title="name"
                item-value="abbr"
                label="State"
              ></u-autocomplete>
            </u-card-text>

            <u-divider></u-divider>

            <u-card-actions>
              <u-spacer></u-spacer>

              <u-btn
                :disabled="!isEditing"
                @click="save"
              >
                Save
              </u-btn>
            </u-card-actions>

            <u-snackbar
              v-model="hasSaved"
              :timeout="2000"
              location="bottom left"
              position="absolute"
              attach
            >
              Your profile has been updated
            </u-snackbar>
          </u-card>
        </template>

        <script setup>
          import { ref } from 'vue'

          const states = [
            { name: 'Florida', abbr: 'FL', id: 1 },
            { name: 'Georgia', abbr: 'GA', id: 2 },
            { name: 'Nebraska', abbr: 'NE', id: 3 },
            { name: 'California', abbr: 'CA', id: 4 },
            { name: 'New York', abbr: 'NY', id: 5 },
          ]

          const hasSaved = ref(false)
          const isEditing = ref(false)

          function customFilter (itemTitle, queryText, item) {
            const textOne = item.raw.name.toLowerCase()
            const textTwo = item.raw.abbr.toLowerCase()
            const searchText = queryText.toLowerCase()
            return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
          }

          function save () {
            isEditing.value = !isEditing.value
            hasSaved.value = true
          }
        </script>
      `,
    },
  },
};

// Filter Keys Story
export const FilterKeys: StoryFn<ComponentArgs> = () => ({
  components: { UAutocomplete, UContainer },
  setup() {
    const states = [
      { name: 'Florida', abbr: 'FL' },
      { name: 'Georgia', abbr: 'GA' },
      { name: 'Nebraska', abbr: 'NE' },
      { name: 'California', abbr: 'CA' },
      { name: 'New York', abbr: 'NY' },
    ];

    return { states };
  },
  template: `
    <u-container fluid>
      <u-autocomplete
        :filter-keys="['title', 'raw.abbr']"
        :items="states"
        item-title="name"
        label="State"
      ></u-autocomplete>
    </u-container>
  `,
});

FilterKeys.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container fluid>
            <u-autocomplete
              :filter-keys="['title', 'raw.abbr']"
              :items="states"
              item-title="name"
              label="State"
            ></u-autocomplete>
          </u-container>
        </template>

        <script setup>
          const states = [
            { name: 'Florida', abbr: 'FL' },
            { name: 'Georgia', abbr: 'GA' },
            { name: 'Nebraska', abbr: 'NE' },
            { name: 'California', abbr: 'CA' },
            { name: 'New York', abbr: 'NY' },
          ]
        </script>
      `,
    },
  },
};

// Subheaders and Dividers Story
export const SubheadersAndDividers: StoryFn<ComponentArgs> = () => ({
  components: {
    UAutocomplete,
    UContainer,
    UDivider,
    UListSubheader,
  },
  setup() {
    const items = [
      { type: 'subheader', title: 'Group 1' },
      { title: 'Item 1.1', value: 11 },
      { title: 'Item 1.2', value: 12 },
      { title: 'Item 1.3', value: 13 },
      { title: 'Item 1.4', value: 14 },
      { type: 'divider', text: 'or' },
      { type: 'subheader', title: 'Group 2' },
      { title: 'Item 2.1', value: 21 },
      { title: 'Item 2.2', value: 22 },
      { title: 'Item 2.3', value: 23 },
    ];

    return { items };
  },
  template: `
    <u-container>
      <u-autocomplete 
        :items="items" 
        label="Special items like in VList" 
        chips 
        multiple
      ></u-autocomplete>

      <u-autocomplete 
        :items="items" 
        label="I have custom divider" 
        chips 
        multiple
      >
        <template v-slot:divider="{ props }">
          <div class="d-flex ga-4 align-center">
            <u-divider></u-divider>
            {{ props.text }}
            <u-divider></u-divider>
          </div>
        </template>
      </u-autocomplete>

      <u-autocomplete 
        :items="items" 
        label="I have custom subheader" 
        chips 
        multiple
      >
        <template v-slot:subheader="{ props }">
          <u-list-subheader class="font-weight-bold bg-primary">
            {{ props.title }}
          </u-list-subheader>
        </template>
      </u-autocomplete>
    </u-container>
  `,
});

SubheadersAndDividers.parameters = {
  docs: {
    source: {
      code: `
        <template>
          <u-container>
            <u-autocomplete 
              :items="items" 
              label="Special items like in VList" 
              chips 
              multiple
            ></u-autocomplete>

            <u-autocomplete 
              :items="items" 
              label="I have custom divider" 
              chips 
              multiple
            >
              <template v-slot:divider="{ props }">
                <div class="d-flex ga-4 align-center">
                  <u-divider></u-divider>
                  {{ props.text }}
                  <u-divider></u-divider>
                </div>
              </template>
            </u-autocomplete>

            <u-autocomplete 
              :items="items" 
              label="I have custom subheader" 
              chips 
              multiple
            >
              <template v-slot:subheader="{ props }">
                <u-list-subheader class="font-weight-bold bg-primary">
                  {{ props.title }}
                </u-list-subheader>
              </template>
            </u-autocomplete>
          </u-container>
        </template>

        <script setup>
          const items = [
            { type: 'subheader', title: 'Group 1' },
            { title: 'Item 1.1', value: 11 },
            { title: 'Item 1.2', value: 12 },
            { title: 'Item 1.3', value: 13 },
            { title: 'Item 1.4', value: 14 },
            { type: 'divider', text: 'or' },
            { type: 'subheader', title: 'Group 2' },
            { title: 'Item 2.1', value: 21 },
            { title: 'Item 2.2', value: 22 },
            { title: 'Item 2.3', value: 23 },
          ]
        </script>
      `,
    },
  },
};
