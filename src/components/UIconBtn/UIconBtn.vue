<script setup lang="ts">
  /**
   * Extended UIconBtn component built on Vuetify's VIconBtn.
   * Inherits all VIconBtn props, slots, and emits.
   * Specifically designed for icon-only buttons.
   *
   * @component
   * @extends VIconBtn
   */
  // Import Vuetify's VIconBtn component (Base component)
  import { VIconBtn } from 'vuetify/labs/VIconBtn';
  // Import local styles
  import './UIconBtn.scss';

  // Define component options
  defineOptions({ name: 'UIconBtn', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-icon-btn v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-icon-btn>
</template>

<style scoped lang="scss"></style>
