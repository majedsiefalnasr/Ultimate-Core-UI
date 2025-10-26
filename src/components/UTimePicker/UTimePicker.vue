<script setup lang="ts">
  /**
   * UTimePicker - time picker component
   *
   * @component
   * @extends VTimePicker
   */
  import { VTimePicker } from 'vuetify/components';
  import './UTimePicker.scss';

  // Component options
  defineOptions({ name: 'UTimePicker', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-time-picker v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-time-picker>
</template>

<style scoped lang="scss"></style>
