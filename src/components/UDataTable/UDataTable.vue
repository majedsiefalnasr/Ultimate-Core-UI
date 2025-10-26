<script setup lang="ts">
  /**
   * Extended UDataTable component built on Vuetify's VDataTable.
   * Inherits all VDataTable props, slots, and emits.
   *
   * @component
   * @extends VDataTable
   */
  // Import Vuetify's VDataTable component (Base component)
  import { VDataTable } from 'vuetify/components';
  import './UDataTable.scss';

  // Component options
  defineOptions({ name: 'UDataTable', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-data-table v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-data-table>
</template>

<style scoped lang="scss"></style>
