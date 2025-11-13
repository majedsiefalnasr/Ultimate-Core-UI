import type { Meta, StoryFn } from '@storybook/vue3';

import {
  UBtn,
  UCard,
  UCardText,
  UCol,
  UContainer,
  UExpandTransition,
  UHover,
  UImg,
  URow,
} from '../index';

import './Story.scss';

interface ComponentArgs {
  closeDelay?: string | number;
  disabled?: boolean;
  modelValue?: boolean;
  openDelay?: string | number;
}

const meta: Meta<ComponentArgs> = {
  title: 'Components/Feedback/Hover',
  component: UHover,
  parameters: {
    docs: {
      description: {
        component:
          'The u-hover component provides a simple interface for handling hover states for any component. It is a renderless component that uses the default slot to provide scoped access to its internal model.',
      },
      import: `import { UHover } from '@ultimate/core-ui/components'`,
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

          return `<u-hover${attrsString}>
    <template v-slot:default="{ isHovering, props }">
      <u-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefined"
        title="Hover over me"
        text="Move your cursor over this card to see the hover effect in action."
      ></u-card>
    </template>
  </u-hover>`;
        },
      },
    },
    Vuetify: {
      component: 'VHover',
      content: "The u-hover component is built on top of Vuetify's v-hover component.",
      link: 'https://vuetifyjs.com/en/components/hover/',
    },
    Primary: {
      description:
        'u-hover is a renderless component that uses the default slot to provide scoped access to its internal model; as well as mouse event listeners to modify it. To explicitly control the internal state, use the model-value property.',
    },
  },
  argTypes: {
    closeDelay: {
      control: 'number',
      description:
        'Milliseconds to wait before closing component. Only applies to hover and focus events.',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'undefined' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Removes hover functionality.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    modelValue: {
      control: 'boolean',
      description:
        'The v-model value of the component. If component supports the multiple prop, this defaults to an empty array.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'null' },
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
  },
};

export default meta;

export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UHover, UCard },
  setup() {
    return { args };
  },
  template: `
    <u-hover v-bind="args">
      <template v-slot:default="{ isHovering, props }">
        <u-card
          v-bind="props"
          :color="isHovering ? 'primary' : undefined"
          title="Hover over me"
          text="Move your cursor over this card to see the hover effect in action."
        ></u-card>
      </template>
    </u-hover>
  `,
});

Default.args = {} as ComponentArgs;

export const Disabled: StoryFn<ComponentArgs> = (args) => ({
  components: { UHover, UCard, UCardText, URow, UCol },
  setup() {
    return { args };
  },
  template: `
    <u-row align="center" justify="center">
      <u-col cols="12">
        <u-hover v-slot="{ isHovering, props }" disabled>
          <u-card
            :elevation="isHovering ? 12 : 2"
            class="mx-auto"
            height="350"
            max-width="350"
            v-bind="props"
          >
            <u-card-text class="my-4 text-center text-h6">
              Hover over me!
            </u-card-text>
          </u-card>
        </u-hover>
      </u-col>
    </u-row>
  `,
});

Disabled.args = {} as ComponentArgs;

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row align="center" justify="center">
    <u-col cols="12">
      <u-hover v-slot="{ isHovering, props }" disabled>
        <u-card
          :elevation="isHovering ? 12 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
        >
          <u-card-text class="my-4 text-center text-h6">
            Hover over me!
          </u-card-text>
        </u-card>
      </u-hover>
    </u-col>
  </u-row>
</template>`,
    },
    description: {
      story: 'The disabled prop disables the hover functionality.',
    },
  },
};

export const OpenAndCloseDelay: StoryFn<ComponentArgs> = (args) => ({
  components: { UHover, UCard, UCardText, URow, UCol },
  setup() {
    return { args };
  },
  template: `
    <u-row>
      <u-col cols="12" sm="6">
        <u-hover v-slot="{ isHovering, props }" open-delay="200">
          <u-card
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 2"
            class="mx-auto"
            height="350"
            max-width="350"
            v-bind="props"
          >
            <u-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
              Open Delay (Mouse enter)
            </u-card-text>
          </u-card>
        </u-hover>
      </u-col>

      <u-col cols="12" sm="6">
        <u-hover v-slot="{ isHovering, props }" close-delay="200">
          <u-card
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 2"
            class="mx-auto"
            height="350"
            max-width="350"
            v-bind="props"
          >
            <u-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
              Close Delay (Mouse leave)
            </u-card-text>
          </u-card>
        </u-hover>
      </u-col>
    </u-row>
  `,
});

OpenAndCloseDelay.args = {} as ComponentArgs;

OpenAndCloseDelay.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-row>
    <u-col cols="12" sm="6">
      <u-hover v-slot="{ isHovering, props }" open-delay="200">
        <u-card
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 16 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
        >
          <u-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            Open Delay (Mouse enter)
          </u-card-text>
        </u-card>
      </u-hover>
    </u-col>

    <u-col cols="12" sm="6">
      <u-hover v-slot="{ isHovering, props }" close-delay="200">
        <u-card
          :class="{ 'on-hover': isHovering }"
          :elevation="isHovering ? 16 : 2"
          class="mx-auto"
          height="350"
          max-width="350"
          v-bind="props"
        >
          <u-card-text class="font-weight-medium mt-12 text-center text-subtitle-1">
            Close Delay (Mouse leave)
          </u-card-text>
        </u-card>
      </u-hover>
    </u-col>
  </u-row>
</template>
<style lang="sass" scoped>
.v-card.on-hover.v-theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>`,
    },
    description: {
      story:
        'Delay u-hover events by using open-delay and close-delay props in combination or separately.',
    },
  },
};

export const HoverList: StoryFn<ComponentArgs> = (args) => ({
  components: { UHover, UCard, UCardText, URow, UCol, UContainer, UImg, UBtn },
  setup() {
    const icons = ['hugeicons:arrow-left-double', 'hugeicons:play', 'hugeicons:arrow-right-double'];
    const items = [
      {
        title: 'New Releases',
        text: "It's New Release Friday",
        subtext: 'Newly released songs.',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
      },
      {
        title: 'Rock',
        text: 'Greatest Rock Hits',
        subtext: 'Lose yourself in rock tunes.',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
      },
      {
        title: 'Mellow Moods',
        text: 'Ambient Bass',
        subtext: 'Chill beats to mellow you out.',
        img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
      },
    ];
    const transparent = 'rgba(255, 255, 255, 0)';

    return { args, icons, items, transparent };
  },
  template: `
    <u-container id="hover-list" class="pa-4 text-center">
      <u-row align="center" class="fill-height" justify="center">
        <template v-for="(item, i) in items" :key="i">
          <u-col cols="12" md="4">
            <u-hover v-slot="{ isHovering, props }">
              <u-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 12 : 2"
                v-bind="props"
              >
                <u-img :src="item.img" height="225px" cover>
                  <u-card-text class="text-h6 text-white d-flex flex-column">
                    <p class="mt-4">{{ item.title }}</p>
                    <div>
                      <p class="ma-0 text-body-1 font-weight-bold">{{ item.text }}</p>
                      <p class="text-caption font-weight-medium">{{ item.subtext }}</p>
                    </div>
                  </u-card-text>
                  <div class="align-self-center">
                    <u-btn
                      v-for="(icon, index) in icons"
                      :key="index"
                      :class="{ 'show-btns': isHovering }"
                      :color="transparent"
                      :icon="icon"
                      variant="text"
                    ></u-btn>
                  </div>
                </u-img>
              </u-card>
            </u-hover>
          </u-col>
        </template>
      </u-row>
    </u-container>
  `,
});

HoverList.args = {} as ComponentArgs;

HoverList.parameters = {
  docs: {
    source: {
      code: `<template>
  <u-container class="pa-4 text-center">
    <u-row align="center" class="fill-height" justify="center">
      <template v-for="(item, i) in items" :key="i">
        <u-col cols="12" md="4">
          <u-hover v-slot="{ isHovering, props }">
            <u-card
              :class="{ 'on-hover': isHovering }"
              :elevation="isHovering ? 12 : 2"
              v-bind="props"
            >
              <u-img :src="item.img" height="225px" cover>
                <u-card-text class="text-h6 text-white d-flex flex-column">
                  <p class="mt-4">{{ item.title }}</p>
                  <div>
                    <p class="ma-0 text-body-1 font-weight-bold">{{ item.text }}</p>
                    <p class="text-caption font-weight-medium">{{ item.subtext }}</p>
                  </div>
                </u-card-text>
                <div class="align-self-center">
                  <u-btn
                    v-for="(icon, index) in icons"
                    :key="index"
                    :class="{ 'show-btns': isHovering }"
                    :color="transparent"
                    :icon="icon"
                    variant="text"
                  ></u-btn>
                </div>
              </u-img>
            </u-card>
          </u-hover>
        </u-col>
      </template>
    </u-row>
  </u-container>
</template>
<script setup>
  const icons = [
    'hugeicons:arrow-left-double-01',
    'hugeicons:play',
    'hugeicons:arrow-right-double-01'
  ]
  const items = [
    {
      title: 'New Releases',
      text: "It's New Release Friday",
      subtext: 'Newly released songs.',
      img: 'https://cdn.vuetifyjs.com/docs/images/cards/hands.jpg',
    },
    {
      title: 'Rock',
      text: 'Greatest Rock Hits',
      subtext: 'Lose yourself in rock tunes.',
      img: 'https://cdn.vuetifyjs.com/docs/images/cards/singer.jpg',
    },
    {
      title: 'Mellow Moods',
      text: 'Ambient Bass',
      subtext: 'Chill beats to mellow you out.',
      img: 'https://cdn.vuetifyjs.com/docs/images/cards/concert.jpg',
    },
  ]
  const transparent = 'rgba(255, 255, 255, 0)'
</script>
<style scoped>
  .v-card {
    transition: opacity .4s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 0.6;
  }

  .show-btns {
    color: rgba(255, 255, 255, 1) !important;
  }
</style>`,
    },
    description: {
      story:
        'u-hover can be used in combination with v-for to make a single item stand out when the user interacts with the list.',
    },
  },
};

export const Transition: StoryFn<ComponentArgs> = (args) => ({
  components: { UHover, UCard, UCardText, UImg, UExpandTransition },
  setup() {
    return { args };
  },
  template: `
    <div id="hover-transition">
      <u-hover v-slot="{ isHovering, props }">
        <u-card
          class="mx-auto"
          color="grey-lighten-4"
          max-width="600"
          v-bind="props"
        >
          <u-img
            :aspect-ratio="16/9"
            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
            cover
          >
            <u-expand-transition>
              <div
                v-if="isHovering"
                class="d-flex bg-orange-darken-2 v-card--reveal text-h2"
                style="height: 100%;"
              >
                $14.99
              </div>
            </u-expand-transition>
          </u-img>

          <u-card-text class="pt-6">
            <div class="font-weight-light text-grey text-h6 mb-2">
              For the perfect meal
            </div>

            <h3 class="text-h4 font-weight-light text-orange mb-2">
              QW cooking utensils
            </h3>

            <div class="font-weight-light text-h6 mb-2">
              Our Vintage kitchen utensils delight any chef.<br>
              Made of bamboo by hand
            </div>
          </u-card-text>
        </u-card>
      </u-hover>
    </div>
  `,
});

Transition.args = {} as ComponentArgs;

Transition.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <u-hover v-slot="{ isHovering, props }">
      <u-card
        class="mx-auto"
        color="grey-lighten-4"
        max-width="600"
        v-bind="props"
      >
        <u-img
          :aspect-ratio="16/9"
          src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
          cover
        >
          <u-expand-transition>
            <div
              v-if="isHovering"
              class="d-flex bg-orange-darken-2 v-card--reveal text-h2"
              style="height: 100%;"
            >
              $14.99
            </div>
          </u-expand-transition>
        </u-img>

        <u-card-text class="pt-6">
          <div class="font-weight-light text-grey text-h6 mb-2">
            For the perfect meal
          </div>

          <h3 class="text-h4 font-weight-light text-orange mb-2">
            QW cooking utensils
          </h3>

          <div class="font-weight-light text-h6 mb-2">
            Our Vintage kitchen utensils delight any chef.<br>
            Made of bamboo by hand
          </div>
        </u-card-text>
      </u-card>
    </u-hover>
  </div>
</template>
<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .9;
    position: absolute;
    width: 100%;
  }
</style>`,
    },
    description: {
      story: 'Create highly customized components that respond to user interaction.',
    },
  },
};
