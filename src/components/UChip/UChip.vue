<!-- snippet:UChip -->
<!-- <UChip>Label</UChip> -->

<script setup lang="ts">
  /**
   * Extended UChip component built on Vuetify's VChip.
   * Inherits all VChip props, slots, and emits.
   *
   * @component
   * @extends VChip
   * @example
   * <UChip color="primary">Chip</UChip>
   */
  // Import Vuetify's VChip component (Base component)
  import { VChip } from 'vuetify/components';
  // Import local styles
  import './UChip.scss';

  defineOptions({
    name: 'UChip',
    inheritAttrs: false,
  });

  // Define slots with proper typing
  defineSlots<{
    [key: string]: (props: Record<string, unknown>) => unknown;
  }>();
</script>

<template>
  <v-chip v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-chip>
</template>

<style scoped lang="scss"></style>
