<!-- snippet:UDivider -->
<!-- <UDivider /> -->

<script setup lang="ts">
  /**
   * Extended UDivider component built on Vuetify's VDivider.
   * Inherits all VDivider props, slots, and emits.
   *
   * @component
   * @extends VDivider
   * @example
   * <UDivider />
   */
  import { VDivider } from 'vuetify/components';
  import './UDivider.scss';

  defineOptions({
    name: 'UDivider',
    inheritAttrs: false,
  });

  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-divider v-bind="$attrs" />
</template>

<style scoped lang="scss"></style>
