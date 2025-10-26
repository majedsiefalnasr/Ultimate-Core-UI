<script setup lang="ts">
  /**
   * Extended UDatePicker component built on Vuetify's VDatePicker.
   * Inherits all VDatePicker props, slots, and emits.
   *
   * @component
   * @extends VDatePicker
   */
  import { VDatePicker } from 'vuetify/components';
  import './UDatePicker.scss';

  // Component options
  defineOptions({ name: 'UDatePicker', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-picker v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-picker>
</template>

<style scoped lang="scss"></style>
