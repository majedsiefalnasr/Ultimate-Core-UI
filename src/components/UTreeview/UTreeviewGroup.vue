<script setup lang="ts">
  /**
   * UTreeviewGroup - treeview component
   *
   * @component
   * @extends VTreeviewGroup
   */
  import { VTreeviewGroup } from 'vuetify/components';
  import './UTreeview.scss';

  // Component options
  defineOptions({ name: 'UTreeviewGroup', inheritAttrs: false });

  // Define slots with generic props
  defineSlots<{ [key: string]: (props: Record<string, unknown>) => unknown }>();
</script>

<template>
  <v-treeview-group v-bind="$attrs">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}" />
    </template>
  </v-treeview-group>
</template>

<style scoped lang="scss"></style>
