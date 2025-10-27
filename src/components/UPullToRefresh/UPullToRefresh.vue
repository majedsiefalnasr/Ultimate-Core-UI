<script setup lang="ts">
  /**
   * Extended UPullToRefresh component built on Vuetify's VPullToRefresh.
   * Inherits all VPullToRefresh props, slots, and emits.
   * Specifically designed for pull-to-refresh functionality.
   *
   * @component
   * @extends VPullToRefresh
   */
  // Import Vuetify's VPullToRefresh component (Base component)
  import { VPullToRefresh } from 'vuetify/labs/VPullToRefresh';
  // Import local styles
  import './UPullToRefresh.scss';

  // Define component options
  defineOptions({ name: 'UPullToRefresh', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-pull-to-refresh v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-pull-to-refresh>
</template>

<style scoped lang="scss"></style>
