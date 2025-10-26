<script setup lang="ts">
  /**
   * Extended UExpansionPanelText component built on Vuetify's VExpansionPanelText.
   * Inherits all VExpansionPanelText props, slots, and emits.
   *
   * @component
   * @extends VExpansionPanelText
   */
  import { VExpansionPanelText } from 'vuetify/components';
  import './UExpansionPanels.scss';

  // Component options
  defineOptions({ name: 'UExpansionPanelText', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-expansion-panel-text v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-expansion-panel-text>
</template>

<style scoped lang="scss"></style>
