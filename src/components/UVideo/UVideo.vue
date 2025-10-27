<script setup lang="ts">
  /**
   * Extended UVideo component built on Vuetify's VVideo.
   * Inherits all VVideo props, slots, and emits.
   *
   * @component
   * @extends VVideo
   */
  // Import Vuetify's VVideo component (Base component)
  import { VVideo } from 'vuetify/labs/VVideo';
  // Import local styles
  import './UVideo.scss';

  defineOptions({ name: 'UVideo', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-video v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-video>
</template>

<style scoped lang="scss"></style>
