<script setup lang="ts">
  /**
   * Extended UDateInput component built on Vuetify's VDateInput.
   * Inherits all VDateInput props, slots, and emits.
   *
   * @component
   * @extends VDateInput
   */
  // Import Vuetify's VDateInput component (Base component)
  import { VDateInput } from 'vuetify/labs/VDateInput';
  // Import local styles
  import './UDateInput.scss';

  // Define component options
  defineOptions({ name: 'UDateInput', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-date-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-date-input>
</template>

<style scoped lang="scss"></style>
