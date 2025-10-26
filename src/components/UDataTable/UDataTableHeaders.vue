<script setup lang="ts">
  /**
   * Extended UDataTableHeaders component built on Vuetify's VDataTableHeaders.
   * Inherits all VDataTableHeaders props, slots, and emits.
   *
   * @component
   * @extends VDataTableHeaders
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTableHeaders } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableHeaders', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-headers v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-headers>
</template>

<style scoped lang="scss"></style>
