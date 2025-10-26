<script setup lang="ts">
  /**
   * Extended UDatePickerMonths component built on Vuetify's VDatePickerMonths.
   * Inherits all VDatePickerMonths props, slots, and emits.
   *
   * @component
   * @extends VDatePickerMonths
   */
  import { VDatePickerMonths } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePickerMonths', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker-months v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker-months>
</template>

<style scoped lang="scss"></style>
