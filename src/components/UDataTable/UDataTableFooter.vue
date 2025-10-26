<script setup lang="ts">
  /**
   * Extended UDataTableFooter component built on Vuetify's VDataTableFooter.
   * Inherits all VDataTableFooter props, slots, and emits.
   *
   * @component
   * @extends VDataTableFooter
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTableFooter } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableFooter', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-footer v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-footer>
</template>

<style scoped lang="scss"></style>
