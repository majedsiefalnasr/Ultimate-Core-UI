import type { Meta, StoryFn } from '@storybook/vue3';
import { shallowRef } from 'vue';

import { UAvatar, UBtn, UBtnToggle, UFileUploadItem } from '../index';

import { UFileUpload } from './index';

interface ComponentArgs {
  border?: string | number | boolean;
  browseText?: string;
  clearable?: boolean;
  closeDelay?: string | number;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  disabled?: boolean;
  dividerText?: string;
  elevation?: string | number;
  filterByType?: string;
  height?: string | number;
  hideBrowse?: boolean;
  icon?: string;
  length?: string | number;
  location?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  modelValue?: File | File[];
  multiple?: boolean;
  name?: string;
  opacity?: string | number;
  openDelay?: string | number;
  position?: 'fixed' | 'relative' | 'absolute' | 'static' | 'sticky';
  rounded?: string | number | boolean;
  scrim?: string | boolean;
  showSize?: boolean;
  subtitle?: string;
  tag?: string;
  theme?: string;
  thickness?: string | number;
  tile?: boolean;
  title?: string;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Form inputs & controls/File Upload',
  component: UFileUpload,
  parameters: {
    docs: {
      description: {
        component:
          'The u-file-upload component is a drag and drop area for uploading files. It can be customized with slots and has support for density and multiple styles.',
      },
      import: `import { UFileUpload } from '@ultimate/core-ui/components'`,
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

          return `<UFileUpload${attrsString}></UFileUpload>`;
        },
      },
    },
    Vuetify: {
      component: 'VFileUpload',
      content:
        'The file upload component is built on top of the Vuetify v-file-upload component, providing a drag and drop interface for file uploads.',
      link: 'https://vuetifyjs.com/en/components/file-inputs/',
    },
    Primary: {
      description:
        'The v-file-upload component is a drag and drop area for uploading files. It can be customized with slots and has support for density and multiple styles.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-file-upload',
            link: 'https://vuetifyjs.com/en/api/v-file-upload/',
          },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-file-upload-item',
            link: 'https://vuetifyjs.com/en/api/v-file-upload-item/',
          },
          description: 'Item Component',
        },
        {
          element: {
            title: 'v-file-input',
            link: 'https://vuetifyjs.com/en/api/v-file-input/',
          },
          description: 'File input component',
        },
      ],
    },
    anatomy: {
      title: 'Anatomy',
      description:
        'The file upload component consists of a drag and drop area with an icon, title, divider, and browse button.',
      Image: '/images/stories/UFileUpload.anatomy.png',
      data: [
        {
          element: '1. Icon',
          description: 'The upload icon displayed at the top of the component.',
        },
        {
          element: '2. Title',
          description: 'The main heading text for the upload area.',
        },
        {
          element: '3. Divider',
          description: 'A visual separator with optional text.',
        },
        {
          element: '4. Browse Button',
          description: 'A button to open the file selection dialog.',
        },
        {
          element: '5. Item',
          description: 'The item slot is used to customize the appearance of the file item.',
        },
      ],
    },
  },
  argTypes: {
    border: {
      control: 'text',
      description:
        'Applies utility border classes to the component. To use it, you need to omit the border- prefix.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    browseText: {
      control: 'text',
      description: 'Text for the browse button.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.fileUpload.browse'" },
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
    closeDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before closing component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: 'text',
      description:
        'Applies specified color to the control - supports utility colors or css color values.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: 'Adjusts the vertical height used by the component.',
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    dividerText: {
      control: 'text',
      description: 'Text in the divider.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.fileUpload.divider'" },
      },
    },
    elevation: {
      control: 'number',
      description: 'Designates an elevation applied to the component between 0 and 24.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    filterByType: {
      control: 'text',
      description:
        'Make the input accept only files matched by one or more unique file type specifiers.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    hideBrowse: {
      control: 'boolean',
      description: 'Hides the browse button.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$upload'" },
      },
    },
    length: {
      control: 'number',
      description: 'Sets the dividers length. Default unit is px.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '150' },
      },
    },
    location: {
      control: 'text',
      description:
        "Specifies the component's location. Can combine by using a space separated string.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxHeight: {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    minHeight: {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    minWidth: {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    modelValue: {
      control: false,
      description: 'The v-model value of the component.',
      table: {
        type: { summary: 'File | File[]' },
        defaultValue: { summary: 'null' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allows multiple files to be uploaded.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    name: {
      control: 'text',
      description: "Sets the component's name attribute.",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    opacity: {
      control: 'number',
      description: "Sets the component's opacity value",
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    openDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before opening component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    position: {
      control: 'select',
      options: ['fixed', 'relative', 'absolute', 'static', 'sticky'],
      description: 'Sets the position for the component.',
      table: {
        type: { summary: "'fixed' | 'relative' | 'absolute' | 'static' | 'sticky'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    rounded: {
      control: 'text',
      description: 'Designates the border-radius applied to the component.',
      table: {
        type: { summary: 'string | number | boolean' },
        defaultValue: { summary: 'undefined' },
      },
    },
    scrim: {
      control: 'text',
      description:
        'Determines whether an overlay is used when hovering over the component with files. Accepts true/false to enable background, and string to define color.',
      table: {
        type: { summary: 'string | boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    showSize: {
      control: 'boolean',
      description: 'Shows the size of the file.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    subtitle: {
      control: 'text',
      description: 'Specify a subtitle text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'div'" },
      },
    },
    theme: {
      control: 'text',
      description: 'Specify a theme for this component and all of its children.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    thickness: {
      control: 'number',
      description: 'Sets the dividers thickness. Default unit is px.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tile: {
      control: 'boolean',
      description: 'Removes any applied border-radius from the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.fileUpload.title'" },
      },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload },
  setup() {
    return { args };
  },
  template: '<UFileUpload v-bind="args"></UFileUpload>',
});

Default.args = {
  density: 'default',
} as ComponentArgs;

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <UFileUpload density="default"></UFileUpload>
</template>`,
    },
  },
};

export const DensityVariants: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload, UBtn, UBtnToggle },
  setup() {
    const density = shallowRef<'default' | 'comfortable' | 'compact'>('default');
    return { args, density };
  },
  template: `
    <div class="text-center pa-2 mb-2">
      <UBtnToggle v-model="density" density="comfortable" border divided rounded>
        <UBtn value="default">Default</UBtn>
        <UBtn value="comfortable">Comfortable</UBtn>
        <UBtn value="compact">Compact</UBtn>
      </UBtnToggle>
    </div>
    <UFileUpload :density="density"></UFileUpload>
  `,
});

DensityVariants.args = {} as ComponentArgs;

DensityVariants.parameters = {
  docs: {
    source: {
      code: `<template>
  <div class="text-center pa-2 mb-2">
    <UBtnToggle v-model="density" density="comfortable" border divided rounded>
      <UBtn value="default">Default</UBtn>
      <UBtn value="comfortable">Comfortable</UBtn>
      <UBtn value="compact">Compact</UBtn>
    </UBtnToggle>
  </div>
  <UFileUpload :density="density"></UFileUpload>
</template>

<script setup>
import { shallowRef } from 'vue'

const density = shallowRef('default')
</script>`,
    },
    description: {
      story: 'The density prop is used to control the vertical space the upload takes up.',
    },
  },
};

export const CustomContent: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload },
  setup() {
    return { args };
  },
  template: '<UFileUpload v-bind="args"></UFileUpload>',
});

CustomContent.args = {
  browseText: 'Local Filesystem',
  dividerText: 'or choose locally',
  icon: 'hugeicons:upload-04',
  title: 'Drag and Drop Here',
} as ComponentArgs;

CustomContent.parameters = {
  docs: {
    source: {
      code: `<template>
  <UFileUpload
    browse-text="Local Filesystem"
    divider-text="or choose locally"
    icon="hugeicons:upload-04"
    title="Drag and Drop Here"
  ></UFileUpload>
</template>`,
    },
    description: {
      story:
        'Use the browse-text, divider-text, icon, title, or subtitle props to customize the text displayed in the component.',
    },
  },
};

export const Disabled: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload },
  setup() {
    return { args };
  },
  template: '<UFileUpload v-bind="args"></UFileUpload>',
});

Disabled.args = {
  disabled: true,
} as ComponentArgs;

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <UFileUpload disabled></UFileUpload>
</template>`,
    },
    description: {
      story: 'The disabled property reduces the opacity of the component and prevents interaction.',
    },
  },
};

export const Scrim: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload },
  setup() {
    return { args };
  },
  template: '<UFileUpload v-bind="args"></UFileUpload>',
});

Scrim.args = {
  scrim: 'primary',
} as ComponentArgs;

Scrim.parameters = {
  docs: {
    source: {
      code: `<template>
  <UFileUpload scrim="primary"></UFileUpload>
</template>`,
    },
    description: {
      story:
        'The scrim property allows you to set a colored scrim when hovering over the component with files.',
    },
  },
};

export const MultipleFiles: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload },
  setup() {
    const model = shallowRef(null);
    return { args, model };
  },
  template: `
    <UFileUpload
      v-model="model"
      v-bind="args"
      clearable
      multiple
      show-size
    ></UFileUpload>
  `,
});

MultipleFiles.args = {} as ComponentArgs;

MultipleFiles.parameters = {
  docs: {
    source: {
      code: `<template>
  <UFileUpload
    v-model="model"
    clearable
    multiple
    show-size
  ></UFileUpload>
</template>

<script setup>
import { shallowRef } from 'vue'

const model = shallowRef(null)
</script>`,
    },
    description: {
      story: 'Use the multiple prop to allow uploading multiple files at once.',
    },
  },
};

export const Item: StoryFn<ComponentArgs> = (args) => ({
  components: { UFileUpload, UBtn, UAvatar, UFileUploadItem },
  setup() {
    const model = shallowRef(null);
    return { args, model };
  },
  template: `
    <u-file-upload
      v-model="model"
      v-bind="args"
      clearable
      multiple
      show-size
    >
      <template v-slot:item="{ props: itemProps }">
        <u-file-upload-item v-bind="itemProps" lines="one" nav>
          <template v-slot:prepend>
            <u-avatar size="32" rounded></u-avatar>
          </template>
          <template v-slot:clear="{ props: clearProps }">
            <u-btn color="primary" v-bind="clearProps"></u-btn>
          </template>
        </u-file-upload-item>
      </template>
    </u-file-upload>
  `,
});

Item.args = {} as ComponentArgs;

Item.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-file-upload
    v-model="model"
    clearable
    multiple
    show-size
  >
    <template v-slot:item="{ props: itemProps }">
      <u-file-upload-item v-bind="itemProps" lines="one" nav>
        <template v-slot:prepend>
          <u-avatar size="32" rounded></u-avatar>
        </template>
        <template v-slot:clear="{ props: clearProps }">
          <u-btn color="primary" v-bind="clearProps"></u-btn>
        </template>
      </u-file-upload-item>
    </template>
  </u-file-upload>
</template>

<script setup>
import { shallowRef } from 'vue'

const model = shallowRef(null)
</script>`,
    },
    description: {
      story: 'The item slot is used to customize the appearance of the file item.',
    },
  },
};
