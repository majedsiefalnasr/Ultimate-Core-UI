<script setup lang="ts">
  /**
   * Extended UDatePickerMonth component built on Vuetify's VDatePickerMonth.
   * Inherits all VDatePickerMonth props, slots, and emits.
   *
   * @component
   * @extends VDatePicker
   */
  import { VDatePickerMonth } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePickerMonth', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker-month v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker-month>
</template>

<style scoped lang="scss"></style>
