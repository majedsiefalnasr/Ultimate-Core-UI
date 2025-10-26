<script setup lang="ts">
  /**
   * Extended UDataTableRow component built on Vuetify's VDataTableRow.
   * Inherits all VDataTableRow props, slots, and emits.
   *
   * @component
   * @extends VDataTableRow
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTableRow } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableRow', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-row v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-row>
</template>

<style scoped lang="scss"></style>
