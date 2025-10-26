<script setup lang="ts">
  /**
   * Extended UDataTableVirtual component built on Vuetify's VDataTableVirtual.
   * Inherits all VDataTableVirtual props, slots, and emits.
   *
   * @component
   * @extends VDataTableVirtual
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTableVirtual } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTableVirtual', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table-virtual v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table-virtual>
</template>

<style scoped lang="scss"></style>
