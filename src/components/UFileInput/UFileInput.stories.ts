import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UFileInput } from './index';

interface ComponentArgs {
  label?: string;
  accept?: string;
  chips?: boolean;
  multiple?: boolean;
  counter?: boolean;
  showSize?: boolean | 1000 | 1024;
  density?: 'default' | 'comfortable' | 'compact';
  prependIcon?: string;
  appendIcon?: string;
  appendInnerIcon?: string;
  prependInnerIcon?: string;
  clearIcon?: string;
  rules?: unknown[];
  placeholder?: string;
  variant?:
    | 'outlined'
    | 'plain'
    | 'underlined'
    | 'filled'
    | 'solo'
    | 'solo-inverted'
    | 'solo-filled';
  color?: string;
  bgColor?: string;
  baseColor?: string;
  clearable?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  hideDetails?: boolean | 'auto';
  hint?: string;
  persistentHint?: boolean;
  error?: boolean;
  errorMessages?: string | string[];
  messages?: string | string[];
  validateOn?: string;
  loading?: string | boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/File Inputs',
  component: UFileInput,
  parameters: {
    docs: {
      description: {
        component:
          'The u-file-input component is a specialized input that provides a clean interface for selecting files, showing detailed selection information and upload progress. It is meant to be a direct replacement for a standard file input.',
      },
      import: `import { UFileInput } from '@ultimate/core-ui/components'`,
      source: {
        // Render examples using the library kebab-case component name
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

          return `<u-file-input${attrsString}></u-file-input>`;
        },
      },
    },
    Vuetify: {
      component: 'VFileInput',
      content:
        "v-file-input is built on top of Vuetify's VFileInput / VTextField primitives and exposes the same primary API surface. See the Vuetify docs for low-level behavior.",
      link: 'https://vuetifyjs.com/en/components/file-inputs/',
    },
    Primary: {
      description:
        'At its core, the u-file-input component is a basic container that extends v-text-field.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-file-input',
            link: 'https://vuetifyjs.com/en/api/v-file-input/',
          },
          description: 'Primary component',
        },
      ],
    },
  },
  argTypes: {
    label: { control: 'text', description: 'Sets the text of the label' },
    accept: { control: 'text', description: 'Accept only specific media formats/file types' },
    chips: { control: 'boolean', description: 'Changes display of selections to chips' },
    multiple: {
      control: 'boolean',
      description: 'Adds the multiple attribute to the input, allowing multiple file selections',
    },
    counter: { control: 'boolean', description: 'Displays the number of selected files' },
    showSize: {
      control: 'boolean',
      description:
        'Sets the displayed size of selected file(s). When using true will default to 1000 displaying (kB, MB, GB) while 1024 will display (KiB, MiB, GiB)',
    },
    density: {
      control: { type: 'select', options: ['default', 'comfortable', 'compact'] },
      description: 'Adjusts the vertical height used by the component',
    },
    prependIcon: { control: 'text', description: 'Prepends an icon to the component' },
    appendIcon: {
      control: 'text',
      description: 'Creates a v-icon component after default content in the append slot',
    },
    appendInnerIcon: {
      control: 'text',
      description: 'Creates a v-icon component in the append-inner slot',
    },
    prependInnerIcon: {
      control: 'text',
      description: 'Creates a v-icon component in the prepend-inner slot',
    },
    clearIcon: {
      control: 'text',
      description: 'The icon used when the clearable prop is set to true',
    },
    placeholder: { control: 'text', description: 'Sets the input placeholder text' },
    variant: {
      control: {
        type: 'select',
        options: [
          'outlined',
          'plain',
          'underlined',
          'filled',
          'solo',
          'solo-inverted',
          'solo-filled',
        ],
      },
      description: 'Applies a distinct style to the component',
    },
    color: { control: 'text', description: 'Applies specified color to the control' },
    bgColor: {
      control: 'text',
      description: "Applies specified color to the control's background",
    },
    baseColor: {
      control: 'text',
      description: 'Sets the color of the input when it is not focused',
    },
    clearable: { control: 'boolean', description: 'Allows for the component to be cleared' },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the input',
    },
    readonly: { control: 'boolean', description: 'Puts input in readonly state' },
    hideDetails: { control: 'boolean', description: 'Hides hint and validation errors' },
    hint: { control: 'text', description: 'Displays hint text below the input when focused' },
    persistentHint: { control: 'boolean', description: 'Forces hint to always be visible' },
    error: { control: 'boolean', description: 'Puts the input in a manual error state' },
    errorMessages: {
      control: 'text',
      description: 'Puts the input in an error state and passes through custom error messages',
    },
    messages: { control: 'text', description: 'Displays a list of messages or a single message' },
    validateOn: {
      control: 'text',
      description: 'Change what type of event triggers validation to run',
    },
    loading: { control: 'boolean', description: 'Displays linear progress bar' },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});

Default.args = {
  label: 'File input',
} as ComponentArgs;

export const Accept: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
Accept.args = {
  accept: 'image/*',
  label: 'File input',
} as ComponentArgs;

Accept.parameters = {
  docs: {
    description: {
      story:
        'u-file-input component can accept only specific media formats/file types if you want. For more information, checkout the documentation on the accept attribute.',
    },
    source: {
      code: `<template>
  <u-file-input
    accept="image/*"
    label="File input"
  ></u-file-input>
</template>`,
    },
  },
};

export const Chips: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<div><u-file-input v-bind="args"></u-file-input></div>',
});
Chips.args = {
  label: 'File input w/ chips',
  chips: true,
  multiple: true,
} as ComponentArgs;

Chips.parameters = {
  docs: {
    description: {
      story:
        'A selected file can be displayed as a chip. When using the chips and multiple props, each chip will be displayed (as opposed to the file count).',
    },
    source: {
      code: `<template>
  <div>
    <u-file-input
      label="File input w/ chips"
      chips
      multiple
    ></u-file-input>
  </div>
</template>`,
    },
  },
};

export const Counter: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
Counter.args = {
  label: 'File input',
  counter: true,
  multiple: true,
  showSize: true,
} as ComponentArgs;

Counter.parameters = {
  docs: {
    description: {
      story:
        'When using the show-size property along with counter, the total number of files and size will be displayed under the input.',
    },
    source: {
      code: `<template>
  <u-file-input
    label="File input"
    counter
    multiple
    show-size
  ></u-file-input>
</template>`,
    },
  },
};

export const Density: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
Density.args = {
  density: 'compact',
  label: 'File input',
} as ComponentArgs;

Density.parameters = {
  docs: {
    description: {
      story: 'You can reduces the file input height with the density prop.',
    },
    source: {
      code: `<template>
  <u-file-input
    density="compact"
    label="File input"
  ></u-file-input>
</template>`,
    },
  },
};

export const Multiple: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
Multiple.args = {
  label: 'File input',
  multiple: true,
} as ComponentArgs;

Multiple.parameters = {
  docs: {
    description: {
      story:
        'The u-file-input can contain multiple files at the same time when using the multiple prop.',
    },
    source: {
      code: `<template>
  <u-file-input
    label="File input"
    multiple
  ></u-file-input>
</template>`,
    },
  },
};

export const PrependIcon: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
PrependIcon.args = {
  label: 'File input',
  prependIcon: 'hugeicons:camera-01',
  variant: 'filled',
} as ComponentArgs;

PrependIcon.parameters = {
  docs: {
    description: {
      story:
        'The u-file-input has a default prepend-icon that can be set on the component or adjusted globally. More information on changing global components can be found on the customizing icons page.',
    },
    source: {
      code: `<template>
  <u-file-input
    label="File input"
    prepend-icon="hugeicons:camera-01"
    variant="filled"
  ></u-file-input>
</template>`,
    },
  },
};

export const ShowSize: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileInput },
  setup() {
    return { args };
  },
  template: '<u-file-input v-bind="args"></u-file-input>',
});
ShowSize.args = {
  label: 'File input',
  showSize: true,
} as ComponentArgs;

ShowSize.parameters = {
  docs: {
    description: {
      story:
        'The displayed size of the selected file(s) can be configured with the show-size property. Display sizes can be either 1024 (the default used when providing true) or 1000.',
    },
    source: {
      code: `<template>
  <u-file-input
    label="File input"
    show-size
  ></u-file-input>
</template>`,
    },
  },
};

export const Validation: StoryFn<ComponentArgs> = () => ({
  components: { UFileInput },
  setup() {
    const maxSize = 5000000; // 5 MB
    const errorMessage = 'Total image size should be less than 5 MB!';

    const rules = [
      (value: any) => {
        if (value && Array.isArray(value)) {
          const totalSize = value.reduce(
            (acc: number, current: File) => acc + (current?.size || 0),
            0
          );
          return totalSize < maxSize || errorMessage;
        }

        return !value || (value as File).size < maxSize || errorMessage;
      },
    ];

    return { rules };
  },
  template: `
    <u-file-input
      :rules="rules"
      accept="image/png, image/jpeg, image/bmp"
      label="Photos"
      placeholder="Upload your photos"
      prepend-icon="hugeicons:camera-01"
      multiple
    ></u-file-input>
  `,
});

Validation.parameters = {
  docs: {
    description: {
      story:
        'Similar to other inputs, you can use the rules prop to create your own custom validation parameters. If multiple props is set, the value passed in the validation functions will be an array.',
    },
    source: {
      code: `<template>
  <u-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    label="Photos"
    placeholder="Upload your photos"
    prepend-icon="hugeicons:camera-01"
    multiple
  ></u-file-input>
</template>
<script setup>
  const maxSize = 5000000 // 5 MB
  const errorMessage = 'Total image size should be less than 5 MB!'

  const rules = [
    value => {
      // Multiple files
      if (value && Array.isArray(value)) {
        const totalSize = value.reduce((acc, current) => acc + current.size, 0)
        return totalSize < maxSize || errorMessage
      }

      // Single file (if multiple is undefined or set to false)
      return !value || value.size < maxSize || errorMessage
    },
  ]
</script>`,
    },
  },
};

export const Selection: StoryFn = () => ({
  components: { UFileInput },
  setup() {
    const files = ref<any[]>([]);
    return { files };
  },
  template: `
    <u-file-input
      v-model="files"
      label="File input"
      placeholder="Upload your documents"
      prepend-icon="hugeicons:document-attachment"
      multiple
    >
      <template #selection="{ fileNames }">
        <template v-for="fileName in fileNames" :key="fileName">
          <span class="u-chip" style="display:inline-block;background:#eee;padding:4px 8px;border-radius:12px;margin-right:8px">{{ fileName }}</span>
        </template>
      </template>
    </u-file-input>
  `,
});

Selection.parameters = {
  docs: {
    description: {
      story:
        'Using the selection slot, you can customize the appearance of your input selections. This is typically done with chips, however any component or markup can be used.',
    },
    source: {
      code: `<template>
  <u-file-input
    v-model="files"
    label="File input"
    placeholder="Upload your documents"
    prepend-icon="hugeicons:document-attachment"
    multiple
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="fileName in fileNames" :key="fileName">
        <u-chip
          class="me-2"
          color="primary"
          size="small"
          label
        >
          {{ fileName }}
        </u-chip>
      </template>
    </template>
  </u-file-input>
</template>
<script setup>
  import { ref } from 'vue'

  const files = ref([])
</script>`,
    },
  },
};

export const ComplexSelection: StoryFn = () => ({
  components: { UFileInput },
  setup() {
    const files = ref<any[]>([]);
    return { files };
  },
  template: `
    <u-file-input
      v-model="files"
      :show-size="1000"
      color="deep-purple-accent-4"
      label="File input"
      placeholder="Select your files"
      prepend-icon="hugeicons:document-attachment"
      variant="outlined"
      counter
      multiple
    >
      <template #selection="{ fileNames }">
        <template v-for="(fileName, index) in fileNames" :key="fileName">
          <span
            v-if="index < 2"
            style="display:inline-block;background:#6200ea;color:#fff;padding:4px 8px;border-radius:12px;margin-right:8px;font-size:12px"
          >
            {{ fileName }}
          </span>

          <span
            v-else-if="index === 2"
            class="text-overline"
            style="margin-left:8px;color:rgba(0,0,0,0.6)"
          >
            +{{ files.length - 2 }} File(s)
          </span>
        </template>
      </template>
    </u-file-input>
  `,
});

ComplexSelection.parameters = {
  docs: {
    description: {
      story:
        'The flexibility of the selection slot allows you accommodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount.',
    },
    source: {
      code: `<template>
  <u-file-input
    v-model="files"
    :show-size="1000"
    color="deep-purple-accent-4"
    label="File input"
    placeholder="Select your files"
    prepend-icon="hugeicons:document-attachment"
    variant="outlined"
    counter
    multiple
  >
    <template v-slot:selection="{ fileNames }">
      <template v-for="(fileName, index) in fileNames" :key="fileName">
        <u-chip
          v-if="index < 2"
          class="me-2"
          color="deep-purple-accent-4"
          size="small"
          label
        >
          {{ fileName }}
        </u-chip>

        <span
          v-else-if="index === 2"
          class="text-overline text-grey-darken-3 mx-2"
        >
          +{{ files.length - 2 }} File(s)
        </span>
      </template>
    </template>
  </u-file-input>
</template>
<script setup>
  import { ref } from 'vue'

  const files = ref([])
</script>`,
    },
  },
};
