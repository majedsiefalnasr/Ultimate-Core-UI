<script setup lang="ts">
  /**
   * Extended UVideoControls component built on Vuetify's VVideoControls.
   * Inherits all VVideoControls props, slots, and emits.
   *
   * @component
   * @extends VVideoControls
   */
  // Import Vuetify's VVideoControls component (Base component)
  import { VVideoControls } from 'vuetify/labs/VVideo';
  // Import local styles
  import './UVideo.scss';

  defineOptions({ name: 'UVideoControls', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-video-controls v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-video-controls>
</template>

<style scoped lang="scss"></style>
