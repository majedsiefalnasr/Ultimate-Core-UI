<script setup lang="ts">
  /**
   * Extended UDatePickerHeader component built on Vuetify's VDatePickerHeader.
   * Inherits all VDatePickerHeader props, slots, and emits.
   *
   * @component
   * @extends VDatePickerHeader
   */
  import { VDatePickerHeader } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePickerHeader', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker-header v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker-header>
</template>

<style scoped lang="scss"></style>
