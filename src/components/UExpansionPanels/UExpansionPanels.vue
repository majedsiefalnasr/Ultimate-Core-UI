<script setup lang="ts">
  /**
   * Extended UExpansionPanels component built on Vuetify's VExpansionPanels.
   * Inherits all VExpansionPanels props, slots, and emits.
   *
   * @component
   * @extends VExpansionPanels
   */
  import { VExpansionPanels } from 'vuetify/components';
  import './UExpansionPanels.scss';

  // Component options
  defineOptions({ name: 'UExpansionPanels', inheritAttrs: false });

  // Define generic slots typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-expansion-panels v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-expansion-panels>
</template>

<style scoped lang="scss"></style>
