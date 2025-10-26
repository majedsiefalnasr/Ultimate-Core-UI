<script setup lang="ts">
  /**
   * Extended UChipGroup component built on Vuetify's VChipGroup.
   * Inherits all VChipGroup props, slots, and emits.
   *
   * @component
   * @extends VChipGroup
   */
  // Import Vuetify's VChipGroup component (Base component)
  import { VChipGroup } from 'vuetify/components';
  import './UChipGroup.scss';

  // Component options
  defineOptions({ name: 'UChipGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-chip-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-chip-group>
</template>

<style scoped lang="scss"></style>
