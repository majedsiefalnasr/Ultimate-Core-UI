<script setup lang="ts">
  /**
   * Extended UFileUpload component built on Vuetify's VFileInput.
   * Inherits all VFileInput props, slots, and emits.
   *
   * @component
   * @extends VFileInput
   */
  // Import Vuetify's VFileInput component (Base component)
  import { VFileInput } from 'vuetify/components';
  // Import local styles
  import './UFileUpload.scss';

  // Define component options
  defineOptions({ name: 'UFileUpload', inheritAttrs: false });

  // Define slots with proper typing
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-file-input v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-file-input>
</template>

<style scoped lang="scss"></style>
