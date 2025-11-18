import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import { UList, UListItem, UPullToRefresh } from '../index';

interface ComponentArgs {
  disabled?: boolean;
  pullDownThreshold?: number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Utilities/Pull To Refresh',
  component: UPullToRefresh,
  parameters: {
    docs: {
      description: {
        component:
          'The PullToRefresh allows users to update content with a simple downward swipe on their screen. Works for Mobile and Desktop.',
      },
      import: `import { UPullToRefresh } from '@ultimate/core-ui/components'`,
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

          console.log('attrsString', attrsString);
          return `
<template>
  <div class="scrollable-container bg-surface-light">
    <u-pull-to-refresh${attrsString} @load="load">
      <u-list>
        <u-list-item
          v-for="item in items"
          :key="item.value"
          :title="item.title"
        ></u-list-item>
      </u-list>
    </u-pull-to-refresh>
  </div>
</template>
<script setup>
  import { ref } from 'vue'

  const items = ref([
    { title: '1', value: 1 },
    { title: '2', value: 2 },
    { title: '3', value: 3 },
  ])

  let count = 2

  async function load ({ done }) {
    console.log('loading')
    await new Promise(resolve => setTimeout(() => resolve(), 2000))
    items.value = Array.from({ length: count * 3 }, (k, v) => ({
      title: \`\${v + 1}\`,
      value: v + 1,
    }))
    console.log('load finish')
    count++
    done('ok')
  }
</script>
<style>
.scrollable-container {
  max-height: 300px;
  overflow-y: scroll;
}
</style>
          `;
        },
      },
    },
    Vuetify: {
      component: 'VPullToRefresh',
      content:
        "This component is built on top of Vuetify's VPullToRefresh component. For detailed usage and props, refer to the Vuetify documentation linked below.",
      link: 'https://vuetifyjs.com/en/components/pull-to-refresh/',
    },
    Primary: {
      description: 'Drag the list downward to activate the pull-to-refresh feature.',
    },
    api: {
      data: [
        {
          element: {
            title: 'v-pull-to-refresh',
            link: 'https://vuetifyjs.com/en/api/v-pull-to-refresh/',
          },
          description: 'Primary Component',
        },
      ],
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Removes the ability to click or target the component.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    pullDownThreshold: {
      control: 'number',
      description: 'The distance the user must pull down to trigger a refresh.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '64' },
      },
    },
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UList, UListItem, UPullToRefresh },
  setup() {
    const items = ref([
      { title: '1', value: 1 },
      { title: '2', value: 2 },
      { title: '3', value: 3 },
    ]);
    let count = 2;

    const load = async ({ done }: { done: (status: string) => void }) => {
      console.log('loading');
      await new Promise((resolve) => setTimeout(() => resolve(undefined), 2000));
      items.value = Array.from({ length: count * 3 }, (_, v) => ({
        title: `${v + 1}`,
        value: v + 1,
      }));
      console.log('load finish');
      count++;
      done('ok');
    };

    return { items, load, args };
  },
  template: `
    <div class="scrollable-container bg-surface-light" style="max-height: 300px; overflow-y: scroll;">
      <u-pull-to-refresh
        v-bind="args"
        @load="load"
      >
        <u-list>
          <u-list-item
            v-for="item in items"
            :key="item.value"
            :title="item.title"
          ></u-list-item>
        </u-list>
      </u-pull-to-refresh>
    </div>
  `,
});

Default.args = {
  pullDownThreshold: 64,
} as ComponentArgs;
