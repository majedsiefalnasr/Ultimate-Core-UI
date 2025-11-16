import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UBtn, UInfiniteScroll } from '../index';

interface ComponentArgs {
  // Component props go here
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & display/Infinite Scrolls',
  component: UInfiniteScroll,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-infinite-scroll` component displays a potentially infinite list by loading more items when scrolling. Supports vertical and horizontal directions and both auto (intersect) and manual modes.',
      },
      import: `import { UInfiniteScroll } from '@ultimate/core-ui/components'`,
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

          return `
            <u-infinite-scroll${attrsString} @load="load">
              <template v-for="(item, index) in items" :key="item">
                <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
                  Item number #{{ item }}
                </div>
              </template>
            </u-infinite-scroll>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VInfiniteScroll',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/infinite-scroller/',
    },
    Primary: {
      description:
        'When scrolling towards the bottom, new items will be rendered either automatically, or manually with the click of a button.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-infinite-scroll',
            link: 'https://vuetifyjs.com/en/api/v-infinite-scroll/',
          },
          description: 'Primary Component',
        },
      ],
    },
    anatomy: {
      title: 'Anatomy',
      description: 'The default slot is the content container; a loader area appears when loading.',
      Image: '/images/stories/UInfiniteScroll.anatomy.png',
      data: [
        { element: 'Container', description: 'The infinite scroller content container' },
        { element: 'Loader', description: 'The loader content area' },
      ],
    },
  },
  argTypes: {
    color: {
      control: 'text',
      description:
        'Applies specified color to the control - supports utility colors (for example success or purple) or css color (#033 or rgba(...)).',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    direction: {
      control: { type: 'inline-radio' },
      options: ['horizontal', 'vertical'],
      description: 'Specifies if scroller is vertical or horizontal.',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: "'vertical'" },
      },
    },
    emptyText: {
      name: 'empty-text',
      control: 'text',
      description: 'Text shown when there is no more content to load.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.infiniteScroll.empty'" },
      },
    },
    height: {
      control: 'text',
      description: 'Sets the height for the component (string or number).',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    loadMoreText: {
      name: 'load-more-text',
      control: 'text',
      description: 'Text shown in default load more button, when in manual mode.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'$vuetify.infiniteScroll.loadMore'" },
      },
    },
    margin: {
      control: 'text',
      description:
        'Value sent to the intersection observer. Will make the observer trigger earlier, by the margin (px) value supplied.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxHeight: {
      name: 'max-height',
      control: 'text',
      description: 'Sets the maximum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    maxWidth: {
      name: 'max-width',
      control: 'text',
      description: 'Sets the maximum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minHeight: {
      name: 'min-height',
      control: 'text',
      description: 'Sets the minimum height for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    minWidth: {
      name: 'min-width',
      control: 'text',
      description: 'Sets the minimum width for the component.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    mode: {
      control: { type: 'inline-radio' },
      options: ['intersect', 'manual'],
      description:
        "Specifies if content should load automatically when scrolling ('intersect') or manually ('manual').",
      table: {
        type: { summary: "'intersect' | 'manual'" },
        defaultValue: { summary: "'intersect'" },
      },
    },
    side: {
      control: { type: 'inline-radio' },
      options: ['end', 'start', 'both'],
      description: 'Specifies the side where new content should appear.',
      table: { type: { summary: "'end' | 'start' | 'both'" }, defaultValue: { summary: "'end'" } },
    },
    tag: {
      control: 'text',
      description: 'Specify a custom tag used on the root element (string or component).',
      table: {
        type: { summary: 'string | (new () => any) | FunctionalComponent' },
        defaultValue: { summary: "'div'" },
      },
    },
    width: {
      control: 'text',
      description: 'Sets the width for the component (string or number).',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UInfiniteScroll },
  setup() {
    const items = ref(Array.from({ length: 30 }, (k, v) => v + 1));

    async function api() {
      return new Promise<number[]>((resolve) => {
        setTimeout(() => {
          const last = items.value.at(-1) ?? 0;
          resolve(Array.from({ length: 10 }, (k, v) => v + last + 1));
        }, 1000);
      });
    }

    async function load({ done }: { done: (status: string) => void }) {
      const res = (await api()) as number[];
      items.value.push(...res);
      done('ok');
    }

    return { args, items, load };
  },
  template: `
    <u-infinite-scroll v-bind="args" @load="load">
      <template v-for="(item, index) in items" :key="item">
        <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
          Item number #{{ item }}
        </div>
      </template>
    </u-infinite-scroll>
  `,
});

Default.args = {
  maxHeight: '400',
} as ComponentArgs;

export const Mode: StoryFn<ComponentArgs> = (args) => ({
  components: { UInfiniteScroll },
  setup() {
    const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

    function load({ done }: { done: (status: string) => void }) {
      setTimeout(() => {
        const last = items.value.at(-1) ?? 0;
        items.value.push(...Array.from({ length: 10 }, (k, v) => v + last + 1));
        done('ok');
      }, 1000);
    }

    return { args, items, load };
  },
  template: `
    <UInfiniteScroll v-bind="args" height="300" mode="manual" @load="load">
      <template v-for="(item, index) in items" :key="item">
        <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
          Item number {{ item }}
        </div>
      </template>
    </UInfiniteScroll>
  `,
});

Mode.args = {} as ComponentArgs;
Mode.parameters = {
  docs: {
    source: {
      code: `<v-infinite-scroll height="300" mode="manual" @load="load">
  <template v-for="(item, index) in items" :key="item">
    <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
      Item number {{ item }}
    </div>
  </template>
</v-infinite-scroll>
<script setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))
function load ({ done }) {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))
    done('ok')
  }, 1000)
}
</script>`,
    },
  },
};

export const Direction: StoryFn<ComponentArgs> = (args) => ({
  components: { UInfiniteScroll },
  setup() {
    const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

    function load({ done }: { done: (status: string) => void }) {
      setTimeout(() => {
        const last = items.value.at(-1) ?? 0;
        items.value.push(...Array.from({ length: 10 }, (k, v) => v + last + 1));
        done('ok');
      }, 1000);
    }

    return { args, items, load };
  },
  template: `
    <UInfiniteScroll v-bind="args" direction="horizontal" @load="load">
      <template v-for="(item, index) in items" :key="item">
        <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']" style="display:inline-block; min-width:120px;">
          Item #{{ item }}
        </div>
      </template>
    </UInfiniteScroll>
  `,
});

Direction.args = {} as ComponentArgs;
Direction.parameters = {
  docs: {
    source: {
      code: `<v-infinite-scroll direction="horizontal" @load="load">
  <template v-for="(item, index) in items" :key="item">
    <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
      Item #{{ item }}
    </div>
  </template>
</v-infinite-scroll>
<script setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))

function load ({ done }) {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))
    done('ok')
  }, 1000)
}
</script>`,
    },
  },
};

export const Side: StoryFn<ComponentArgs> = (args) => ({
  components: { UInfiniteScroll, UBtn },
  setup() {
    const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));
    function load({ done }: { done: (status: string) => void }) {
      setTimeout(() => {
        items.value.unshift(...Array.from({ length: 10 }, (k, v) => items.value[0] - (10 - v)));
        done('ok');
      }, 1000);
    }

    return { args, items, load };
  },
  template: `
  <u-infinite-scroll
    height="300"
    side="start"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </u-infinite-scroll>
  `,
});

Side.args = {} as ComponentArgs;
Side.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-infinite-scroll
    height="300"
    side="start"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['px-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item number {{ item }}
      </div>
    </template>
  </u-infinite-scroll>
</template>
<script setup>
  import { ref } from 'vue'

  const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))
  function load ({ done }) {
    setTimeout(() => {
      items.value.unshift(...Array.from({ length: 10 }, (k, v) => items.value[0] - (10 - v)))
      done('ok')
    }, 1000)
  }
</script>`,
    },
  },
};

export const Color: StoryFn<ComponentArgs> = (args) => ({
  components: { UInfiniteScroll },
  setup() {
    const items = ref(Array.from({ length: 50 }, (k, v) => v + 1));

    function load({ done }: { done: (status: string) => void }) {
      setTimeout(() => {
        const last = items.value.at(-1) ?? 0;
        items.value.push(...Array.from({ length: 10 }, (k, v) => v + last + 1));
        done('ok');
      }, 1000);
    }

    return { args, items, load };
  },
  template: `
    <u-infinite-scroll
      color="secondary"
      height="400"
      mode="manual"
      @load="load"
    >
      <template v-for="(item, index) in items" :key="item">
        <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
          Item #{{ item }}
        </div>
      </template>
    </u-infinite-scroll>
  `,
});

Color.args = {} as ComponentArgs;
Color.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-infinite-scroll
    color="secondary"
    height="400"
    mode="manual"
    @load="load"
  >
    <template v-for="(item, index) in items" :key="item">
      <div :class="['pa-2', index % 2 === 0 ? 'bg-grey-lighten-2' : '']">
        Item #{{ item }}
      </div>
    </template>
  </u-infinite-scroll>
</template>
<script setup>
import { ref } from 'vue'

const items = ref(Array.from({ length: 50 }, (k, v) => v + 1))
function load ({ done }) {
  setTimeout(() => {
    items.value.push(...Array.from({ length: 10 }, (k, v) => v + items.value.at(-1) + 1))
    done('ok')
  }, 1000)
}
</script>`,
    },
  },
};
