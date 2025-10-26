<script setup lang="ts">
  /**
   * UTable - table component
   *
   * @component
   * @extends VTable
   */
  import { VTable } from 'vuetify/components';
  import './UTable.scss';

  // Component options
  defineOptions({ name: 'UTable', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-table v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-table>
</template>

<style scoped lang="scss"></style>
