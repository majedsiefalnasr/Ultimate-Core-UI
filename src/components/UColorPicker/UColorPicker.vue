<script setup lang="ts">
  /**
   * Extended UColorPicker component built on Vuetify's VColorPicker.
   * Inherits all VColorPicker props, slots, and emits.
   *
   * @component
   * @extends VColorPicker
   */
  // Import Vuetify's VColorPicker component (Base component)
  import { VColorPicker } from 'vuetify/components';
  import './UColorPicker.scss';

  // Component options
  defineOptions({ name: 'UColorPicker', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-color-picker v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-color-picker>
</template>

<style scoped lang="scss"></style>
