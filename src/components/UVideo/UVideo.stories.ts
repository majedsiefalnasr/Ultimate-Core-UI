import type { Meta, StoryFn } from '@storybook/vue3';
import { reactive, shallowRef, toRef } from 'vue';

import {
  UBtn,
  UChip,
  UColorPicker,
  UDefaultsProvider,
  UDivider,
  UIcon,
  UIconBtn,
  UListItem,
  UMenu,
  UOverlay,
  USlider,
  UVideo,
  UVideoVolume,
} from '../index';

interface ComponentArgs {
  aspectRatio?: string | number;
  autoplay?: boolean;
  backgroundColor?: string;
  color?: string;
  controlsVariant?: 'default' | 'hidden' | 'tube' | 'mini';
  density?: 'default' | 'comfortable' | 'compact';
  detached?: boolean;
  eager?: boolean;
  elevation?: string | number;
  floating?: boolean;
  height?: string | number;
  hideFullscreen?: boolean;
  hideOverlay?: boolean;
  hidePlay?: boolean;
  hideVolume?: boolean;
  image?: string;
  muted?: boolean;
  noFullscreen?: boolean;
  pills?: boolean;
  playing?: boolean;
  rounded?: any;
  src?: string;
  startAt?: string | number;
  trackColor?: string;
  variant?: 'background' | 'player';
  volume?: string | number;
}

const toKebab = (s: string) => s.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());

const meta: Meta<ComponentArgs> = {
  title: 'Components/Data & Display/Video',
  component: UVideo,
  parameters: {
    docs: {
      description: {
        component:
          'The `u-video` component is a configurable video player and background video container.',
      },
      import: `import { UVideo } from '@ultimate/core-ui/components'`,
      source: {
        transform: (src: string, storyContext: { args: ComponentArgs }) => {
          const { args } = storyContext;
          const attrsArray = Object.entries(args as Record<string, unknown>)
            .filter(([_, value]) => value !== undefined && value !== false)
            .map(([key, value]) => {
              if (value === true) return key;
              if (typeof value === 'string') return `${key}="${value}"`;
              if (typeof value === 'number') return `:${key}="${value}"`;
              return `:${key}='${JSON.stringify(value)}'`;
            });

          const attrsString = attrsArray.length > 0 ? ' ' + attrsArray.join(' ') : '';
          return `<u-video${attrsString}></u-video>`;
        },
      },
    },
    Vuetify: {
      component: 'VVideo',
      content: 'Based on Vuetify VVideo component.',
      link: 'https://vuetifyjs.com/en/components/videos/',
    },
    Primary: {
      description: 'A basic example of the video component.',
    },
    api: {
      data: [
        {
          element: { title: 'v-video', link: 'https://vuetifyjs.com/en/api/v-video/' },
          description: 'Primary Component',
        },
        {
          element: {
            title: 'v-video-controls',
            link: 'https://vuetifyjs.com/en/api/v-video-controls/',
          },
          description: 'Sub-component used to display a video player controls',
        },
        {
          element: {
            title: 'v-video-volume',
            link: 'https://vuetifyjs.com/en/api/v-video-volume/',
          },
          description: 'Sub-component used to display a volume control',
        },
      ],
    },
  },
  argTypes: {
    aspectRatio: {
      name: 'aspect-ratio',
      description: 'Sets the aspect ratio for playback (width/height).',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    autoplay: {
      name: 'autoplay',
      description: 'Start loading and play automatically.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    backgroundColor: {
      name: 'background-color',
      description: 'Container background color.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    color: {
      name: 'color',
      description: 'General color applied to icons and sliders.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    controlsVariant: {
      name: 'controls-variant',
      description: 'Variant passed to the controls component.',
      control: { type: 'select', options: ['default', 'hidden', 'tube', 'mini'] },
      table: {
        type: { summary: "'default' | 'hidden' | 'tube' | 'mini'" },
        defaultValue: { summary: "'default'" },
      },
    },
    density: {
      name: 'density',
      description: 'Adjusts the vertical height used by the component.',
      control: { type: 'select', options: ['default', 'comfortable', 'compact'] },
      table: {
        type: { summary: "'default' | 'comfortable' | 'compact'" },
        defaultValue: { summary: "'default'" },
      },
    },
    detached: {
      name: 'detached',
      description: "Detach container so it doesn't obstruct video.",
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    eager: {
      name: 'eager',
      description: 'Eagerly load the media file.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    floating: {
      name: 'floating',
      description: 'Add visual spacing from video boundaries.',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    height: {
      name: 'height',
      description: 'Sets height for the component.',
      control: { type: 'text' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    image: {
      name: 'image',
      description: 'Cover image shown before video loads.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    muted: {
      name: 'muted',
      description: 'Start muted (hides volume control).',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    pills: {
      name: 'pills',
      description: 'Show actions in separated boxes (transparent container).',
      control: { type: 'boolean' },
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    rounded: {
      name: 'rounded',
      description: 'Apply border radius; can be an array to customize.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string | number | boolean | array' },
        defaultValue: { summary: 'false' },
      },
    },
    src: {
      name: 'src',
      description: 'Media file URL.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    startAt: {
      name: 'start-at',
      description: 'Start playback at specified time (seconds).',
      control: { type: 'number' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
    trackColor: {
      name: 'track-color',
      description: 'Color for the progress track.',
      control: { type: 'text' },
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    variant: {
      name: 'variant',
      description: 'Applies a distinct style to the component.',
      control: { type: 'select', options: ['background', 'player'] },
      table: {
        type: { summary: "'background' | 'player'" },
        defaultValue: { summary: "'player'" },
      },
    },
    volume: {
      name: 'volume',
      description: 'Volume value for the player.',
      control: { type: 'number' },
      table: { type: { summary: 'string | number' }, defaultValue: { summary: 'undefined' } },
    },
  } as any,
};

export default meta;

// Default story
export const Default: StoryFn<ComponentArgs> = (args) => ({
  components: { UVideo },
  setup() {
    return { args };
  },
  template: `<u-video v-bind="args" />`,
});

Default.args = {
  aspectRatio: '16/9',
  image: 'https://cdn.jsek.work/cdn/vt-sunflowers.jpg',
  src: 'https://cdn.jsek.work/cdn/vt-sunflowers.mp4',
} as ComponentArgs;

// Image story
const imageTemplate = `
    <div>
      <u-video
        :key="resetToPoster"
        :image="posterUrl"
        class="mx-auto mb-3"
        max-width="450"
        src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
        muted
        @loaded="loaded = true"
      ></u-video>

      <div class="d-flex justify-center ga-3">
        <u-btn text @click="randomizePoster">randomize image</u-btn>
        <u-btn text @click="posterId = null">restore original</u-btn>
        <u-btn :disabled="!loaded" prepend-icon="hugeicons:refresh" text @click="resetToPoster++; loaded = false">reset</u-btn>
      </div>
    </div>
  `;

/**
 * You can display a cover image before the video is loaded.
 */
export const Image: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UBtn },
  setup() {
    const loaded = shallowRef(false);
    const resetToPoster = shallowRef(0);

    const posterId = shallowRef<number | undefined>(undefined);
    function randomizePoster() {
      posterId.value = 1 + Math.ceil(Math.random() * 100);
    }

    const posterUrl = toRef(() => {
      return posterId.value
        ? 'https://picsum.photos/500/300?image=' + posterId.value
        : 'https://cdn.jsek.work/cdn/vt-sunflowers.jpg';
    });

    return { loaded, resetToPoster, posterUrl, randomizePoster, posterId };
  },
  template: imageTemplate,
});

Image.parameters = {
  docs: {
    source: {
      code: `<template>${imageTemplate}</template>

<script setup>
  import { shallowRef, toRef } from 'vue'

  const loaded = shallowRef(false)
  const resetToPoster = shallowRef(0)

  const posterId = shallowRef()
  function randomizePoster () {
    posterId.value = 1 + Math.ceil(Math.random() * 100)
  }

  const posterUrl = toRef(() => {
    return posterId.value
      ? \`https://picsum.photos/500/300?image=\${posterId.value}\`
      : 'https://cdn.jsek.work/cdn/vt-sunflowers.jpg'
  })
</script>`,
    },
  },
};

// StartAt story
const startAtTemplate = `<div class="d-flex justify-center">
    <u-video
      :start-at="10"
      class="align-self-center"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="450"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      muted
    ></u-video>
  </div>`;

/**
 * Video can automatically skip to certain timestamp upon load. It can be useful to let
 * the users continue where they stopped last time.
 */
export const StartAt: StoryFn<ComponentArgs> = () => ({
  components: { UVideo },
  template: startAtTemplate,
});

StartAt.parameters = {
  docs: {
    source: {
      code: `<template>${startAtTemplate}</template>`,
    },
  },
};

// Color story
const colorTemplate = `
  <div>
    <u-sheet class="px-6 py-2 border-b mb-3" color="surface">
      <div class="d-flex ga-2 ga-md-12 flex-wrap align-center justify-center">
        <div class="d-flex align-center ga-3">
          <u-chip-group v-model="controlsVariant" mandatory>
            <u-chip text="default" value="default" filter label></u-chip>
            <u-chip text="tube" value="tube" filter label></u-chip>
            <u-chip text="mini" value="mini" filter label></u-chip>
          </u-chip-group>
        </div>
        <div class="d-flex align-center ga-3">
          <u-chip-group v-model="features" multiple>
            <u-chip text="pills" value="pills" filter label></u-chip>
            <u-chip text="floating" value="floating" filter label></u-chip>
            <u-chip text="detached" value="detached" filter label></u-chip>
          </u-chip-group>
        </div>
      </div>
    </u-sheet>

    <div class="d-flex justify-center ga-3 mb-3">
      <u-btn
        v-for="key in ['color', 'background', 'track']"
        :key="key"
        variant="text"
      >
        <u-icon v-if="colors[key]" :color="colors[key]" icon="hugeicons:stop-circle" start></u-icon>
        <u-icon v-else icon="hugeicons:circle" start></u-icon>
        {{ key }}
        <u-menu :close-on-content-click="false" activator="parent">
          <u-color-picker
            v-model="colors[key]"
            hide-canvas
            hide-inputs
            hide-sliders
            show-swatches
          ></u-color-picker>
          <u-btn text="Clear" @click="colors[key] = null"></u-btn>
        </u-menu>
      </u-btn>
    </div>

    <u-video
      :background-color="colors.background"
      :color="colors.color"
      :controls-variant="controlsVariant"
      :detached="features.includes('detached')"
      :floating="features.includes('floating')"
      :pills="features.includes('pills')"
      :start-at="10"
      :track-color="colors.track"
      class="mx-auto mb-3"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="450"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      muted
      no-fullscreen
    >
      <template v-slot:append>
        <u-icon-btn icon="hugeicons:settings-01"></u-icon-btn>
        <u-divider opacity=".7" thickness="2" inset vertical></u-divider>
        <u-icon-btn icon="hugeicons:picture-in-picture-on"></u-icon-btn>
        <u-icon-btn class="mr-2" icon="hugeicons:tv-smart"></u-icon-btn>
      </template>
    </u-video>
  </div>
  `;

/**
 * You can control the icon color and background color of the controls.
 */
export const Color: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UDefaultsProvider, UBtn, UChip, UMenu, UColorPicker, UIconBtn, UDivider },
  setup() {
    const features = shallowRef([]);
    const controlsVariant = shallowRef('default');
    const colors = reactive({
      color: '#4cd2de',
      background: null,
      track: null,
    });

    return { features, controlsVariant, colors };
  },
  template: colorTemplate,
});

Color.parameters = {
  docs: {
    source: {
      code: `<template>${colorTemplate}</template>

<script setup>
  import { reactive, shallowRef } from 'vue'

  const features = shallowRef([])
  const controlsVariant = shallowRef('default')
  const colors = reactive({
    color: '#4cd2de',
    background: null,
    track: null,
  })
</script>`,
    },
  },
};

// Density story
const densityTemplate = `
  <div class="d-flex flex-wrap align-start justify-center ga-6">
    <div v-for="density in options" :key="density">
      <u-video
        :density="density"
        height="150"
        image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
        rounded="lg"
        src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
        start-at="10"
        volume="80"
        width="250"
        detached
      ></u-video>
      <u-overlay>
        <u-chip class="ma-2">{{ density }}</u-chip>
      </u-overlay>
    </div>
  </div>
  `;

/**
 * Three density modes provide basic control over control bar height and the icon sizes.
 */
export const Density: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UOverlay, UChip },
  setup() {
    const options = ['default', 'comfortable', 'compact'];
    return { options };
  },
  template: densityTemplate,
});

Density.parameters = {
  docs: {
    source: {
      code: `<template>${densityTemplate}</template>`,
    },
  },
};

// Rounded story
const roundedTemplate = `  <div class="pb-3">
    <u-video
      :controls-props="{ class: 'px-4' }"
      :rounded="['lg', 'pill']"
      :start-at="10"
      class="mx-auto"
      height="260"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="450"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      floating
      muted
    ></u-video>
  </div>`;

/**
 * Border radius for the video and controls can be controlled separately if you pass an
 * array to the rounded prop.
 */
export const Rounded: StoryFn<ComponentArgs> = () => ({
  components: { UVideo },
  template: roundedTemplate,
});

Rounded.parameters = {
  docs: {
    source: {
      code: `<template>${roundedTemplate}</template>`,
    },
  },
};

// Header story
const headerTemplate = `
  <div class="d-flex justify-center">
    <u-video
      class="align-self-center"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="450"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      muted
    >
      <template v-slot:header>
        <div class="d-flex pa-2 pointer-pass-through">
          <u-list-item
            class="py-2 pl-3 pr-8 video-header-element"
            style="background: #0008; color: #fff;"
            prepend-avatar="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
            rounded="pill"
            subtitle="Example video"
            title="Sunflowers"
          ></u-list-item>
          <u-icon-btn
            class="ml-auto video-header-element"
            style="background: #0008; color: #fff;"
            icon="hugeicons:share-03"
            variant="text"
          ></u-icon-btn>
        </div>
      </template>
    </u-video>
  </div>
  `;

/**
 * Optional header slot make it possible to put additional content on top of the video.
 */
export const Header: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UListItem, UIconBtn },
  template: headerTemplate,
});

Header.parameters = {
  docs: {
    source: {
      code: `<template>${headerTemplate}</template>

<style scoped>
  .video-header-element {
    background: #0008;
    color: #fff;
  }
</style>`,
    },
  },
};

// AppendPrepend story
const appendPrependTemplate = `
  <div class="d-flex justify-center">
    <u-video
      :start-at="10"
      class="align-self-center"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="450"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      muted
    >
      <template v-slot:prepend>
        <u-icon-btn icon="hugeicons:next"></u-icon-btn>
      </template>
      <template v-slot:append>
        <u-icon-btn icon="hugeicons:closed-caption"></u-icon-btn>
        <u-icon-btn icon="hugeicons:settings-01"></u-icon-btn>
        <u-icon-btn icon="hugeicons:picture-in-picture-on"></u-icon-btn>
        <u-icon-btn icon="hugeicons:tv-smart"></u-icon-btn>
      </template>
    </u-video>
  </div>
  `;

/**
 * u-video has append and prepend slots. You can place custom controls in them.
 */
export const AppendPrepend: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UIcon, UIconBtn },
  template: appendPrependTemplate,
});

AppendPrepend.parameters = {
  docs: {
    source: {
      code: `<template>${appendPrependTemplate}</template>`,
    },
  },
};

// Controls story
const controlsTemplate = `
  <div>
    <u-video
      :start-at="10"
      :volume-props="{ inline: true }"
      class="mx-auto"
      controls-variant="mini"
      height="300"
      image="https://cdn.jsek.work/cdn/vt-sunflowers.jpg"
      max-width="500"
      rounded="lg"
      src="https://cdn.jsek.work/cdn/vt-sunflowers.mp4"
      hide-overlay
      pills
    >
      <template v-slot:controls="{ play, pause, playing, progress, skipTo, volume, toggleMuted, fullscreen, toggleFullscreen, labels }">
        <u-defaults-provider :defaults="{ UIconBtn: { color: 'red', rounded: 'lg', size: '36', variant: 'flat' }, USlider: { color: 'red', trackColor: 'white' } }">
          <div class="d-flex ga-3 w-100 px-2">
            <u-icon-btn
              :aria-label="labels.playAction"
              :icon="playing ? 'hugeicons:pause' : 'hugeicons:play'"
              v-tooltip:top="labels.playAction"
              @click="() => playing ? pause() : play()"
            ></u-icon-btn>
            <u-slider
              :aria-label="labels.seek"
              :model-value="progress"
              width="75%"
              no-keyboard
              @update:model-value="skipTo"
            ></u-slider>
            <u-video-volume
              v-model="volume.value"
              :label="labels.volumeAction"
              :slider-props="{ maxWidth: 100, width: '25%' }"
              class="ga-3"
              inline
              @click="toggleMuted"
            ></u-video-volume>
            <u-icon-btn
              :aria-label="labels.fullscreenAction"
              :icon="fullscreen ? '$fullscreenExit' : '$fullscreen'"
              v-tooltip:top="labels.fullscreenAction"
              @click="toggleFullscreen"
            ></u-icon-btn>
          </div>
        </u-defaults-provider>
      </template>
    </u-video>
  </div>
  `;

/**
 * Whenever provided customizability is not enough, the controls slot lets you drop all
 * the built-in controls and easily define your own set of actions.
 */
export const Controls: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UDefaultsProvider, UIconBtn, USlider, UVideoVolume },
  template: controlsTemplate,
});

Controls.parameters = {
  docs: {
    source: {
      code: `<template>${controlsTemplate}</template>`,
    },
  },
};

// YouTubeClone story
const youTubeCloneTemplate = `
  <u-video
    :volume="50"
    :volume-props="{ direction: 'horizontal', menuProps: { location: 'top left' } }"
    class="mx-auto"
    controls-variant="tube"
    density="comfortable"
    image="https://cdn.jsek.work/cdn/vt-video-poster.jpg"
    max-width="450"
    rounded="lg"
    src="https://cdn.jsek.work/cdn/vt-video.mp4"
    track-color="red"
    eager
  >
    <template v-slot:prepend>
      <u-icon-btn icon="hugeicons:next"></u-icon-btn>
    </template>
    <template v-slot:append>
      <u-icon-btn icon="hugeicons:closed-caption"></u-icon-btn>
      <u-icon-btn icon="hugeicons:settings-01"></u-icon-btn>
      <u-icon-btn icon="hugeicons:picture-in-picture-on"></u-icon-btn>
      <u-icon-btn icon="hugeicons:tv-smart"></u-icon-btn>
    </template>
  </u-video>`;

/**
 * Easily recreate the most familiar interface to let your users focus on the content.
 */
export const YouTubeClone: StoryFn<ComponentArgs> = () => ({
  components: { UVideo, UIconBtn },
  template: youTubeCloneTemplate,
});

YouTubeClone.parameters = {
  docs: {
    source: {
      code: `<template>${youTubeCloneTemplate}</template>`,
    },
  },
};
