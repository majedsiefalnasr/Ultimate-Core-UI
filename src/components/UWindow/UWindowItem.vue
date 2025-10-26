<script setup lang="ts">
  /**
   * Extended UWindowItem component built on Vuetify's VWindowItem.
   * Inherits all VWindow props, slots, and emits.
   *
   * @component
   * @extends VWindowItem
   */
  import { VWindowItem } from 'vuetify/components';
  import './UWindow.scss';

  // Component options
  defineOptions({ name: 'UWindowItem', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-window-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-window-item>
</template>

<style scoped lang="scss"></style>
