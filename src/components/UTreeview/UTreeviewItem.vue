<script setup lang="ts">
  /**
   * UTreeviewItem - treeview component
   *
   * @component
   * @extends VTreeviewItem
   */
  import { VTreeviewItem } from 'vuetify/components';
  import './UTreeview.scss';

  // Component options
  defineOptions({ name: 'UTreeviewItem', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-treeview-item v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-treeview-item>
</template>

<style scoped lang="scss"></style>
