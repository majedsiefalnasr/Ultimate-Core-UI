<script setup lang="ts">
  /**
   * Extended UColorInput component built on Vuetify's VColorPicker.
   * Inherits all VColorPicker props, slots, and emits.
   *
   * @component
   * @extends VColorInput
   */
  // Import Vuetify's VColorInput component (Base component)
  import { VColorInput } from 'vuetify/labs/VColorInput';
  // Import local styles
  import './UColorInput.scss';

  // Define component options
  defineOptions({ name: 'UColorInput', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-color-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-color-input>
</template>

<style scoped lang="scss"></style>
