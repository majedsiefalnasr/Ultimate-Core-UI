<script setup lang="ts">
  /**
   * Extended UDatePickerYears component built on Vuetify's VDatePickerYears.
   * Inherits all VDatePickerYears props, slots, and emits.
   *
   * @component
   * @extends VDatePickerYears
   * @example
   * <UDatePicker v-model="date" />
   */
  import { VDatePickerYears } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePickerYears', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker-years v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker-years>
</template>

<style scoped lang="scss"></style>
