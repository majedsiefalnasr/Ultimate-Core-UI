<script setup lang="ts">
  /**
   * Extended UMaskInput component built on Vuetify's VMaskInput.
   * Inherits all VMaskInput props, slots, and emits.
   * Specifically designed for masked input fields.
   *
   * @component
   * @extends VMaskInput
   */
  // Import Vuetify's VMaskInput component (Base component)
  import { VMaskInput } from 'vuetify/labs/VMaskInput';
  // Import local styles
  import './UMaskInput.scss';

  // Define component options
  defineOptions({ name: 'UMaskInput', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-mask-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-mask-input>
</template>

<style scoped lang="scss"></style>
