<script setup lang="ts">
  /**
   * UTimePickerControls - time picker component
   *
   * @component
   * @extends VTimePickerControls
   */
  import { VTimePickerControls } from 'vuetify/components';
  import './UTimePicker.scss';

  // Component options
  defineOptions({ name: 'UTimePickerControls', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-time-picker-controls v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-time-picker-controls>
</template>

<style scoped lang="scss"></style>
