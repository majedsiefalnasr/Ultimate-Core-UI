<script setup lang="ts">
  /**
   * Extended UVideoVolume component built on Vuetify's VVideoVolume.
   * Inherits all VVideoVolume props, slots, and emits.
   *
   * @component
   * @extends VVideoVolume
   */
  // Import Vuetify's VVideoVolume component (Base component)
  import { VVideoVolume } from 'vuetify/labs/VVideo';
  // Import local styles
  import './UVideo.scss';

  defineOptions({ name: 'UVideoVolume', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-video-volume v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-video-volume>
</template>

<style scoped lang="scss"></style>
