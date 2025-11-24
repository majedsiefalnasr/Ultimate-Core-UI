import type { Meta, StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import {
  UAlert,
  UBtn,
  UCard,
  UCardText,
  UCardTitle,
  UIcon,
  UTimeline,
  UTimelineItem,
} from '../index';

interface ComponentArgs {
  align?: 'start' | 'center';
  density?: 'default' | 'comfortable' | 'compact';
  direction?: 'horizontal' | 'vertical';
  dotColor?: string;
  fillDot?: boolean;
  hideOpposite?: boolean;
  iconColor?: string;
  justify?: string;
  lineColor?: string;
  lineInset?: string | number;
  lineThickness?: string | number;
  side?: 'end' | 'start';
  size?: string | number;
  tag?: string;
  theme?: string;
  truncateLine?: 'end' | 'start' | 'both';
}

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Timelines',
  component: UTimeline,
  parameters: {
    docs: {
      description: {
        component:
          'The u-timeline is useful for stylistically displaying chronological information.',
      },
      import: `import { UTimeline } from '@ultimate/core-ui/components'`,
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

          return `<template>
  <u-timeline${attrsString}>>
      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>

      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>

      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>
    </u-timeline>
</template>`;
        },
      },
    },
    Vuetify: {
      component: 'VTimeline',
      content:
        'This is a Vuetify component notify the user about the base component that used as base to library component.',
      link: 'https://vuetifyjs.com/en/components/timelines/',
    },
    api: {
      data: [
        {
          element: { title: 'v-timeline', link: 'https://vuetifyjs.com/en/api/v-timeline/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-timeline-item',
            link: 'https://vuetifyjs.com/en/api/v-timeline-item/',
          },
          description: 'Sub-component used to display a single timeline item',
        },
      ],
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Display timeline in a vertical or horizontal direction.',
      table: {
        type: { summary: "'horizontal' | 'vertical'" },
        defaultValue: { summary: 'vertical' },
      },
    },
    align: {
      control: 'select',
      options: ['start', 'center'],
      description: 'Places the timeline dot at the top or center of the timeline item.',
      table: { type: { summary: "'start' | 'center'" }, defaultValue: { summary: 'center' } },
    },
    side: {
      control: 'select',
      options: ['start', 'end'],
      description: 'Display all timeline items on one side of the timeline.',
      table: { type: { summary: "'end' | 'start'" }, defaultValue: { summary: 'undefined' } },
    },
    dotColor: {
      control: 'text',
      description: 'Color of the item dot.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    fillDot: {
      control: 'boolean',
      description: 'Remove outer border of item dot, making the color fill the entire dot.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    size: {
      control: 'text',
      description: 'Sets the height and width of the dot (px or preset).',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'default' } },
    },
    truncateLine: {
      control: 'select',
      name: 'truncate-line',
      options: ['end', 'start', 'both'],
      description: 'Truncate timeline line at start/end/both.',
      table: {
        type: { summary: "'end' | 'start' | 'both'" },
        defaultValue: { summary: 'undefined' },
      },
    },
    lineInset: {
      control: 'text',
      name: 'line-inset',
      description: 'Specifies distance between the line and the dot.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '0' } },
    },
    lineThickness: {
      control: 'text',
      name: 'line-thickness',
      description: 'Thickness of the timeline line.',
      table: { type: { summary: 'string | number' }, defaultValue: { summary: '2' } },
    },
  } as any,
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimeline, UTimelineItem, UCard },
  setup() {
    return { args };
  },
  template: `
    <u-timeline v-bind="args">
      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>

      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>

      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </u-timeline-item>
    </u-timeline>
  `,
});

Default.args = { direction: 'horizontal' } as ComponentArgs;

export const Side: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimeline, UTimelineItem, UAlert },
  setup() {
    const items = ref([
      { id: 1, color: 'info', icon: 'hugeicons:information-circle' },
      { id: 2, color: 'error', icon: 'hugeicons:alert-circle' },
    ]);
    return { args, items };
  },
  template: `
    <u-timeline side="end">
      <u-timeline-item v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
        <u-alert :color="item.color" :icon="item.icon" :value="true">
          Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut.
        </u-alert>
      </u-timeline-item>
    </u-timeline>
  `,
});

Side.args = {} as ComponentArgs;

Side.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-timeline side="end">
    <u-timeline-item v-for="item in items" :key="item.id" :dot-color="item.color" size="small">
      <u-alert :color="item.color" :icon="item.icon" :value="true">Lorem ipsum dolor sit amet...</u-alert>
    </u-timeline-item>
  </u-timeline>
</template>
<script setup>
const items = [
  { id: 1, color: 'info', icon: 'hugeicons:information-circle' },
  { id: 2, color: 'error', icon: 'hugeicons:alert-circle' },
]
</script>`,
    },
  },
};

export const Alignment: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimeline, UTimelineItem },
  setup() {
    return { args };
  },
  template: `
    <u-timeline align="start">
      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </u-timeline-item>
      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </u-timeline-item>
      <u-timeline-item>
        <template v-slot:opposite>Opposite content</template>
        <div>
          <div class="text-h6">Content title</div>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </u-timeline-item>
    </u-timeline>
  `,
});

Alignment.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-timeline align="start">...</u-timeline>
</template>`,
    },
  },
};

export const DotColor: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimeline, UTimelineItem },
  setup() {
    return { args };
  },
  template: `
    <u-timeline align="start" side="end">
      <u-timeline-item dot-color="pink" size="small">
        <div class="d-flex"><strong class="me-4">5pm</strong><div><strong>New Icon</strong><div class="text-caption">Mobile App</div></div></div>
      </u-timeline-item>
      <u-timeline-item dot-color="teal-lighten-3" size="small">...</u-timeline-item>
      <u-timeline-item dot-color="pink" size="small">...</u-timeline-item>
      <u-timeline-item dot-color="teal-lighten-3" size="small">...</u-timeline-item>
    </u-timeline>
  `,
});

DotColor.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-timeline align="start" side="end">...</u-timeline>
</template>`,
    },
  },
};

export const IconDots: StoryFn<ComponentArgs> = (args) => ({
  components: { UTimeline, UTimelineItem, UCard, UCardTitle, UCardText, UBtn, UIcon },
  setup() {
    const items = ref([
      { color: 'red-lighten-2', icon: 'hugeicons:star' },
      { color: 'purple-lighten-2', icon: 'hugeicons:book-02' },
      { color: 'green-lighten-1', icon: 'hugeicons:hot-air-balloon' },
      { color: 'indigo-lighten-2', icon: 'hugeicons:layers-01' },
    ]);
    return { args, items };
  },
  template: `
    <u-timeline align="start">
      <u-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
        <u-card>
          <u-card-title :class="['text-h6', 'bg-' + item.color]">Lorem Ipsum Dolor</u-card-title>
          <u-card-text class="bg-white text--primary">
            <p>Lorem ipsum dolor sit amet...</p>
            <u-btn :color="item.color" variant="outlined">Button</u-btn>
          </u-card-text>
        </u-card>
      </u-timeline-item>
    </u-timeline>
  `,
});

IconDots.parameters = {
  docs: {
    source: {
      code: `<template>
    <u-timeline align="start">
      <u-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
        <u-card>
          <u-card-title :class="['text-h6', 'bg-' + item.color]">Lorem Ipsum Dolor</u-card-title>
          <u-card-text class="bg-white text--primary">
            <p>Lorem ipsum dolor sit amet...</p>
            <u-btn :color="item.color" variant="outlined">Button</u-btn>
          </u-card-text>
        </u-card>
      </u-timeline-item>
    </u-timeline>
</template>
<script setup>
const items = [
  { color: 'red-lighten-2', icon: 'hugeicons:star' },
  { color: 'purple-lighten-2', icon: 'hugeicons:book-02' },
  { color: 'green-lighten-1', icon: 'hugeicons:hot-air-balloon' },
  { color: 'indigo-lighten-2', icon: 'hugeicons:layers-01' },
]
</script>`,
    },
  },
};
