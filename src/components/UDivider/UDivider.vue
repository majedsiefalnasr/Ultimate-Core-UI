<script setup lang="ts">
  /**
   * Extended UDivider component built on Vuetify's VDivider.
   * Inherits all VDivider props, slots, and emits.
   *
   * @component
   * @extends VDivider
   */
  import { VDivider } from 'vuetify/components';
  import './UDivider.scss';

  // Component options
  defineOptions({ name: 'UDivider', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-divider v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-divider>
</template>

<style scoped lang="scss"></style>
