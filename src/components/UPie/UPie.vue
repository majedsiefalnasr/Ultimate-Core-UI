<script setup lang="ts">
  /**
   * Extended UPie component built on Vuetify's VPie.
   * Inherits all VPie props, slots, and emits.
   * Specifically designed for pie chart representation.
   *
   * @component
   * @extends VPie
   */
  // Import Vuetify's VPie component (Base component)
  import { VPie } from 'vuetify/labs/VPie';
  // Import local styles
  import './UPie.scss';

  // Define component options
  defineOptions({ name: 'UPie', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-pie v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-pie>
</template>

<style scoped lang="scss"></style>
