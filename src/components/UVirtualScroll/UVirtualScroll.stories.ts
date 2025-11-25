import type { Meta, StoryFn } from '@storybook/vue3';

import {
  UAvatar,
  UBtn,
  UCard,
  UCardItem,
  UCardText,
  UCardTitle,
  UContainer,
  UDivider,
  UIcon,
  UListItem,
  UListItemTitle,
  UTable,
  UVirtualScroll,
} from '../index';

interface ComponentArgs {
  height?: string | number;
  itemHeight?: string | number | null;
  itemKey?: string | number | null;
  items?: unknown[];
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  renderless?: boolean;
  width?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Virtual scrollers',
  component: UVirtualScroll,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-virtual-scroll` component displays a virtual, infinite list for large collections.',
      },
      import: `import { UVirtualScroll } from '@ultimate/core-ui/components'`,
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
          return `<v-virtual-scroll${attrsString}>
  <template v-slot:default="{ item }">
    Item {{ item }}
  </template>
</v-virtual-scroll>`;
        },
      },
    },
    Vuetify: {
      component: 'VVirtualScroll',
      content: 'Based on Vuetify VVirtualScroll.',
      link: 'https://vuetifyjs.com/en/components/virtual-scrollers/',
    },
    Primary: {
      description:
        'The virtual scroller displays just enough records to fill the viewport and uses the existing component, rehydrating it with new data.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-virtual-scroll',
            link: 'https://vuetifyjs.com/en/api/v-virtual-scroll/',
          },
          description: 'Primary Component',
        },
      ],
    },
    anatomy: {
      description: `
The u-virtual-scroll component contains only a default slot with no styling options. It is typically used with large collections of v-list-items.`,
      Image: '/images/stories/UVirtualScroll.anatomy.png',
      data: [
        {
          element: '1. Container',
          description: 'The rendered content area from the provided items prop',
        },
      ],
    },
  },
  argTypes: {
    height: {
      name: 'height',
      description: 'Height of the component as a CSS value.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    itemHeight: {
      name: 'item-height',
      description: 'Height in pixels of each item.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number | null' }, defaultValue: { summary: 'null' } },
    },
    itemKey: {
      name: 'item-key',
      description: 'Property to use as unique key for items.',
      control: { type: 'text' },
      table: { type: { summary: 'SelectItemKey' }, defaultValue: { summary: 'null' } },
    },
    items: {
      name: 'items',
      description: 'Array of items to display.',
      control: { type: 'object' },
      table: { type: { summary: 'unknown[]' }, defaultValue: { summary: '[]' } },
    },
    maxHeight: {
      name: 'max-height',
      description: 'Maximum height for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxWidth: {
      name: 'max-width',
      description: 'Maximum width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minHeight: {
      name: 'min-height',
      description: 'Minimum height for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minWidth: {
      name: 'min-width',
      description: 'Minimum width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    renderless: {
      name: 'renderless',
      description: 'Disable default rendering; parent must handle itemRef.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    width: {
      name: 'width',
      description: 'Sets the width for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  } as any,
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UVirtualScroll },
  setup() {
    return { args };
  },
  template: `<u-virtual-scroll v-bind="args">
  <template v-slot:default="{ item }">
    Item {{ item }}
  </template>
</u-virtual-scroll>`,
});

Default.args = {
  height: '300',
  items: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ],
} as ComponentArgs;

/**
 * The u-virtual-scroll component does not have any initial height set on itself.
 */
export const Height: StoryFn<ComponentArgs> = (args) => ({
  components: { UVirtualScroll },
  setup() {
    const items = Array.from({ length: 1000 }, (_, i) => i + 1);
    return { args, items };
  },
  template: `<u-virtual-scroll :items="items" height="200">
    <template v-slot:default="{ item }">
      Virtual Item {{ item }}
    </template>
  </u-virtual-scroll>`,
});

Height.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-virtual-scroll :items="items" height="200">
    <template v-slot:default="{ item }">
      Virtual Item {{ item }}
    </template>
  </u-virtual-scroll>
</template>
<script setup>
  const items = Array.from({ length: 1000 }, (k, v) => v + 1)
</script>`,
    },
  },
};

/**
 * For lists where the item height is static and uniform for all items, it’s recommended that you define a specific item-height. This value is used for u-virtual-scroll’s calculations.
 */
export const ItemHeight: StoryFn<ComponentArgs> = (args) => ({
  components: { UVirtualScroll, UCard, UDivider, UListItem, UBtn, UIcon },
  setup() {
    const items = Array.from({ length: 1000 }, (_, i) => i + 1);
    return { args, items };
  },
  template: `<u-card
    class="mx-auto"
    max-width="500"
  >
    <u-card-title>
      Company Employee List
    </u-card-title>

    <u-divider></u-divider>
    
    <u-virtual-scroll
      :items="items"
      height="320"
      item-height="48"
    >
      <template v-slot:default="{ item }">
        <u-list-item
          :subtitle="\`Badge #\${item}\`"
          :title="\`Employee Name\`"
        >
          <template v-slot:prepend>
            <u-icon class="bg-primary">hugeicons:user-03</u-icon>
          </template>

          <template v-slot:append>
            <u-btn
              icon="hugeicons:edit-02"
              size="x-small"
              variant="tonal"
            ></u-btn>
          </template>
        </u-list-item>
      </template>
    </u-virtual-scroll>
  </u-card>`,
});

ItemHeight.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    max-width="500"
  >
    <u-card-title>
      Company Employee List
    </u-card-title>

    <u-divider></u-divider>
    
    <u-virtual-scroll
      :items="items"
      height="320"
      item-height="48"
    >
      <template v-slot:default="{ item }">
        <u-list-item
          :subtitle="\`Badge #\${item}\`"
          :title="\`Employee Name\`"
        >
          <template v-slot:prepend>
            <u-icon class="bg-primary">hugeicons:user-03</u-icon>
          </template>

          <template v-slot:append>
            <u-btn
              icon="hugeicons:edit-02"
              size="x-small"
              variant="tonal"
            ></u-btn>
          </template>
        </u-list-item>
      </template>
    </u-virtual-scroll>
  </u-card>
</template>
<script setup>
  const items = Array.from({ length: 1000 }, (k, v) => v + 1)
</script>`,
    },
  },
};

/**
 * Renderless mode does not generate DOM nodes automatically, so you must bind itemRef yourself for virtual scrolling to work properly.
 */
export const Renderless: StoryFn<ComponentArgs> = (args) => ({
  components: { UVirtualScroll, UContainer, UTable },
  setup() {
    const icons = ['🍄', '🌼', '🌵', '🌲', '🌰', '🍅', '🍊', '🍓'];
    const items = Array.from({ length: 1000 }, (_, i) => ({
      name: `Item #${String(i + 1).padStart(4, '0')}`,
      icon: icons[i % icons.length],
    }));
    return { args, items };
  },
  template: `<u-container>
    <p class="text-caption opacity-80">
      💡 The <code>height</code> prop should be a plain number,
      or a value with units like <code>px</code> and <code>vh</code>, but not the percentage
      (<code>%</code>).
    </p>

    <u-table height="300" fixed-header>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        <u-virtual-scroll :items="items" renderless>
          <template v-slot:default="{ item, index, itemRef }">
            <tr :ref="itemRef">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.icon }}</td>
            </tr>
          </template>
        </u-virtual-scroll>
      </tbody>
    </u-table>
  </u-container>`,
});

Renderless.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container>
    <p class="text-caption opacity-80">
      💡 The <code>height</code> prop should be a plain number,
      or a value with units like <code>px</code> and <code>vh</code>, but not the percentage
      (<code>%</code>).
    </p>

    <u-table height="300" fixed-header>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody>
        <u-virtual-scroll :items="items" renderless>
          <template v-slot:default="{ item, index, itemRef }">
            <tr :ref="itemRef">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.icon }}</td>
            </tr>
          </template>
        </u-virtual-scroll>
      </tbody>
    </u-table>
  </u-container>
</template>
<script setup>
  const icons = ['🍄', '🌼', '🌵', '🌲', '🌰', '🍅', '🍊', '🍓']
  const items = Array.from({ length: 1000 }, (k, v) => ({
    name: \`Item #\${String(v + 1).padStart(4, '0')}\`,
    icon: icons[v % icons.length],
  }))
</script>`,
    },
  },
};

/**
 * The u-virtual-scroll component can render an large amount of items by rendering only what it needs to fill the scroller’s viewport.
 */
export const UserDirectory: StoryFn<ComponentArgs> = (args) => ({
  components: {
    UVirtualScroll,
    UCard,
    UCardItem,
    UCardText,
    UCardTitle,
    UDivider,
    UListItem,
    UListItemTitle,
    UAvatar,
    UBtn,
    UIcon,
  },
  setup() {
    const colors = [
      '#2196F3',
      '#90CAF9',
      '#64B5F6',
      '#42A5F5',
      '#1E88E5',
      '#1976D2',
      '#1565C0',
      '#0D47A1',
    ];
    const names = [
      'Oliver',
      'Jake',
      'Noah',
      'James',
      'Jack',
      'Connor',
      'Liam',
      'John',
      'Harry',
      'Callum',
    ];
    const surnames = [
      'Smith',
      'Anderson',
      'Clark',
      'Wright',
      'Mitchell',
      'Johnson',
      'Thomas',
      'Rodriguez',
      'Lopez',
      'Perez',
    ];

    function genRandomIndex(length: number) {
      return Math.ceil(Math.random() * (length - 1));
    }

    const items = Array.from({ length: 10000 }, () => {
      const name = names[genRandomIndex(names.length)];
      const surname = surnames[genRandomIndex(surnames.length)];
      const color = colors[genRandomIndex(colors.length)];
      return { color, fullName: `${name} ${surname}`, initials: `${name[0]} ${surname[0]}` };
    });

    return { args, items };
  },
  template: `<u-card
    class="mx-auto"
    max-width="400"
  >
    <u-card-item class="bg-orange-darken-4">
      <u-card-title>
        User Directory
      </u-card-title>

      <template v-slot:append>
        <u-btn
          color="white"
          icon="hugeicons:plus-sign"
          size="small"
        ></u-btn>
      </template>
    </u-card-item>

    <u-card-text class="pt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
    </u-card-text>

    <u-divider></u-divider>
    
    <u-virtual-scroll
      :items="items"
      height="300"
      item-height="50"
    >
      <template v-slot:default="{ item }">
        <u-list-item>
          <template v-slot:prepend>
            <u-avatar
              :color="item.color"
              class="text-white"
              size="40"
            >
              {{ item.initials }}
            </u-avatar>
          </template>

          <u-list-item-title>{{ item.fullName }}</u-list-item-title>

          <template v-slot:append>
            <u-btn
              size="small"
              variant="tonal"
            >
              View User

              <u-icon
                color="orange-darken-4"
                end
              >
                hugeicons:link-square-01
              </u-icon>
            </u-btn>
          </template>
        </u-list-item>
      </template>
    </u-virtual-scroll>
  </u-card>`,
});

UserDirectory.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-card
    class="mx-auto"
    max-width="400"
  >
    <u-card-item class="bg-orange-darken-4">
      <u-card-title>
        User Directory
      </u-card-title>

      <template v-slot:append>
        <u-btn
          color="white"
          icon="hugeicons:plus-sign"
          size="small"
        ></u-btn>
      </template>
    </u-card-item>

    <u-card-text class="pt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
    </u-card-text>

    <u-divider></u-divider>
    
    <u-virtual-scroll
      :items="items"
      height="300"
      item-height="50"
    >
      <template v-slot:default="{ item }">
        <u-list-item>
          <template v-slot:prepend>
            <u-avatar
              :color="item.color"
              class="text-white"
              size="40"
            >
              {{ item.initials }}
            </u-avatar>
          </template>

          <u-list-item-title>{{ item.fullName }}</u-list-item-title>

          <template v-slot:append>
            <u-btn
              size="small"
              variant="tonal"
            >
              View User

              <u-icon
                color="orange-darken-4"
                end
              >
                hugeicons:link-square-01
              </u-icon>
            </u-btn>
          </template>
        </u-list-item>
      </template>
    </u-virtual-scroll>
  </u-card>
</template>
<script setup>
  import { computed } from 'vue'

  const colors = ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF']
  const names = ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany']
  const surnames = ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins']

  const items = computed(() => {
    const namesLength = names.length
    const surnamesLength = surnames.length
    const colorsLength = colors.length

    return Array.from({ length: 10000 }, () => {
      const name = names[genRandomIndex(namesLength)]
      const surname = surnames[genRandomIndex(surnamesLength)]

      return {
        color: colors[genRandomIndex(colorsLength)],
        fullName: \`\${name} \${surname}\`,
        initials: \`\${name[0]} \${surname[0]}\`,
      }
    })
  })

  function genRandomIndex (length) {
    return Math.ceil(Math.random() * (length - 1))
  }
</script>`,
    },
  },
};
