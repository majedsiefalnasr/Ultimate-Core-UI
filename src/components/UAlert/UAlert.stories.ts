import type { Meta, StoryFn } from '@storybook/vue3';

import { UAlert } from './index';

interface ComponentArgs {
  type?: 'success' | 'info' | 'warning' | 'error';
  variant?: 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
  closable?: boolean;
  'close-label'?: string;
  'close-icon'?: string;
  icon?: string | boolean;
  'icon-size'?: string | number;
  title?: string;
  text?: string;
  border?: boolean | 'top' | 'end' | 'bottom' | 'start';
  'border-color'?: string;
  color?: string;
  density?: 'default' | 'comfortable' | 'compact';
  elevation?: string | number;
  prominent?: boolean;
  rounded?: string | number | boolean;
  height?: string | number;
  'max-height'?: string | number;
  'max-width'?: string | number;
  'min-height'?: string | number;
  'min-width'?: string | number;
  width?: string | number;
  'model-value'?: boolean;
  location?: string;
  position?: 'fixed' | 'static' | 'relative' | 'absolute' | 'sticky';
  tag?: string;
  theme?: string;
  tile?: boolean;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Alerts',
  component: UAlert,
  parameters: {
    docs: {
      description: {
        component:
          'The UAlert component is used to convey important information to the user through the use of contextual types, icons, and colors. This component provides a wrapper around v-alert with additional functionality.',
      },
      import: `import { UAlert } from '@ultimate/core-ui/components'`,
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

          return `<UAlert${attrsString}></UAlert>`;
        },
      },
    },
    Vuetify: {
      component: 'VAlert',
      content:
        "This component is built on top of Vuetify's VAlert component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/alerts/',
    },
    Primary: {
      description:
        "An alert is a v-sheet that specializes in getting the user's attention. While similar to v-banner in functionality, UAlert is typically inline with content and used multiple times throughout an application.",
    },
    anatomy: {
      description: `
The recommended placement of elements inside of v-alert is:
- Place a v-icon on the far left
- Place v-alert-title to the right of the contextual icon
- Place textual content below the title
- Place closing actions to the far right`,
      Image: '/images/stories/UAlert.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The Alert container holds all v-alert components',
        },
        {
          element: '2. Icon',
          description:
            'An icon that correlates to the contextual state of the alert; success, info, warning, error',
        },
        {
          element: '3. Title',
          description: 'A heading with increased font-size',
        },
        {
          element: '4. Text',
          description: 'A content area for displaying text and other inline elements',
        },
        {
          element: '5. Close Icon (optional)',
          description: 'Used to hide the v-alert component',
        },
      ],
    },
    api: {
      data: [
        {
          element: { title: 'v-alert', link: 'https://vuetifyjs.com/en/api/v-alert/' },
          description: 'Primary Component',
        },
        {
          element: { title: 'v-alert-title', link: 'https://vuetifyjs.com/en/api/v-alert-title/' },
          description: 'Sub-component used to display the v-alert title. Wraps the #title slot',
        },
      ],
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'info', 'warning', 'error'],
      description:
        'Create a specialized alert that uses a contextual color and has a pre-defined icon.',
      table: {
        type: { summary: 'success | info | warning | error' },
        defaultValue: { summary: 'undefined' },
      },
    },
    variant: {
      control: { type: 'select' },
      options: ['text', 'flat', 'elevated', 'tonal', 'outlined', 'plain'],
      description: 'Applies a distinct style to the component.',
      table: {
        type: { summary: 'text | flat | elevated | tonal | outlined | plain' },
        defaultValue: { summary: 'flat' },
      },
    },
    closable: {
      control: 'boolean',
      description: 'Adds a close icon that can hide the alert.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    'close-label': {
      control: 'text',
      description:
        'Text used for aria-label on closable alerts. Can also be customized globally in Internationalization.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '$vuetify.close' },
      },
    },
    'close-icon': {
      control: 'text',
      description: 'Change the default icon used for closable alerts.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '$close' },
      },
    },
    icon: {
      control: 'text',
      description: 'Apply a specific icon using the v-icon component.',
      table: {
        type: { summary: 'false | string' },
        defaultValue: { summary: 'null' },
      },
    },
    'icon-size': {
      control: 'text',
      description: 'The specific size of the icon, can use named sizes.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    title: {
      control: 'text',
      description: 'Specify a title text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    text: {
      control: 'text',
      description: 'Specify content text for the component.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    border: {
      control: { type: 'select' },
      options: [false, 'top', 'end', 'bottom', 'start'],
      description: 'Adds a colored border to the component.',
      table: {
        type: { summary: "boolean | 'top' | 'end' | 'bottom' | 'start'" },
        defaultValue: { summary: 'false' },
      },
    },
    'border-color': {
      control: 'color',
      description:
        'Specifies the color of the border. Only used in combination with border prop. Accepts any color value.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
      },
    },
    color: {
      control: 'color',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). Find a list of built-in classes on the colors page.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'undefined' },
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
    elevation: {
      control: 'text',
      description:
        'Designates an elevation applied to the component between 0 and 24. You can find more information on the elevation page.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    prominent: {
      control: 'boolean',
      description: 'Displays a larger vertically centered icon to draw more attention.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    rounded: {
      control: 'text',
      description:
        'Designates the border-radius applied to the component. This can be 0, xs, sm, true, lg, xl, pill, circle, and shaped. Find more information on available border radius classes on the Border Radius page.',
      table: {
        type: { summary: 'string | number | boolean' },
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
    'max-height': {
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'max-width': {
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'min-height': {
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    'min-width': {
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
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
    'model-value': {
      control: 'boolean',
      description: 'Controls whether the component is visible or hidden.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
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
    position: {
      control: { type: 'select' },
      options: ['fixed', 'static', 'relative', 'absolute', 'sticky'],
      description: 'Sets the position for the component.',
      table: {
        type: { summary: 'fixed | static | relative | absolute | sticky' },
        defaultValue: { summary: 'undefined' },
      },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'div' },
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
    tile: {
      control: 'boolean',
      description: "Removes the component's border-radius.",
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;

// Primary Story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UAlert },
  setup() {
    return { args };
  },
  template: '<UAlert v-bind="args"></UAlert>',
});

Default.args = {
  type: 'info',
  title: 'Information Alert',
  text: 'This is an informational alert with important details for the user.',
  closable: true,
  variant: 'tonal',
} as ComponentArgs;

// Variants Story
export const Variants: StoryFn<ComponentArgs> = () => ({
  components: { UAlert },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4" >
      <UAlert title="Elevated Alert" text="This is an elevated alert" variant="elevated" />
      <UAlert title="Flat Alert" text="This is a flat alert" variant="flat" />
      <UAlert title="Tonal Alert" text="This is a tonal alert" variant="tonal" />
      <UAlert title="Outlined Alert" text="This is an outlined alert" variant="outlined" />
      <UAlert title="Text Alert" text="This is a text alert" variant="text" />
      <UAlert title="Plain Alert" text="This is a plain alert" variant="plain" />
    </u-container>
  `,
});

Variants.parameters = {
  docs: {
    source: {
      code: `
        <UAlert title="Elevated Alert" text="This is an elevated alert" variant="elevated" />
        <UAlert title="Flat Alert" text="This is a flat alert" variant="flat" />
        <UAlert title="Tonal Alert" text="This is a tonal alert" variant="tonal" />
        <UAlert title="Outlined Alert" text="This is an outlined alert" variant="outlined" />
        <UAlert title="Text Alert" text="This is a text alert" variant="text" />
        <UAlert title="Plain Alert" text="This is a plain alert" variant="plain" />
      `,
    },
  },
};

// Border color Story
export const BorderColors: StoryFn<ComponentArgs> = () => ({
  components: { UAlert },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4" >
      <u-alert border="start" border-color="deep-purple accent-4" elevation="2">
        Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..
        Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus
        consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
        nisi.
      </u-alert>

      <u-alert border="top" border-color="success" elevation="2">
        Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero.
        Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
      </u-alert>

      <u-alert border="bottom" border-color="warning" elevation="2">
        Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit
        quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo
        eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit
        libero, sodales nec, volutpat a, suscipit non, turpis.
      </u-alert>

      <u-alert border="end" border-color="error" elevation="2">
        Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate
        arcu.
      </u-alert>
    </u-container>
  `,
});

BorderColors.parameters = {
  docs: {
    source: {
      code: `
        <u-alert border="start" border-color="deep-purple accent-4" elevation="2">
          Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..
          Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus
          consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
          nisi.
        </u-alert>

        <u-alert border="top" border-color="success" elevation="2">
          Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero.
          Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
        </u-alert>

        <u-alert border="bottom" border-color="warning" elevation="2">
          Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit
          quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo
          eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit
          libero, sodales nec, volutpat a, suscipit non, turpis.
        </u-alert>

        <u-alert border="end" border-color="error" elevation="2">
          Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate
          arcu.
        </u-alert>
      `,
    },
  },
};

// Icon Story
export const Icon: StoryFn<ComponentArgs> = () => ({
  components: { UAlert },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4" >
      <u-alert color="#2A3B4D" density="compact" icon="mdi-firework" theme="dark">
        Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque
        ut nisi. Maecenas malesuada.
      </u-alert>

      <u-alert color="#C51162" icon="mdi-material-design" theme="dark" border>
        Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
        faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
      </u-alert>

      <u-alert color="primary" icon="$vuetify" theme="dark" prominent>
        Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis,
        feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien,
        a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare lobortis.
      </u-alert>
    </u-container>
  `,
});

Icon.parameters = {
  docs: {
    source: {
      code: `
        <u-alert color="#2A3B4D" density="compact" icon="mdi-firework" theme="dark">
          Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. Quisque
          ut nisi. Maecenas malesuada.
        </u-alert>

        <u-alert color="#C51162" icon="mdi-material-design" theme="dark" border>
          Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut,
          faucibus non, euismod id, nulla. In ut quam vitae odio lacinia tincidunt.
        </u-alert>

        <u-alert color="primary" icon="$vuetify" theme="dark" prominent>
          Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra quis,
          feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien,
          a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare lobortis.
        </u-alert>
      `,
    },
  },
};

// Outlined Story
export const Outlined: StoryFn<ComponentArgs> = () => ({
  components: { UAlert },
  template: `
    <u-container class="pa-4 d-flex flex-column ga-4" >
      <u-alert color="purple" variant="outlined">
        <template v-slot:title> Outlined Alert </template>
        Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis
        nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh.
        Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
        sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
        venenatis ante odio sit amet eros.
      </u-alert>

      <u-alert type="success" variant="outlined">
        Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent
        ac massa at ligula laoreet iaculis. Vestibulum ullamcorper mauris at ligula.
      </u-alert>

      <u-alert border="top" type="warning" variant="outlined" prominent>
        Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl
        sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.
      </u-alert>
    </u-container>
  `,
});

Outlined.parameters = {
  docs: {
    source: {
      code: `
        <u-alert color="purple" variant="outlined">
          <template v-slot:title> Outlined Alert </template>
          Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis
          nunc et lorem. Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh.
          Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
          sagittis lacus. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis
          venenatis ante odio sit amet eros.
        </u-alert>

        <u-alert type="success" variant="outlined">
          Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent
          ac massa at ligula laoreet iaculis. Vestibulum ullamcorper mauris at ligula.
        </u-alert>

        <u-alert border="top" type="warning" variant="outlined" prominent>
          Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl
          sit amet velit hendrerit rutrum. Nullam vel sem. Pellentesque dapibus hendrerit tortor.
        </u-alert>
      `,
    },
  },
};
