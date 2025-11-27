import type { Meta, StoryFn } from '@storybook/vue3';
import { ref, shallowRef } from 'vue';

import {
  UBtn,
  UCard,
  UCardText,
  UCardTitle,
  UCol,
  UContainer,
  UDataIterator,
  UDivider,
  UExpandTransition,
  UFooter,
  UIcon,
  UImg,
  UList,
  UListItem,
  UPagination,
  URow,
  USkeletonLoader,
  USwitch,
  UTable,
  UTextField,
  UToolbar,
} from '../index';

interface ComponentArgs {
  // Core props
  items?: unknown[];
  itemsPerPage?: string | number;
  page?: string | number;
  search?: string;
  loading?: boolean;
  modelValue?: unknown[];
  expanded?: string[];
  multiSort?: boolean;
  mustSort?: boolean;
  noFilter?: boolean;
  returnObject?: boolean;
  showExpand?: boolean;
  showSelect?: boolean;
  selectStrategy?: 'single' | 'page' | 'all';
  groupBy?: unknown[];
  sortBy?: unknown[];
  filterKeys?: string | string[];
  filterMode?: 'every' | 'some' | 'union' | 'intersection';
  tag?: string;
  transition?: string | boolean | Record<string, unknown>;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Data Iterators',
  component: UDataIterator,
  parameters: {
    docs: {
      description: {
        component:
          'The v-data-iterator component is used for displaying arbitrary data, and shares a majority of its functionality with the v-data-table component. Features include sorting, searching, pagination, and selection.',
      },
      import: `import { UDataIterator } from '@ultimate/core-ui/components'`,
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

          return `<u-data-iterator${attrsString} :page="page">
  <template #default="{ items }">
    <template v-for="(item, i) in items" :key="i">
      <u-card v-bind="item"></u-card>
      <br />
    </template>
  </template>

  <template #footer="{ pageCount }">
    <u-pagination v-model="page" :length="pageCount" />
  </template>
</u-data-iterator>`;
        },
      },
    },
    Vuetify: {
      component: 'VDataIterator',
      content:
        'The v-data-iterator allows you to customize exactly how to display your data. In this example we are using a grid with cards.',
      link: 'https://vuetifyjs.com/en/components/data-iterators/',
    },
    Primary: {
      description:
        'The v-data-iterator allows you to customize exactly how to display your data. In this example we are using a grid with cards.',
    },
    anatomy: {
      title: 'Anatomy',
      description: 'The recommended placement of elements inside of a v-data-iterator are:',
      Image: '/images/stories/UDataIterator.anatomy.png',
      data: [
        {
          element: '1. Header (optional)',
          description: 'The header is used to display a title and actions',
        },
        {
          element: '2. Container',
          description: 'The container is the root element of the component',
        },
        {
          element: '3. Footer (optional)',
          description: 'The footer is used to display pagination',
        },
      ],
    },
    api: {
      data: [
        {
          element: {
            title: 'v-data-iterator',
            link: 'https://vuetifyjs.com/en/api/v-data-iterator/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of items to render',
      table: { type: { summary: 'unknown[]' }, defaultValue: { summary: '[]' } },
    },
    itemsPerPage: {
      control: 'number',
      description: 'Items shown per page',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '5' } },
    },
    page: {
      control: 'number',
      description: 'Current page (1-indexed)',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '1' } },
    },
    search: {
      control: 'text',
      description: 'Search text to filter items',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    loading: {
      control: 'boolean',
      description: 'Show loading state when no items',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    selectStrategy: {
      control: 'select',
      options: ['single', 'page', 'all'],
      description: 'Defines the selection strategy',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'page' } },
    },
    filterMode: {
      control: 'select',
      options: ['every', 'some', 'union', 'intersection'],
      description: 'How custom filters are combined',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'intersection' } },
    },
    noFilter: {
      control: 'boolean',
      description: 'Disable all item filtering',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    multiSort: {
      control: 'boolean',
      description: 'Enable sorting on multiple properties',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    mustSort: {
      control: 'boolean',
      description: 'Sorting cannot be disabled',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    returnObject: {
      control: 'boolean',
      description: 'Return object directly instead of item-value',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;

// Default
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UDataIterator, UCard, UCardTitle, UCardText, URow, UCol, UBtn, UPagination },
  setup() {
    const page = ref(1);
    return { args, page };
  },
  template: `
    <u-data-iterator v-bind="args" :page="page">
      <template #default="{ items }">
        <template v-for="(item, i) in items" :key="i">
          <u-card v-bind="item.raw ?? item"></u-card>
          <br />
        </template>
      </template>

      <template #footer="{ pageCount }">
        <u-pagination v-model="page" :length="pageCount" />
      </template>
    </u-data-iterator>
  `,
});

Default.args = {
  items: Array.from({ length: 15 }, (_, i) => ({
    title: 'Item ' + (i + 1),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!',
  })),
  itemsPerPage: 3,
};

// Default (slot)
export const DefaultSlot: StoryFn<ComponentArgs> = () => ({
  components: {
    UDataIterator,
    URow,
    UCol,
    UCard,
    UCardTitle,
    UCardText,
    UIcon,
    USwitch,
    UDivider,
    UExpandTransition,
    UList,
    UListItem,
  },
  setup() {
    const desserts = [
      {
        name: 'Frozen Yogurt',
        description:
          'A tangy and creamy dessert made from yogurt and sometimes fruit, Frozen Yogurt is a lighter alternative to ice cream. Perfect for those who crave a sweet treat but want to keep it on the healthier side.',
        icon: 'hugeicons:ice-cream-01',
        color: '#6EC1E4',
        calories: 159,
        fat: 6,
        carbs: 24,
        protein: 4,
        sodium: 87,
        calcium: '14%',
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        description:
          "A classic treat featuring a layer of creamy ice cream sandwiched between two cookies or cake layers. Ideal for those hot summer days when you can't decide between a cookie and ice cream.",
        icon: 'hugeicons:cookie',
        color: '#F4A261',
        calories: 237,
        fat: 9,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: '8%',
        iron: '1%',
      },
      {
        name: 'Eclair',
        description:
          'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
        icon: 'hugeicons:cake-01',
        color: '#6D4C41',
        calories: 262,
        fat: 16,
        carbs: 23,
        protein: 6,
        sodium: 337,
        calcium: '6%',
        iron: '7%',
      },
      {
        name: 'Cupcake',
        description:
          'A small, individual cake topped with frosting and often adorned with sprinkles or other decorations. Great for parties or as a quick indulgence when you need a sugar fix.',
        color: '#FFADAD',
        icon: 'hugeicons:cupcake-01',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: '3%',
        iron: '8%',
      },
    ];
    return { desserts };
  },
  template: `
    <u-data-iterator :items="desserts" item-value="name">
      <template v-slot:default="{ items, isExpanded, toggleExpand }">
        <u-row>
          <u-col v-for="item in items" :key="item.raw?.name ?? item.name" cols="12" md="6" sm="12">
            <u-card>
              <u-card-title class="d-flex align-center">
                <u-icon :color="item.raw?.color ?? item.color" :icon="item.raw?.icon ?? item.icon" size="18" start></u-icon>
                <h4>{{ item.raw?.name ?? item.name }}</h4>
              </u-card-title>
              <u-card-text>
                {{ item.raw?.description ?? item.description }}
              </u-card-text>
              <div class="px-4">
                <u-switch
                  :label="(isExpanded(item) ? 'Hide' : 'Show') + ' details'"
                  :model-value="isExpanded(item)"
                  density="compact"
                  inset
                  @click="() => toggleExpand(item)"
                ></u-switch>
              </div>
              <u-divider></u-divider>
              <u-expand-transition>
                <div v-if="isExpanded(item)">
                  <u-list :lines="false" density="compact">
                    <u-list-item :title="'🔥 Calories: ' + (item.raw?.calories ?? item.calories)" active></u-list-item>
                    <u-list-item :title="'🍔 Fat: ' + (item.raw?.fat ?? item.fat)"></u-list-item>
                    <u-list-item :title="'🍞 Carbs: ' + (item.raw?.carbs ?? item.carbs)"></u-list-item>
                    <u-list-item :title="'🍗 Protein: ' + (item.raw?.protein ?? item.protein)"></u-list-item>
                    <u-list-item :title="'🧂 Sodium: ' + (item.raw?.sodium ?? item.sodium)"></u-list-item>
                    <u-list-item :title="'🦴 Calcium: ' + (item.raw?.calcium ?? item.calcium)"></u-list-item>
                    <u-list-item :title="'🧲 Iron: ' + (item.raw?.iron ?? item.iron)"></u-list-item>
                  </u-list>
                </div>
              </u-expand-transition>
            </u-card>
          </u-col>
        </u-row>
      </template>
    </u-data-iterator>
  `,
});

DefaultSlot.parameters = {
  docs: {
    description: {
      story:
        'The v-data-iterator has internal state for both selection and expansion, just like v-data-table. In this example we use the methods isExpanded and toggleExpand available on the default slot.',
    },
    source: {
      code: `<template>
  <u-data-iterator :items="desserts" item-value="name">
    <template v-slot:default="{ items, isExpanded, toggleExpand }">
      <u-row>
        <u-col v-for="item in items" :key="item.name" cols="12" md="6" sm="12">
          <u-card>
            <u-card-title class="d-flex align-center">
              <u-icon :color="item.color" :icon="item.icon" size="18" start></u-icon>
              <h4>{{ item.name }}</h4>
            </u-card-title>
            <u-card-text>
              {{ item.description }}
            </u-card-text>
            <div class="px-4">
              <u-switch
                :label="(isExpanded(item) ? 'Hide' : 'Show') + ' details'"
                :model-value="isExpanded(item)"
                density="compact"
                inset
                @click="() => toggleExpand(item)"
              />
            </div>
            <u-divider />
            <u-expand-transition>
              <div v-if="isExpanded(item)">
                <u-list :lines="false" density="compact">
                  <u-list-item :title="'🔥 Calories: ' + item.calories" active />
                  <u-list-item :title="'🍔 Fat: ' + item.fat" />
                  <u-list-item :title="'🍞 Carbs: ' + item.carbs" />
                  <u-list-item :title="'🍗 Protein: ' + item.protein" />
                  <u-list-item :title="'🧂 Sodium: ' + item.sodium" />
                  <u-list-item :title="'🦴 Calcium: ' + item.calcium" />
                  <u-list-item :title="'🧲 Iron: ' + item.iron" />
                </u-list>
              </div>
            </u-expand-transition>
          </u-card>
        </u-col>
      </u-row>
    </template>
  </u-data-iterator>
</template>

<script setup lang="ts">
const desserts = [
  { name: 'Frozen Yogurt', icon: 'hugeicons:ice-cream-01', color: '#6EC1E4', description: '...', calories: 159, fat: 6, carbs: 24, protein: 4, sodium: 87, calcium: '14%', iron: '1%' },
  { name: 'Ice cream sandwich', icon: 'hugeicons:cookie', color: '#F4A261', description: '...', calories: 237, fat: 9, carbs: 37, protein: 4.3, sodium: 129, calcium: '8%', iron: '1%' },
  { name: 'Eclair', icon: 'hugeicons:cake-01', color: '#6D4C41', description: '...', calories: 262, fat: 16, carbs: 23, protein: 6, sodium: 337, calcium: '6%', iron: '7%' },
];
</script>`,
    },
  },
};

// Header and footer (slot)
export const HeaderAndFooter: StoryFn<ComponentArgs> = () => ({
  components: {
    UDataIterator,
    URow,
    UCol,
    UImg,
    UListItem,
    UFooter,
    UTable,
    UBtn,
    UCard,
    UContainer,
  },
  setup() {
    const itemsPerPage = shallowRef(4);
    const mice = [
      {
        name: 'Logitech G Pro X',
        color: '14, 151, 210',
        dpi: 16000,
        buttons: 8,
        weight: '63g',
        wireless: true,
        price: 149.99,
        description: 'Logitech G Pro X',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png',
      },
      {
        name: 'Razer DeathAdder V2',
        color: '12, 146, 47',
        dpi: 20000,
        buttons: 8,
        weight: '82g',
        wireless: false,
        price: 69.99,
        description: 'Razer DeathAdder V2',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png',
      },
      {
        name: 'Corsair Dark Core RGB',
        color: '107, 187, 226',
        dpi: 18000,
        buttons: 9,
        weight: '133g',
        wireless: true,
        price: 89.99,
        description: 'Corsair Dark Core RGB',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png',
      },
      {
        name: 'SteelSeries Rival 3',
        color: '228, 196, 69',
        dpi: 8500,
        buttons: 6,
        weight: '77g',
        wireless: false,
        price: 29.99,
        description: 'SteelSeries Rival 3',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png',
      },
      {
        name: 'HyperX Pulsefire FPS Pro',
        color: '156, 82, 251',
        dpi: 16000,
        buttons: 6,
        weight: '95g',
        wireless: false,
        price: 44.99,
        description: 'HyperX Pulsefire FPS Pro',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/6.png',
      },
      {
        name: 'Zowie EC2',
        color: '166, 39, 222',
        dpi: 3200,
        buttons: 5,
        weight: '90g',
        wireless: false,
        price: 69.99,
        description: 'Zowie EC2',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/7.png',
      },
      {
        name: 'Roccat Kone AIMO',
        color: '131, 9, 10',
        dpi: 16000,
        buttons: 10,
        weight: '130g',
        wireless: false,
        price: 79.99,
        description: 'Roccat Kone AIMO',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/8.png',
      },
      {
        name: 'Logitech G903',
        color: '232, 94, 102',
        dpi: 12000,
        buttons: 11,
        weight: '110g',
        wireless: true,
        price: 129.99,
        description: 'Logitech G903',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/9.png',
      },
    ];

    function onClickSeeAll() {
      itemsPerPage.value = itemsPerPage.value === 4 ? mice.length : 4;
    }

    return { itemsPerPage, mice, onClickSeeAll };
  },
  template: `
    <u-data-iterator :items="mice" :items-per-page="itemsPerPage">
      <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
        <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
          <div class="text-truncate">Most popular mice</div>
          <div class="d-flex align-center">
            <u-btn class="me-8" variant="text" @click="onClickSeeAll">
              <span class="text-decoration-underline text-none">See all</span>
            </u-btn>
            <div class="d-inline-flex">
              <u-btn :disabled="page === 1" class="me-2" icon="hugeicons:arrow-left-01" size="small" variant="tonal" @click="prevPage"></u-btn>
              <u-btn :disabled="page === pageCount" icon="hugeicons:arrow-right-01" size="small" variant="tonal" @click="nextPage"></u-btn>
            </div>
          </div>
        </h1>
      </template>

      <template v-slot:default="{ items }">
        <u-row>
          <u-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
            <u-card border>
              <u-img :gradient="'to top right, rgba(255, 255, 255, .1), rgba(' + (item.raw?.color || item.color) + ', .15)'" :src="item.raw?.src || item.src" height="150" cover />
              <u-list-item :title="item.raw?.name ?? item.name" density="comfortable" lines="two" subtitle="Lorem ipsum dil orei namdie dkaf">
                <template v-slot:title>
                  <strong class="text-h6">{{ item.raw?.name ?? item.name }}</strong>
                </template>
              </u-list-item>
              <u-table class="text-caption" density="compact">
                <tbody>
                  <tr align="right"><th>DPI:</th><td>{{ item.raw?.dpi ?? item.dpi }}</td></tr>
                  <tr align="right"><th>Buttons:</th><td>{{ item.raw?.buttons ?? item.buttons }}</td></tr>
                  <tr align="right"><th>Weight:</th><td>{{ item.raw?.weight ?? item.weight }}</td></tr>
                  <tr align="right"><th>Wireless:</th><td>{{ (item.raw?.wireless ?? item.wireless) ? 'Yes' : 'No' }}</td></tr>
                  <tr align="right"><th>Price:</th><td>{{ '$' + (item.raw?.price ?? item.price) }}</td></tr>
                </tbody>
              </u-table>
            </u-card>
          </u-col>
        </u-row>
      </template>

      <template v-slot:footer="{ page, pageCount }">
        <u-footer class="justify-space-between text-body-2 mt-4" color="surface-variant">
          Total mice: {{ mice.length }}
          <div>Page {{ page }} of {{ pageCount }}</div>
        </u-footer>
      </template>
    </u-data-iterator>
  `,
});

HeaderAndFooter.parameters = {
  docs: {
    description: {
      story: 'The v-data-iterator has both a header and footer slot for adding extra content.',
    },
    source: {
      code: `<template>
  <u-data-iterator :items="mice" :items-per-page="itemsPerPage">
    <template v-slot:header="{ page, pageCount, prevPage, nextPage }">
      <h1 class="text-h4 font-weight-bold d-flex justify-space-between mb-4 align-center">
        <div class="text-truncate">Most popular mice</div>
        <div class="d-flex align-center">
          <u-btn class="me-8" variant="text" @click="onClickSeeAll">
            <span class="text-decoration-underline text-none">See all</span>
          </u-btn>
          <div class="d-inline-flex">
            <u-btn :disabled="page === 1" class="me-2" icon="hugeicons:arrow-left-01" size="small" variant="tonal" @click="prevPage" />
            <u-btn :disabled="page === pageCount" icon="hugeicons:arrow-right-01" size="small" variant="tonal" @click="nextPage" />
          </div>
        </div>
      </h1>
    </template>

    <template v-slot:default="{ items }">
      <u-row>
        <u-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
          <u-card border>
            <u-img :gradient="'to top right, rgba(255, 255, 255, .1), rgba(' + item.color + ', .15)'" :src="item.src" height="150" cover />
            <u-list-item :title="item.name" density="comfortable" lines="two" subtitle="Lorem ipsum dil orei namdie dkaf">
              <template #title>
                <strong class="text-h6">{{ item.name }}</strong>
              </template>
            </u-list-item>
            <u-table class="text-caption" density="compact">
              <tbody>
                <tr align="right"><th>DPI:</th><td>{{ item.dpi }}</td></tr>
                <tr align="right"><th>Buttons:</th><td>{{ item.buttons }}</td></tr>
                <tr align="right"><th>Weight:</th><td>{{ item.weight }}</td></tr>
                <tr align="right"><th>Wireless:</th><td>{{ item.wireless ? 'Yes' : 'No' }}</td></tr>
                <tr align="right"><th>Price:</th><td>{{ '$' + item.price }}</td></tr>
              </tbody>
            </u-table>
          </u-card>
        </u-col>
      </u-row>
    </template>

    <template v-slot:footer="{ page, pageCount }">
      <u-footer class="justify-space-between text-body-2 mt-4" color="surface-variant">
        Total mice: {{ mice.length }}
        <div>Page {{ page }} of {{ pageCount }}</div>
      </u-footer>
    </template>
  </u-data-iterator>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
const itemsPerPage = shallowRef(4);
const mice = [
  { name: 'Logitech G Pro X', color: '14, 151, 210', dpi: 16000, buttons: 8, weight: '63g', wireless: true, price: 149.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png' },
  { name: 'Razer DeathAdder V2', color: '12, 146, 47', dpi: 20000, buttons: 8, weight: '82g', wireless: false, price: 69.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png' },
  { name: 'Corsair Dark Core RGB', color: '107, 187, 226', dpi: 18000, buttons: 9, weight: '133g', wireless: true, price: 89.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png' },
];
function onClickSeeAll () { itemsPerPage.value = itemsPerPage.value === 4 ? mice.length : 4 }
</script>`,
    },
  },
};

// Controllable props
export const ControllableProps: StoryFn<ComponentArgs> = () => ({
  components: { UCard, UDataIterator, UToolbar, UTextField, UContainer, URow, UCol, UBtn, UIcon },
  setup() {
    const search = shallowRef('');
    const games = [
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png',
        title: 'The Sci-Fi Shooter Experience',
        subtitle: 'Dive into a futuristic world of intense battles and alien encounters.',
        advanced: false,
        duration: '8 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png',
        title: 'Epic Adventures in Open Worlds',
        subtitle: 'Embark on a journey through vast, immersive landscapes and quests.',
        advanced: true,
        duration: '10 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png',
        title: 'Surviving the Space Station Horror',
        subtitle: 'Navigate a haunted space station in this chilling survival horror game.',
        advanced: false,
        duration: '9 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/5.png',
        title: 'Neon-Lit High-Speed Racing Thrills',
        subtitle: 'Experience adrenaline-pumping races in a futuristic, neon-soaked city.',
        advanced: true,
        duration: '12 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/6.png',
        title: 'Retro-Style Platformer Adventures',
        subtitle: 'Jump and dash through pixelated worlds in this classic-style platformer.',
        advanced: false,
        duration: '11 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/7.png',
        title: 'Medieval Strategic War Campaigns',
        subtitle: 'Lead armies into epic battles and conquer kingdoms in this strategic war game.',
        advanced: true,
        duration: '10 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/1.png',
        title: 'Underwater VR Exploration Adventure',
        subtitle: 'Dive deep into the ocean and discover the mysteries of the underwater world.',
        advanced: true,
        duration: '11 minutes',
      },
      {
        img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/8.png',
        title: '1920s Mystery Detective Chronicles',
        subtitle: 'Solve crimes and uncover secrets in the glamorous 1920s era.',
        advanced: false,
        duration: '9 minutes',
      },
    ];
    return { search, games };
  },
  template: `
    <u-card>
      <u-data-iterator :items="games" :items-per-page="3" :search="search">
        <template v-slot:header>
          <u-toolbar class="px-2">
            <u-text-field
              v-model="search"
              density="comfortable"
              placeholder="Search"
              prepend-inner-icon="hugeicons:search-01"
              style="max-width: 300px;"
              variant="solo"
              clearable
              hide-details
            ></u-text-field>
          </u-toolbar>
        </template>

        <template v-slot:default="{ items }">
          <u-container class="pa-2" fluid>
            <u-row dense>
              <u-col v-for="item in items" :key="item.raw?.title ?? item.title" cols="auto" md="4">
                <u-card class="pb-3" border flat>
                  <u-img :src="item.raw?.img ?? item.img"></u-img>
                  <u-list-item :subtitle="item.raw?.subtitle ?? item.subtitle" class="mb-2">
                    <template v-slot:title>
                      <strong class="text-h6 mb-2">{{ item.raw?.title ?? item.title }}</strong>
                    </template>
                  </u-list-item>
                  <div class="d-flex justify-space-between px-4">
                    <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                      <u-icon icon="hugeicons:clock-01" start></u-icon>
                      <div class="text-truncate">{{ item.raw?.duration ?? item.duration }}</div>
                    </div>
                    <u-btn class="text-none" size="small" text="Read" variant="flat" border></u-btn>
                  </div>
                </u-card>
              </u-col>
            </u-row>
          </u-container>
        </template>

        <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
          <div class="d-flex align-center justify-center pa-4">
            <u-btn :disabled="page === 1" density="comfortable" icon="hugeicons:arrow-left-01" variant="tonal" rounded @click="prevPage"></u-btn>
            <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>
            <u-btn :disabled="page >= pageCount" density="comfortable" icon="hugeicons:arrow-right-01" variant="tonal" rounded @click="nextPage"></u-btn>
          </div>
        </template>
      </u-data-iterator>
    </u-card>
  `,
});

ControllableProps.parameters = {
  docs: {
    description: {
      story:
        'Sorting, filters and pagination can be controlled externally by using the individual props',
    },
    source: {
      code: `<template>
  <u-card>
    <u-data-iterator :items="games" :items-per-page="3" :search="search">
      <template #header>
        <u-toolbar class="px-2">
          <u-text-field
            v-model="search"
            density="comfortable"
            placeholder="Search"
            prepend-inner-icon="hugeicons:search-01"
            style="max-width: 300px;"
            variant="solo"
            clearable
            hide-details
          />
        </u-toolbar>
      </template>

      <template #default="{ items }">
        <u-container class="pa-2" fluid>
          <u-row dense>
            <u-col v-for="item in items" :key="item.title" cols="auto" md="4">
              <u-card class="pb-3" border flat>
                <u-img :src="item.img" />
                <u-list-item :subtitle="item.subtitle" class="mb-2">
                  <template #title>
                    <strong class="text-h6 mb-2">{{ item.title }}</strong>
                  </template>
                </u-list-item>
                <div class="d-flex justify-space-between px-4">
                  <div class="d-flex align-center text-caption text-medium-emphasis me-1">
                    <u-icon icon="hugeicons:clock-01" start />
                    <div class="text-truncate">{{ item.duration }}</div>
                  </div>
                  <u-btn class="text-none" size="small" text="Read" variant="flat" border />
                </div>
              </u-card>
            </u-col>
          </u-row>
        </u-container>
      </template>

      <template #footer="{ page, pageCount, prevPage, nextPage }">
        <div class="d-flex align-center justify-center pa-4">
          <u-btn :disabled="page === 1" density="comfortable" icon="hugeicons:arrow-left-01" variant="tonal" rounded @click="prevPage" />
          <div class="mx-2 text-caption">Page {{ page }} of {{ pageCount }}</div>
          <u-btn :disabled="page >= pageCount" density="comfortable" icon="hugeicons:arrow-right-01" variant="tonal" rounded @click="nextPage" />
        </div>
      </template>
    </u-data-iterator>
  </u-card>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
const search = shallowRef('');
const games = [
  { img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/4.png', title: 'The Sci-Fi Shooter Experience', subtitle: '...', duration: '8 minutes' },
  { img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/2.png', title: 'Epic Adventures in Open Worlds', subtitle: '...', duration: '10 minutes' },
  { img: 'https://cdn.vuetifyjs.com/docs/images/graphics/games/3.png', title: 'Surviving the Space Station Horror', subtitle: '...', duration: '9 minutes' },
];
</script>`,
    },
  },
};

// Loader props
export const LoaderProps: StoryFn<ComponentArgs> = () => ({
  components: { UDataIterator, URow, UCol, UImg, UListItem, USkeletonLoader, UTable },
  setup() {
    const itemsPerPage = shallowRef(4);
    const mice = [
      {
        name: 'Logitech G Pro X',
        color: '14, 151, 210',
        dpi: 16000,
        buttons: 8,
        weight: '63g',
        wireless: true,
        price: 149.99,
        description: 'Logitech G Pro X',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png',
      },
      {
        name: 'Razer DeathAdder V2',
        color: '12, 146, 47',
        dpi: 20000,
        buttons: 8,
        weight: '82g',
        wireless: false,
        price: 69.99,
        description: 'Razer DeathAdder V2',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png',
      },
      {
        name: 'Corsair Dark Core RGB',
        color: '107, 187, 226',
        dpi: 18000,
        buttons: 9,
        weight: '133g',
        wireless: true,
        price: 89.99,
        description: 'Corsair Dark Core RGB',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png',
      },
      {
        name: 'SteelSeries Rival 3',
        color: '228, 196, 69',
        dpi: 8500,
        buttons: 6,
        weight: '77g',
        wireless: false,
        price: 29.99,
        description: 'SteelSeries Rival 3',
        src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png',
      },
    ];
    return { itemsPerPage, mice };
  },
  template: `
    <u-data-iterator :items="mice" :items-per-page="itemsPerPage" :loading="true">
      <template v-slot:default="{ items }">
        <u-row>
          <u-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
            <u-card border>
              <u-img :gradient="'to top right, rgba(255, 255, 255, .1), rgba(' + (item.raw?.color || item.color) + ', .15)'" :src="item.raw?.src || item.src" height="150" cover />
              <u-list-item :title="item.raw?.name ?? item.name" density="comfortable" lines="two" subtitle="Lorem ipsum dil orei namdie dkaf">
                <template v-slot:title>
                  <strong class="text-h6">{{ item.raw?.name ?? item.name }}</strong>
                </template>
              </u-list-item>
              <u-table class="text-caption" density="compact">
                <tbody>
                  <tr align="right"><th>DPI:</th><td>{{ item.raw?.dpi ?? item.dpi }}</td></tr>
                  <tr align="right"><th>Buttons:</th><td>{{ item.raw?.buttons ?? item.buttons }}</td></tr>
                  <tr align="right"><th>Weight:</th><td>{{ item.raw?.weight ?? item.weight }}</td></tr>
                  <tr align="right"><th>Wireless:</th><td>{{ (item.raw?.wireless ?? item.wireless) ? 'Yes' : 'No' }}</td></tr>
                  <tr align="right"><th>Price:</th><td>{{ '$' + (item.raw?.price ?? item.price) }}</td></tr>
                </tbody>
              </u-table>
            </u-card>
          </u-col>
        </u-row>
      </template>

      <template v-slot:loader>
        <u-row>
          <u-col v-for="(_, k) in [0, 1, 2, 3]" :key="k" cols="12" sm="6" xl="3">
            <u-skeleton-loader class="border" type="image, article"></u-skeleton-loader>
          </u-col>
        </u-row>
      </template>
    </u-data-iterator>
  `,
});

LoaderProps.parameters = {
  docs: {
    description: {
      story: 'Loader can be used to change loader on “loading” prop',
    },
    source: {
      code: `<template>
  <u-data-iterator :items="mice" :items-per-page="itemsPerPage" :loading="true">
    <template #default="{ items }">
      <u-row>
        <u-col v-for="(item, i) in items" :key="i" cols="12" sm="6" xl="3">
          <u-card border>
            <u-img :gradient="'to top right, rgba(255, 255, 255, .1), rgba(' + item.color + ', .15)'" :src="item.src" height="150" cover />
            <u-list-item :title="item.name" density="comfortable" lines="two" subtitle="Lorem ipsum dil orei namdie dkaf">
              <template #title>
                <strong class="text-h6">{{ item.name }}</strong>
              </template>
            </u-list-item>
            <u-table class="text-caption" density="compact">
              <tbody>
                <tr align="right"><th>DPI:</th><td>{{ item.dpi }}</td></tr>
                <tr align="right"><th>Buttons:</th><td>{{ item.buttons }}</td></tr>
                <tr align="right"><th>Weight:</th><td>{{ item.weight }}</td></tr>
                <tr align="right"><th>Wireless:</th><td>{{ item.wireless ? 'Yes' : 'No' }}</td></tr>
                <tr align="right"><th>Price:</th><td>{{ '$' + item.price }}</td></tr>
              </tbody>
            </u-table>
          </u-card>
        </u-col>
      </u-row>
    </template>
    <template #loader>
      <u-row>
        <u-col v-for="(_, k) in [0, 1, 2, 3]" :key="k" cols="12" sm="6" xl="3">
          <u-skeleton-loader class="border" type="image, article" />
        </u-col>
      </u-row>
    </template>
  </u-data-iterator>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue';
const itemsPerPage = shallowRef(4);
const mice = [
  { name: 'Logitech G Pro X', color: '14, 151, 210', dpi: 16000, buttons: 8, weight: '63g', wireless: true, price: 149.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/1.png' },
  { name: 'Razer DeathAdder V2', color: '12, 146, 47', dpi: 20000, buttons: 8, weight: '82g', wireless: false, price: 69.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/2.png' },
  { name: 'Corsair Dark Core RGB', color: '107, 187, 226', dpi: 18000, buttons: 9, weight: '133g', wireless: true, price: 89.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/3.png' },
  { name: 'SteelSeries Rival 3', color: '228, 196, 69', dpi: 8500, buttons: 6, weight: '77g', wireless: false, price: 29.99, src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/4.png' },
];
</script>`,
    },
  },
};
