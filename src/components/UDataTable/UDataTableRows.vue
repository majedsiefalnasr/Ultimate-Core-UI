<script setup lang="ts">
  /**
   * Extended UDataTableRows component built on Vuetify's VDataTableRows.
   * Inherits all VDataTableRows props, slots, and emits.
   *
   * @component
   * @extends VDataTableRows
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTableRows } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableRows', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-rows v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-rows>
</template>

<style scoped lang="scss"></style>
