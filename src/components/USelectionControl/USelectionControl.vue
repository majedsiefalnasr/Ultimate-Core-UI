<script setup lang="ts">
  /**
   * USelectionControl - responsive container helper
   *
   * @component
   * @extends VSelectionControl
   */
  import { VSelectionControl } from 'vuetify/components';
  import './USelectionControl.scss';

  // Component options
  defineOptions({ name: 'USelectionControl', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-selection-control v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-selection-control>
</template>

<style scoped lang="scss"></style>
