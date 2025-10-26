<script setup lang="ts">
  /**
   * Extended UExpansionPanelTitle component built on Vuetify's VExpansionPanelTitle.
   * Inherits all VExpansionPanelTitle props, slots, and emits.
   *
   * @component
   * @extends VExpansionPanelTitle
   */
  import { VExpansionPanelTitle } from 'vuetify/components';
  import './UExpansionPanels.scss';

  // Component options
  defineOptions({ name: 'UExpansionPanelTitle', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-expansion-panel-title v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-expansion-panel-title>
</template>

<style scoped lang="scss"></style>
