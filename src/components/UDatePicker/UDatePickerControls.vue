<script setup lang="ts">
  /**
   * Extended UDatePickerControls component built on Vuetify's VDatePickerControls.
   * Inherits all VDatePickerControls props, slots, and emits.
   *
   * @component
   * @extends VDatePickerControls
   */
  import { VDatePickerControls } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePickerControls', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker-controls v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker-controls>
</template>

<style scoped lang="scss"></style>
