<!-- snippet:UBottomSheet -->
<!-- <UBottomSheet model-value v-model:open="isOpen">Content</UBottomSheet> -->

<script setup lang="ts">
  /**
   * Extended UBottomSheet component built on Vuetify's VBottomSheet.
   * Inherits all VBottomSheet props, slots, and emits.
   *
   * @component
   * @extends VBottomSheet
   * @example
   * <UBottomSheet v-model:open="show">Content</UBottomSheet>
   */
  // Import Vuetify's VBottomSheet component (Base component)
  import { VBottomSheet } from 'vuetify/components';
  // Import local styles
  import './UBottomSheet.scss';

  defineOptions({
    name: 'UBottomSheet',
    inheritAttrs: false,
  });
</script>

<template>
  <v-bottom-sheet v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name as string" v-bind="slotData || {}" />
    </template>
  </v-bottom-sheet>
</template>

<style scoped lang="scss"></style>
