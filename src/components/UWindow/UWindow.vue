<script setup lang="ts">
  /**
   * Extended UWindow component built on Vuetify's VWindow.
   * Inherits all VWindow props, slots, and emits.
   *
   * @component
   * @extends VWindow
   */
  import { VWindow } from 'vuetify/components';
  import './UWindow.scss';

  // Component options
  defineOptions({ name: 'UWindow', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-window v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-window>
</template>

<style scoped lang="scss"></style>
