<script setup lang="ts">
  /**
   * UVirtualScroll - virtual scroll component
   *
   * @component
   * @extends VVirtualScroll
   */
  import { VVirtualScroll } from 'vuetify/components';
  import './UVirtualScroll.scss';

  // Component options
  defineOptions({ name: 'UVirtualScroll', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-virtual-scroll v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-virtual-scroll>
</template>

<style scoped lang="scss"></style>
